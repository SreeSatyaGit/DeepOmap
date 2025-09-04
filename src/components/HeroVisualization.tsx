'use client';

import { useRef, useMemo, useCallback } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Line } from '@react-three/drei';
import * as THREE from 'three';

// Cell colors - limited to 5 distinct colors
const cellColors = [
  '#38BDF8', // Sky Blue
  '#0EA5E9', // Bright Blue
  '#8B5CF6', // Violet
  '#4ADE80', // Bright Green
  '#2DD4BF'  // Teal
];

// Helper function to smoothly transition between colors
const lerpColor = (a: string, b: string, t: number): string => {
  const colorA = new THREE.Color(a);
  const colorB = new THREE.Color(b);
  const lerpedColor = colorA.lerp(colorB, t);
  return '#' + lerpedColor.getHexString();
};

// Type definitions
interface AnimatedSphereProps {
  position: [number, number, number];
  color: string;
  speed: number;
  scale: number;
  index: number;
  updatePosition?: (index: number, position: [number, number, number]) => void;
}

// Animated Sphere component
const AnimatedSphere = ({ position, color, speed, scale, index, updatePosition }: AnimatedSphereProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialPosition = useRef<[number, number, number]>([...position]);
  const targetColor = useRef<string>(color);
  const currentColor = useRef<string>(color);
  const colorChangeTime = useRef<number>(Math.random() * 5);
  const currentPosition = useRef<[number, number, number]>([...position]);
  
  // Animate the sphere with more complex movement and dramatic color changes
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const elapsedTime = time * speed;
    
    if (meshRef.current) {
      // More dynamic movement in all directions
      meshRef.current.position.x = initialPosition.current[0] + Math.sin(elapsedTime * 0.7) * 1.5;
      meshRef.current.position.y = initialPosition.current[1] + Math.sin(elapsedTime * 0.5) * 1.2;
      meshRef.current.position.z = initialPosition.current[2] + Math.cos(elapsedTime * 0.3) * 1.8;
      
      // Update current position reference for edge connections
      currentPosition.current = [
        meshRef.current.position.x,
        meshRef.current.position.y,
        meshRef.current.position.z
      ];
      
      // Report position back to parent for edge connections
      if (updatePosition) {
        updatePosition(index, currentPosition.current);
      }
      
      // Dynamic rotation
      meshRef.current.rotation.x = elapsedTime * 0.3;
      meshRef.current.rotation.y = elapsedTime * 0.2;
      meshRef.current.rotation.z = elapsedTime * 0.1;
      
      // Change scale slightly for "breathing" effect
      const scalePulse = 1 + Math.sin(elapsedTime * 0.8) * 0.1;
      meshRef.current.scale.set(scale * scalePulse, scale * scalePulse, scale * scalePulse);
      
      // More frequent color changes to show active "communication"
      if (time > colorChangeTime.current) {
        // More frequent changes - next change in 1-3 seconds with fewer cells
        colorChangeTime.current = time + 0.8 + Math.random() * 2.2;
        
        // Select from limited cell color palette
        targetColor.current = cellColors[Math.floor(Math.random() * cellColors.length)];
        
        // Emit a stronger "signal" by increasing emissive intensity with fewer cells
        if (meshRef.current.material instanceof THREE.MeshStandardMaterial) {
          const material = meshRef.current.material;
          material.emissiveIntensity = 1.2;
          // Will decay back to normal in the update loop below
        }
      }
      
      // Smooth color transition
      if (meshRef.current.material instanceof THREE.MeshStandardMaterial) {
        const material = meshRef.current.material;
        currentColor.current = lerpColor(currentColor.current, targetColor.current, 0.08); // Faster transitions
        material.color.set(currentColor.current);
        material.emissive.set(currentColor.current);
        
        // Decay emissive intensity back to normal
        if (material.emissiveIntensity > 0.3) {
          material.emissiveIntensity *= 0.95;
        }
      }
    }
  });

  return (
    <Sphere 
      ref={meshRef} 
      args={[1, 64, 64]} 
      position={position}
      scale={scale}
    >
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={0.4}
        speed={2.0}
        roughness={0.3}
        metalness={0.1}
        clearcoat={0.3}
        clearcoatRoughness={0.25}
        opacity={0.8}
        transparent
      />
    </Sphere>
  );
};

// Edge component to connect two cells
interface EdgeProps {
  start: [number, number, number];
  end: [number, number, number];
  color: string;
  opacity?: number;
}

const Edge = ({ start, end, color, opacity = 0.6 }: EdgeProps) => {
  return (
    <Line
      points={[start, end]}
      color={color}
      lineWidth={1.2} // Slightly thinner lines since we have many more of them
      opacity={opacity}
      transparent
      dashed={false}
    />
  );
};

interface FloatingCellsProps {
  count?: number;
}

