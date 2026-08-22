import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, GraduationCap, Volume2, Sparkles, Compass, Heart, Search, ShieldCheck, ArrowRight } from 'lucide-react';
import { SeoHead } from '../common/SeoHead';
import { HomeScreen } from '../home/HomeScreen';
import { PublicFooter } from '../common/PublicFooter';

export const PublicHomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F7F9FC] dark:bg-[#0B1320] text-[#1F3A5F] dark:text-[#F7F9FC]">
      <SeoHead
        title="NoorVerse AI — AI Quran, Tajweed & Islamic Learning"
        description="NoorVerse AI is an AI-powered Quran learning platform with a Voice Tajweed Coach, instant Quran recitation pronunciation feedback, Deep Tafsir, Arabic 3-letter root search, verse reflections, and Islamic learning tools."
        canonicalUrl="https://noorverse-ai.vercel.app/"
        keywords="NoorVerse AI, AI Quran, Quran Tajweed, Voice Tajweed coach, Quran recitation practice, Quran Tafsir, Arabic roots Quran, Islamic learning AI"
        structuredData={[
          {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'NoorVerse AI',
            url: 'https://noorverse-ai.vercel.app/',
            description: 'AI-powered Quran learning platform with Voice Tajweed Coach, Deep Tafsir, Arabic 3-letter root search, and Islamic learning tools.',
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://noorverse-ai.vercel.app/quran?q={search_term_string}',
              'query-input': 'required name=search_term_string',
            },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'NoorVerse AI',
            url: 'https://noorverse-ai.vercel.app/',
            logo: 'https://noorverse-ai.vercel.app/icon.svg',
          },
        ]}
      />

      {/* Semantic H1 for SEO Crawlers */}
      <div className="max-w-5xl mx-auto px-4 pt-4">
        <div className="sr-only">
          <h1>NoorVerse AI — AI Quran, Tajweed & Islamic Learning Platform</h1>
          <p>
            Learn the Holy Quran with real-time AI Voice Tajweed coaching, explore 114 Surahs with Uthmani & IndoPak scripts, analyze 3-letter Arabic roots, read deep AI Tafsir, and track daily prayers.
          </p>
        </div>

        {/* Render Primary Interactive Home Dashboard */}
        <HomeScreen />
      </div>

      {/* Structured SEO Exploration Hub with Deep Internal Links */}
      <section className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        <div className="border-t border-[#C7CEDB]/40 dark:border-[#1F3A5F]/60 pt-8">
          <h2 className="text-xl font-black text-emerald-950 dark:text-emerald-50 mb-2">
            Explore NoorVerse AI Modules & Resources
          </h2>
          <p className="text-xs text-emerald-800/70 dark:text-emerald-300/70 leading-relaxed">
            Discover our comprehensive suite of Islamic education tools designed for students, reciters, and families:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Link
            to="/quran"
            className="p-5 rounded-2xl bg-white dark:bg-[#18221D] border border-emerald-900/10 dark:border-emerald-500/15 shadow-sm hover:border-emerald-500/40 transition-all space-y-2 group"
          >
            <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 flex items-center justify-center group-hover:scale-105 transition-transform">
              <BookOpen className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-emerald-950 dark:text-emerald-50">
              Noble Quran Reader
            </h3>
            <p className="text-xs text-emerald-800/70 dark:text-emerald-300/70 leading-relaxed">
              Read 114 Surahs with Uthmani and IndoPak scripts, English/Urdu translations, and audio recitation.
            </p>
          </Link>

          <Link
            to="/noorani-qaida"
            className="p-5 rounded-2xl bg-white dark:bg-[#18221D] border border-emerald-900/10 dark:border-emerald-500/15 shadow-sm hover:border-emerald-500/40 transition-all space-y-2 group"
          >
            <div className="w-9 h-9 rounded-xl bg-amber-400/15 text-amber-600 dark:text-amber-400 flex items-center justify-center group-hover:scale-105 transition-transform">
              <GraduationCap className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-emerald-950 dark:text-emerald-50">
              Interactive Noorani Qaida
            </h3>
            <p className="text-xs text-emerald-800/70 dark:text-emerald-300/70 leading-relaxed">
              15 audio-enabled lessons with Arabic alphabets, Makharij articulation points, and quizzes.
            </p>
          </Link>

          <Link
            to="/tajweed"
            className="p-5 rounded-2xl bg-white dark:bg-[#18221D] border border-emerald-900/10 dark:border-emerald-500/15 shadow-sm hover:border-emerald-500/40 transition-all space-y-2 group"
          >
            <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 flex items-center justify-center group-hover:scale-105 transition-transform">
              <GraduationCap className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-emerald-950 dark:text-emerald-50">
              AI Tajweed Mastery
            </h3>
            <p className="text-xs text-emerald-800/70 dark:text-emerald-300/70 leading-relaxed">
              In-depth guides for Ghunnah, Qalqalah, Noon Sakinah, and Madd recitation rules.
            </p>
          </Link>

          <Link
            to="/quran-pronunciation"
            className="p-5 rounded-2xl bg-white dark:bg-[#18221D] border border-emerald-900/10 dark:border-emerald-500/15 shadow-sm hover:border-emerald-500/40 transition-all space-y-2 group"
          >
            <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Volume2 className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-emerald-950 dark:text-emerald-50">
              Voice Pronunciation Coach
            </h3>
            <p className="text-xs text-emerald-800/70 dark:text-emerald-300/70 leading-relaxed">
              Live microphone recording and AI phonetic diagnostics for instant recitation scoring.
            </p>
          </Link>

          <Link
            to="/ai-quran"
            className="p-5 rounded-2xl bg-white dark:bg-[#18221D] border border-emerald-900/10 dark:border-emerald-500/15 shadow-sm hover:border-emerald-500/40 transition-all space-y-2 group"
          >
            <div className="w-9 h-9 rounded-xl bg-amber-400/15 text-amber-600 dark:text-amber-400 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Sparkles className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-emerald-950 dark:text-emerald-50">
              AI Quran Assistant
            </h3>
            <p className="text-xs text-emerald-800/70 dark:text-emerald-300/70 leading-relaxed">
              Generate verse reflections, interactive Islamic knowledge quizzes, and adaptive Hifz plans.
            </p>
          </Link>

          <Link
            to="/quran-tafsir"
            className="p-5 rounded-2xl bg-white dark:bg-[#18221D] border border-emerald-900/10 dark:border-emerald-500/15 shadow-sm hover:border-emerald-500/40 transition-all space-y-2 group"
          >
            <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 flex items-center justify-center group-hover:scale-105 transition-transform">
              <BookOpen className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-emerald-950 dark:text-emerald-50">
              AI Verse Tafsir
            </h3>
            <p className="text-xs text-emerald-800/70 dark:text-emerald-300/70 leading-relaxed">
              Understand historical background (Asbab al-Nuzul) and daily life moral applications.
            </p>
          </Link>

          <Link
            to="/arabic-roots"
            className="p-5 rounded-2xl bg-white dark:bg-[#18221D] border border-emerald-900/10 dark:border-emerald-500/15 shadow-sm hover:border-emerald-500/40 transition-all space-y-2 group"
          >
            <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Search className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-emerald-950 dark:text-emerald-50">
              3-Letter Arabic Roots
            </h3>
            <p className="text-xs text-emerald-800/70 dark:text-emerald-300/70 leading-relaxed">
              Explore the Arabic root system (ثلاثي مجرد) to unlock Quranic vocabulary.
            </p>
          </Link>
        </div>
      </section>

      <PublicFooter />
    </div>
  );
};
