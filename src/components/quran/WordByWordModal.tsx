import React from 'react';
import { X, BookOpen, Layers, Sparkles } from 'lucide-react';
import { WordMeaning } from '../../types';

export const WordByWordModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  word: WordMeaning | null;
  ayahText?: string;
}> = ({ isOpen, onClose, word, ayahText }) => {
  if (!isOpen || !word) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-md bg-white dark:bg-[#18221D] rounded-3xl p-6 border border-emerald-900/10 dark:border-emerald-500/20 shadow-2xl space-y-5">
        <div className="flex items-center justify-between border-b border-emerald-900/10 dark:border-emerald-500/10 pb-3">
          <div className="flex items-center space-x-2">
            <Layers className="w-5 h-5 text-amber-500" />
            <h3 className="text-base font-bold text-emerald-950 dark:text-emerald-50">
              Word Analysis & Grammar
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-emerald-100 dark:hover:bg-emerald-900/40 text-emerald-800 dark:text-emerald-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Word Display Box */}
        <div className="rounded-2xl bg-gradient-to-br from-emerald-900 to-teal-950 p-6 text-center text-white space-y-2 shadow-md">
          <div className="font-serif text-4xl font-bold text-amber-300 tracking-wide dir-rtl">
            {word.arabic}
          </div>
          <div className="text-sm font-semibold text-emerald-200">{word.transliteration}</div>
          <div className="text-base font-bold text-emerald-50">"{word.english}"</div>
        </div>

        {/* Root & Grammar Details */}
        <div className="space-y-3">
          {word.root && (
            <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-900/10 dark:border-emerald-500/20">
              <span className="text-xs font-semibold text-emerald-800 dark:text-emerald-300">
                3-Letter Arabic Root:
              </span>
              <span className="text-sm font-bold font-serif text-amber-600 dark:text-amber-400">
                {word.root}
              </span>
            </div>
          )}

          {word.grammar && (
            <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-900/10 dark:border-emerald-500/20">
              <span className="text-xs font-semibold text-emerald-800 dark:text-emerald-300">
                Grammar / Part of Speech:
              </span>
              <span className="text-xs font-bold text-emerald-950 dark:text-emerald-100">
                {word.grammar}
              </span>
            </div>
          )}
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 rounded-2xl bg-emerald-700 text-amber-300 font-bold text-sm shadow hover:bg-emerald-800 transition-colors"
        >
          Close Analysis
        </button>
      </div>
    </div>
  );
};