// Floating cells with network connections
const FloatingCells = ({ count = 8 }: FloatingCellsProps) => {
  // Generate cells with random positions, but distributed more evenly around the space
  const cells = useMemo(() => 
    Array.from({ length: count }).map((_, index) => {
      // Use the index to help distribute cells more evenly with fewer cells
      const phi = Math.acos(-1 + (2 * index) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      
      // Add some randomness to the distribution
      return {
        position: [
          (Math.cos(theta) * Math.sin(phi) * 8) + (Math.random() - 0.5) * 5,
          (Math.sin(theta) * Math.sin(phi) * 7) + (Math.random() - 0.5) * 5,
          (Math.cos(phi) * 8) + (Math.random() - 0.5) * 5
        ] as [number, number, number],
        scale: 0.3 + Math.random() * 0.35, // Even larger with fewer cells for better visibility
        speed: 0.15 + Math.random() * 0.4,
        color: cellColors[Math.floor(Math.random() * cellColors.length)]
      };
    }),
  [count]);

  // Track real-time positions of each cell
  const cellPositions = useRef<[number, number, number][]>(
    cells.map(cell => [...cell.position])
  );
  
  // The edgeRef allows us to update edges in the render loop
  const edgesRef = useRef<EdgeProps[]>([]);
  
  // Update cell position tracker
  const updateCellPosition = useCallback((index: number, position: [number, number, number]) => {
    cellPositions.current[index] = position;
  }, []);
  
  // Connection colors - more subtle palette for the many connections
  const connectionColors = useMemo(() => [
    '#38BDF8', // Sky blue
    '#0EA5E9', // Bright blue 
    '#2DD4BF', // Teal
    '#A78BFA', // Medium purple
    '#94A3B8'  // Slate gray (more subtle)
  ], []);
  
  // Dynamic edges that update based on cell positions in real-time
  useFrame(() => {
    const connections: EdgeProps[] = [];
    
    // Connect each cell with every other cell using their current actual positions
    for (let i = 0; i < cellPositions.current.length; i++) {
      // Use the actual current position of the first cell
      const [x1, y1, z1] = cellPositions.current[i];
      
      // Connect to all other cells
      for (let j = 0; j < cellPositions.current.length; j++) {
        // Skip self-connections
        if (i === j) continue;
        
        // Use the actual current position of the second cell
        const [x2, y2, z2] = cellPositions.current[j];
        
        // Calculate distance between current positions
        const distance = Math.sqrt(
          Math.pow(x1 - x2, 2) +
          Math.pow(y1 - y2, 2) +
          Math.pow(z1 - z2, 2)
        );
        
        // Calculate opacity based on distance (closer = more visible)
        // Using a steeper falloff to ensure distant connections are very faint
        const maxOpacity = 0.7;
        const minOpacity = 0.05;
        const opacity = Math.max(
          minOpacity, 
          maxOpacity - (distance / 20) * 0.65
        );
        
        // Color based on the connected cells' colors
        const connectionColorIndex = (i + j) % connectionColors.length;
        const connectionColor = connectionColors[connectionColorIndex];
        
        connections.push({
          start: [x1, y1, z1] as [number, number, number],
          end: [x2, y2, z2] as [number, number, number],
          color: connectionColor,
          opacity: opacity
        });
      }
    }
    
    edgesRef.current = connections;
  });

  return (
    <group>
      {/* Render all cells */}
      {cells.map((cell, index) => (
        <AnimatedSphere 
          key={`cell-${index}`}
          position={cell.position}
          color={cell.color}
          speed={cell.speed}
          scale={cell.scale}
          index={index}
          updatePosition={updateCellPosition}
        />
      ))}
      
      {/* Render dynamic edges between cells */}
      {edgesRef.current.map((edge, index) => (
        <Edge
          key={`edge-${index}`}
          start={edge.start}
          end={edge.end}
          color={edge.color}
          opacity={edge.opacity}
        />
      ))}
    </group>
  );
};

export default function HeroVisualization() {
  return (
    <Canvas 
      camera={{ position: [0, 1, 14], fov: 50 }} 
      className="w-full h-full absolute top-0 left-0 z-[-1]"
      dpr={[1, 2]}
      gl={{ 
        antialias: true,
        alpha: true,
        powerPreference: "high-performance"
      }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={0.7} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#E0FFFF" />
      <spotLight position={[0, 10, 0]} intensity={0.2} color="#7DF9FF" angle={0.6} penumbra={1} />
      
      {/* Floating cells with network connections */}
      <FloatingCells count={10} />
      
      {/* Background sphere */}
      <Sphere args={[30, 32, 32]} position={[0, 0, -15]}>
        <meshBasicMaterial color="#ffffff" side={THREE.BackSide} />
      </Sphere>
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        rotateSpeed={0.5}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
}
