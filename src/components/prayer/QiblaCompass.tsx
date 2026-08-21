import React, { useState, useEffect } from 'react';
import { Compass, Navigation, MapPin } from 'lucide-react';

export const QiblaCompass: React.FC<{
  qiblaDegrees: number;
  cityName: string;
}> = ({ qiblaDegrees, cityName }) => {
  const [heading, setHeading] = useState<number>(0);

  // Rotate simulated compass for interactive feedback
  const handleRotateCompass = (delta: number) => {
    setHeading((prev) => (prev + delta + 360) % 360);
  };

  const isAligned = Math.abs((heading - qiblaDegrees + 360) % 360) < 5;

  return (
    <div className="rounded-3xl bg-white dark:bg-[#18221D] p-6 border border-emerald-900/10 dark:border-emerald-500/15 shadow-sm flex flex-col items-center space-y-6">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center space-x-2">
          <Compass className="w-5 h-5 text-emerald-700 dark:text-emerald-300" />
          <h3 className="text-base font-bold text-emerald-950 dark:text-emerald-50">
            Qibla Direction
          </h3>
        </div>
        <div className="flex items-center space-x-1 text-xs font-semibold text-emerald-800/80 dark:text-emerald-300/80">
          <MapPin className="w-3.5 h-3.5 text-amber-500" />
          <span>{cityName}</span>
        </div>
      </div>

      {/* Compass Ring Visualizer */}
      <div className="relative w-64 h-64 flex items-center justify-center">
        {/* Outer Ring */}
        <div
          style={{ transform: `rotate(${-heading}deg)` }}
          className="absolute inset-0 rounded-full border-4 border-emerald-900/10 dark:border-emerald-500/20 shadow-inner transition-transform duration-300 flex items-center justify-center"
        >
          {/* Cardinal Directions */}
          <span className="absolute top-2 font-bold text-xs text-red-500">N</span>
          <span className="absolute right-2 font-bold text-xs text-emerald-800 dark:text-emerald-300">E</span>
          <span className="absolute bottom-2 font-bold text-xs text-emerald-800 dark:text-emerald-300">S</span>
          <span className="absolute left-2 font-bold text-xs text-emerald-800 dark:text-emerald-300">W</span>

          {/* Qibla Marker Arrow */}
          <div
            style={{ transform: `rotate(${qiblaDegrees}deg)` }}
            className="absolute inset-0 flex items-start justify-center pt-3"
          >
            <div className="flex flex-col items-center">
              <div className="w-7 h-7 rounded-full bg-amber-400 text-emerald-950 flex items-center justify-center font-bold shadow-md text-[10px]">
                🕋
              </div>
              <div className="w-0.5 h-16 bg-gradient-to-b from-amber-400 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Center Pointer Dial */}
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-800 to-teal-950 text-white flex flex-col items-center justify-center shadow-lg border-2 border-amber-400 z-10">
          <Navigation className="w-6 h-6 text-amber-300 transform -rotate-45" />
          <span className="text-[10px] font-bold text-amber-300 mt-0.5">{qiblaDegrees}°</span>
        </div>
      </div>

      {/* Manual Compass Alignment Control for preview */}
      <div className="flex items-center space-x-3">
        <button
          onClick={() => handleRotateCompass(-15)}
          className="px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 text-xs font-bold text-emerald-800 dark:text-emerald-200"
        >
           Rotate Left
        </button>
        <span
          className={`text-xs font-bold px-3 py-1 rounded-full ${
            isAligned ? 'bg-amber-400 text-emerald-950 shadow animate-pulse' : 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-200'
          }`}
        >
          {isAligned ? '✨ Facing Makkah!' : `Heading: ${heading}°`}
        </span>
        <button
          onClick={() => handleRotateCompass(15)}
          className="px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 text-xs font-bold text-emerald-800 dark:text-emerald-200"
        >
          Rotate Right ↻
        </button>
      </div>
    </div>
  );
};
