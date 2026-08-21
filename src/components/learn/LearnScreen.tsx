import React, { useState } from 'react';
import { GraduationCap, BookOpen, Target, Mic, Sparkles, ArrowRight, Award } from 'lucide-react';
import { NooraniQaidaView } from './NooraniQaidaView';
import { TajweedLessonView } from './TajweedLessonView';
import { useApp } from '../../context/AppContext';
import { AiPronunciationModal } from '../common/AiPronunciationModal';

export const LearnScreen: React.FC = () => {
  const { setActiveTab } = useApp();
  const [subModule, setSubModule] = useState<'hub' | 'qaida' | 'tajweed' | 'mic'>('hub');
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);

  if (subModule === 'qaida') return <NooraniQaidaView onBack={() => setSubModule('hub')} />;
  if (subModule === 'tajweed') return <TajweedLessonView onBack={() => setSubModule('hub')} />;

  return (
    <div className="space-y-6 pb-28 px-4 pt-4 max-w-4xl mx-auto">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-black text-emerald-950 dark:text-emerald-50">
          Islamic Knowledge & Tajweed Hub
        </h2>
        <p className="text-xs text-emerald-800/60 dark:text-emerald-400/60 font-medium">
          Master Arabic Alphabets, Makharij, and Quranic Recitation Rules
        </p>
      </div>

      {/* Featured Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Noorani Qaida Card */}
        <div
          onClick={() => setSubModule('qaida')}
          className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-900 to-teal-950 p-6 text-white shadow-md hover:shadow-xl transition-all cursor-pointer space-y-4 border border-emerald-500/20"
        >
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-2xl bg-amber-400/20 flex items-center justify-center text-amber-300 font-serif text-2xl font-bold border border-amber-400/30">
              أ ب
            </div>
            <span className="px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold border border-amber-400/30">
              28 Letters
            </span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-emerald-50 group-hover:text-amber-300 transition-colors">
              Noorani Qaida & Makharij
            </h3>
            <p className="text-xs text-emerald-200/80 mt-1">
              Learn individual Arabic letters, isolated & connected forms, and precise points of articulation.
            </p>
          </div>
          <div className="flex items-center text-xs font-bold text-amber-300 group-hover:translate-x-1 transition-transform">
            <span>Start Qaida Lessons</span> <ArrowRight className="w-4 h-4 ml-1" />
          </div>
        </div>

        {/* Tajweed Rules Card */}
        <div
          onClick={() => setSubModule('tajweed')}
          className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-900 to-emerald-950 p-6 text-white shadow-md hover:shadow-xl transition-all cursor-pointer space-y-4 border border-emerald-500/20"
        >
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-2xl bg-amber-400/20 flex items-center justify-center text-amber-300 font-bold border border-amber-400/30">
              <Target className="w-6 h-6" />
            </div>
            <span className="px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold border border-amber-400/30">
              Core Rules
            </span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-emerald-50 group-hover:text-amber-300 transition-colors">
              Tajweed Mastery
            </h3>
            <p className="text-xs text-emerald-200/80 mt-1">
              Interactive guides for Ghunnah, Qalqalah, Noon Sakinah, and Madd with audio samples.
            </p>
          </div>
          <div className="flex items-center text-xs font-bold text-amber-300 group-hover:translate-x-1 transition-transform">
            <span>Explore Tajweed</span> <ArrowRight className="w-4 h-4 ml-1" />
          </div>
        </div>
      </div>

      {/* Interactive Pronunciation Practice & Mistake Detector */}
      <div className="rounded-3xl bg-white dark:bg-[#18221D] p-6 border border-emerald-900/10 dark:border-emerald-500/15 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Mic className="w-5 h-5 text-emerald-700 dark:text-emerald-300" />
            <h3 className="text-base font-bold text-emerald-950 dark:text-emerald-50">
              AI Recitation & Pronunciation Mistake Detector
            </h3>
          </div>
          <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-900 dark:text-amber-300 font-extrabold border border-amber-400/30">
            AI Powered
          </span>
        </div>

        <p className="text-xs text-emerald-800/80 dark:text-emerald-300/80">
          Practice reciting Quranic verses or Qaida letters. Tap the button below to perform real-time AI speech analysis and detect Tajweed errors.
        </p>

        <div className="p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/30 border border-emerald-900/10 dark:border-emerald-500/15 text-center space-y-2">
          <div className="font-serif text-2xl font-bold text-emerald-950 dark:text-emerald-50 dir-rtl">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </div>
          <div className="text-xs font-semibold text-amber-700 dark:text-amber-300">
            Bismillaahir Rahmaanir Raheem — Surah Al-Fatiha (1:1)
          </div>
        </div>

        <div className="flex flex-col items-center space-y-3 pt-2">
          <button
            onClick={() => setIsAiModalOpen(true)}
            className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 text-amber-300 font-extrabold text-sm shadow-md flex items-center justify-center space-x-2 hover:opacity-95 transition-all"
          >
            <Mic className="w-5 h-5 text-amber-300" />
            <span>Record & Detect Recitation Mistakes</span>
          </button>
        </div>
      </div>

      {/* AI Quiz Hub Launcher Card */}
      <div
        onClick={() => setActiveTab('ai')}
        className="rounded-3xl bg-gradient-to-r from-amber-500/15 to-emerald-500/15 p-6 border border-amber-500/30 flex items-center justify-between cursor-pointer group hover:shadow-md transition-all"
      >
        <div className="space-y-1">
          <div className="flex items-center space-x-1.5">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-300">
              AI Quiz Hub
            </span>
          </div>
          <h4 className="text-base font-bold text-emerald-950 dark:text-emerald-50">
            Test Your Quranic Knowledge with AI
          </h4>
          <p className="text-xs text-emerald-800/70 dark:text-emerald-300/70">
            Generate custom 5-question quizzes on any Surah or Tajweed topic.
          </p>
        </div>
        <div className="w-10 h-10 rounded-full bg-emerald-700 text-amber-300 flex items-center justify-center group-hover:translate-x-1 transition-transform shrink-0">
          <ArrowRight className="w-5 h-5" />
        </div>
      </div>

      {/* AI Pronunciation Detector Modal */}
      <AiPronunciationModal
        isOpen={isAiModalOpen}
        onClose={() => setIsAiModalOpen(false)}
        targetText="بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ"
        itemTitle="Surah Al-Fatiha (1:1)"
        transliteration="Bismillaahir Rahmaanir Raheem"
        type="quran"
      />
    </div>
  );
};
