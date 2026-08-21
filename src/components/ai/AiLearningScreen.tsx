import React, { useState } from 'react';
import { Sparkles, BookOpen, Target, Layers, HelpCircle, Award, RefreshCw, ArrowRight, Zap, Lock } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { fetchAiQuiz, fetchVerseExplanation, fetchVocabBreakdown } from '../../services/api';
import { QuizData, WordMeaning } from '../../types';
import { AiQuizModal } from './AiQuizModal';
import { HifzPlannerModal } from './HifzPlannerModal';

export const AiLearningScreen: React.FC = () => {
  const { userStats, isPremium, openUpgradeModal, userCurrency } = useApp();

  // AI Quiz state
  const [activeQuiz, setActiveQuiz] = useState<QuizData | null>(null);
  const [loadingQuiz, setLoadingQuiz] = useState(false);
  const [isHifzModalOpen, setIsHifzModalOpen] = useState(false);

  // Vocabulary search state
  const [inputAyah, setInputAyah] = useState('اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ');
  const [inputTranslation, setInputTranslation] = useState('Allah is the Light of the heavens and the earth.');
  const [vocabList, setVocabList] = useState<WordMeaning[]>([]);
  const [loadingVocab, setLoadingVocab] = useState(false);

  // Verse Explainer state
  const [explanationResult, setExplanationResult] = useState<string | null>(null);
  const [loadingExplain, setLoadingExplain] = useState(false);

  const handleGenerateQuiz = async (topic: string) => {
    setLoadingQuiz(true);
    const qData = await fetchAiQuiz(topic, 'Intermediate');
    setLoadingQuiz(false);
    if (qData) {
      setActiveQuiz(qData);
    } else {
      // Fallback preset quiz if offline or error
      setActiveQuiz({
        quizTitle: `Tajweed & Quran Quiz: ${topic}`,
        questions: [
          {
            id: 1,
            question: 'What is the duration of Ghunnah sound when Noon has a Shaddah (نّ)?',
            options: ['1 count', '2 counts (Harakat)', '4 counts', '6 counts'],
            correctIndex: 1,
            explanation: 'Ghunnah is held for 2 counts through the nasal cavity.',
          },
          {
            id: 2,
            question: 'Which of the following is NOT a Qalqalah letter?',
            options: ['ق (Qaf)', 'ط (Toa)', 'س (Seen)', 'د (Dal)'],
            correctIndex: 2,
            explanation: 'The 5 Qalqalah letters are in the mnemonic: Qutb Jaddin (ق, ط, ب, ج, د).',
          },
          {
            id: 3,
            question: 'How many Surahs are in the Noble Quran?',
            options: ['100', '114', '120', '6666'],
            correctIndex: 1,
            explanation: 'The Quran contains 114 Surahs.',
          },
        ],
      });
    }
  };

  const handleAnalyzeVocab = async () => {
    if (!isPremium) {
      openUpgradeModal('AI Arabic Root Word Extraction');
      return;
    }
    setLoadingVocab(true);
    const res = await fetchVocabBreakdown({ arabicText: inputAyah, translation: inputTranslation });
    setVocabList(res);
    setLoadingVocab(false);
  };

  const handleExplainCustomVerse = async () => {
    if (!isPremium) {
      openUpgradeModal('Deep AI Verse Tafsir & Reflection Engine');
      return;
    }
    setLoadingExplain(true);
    const exp = await fetchVerseExplanation({
      surahName: 'Ayat an-Nur',
      surahNumber: 24,
      ayahNumber: 35,
      arabicText: inputAyah,
      translation: inputTranslation,
    });
    setExplanationResult(exp);
    setLoadingExplain(false);
  };

  return (
    <div className="space-y-6 pb-28 px-4 pt-4 max-w-4xl mx-auto">
      {/* Top Banner */}
      <div className="rounded-3xl bg-gradient-to-br from-purple-900 via-emerald-900 to-teal-950 p-6 text-white shadow-xl space-y-3 relative overflow-hidden">
        <div className="flex items-center space-x-2">
          <Sparkles className="w-5 h-5 text-amber-300" />
          <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
            AI Quran Studio
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-emerald-50">
          AI Quranic Knowledge & Reflection Studio
        </h2>
        <p className="text-xs md:text-sm text-emerald-100/80 max-w-lg leading-relaxed font-medium">
          Generate custom verse explanations, analyze 3-letter Arabic roots, test your Tajweed skills, and track your Hifz journey.
        </p>
      </div>

      {/* Pro Subscription Callout Banner if not premium */}
      {!isPremium && (
        <div className="rounded-3xl bg-gradient-to-r from-amber-500/20 via-emerald-900/40 to-teal-950 p-5 border-2 border-amber-400/40 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start space-x-2">
              <Zap className="w-5 h-5 text-amber-400 fill-amber-400" />
              <h3 className="text-base font-black text-emerald-950 dark:text-emerald-50">
                Unlock Full AI Quran Pro Pass
              </h3>
            </div>
            <p className="text-xs text-emerald-800/80 dark:text-emerald-200/80">
              Get unlimited Voice Tajweed AI Analysis, Tafsir Generator & Root Extraction in <strong>{userCurrency === 'PKR' ? 'PKR 990 / mo' : '$3.99 / mo'}</strong>.
            </p>
          </div>

          <button
            onClick={() => openUpgradeModal('NoorVerse AI Studio Pass')}
            className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 hover:brightness-110 text-emerald-950 font-black text-xs shadow-md transition-all shrink-0 flex items-center space-x-1.5"
          >
            <Sparkles className="w-4 h-4 fill-emerald-950" />
            <span>Upgrade to Pro ({userCurrency === 'PKR' ? 'PKR' : '$'})</span>
          </button>
        </div>
      )}

      {/* AI Quiz Hub Selector */}
      <div className="rounded-3xl bg-white dark:bg-[#18221D] p-6 border border-emerald-900/10 dark:border-emerald-500/15 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <HelpCircle className="w-5 h-5 text-amber-500" />
            <h3 className="text-base font-bold text-emerald-950 dark:text-emerald-50">
              Generate Interactive AI Quizzes
            </h3>
          </div>
          {loadingQuiz && <RefreshCw className="w-4 h-4 text-amber-500 animate-spin" />}
        </div>

        <p className="text-xs text-emerald-800/70 dark:text-emerald-300/70">
          Select a topic below to generate a fresh 5-question AI knowledge challenge:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
          <button
            onClick={() => handleGenerateQuiz('Tajweed Rules & Pronunciation')}
            className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-900/10 dark:border-emerald-500/20 text-xs font-bold text-emerald-950 dark:text-emerald-100 hover:border-amber-400 hover:bg-amber-500/10 transition-all text-left"
          >
            🎯 Tajweed Rules
          </button>
          <button
            onClick={() => handleGenerateQuiz('Surah Ya-Sin & Surah Al-Mulk')}
            className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-900/10 dark:border-emerald-500/20 text-xs font-bold text-emerald-950 dark:text-emerald-100 hover:border-amber-400 hover:bg-amber-500/10 transition-all text-left"
          >
            📖 Surah Knowledge
          </button>
          <button
            onClick={() => handleGenerateQuiz('Prophets in the Quran')}
            className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-900/10 dark:border-emerald-500/20 text-xs font-bold text-emerald-950 dark:text-emerald-100 hover:border-amber-400 hover:bg-amber-500/10 transition-all text-left"
          >
            🕌 Quranic History
          </button>
        </div>
      </div>

      {/* AI Verse Explainer & Vocab Breakdown Studio */}
      <div className="rounded-3xl bg-white dark:bg-[#18221D] p-6 border border-emerald-900/10 dark:border-emerald-500/15 shadow-sm space-y-4">
        <div className="flex items-center space-x-2">
          <Layers className="w-5 h-5 text-emerald-700 dark:text-emerald-300" />
          <h3 className="text-base font-bold text-emerald-950 dark:text-emerald-50">
            AI Vocabulary & Root Analysis
          </h3>
        </div>

        <div className="space-y-3">
          <div>
            <label className="text-xs font-bold text-emerald-900 dark:text-emerald-200 block mb-1">
              Quranic Arabic Ayah Text:
            </label>
            <input
              type="text"
              value={inputAyah}
              onChange={(e) => setInputAyah(e.target.value)}
              className="w-full p-3 rounded-2xl bg-emerald-50/60 dark:bg-emerald-900/30 border border-emerald-900/10 dark:border-emerald-500/20 text-xs md:text-sm font-serif font-bold text-emerald-950 dark:text-emerald-50 text-right dir-rtl focus:outline-none"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-emerald-900 dark:text-emerald-200 block mb-1">
              Translation Context:
            </label>
            <input
              type="text"
              value={inputTranslation}
              onChange={(e) => setInputTranslation(e.target.value)}
              className="w-full p-3 rounded-2xl bg-emerald-50/60 dark:bg-emerald-900/30 border border-emerald-900/10 dark:border-emerald-500/20 text-xs text-emerald-950 dark:text-emerald-100 focus:outline-none"
            />
          </div>

          <div className="flex space-x-2">
            <button
              onClick={handleAnalyzeVocab}
              disabled={loadingVocab}
              className="flex-1 py-2.5 rounded-2xl bg-emerald-700 text-amber-300 text-xs font-bold shadow hover:bg-emerald-800 transition-colors flex items-center justify-center space-x-1"
            >
              {loadingVocab ? <RefreshCw className="w-4 h-4 animate-spin" /> : <span>Extract Root Words</span>}
            </button>
            <button
              onClick={handleExplainCustomVerse}
              disabled={loadingExplain}
              className="flex-1 py-2.5 rounded-2xl bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-500/30 text-xs font-bold hover:bg-amber-500/30 transition-colors flex items-center justify-center space-x-1"
            >
              {loadingExplain ? <RefreshCw className="w-4 h-4 animate-spin" /> : <span>Generate AI Reflection</span>}
            </button>
          </div>
        </div>

        {/* Vocab Results List */}
        {vocabList.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-emerald-900/10 dark:border-emerald-500/15">
            {vocabList.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-900/10 dark:border-emerald-500/20 space-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif text-lg font-bold text-emerald-950 dark:text-emerald-100 dir-rtl">
                    {item.arabic}
                  </span>
                  {item.root && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-600 dark:text-amber-300">
                      Root: {item.root}
                    </span>
                  )}
                </div>
                <div className="text-xs font-bold text-emerald-800 dark:text-emerald-200">
                  {item.transliteration} — "{item.english}"
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Explanation Result */}
        {explanationResult && (
          <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-900/10 dark:border-emerald-500/20 text-xs text-emerald-950 dark:text-emerald-100 whitespace-pre-line leading-relaxed">
            {explanationResult}
          </div>
        )}
      </div>

      {/* Hifz Memorization & Progress Tracker Card */}
      <div className="rounded-3xl bg-gradient-to-r from-emerald-900 to-teal-950 p-6 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start space-x-2">
            <Target className="w-5 h-5 text-amber-300" />
            <h3 className="text-lg font-extrabold text-emerald-50">Hifz Goal Tracker</h3>
          </div>
          <p className="text-xs text-emerald-200/80">
            Memorized {userStats.hifzMemorizedCount} of {userStats.hifzGoalVerses} target Ayahs (56% complete).
          </p>
        </div>

        <button
          onClick={() => setIsHifzModalOpen(true)}
          className="px-5 py-2.5 rounded-2xl bg-amber-400 text-emerald-950 font-extrabold text-xs shadow hover:bg-amber-300 transition-colors shrink-0"
        >
          Open Hifz Planner
        </button>
      </div>

      {/* Modals */}
      <AiQuizModal isOpen={!!activeQuiz} onClose={() => setActiveQuiz(null)} quizData={activeQuiz} />
      <HifzPlannerModal isOpen={isHifzModalOpen} onClose={() => setIsHifzModalOpen(false)} />
    </div>
  );
};
