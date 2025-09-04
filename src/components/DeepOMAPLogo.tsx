import React from 'react';

interface DeepOMAPLogoProps {
  size?: number;
  className?: string;
}

const DeepOMAPLogo: React.FC<DeepOMAPLogoProps> = ({ size = 48, className = "" }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} logo-high-quality`}
      style={{ 
        filter: 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.2))',
        transform: 'scale(1.05)'
      }}
      shapeRendering="geometricPrecision"
    >
      {/* Cancer cell shaped background with irregular edges */}
      <path 
        d="M50,5 
        C60,5 70,8 78,15 
        C85,20 91,25 94,35
        C97,40 99,47 95,55
        C99,65 97,73 92,82
        C87,90 80,96 70,95
        C65,99 55,97 48,95
        C40,98 30,96 22,90
        C14,85 7,78 5,68
        C3,60 2,50 5,42
        C2,35 5,25 10,18
        C15,12 23,5 35,5
        C40,3 45,5 50,5" 
        fill="url(#bgGradient)" 
      />
      
      {/* Subtle glow effect following the cancer cell shape */}
      <path 
        d="M50,8 
        C59,8 68,10 75,16 
        C82,21 87,25 90,34
        C93,39 94,45 91,52
        C94,61 93,68 89,76
        C85,83 79,88 70,88
        C66,91 57,90 51,88
        C44,90 35,89 28,84
        C21,80 15,74 13,65
        C12,58 10,49 13,42
        C10,36 13,28 17,22
        C21,17 28,11 38,10
        C42,8 46,8 50,8" 
        stroke="rgba(255, 255, 255, 0.3)" 
        strokeWidth="2" 
        fill="none" 
      />
      
      {/* Cell trajectory path with improved rendering */}
      <path 
        d="M30 50 Q 40 25, 50 50 Q 60 75, 70 50" 
        stroke="white" 
        strokeWidth="3" 
        fill="none"
        strokeLinecap="round" 
        strokeDasharray="1,3"
        opacity="0.8"
        className="animate-pulse-soft"
      />
      
      {/* Cellular organelles and structures */}
      <path
        d="M32,38 C35,36 38,38 36,40 C34,42 30,40 32,38"
        fill="rgba(255,255,255,0.4)"
      />
      <path
        d="M66,62 C70,60 72,63 70,66 C67,68 63,64 66,62"
        fill="rgba(255,255,255,0.4)"
      />
      <path
        d="M58,36 C60,33 64,34 63,38 C61,41 56,39 58,36"
        fill="rgba(255,255,255,0.3)"
      />
      
      {/* Cell states (before treatment) - enhanced */}
      <circle cx="30" cy="50" r="5" fill="#ffffff" filter="url(#glowFilter)" />
      
      {/* Treatment point (marked by different visual) - enhanced */}
      <circle cx="50" cy="50" r="7" fill="url(#cellGradient)" stroke="white" strokeWidth="1.5" filter="url(#glowFilter)" />
      
      {/* Cell states (after treatment) - enhanced */}
      <circle cx="70" cy="50" r="5" fill="#ffffff" filter="url(#glowFilter)" />
      
      {/* AI pattern overlay - refined */}
      <path 
        d="M35 70 L65 30 M35 30 L65 70" 
        stroke="white" 
        strokeWidth="1.5" 
        strokeLinecap="round"
        opacity="0.5"
      />
      
      {/* Data points along trajectory - enhanced */}
      <circle cx="40" cy="37.5" r="2.5" fill="white" opacity="0.9" />
      <circle cx="50" cy="50" r="2.5" fill="white" opacity="0.9" />
      <circle cx="60" cy="62.5" r="2.5" fill="white" opacity="0.9" />
      
      {/* Precision targeting path - enhanced to follow cancer cell shape */}
      <path 
        d="M50,30 
        C55,30 60,31 64,35 
        C67,38 70,42 70,48
        C70,52 69,56 66,59
        C63,63 58,65 53,65
        C47,65 42,63 38,59
        C35,56 33,51 33,46
        C33,41 35,37 38,34
        C41,31 46,30 50,30" 
        stroke="white" 
        strokeWidth="1.2" 
        strokeDasharray="2,3" 
        fill="none" 
        opacity="0.6" 
      />
      
      {/* Gradient definitions - enhanced */}
      <defs>
        <linearGradient id="bgGradient" x1="10%" y1="10%" x2="90%" y2="90%">
          <stop offset="0%" stopColor="#0EA5E9" />
          <stop offset="40%" stopColor="#0891D5" />
          <stop offset="60%" stopColor="#0284C7" />
          <stop offset="100%" stopColor="#026DA9" />
        </linearGradient>
        
        <radialGradient id="cellGradient" cx="50%" cy="50%" r="70%" fx="40%" fy="40%">
          <stop offset="0%" stopColor="#60D88A" />
          <stop offset="60%" stopColor="#40B876" />
          <stop offset="100%" stopColor="#0EA5E9" />
        </radialGradient>
        
        <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
    </svg>
  );
};

export default DeepOMAPLogo;
