import React from 'react';

export const GeometricPattern: React.FC<{ className?: string; opacity?: number }> = ({
  className = '',
  opacity = 0.05,
}) => {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={{ opacity }}
    >
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        fill="none"
      >
        <pattern
          id="islamic-geo-pattern"
          width="80"
          height="80"
          patternUnits="userSpaceOnUse"
        >
          {/* Islamic 8-Point Star and Octagon Mesh */}
          <path
            d="M 40 0 L 80 40 L 40 80 L 0 40 Z"
            stroke="currentColor"
            strokeWidth="0.75"
            fill="none"
          />
          <path
            d="M 0 0 L 80 80 M 80 0 L 0 80"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeDasharray="2 2"
          />
          <circle cx="40" cy="40" r="16" stroke="currentColor" strokeWidth="0.75" fill="none" />
          <polygon
            points="40,24 45,35 56,40 45,45 40,56 35,45 24,40 35,35"
            stroke="currentColor"
            strokeWidth="0.75"
            fill="none"
          />
        </pattern>
        <rect width="100%" height="100%" fill="url(#islamic-geo-pattern)" />
      </svg>
    </div>
  );
};
