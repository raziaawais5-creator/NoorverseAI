import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Sparkles, Volume2, Search, GraduationCap, Compass, ArrowRight, CheckCircle2, Headphones, Globe } from 'lucide-react';
import { SeoHead } from '../common/SeoHead';
import { QuranScreen } from '../quran/QuranScreen';
import { PublicFooter } from '../common/PublicFooter';

export const PublicQuranPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F7F9FC] dark:bg-[#0B1320] text-[#1F3A5F] dark:text-[#F7F9FC]">
      <SeoHead
        title="AI Quran Learning — Read & Explore the Quran | NoorVerse AI"
        description="Read, listen, and study the Holy Quran with Uthmani & IndoPak scripts, word-by-word translations, multi-reciter Murattal audio, and AI-powered verse study tools."
        canonicalUrl="https://noorverse-ai.vercel.app/quran"
        keywords="AI Quran, read Quran online, Quran with translation, Quran audio, Uthmani script, IndoPak Quran, word by word Quran, NoorVerse AI"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'LearningResource',
          name: 'NoorVerse Digital Quran Reader & Explorer',
          description: 'Comprehensive digital Holy Quran reader with 114 Surahs, multiple translations, audio recitations, and AI analysis.',
          learningResourceType: 'Interactive Digital Mushaf',
          educationalLevel: 'All Levels',
        }}
      />

      {/* SEO Introductory Hero Banner */}
      <section className="bg-gradient-to-br from-[#1F3A5F] via-[#254670] to-[#122236] text-white py-8 px-4 border-b border-[#6E8FB5]/30">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold border border-amber-400/40">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Digital Mushaf & AI Study</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-[#F7F9FC]">
            AI Quran Learning — Read, Listen & Explore the Holy Quran
          </h1>

          <p className="text-sm sm:text-base text-[#C7CEDB] max-w-3xl leading-relaxed">
            Welcome to the NoorVerse AI Quran Reader. Explore the complete 114 Surahs of the Holy Quran with crisp Uthmani and IndoPak calligraphy, verse-by-verse English and Urdu translations, word-by-word linguistic breakdowns, and high-fidelity audio recitations by world-renowned Qaris.
          </p>

          {/* Quick Hub Links for SEO & Crawlers */}
          <div className="flex flex-wrap gap-2 pt-2 text-xs font-semibold">
            <Link
              to="/tajweed"
              className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-emerald-200 border border-white/15 transition-all flex items-center space-x-1.5"
            >
              <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
              <span>AI Tajweed Rules</span>
            </Link>
            <Link
              to="/quran-tafsir"
              className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-emerald-200 border border-white/15 transition-all flex items-center space-x-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Deep Tafsir & Reflections</span>
            </Link>
            <Link
              to="/quran-pronunciation"
              className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-emerald-200 border border-white/15 transition-all flex items-center space-x-1.5"
            >
              <Volume2 className="w-3.5 h-3.5 text-amber-400" />
              <span>Voice Pronunciation Coach</span>
            </Link>
            <Link
              to="/arabic-roots"
              className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-emerald-200 border border-white/15 transition-all flex items-center space-x-1.5"
            >
              <Search className="w-3.5 h-3.5 text-amber-400" />
              <span>3-Letter Arabic Roots</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Interactive Quran Reader Application Screen */}
      <div className="pt-2">
        <QuranScreen />
      </div>

      {/* Crawlable Features & Educational Content */}
      <section className="max-w-4xl mx-auto px-4 py-12 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-2xl bg-white dark:bg-[#18221D] border border-emerald-900/10 dark:border-emerald-500/15 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 flex items-center justify-center">
              <Globe className="w-5 h-5" />
            </div>
            <h2 className="text-base font-bold text-emerald-950 dark:text-emerald-50">
              Dual Arabic Calligraphy Scripts
            </h2>
            <p className="text-xs text-emerald-800/70 dark:text-emerald-300/70 leading-relaxed">
              Switch effortlessly between authentic Madani <strong>Uthmani script</strong> and the South Asian <strong>IndoPak Nastaleeq script</strong> with custom font scaling for maximum reading comfort.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-[#18221D] border border-emerald-900/10 dark:border-emerald-500/15 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 flex items-center justify-center">
              <Headphones className="w-5 h-5" />
            </div>
            <h2 className="text-base font-bold text-emerald-950 dark:text-emerald-50">
              Legendary Qari Recitations
            </h2>
            <p className="text-xs text-emerald-800/70 dark:text-emerald-300/70 leading-relaxed">
              Listen to verse-by-verse recitation by Sheikh Abdul Basit Abdul Samad, Mishary Rashid Alafasy, Abdul Rahman Al-Sudais, Saad Al-Ghamdi, and Abu Bakr Al-Shatri with continuous auto-play.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-[#18221D] border border-emerald-900/10 dark:border-emerald-500/15 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <h2 className="text-base font-bold text-emerald-950 dark:text-emerald-50">
              AI Verse Companion
            </h2>
            <p className="text-xs text-emerald-800/70 dark:text-emerald-300/70 leading-relaxed">
              Tap any verse to generate instantaneous AI explanations, moral reflections, lexical 3-letter roots, and practical daily life takeaways.
            </p>
          </div>
        </div>

        {/* Informative Surah Summary Guide */}
        <div className="p-6 rounded-3xl bg-emerald-50/60 dark:bg-emerald-950/40 border border-emerald-900/10 dark:border-emerald-500/20 space-y-4">
          <h2 className="text-lg font-bold text-emerald-950 dark:text-emerald-100">
            Structure of the Holy Quran
          </h2>
          <div className="text-xs text-emerald-800/80 dark:text-emerald-200/80 leading-relaxed space-y-2">
            <p>
              The Holy Quran consists of <strong>114 Surahs (Chapters)</strong>, comprising <strong>6,236 Ayahs (Verses)</strong> across <strong>30 Juz (Parts)</strong>. The Surahs are categorized into <strong>Meccan (Makki)</strong> Surahs—revealed prior to the Hijrah with emphasis on faith, monotheism (Tawhid), and the afterlife—and <strong>Medinan (Madani)</strong> Surahs, which outline community ethics, legislation, and civic relationships.
            </p>
            <p>
              Use the NoorVerse reader controls above to search by Surah name (e.g. <em>Al-Fatihah</em>, <em>Al-Baqarah</em>, <em>Yasin</em>, <em>Al-Mulk</em>, <em>Al-Kahf</em>) or number to start reciting.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <Link
              to="/tajweed"
              className="inline-flex items-center space-x-1.5 text-xs font-bold text-emerald-800 dark:text-amber-300 hover:underline"
            >
              <span>Learn Tajweed Rules</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <span className="text-emerald-400">•</span>
            <Link
              to="/quran-tafsir"
              className="inline-flex items-center space-x-1.5 text-xs font-bold text-emerald-800 dark:text-amber-300 hover:underline"
            >
              <span>Read Tafsir & Context</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <span className="text-emerald-400">•</span>
            <Link
              to="/arabic-roots"
              className="inline-flex items-center space-x-1.5 text-xs font-bold text-emerald-800 dark:text-amber-300 hover:underline"
            >
              <span>Search Arabic Roots</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <PublicFooter />
    </div>
  );
};
