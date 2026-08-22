import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Volume2, Mic, Sparkles, BookOpen, GraduationCap, ArrowRight, CheckCircle2, AlertCircle, Play, ShieldCheck } from 'lucide-react';
import { SeoHead } from '../common/SeoHead';
import { AiPronunciationModal } from '../common/AiPronunciationModal';
import { PublicFooter } from '../common/PublicFooter';

interface PracticeItem {
  id: string;
  arabic: string;
  name: string;
  transliteration: string;
  makhraj: string;
  commonPitfall: string;
  tip: string;
}

const PRACTICE_LETTERS: PracticeItem[] = [
  {
    id: 'ayn',
    arabic: 'ع',
    name: 'Ayn',
    transliteration: "‘Ayn (Throat letter)",
    makhraj: 'Middle of the throat (Wasat al-Halq), produced by contracting the pharyngeal muscles.',
    commonPitfall: 'Replacing with an ordinary English "A" (Hamzah) instead of deep throat contraction.',
    tip: 'Tighten the center of your throat slightly, like making an intentional voiced squeeze.',
  },
  {
    id: 'haa',
    arabic: 'ح',
    name: 'Haa',
    transliteration: 'Ḥaa (Clean friction)',
    makhraj: 'Middle of the throat with strong breath friction and no raspiness.',
    commonPitfall: 'Confusing with coarse "Khaa" (خ) or weak chest "Haa" (هـ).',
    tip: 'Exhale warm air as if fogging up a mirror, pure and whispery from the mid-throat.',
  },
  {
    id: 'daad',
    arabic: 'ض',
    name: 'Daad',
    transliteration: 'Ḍaad (Lateral tongue)',
    makhraj: 'One or both sides of the tongue pressed against the upper molars.',
    commonPitfall: 'Pronouncing like a plain English "D" (د) or a "Z" (Zaay).',
    tip: 'Keep the tongue tip light while pressing the lateral edges firmly against the upper molars with elongation (Istitalah).',
  },
  {
    id: 'qaaf',
    arabic: 'ق',
    name: 'Qaaf',
    transliteration: 'Qaaf (Deep uvular)',
    makhraj: 'Deepest back part of the tongue (Aqsa al-Lisan) touching the soft palate (uvula).',
    commonPitfall: 'Pronouncing as front "Kaaf" (ك) without heaviness and Qalqalah bounce.',
    tip: 'Raise the rear soft palate and strike deeply with heavy Tafkhim resonance.',
  },
];

