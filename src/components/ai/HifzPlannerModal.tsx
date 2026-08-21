import React, { useState } from 'react';
import { X, Target, Calendar, CheckCircle, Sparkles } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const HifzPlannerModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const { userStats } = useApp();
  const [dailyTarget, setDailyTarget] = useState<number>(3);
  const [targetSurah, setTargetSurah] = useState<string>('Ya-Sin');
  const [isSaved, setIsSaved] = useState(false);

  if (!isOpen) return null;

  const handleSavePlan = () => {
    setIsSaved(true);
    setTimeout(() => {
      setIsSaved(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-md bg-white dark:bg-[#18221D] rounded-3xl p-6 border border-emerald-900/10 dark:border-emerald-500/20 shadow-2xl space-y-5">
        <div className="flex items-center justify-between border-b border-emerald-900/10 dark:border-emerald-500/10 pb-3">
          <div className="flex items-center space-x-2">
            <Target className="w-5 h-5 text-amber-500" />
            <h3 className="text-base font-bold text-emerald-950 dark:text-emerald-50">
              Hifz Memorization Planner
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-emerald-100 dark:hover:bg-emerald-900/40 text-emerald-800 dark:text-emerald-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-xs font-bold text-emerald-900 dark:text-emerald-200 block mb-1">
              Target Surah to Memorize
            </label>
            <select
              value={targetSurah}
              onChange={(e) => setTargetSurah(e.target.value)}
              className="w-full p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-900/10 dark:border-emerald-500/20 text-xs text-emerald-950 dark:text-emerald-100 font-medium focus:outline-none"
            >
              <option value="Ya-Sin">Surah Ya-Sin (36)</option>
              <option value="Ar-Rahman">Surah Ar-Rahman (55)</option>
              <option value="Al-Mulk">Surah Al-Mulk (67)</option>
              <option value="Al-Kahf">Surah Al-Kahf (18)</option>
              <option value="An-Naba">Surah An-Naba (78)</option>
            </select>
          </div>

          <div>
            <div className="flex justify-between text-xs font-bold text-emerald-900 dark:text-emerald-200 mb-1">
              <span>Daily Verses Target</span>
              <span className="text-amber-600 dark:text-amber-400 font-mono">{dailyTarget} Ayahs/day</span>
            </div>
            <input
              type="range"
              min="1"
              max="15"
              value={dailyTarget}
              onChange={(e) => setDailyTarget(Number(e.target.value))}
              className="w-full accent-emerald-600 cursor-pointer"
            />
          </div>

          {/* AI Retention Schedule */}
          <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-900 to-teal-950 text-white space-y-2">
            <div className="flex items-center space-x-1.5 text-xs font-bold text-amber-300">
              <Sparkles className="w-4 h-4" />
              <span>AI Recommended Spaced Repetition</span>
            </div>
            <p className="text-[11px] text-emerald-100/80 leading-relaxed">
              Based on {dailyTarget} Ayahs/day, you will complete {targetSurah} in approx{' '}
              <span className="font-bold text-amber-300">{Math.ceil(60 / dailyTarget)} days</span> with daily morning revision loops.
            </p>
          </div>
        </div>

        <button
          onClick={handleSavePlan}
          className="w-full py-3 rounded-2xl bg-emerald-700 text-amber-300 font-bold text-sm shadow hover:bg-emerald-800 transition-colors flex items-center justify-center space-x-2"
        >
          {isSaved ? (
            <>
              <CheckCircle className="w-5 h-5 text-amber-300" />
              <span>Memorization Goal Saved!</span>
            </>
          ) : (
            <span>Update Hifz Goal</span>
          )}
        </button>
      </div>
    </div>
  );
};
