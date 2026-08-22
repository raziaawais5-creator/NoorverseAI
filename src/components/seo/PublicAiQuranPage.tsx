import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Brain, BookOpen, Volume2, Search, GraduationCap, CheckCircle2, ShieldCheck, ArrowRight, HelpCircle } from 'lucide-react';
import { SeoHead } from '../common/SeoHead';
import { AiLearningScreen } from '../ai/AiLearningScreen';
import { PublicFooter } from '../common/PublicFooter';

export const PublicAiQuranPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F7F9FC] dark:bg-[#0B1320] text-[#1F3A5F] dark:text-[#F7F9FC]">
      <SeoHead
        title="AI Quran Assistant & Verse Reflections | NoorVerse AI"
        description="Deepen your Quranic comprehension with NoorVerse AI. Ask questions, explore context, generate AI study quizzes, and receive personalized verse reflections."
        canonicalUrl="https://noorverse-ai.vercel.app/ai-quran"
        keywords="AI Quran, AI Islamic study, Quran AI assistant, Quran chatbot, verse reflections, AI Quran quiz, Hifz memorization AI, NoorVerse AI"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: 'NoorVerse AI Quran Study Companion',
          applicationCategory: 'EducationalApplication',
          operatingSystem: 'All',
          description: 'AI-assisted Quranic learning interface offering structured reflections, root analysis, and interactive educational quizzes.',
        }}
      />

      {/* SEO Introductory Hero Banner */}
      <section className="bg-gradient-to-br from-[#121E2E] via-[#1A2E44] to-[#0A121D] text-white py-8 px-4 border-b border-[#6E8FB5]/30">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold border border-amber-400/40">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI Knowledge & Reflection Engine</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
            AI Quran Assistant & Verse Reflections
          </h1>

          <p className="text-sm sm:text-base text-[#C7CEDB] max-w-3xl leading-relaxed">
            NoorVerse AI harnesses the power of Google's Gemini models tailored for Islamic education. Generate contextual verse explanations, test your retention with interactive AI-crafted quizzes, design a custom Hifz memorization schedule, and extract linguistic depth with high reverent precision.
          </p>

          {/* Quick Hub Links */}
          <div className="flex flex-wrap gap-2 pt-2 text-xs font-semibold">
            <Link
              to="/quran-tafsir"
              className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-emerald-200 border border-white/15 transition-all flex items-center space-x-1.5"
            >
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
              <span>Deep Tafsir</span>
            </Link>
            <Link
              to="/arabic-roots"
              className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-emerald-200 border border-white/15 transition-all flex items-center space-x-1.5"
            >
              <Search className="w-3.5 h-3.5 text-amber-400" />
              <span>3-Letter Roots</span>
            </Link>
            <Link
              to="/tajweed"
              className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-emerald-200 border border-white/15 transition-all flex items-center space-x-1.5"
            >
              <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
              <span>Tajweed Practice</span>
            </Link>
            <Link
              to="/quran"
              className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-emerald-200 border border-white/15 transition-all flex items-center space-x-1.5"
            >
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
              <span>Quran Reader</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Interactive AI Learning Screen */}
      <div className="pt-2">
        <AiLearningScreen />
      </div>

      {/* Educational & Crawlable Content Section */}
      <section className="max-w-4xl mx-auto px-4 py-12 space-y-10">
        <div>
          <h2 className="text-xl font-extrabold text-emerald-950 dark:text-emerald-50 mb-2">
            How NoorVerse AI Enhances Quranic Study
          </h2>
          <p className="text-xs text-emerald-800/70 dark:text-emerald-300/70 leading-relaxed">
            Our AI architecture is built with strict guardrails, reverent prompts, and classical Islamic educational references:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-2xl bg-white dark:bg-[#18221D] border border-emerald-900/10 dark:border-emerald-500/15 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400/15 text-amber-600 dark:text-amber-400 flex items-center justify-center">
              <Brain className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-emerald-950 dark:text-emerald-50">
              Contextual Verse Explanations
            </h3>
            <p className="text-xs text-emerald-800/70 dark:text-emerald-300/70 leading-relaxed">
              Synthesize key moral takeaways, historical background (Asbab al-Nuzul), and practical daily life application questions for any verse in seconds.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-[#18221D] border border-emerald-900/10 dark:border-emerald-500/15 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400/15 text-amber-600 dark:text-amber-400 flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-emerald-950 dark:text-emerald-50">
              Interactive AI Quizzes
            </h3>
            <p className="text-xs text-emerald-800/70 dark:text-emerald-300/70 leading-relaxed">
              Generate 5-question comprehension quizzes on Surah themes, Prophets in Islam, Tajweed rules, and Quranic history with instant grading and explanations.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-[#18221D] border border-emerald-900/10 dark:border-emerald-500/15 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400/15 text-amber-600 dark:text-amber-400 flex items-center justify-center">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-emerald-950 dark:text-emerald-50">
              Adaptive Hifz Planner
            </h3>
            <p className="text-xs text-emerald-800/70 dark:text-emerald-300/70 leading-relaxed">
              Set your target pace (e.g. 3 Ayahs/day or 1 Page/day) and let NoorVerse track your memorization streak, revision cycles, and completion forecasts.
            </p>
          </div>
        </div>

        {/* Ethical AI Statement */}
        <div className="p-6 rounded-3xl bg-emerald-50/60 dark:bg-emerald-950/40 border border-emerald-900/10 dark:border-emerald-500/20 flex items-start space-x-4">
          <div className="p-2 rounded-xl bg-emerald-700 text-amber-300 shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div className="space-y-1.5 text-xs text-emerald-800/80 dark:text-emerald-200/80 leading-relaxed">
            <h4 className="font-bold text-emerald-950 dark:text-emerald-100 text-sm">
              Authenticity & Respect for Islamic Scholarship
            </h4>
            <p>
              NoorVerse AI is designed as a supplementary learning accelerator. All AI insights, reflections, and summaries are generated with reverent system prompts and should be paired with established classical Tafsir and guidance from certified Quran teachers.
            </p>
          </div>
        </div>
      </section>

      <PublicFooter />
    </div>
  );
};
