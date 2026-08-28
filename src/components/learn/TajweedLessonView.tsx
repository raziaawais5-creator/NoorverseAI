import React, { useState } from 'react';
import { ArrowLeft, Volume2, Sparkles, CheckCircle2, BookOpen, Play } from 'lucide-react';
import { TAJWEED_LESSONS } from '../../data/learnData';
import { TajweedLesson } from '../../types';
import { playQaidaPronunciation } from '../../utils/qaidaAudio';

export const TajweedLessonView: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [activeLesson, setActiveLesson] = useState<TajweedLesson>(TAJWEED_LESSONS[0]);
  const [playingIdx, setPlayingIdx] = useState<number | null>(null);

  const handlePlayExample = (arabicText: string, idx: number) => {
    setPlayingIdx(idx);
    playQaidaPronunciation(
      arabicText,
      {
        selectedVoiceId: 'husary_muallim',
        speedRate: 0.8,
        pitch: 0.92,
        volume: 1.0,
        playChime: true,
      },
      () => {
        setPlayingIdx(null);
      }
    );
  };

  return (
    <div className="space-y-6 pb-28 px-4 pt-3 max-w-4xl mx-auto">
      {/* Top Sticky Header Bar with Back Button */}
      <div className="sticky top-0 z-20 bg-[#F7F9FC]/95 dark:bg-[#0B1320]/95 backdrop-blur-md py-2.5 -mx-4 px-4 border-b border-emerald-900/10 dark:border-emerald-500/15 flex items-center justify-between shadow-xs">
        <button
          onClick={onBack}
          className="flex items-center space-x-1.5 px-3.5 py-2 rounded-2xl bg-white dark:bg-[#18221D] border border-emerald-900/15 dark:border-emerald-500/25 text-xs font-bold text-emerald-900 dark:text-emerald-100 hover:bg-emerald-50 dark:hover:bg-emerald-950/60 transition-all shadow-sm group hover:scale-[1.02] active:scale-95"
          title="Go back to Learn Modules Hub"
          aria-label="Back to Learn Hub"
        >
          <ArrowLeft className="w-4 h-4 text-amber-500 group-hover:-translate-x-0.5 transition-transform" />
          <span>Back</span>
        </button>

        <h2 className="text-sm sm:text-base font-black text-emerald-950 dark:text-emerald-50">
          Tajweed Rules & Practice
        </h2>
      </div>

      {/* Lesson Navigation Pills */}
      <div className="flex overflow-x-auto space-x-2 pb-2 scrollbar-none">
        {TAJWEED_LESSONS.map((lesson) => (
          <button
            key={lesson.id}
            onClick={() => setActiveLesson(lesson)}
            className={`px-4 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition-all ${
              activeLesson.id === lesson.id
                ? 'bg-emerald-700 text-amber-300 shadow-md'
                : 'bg-white dark:bg-[#18221D] text-emerald-900 dark:text-emerald-200 border border-emerald-900/10 dark:border-emerald-500/15'
            }`}
          >
            {lesson.title}
          </button>
        ))}
      </div>

      {/* Active Lesson Header */}
      <div className="rounded-3xl bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-950 p-6 text-white shadow-xl space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
            Tajweed Rule
          </span>
          <span className="font-serif text-2xl font-bold text-amber-200 dir-rtl">
            {activeLesson.arabicTitle}
          </span>
        </div>
        <h1 className="text-2xl font-extrabold text-emerald-50">{activeLesson.title}</h1>
        <p className="text-xs md:text-sm text-emerald-100/90 leading-relaxed font-medium">
          {activeLesson.description}
        </p>
      </div>

      {/* Key Rules Card */}
      <div className="rounded-3xl bg-white dark:bg-[#18221D] p-6 border border-emerald-900/10 dark:border-emerald-500/15 shadow-sm space-y-4">
        <h3 className="text-sm font-extrabold uppercase tracking-wider text-emerald-950 dark:text-emerald-50 flex items-center space-x-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>Essential Guidelines</span>
        </h3>
        <ul className="space-y-2.5">
          {activeLesson.rules.map((rule, idx) => (
            <li
              key={idx}
              className="flex items-start space-x-2.5 text-xs md:text-sm text-emerald-900/90 dark:text-emerald-100/90 leading-relaxed"
            >
              <span className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-200 font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <span>{rule}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Examples & Audio Practice */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-900 dark:text-emerald-200">
          Quranic Audio Examples
        </h3>
        <div className="grid grid-cols-1 gap-3">
          {activeLesson.examples.map((ex, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white dark:bg-[#18221D] border border-emerald-900/10 dark:border-emerald-500/15 shadow-sm space-y-3"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handlePlayExample(ex.arabic, idx)}
                    className={`p-2 rounded-xl border flex items-center justify-center transition-all ${
                      playingIdx === idx
                        ? 'bg-amber-400 text-emerald-950 border-amber-500 scale-105 shadow'
                        : 'bg-emerald-50 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-200 border-emerald-900/15 dark:border-emerald-500/20 hover:border-amber-400'
                    }`}
                    title="Listen to pronunciation"
                    aria-label={`Listen to ${ex.transliteration}`}
                  >
                    <Volume2 className={`w-4 h-4 ${playingIdx === idx ? 'animate-bounce text-emerald-950' : 'text-amber-500'}`} />
                  </button>
                  <span className="text-xs font-semibold text-amber-600 dark:text-amber-400">
                    {ex.transliteration}
                  </span>
                </div>
                <span className="font-serif text-2xl font-bold text-emerald-950 dark:text-emerald-50 dir-rtl">
                  {ex.arabic}
                </span>
              </div>
              <p className="text-xs text-emerald-800/80 dark:text-emerald-300/80 bg-emerald-50 dark:bg-emerald-950/40 p-2.5 rounded-xl">
                {ex.explanation}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
