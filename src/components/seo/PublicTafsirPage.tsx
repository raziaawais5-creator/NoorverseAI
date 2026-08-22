import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Sparkles, Search, GraduationCap, ArrowRight, CheckCircle2, Bookmark, Share2, HelpCircle } from 'lucide-react';
import { SeoHead } from '../common/SeoHead';
import { PublicFooter } from '../common/PublicFooter';

interface TafsirSample {
  id: string;
  surahName: string;
  surahNumber: number;
  ayahNumber: number;
  arabicText: string;
  translation: string;
  asbabAlNuzul: string;
  coreLessons: string[];
  reflectionQuestion: string;
  classicalReference: string;
}

const SAMPLE_TAFSIRS: TafsirSample[] = [
  {
    id: 'fatihah-1',
    surahName: 'Al-Fatihah',
    surahNumber: 1,
    ayahNumber: 2,
    arabicText: 'ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ',
    translation: '[All] praise is [due] to Allah, Lord of the worlds.',
    asbabAlNuzul: 'Revealed in Makkah early in the prophetic mission as the opening foundation (Umm al-Kitab) of the divine revelation and prayer.',
    coreLessons: [
      'True gratitude (Hamd) encompasses both unconditional praise for Allah’s perfection and heartfelt thanksgiving for His blessings.',
      'Rabb implies the Creator, Sustainer, Educator, and Nourisher who nurtures all creation stage by stage.',
      'Al-Alameen spans all existing realms—humanity, the animal kingdom, galaxies, and the unseen metaphysical world.',
    ],
    reflectionQuestion: 'How often throughout your day do you pause to consciously acknowledge the invisible gifts sustaining your life?',
    classicalReference: 'Tafsir Ibn Kathir & Tafsir al-Jalalayn',
  },
  {
    id: 'baqarah-255',
    surahName: 'Al-Baqarah (Ayat al-Kursi)',
    surahNumber: 2,
    ayahNumber: 255,
    arabicText: 'ٱللَّهُ لَآ إِلَـٰهَ إِلَّا هُوَ ٱلْحَىُّ ٱلْقَيُّومُ ۚ لَا تَأْخُذُهُۥ سِنَةٌۭ وَلَا نَوْمٌۭ',
    translation: 'Allah - there is no deity except Him, the Ever-Living, the Sustainer of [all] existence. Neither drowsiness overtakes Him nor sleep.',
    asbabAlNuzul: 'The greatest verse in the Quran, encapsulating the purest statement of divine absolute sovereignty, eternal life (Al-Hayy), and self-subsistence (Al-Qayyum).',
    coreLessons: [
      'Allah is free from human limitations—He never tires, slumbers, or loses oversight of a single atom in existence.',
      'His Throne (Kursi) extends over the heavens and earth, demonstrating unconstrained authority and protection.',
      'Human intercession is only possible through His divine permission and wisdom.',
    ],
    reflectionQuestion: 'When facing immense anxiety, how does reflecting on Allah’s sleepless, unyielding vigilance bring peace to your heart?',
    classicalReference: 'Sahih Muslim 810 & Tafsir Ma\'ariful Quran',
  },
  {
    id: 'duha-5',
    surahName: 'Ad-Duha',
    surahNumber: 93,
    ayahNumber: 5,
    arabicText: 'وَلَسَوْفَ يُعْطِيكَ رَبُّكَ فَتَرْضَىٰ',
    translation: 'And your Lord is going to give you, and you will be satisfied.',
    asbabAlNuzul: 'Revealed following a temporary pause in revelation when the polytheists mocked the Prophet (ﷺ), reassuring his heart of divine love and eternal reward.',
    coreLessons: [
      'Difficult seasons and spiritual pauses in life are often preludes to immense divine openings and compensation.',
      'Allah guarantees ultimate satisfaction (Ridha) to those who patiently persevere in faith.',
      'Divine giving is tailored specifically to what truly elevates the soul in both worlds.',
    ],
    reflectionQuestion: 'What past hardship in your life eventually gave way to a blessing you never could have anticipated?',
    classicalReference: 'Tafsir at-Tabari & Fi Zilal al-Quran',
  },
];

