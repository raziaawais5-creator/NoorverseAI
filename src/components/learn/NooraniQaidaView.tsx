import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Volume2,
  Sparkles,
  Mic,
  Search,
  Play,
  Pause,
  RotateCcw,
  CheckCircle2,
  HelpCircle,
  Award,
  Sliders,
  Check,
  ChevronRight,
  TrendingUp,
  BookOpen,
  VolumeX,
  RefreshCw,
  Trophy,
  UserCheck,
  Headphones,
} from 'lucide-react';
import {
  NOORANI_QAIDA_CHAPTERS,
  QaidaChapter,
  QaidaItem,
  QaidaQuizQuestion,
} from '../../data/nooraniQaidaData';
import { AiPronunciationModal } from '../common/AiPronunciationModal';
import {
  DEFAULT_QAIDA_AUDIO_SETTINGS,
  QaidaAudioSettings,
  QaidaVoiceId,
  QAIDA_VOICES_LIST,
  playQaidaPronunciation,
  playHarmonicTajweedChime,
  getAllAvailableVoices,
} from '../../utils/qaidaAudio';

interface QaidaProgressData {
  completedLessons: number[];
  quizScores: { [lessonId: number]: number };
  practicedItems: string[];
}

export const NooraniQaidaView: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  const navigate = useNavigate();
  const [activeChapterId, setActiveChapterId] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'cards' | 'quiz'>('cards');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedItem, setSelectedItem] = useState<QaidaItem>(NOORANI_QAIDA_CHAPTERS[0].items[0]);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [isAutoPlayingChapter, setIsAutoPlayingChapter] = useState<boolean>(false);
  const [autoPlayIndex, setAutoPlayIndex] = useState<number>(-1);
  const [isAiModalOpen, setIsAiModalOpen] = useState<boolean>(false);
  const [showVoiceSettings, setShowVoiceSettings] = useState<boolean>(false);
  const [availableSystemVoices, setAvailableSystemVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [isTestingVoice, setIsTestingVoice] = useState<boolean>(false);

  // Audio Settings
  const [audioSettings, setAudioSettings] = useState<QaidaAudioSettings>(() => {
    try {
      const saved = localStorage.getItem('noorani_qaida_audio_settings');
      if (saved) {
        const parsed = JSON.parse(saved);
        return { ...DEFAULT_QAIDA_AUDIO_SETTINGS, ...parsed };
      }
      return DEFAULT_QAIDA_AUDIO_SETTINGS;
    } catch {
      return DEFAULT_QAIDA_AUDIO_SETTINGS;
    }
  });

  // User Progress Data
  const [progress, setProgress] = useState<QaidaProgressData>(() => {
    try {
      const saved = localStorage.getItem('noorani_qaida_user_progress');
      return saved
        ? JSON.parse(saved)
        : { completedLessons: [], quizScores: {}, practicedItems: [] };
    } catch {
      return { completedLessons: [], quizScores: {}, practicedItems: [] };
    }
  });

  // Load system voices
  useEffect(() => {
    const loadVoices = () => {
      const voices = getAllAvailableVoices();
      setAvailableSystemVoices(voices);
    };

    loadVoices();
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  }, []);

  // Quiz State
  const [currentQuizIndex, setCurrentQuizIndex] = useState<number>(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
  const [quizScore, setQuizScore] = useState<number>(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState<boolean>(false);
  const [answeredQuestions, setAnsweredQuestions] = useState<{ [qIndex: number]: number }>({});

  const currentChapter = useMemo(() => {
    return NOORANI_QAIDA_CHAPTERS.find((ch) => ch.id === activeChapterId) || NOORANI_QAIDA_CHAPTERS[0];
  }, [activeChapterId]);

  const currentVoice = useMemo(() => {
    return (
      QAIDA_VOICES_LIST.find((v) => v.id === audioSettings.selectedVoiceId) ||
      QAIDA_VOICES_LIST[0]
    );
  }, [audioSettings.selectedVoiceId]);

  // Save Audio Settings
  useEffect(() => {
    try {
      localStorage.setItem('noorani_qaida_audio_settings', JSON.stringify(audioSettings));
    } catch (e) {
      console.warn(e);
    }
  }, [audioSettings]);

  // Save Progress
  const saveProgress = (newProgress: QaidaProgressData) => {
    setProgress(newProgress);
    try {
      localStorage.setItem('noorani_qaida_user_progress', JSON.stringify(newProgress));
    } catch (e) {
      console.warn(e);
    }
  };

  // Switch Lesson
  const handleSelectChapter = (chId: number) => {
    setActiveChapterId(chId);
    const target = NOORANI_QAIDA_CHAPTERS.find((c) => c.id === chId) || NOORANI_QAIDA_CHAPTERS[0];
    setSelectedItem(target.items[0]);
    setIsAutoPlayingChapter(false);
    setAutoPlayIndex(-1);
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    // Reset Quiz
    setCurrentQuizIndex(0);
    setSelectedAnswerIndex(null);
    setQuizScore(0);
    setIsQuizCompleted(false);
    setAnsweredQuestions({});
  };

  // Filter items
  const filteredItems = useMemo(() => {
    if (!searchQuery) return currentChapter.items;
    const q = searchQuery.toLowerCase().trim();
    return currentChapter.items.filter(
      (item) =>
        item.arabic.includes(q) ||
        item.transliteration.toLowerCase().includes(q) ||
        (item.makhrajOrNote && item.makhrajOrNote.toLowerCase().includes(q)) ||
        (item.nameArabic && item.nameArabic.includes(q))
    );
  }, [currentChapter, searchQuery]);

  // Mark item as practiced & play sound
  const handlePlaySound = (item: QaidaItem) => {
    setSelectedItem(item);
    setIsPlayingAudio(true);

    // Track practice in progress
    if (!progress.practicedItems.includes(item.id)) {
      saveProgress({
        ...progress,
        practicedItems: [...progress.practicedItems, item.id],
      });
    }

    const textToSpeak = item.audioText || item.nameArabic || item.arabic;
    playQaidaPronunciation(
      textToSpeak,
      audioSettings,
      () => setIsPlayingAudio(false),
      () => setIsPlayingAudio(false)
    );
  };

  // Test current selected voice
  const handleTestVoice = (customVoiceId?: QaidaVoiceId) => {
    setIsTestingVoice(true);
    const settingsToTest = customVoiceId
      ? { ...audioSettings, selectedVoiceId: customVoiceId }
      : audioSettings;

    const sampleArabic = selectedItem?.arabic || 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ';
    playQaidaPronunciation(
      sampleArabic,
      settingsToTest,
      () => setIsTestingVoice(false),
      () => setIsTestingVoice(false)
    );
  };

  // Auto-play through chapter
  const handleToggleAutoPlayChapter = () => {
    if (isAutoPlayingChapter) {
      setIsAutoPlayingChapter(false);
      setAutoPlayIndex(-1);
      if ('speechSynthesis' in window) window.speechSynthesis.cancel();
      return;
    }

    setIsAutoPlayingChapter(true);
    playNextAutoItem(0);
  };

  const playNextAutoItem = (index: number) => {
    if (index >= currentChapter.items.length) {
      setIsAutoPlayingChapter(false);
      setAutoPlayIndex(-1);
      return;
    }

    const item = currentChapter.items[index];
    setAutoPlayIndex(index);
    setSelectedItem(item);

    // Track practice
    if (!progress.practicedItems.includes(item.id)) {
      saveProgress({
        ...progress,
        practicedItems: [...progress.practicedItems, item.id],
      });
    }

    const textToSpeak = item.audioText || item.nameArabic || item.arabic;
    playQaidaPronunciation(
      textToSpeak,
      audioSettings,
      () => {
        setTimeout(() => {
          playNextAutoItem(index + 1);
        }, 500);
      },
      () => {
        setIsAutoPlayingChapter(false);
        setAutoPlayIndex(-1);
      }
    );
  };

  // Progress Calculations
  const totalLessons = NOORANI_QAIDA_CHAPTERS.length;
  const completedLessonsCount = progress.completedLessons.length;
  const overallProgressPercentage = Math.round((completedLessonsCount / totalLessons) * 100);

  // Active Lesson Practice Progress
  const lessonPracticedCount = currentChapter.items.filter((item) =>
    progress.practicedItems.includes(item.id)
  ).length;
  const lessonPracticePercent = Math.round(
    (lessonPracticedCount / currentChapter.items.length) * 100
  );

  const isCurrentLessonComplete = progress.completedLessons.includes(currentChapter.id);

  // Toggle Lesson Completion status
  const handleToggleLessonComplete = () => {
    let updated: number[];
    if (isCurrentLessonComplete) {
      updated = progress.completedLessons.filter((id) => id !== currentChapter.id);
    } else {
      updated = [...progress.completedLessons, currentChapter.id];
      playHarmonicTajweedChime(660);
    }
    saveProgress({
      ...progress,
      completedLessons: updated,
    });
  };

  // Handle Quiz answer
  const questions: QaidaQuizQuestion[] = currentChapter.quizQuestions || [
    {
      id: `default-${currentChapter.id}-1`,
      question: `Which letter or rule is featured in ${currentChapter.title}?`,
      options: [currentChapter.items[0]?.arabic || 'ا', 'ب', 'ت', 'ث'],
      correctIndex: 0,
      explanation: `This is a key component of ${currentChapter.title}.`,
    },
  ];

  const currentQ = questions[currentQuizIndex] || questions[0];

  const handleSelectQuizAnswer = (optionIdx: number) => {
    if (selectedAnswerIndex !== null) return; // already answered
    setSelectedAnswerIndex(optionIdx);

    const isCorrect = optionIdx === currentQ.correctIndex;
    const newScore = isCorrect ? quizScore + 1 : quizScore;
    if (isCorrect) setQuizScore(newScore);

    setAnsweredQuestions({
      ...answeredQuestions,
      [currentQuizIndex]: optionIdx,
    });
  };

  const handleNextQuizQuestion = () => {
    if (currentQuizIndex < questions.length - 1) {
      setCurrentQuizIndex(currentQuizIndex + 1);
      setSelectedAnswerIndex(null);
    } else {
      // Finished Quiz
      setIsQuizCompleted(true);
      const finalScorePercent = Math.round((quizScore / questions.length) * 100);
      const updatedScores = { ...progress.quizScores, [currentChapter.id]: finalScorePercent };

      // Auto-complete lesson if score >= 70%
      let updatedCompleted = [...progress.completedLessons];
      if (finalScorePercent >= 70 && !updatedCompleted.includes(currentChapter.id)) {
        updatedCompleted.push(currentChapter.id);
      }

      saveProgress({
        ...progress,
        completedLessons: updatedCompleted,
        quizScores: updatedScores,
      });

      playHarmonicTajweedChime(finalScorePercent >= 70 ? 784 : 440);
    }
  };

  const handleRetakeQuiz = () => {
    setCurrentQuizIndex(0);
    setSelectedAnswerIndex(null);
    setQuizScore(0);
    setIsQuizCompleted(false);
    setAnsweredQuestions({});
  };

  const quizCorrectPercentage = isQuizCompleted
    ? Math.round((quizScore / questions.length) * 100)
    : currentQuizIndex > 0
    ? Math.round((quizScore / currentQuizIndex) * 100)
    : 100;

  // Handle safe back navigation
  const handleGoBack = () => {
    setIsAutoPlayingChapter(false);
    setAutoPlayIndex(-1);
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    if (onBack) {
      onBack();
    } else {
      navigate('/learn');
    }
  };

  return (
    <div className="space-y-5 pb-28 px-3 sm:px-4 pt-3 max-w-5xl mx-auto">
      {/* Top Sticky Header with Back Button */}
      <div className="sticky top-0 z-20 bg-[#F7F9FC]/95 dark:bg-[#0B1320]/95 backdrop-blur-md py-2.5 -mx-3 px-3 sm:-mx-4 sm:px-4 border-b border-emerald-900/10 dark:border-emerald-500/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
        <div className="flex items-center space-x-3">
          <button
            onClick={handleGoBack}
            className="flex items-center space-x-1.5 px-3.5 py-2 rounded-2xl bg-white dark:bg-[#18221D] border border-emerald-900/15 dark:border-emerald-500/25 text-emerald-900 dark:text-emerald-100 hover:bg-emerald-50 dark:hover:bg-emerald-950/60 transition-all shadow-sm group hover:scale-[1.02] active:scale-95 shrink-0"
            title="Go back to Learn Modules Hub"
            aria-label="Back to Learn Hub"
          >
            <ArrowLeft className="w-4 h-4 text-amber-500 group-hover:-translate-x-0.5 transition-transform" />
            <span className="text-xs font-bold">Back</span>
          </button>
          <div className="min-w-0">
            <h2 className="text-sm sm:text-base font-black text-emerald-950 dark:text-emerald-50 leading-tight truncate">
              Interactive Noorani Qaida
            </h2>
            <p className="text-[10px] sm:text-[11px] text-emerald-800/60 dark:text-emerald-400/60 font-medium truncate">
              15 Tajweed Chapters • Authentic Qari Audio Voices • Quiz & Progress
            </p>
          </div>
        </div>

        {/* Voice Audio Settings & Voice Quick Pill */}
        <div className="flex items-center space-x-2 shrink-0">
          <button
            onClick={() => setShowVoiceSettings(!showVoiceSettings)}
            className={`px-3 py-1.5 rounded-xl border text-xs font-bold flex items-center space-x-2 transition-all ${
              showVoiceSettings
                ? 'bg-amber-400 text-emerald-950 border-amber-500 shadow-md'
                : 'bg-white dark:bg-[#18221D] text-emerald-900 dark:text-emerald-100 border-emerald-900/15 dark:border-emerald-500/20 hover:border-amber-400/50'
            }`}
          >
            <Headphones className="w-3.5 h-3.5 text-amber-500" />
            <span className="truncate max-w-[130px]">{currentVoice.name}</span>
            <Sliders className="w-3 h-3 opacity-60" />
          </button>
        </div>
      </div>

      {/* Voice & Pronunciation Settings Drawer */}
      {showVoiceSettings && (
        <div className="rounded-3xl bg-white dark:bg-[#18221D] border border-emerald-900/15 dark:border-emerald-500/20 p-5 shadow-xl space-y-5">
          <div className="flex items-center justify-between border-b border-emerald-900/10 dark:border-emerald-500/15 pb-3">
            <div className="flex items-center space-x-2">
              <Headphones className="w-5 h-5 text-amber-500" />
              <div>
                <h4 className="text-sm font-extrabold text-emerald-950 dark:text-emerald-50">
                  Select Reciter & Audio Voice
                </h4>
                <p className="text-[11px] text-emerald-800/60 dark:text-emerald-400/60">
                  Choose from master Qaris, Tajweed instructors, or native Arabic studio voices
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleTestVoice()}
                disabled={isTestingVoice}
                className="px-3 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-emerald-950 font-bold text-xs flex items-center space-x-1.5 shadow transition-all"
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>{isTestingVoice ? 'Playing...' : 'Test Voice'}</span>
              </button>
              <button
                onClick={() => setAudioSettings(DEFAULT_QAIDA_AUDIO_SETTINGS)}
                className="text-[11px] font-bold text-emerald-700 dark:text-emerald-300 hover:underline flex items-center space-x-1"
                title="Reset default settings"
              >
                <RotateCcw className="w-3 h-3" />
                <span className="hidden sm:inline">Reset</span>
              </button>
            </div>
          </div>

          {/* Voice Cards Grid */}
          <div className="space-y-2">
            <label className="text-xs font-extrabold uppercase tracking-wider text-emerald-950 dark:text-emerald-100">
              Available Reciter Voices
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {QAIDA_VOICES_LIST.map((voice) => {
                const isSelected = audioSettings.selectedVoiceId === voice.id;
                return (
                  <div
                    key={voice.id}
                    onClick={() => {
                      setAudioSettings({
                        ...audioSettings,
                        selectedVoiceId: voice.id,
                      });
                      handleTestVoice(voice.id);
                    }}
                    className={`p-3 rounded-2xl border cursor-pointer transition-all space-y-1.5 relative ${
                      isSelected
                        ? 'bg-emerald-900 text-white border-amber-400 shadow-md ring-1 ring-amber-400/50'
                        : 'bg-emerald-50/40 dark:bg-emerald-950/20 text-emerald-950 dark:text-emerald-100 border-emerald-900/10 dark:border-emerald-500/15 hover:bg-emerald-100/40'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-extrabold ${
                        isSelected
                          ? 'bg-amber-400 text-emerald-950'
                          : 'bg-emerald-200/60 dark:bg-emerald-800/40 text-emerald-900 dark:text-emerald-200'
                      }`}>
                        {voice.badge}
                      </span>
                      {isSelected && <Check className="w-4 h-4 text-amber-400" />}
                    </div>

                    <div>
                      <div className="text-xs font-black truncate">{voice.name}</div>
                      <div className={`text-[11px] font-serif ${isSelected ? 'text-amber-200' : 'text-emerald-700 dark:text-emerald-300'}`}>
                        {voice.arabicName}
                      </div>
                    </div>

                    <p className={`text-[10px] line-clamp-2 leading-relaxed ${
                      isSelected ? 'text-emerald-100/80' : 'text-emerald-800/60 dark:text-emerald-400/60'
                    }`}>
                      {voice.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* System Device Voice Picker (when Device Voice selected) */}
          {audioSettings.selectedVoiceId === 'device_system' && (
            <div className="p-3.5 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/40 border border-emerald-900/10 dark:border-emerald-500/15 space-y-2">
              <label className="text-xs font-bold text-emerald-950 dark:text-emerald-100">
                Select Installed Device Voice:
              </label>
              {availableSystemVoices.length > 0 ? (
                <select
                  value={audioSettings.selectedSystemVoiceURI || ''}
                  onChange={(e) =>
                    setAudioSettings({
                      ...audioSettings,
                      selectedSystemVoiceURI: e.target.value,
                    })
                  }
                  className="w-full text-xs p-2.5 rounded-xl bg-white dark:bg-[#18221D] border border-emerald-900/20 dark:border-emerald-500/20 text-emerald-950 dark:text-emerald-50"
                >
                  <option value="">-- Automatic Best Arabic System Voice --</option>
                  {availableSystemVoices.map((v) => (
                    <option key={v.voiceURI} value={v.voiceURI}>
                      {v.name} ({v.lang})
                    </option>
                  ))}
                </select>
              ) : (
                <p className="text-[11px] text-amber-700 dark:text-amber-300">
                  Using default browser speech synthesizer engine.
                </p>
              )}
            </div>
          )}

          {/* Audio Tuning Sliders & Chime */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-emerald-900/10 dark:border-emerald-500/15">
            {/* Playback Speed */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-emerald-900 dark:text-emerald-200">
                Pacing / Speed: {audioSettings.speedRate}x
              </label>
              <div className="flex items-center space-x-1.5">
                {[0.5, 0.65, 0.8, 1.0, 1.2].map((rate) => (
                  <button
                    key={rate}
                    onClick={() => setAudioSettings({ ...audioSettings, speedRate: rate })}
                    className={`flex-1 py-1.5 rounded-xl text-[11px] font-bold border transition-all ${
                      audioSettings.speedRate === rate
                        ? 'bg-emerald-700 text-amber-300 border-emerald-600 shadow'
                        : 'bg-emerald-50/50 dark:bg-emerald-950/30 text-emerald-900 dark:text-emerald-200 border-emerald-900/10 dark:border-emerald-500/10'
                    }`}
                  >
                    {rate}x
                  </button>
                ))}
              </div>
            </div>

            {/* Pitch Tuning */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-emerald-900 dark:text-emerald-200">
                Vocal Pitch: {audioSettings.pitch}x
              </label>
              <div className="flex items-center space-x-1.5">
                {[0.8, 0.92, 1.0, 1.15].map((p) => (
                  <button
                    key={p}
                    onClick={() => setAudioSettings({ ...audioSettings, pitch: p })}
                    className={`flex-1 py-1.5 rounded-xl text-[11px] font-bold border transition-all ${
                      audioSettings.pitch === p
                        ? 'bg-emerald-700 text-amber-300 border-emerald-600 shadow'
                        : 'bg-emerald-50/50 dark:bg-emerald-950/30 text-emerald-900 dark:text-emerald-200 border-emerald-900/10 dark:border-emerald-500/10'
                    }`}
                  >
                    {p === 0.8 ? 'Deep' : p === 0.92 ? 'Warm' : p === 1.0 ? 'Norm' : 'High'}
                  </button>
                ))}
              </div>
            </div>

            {/* Tajweed Harmonic Resonance Chime */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-emerald-900 dark:text-emerald-200">
                Acoustic Chime
              </label>
              <button
                onClick={() =>
                  setAudioSettings({
                    ...audioSettings,
                    playChime: !audioSettings.playChime,
                  })
                }
                className={`w-full py-2 px-3 rounded-xl text-[11px] font-bold border flex items-center justify-between transition-all ${
                  audioSettings.playChime
                    ? 'bg-amber-400/20 text-emerald-950 dark:text-amber-200 border-amber-400/40'
                    : 'bg-emerald-50/50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-300 border-emerald-900/10 dark:border-emerald-500/10'
                }`}
              >
                <span>Harmonic Touch Tone</span>
                <span className="font-extrabold text-xs">
                  {audioSettings.playChime ? 'ON ✓' : 'OFF'}
                </span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Global Overall Qaida Progress Bar */}
      <div className="rounded-3xl bg-white dark:bg-[#18221D] border border-emerald-900/10 dark:border-emerald-500/15 p-4 sm:p-5 shadow-sm space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center space-x-2">
            <Trophy className="w-5 h-5 text-amber-500 shrink-0" />
            <div>
              <div className="text-xs font-extrabold text-emerald-950 dark:text-emerald-50">
                Noorani Qaida Overall Progress
              </div>
              <div className="text-[11px] text-emerald-800/60 dark:text-emerald-400/60">
                {completedLessonsCount} of {totalLessons} Lessons Completed
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-3 self-end sm:self-auto">
            <span className="text-sm font-black text-amber-600 dark:text-amber-400">
              {overallProgressPercentage}%
            </span>
          </div>
        </div>

        {/* Visual Progress Bar */}
        <div className="w-full h-2.5 bg-emerald-100 dark:bg-emerald-950/60 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-amber-500 to-emerald-600 rounded-full transition-all duration-500"
            style={{ width: `${overallProgressPercentage}%` }}
          />
        </div>
      </div>

      {/* Lesson Navigation Horizontal Scroll */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-extrabold uppercase tracking-wider text-emerald-900 dark:text-emerald-200">
            Lessons & Topics (1 to 15)
          </h3>
          <span className="text-[11px] font-bold text-amber-600 dark:text-amber-400">
            Lesson {currentChapter.id}: {currentChapter.title}
          </span>
        </div>

        <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-thin">
          {NOORANI_QAIDA_CHAPTERS.map((ch) => {
            const isSelected = ch.id === activeChapterId;
            const isComplete = progress.completedLessons.includes(ch.id);
            const score = progress.quizScores[ch.id];

            return (
              <button
                key={ch.id}
                onClick={() => handleSelectChapter(ch.id)}
                className={`px-3 py-2 rounded-2xl text-left border shrink-0 transition-all flex items-center space-x-2 ${
                  isSelected
                    ? 'bg-emerald-800 text-white border-amber-400 shadow-md ring-1 ring-amber-400/40'
                    : isComplete
                    ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 border-emerald-600/30'
                    : 'bg-white dark:bg-[#18221D] text-emerald-900 dark:text-emerald-200 border-emerald-900/10 dark:border-emerald-500/15 hover:bg-emerald-50/50'
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-lg flex items-center justify-center text-[11px] font-bold ${
                    isSelected
                      ? 'bg-amber-400 text-emerald-950'
                      : isComplete
                      ? 'bg-emerald-600 text-white'
                      : 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300'
                  }`}
                >
                  {isComplete ? '✓' : ch.id}
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold whitespace-nowrap">{ch.title}</div>
                  <div
                    className={`text-[10px] ${
                      isSelected ? 'text-amber-200' : 'text-emerald-800/60 dark:text-emerald-400/60'
                    }`}
                  >
                    {score !== undefined ? `Quiz: ${score}%` : `${ch.items.length} items`}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Lesson Card Header Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-950 text-white p-5 sm:p-6 shadow-md border border-emerald-500/20 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 text-xs font-extrabold border border-amber-400/30">
                Lesson {currentChapter.id} of 15
              </span>
              <span className="text-xs text-emerald-200/80 font-medium">
                {currentChapter.titleArabic}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-amber-300">
              {currentChapter.title}
            </h3>
            <p className="text-xs text-emerald-100/80 max-w-xl">
              {currentChapter.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Mark Lesson Complete Button */}
            <button
              onClick={handleToggleLessonComplete}
              className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center space-x-1.5 transition-all shadow ${
                isCurrentLessonComplete
                  ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                  : 'bg-white/10 hover:bg-white/20 text-emerald-100 border border-white/20'
              }`}
            >
              <CheckCircle2 className="w-4 h-4 text-amber-300" />
              <span>{isCurrentLessonComplete ? 'Lesson Completed ✓' : 'Mark as Complete'}</span>
            </button>
          </div>
        </div>

        {/* Current Lesson Progress Details */}
        <div className="pt-2 border-t border-white/10 flex flex-wrap items-center justify-between text-xs text-emerald-200/80 gap-2">
          <div className="flex items-center space-x-4">
            <div>
              <span className="text-emerald-400 font-bold">Rule: </span>
              {currentChapter.tajweedRuleSummary}
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span>Practiced:</span>
            <span className="font-extrabold text-amber-300">
              {lessonPracticedCount} / {currentChapter.items.length} ({lessonPracticePercent}%)
            </span>
          </div>
        </div>
      </div>

      {/* Tabs: Practice Cards vs Quiz */}
      <div className="flex items-center justify-between border-b border-emerald-900/10 dark:border-emerald-500/15">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setActiveTab('cards')}
            className={`pb-3 text-xs sm:text-sm font-black flex items-center space-x-2 border-b-2 transition-all ${
              activeTab === 'cards'
                ? 'border-amber-500 text-emerald-950 dark:text-emerald-50'
                : 'border-transparent text-emerald-850/60 dark:text-emerald-400/60 hover:text-emerald-900'
            }`}
          >
            <BookOpen className="w-4 h-4 text-amber-500" />
            <span>Practice Cards ({currentChapter.items.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('quiz')}
            className={`pb-3 text-xs sm:text-sm font-black flex items-center space-x-2 border-b-2 transition-all ${
              activeTab === 'quiz'
                ? 'border-amber-500 text-emerald-950 dark:text-emerald-50'
                : 'border-transparent text-emerald-850/60 dark:text-emerald-400/60 hover:text-emerald-900'
            }`}
          >
            <HelpCircle className="w-4 h-4 text-amber-500" />
            <span>
              Lesson Quiz{' '}
              {progress.quizScores[currentChapter.id] !== undefined && (
                <span className="ml-1 px-1.5 py-0.5 rounded-full bg-amber-400/20 text-amber-600 dark:text-amber-300 text-[10px]">
                  {progress.quizScores[currentChapter.id]}%
                </span>
              )}
            </span>
          </button>
        </div>

        {activeTab === 'cards' && (
          <div className="flex items-center space-x-2 pb-2">
            {/* Auto Play Audio */}
            <button
              onClick={handleToggleAutoPlayChapter}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center space-x-1.5 transition-all shadow-sm ${
                isAutoPlayingChapter
                  ? 'bg-rose-600 text-white animate-pulse'
                  : 'bg-emerald-700 hover:bg-emerald-600 text-amber-300'
              }`}
            >
              {isAutoPlayingChapter ? (
                <>
                  <Pause className="w-3.5 h-3.5" />
                  <span>Stop Auto</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5" />
                  <span>Auto-Play All</span>
                </>
              )}
            </button>
          </div>
        )}
      </div>

      {/* CONTENT TAB 1: PRACTICE CARDS */}
      {activeTab === 'cards' && (
        <div className="space-y-4">
          {/* Search bar inside lesson */}
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-emerald-800/40 dark:text-emerald-400/40" />
            <input
              type="text"
              placeholder={`Search letters, words or makhraj in Lesson ${currentChapter.id}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-2xl bg-white dark:bg-[#18221D] border border-emerald-900/10 dark:border-emerald-500/15 text-xs text-emerald-950 dark:text-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {filteredItems.map((item, idx) => {
              const isSelected = selectedItem?.id === item.id;
              const isPracticed = progress.practicedItems.includes(item.id);
              const isCurrentlyPlayingThis =
                isPlayingAudio && selectedItem?.id === item.id;

              return (
                <div
                  key={item.id}
                  onClick={() => handlePlaySound(item)}
                  className={`group relative rounded-3xl p-4 cursor-pointer transition-all duration-200 border flex flex-col items-center justify-between text-center min-h-[145px] select-none ${
                    isSelected
                      ? 'bg-emerald-900 text-white border-amber-400 shadow-lg ring-2 ring-amber-400/60 scale-[1.02]'
                      : isPracticed
                      ? 'bg-white dark:bg-[#18221D] text-emerald-950 dark:text-emerald-50 border-emerald-600/30 hover:border-emerald-500 hover:shadow-md'
                      : 'bg-white dark:bg-[#18221D] text-emerald-950 dark:text-emerald-50 border-emerald-900/10 dark:border-emerald-500/15 hover:border-amber-400/40 hover:shadow'
                  }`}
                >
                  {/* Status Badge */}
                  <div className="w-full flex items-center justify-between">
                    <span
                      className={`text-[9px] px-1.5 py-0.5 rounded-md font-bold ${
                        isSelected
                          ? 'bg-amber-400 text-emerald-950'
                          : 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300'
                      }`}
                    >
                      #{idx + 1}
                    </span>

                    {isPracticed && (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    )}
                  </div>

                  {/* Arabic Display */}
                  <div className="my-2">
                    <div
                      className={`font-serif text-3xl sm:text-4xl transition-transform group-hover:scale-110 ${
                        isSelected
                          ? 'text-amber-300'
                          : 'text-emerald-950 dark:text-emerald-50'
                      }`}
                    >
                      {item.arabic}
                    </div>
                    {item.nameArabic && (
                      <div
                        className={`text-[11px] font-serif mt-1 ${
                          isSelected
                            ? 'text-emerald-200'
                            : 'text-emerald-800/60 dark:text-emerald-400/60'
                        }`}
                      >
                        {item.nameArabic}
                      </div>
                    )}
                  </div>

                  {/* Transliteration & Category */}
                  <div className="w-full border-t border-emerald-900/10 dark:border-emerald-500/15 pt-1.5 mt-1">
                    <div
                      className={`text-xs font-extrabold truncate ${
                        isSelected ? 'text-white' : 'text-emerald-900 dark:text-emerald-100'
                      }`}
                    >
                      {item.transliteration}
                    </div>

                    {item.category && (
                      <div
                        className={`text-[9px] uppercase tracking-wider truncate ${
                          isSelected
                            ? 'text-amber-200'
                            : 'text-emerald-800/50 dark:text-emerald-400/50'
                        }`}
                      >
                        {item.category}
                      </div>
                    )}
                  </div>

                  {/* Audio Playing Wave Indicator */}
                  {isCurrentlyPlayingThis && (
                    <div className="absolute top-2 right-2 flex items-center space-x-0.5">
                      <span className="w-1 h-3 bg-amber-400 animate-pulse" />
                      <span className="w-1 h-4 bg-amber-400 animate-pulse delay-75" />
                      <span className="w-1 h-2 bg-amber-400 animate-pulse delay-150" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Active Selected Card Detail Panel */}
          {selectedItem && (
            <div className="rounded-3xl bg-white dark:bg-[#18221D] border border-emerald-900/10 dark:border-emerald-500/15 p-5 sm:p-6 shadow-md space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-emerald-900/10 dark:border-emerald-500/15 pb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-900 text-amber-300 font-serif text-3xl sm:text-4xl flex items-center justify-center font-bold shadow-md border border-amber-400/30">
                    {selectedItem.arabic}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="text-lg font-black text-emerald-950 dark:text-emerald-50">
                        {selectedItem.transliteration}
                      </h4>
                      {selectedItem.nameArabic && (
                        <span className="font-serif text-sm text-amber-600 dark:text-amber-400">
                          ({selectedItem.nameArabic})
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-emerald-800/60 dark:text-emerald-400/60 font-medium">
                      Current Voice: <span className="font-bold text-emerald-700 dark:text-emerald-300">{currentVoice.name}</span>
                    </p>
                  </div>
                </div>

                {/* Audio & AI Action Buttons */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handlePlaySound(selectedItem)}
                    className="px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-amber-300 font-bold text-xs shadow flex items-center space-x-2 transition-all"
                  >
                    <Volume2 className="w-4 h-4" />
                    <span>Listen Sound</span>
                  </button>

                  <button
                    onClick={() => setIsAiModalOpen(true)}
                    className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-emerald-950 font-bold text-xs shadow flex items-center space-x-2 transition-all"
                  >
                    <Mic className="w-4 h-4" />
                    <span>Check My Pronunciation</span>
                  </button>
                </div>
              </div>

              {/* Point of Articulation (Makhraj) & Tajweed Description */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3.5 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/40 border border-emerald-900/10 dark:border-emerald-500/15 space-y-1">
                  <div className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-900 dark:text-emerald-200 flex items-center space-x-1">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    <span>Point of Articulation (Makhraj)</span>
                  </div>
                  <p className="text-xs text-emerald-950 dark:text-emerald-100 leading-relaxed font-medium">
                    {selectedItem.makhrajOrNote ||
                      'Pronounce distinctly with proper breath support and makhraj exit.'}
                  </p>
                </div>

                {selectedItem.connectedForms && (
                  <div className="p-3.5 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/40 border border-emerald-900/10 dark:border-emerald-500/15 space-y-1">
                    <div className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-900 dark:text-emerald-200">
                      Connected Letter Positions
                    </div>
                    <div className="grid grid-cols-4 gap-2 text-center text-xs pt-1">
                      <div className="p-1.5 rounded-xl bg-white dark:bg-[#18221D] border border-emerald-900/10">
                        <div className="font-serif text-lg font-bold text-emerald-950 dark:text-emerald-50">
                          {selectedItem.connectedForms.isolated}
                        </div>
                        <div className="text-[9px] text-emerald-800/60 dark:text-emerald-400/60">
                          Isolated
                        </div>
                      </div>
                      <div className="p-1.5 rounded-xl bg-white dark:bg-[#18221D] border border-emerald-900/10">
                        <div className="font-serif text-lg font-bold text-emerald-950 dark:text-emerald-50">
                          {selectedItem.connectedForms.initial}
                        </div>
                        <div className="text-[9px] text-emerald-800/60 dark:text-emerald-400/60">
                          Initial
                        </div>
                      </div>
                      <div className="p-1.5 rounded-xl bg-white dark:bg-[#18221D] border border-emerald-900/10">
                        <div className="font-serif text-lg font-bold text-emerald-950 dark:text-emerald-50">
                          {selectedItem.connectedForms.medial}
                        </div>
                        <div className="text-[9px] text-emerald-800/60 dark:text-emerald-400/60">
                          Medial
                        </div>
                      </div>
                      <div className="p-1.5 rounded-xl bg-white dark:bg-[#18221D] border border-emerald-900/10">
                        <div className="font-serif text-lg font-bold text-emerald-950 dark:text-emerald-50">
                          {selectedItem.connectedForms.final}
                        </div>
                        <div className="text-[9px] text-emerald-800/60 dark:text-emerald-400/60">
                          Final
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* CONTENT TAB 2: LESSON QUIZ */}
      {activeTab === 'quiz' && (
        <div className="rounded-3xl bg-white dark:bg-[#18221D] border border-emerald-900/10 dark:border-emerald-500/15 p-5 sm:p-6 shadow-md space-y-6">
          {!isQuizCompleted ? (
            <div className="space-y-5">
              {/* Quiz Header & Live Score */}
              <div className="flex items-center justify-between border-b border-emerald-900/10 dark:border-emerald-500/15 pb-4">
                <div>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-700 dark:text-amber-300">
                    Question {currentQuizIndex + 1} of {questions.length}
                  </span>
                  <h4 className="text-base font-black text-emerald-950 dark:text-emerald-50 mt-1">
                    Lesson {currentChapter.id} Knowledge Check
                  </h4>
                </div>

                <div className="flex items-center space-x-3">
                  {/* Live Correct Percentage Counter */}
                  <div className="text-right">
                    <div className="text-[11px] font-bold text-emerald-800/60 dark:text-emerald-400/60">
                      Live Correct %
                    </div>
                    <div className="text-base font-black text-amber-600 dark:text-amber-400">
                      {currentQuizIndex > 0
                        ? `${Math.round((quizScore / currentQuizIndex) * 100)}%`
                        : '100%'}
                    </div>
                  </div>

                  <button
                    onClick={handleRetakeQuiz}
                    className="p-2 rounded-xl border border-emerald-900/10 dark:border-emerald-500/20 text-emerald-800 dark:text-emerald-200 hover:bg-emerald-50 dark:hover:bg-emerald-950/40"
                    title="Restart Quiz"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Question Text */}
              <div className="space-y-3">
                <p className="text-sm font-extrabold text-emerald-950 dark:text-emerald-50 leading-snug">
                  {currentQ.question}
                </p>

                {/* Optional Audio Prompt Button */}
                {currentQ.audioTextToPlay && (
                  <button
                    onClick={() =>
                      playQaidaPronunciation(currentQ.audioTextToPlay!, audioSettings)
                    }
                    className="px-3.5 py-2 rounded-xl bg-amber-400 text-emerald-950 font-bold text-xs flex items-center space-x-2 shadow hover:bg-amber-300 transition-all"
                  >
                    <Volume2 className="w-4 h-4" />
                    <span>Listen Audio Prompt</span>
                  </button>
                )}
              </div>

              {/* Options Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentQ.options.map((option, idx) => {
                  const isSelected = selectedAnswerIndex === idx;
                  const isCorrect = idx === currentQ.correctIndex;
                  const hasAnswered = selectedAnswerIndex !== null;

                  let btnStyle =
                    'bg-emerald-50/60 dark:bg-emerald-950/30 border-emerald-900/10 dark:border-emerald-500/15 text-emerald-950 dark:text-emerald-50 hover:bg-emerald-100/60';

                  if (hasAnswered) {
                    if (isCorrect) {
                      btnStyle =
                        'bg-emerald-600 text-white border-emerald-600 shadow-md font-bold';
                    } else if (isSelected && !isCorrect) {
                      btnStyle =
                        'bg-rose-600 text-white border-rose-600 shadow-md font-bold';
                    } else {
                      btnStyle =
                        'opacity-40 bg-emerald-50/20 dark:bg-emerald-950/10 text-emerald-900 dark:text-emerald-300';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      disabled={hasAnswered}
                      onClick={() => handleSelectQuizAnswer(idx)}
                      className={`p-3.5 rounded-2xl border text-left text-xs font-semibold transition-all flex items-center justify-between ${btnStyle}`}
                    >
                      <span className="font-serif text-sm">{option}</span>
                      {hasAnswered && isCorrect && <Check className="w-4 h-4" />}
                    </button>
                  );
                })}
              </div>

              {/* Explanation & Next Step */}
              {selectedAnswerIndex !== null && (
                <div className="p-4 rounded-2xl bg-emerald-900/10 dark:bg-emerald-900/30 border border-emerald-500/20 space-y-3 animate-in fade-in">
                  <div className="text-xs text-emerald-900 dark:text-emerald-100 leading-relaxed">
                    <span className="font-bold text-amber-600 dark:text-amber-400">Explanation: </span>
                    {currentQ.explanation}
                  </div>

                  <button
                    onClick={handleNextQuizQuestion}
                    className="w-full py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-amber-300 font-bold text-xs shadow flex items-center justify-center space-x-1.5 transition-all"
                  >
                    <span>
                      {currentQuizIndex < questions.length - 1 ? 'Next Question' : 'View Result'}
                    </span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* FINAL QUIZ RESULT CARD */
            <div className="text-center py-6 space-y-5">
              <div className="w-20 h-20 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center mx-auto border-2 border-amber-400 shadow-lg">
                <Trophy className="w-10 h-10 text-amber-500 animate-bounce" />
              </div>

              <div className="space-y-1">
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-300 font-extrabold text-xs uppercase tracking-wider">
                  Quiz Completed
                </span>
                <h3 className="text-2xl font-black text-emerald-950 dark:text-emerald-50">
                  {quizScore === questions.length
                    ? '🎉 Perfect Tajweed Mastery!'
                    : quizScore >= questions.length * 0.7
                    ? '🌟 Great Job! Lesson Passed!'
                    : '📖 Keep Practicing & Re-try!'}
                </h3>
              </div>

              {/* Final Score & Correct % */}
              <div className="grid grid-cols-2 max-w-xs mx-auto gap-3">
                <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-900/10 dark:border-emerald-500/20">
                  <div className="text-[11px] font-bold text-emerald-800/60 dark:text-emerald-400/60">
                    Correct Score
                  </div>
                  <div className="text-2xl font-black text-emerald-950 dark:text-emerald-50">
                    {quizScore} / {questions.length}
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-900/10 dark:border-emerald-500/20">
                  <div className="text-[11px] font-bold text-emerald-800/60 dark:text-emerald-400/60">
                    Correct %
                  </div>
                  <div className="text-2xl font-black text-amber-600 dark:text-amber-400">
                    {quizCorrectPercentage}%
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 max-w-md mx-auto">
                <button
                  onClick={handleRetakeQuiz}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-emerald-900/15 dark:border-emerald-500/20 text-xs font-bold text-emerald-900 dark:text-emerald-100 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 transition-all flex items-center justify-center space-x-1.5"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Retake Quiz</span>
                </button>

                <button
                  onClick={() => {
                    setActiveTab('cards');
                    if (currentChapter.id < totalLessons) {
                      handleSelectChapter(currentChapter.id + 1);
                    }
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-amber-300 text-xs font-bold shadow transition-all flex items-center justify-center space-x-1.5"
                >
                  <span>
                    {currentChapter.id < totalLessons ? 'Proceed to Next Lesson' : 'Review Cards'}
                  </span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* AI Voice Pronunciation Modal */}
      {selectedItem && (
        <AiPronunciationModal
          isOpen={isAiModalOpen}
          onClose={() => setIsAiModalOpen(false)}
          targetText={selectedItem.arabic}
          itemTitle={`Noorani Qaida ${currentChapter.title}: ${selectedItem.transliteration}`}
          transliteration={selectedItem.transliteration}
          makhrajDefault={selectedItem.makhrajOrNote}
          type="qaida"
        />
      )}
    </div>
  );
};
