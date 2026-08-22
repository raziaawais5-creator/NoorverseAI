import React from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  GraduationCap,
  Volume2,
  Sparkles,
  Mic,
  ArrowRight,
  CheckCircle2,
  Layers,
  Award,
  HelpCircle,
} from 'lucide-react';
import { SeoHead } from '../common/SeoHead';
import { NooraniQaidaView } from '../learn/NooraniQaidaView';
import { PublicFooter } from '../common/PublicFooter';

export const PublicNooraniQaidaPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F7F9FC] dark:bg-[#0B1320] text-[#1F3A5F] dark:text-[#F7F9FC] transition-colors duration-200">
      <SeoHead
        title="Interactive Noorani Qaida & Arabic Alphabet Learning | NoorVerse AI"
        description="Learn Noorani Qaida interactively with multi-voice audio pronunciation (Sheikh Al-Husary, Mishary, Ayman Suwayd), Arabic alphabet Makharij, compound letters, Harakat, Tanween, Sukoon, Shaddah, and interactive quizzes."
        canonicalUrl="https://noorverse-ai.vercel.app/noorani-qaida"
        keywords="interactive Noorani Qaida, Noorani Qaida online, learn Noorani Qaida audio, Arabic alphabet for beginners, Noorani Qaida Makharij, Quran alphabet pronunciation, Tajweed basics, NoorVerse AI"
        structuredData={[
          {
            '@context': 'https://schema.org',
            '@type': 'Course',
            name: 'Interactive Noorani Qaida Foundation Course',
            description:
              'A complete 15-chapter interactive Noorani Qaida course teaching Arabic alphabets, articulation points (Makharij), vowel markings (Harakat), Tanween, Sukoon, Tashdeed, and Madd rules with authentic audio playback.',
            provider: {
              '@type': 'Organization',
              name: 'NoorVerse AI',
              url: 'https://noorverse-ai.vercel.app/',
            },
            hasCourseInstance: {
              '@type': 'CourseInstance',
              courseMode: 'Online',
              courseWorkload: 'PT15M',
            },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'LearningResource',
            name: 'NoorVerse Interactive Noorani Qaida Reader',
            learningResourceType: 'Interactive Digital Qaida',
            educationalLevel: 'Beginner to Intermediate',
            inLanguage: 'ar, en, ur',
          },
        ]}
      />

      {/* Hero Banner with Educational Context */}
      <section className="bg-gradient-to-br from-[#0F281E] via-[#16382B] to-[#0A1A14] text-white py-8 px-4 border-b border-emerald-500/20">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold border border-amber-400/40">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Foundational Quranic Phonetics & Makharij</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-emerald-50">
            Interactive Noorani Qaida with Audio & Makharij
          </h1>

          <p className="text-sm sm:text-base text-emerald-200/80 max-w-3xl leading-relaxed">
            The Noorani Qaida (القاعدة النورانية) is the world’s most trusted curriculum for learning Quranic Arabic pronunciation from scratch. Tap any letter or word below to listen in crystal-clear audio with master reciter voices (Sheikh Al-Husary, Sheikh Mishary Al-Afasy, Dr. Ayman Suwayd, Sheikh Abdul Basit, and Ustadha Zeinab), adjust playback speed, view exact articulation points (Makharij), and test your skills with quizzes.
          </p>

          {/* Quick Navigation Links */}
          <div className="flex flex-wrap gap-2 pt-2 text-xs font-semibold">
            <Link
              to="/tajweed"
              className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-emerald-200 border border-white/15 transition-all flex items-center space-x-1.5"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Tajweed Rules Hub</span>
            </Link>
            <Link
              to="/quran-pronunciation"
              className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-amber-300 border border-white/15 transition-all flex items-center space-x-1.5"
            >
              <Mic className="w-3.5 h-3.5" />
              <span>Voice Pronunciation Coach</span>
            </Link>
            <Link
              to="/quran"
              className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-emerald-200 border border-white/15 transition-all flex items-center space-x-1.5"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Read Holy Quran</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Interactive Noorani Qaida Component */}
      <main className="pt-4 max-w-4xl mx-auto px-4">
        <NooraniQaidaView onBack={() => {}} />
      </main>

      {/* Structured Informational Guide & Syllabus for SEO & Learners */}
      <section className="max-w-4xl mx-auto px-4 py-12 space-y-10">
        <div className="border-t border-[#C7CEDB]/40 dark:border-[#1F3A5F]/60 pt-8">
          <h2 className="text-xl sm:text-2xl font-black text-emerald-950 dark:text-emerald-50 mb-3">
            The 15 Chapters of Noorani Qaida
          </h2>
          <p className="text-xs sm:text-sm text-emerald-800/70 dark:text-emerald-300/70 leading-relaxed max-w-3xl">
            NoorVerse AI covers the complete traditional Noorani Qaida syllabus step-by-step. Each lesson builds phonetic muscle memory for effortless and melodious Quran recitation:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-white dark:bg-[#18221D] border border-emerald-900/10 dark:border-emerald-500/15 shadow-sm space-y-2">
            <div className="flex items-center space-x-2">
              <span className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 font-bold text-xs flex items-center justify-center">1</span>
              <h3 className="text-sm font-bold text-emerald-950 dark:text-emerald-50">
                Single Letters (المفردات)
              </h3>
            </div>
            <p className="text-xs text-emerald-800/70 dark:text-emerald-300/70 leading-relaxed">
              28 Arabic alphabets in their isolated forms with exact points of articulation (Makharij).
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-[#18221D] border border-emerald-900/10 dark:border-emerald-500/15 shadow-sm space-y-2">
            <div className="flex items-center space-x-2">
              <span className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 font-bold text-xs flex items-center justify-center">2</span>
              <h3 className="text-sm font-bold text-emerald-950 dark:text-emerald-50">
                Compound Letters (المركبات)
              </h3>
            </div>
            <p className="text-xs text-emerald-800/70 dark:text-emerald-300/70 leading-relaxed">
              Initial, medial, and final letter connections (e.g., Ba-Alif, Lam-Alif, Jeem-Dal).
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-[#18221D] border border-emerald-900/10 dark:border-emerald-500/15 shadow-sm space-y-2">
            <div className="flex items-center space-x-2">
              <span className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 font-bold text-xs flex items-center justify-center">3</span>
              <h3 className="text-sm font-bold text-emerald-950 dark:text-emerald-50">
                Muqatta'at (المقطعات)
              </h3>
            </div>
            <p className="text-xs text-emerald-800/70 dark:text-emerald-300/70 leading-relaxed">
              Disjointed opening letters of Quranic Surahs (Alif-Lam-Meem, Ya-Seen, Ha-Meem).
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-[#18221D] border border-emerald-900/10 dark:border-emerald-500/15 shadow-sm space-y-2">
            <div className="flex items-center space-x-2">
              <span className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 font-bold text-xs flex items-center justify-center">4</span>
              <h3 className="text-sm font-bold text-emerald-950 dark:text-emerald-50">
                Harakat / Vowels (الحركات)
              </h3>
            </div>
            <p className="text-xs text-emerald-800/70 dark:text-emerald-300/70 leading-relaxed">
              Short vowels: Fatha (ـَ), Kasra (ـِ), and Damma (ـُ) pronounced crisply without elongation.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-[#18221D] border border-emerald-900/10 dark:border-emerald-500/15 shadow-sm space-y-2">
            <div className="flex items-center space-x-2">
              <span className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 font-bold text-xs flex items-center justify-center">5</span>
              <h3 className="text-sm font-bold text-emerald-950 dark:text-emerald-50">
                Tanween (التنوين)
              </h3>
            </div>
            <p className="text-xs text-emerald-800/70 dark:text-emerald-300/70 leading-relaxed">
              Double vowels: Fathatayn (ـً), Kasratayn (ـٍ), and Dammatayn (ـٌ) with subtle nasal resonance.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-[#18221D] border border-emerald-900/10 dark:border-emerald-500/15 shadow-sm space-y-2">
            <div className="flex items-center space-x-2">
              <span className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 font-bold text-xs flex items-center justify-center">6-10</span>
              <h3 className="text-sm font-bold text-emerald-950 dark:text-emerald-50">
                Sukoon & Madd Letters
              </h3>
            </div>
            <p className="text-xs text-emerald-800/70 dark:text-emerald-300/70 leading-relaxed">
              Resting consonants (Sukoon/Jazm), standing vowels, and elongated Leen letters (Alif, Waw, Ya).
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-[#18221D] border border-emerald-900/10 dark:border-emerald-500/15 shadow-sm space-y-2">
            <div className="flex items-center space-x-2">
              <span className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 font-bold text-xs flex items-center justify-center">11-15</span>
              <h3 className="text-sm font-bold text-emerald-950 dark:text-emerald-50">
                Tashdeed (الشدّة) & Advanced
              </h3>
            </div>
            <p className="text-xs text-emerald-800/70 dark:text-emerald-300/70 leading-relaxed">
              Doubled consonants, Tashdeed with Sukoon, Ghunnah nasalization, and full word reading.
            </p>
          </div>
        </div>

        {/* Anatomical Makharij Summary Box */}
        <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-900/10 to-teal-900/10 border border-emerald-500/20 space-y-4">
          <div className="flex items-center space-x-2">
            <Award className="w-5 h-5 text-emerald-700 dark:text-emerald-400" />
            <h3 className="text-base font-bold text-emerald-950 dark:text-emerald-50">
              The 5 Primary Articulation Regions (مخارج الحروف)
            </h3>
          </div>
          <p className="text-xs text-emerald-800/80 dark:text-emerald-300/80 leading-relaxed">
            Every Arabic letter originates from one of five main anatomical regions:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-white dark:bg-[#132035] border border-emerald-900/10 dark:border-emerald-500/10">
              <strong className="text-emerald-950 dark:text-emerald-50 block mb-1">1. Al-Halq (Throat / الحلق)</strong>
              <span className="text-emerald-800/70 dark:text-emerald-300/70">Bottom: ء، هـ | Middle: ع، ح | Top: غ، خ</span>
            </div>
            <div className="p-3 rounded-xl bg-white dark:bg-[#132035] border border-emerald-900/10 dark:border-emerald-500/10">
              <strong className="text-emerald-950 dark:text-emerald-50 block mb-1">2. Al-Lisan (Tongue / اللسان)</strong>
              <span className="text-emerald-800/70 dark:text-emerald-300/70">10 specific points producing 18 letters including ق، ك، ج، ش، ي، ض، ل، ن، ر، ط، د، ت، ص، ز، س، ظ، ذ، ث.</span>
            </div>
            <div className="p-3 rounded-xl bg-white dark:bg-[#132035] border border-emerald-900/10 dark:border-emerald-500/10">
              <strong className="text-emerald-950 dark:text-emerald-50 block mb-1">3. Ash-Shafatan (Lips / الشفتان)</strong>
              <span className="text-emerald-800/70 dark:text-emerald-300/70">Letters produced using lips: ف، ب، م، و.</span>
            </div>
            <div className="p-3 rounded-xl bg-white dark:bg-[#132035] border border-emerald-900/10 dark:border-emerald-500/10">
              <strong className="text-emerald-950 dark:text-emerald-50 block mb-1">4. Al-Khayshum (Nasal Cavity / الخيشوم)</strong>
              <span className="text-emerald-800/70 dark:text-emerald-300/70">The home of Ghunnah (nasal resonance on Noon and Meem Mushaddadah).</span>
            </div>
            <div className="p-3 rounded-xl bg-white dark:bg-[#132035] border border-emerald-900/10 dark:border-emerald-500/10">
              <strong className="text-emerald-950 dark:text-emerald-50 block mb-1">5. Al-Jawf (Oral Cavity / الجوف)</strong>
              <span className="text-emerald-800/70 dark:text-emerald-300/70">The open air passage that elongates Madd vowels: Alif, Waw, and Ya.</span>
            </div>
          </div>
        </div>

        {/* Call to action for Voice Coach */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-950 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="space-y-1">
            <h3 className="text-base font-black text-amber-300">
              Want Instant Feedback on Your Recitation?
            </h3>
            <p className="text-xs text-emerald-200/80 max-w-lg">
              Use our AI Voice Pronunciation Coach to speak into your microphone and receive real-time feedback on letter precision, elongation, and Makhraj accuracy.
            </p>
          </div>

          <Link
            to="/quran-pronunciation"
            className="px-5 py-3 rounded-2xl bg-amber-400 hover:bg-amber-300 text-emerald-950 font-black text-xs shadow-lg transition-all flex items-center space-x-2 shrink-0"
          >
            <Mic className="w-4 h-4" />
            <span>Open Voice Coach</span>
          </Link>
        </div>
      </section>

      <PublicFooter />
    </div>
  );
};