export const PublicTafsirPage: React.FC = () => {
  const [selectedTafsir, setSelectedTafsir] = useState<TafsirSample>(SAMPLE_TAFSIRS[0]);

  return (
    <div className="min-h-screen bg-[#F7F9FC] dark:bg-[#0B1320] text-[#1F3A5F] dark:text-[#F7F9FC]">
      <SeoHead
        title="AI Quran Tafsir & Verse Understanding | NoorVerse AI"
        description="Explore classical and AI-assisted Quran Tafsir with deep verse context, historical background (Asbab al-Nuzul), thematic reflections, and practical daily life lessons."
        canonicalUrl="https://noorverse-ai.vercel.app/quran-tafsir"
        keywords="Quran Tafsir, AI Tafsir, verse explanation, Asbab al-Nuzul, Ayat al-Kursi Tafsir, Surah Fatihah Tafsir, Quran context, Islamic reflections"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'AI Quran Tafsir & Verse Understanding',
          description: 'A comprehensive methodology combining classical exegetical scholarship with AI-assisted structured reflections for Quran students.',
          author: {
            '@type': 'Organization',
            name: 'NoorVerse AI',
          },
        }}
      />

      {/* SEO Introductory Hero Banner */}
      <section className="bg-gradient-to-br from-[#122438] via-[#1E3A5F] to-[#0A1624] text-white py-8 px-4 border-b border-[#6E8FB5]/30">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold border border-amber-400/40">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Exegesis & Contextual Wisdom</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
            AI Quran Tafsir & Verse Understanding
          </h1>

          <p className="text-sm sm:text-base text-[#C7CEDB] max-w-3xl leading-relaxed">
            Tafsir (تفسير) is the science of elucidating the meaning, legal rulings, historical context (Asbab al-Nuzul), and divine wisdom contained within the Quran. NoorVerse AI pairs classical exegetical works with structured AI summaries to help you understand not just <em>what</em> an Ayah says, but <em>how to live by it</em>.
          </p>

          {/* Quick Hub Links */}
          <div className="flex flex-wrap gap-2 pt-2 text-xs font-semibold">
            <Link
              to="/quran"
              className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-emerald-200 border border-white/15 transition-all flex items-center space-x-1.5"
            >
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
              <span>Explore Quran Reader</span>
            </Link>
            <Link
              to="/arabic-roots"
              className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-emerald-200 border border-white/15 transition-all flex items-center space-x-1.5"
            >
              <Search className="w-3.5 h-3.5 text-amber-400" />
              <span>3-Letter Arabic Roots</span>
            </Link>
            <Link
              to="/ai-quran"
              className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-emerald-200 border border-white/15 transition-all flex items-center space-x-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>AI Study Companion</span>
            </Link>
            <Link
              to="/tajweed"
              className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-emerald-200 border border-white/15 transition-all flex items-center space-x-1.5"
            >
              <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
              <span>Tajweed Rules</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Tafsir Explorer Showcase */}
      <section className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold text-emerald-950 dark:text-emerald-50">
              Interactive Tafsir & Reflection Showcase
            </h2>
            <p className="text-xs text-emerald-800/60 dark:text-emerald-400/60">
              Select a significant Quranic verse below to examine its structured breakdown:
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {SAMPLE_TAFSIRS.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedTafsir(item)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedTafsir.id === item.id
                    ? 'bg-emerald-700 text-amber-300 shadow-sm'
                    : 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 hover:bg-emerald-100'
                }`}
              >
                {item.surahName} ({item.surahNumber}:{item.ayahNumber})
              </button>
            ))}
          </div>
        </div>

        {/* Selected Tafsir Detail Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#18221D] border border-emerald-900/10 dark:border-emerald-500/20 shadow-md space-y-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-emerald-900/10 dark:border-emerald-500/15 pb-4">
            <div>
              <span className="text-[11px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                Surah {selectedTafsir.surahName} • Ayah #{selectedTafsir.ayahNumber}
              </span>
              <h3 className="text-lg font-black text-emerald-950 dark:text-emerald-50">
                Detailed Tafsir Breakdown
              </h3>
            </div>

            <div className="text-xs text-emerald-700 dark:text-emerald-400 font-semibold bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full self-start">
              Ref: {selectedTafsir.classicalReference}
            </div>
          </div>

          {/* Arabic & Translation */}
          <div className="space-y-3 bg-emerald-50/50 dark:bg-emerald-950/30 p-5 rounded-2xl border border-emerald-900/5 dark:border-emerald-500/10">
            <p className="text-right text-2xl sm:text-3xl font-bold font-serif leading-loose text-emerald-950 dark:text-emerald-50" dir="rtl">
              {selectedTafsir.arabicText}
            </p>
            <p className="text-xs sm:text-sm text-emerald-900 dark:text-emerald-200 font-medium italic">
              "{selectedTafsir.translation}"
            </p>
          </div>

          {/* Historical Context */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-900 dark:text-emerald-300 flex items-center space-x-1.5">
              <BookOpen className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Occasion of Revelation (Asbab al-Nuzul)</span>
            </h4>
            <p className="text-xs text-emerald-800/80 dark:text-emerald-300/80 leading-relaxed pl-5 border-l-2 border-emerald-600/30">
              {selectedTafsir.asbabAlNuzul}
            </p>
          </div>

          {/* Core Lessons */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-900 dark:text-emerald-300 flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Key Lessons & Daily Application</span>
            </h4>
            <ul className="space-y-2 text-xs text-emerald-800/80 dark:text-emerald-300/80 pl-2">
              {selectedTafsir.coreLessons.map((lesson, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <span className="text-amber-500 font-black">•</span>
                  <span>{lesson}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Reflection Question */}
          <div className="p-4 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-start space-x-3">
            <Sparkles className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-amber-900 dark:text-amber-200">
                Pondering Question (Tadabbur):
              </div>
              <p className="text-xs text-amber-800 dark:text-amber-300/90 italic mt-0.5">
                {selectedTafsir.reflectionQuestion}
              </p>
            </div>
          </div>
        </div>

        {/* Informational Methodology Box */}
        <div className="p-6 rounded-3xl bg-white dark:bg-[#18221D] border border-emerald-900/10 dark:border-emerald-500/15 shadow-sm space-y-4">
          <h3 className="text-base font-bold text-emerald-950 dark:text-emerald-50">
            How NoorVerse AI Generates Tafsir Insights
          </h3>
          <p className="text-xs text-emerald-800/70 dark:text-emerald-300/70 leading-relaxed">
            Inside the NoorVerse Quran Reader, every Ayah has a dedicated <strong>AI Tafsir button</strong>. When tapped, our system queries Google's Gemini models with specialized prompts to produce a four-pillar synthesis:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-900/5 text-xs text-emerald-900 dark:text-emerald-200 space-y-1">
              <div className="font-bold text-emerald-950 dark:text-emerald-100">1. Context & Setting</div>
              <div>Historical background, chronological period, and connection to adjacent verses.</div>
            </div>

            <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-900/5 text-xs text-emerald-900 dark:text-emerald-200 space-y-1">
              <div className="font-bold text-emerald-950 dark:text-emerald-100">2. Linguistic Nuance</div>
              <div>Significance of specific Arabic word choices and 3-letter root derivations.</div>
            </div>

            <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-900/5 text-xs text-emerald-900 dark:text-emerald-200 space-y-1">
              <div className="font-bold text-emerald-950 dark:text-emerald-100">3. Practical Application</div>
              <div>Actionable moral, emotional, and social principles for modern living.</div>
            </div>

            <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-900/5 text-xs text-emerald-900 dark:text-emerald-200 space-y-1">
              <div className="font-bold text-emerald-950 dark:text-emerald-100">4. Spiritual Tadabbur</div>
              <div>Personal reflection questions to internalize the message during prayer.</div>
            </div>
          </div>

          <div className="pt-4 flex justify-end">
            <Link
              to="/quran"
              className="px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-amber-300 font-bold text-xs shadow transition-all flex items-center space-x-2"
            >
              <span>Open Full Quran Reader</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <PublicFooter />
    </div>
  );
};
