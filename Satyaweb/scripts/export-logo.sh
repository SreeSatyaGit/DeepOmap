#!/bin/bash

# This script exports the DeepOmap logo as a PNG file using CairoSVG
# Make sure to have cairosvg installed: pip install cairosvg

# Create a temporary SVG file with the logo
cat > /tmp/deepomap-logo.svg << 'EOL'
<svg 
  width="500" 
  height="500" 
  viewBox="0 0 100 100" 
  fill="none" 
  xmlns="http://www.w3.org/2000/svg"
  style="filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.2)); transform: scale(1.05)"
>
  <!-- Spherical data network structure - main outline -->
  <path 
    d="M50,10
    C65,10 75,15 82,25
    C89,35 92,45 90,60
    C88,75 80,85 65,90
    C50,95 35,90 25,80
    C15,70 10,55 15,40
    C20,25 35,10 50,10"
    fill="url(#sphereGradient)" 
    opacity="0.9"
  />
  
  <!-- Secondary semi-transparent overlay for depth -->
  <path 
    d="M48,15
    C62,15 70,20 77,28
    C84,36 87,45 85,58
    C83,71 75,80 62,85
    C49,90 35,85 26,77
    C17,69 13,56 17,43
    C21,30 34,15 48,15"
    fill="url(#overlayGradient)" 
    opacity="0.4"
  />
  
  <!-- Data network nodes structure -->
  <g>
    <!-- Central hub -->
    <circle cx="50" cy="50" r="9" fill="url(#coreGradient)" filter="url(#glowFilter)" />
    
    <!-- Primary nodes - larger and more prominent -->
    <circle cx="35" cy="32" r="5" fill="url(#primaryNodeGradient)" opacity="0.9" filter="url(#glowFilter)" />
    <circle cx="70" cy="38" r="5.5" fill="url(#primaryNodeGradient)" opacity="0.9" filter="url(#glowFilter)" />
    <circle cx="62" cy="72" r="5" fill="url(#primaryNodeGradient)" opacity="0.9" filter="url(#glowFilter)" />
    <circle cx="28" cy="65" r="4.5" fill="url(#primaryNodeGradient)" opacity="0.9" filter="url(#glowFilter)" />
    <circle cx="44" cy="80" r="4" fill="url(#primaryNodeGradient)" opacity="0.8" filter="url(#glowFilter)" />
    <circle cx="32" cy="20" r="3.5" fill="url(#primaryNodeGradient)" opacity="0.8" filter="url(#glowFilter)" />
    <circle cx="76" cy="55" r="4" fill="url(#primaryNodeGradient)" opacity="0.8" filter="url(#glowFilter)" />
    
    <!-- Secondary nodes - smaller with varied opacity -->
    <circle cx="58" cy="25" r="2.5" fill="white" opacity="0.7" />
    <circle cx="25" cy="45" r="2.2" fill="white" opacity="0.8" />
    <circle cx="42" cy="65" r="2.8" fill="white" opacity="0.75" />
    <circle cx="62" cy="53" r="2" fill="white" opacity="0.7" />
    <circle cx="80" cy="32" r="1.8" fill="white" opacity="0.65" />
    <circle cx="15" cy="55" r="1.5" fill="white" opacity="0.6" />
    <circle cx="55" cy="85" r="2" fill="white" opacity="0.55" />
    <circle cx="80" cy="70" r="1.7" fill="white" opacity="0.5" />
    <circle cx="20" cy="30" r="1.9" fill="white" opacity="0.65" />
  </g>
  
  <!-- Data network connections -->
  <g>
    <!-- Main connections from core hub -->
    <line x1="50" y1="50" x2="35" y2="32" stroke="white" stroke-width="1.2" opacity="0.7" />
    <line x1="50" y1="50" x2="70" y2="38" stroke="white" stroke-width="1.2" opacity="0.7" />
    <line x1="50" y1="50" x2="62" y2="72" stroke="white" stroke-width="1.2" opacity="0.7" />
    <line x1="50" y1="50" x2="28" y2="65" stroke="white" stroke-width="1.2" opacity="0.7" />
    <line x1="50" y1="50" x2="44" y2="80" stroke="white" stroke-width="1.2" opacity="0.7" />
    <line x1="50" y1="50" x2="32" y2="20" stroke="white" stroke-width="1.2" opacity="0.6" />
    <line x1="50" y1="50" x2="76" y2="55" stroke="white" stroke-width="1.2" opacity="0.7" />
    
    <!-- Secondary network connections between nodes -->
    <line x1="35" y1="32" x2="58" y2="25" stroke="white" stroke-width="0.9" opacity="0.5" />
    <line x1="58" y1="25" x2="70" y2="38" stroke="white" stroke-width="0.9" opacity="0.5" />
    <line x1="70" y1="38" x2="62" y2="53" stroke="white" stroke-width="0.9" opacity="0.5" />
    <line x1="62" y1="53" x2="62" y2="72" stroke="white" stroke-width="0.9" opacity="0.5" />
    <line x1="62" y1="72" x2="42" y2="65" stroke="white" stroke-width="0.9" opacity="0.5" />
    <line x1="42" y1="65" x2="44" y2="80" stroke="white" stroke-width="0.9" opacity="0.5" />
    <line x1="44" y1="80" x2="28" y2="65" stroke="white" stroke-width="0.9" opacity="0.5" />
    <line x1="28" y1="65" x2="25" y2="45" stroke="white" stroke-width="0.9" opacity="0.5" />
    <line x1="25" y1="45" x2="35" y2="32" stroke="white" stroke-width="0.9" opacity="0.5" />
    <line x1="32" y1="20" x2="20" y2="30" stroke="white" stroke-width="0.8" opacity="0.4" />
    <line x1="80" y1="32" x2="76" y2="55" stroke="white" stroke-width="0.8" opacity="0.4" />
    <line x1="76" y1="55" x2="80" y2="70" stroke="white" stroke-width="0.8" opacity="0.4" />
    
    <!-- Data flow paths -->
    <path 
      d="M35 32 Q 42 28, 58 25" 
      stroke="rgba(255,255,255,0.4)" 
      stroke-width="0.8" 
      stroke-dasharray="1,2"
      fill="none"
    />
    <path 
      d="M70 38 Q 75 45, 76 55" 
      stroke="rgba(255,255,255,0.4)" 
      stroke-width="0.8" 
      stroke-dasharray="1,2"
      fill="none"
    />
    <path 
      d="M62 72 Q 55 78, 44 80" 
      stroke="rgba(255,255,255,0.4)" 
      stroke-width="0.8" 
      stroke-dasharray="1,2"
      fill="none"
    />
  </g>
  
  <!-- Data flow direction indicators -->
  <g>
    <path 
      d="M52 22 L49 18 L55 18 Z" 
      fill="white" 
      opacity="0.5" 
    />
    <path 
      d="M78 50 L82 47 L82 53 Z" 
      fill="white" 
      opacity="0.5" 
    />
    <path 
      d="M50 82 L53 86 L47 86 Z" 
      fill="white" 
      opacity="0.5" 
    />
    <path 
      d="M22 50 L18 53 L18 47 Z" 
      fill="white" 
      opacity="0.5" 
    />
  </g>
  
  <!-- Network boundary - rotating outer ring -->
  <path 
    d="M50,15
    C60,15 70,20 77,30
    C84,40 88,52 85,65
    C82,78 70,85 58,85
    C45,85 35,80 28,70
    C21,60 18,45 25,35
    C32,25 40,15 50,15" 
    stroke="url(#outerRingGradient)" 
    stroke-width="1" 
    stroke-dasharray="2,4" 
    fill="none" 
    opacity="0.6" 
    filter="url(#glowFilter)"
  />
  
  <!-- Spark effects at key data points -->
  <circle cx="58" cy="25" r="1.2" fill="white" opacity="0.9" filter="url(#sparkGlow)" />
  <circle cx="76" cy="55" r="1.3" fill="white" opacity="0.9" filter="url(#sparkGlow)" />
  <circle cx="44" cy="80" r="1.1" fill="white" opacity="0.9" filter="url(#sparkGlow)" />
  <circle cx="25" cy="45" r="1.2" fill="white" opacity="0.9" filter="url(#sparkGlow)" />
  
  <!-- Enhanced gradient definitions -->
  <defs>
    <!-- Main sphere gradient - smooth blue transitions -->
    <linearGradient id="sphereGradient" x1="20%" y1="15%" x2="80%" y2="85%">
      <stop offset="0%" stop-color="#3B82F6" />
      <stop offset="25%" stop-color="#2563EB" />
      <stop offset="50%" stop-color="#1D4ED8" />
      <stop offset="75%" stop-color="#1E40AF" />
      <stop offset="100%" stop-color="#1E3A8A" />
    </linearGradient>
    
    <!-- Overlay gradient for sphere depth -->
    <linearGradient id="overlayGradient" x1="30%" y1="10%" x2="70%" y2="90%">
      <stop offset="0%" stop-color="#60A5FA" stop-opacity="0.5" />
      <stop offset="50%" stop-color="#3B82F6" stop-opacity="0.3" />
      <stop offset="100%" stop-color="#2563EB" stop-opacity="0.4" />
    </linearGradient>
    
    <!-- Core node gradient -->
    <radialGradient id="coreGradient" cx="40%" cy="40%" r="70%" fx="30%" fy="30%">
      <stop offset="0%" stop-color="#BFDBFE" />
      <stop offset="40%" stop-color="#60A5FA" />
      <stop offset="70%" stop-color="#3B82F6" />
      <stop offset="100%" stop-color="#2563EB" />
    </radialGradient>
    
    <!-- Primary nodes gradient -->
    <radialGradient id="primaryNodeGradient" cx="45%" cy="45%" r="65%" fx="35%" fy="35%">
      <stop offset="0%" stop-color="#93C5FD" />
      <stop offset="50%" stop-color="#60A5FA" />
      <stop offset="100%" stop-color="#3B82F6" />
    </radialGradient>
    
    <!-- Outer ring gradient -->
    <linearGradient id="outerRingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#BFDBFE" />
      <stop offset="50%" stop-color="#60A5FA" />
      <stop offset="100%" stop-color="#2563EB" />
    </linearGradient>
    
    <!-- Enhanced glow filter -->
    <filter id="glowFilter" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="1.5" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
    
    <!-- Spark glow effect -->
    <filter id="sparkGlow" x="-100%" y="-100%" width="300%" height="300%">
      <feGaussianBlur stdDeviation="2" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>
</svg>
EOL

# Create logo directory if it doesn't exist
mkdir -p public/logo

# Check if cairosvg is installed
if command -v cairosvg &> /dev/null; then
    echo "Exporting logo using CairoSVG..."
    cairosvg /tmp/deepomap-logo.svg -o public/logo/DeepOmapLogo-Network-Static.png -d 300
    echo "Logo exported to public/logo/DeepOmapLogo-Network-Static.png"
else
    # Alternative using rsvg-convert if available
    if command -v rsvg-convert &> /dev/null; then
        echo "Exporting logo using rsvg-convert..."
        rsvg-convert -w 1000 -h 1000 /tmp/deepomap-logo.svg > public/logo/DeepOmapLogo-Network-Static.png
        echo "Logo exported to public/logo/DeepOmapLogo-Network-Static.png"
    else
        echo "Error: Neither CairoSVG nor rsvg-convert is installed."
        echo "Please install one of these packages:"
        echo "  - For CairoSVG: pip install cairosvg"
        echo "  - For rsvg-convert: brew install librsvg (macOS) or apt-get install librsvg2-bin (Linux)"
    fi
fi

# Clean up
rm /tmp/deepomap-logo.svg
