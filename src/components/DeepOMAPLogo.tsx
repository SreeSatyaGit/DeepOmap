import React from 'react';
import Image from 'next/image';

interface DeepOMAPLogoProps {
  size?: number;
  className?: string;
}

const DeepOMAPLogo: React.FC<DeepOMAPLogoProps> = ({ size = 60, className = "" }) => {
  return (
    <Image
      src="/logo/logoDeepOmap.png"
      alt="DeepOMAP Logo"
      width={size}
      height={size}
      unoptimized
      className={`${className} object-contain`}
    />
  );
};

export default DeepOMAPLogo;
