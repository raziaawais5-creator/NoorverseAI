import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, BookOpen, Volume2, Sparkles, Compass, Heart, Search, CheckCircle2, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { SeoHead } from '../common/SeoHead';
import { PublicFooter } from '../common/PublicFooter';

const LEARNING_STEPS = [
  {
    step: '01',
    title: 'Foundational Arabic & Noorani Qaida',
    desc: 'Master the 28 Arabic letters, connected forms, vowel marks (Fathah, Kasrah, Dammah), Tanween, and Sukoon through interactive pronunciation cards.',
    link: '/tajweed',
    linkText: 'Explore Noorani Qaida',
    icon: GraduationCap,
  },
  {
    step: '02',
    title: 'Rules of Tajweed & Voice Coaching',
    desc: 'Learn the rules of Noon Sakinah, Meem Sakinah, Qalqalah, and Madd, verified in real-time with our AI Voice Pronunciation Coach.',
    link: '/quran-pronunciation',
    linkText: 'Practice with Voice Coach',
    icon: Volume2,
  },
  {
    step: '03',
    title: 'Complete Quran Recitation & Dual Calligraphy',
    desc: 'Read all 114 Surahs with Uthmani or IndoPak scripts, English & Urdu translations, word-by-word analysis, and world-class Qari audio.',
    link: '/quran',
    linkText: 'Read Holy Quran',
    icon: BookOpen,
  },
  {
    step: '04',
    title: 'Deep AI Tafsir & 3-Letter Arabic Roots',
    desc: 'Explore historical contexts (Asbab al-Nuzul), derive theological lessons, and trace Quranic vocabulary back to their 3-letter Arabic roots.',
    link: '/quran-tafsir',
    linkText: 'Explore Verse Tafsir',
    icon: Sparkles,
  },
  {
    step: '05',
    title: 'Hifz Memorization & Retention Quizzes',
    desc: 'Set custom memorization targets, track streaks, and test your comprehension with AI-crafted Islamic knowledge quizzes.',
    link: '/ai-quran',
    linkText: 'Open AI Study Hub',
    icon: Search,
  },
  {
    step: '06',
    title: 'Daily Spiritual Rhythm: Prayer & Dhikr',
    desc: 'Never miss a prayer with accurate GPS/local prayer times, Qibla compass, and interactive digital Tasbeeh for morning & evening Adhkar.',
    link: '/prayer',
    linkText: 'View Prayer Times & Qibla',
    icon: Compass,
  },
];

const FAQS = [
  {
    q: 'How does NoorVerse AI help beginners learn Quran recitation?',
    a: 'NoorVerse AI provides a structured, step-by-step Noorani Qaida curriculum with audio pronunciations by master Qaris like Sheikh Abdul Basit, paired with real-time AI Voice feedback to correct articulation slips.',
  },
  {
    q: 'Are the AI Tafsir explanations authentic and safe?',
    a: 'Yes. Our AI system prompts are grounded in classical exegesis (Tafsir Ibn Kathir, Al-Jalalayn, and Ma\'ariful Quran) and explicitly tailored to provide respectful, educational reflections.',
  },
  {
    q: 'Can I use NoorVerse AI for daily prayer times and Dhikr?',
    a: 'Absolutely. NoorVerse AI includes accurate prayer calculations, automatic next-prayer countdowns, an interactive Qibla compass, and a digital Tasbeeh counter with authentic morning/evening Duas.',
  },
];

