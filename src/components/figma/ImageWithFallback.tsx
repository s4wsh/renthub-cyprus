// src/components/figma/ImageWithFallback.tsx

"use client"; // <-- ADD THIS LINE

import React, { useState } from 'react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
}

export const ImageWithFallback = ({ src, alt, ...props }: ImageWithFallbackProps) => {
  const [error, setError] = useState(false);

  const handleImageError = () => {
    setError(true);
  };

  if (error) {
    // Render a placeholder if the image fails to load
    return (
      <div 
        className={`w-full h-full flex items-center justify-center bg-secondary text-muted-foreground ${props.className}`}
      >
        <span className="text-sm">No Image</span>
      </div>
    );
  }

  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} onError={handleImageError} {...props} />;
};