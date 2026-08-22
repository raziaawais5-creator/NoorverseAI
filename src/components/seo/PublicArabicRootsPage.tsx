import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Sparkles, BookOpen, GraduationCap, ArrowRight, CheckCircle2, Filter, Layers } from 'lucide-react';
import { SeoHead } from '../common/SeoHead';
import { PublicFooter } from '../common/PublicFooter';

interface ArabicRoot {
  id: string;
  rootArabic: string;
  rootTransliteration: string;
  coreMeaning: string;
  quranOccurrences: number;
  sampleDerivatives: {
    wordArabic: string;
    wordTransliteration: string;
    meaning: string;
    form: string;
  }[];
  sampleVerse: {
    surah: string;
    ayahNumber: number;
    arabicText: string;
    translation: string;
  };
  theologicalSignificance: string;
}

const ROOT_DATABASE: ArabicRoot[] = [
  {
    id: 'r-h-m',
    rootArabic: 'ر - ح - م',
    rootTransliteration: 'R - Ḥ - M',
    coreMeaning: 'Mercy, tenderness, compassion, maternal womb (Rahim)',
    quranOccurrences: 339,
    sampleDerivatives: [
      { wordArabic: 'الرَّحْمَٰن', wordTransliteration: 'Ar-Rahmaan', meaning: 'The Entirely Merciful (All-Encompassing)', form: 'Intensive Attribute' },
      { wordArabic: 'الرَّحِيم', wordTransliteration: 'Ar-Raheem', meaning: 'The Especially Merciful (Continuous)', form: 'Constant Attribute' },
      { wordArabic: 'رَحْمَة', wordTransliteration: 'Rahmah', meaning: 'Mercy, divine grace', form: 'Noun' },
      { wordArabic: 'يَرْحَمُ', wordTransliteration: 'Yarhamu', meaning: 'He has mercy upon', form: 'Present Verb' },
    ],
    sampleVerse: {
      surah: 'Al-Anbiya (21:107)',
      ayahNumber: 107,
      arabicText: 'وَمَآ أَرْسَلْنَـٰكَ إِلَّا رَحْمَةًۭ لِّلْعَـٰلَمِينَ',
      translation: 'And We have not sent you, [O Muhammad], except as a mercy to the worlds.',
    },
    theologicalSignificance: 'The root R-H-M frames the entire Quran, beginning with the Basmalah in 113 of the 114 Surahs, highlighting mercy as the foundational law of creation.',
  },
  {
    id: 'a-l-m',
    rootArabic: 'ع - ل - م',
    rootTransliteration: '‘ - L - M',
    coreMeaning: 'Knowledge, awareness, perception, sign/marker (Alam)',
    quranOccurrences: 854,
    sampleDerivatives: [
      { wordArabic: 'عَلَّمَ', wordTransliteration: '‘Allama', meaning: 'He taught', form: 'Form II Verb' },
      { wordArabic: 'العَلِيم', wordTransliteration: 'Al-‘Aleem', meaning: 'The All-Knowing', form: 'Divine Name' },
      { wordArabic: 'عِلْم', wordTransliteration: '‘Ilm', meaning: 'Knowledge, insight', form: 'Noun' },
      { wordArabic: 'عَالَمِين', wordTransliteration: '‘Aalameen', meaning: 'All created worlds', form: 'Plural Noun' },
    ],
    sampleVerse: {
      surah: 'Al-Alaq (96:4-5)',
      ayahNumber: 5,
      arabicText: 'عَلَّمَ ٱلْإِنسَـٰنَ مَا لَمْ يَعْلَمْ',
      translation: 'Taught man that which he knew not.',
    },
    theologicalSignificance: 'The root ‘-L-M represents the divine bestowal of intellect, revelation, and empirical observation upon mankind as the foundation for worship.',
  },
  {
    id: 'n-w-r',
    rootArabic: 'ن - و - ر',
    rootTransliteration: 'N - W - R',
    coreMeaning: 'Light, illumination, clarity, spiritual guidance',
    quranOccurrences: 194,
    sampleDerivatives: [
      { wordArabic: 'نُور', wordTransliteration: 'Noor', meaning: 'Light, celestial guidance', form: 'Noun' },
      { wordArabic: 'مُنِير', wordTransliteration: 'Muneer', meaning: 'Illuminating, radiating', form: 'Participle' },
      { wordArabic: 'أَنَارَ', wordTransliteration: 'Anaara', meaning: 'It gave light, shone', form: 'Form IV Verb' },
    ],
    sampleVerse: {
      surah: 'An-Nur (24:35)',
      ayahNumber: 35,
      arabicText: 'ٱللَّهُ نُورُ ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضِ ۚ مَثَلُ نُورِهِۦ كَمِشْكَوٰةٍۢ فِيهَا مِصْبَاحٌ',
      translation: 'Allah is the Light of the heavens and the earth. The example of His light is like a niche within which is a lamp...',
    },
    theologicalSignificance: 'The namesake of NoorVerse—the root N-W-R illuminates the human soul through divine scripture and moral clarity.',
  },
  {
    id: 's-l-m',
    rootArabic: 'س - ل - م',
    rootTransliteration: 'S - L - M',
    coreMeaning: 'Peace, safety, wholeness, willing surrender (Islam)',
    quranOccurrences: 140,
    sampleDerivatives: [
      { wordArabic: 'السَّلَام', wordTransliteration: 'As-Salaam', meaning: 'The Source of Peace', form: 'Divine Name' },
      { wordArabic: 'إِسْلَام', wordTransliteration: 'Islam', meaning: 'Peaceful submission to Allah', form: 'Verbal Noun' },
      { wordArabic: 'مُسْلِم', wordTransliteration: 'Muslim', meaning: 'One who surrenders peacefully', form: 'Participle' },
      { wordArabic: 'سَلِيم', wordTransliteration: 'Saleem', meaning: 'Pure, sound (heart)', form: 'Adjective' },
    ],
    sampleVerse: {
      surah: 'Ash-Shu\'ara (26:89)',
      ayahNumber: 89,
      arabicText: 'إِلَّا مَنْ أَتَى ٱللَّهَ بِقَلْبٍۢ سَلِيمٍۢ',
      translation: 'But only one who comes to Allah with a sound heart.',
    },
    theologicalSignificance: 'S-L-M embodies both the internal tranquil state of faith and the ultimate eternal abode of paradise (Dar as-Salam).',
  },
];

