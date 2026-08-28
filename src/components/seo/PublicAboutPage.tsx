import React from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  GraduationCap,
  Sparkles,
  Volume2,
  ShieldCheck,
  Heart,
  Compass,
  CheckCircle2,
  Users,
  Award,
  Globe,
  ArrowRight,
  HelpCircle,
} from 'lucide-react';
import { SeoHead } from '../common/SeoHead';
import { PublicFooter } from '../common/PublicFooter';

export const PublicAboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F7F9FC] dark:bg-[#0B1320] text-[#1F3A5F] dark:text-[#F7F9FC] transition-colors duration-200">
      <SeoHead
        title="About NoorVerse AI — Our Mission & Quranic Education Platform"
        description="Learn about NoorVerse AI: our mission to make Quranic education, authentic Tajweed, Noorani Qaida, and Islamic knowledge accessible globally through AI technology."
        canonicalUrl="https://noorverse-ai.vercel.app/about"
        keywords="About NoorVerse AI, Islamic educational platform, AI Quran mission, Quran Tajweed online, Islamic learning technology"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'About NoorVerse AI',
          description:
            'NoorVerse AI is dedicated to providing peaceful, authentic, and accessible Quran and Islamic education tools powered by ethical AI and verified Islamic scholarship.',
          url: 'https://noorverse-ai.vercel.app/about',
          mainEntity: {
            '@type': 'Organization',
            name: 'NoorVerse AI',
            url: 'https://noorverse-ai.vercel.app/',
            logo: 'https://noorverse-ai.vercel.app/icon.svg',
          },
        }}
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-br from-[#0F281E] via-[#16382B] to-[#0A1A14] text-white py-12 px-4 border-b border-emerald-500/20">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold border border-amber-400/40">
            <Heart className="w-3.5 h-3.5 fill-amber-300/30" />
            <span>Our Mission & Vision</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-emerald-50">
            Empowering Hearts with the Light of the Quran
          </h1>

          <p className="text-sm sm:text-base text-emerald-200/90 max-w-3xl leading-relaxed">
            NoorVerse AI was founded to unite the timeless authenticity of Quranic scholarship with intuitive, modern educational technology. We believe every seeker, child, and adult deserves access to world-class Tajweed guidance, clear pronunciation feedback, deep verse reflections, and structured Islamic learning.
          </p>

          <div className="flex flex-wrap gap-2 pt-2 text-xs font-semibold">
            <Link
              to="/quran"
              className="px-4 py-2 rounded-xl bg-amber-400 text-emerald-950 hover:bg-amber-300 transition-all font-bold flex items-center space-x-1.5 shadow"
            >
              <BookOpen className="w-4 h-4" />
              <span>Explore Quran Reader</span>
            </Link>
            <Link
              to="/noorani-qaida"
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-emerald-100 border border-white/20 transition-all flex items-center space-x-1.5"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Interactive Noorani Qaida</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="max-w-4xl mx-auto px-4 py-12 space-y-10">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-black text-emerald-950 dark:text-emerald-50">
            Our Core Principles
          </h2>
          <p className="text-xs sm:text-sm text-emerald-800/70 dark:text-emerald-300/70 max-w-xl mx-auto">
            Grounded in Islamic tradition, designed with reverence and precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-white dark:bg-[#18221D] border border-emerald-900/10 dark:border-emerald-500/15 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 flex items-center justify-center font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-emerald-950 dark:text-emerald-50">
              Scholarly Authenticity
            </h3>
            <p className="text-xs text-emerald-800/75 dark:text-emerald-300/75 leading-relaxed">
              Every verse, translation, Tajweed rule, and Tafsir reflection is aligned with classical Ahlus-Sunnah methodology and recognized Qira'at standards (Hafs an Asim).
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white dark:bg-[#18221D] border border-emerald-900/10 dark:border-emerald-500/15 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-400/15 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-emerald-950 dark:text-emerald-50">
              Ethical AI Technology
            </h3>
            <p className="text-xs text-emerald-800/75 dark:text-emerald-300/75 leading-relaxed">
              We harness modern machine learning for acoustic phonetics, speech diagnostics, root search, and adaptive memorization schedules, maintaining strict reverence for the sacred text.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white dark:bg-[#18221D] border border-emerald-900/10 dark:border-emerald-500/15 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 flex items-center justify-center font-bold">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-emerald-950 dark:text-emerald-50">
              Universal Accessibility
            </h3>
            <p className="text-xs text-emerald-800/75 dark:text-emerald-300/75 leading-relaxed">
              NoorVerse AI is optimized for all devices, screen sizes, and connections so learners worldwide can study anywhere, anytime with zero ad clutter.
            </p>
          </div>
        </div>

        {/* Feature Highlights Breakdown */}
        <div className="p-8 rounded-3xl bg-emerald-950 text-white space-y-6">
          <h3 className="text-xl font-bold text-emerald-50">
            What You Will Find in NoorVerse AI
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-emerald-100/90">
            <div className="flex items-start space-x-2.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span><strong>114 Surahs:</strong> Complete Uthmani & IndoPak scripts with word-by-word translations and multi-reciter continuous audio.</span>
            </div>
            <div className="flex items-start space-x-2.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span><strong>15-Lesson Noorani Qaida:</strong> Interactive alphabet cards with Makharij articulation points and master Qari voices.</span>
            </div>
            <div className="flex items-start space-x-2.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span><strong>Voice Tajweed Coaching:</strong> Real-time microphone audio recording and mistake detection.</span>
            </div>
            <div className="flex items-start space-x-2.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span><strong>3-Letter Arabic Roots:</strong> Interactive root dictionary mapping Quranic terms back to their lexical origins.</span>
            </div>
            <div className="flex items-start space-x-2.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span><strong>AI Verse Tafsir:</strong> Historical context (Asbab al-Nuzul) and daily life moral takeaways.</span>
            </div>
            <div className="flex items-start space-x-2.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span><strong>Prayer & Dhikr Tools:</strong> Accurate local prayer times, Qibla compass, and interactive digital Tasbeeh counter.</span>
            </div>
          </div>
        </div>

        {/* Quick Contact Link */}
        <div className="p-6 rounded-3xl bg-white dark:bg-[#18221D] border border-emerald-900/10 dark:border-emerald-500/15 text-center space-y-3">
          <h3 className="text-lg font-bold text-emerald-950 dark:text-emerald-50">
            Have Questions or Feedback?
          </h3>
          <p className="text-xs text-emerald-800/70 dark:text-emerald-300/70 max-w-md mx-auto">
            We value feedback from students, teachers, and scholars to continually refine our platform.
          </p>
          <div>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-2xl bg-emerald-700 text-amber-300 hover:bg-emerald-800 font-bold text-xs shadow transition-all"
            >
              <span>Contact the NoorVerse Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <PublicFooter />
    </div>
  );
};
