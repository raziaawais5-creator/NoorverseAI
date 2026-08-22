import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Volume2, Sparkles, BookOpen, CheckCircle2, ArrowRight, Award, Mic, Play } from 'lucide-react';
import { SeoHead } from '../common/SeoHead';
import { TajweedLessonView } from '../learn/TajweedLessonView';
import { NooraniQaidaView } from '../learn/NooraniQaidaView';
import { PublicFooter } from '../common/PublicFooter';

export const PublicTajweedPage: React.FC = () => {
  const [activeModule, setActiveModule] = useState<'tajweed' | 'qaida'>('tajweed');

  return (
    <div className="min-h-screen bg-[#F7F9FC] dark:bg-[#0B1320] text-[#1F3A5F] dark:text-[#F7F9FC]">
      <SeoHead
        title="AI Tajweed Learning & Quran Recitation Practice | NoorVerse AI"
        description="Master the rules of Tajweed with interactive Noorani Qaida, articulation points (Makharij), Noon Sakinah, Meem Sakinah, Qalqalah, and real-time audio recitation practice."
        canonicalUrl="https://noorverse-ai.vercel.app/tajweed"
        keywords="AI Tajweed, Tajweed rules, learn Tajweed online, Noorani Qaida, Makharij articulation points, Noon Sakinah, Qalqalah, Quran recitation rules"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Course',
          name: 'AI Tajweed Rules & Recitation Mastery Course',
          description: 'Comprehensive curriculum covering all classical Tajweed rules, Arabic letter articulation (Makharij), and interactive Noorani Qaida exercises.',
          provider: {
            '@type': 'Organization',
            name: 'NoorVerse AI',
            sameAs: 'https://noorverse-ai.vercel.app/',
          },
        }}
      />

      {/* SEO Introductory Hero Banner */}
      <section className="bg-gradient-to-br from-[#0F281E] via-[#16382B] to-[#0A1A14] text-white py-8 px-4 border-b border-emerald-500/20">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold border border-amber-400/40">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Tajweed Curriculum & Science of Recitation</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-emerald-50">
            AI Tajweed Learning & Quran Recitation Practice
          </h1>

          <p className="text-sm sm:text-base text-emerald-200/80 max-w-3xl leading-relaxed">
            Tajweed (تجويد) literally means "enhancement" or "proficiency." In Quranic sciences, Tajweed is the knowledge and application of the rules of recitation so that every Arabic letter is given its exact articulation point (Makhraj) and inherent characteristics (Sifat). NoorVerse AI provides an interactive, structured curriculum with authentic Qari voices and real-time AI pronunciation feedback.
          </p>

          {/* Quick Navigation Links */}
          <div className="flex flex-wrap gap-2 pt-2 text-xs font-semibold">
            <Link
              to="/quran-pronunciation"
              className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-amber-300 border border-white/15 transition-all flex items-center space-x-1.5"
            >
              <Mic className="w-3.5 h-3.5" />
              <span>Voice Tajweed Coach</span>
            </Link>
            <Link
              to="/quran"
              className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-emerald-200 border border-white/15 transition-all flex items-center space-x-1.5"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Read Full Quran</span>
            </Link>
            <Link
              to="/arabic-roots"
              className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-emerald-200 border border-white/15 transition-all flex items-center space-x-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>3-Letter Arabic Roots</span>
            </Link>
            <Link
              to="/islamic-learning"
              className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-emerald-200 border border-white/15 transition-all flex items-center space-x-1.5"
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Islamic Curriculum</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Module Selector Pill Bar */}
      <div className="max-w-4xl mx-auto px-4 pt-6 flex items-center space-x-2">
        <button
          onClick={() => setActiveModule('tajweed')}
          className={`px-4 py-2 rounded-2xl font-bold text-xs transition-all flex items-center space-x-2 ${
            activeModule === 'tajweed'
              ? 'bg-emerald-700 text-amber-300 shadow-md'
              : 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/50'
          }`}
        >
          <GraduationCap className="w-4 h-4" />
          <span>Tajweed Rules & Practice</span>
        </button>

        <button
          onClick={() => setActiveModule('qaida')}
          className={`px-4 py-2 rounded-2xl font-bold text-xs transition-all flex items-center space-x-2 ${
            activeModule === 'qaida'
              ? 'bg-emerald-700 text-amber-300 shadow-md'
              : 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/50'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Interactive Noorani Qaida (15 Chapters)</span>
        </button>
      </div>

      {/* Interactive Tajweed / Qaida Component */}
      <div className="pt-2">
        {activeModule === 'tajweed' ? (
          <TajweedLessonView onBack={() => setActiveModule('qaida')} />
        ) : (
          <NooraniQaidaView onBack={() => setActiveModule('tajweed')} />
        )}
      </div>

      {/* Structured Informational Tajweed Guide for SEO & Crawlers */}
      <section className="max-w-4xl mx-auto px-4 py-12 space-y-10">
        <div>
          <h2 className="text-xl font-extrabold text-emerald-950 dark:text-emerald-50 mb-3">
            Core Rules of Tajweed Covered in NoorVerse
          </h2>
          <p className="text-xs text-emerald-800/70 dark:text-emerald-300/70 leading-relaxed">
            Our interactive Tajweed system guides you systematically through the foundational rules documented by classical scholars such as Imam Ibn al-Jazari:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="p-5 rounded-2xl bg-white dark:bg-[#18221D] border border-emerald-900/10 dark:border-emerald-500/15 shadow-sm space-y-2">
            <div className="flex items-center space-x-2">
              <span className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 font-bold text-xs flex items-center justify-center">1</span>
              <h3 className="text-sm font-bold text-emerald-950 dark:text-emerald-50">
                Makharij al-Huruf (Points of Articulation)
              </h3>
            </div>
            <p className="text-xs text-emerald-800/70 dark:text-emerald-300/70 leading-relaxed">
              The 17 precise anatomical points across the throat (Halq), tongue (Lisan), lips (Shafatan), nasal cavity (Khayshum), and chest/oral cavity (Jawf) that produce every Arabic letter correctly.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-[#18221D] border border-emerald-900/10 dark:border-emerald-500/15 shadow-sm space-y-2">
            <div className="flex items-center space-x-2">
              <span className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 font-bold text-xs flex items-center justify-center">2</span>
              <h3 className="text-sm font-bold text-emerald-950 dark:text-emerald-50">
                Rules of Noon Sakinah & Tanween
              </h3>
            </div>
            <p className="text-xs text-emerald-800/70 dark:text-emerald-300/70 leading-relaxed">
              Master the four essential rules: <strong>Izhar</strong> (clear pronunciation), <strong>Idgham</strong> (merging with or without Ghunnah), <strong>Iqlab</strong> (converting Noon to Meem), and <strong>Ikhfa</strong> (subtle nasal concealing).
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-[#18221D] border border-emerald-900/10 dark:border-emerald-500/15 shadow-sm space-y-2">
            <div className="flex items-center space-x-2">
              <span className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 font-bold text-xs flex items-center justify-center">3</span>
              <h3 className="text-sm font-bold text-emerald-950 dark:text-emerald-50">
                Qalqalah (Echoing & Bouncing)
              </h3>
            </div>
            <p className="text-xs text-emerald-800/70 dark:text-emerald-300/70 leading-relaxed">
              The vibrant resonance applied to the five Qalqalah letters <strong>ق، ط، ب، ج، د</strong> (Qutb Jad) when carrying a Sukoon or stopping at verse ends (Qalqalah Sughra vs Kubra).
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-[#18221D] border border-emerald-900/10 dark:border-emerald-500/15 shadow-sm space-y-2">
            <div className="flex items-center space-x-2">
              <span className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 font-bold text-xs flex items-center justify-center">4</span>
              <h3 className="text-sm font-bold text-emerald-950 dark:text-emerald-50">
                Madd (Elongation & Vowel Extension)
              </h3>
            </div>
            <p className="text-xs text-emerald-800/70 dark:text-emerald-300/70 leading-relaxed">
              Natural elongation (Madd Asli / 2 Harakah) and secondary elongation (Madd Muttasil, Munfasil, Lazim / 4 to 6 Harakah) to ensure the rhythm of Quranic recitation preserves its beauty.
            </p>
          </div>
        </div>

        {/* Call to Action Box */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-950 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="space-y-1">
            <h3 className="text-base font-black text-amber-300">
              Practice Recitation with Voice AI Coach
            </h3>
            <p className="text-xs text-emerald-200/80 max-w-lg">
              Recite any Noorani Qaida letter or Quranic verse directly into your microphone for instant AI Tajweed scoring, error detection, and personalized advice.
            </p>
          </div>

          <Link
            to="/quran-pronunciation"
            className="px-5 py-3 rounded-2xl bg-amber-400 hover:bg-amber-300 text-emerald-950 font-black text-xs shadow-lg transition-all flex items-center space-x-2 shrink-0"
          >
            <Mic className="w-4 h-4" />
            <span>Try Voice Coach</span>
          </Link>
        </div>
      </section>

      <PublicFooter />
    </div>
  );
};