export const PublicPronunciationPage: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<PracticeItem>(PRACTICE_LETTERS[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F7F9FC] dark:bg-[#0B1320] text-[#1F3A5F] dark:text-[#F7F9FC]">
      <SeoHead
        title="Quran Pronunciation & Recitation Practice | NoorVerse AI"
        description="Improve your Quran recitation accuracy with AI-powered Voice Tajweed coaching, instant Makhraj diagnostic feedback, and audio pronunciation analysis."
        canonicalUrl="https://noorverse-ai.vercel.app/quran-pronunciation"
        keywords="Quran pronunciation, learn Quran pronunciation, Arabic Makhraj, voice Tajweed coach, Quran recitation checker, fix Arabic pronunciation, NoorVerse AI"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'LearningResource',
          name: 'AI Voice Tajweed & Pronunciation Coach',
          description: 'Interactive audio recitation diagnostic analyzing Arabic letters, articulation points, and Tajweed accuracy.',
          learningResourceType: 'Voice Coach & Assessment Tool',
        }}
      />

      {/* SEO Introductory Hero Banner */}
      <section className="bg-gradient-to-br from-[#122E22] via-[#1A4533] to-[#0A1D15] text-white py-8 px-4 border-b border-emerald-500/20">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold border border-amber-400/40">
            <Mic className="w-3.5 h-3.5" />
            <span>AI Voice Tajweed Diagnostic</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-emerald-50">
            Quran Pronunciation & Recitation Practice
          </h1>

          <p className="text-sm sm:text-base text-emerald-200/80 max-w-3xl leading-relaxed">
            Perfecting your Quranic pronunciation requires training your vocal tract to hit the exact classical Arabic articulation points (Makharij al-Huruf). NoorVerse AI's Voice Coach listens to your recitation via microphone, measures phoneme accuracy, detects common phonetic slips, and delivers actionable corrective guidance.
          </p>

          {/* Quick Hub Links */}
          <div className="flex flex-wrap gap-2 pt-2 text-xs font-semibold">
            <Link
              to="/tajweed"
              className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-amber-300 border border-white/15 transition-all flex items-center space-x-1.5"
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Tajweed Rules Guide</span>
            </Link>
            <Link
              to="/quran"
              className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-emerald-200 border border-white/15 transition-all flex items-center space-x-1.5"
            >
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
              <span>Full Quran Reader</span>
            </Link>
            <Link
              to="/ai-quran"
              className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-emerald-200 border border-white/15 transition-all flex items-center space-x-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>AI Study Companion</span>
            </Link>
            <Link
              to="/islamic-learning"
              className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-emerald-200 border border-white/15 transition-all flex items-center space-x-1.5"
            >
              <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
              <span>Islamic Curriculum</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Letter Practice Sandbox */}
      <section className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        <div>
          <h2 className="text-xl font-bold text-emerald-950 dark:text-emerald-50">
            Interactive Articulation & Makhraj Practice
          </h2>
          <p className="text-xs text-emerald-800/60 dark:text-emerald-400/60">
            Select a challenging Arabic letter to examine its anatomical articulation point and practice live:
          </p>
        </div>

        {/* Letter Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {PRACTICE_LETTERS.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className={`p-4 rounded-2xl border text-center transition-all flex flex-col items-center justify-center space-y-1 ${
                selectedItem.id === item.id
                  ? 'bg-emerald-700 text-amber-300 border-emerald-600 shadow-md scale-102'
                  : 'bg-white dark:bg-[#18221D] border-emerald-900/10 dark:border-emerald-500/15 text-emerald-950 dark:text-emerald-100 hover:border-emerald-500/40'
              }`}
            >
              <span className="text-3xl font-black font-serif">{item.arabic}</span>
              <span className="text-xs font-bold">{item.name}</span>
              <span className="text-[10px] opacity-80">{item.transliteration}</span>
            </button>
          ))}
        </div>

        {/* Selected Letter Detail Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#18221D] border border-emerald-900/10 dark:border-emerald-500/20 shadow-md space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-emerald-900/10 dark:border-emerald-500/15 pb-4">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-400 to-amber-500 text-emerald-950 flex items-center justify-center text-4xl font-black shadow-md font-serif">
                {selectedItem.arabic}
              </div>
              <div>
                <span className="text-[10px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest">
                  Makhraj Diagnostic
                </span>
                <h3 className="text-xl font-black text-emerald-950 dark:text-emerald-50">
                  Letter: {selectedItem.name} ({selectedItem.transliteration})
                </h3>
              </div>
            </div>

            {/* Launch Modal Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-5 py-3 rounded-2xl bg-emerald-700 hover:bg-emerald-600 text-amber-300 font-black text-xs shadow-lg transition-all flex items-center space-x-2 self-start sm:self-auto active:scale-98"
            >
              <Mic className="w-4 h-4 animate-pulse" />
              <span>Record & Analyze Live</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/40 border border-emerald-900/10 dark:border-emerald-500/15 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-900 dark:text-emerald-200 flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Precise Anatomical Makhraj</span>
              </h4>
              <p className="text-xs text-emerald-800/80 dark:text-emerald-300/80 leading-relaxed">
                {selectedItem.makhraj}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-amber-400/10 border border-amber-400/30 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-200 flex items-center space-x-1.5">
                <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <span>Common Pronunciation Slip</span>
              </h4>
              <p className="text-xs text-amber-800 dark:text-amber-300/90 leading-relaxed">
                {selectedItem.commonPitfall}
              </p>
            </div>
          </div>

          {/* Teacher Practical Tip */}
          <div className="p-4 rounded-2xl bg-emerald-700 text-white flex items-start space-x-3 shadow">
            <Sparkles className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
            <div className="space-y-0.5 text-xs">
              <div className="font-bold text-amber-300">Master Qari Advice:</div>
              <p className="text-emerald-50 leading-relaxed">{selectedItem.tip}</p>
            </div>
          </div>
        </div>

        {/* 5 Makhraj Zones Educational Breakdown */}
        <div className="p-6 rounded-3xl bg-white dark:bg-[#18221D] border border-emerald-900/10 dark:border-emerald-500/15 shadow-sm space-y-4">
          <h3 className="text-base font-bold text-emerald-950 dark:text-emerald-50">
            The 5 Major Anatomical Zones of Arabic Makharij
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 pt-1">
            <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-center space-y-1">
              <div className="text-base font-black text-emerald-700 dark:text-emerald-300">الجوف</div>
              <div className="text-[11px] font-bold text-emerald-950 dark:text-emerald-50">Al-Jawf</div>
              <div className="text-[10px] text-emerald-800/70 dark:text-emerald-300/70">Oral/chest cavity for 3 Madd elongation letters</div>
            </div>

            <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-center space-y-1">
              <div className="text-base font-black text-emerald-700 dark:text-emerald-300">الحلق</div>
              <div className="text-[11px] font-bold text-emerald-950 dark:text-emerald-50">Al-Halq</div>
              <div className="text-[10px] text-emerald-800/70 dark:text-emerald-300/70">Throat (top, middle, bottom) for 6 letters: ء هـ ع ح غ خ</div>
            </div>

            <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-center space-y-1">
              <div className="text-base font-black text-emerald-700 dark:text-emerald-300">اللسان</div>
              <div className="text-[11px] font-bold text-emerald-950 dark:text-emerald-50">Al-Lisan</div>
              <div className="text-[10px] text-emerald-800/70 dark:text-emerald-300/70">Tongue (10 points producing 18 letters)</div>
            </div>

            <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-center space-y-1">
              <div className="text-base font-black text-emerald-700 dark:text-emerald-300">الشفتان</div>
              <div className="text-[11px] font-bold text-emerald-950 dark:text-emerald-50">Ash-Shafatan</div>
              <div className="text-[10px] text-emerald-800/70 dark:text-emerald-300/70">Lips producing 4 letters: ف، ب، م، و</div>
            </div>

            <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-center space-y-1">
              <div className="text-base font-black text-emerald-700 dark:text-emerald-300">الخيشوم</div>
              <div className="text-[11px] font-bold text-emerald-950 dark:text-emerald-50">Al-Khayshum</div>
              <div className="text-[10px] text-emerald-800/70 dark:text-emerald-300/70">Nasal cavity producing Ghunnah nasalization</div>
            </div>
          </div>
        </div>
      </section>

      {/* Voice Tajweed Modal */}
      {isModalOpen && (
        <AiPronunciationModal
          targetText={selectedItem.arabic}
          itemTitle={`Letter ${selectedItem.name} (${selectedItem.arabic})`}
          type="qaida"
          onClose={() => setIsModalOpen(false)}
        />
      )}

      <PublicFooter />
    </div>
  );
};
