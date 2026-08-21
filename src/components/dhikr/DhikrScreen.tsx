import React, { useState } from 'react';
import { Sun, Moon, Heart, CheckCircle2, Bookmark } from 'lucide-react';
import { MORNING_ADHKAR, EVENING_ADHKAR, DAILY_DUAS_LIST } from '../../data/adhkarData';
import { TasbeehCounter } from './TasbeehCounter';

export const DhikrScreen: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'tasbeeh' | 'morning' | 'evening' | 'duas'>('tasbeeh');
  const [adhkarCounts, setAdhkarCounts] = useState<{ [key: string]: number }>({});

  const handleIncrementAdhkar = (id: string, maxTarget: number) => {
    setAdhkarCounts((prev) => {
      const current = prev[id] || 0;
      if (current < maxTarget) {
        return { ...prev, [id]: current + 1 };
      }
      return prev;
    });
  };

  return (
    <div className="space-y-6 pb-28 px-4 pt-4 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h2 className="text-2xl font-black text-emerald-950 dark:text-emerald-50">
            Dhikr & Morning/Evening Adhkar
          </h2>
          <p className="text-xs text-emerald-800/60 dark:text-emerald-400/60 font-medium">
            Remembering Allah with Authentic Daily Supplications
          </p>
        </div>

        {/* Sub Tabs */}
        <div className="flex rounded-xl bg-emerald-50 dark:bg-emerald-900/30 p-1 border border-emerald-900/10 dark:border-emerald-500/15 self-start sm:self-auto overflow-x-auto">
          <button
            onClick={() => setActiveSubTab('tasbeeh')}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors ${
              activeSubTab === 'tasbeeh'
                ? 'bg-emerald-700 text-amber-300 shadow-sm'
                : 'text-emerald-800 dark:text-emerald-300'
            }`}
          >
            Digital Tasbeeh
          </button>
          <button
            onClick={() => setActiveSubTab('morning')}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors ${
              activeSubTab === 'morning'
                ? 'bg-emerald-700 text-amber-300 shadow-sm'
                : 'text-emerald-800 dark:text-emerald-300'
            }`}
          >
            Morning
          </button>
          <button
            onClick={() => setActiveSubTab('evening')}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors ${
              activeSubTab === 'evening'
                ? 'bg-emerald-700 text-amber-300 shadow-sm'
                : 'text-emerald-800 dark:text-emerald-300'
            }`}
          >
            Evening
          </button>
          <button
            onClick={() => setActiveSubTab('duas')}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors ${
              activeSubTab === 'duas'
                ? 'bg-emerald-700 text-amber-300 shadow-sm'
                : 'text-emerald-800 dark:text-emerald-300'
            }`}
          >
            Daily Duas
          </button>
        </div>
      </div>

      {activeSubTab === 'tasbeeh' && <TasbeehCounter />}

      {(activeSubTab === 'morning' || activeSubTab === 'evening') && (
        <div className="space-y-4">
          {(activeSubTab === 'morning' ? MORNING_ADHKAR : EVENING_ADHKAR).map((item) => {
            const currentCount = adhkarCounts[item.id] || 0;
            const isCompleted = currentCount >= item.targetCount;

            return (
              <div
                key={item.id}
                onClick={() => handleIncrementAdhkar(item.id, item.targetCount)}
                className={`p-5 rounded-3xl border transition-all cursor-pointer space-y-3 ${
                  isCompleted
                    ? 'bg-amber-500/10 dark:bg-amber-400/10 border-amber-500/40 shadow-sm'
                    : 'bg-white dark:bg-[#18221D] border-emerald-900/10 dark:border-emerald-500/15 shadow-sm hover:border-emerald-500/30'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-600 dark:text-amber-400">
                    {activeSubTab === 'morning' ? 'Morning Adhkar' : 'Evening Adhkar'}
                  </span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-bold text-emerald-950 dark:text-emerald-50 font-mono">
                      {currentCount} / {item.targetCount}
                    </span>
                    {isCompleted && <CheckCircle2 className="w-4 h-4 text-amber-500" />}
                  </div>
                </div>

                <p className="text-right font-serif text-xl font-bold text-emerald-950 dark:text-emerald-50 dir-rtl leading-loose">
                  {item.arabic}
                </p>

                <p className="text-xs font-semibold text-amber-700 dark:text-amber-300">
                  {item.transliteration}
                </p>

                <p className="text-xs text-emerald-900/80 dark:text-emerald-200/80 italic">
                  "{item.translation}"
                </p>

                {item.virtue && (
                  <p className="text-[11px] text-emerald-700 dark:text-emerald-400 font-medium bg-emerald-50 dark:bg-emerald-950/40 p-2 rounded-xl">
                    ✨ Virtue: {item.virtue}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      )}

      {activeSubTab === 'duas' && (
        <div className="space-y-4">
          {DAILY_DUAS_LIST.map((dua) => (
            <div
              key={dua.id}
              className="p-5 rounded-3xl bg-white dark:bg-[#18221D] border border-emerald-900/10 dark:border-emerald-500/15 shadow-sm space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300">
                  {dua.title}
                </span>
                <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300">
                  {dua.category}
                </span>
              </div>

              <p className="text-right font-serif text-2xl font-bold text-emerald-950 dark:text-emerald-50 dir-rtl leading-loose">
                {dua.arabic}
              </p>

              <p className="text-xs font-semibold text-amber-700 dark:text-amber-300">
                {dua.transliteration}
              </p>

              <p className="text-xs text-emerald-900/80 dark:text-emerald-200/80 italic">
                "{dua.translation}"
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