export const PublicArabicRootsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRoot, setSelectedRoot] = useState<ArabicRoot>(ROOT_DATABASE[0]);

  const filteredRoots = ROOT_DATABASE.filter(
    (r) =>
      r.rootTransliteration.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.coreMeaning.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.rootArabic.includes(searchTerm.trim())
  );

  return (
    <div className="min-h-screen bg-[#F7F9FC] dark:bg-[#0B1320] text-[#1F3A5F] dark:text-[#F7F9FC]">
      <SeoHead
        title="Arabic 3-Letter Root Search for the Quran | NoorVerse AI"
        description="Discover the linguistic depths of the Quran through 3-letter Arabic roots (Jidhr). Search Quranic vocabulary, explore root derivatives, and understand word meanings."
        canonicalUrl="https://noorverse-ai.vercel.app/arabic-roots"
        keywords="Arabic roots Quran, 3 letter roots Arabic, Quranic root search, Arabic morphology Sarf, Jidhr Arabic, Quran vocabulary roots, NoorVerse AI"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'LearningResource',
          name: 'Quranic Arabic 3-Letter Root Lexicon & Morphology Explorer',
          description: 'Linguistic tool for analyzing Arabic trilateral roots, lexical derivatives, and Quranic occurrences.',
          learningResourceType: 'Lexical Database & Root Search',
        }}
      />

      {/* SEO Introductory Hero Banner */}
      <section className="bg-gradient-to-br from-[#1B2838] via-[#243B55] to-[#141E28] text-white py-8 px-4 border-b border-[#6E8FB5]/30">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold border border-amber-400/40">
            <Search className="w-3.5 h-3.5" />
            <span>Quranic Morphology & Lexicon</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
            Arabic 3-Letter Root Search for the Quran
          </h1>

          <p className="text-sm sm:text-base text-[#C7CEDB] max-w-3xl leading-relaxed">
            Almost every Arabic word in the Holy Quran originates from a base <strong>3-letter root (ثلاثي مجرد)</strong> carrying a core conceptual meaning. By learning how morphological templates (Awzan / أوزان) transform these roots into nouns, verbs, and intensive attributes, you unlock profound layers of Quranic meaning.
          </p>

          {/* Quick Hub Links */}
          <div className="flex flex-wrap gap-2 pt-2 text-xs font-semibold">
            <Link
              to="/quran"
              className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-emerald-200 border border-white/15 transition-all flex items-center space-x-1.5"
            >
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
              <span>Full Quran Reader</span>
            </Link>
            <Link
              to="/quran-tafsir"
              className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-emerald-200 border border-white/15 transition-all flex items-center space-x-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Deep Tafsir</span>
            </Link>
            <Link
              to="/tajweed"
              className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-emerald-200 border border-white/15 transition-all flex items-center space-x-1.5"
            >
              <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
              <span>Tajweed Rules</span>
            </Link>
            <Link
              to="/islamic-learning"
              className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-emerald-200 border border-white/15 transition-all flex items-center space-x-1.5"
            >
              <Layers className="w-3.5 h-3.5 text-amber-400" />
              <span>Islamic Curriculum</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Root Search & Explorer */}
      <section className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold text-emerald-950 dark:text-emerald-50">
              Explore Core Quranic Roots
            </h2>
            <p className="text-xs text-emerald-800/60 dark:text-emerald-400/60">
              Select a root or filter to see its linguistic family and Quranic occurrences:
            </p>
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-emerald-700/50 dark:text-emerald-400/50 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search by root or meaning..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-white dark:bg-[#18221D] border border-emerald-900/10 dark:border-emerald-500/20 text-xs text-emerald-950 dark:text-emerald-100 placeholder-emerald-800/40 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>

        {/* Root Selector Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {filteredRoots.map((root) => (
            <button
              key={root.id}
              onClick={() => setSelectedRoot(root)}
              className={`p-4 rounded-2xl border text-center transition-all flex flex-col items-center justify-center space-y-1 ${
                selectedRoot.id === root.id
                  ? 'bg-emerald-700 text-amber-300 border-emerald-600 shadow-md scale-102'
                  : 'bg-white dark:bg-[#18221D] border-emerald-900/10 dark:border-emerald-500/15 text-emerald-950 dark:text-emerald-100 hover:border-emerald-500/40'
              }`}
            >
              <span className="text-2xl font-bold font-serif">{root.rootArabic}</span>
              <span className="text-xs font-bold">{root.rootTransliteration}</span>
              <span className="text-[10px] opacity-80 truncate max-w-[130px]">{root.coreMeaning}</span>
            </button>
          ))}
        </div>

        {/* Selected Root Detailed Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#18221D] border border-emerald-900/10 dark:border-emerald-500/20 shadow-md space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-emerald-900/10 dark:border-emerald-500/15 pb-4">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-400 to-amber-500 text-emerald-950 flex items-center justify-center text-2xl font-black shadow-md font-serif">
                {selectedRoot.rootArabic}
              </div>
              <div>
                <span className="text-[10px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest">
                  Root Family ({selectedRoot.quranOccurrences} Quran Occurrences)
                </span>
                <h3 className="text-xl font-black text-emerald-950 dark:text-emerald-50">
                  {selectedRoot.rootTransliteration} — {selectedRoot.coreMeaning}
                </h3>
              </div>
            </div>

            <div className="text-xs font-bold text-emerald-800 dark:text-amber-300 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1.5 rounded-xl border border-emerald-900/10 dark:border-emerald-500/20 self-start sm:self-auto">
              Frequency: {selectedRoot.quranOccurrences}x
            </div>
          </div>

          {/* Theological Significance */}
          <div className="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/40 border border-emerald-900/10 dark:border-emerald-500/15 space-y-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-900 dark:text-emerald-200">
              Theological & Semantic Depth
            </h4>
            <p className="text-xs text-emerald-800/80 dark:text-emerald-300/80 leading-relaxed">
              {selectedRoot.theologicalSignificance}
            </p>
          </div>

          {/* Derivatives Table */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-900 dark:text-emerald-300 flex items-center space-x-1.5">
              <Layers className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Key Quranic Derivatives (Morphological Forms)</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {selectedRoot.sampleDerivatives.map((deriv, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-[#F7F9FC] dark:bg-[#121B16] border border-emerald-900/5 dark:border-emerald-500/10 flex items-center justify-between"
                >
                  <div>
                    <div className="text-base font-bold text-emerald-950 dark:text-emerald-50 font-serif">
                      {deriv.wordArabic}
                    </div>
                    <div className="text-xs text-emerald-800/80 dark:text-emerald-300/80 font-medium">
                      {deriv.wordTransliteration} — <span className="text-amber-600 dark:text-amber-400 font-semibold">{deriv.meaning}</span>
                    </div>
                  </div>
                  <span className="text-[10px] text-emerald-700/60 dark:text-emerald-400/60 font-mono bg-white dark:bg-black/30 px-2 py-1 rounded-md">
                    {deriv.form}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Sample Quranic Ayah */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-950 text-white space-y-2 shadow">
            <div className="flex items-center justify-between text-[11px] text-amber-300 font-bold">
              <span>Sample Occurrence in Surah {selectedRoot.sampleVerse.surah}</span>
              <span>Ayah #{selectedRoot.sampleVerse.ayahNumber}</span>
            </div>
            <p className="text-right text-xl font-bold font-serif leading-loose text-white" dir="rtl">
              {selectedRoot.sampleVerse.arabicText}
            </p>
            <p className="text-xs text-emerald-100/90 italic">
              "{selectedRoot.sampleVerse.translation}"
            </p>
          </div>
        </div>

        {/* Why 3-Letter Roots Matter Guide */}
        <div className="p-6 rounded-3xl bg-white dark:bg-[#18221D] border border-emerald-900/10 dark:border-emerald-500/15 shadow-sm space-y-3">
          <h3 className="text-base font-bold text-emerald-950 dark:text-emerald-50">
            Why Studying Arabic Roots Unlocks the Quran
          </h3>
          <p className="text-xs text-emerald-800/70 dark:text-emerald-300/70 leading-relaxed">
            Unlike Indo-European languages where vocabulary is memorized in isolation, Arabic functions like an organic tree. Once you know a root like <strong>ك-ت-ب (K-T-B / Writing)</strong>, you instantly recognize <em>Kitaab</em> (Book), <em>Kataba</em> (He wrote), <em>Maktub</em> (Written/Destined), <em>Maktabah</em> (Library), and <em>Kaatib</em> (Scribe).
          </p>
          <div className="pt-2 flex justify-end">
            <Link
              to="/quran"
              className="px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-amber-300 font-bold text-xs shadow transition-all flex items-center space-x-1.5"
            >
              <span>Explore Words in Reader</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <PublicFooter />
    </div>
  );
};
