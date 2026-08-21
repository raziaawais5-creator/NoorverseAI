import React, { useState, useEffect } from 'react';
import { X, Sparkles, BookOpen, RefreshCw } from 'lucide-react';
import { Verse } from '../../types';
import { fetchVerseExplanation } from '../../services/api';

export const TafsirModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  verse: Verse | null;
  surahName: string;
  surahNumber: number;
}> = ({ isOpen, onClose, verse, surahName, surahNumber }) => {
  const [activeTab, setActiveTab] = useState<'classic' | 'ai'>('ai');
  const [aiExplanation, setAiExplanation] = useState<string>('');
  const [loadingAi, setLoadingAi] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen && verse && activeTab === 'ai' && !aiExplanation) {
      loadAiExplanation();
    }
  }, [isOpen, verse, activeTab]);

  const loadAiExplanation = async () => {
    if (!verse) return;
    setLoadingAi(true);
    const exp = await fetchVerseExplanation({
      surahName,
      surahNumber,
      ayahNumber: verse.numberInSurah,
      arabicText: verse.arabicText,
      translation: verse.translationEn,
    });
    setAiExplanation(exp);
    setLoadingAi(false);
  };

  if (!isOpen || !verse) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-lg bg-white dark:bg-[#18221D] rounded-3xl p-6 border border-emerald-900/10 dark:border-emerald-500/20 shadow-2xl space-y-5 max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-emerald-900/10 dark:border-emerald-500/10 pb-3">
          <div>
            <h3 className="text-base font-bold text-emerald-950 dark:text-emerald-50">
              Tafsir & Verse Explanation
            </h3>
            <p className="text-xs text-emerald-800/60 dark:text-emerald-400/60 font-medium">
              {surahName} ({surahNumber}:{verse.numberInSurah})
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-emerald-100 dark:hover:bg-emerald-900/40 text-emerald-800 dark:text-emerald-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex rounded-xl bg-emerald-50 dark:bg-emerald-900/30 p-1 border border-emerald-900/10 dark:border-emerald-500/20">
          <button
            onClick={() => setActiveTab('ai')}
            className={`flex-1 flex items-center justify-center space-x-1.5 py-2 text-xs font-bold rounded-lg transition-colors ${
              activeTab === 'ai'
                ? 'bg-emerald-700 text-amber-300 shadow-sm'
                : 'text-emerald-800 dark:text-emerald-300 hover:text-emerald-950'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>✨ AI Simplified Reflection</span>
          </button>
          <button
            onClick={() => setActiveTab('classic')}
            className={`flex-1 flex items-center justify-center space-x-1.5 py-2 text-xs font-bold rounded-lg transition-colors ${
              activeTab === 'classic'
                ? 'bg-emerald-700 text-amber-300 shadow-sm'
                : 'text-emerald-800 dark:text-emerald-300 hover:text-emerald-950'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Classic Tafsir Summary</span>
          </button>
        </div>

        {/* Content Box */}
        <div className="flex-1 overflow-y-auto pr-1 space-y-4 text-xs md:text-sm text-emerald-900/90 dark:text-emerald-100/90 leading-relaxed">
          {/* Verse Display */}
          <div className="p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/30 border border-emerald-900/10 dark:border-emerald-500/15 space-y-2">
            <p className="text-right font-serif text-xl font-bold text-emerald-950 dark:text-emerald-100 dir-rtl">
              {verse.arabicText}
            </p>
            <p className="italic text-xs text-emerald-800/80 dark:text-emerald-300/80">
              "{verse.translationEn}"
            </p>
          </div>

          {activeTab === 'ai' ? (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-semibold text-amber-600 dark:text-amber-400">
                <span>AI-Assisted Educational Commentary</span>
                <button
                  onClick={loadAiExplanation}
                  disabled={loadingAi}
                  className="flex items-center space-x-1 text-[11px] underline hover:text-amber-500"
                >
                  <RefreshCw className={`w-3 h-3 ${loadingAi ? 'animate-spin' : ''}`} />
                  <span>Regenerate</span>
                </button>
              </div>

              {loadingAi ? (
                <div className="py-12 text-center space-y-3">
                  <Sparkles className="w-8 h-8 text-amber-500 animate-spin mx-auto" />
                  <p className="text-xs text-emerald-800/60 dark:text-emerald-300/60 font-medium">
                    Synthesizing peaceful insights with AI...
                  </p>
                </div>
              ) : (
                <div className="whitespace-pre-line p-4 rounded-2xl bg-white dark:bg-[#141C18] border border-emerald-900/10 dark:border-emerald-500/15 shadow-inner leading-relaxed">
                  {aiExplanation}
                </div>
              )}
            </div>
          ) : (
            <div className="p-4 rounded-2xl bg-white dark:bg-[#141C18] border border-emerald-900/10 dark:border-emerald-500/15 shadow-inner leading-relaxed space-y-3">
              <h4 className="font-bold text-emerald-950 dark:text-emerald-50">
                Summary of Tafsir Ibn Kathir:
              </h4>
              <p>
                {verse.tafsirShort ||
                  'This noble verse emphasizes divine wisdom, human guidance, steadfastness, and God’s mercy towards all of creation. Scholarly consensus highlights its spiritual power during daily prayers.'}
              </p>
            </div>
          )}
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 rounded-2xl bg-emerald-700 text-amber-300 font-bold text-sm shadow hover:bg-emerald-800 transition-colors"
        >
          Done Reading
        </button>
      </div>
    </div>
  );
};
