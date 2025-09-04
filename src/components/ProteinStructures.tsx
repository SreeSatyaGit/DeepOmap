'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Interface for protein component props
interface ProteinProps {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
  color: string;
}

// Three distinct protein structure components
// Each with a unique shape to differentiate from cells

// Protein Type 1: Receptor protein with octahedron center and prism protrusions
export const ReceptorProtein = ({ position, rotation, scale, color }: ProteinProps) => {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      // Rotate the protein to show activity
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.007;
    }
  });
  
  return (
    <group ref={meshRef} position={position} rotation={rotation} scale={scale}>
      {/* Center octahedron */}
      <mesh>
        <octahedronGeometry args={[0.3, 0]} />
        <meshStandardMaterial 
          color={color} 
          emissive={color} 
          emissiveIntensity={0.3}
          roughness={0.4}
        />
      </mesh>
      
      {/* Extending triangular prism receptor sites */}
      {Array.from({ length: 6 }).map((_, i) => {
        const angle = (i / 6) * Math.PI * 2;
        const x = Math.sin(angle) * 0.4;
        const z = Math.cos(angle) * 0.4;
        
        return (
          <mesh key={i} position={[x, 0, z]} rotation={[0, angle, Math.PI / 2]}>
            <cylinderGeometry args={[0, 0.15, 0.4, 3, 1]} />
            <meshStandardMaterial 
              color={color} 
              emissive={color}
              emissiveIntensity={0.3}
            />
          </mesh>
        );
      })}
    </group>
  );
};

// Protein Type 2: Enzyme-like structure with cube and tetrahedron components
export const EnzymeProtein = ({ position, rotation, scale, color }: ProteinProps) => {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      // Wobble motion typical of enzymes
      const time = state.clock.getElapsedTime();
      meshRef.current.rotation.x = Math.sin(time * 0.5) * 0.1 + rotation[0];
      meshRef.current.rotation.z = Math.sin(time * 0.3) * 0.1 + rotation[2];
    }
  });
  
  return (
    <group ref={meshRef} position={position} rotation={rotation} scale={scale}>
      {/* Main body - cube */}
      <mesh>
        <boxGeometry args={[0.5, 0.3, 0.3]} />
        <meshStandardMaterial 
          color={color} 
          emissive={color}
          emissiveIntensity={0.2}
          roughness={0.6}
        />
      </mesh>
      
      {/* Active site - tetrahedron */}
      <mesh position={[0, 0.25, 0]} rotation={[0, Math.PI/4, 0]}>
        <tetrahedronGeometry args={[0.2, 0]} />
        <meshStandardMaterial 
          color={color} 
          emissive={color}
          emissiveIntensity={0.4}
          roughness={0.3}
        />
      </mesh>
      
      {/* Secondary domains - dodecahedrons */}
      <mesh position={[0.3, -0.1, 0]}>
        <dodecahedronGeometry args={[0.15, 0]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <mesh position={[-0.3, -0.1, 0]}>
        <dodecahedronGeometry args={[0.15, 0]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </group>
  );
};

// Protein Type 3: Channel/transporter protein with torus and prisms
export const TransporterProtein = ({ position, rotation, scale, color }: ProteinProps) => {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      // Subtle pulsing/transport motion
      const time = state.clock.getElapsedTime();
      const pulse = 1 + Math.sin(time * 2) * 0.05;
      meshRef.current.scale.set(scale * pulse, scale, scale * pulse);
    }
  });
  
  return (
    <group ref={meshRef} position={position} rotation={rotation} scale={scale}>
      {/* Outer ring - torus knot for complexity */}
      <mesh rotation={[Math.PI/2, 0, 0]}>
        <torusKnotGeometry args={[0.3, 0.08, 64, 8, 2, 3]} />
        <meshStandardMaterial 
          color={color} 
          emissive={color}
          emissiveIntensity={0.3}
          metalness={0.3}
        />
      </mesh>
      
      {/* Inner components - triangular prisms */}
      {Array.from({ length: 4 }).map((_, i) => {
        const angle = (i / 4) * Math.PI * 2;
        const x = Math.sin(angle) * 0.15;
        const z = Math.cos(angle) * 0.15;
        
        return (
          <mesh key={i} position={[x, 0, z]} rotation={[0, angle, 0]}>
            <polyhedronGeometry args={[
              // Vertices of a triangular prism
              [
                0, 0.1, 0,    // Top point
                0.08, -0.1, 0.08,  // Bottom points
                -0.08, -0.1, 0.08,
                0, -0.1, -0.08
              ],
              // Faces as triangles
              [
                0, 1, 2,  // Side faces
                0, 2, 3,
                0, 3, 1,
                1, 3, 2   // Bottom face
              ],
              0.2, 0  // Radius and detail
            ]} />
            <meshStandardMaterial color={color} />
          </mesh>
        );
      })}
    </group>
  );
};