export const PublicIslamicLearningPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F7F9FC] dark:bg-[#0B1320] text-[#1F3A5F] dark:text-[#F7F9FC]">
      <SeoHead
        title="Islamic Learning with AI | NoorVerse AI"
        description="Comprehensive Islamic learning curriculum powered by AI: Noorani Qaida, Tajweed rules, Quran memorization (Hifz), daily prayer times, Qibla compass, and Dhikr."
        canonicalUrl="https://noorverse-ai.vercel.app/islamic-learning"
        keywords="Islamic learning, learn Quran with AI, Islamic curriculum, Noorani Qaida, Tajweed courses, Hifz planner, prayer times app, Tasbeeh counter, NoorVerse AI"
        structuredData={[
          {
            '@context': 'https://schema.org',
            '@type': 'Course',
            name: 'Holistic Islamic & Quranic Learning Curriculum',
            description: 'A 6-step integrated curriculum for Quran reading, Tajweed mastery, Arabic root linguistics, and daily spiritual routines.',
            provider: {
              '@type': 'Organization',
              name: 'NoorVerse AI',
            },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQS.map((faq) => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.a,
              },
            })),
          },
        ]}
      />

      {/* SEO Introductory Hero Banner */}
      <section className="bg-gradient-to-br from-[#0D2218] via-[#143627] to-[#091811] text-white py-8 px-4 border-b border-emerald-500/20">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold border border-amber-400/40">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Structured Islamic Curriculum</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-emerald-50">
            Comprehensive Islamic Learning with AI
          </h1>

          <p className="text-sm sm:text-base text-emerald-200/80 max-w-3xl leading-relaxed">
            Whether you are taking your first steps in reading Arabic with Noorani Qaida, perfecting your recitation with our AI Voice Tajweed Coach, or building a sustainable daily routine of prayer and Dhikr, NoorVerse AI provides an all-in-one educational platform.
          </p>

          {/* Quick Hub Links */}
          <div className="flex flex-wrap gap-2 pt-2 text-xs font-semibold">
            <Link
              to="/quran"
              className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-emerald-200 border border-white/15 transition-all flex items-center space-x-1.5"
            >
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
              <span>Read Quran</span>
            </Link>
            <Link
              to="/tajweed"
              className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-emerald-200 border border-white/15 transition-all flex items-center space-x-1.5"
            >
              <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
              <span>Tajweed Rules</span>
            </Link>
            <Link
              to="/ai-quran"
              className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-emerald-200 border border-white/15 transition-all flex items-center space-x-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>AI Study Companion</span>
            </Link>
            <Link
              to="/prayer"
              className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-emerald-200 border border-white/15 transition-all flex items-center space-x-1.5"
            >
              <Compass className="w-3.5 h-3.5 text-amber-400" />
              <span>Prayer Times</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 6-Step Curriculum Roadmap */}
      <section className="max-w-4xl mx-auto px-4 py-12 space-y-8">
        <div>
          <h2 className="text-xl font-extrabold text-emerald-950 dark:text-emerald-50 mb-2">
            The NoorVerse 6-Step Islamic Learning Roadmap
          </h2>
          <p className="text-xs text-emerald-800/70 dark:text-emerald-300/70 leading-relaxed">
            Follow a proven path from foundational Arabic literacy to advanced theological reflection and consistent daily worship:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {LEARNING_STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="p-6 rounded-3xl bg-white dark:bg-[#18221D] border border-emerald-900/10 dark:border-emerald-500/15 shadow-sm space-y-4 flex flex-col justify-between hover:border-emerald-500/30 transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xl font-black text-emerald-900/20 dark:text-emerald-500/30 font-mono">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-emerald-950 dark:text-emerald-50">
                    {step.title}
                  </h3>

                  <p className="text-xs text-emerald-800/70 dark:text-emerald-300/70 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <Link
                  to={step.link}
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-emerald-700 dark:text-amber-300 hover:underline pt-2"
                >
                  <span>{step.linkText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Frequently Asked Questions */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#18221D] border border-emerald-900/10 dark:border-emerald-500/15 shadow-sm space-y-6">
          <div className="flex items-center space-x-2">
            <HelpCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <h3 className="text-lg font-bold text-emerald-950 dark:text-emerald-50">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/30 border border-emerald-900/5 dark:border-emerald-500/10 space-y-1.5"
              >
                <h4 className="text-xs font-bold text-emerald-950 dark:text-emerald-100">
                  {faq.q}
                </h4>
                <p className="text-xs text-emerald-800/80 dark:text-emerald-300/80 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PublicFooter />
    </div>
  );
};
