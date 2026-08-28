import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Flame,
  BookOpen,
  Sparkles,
  Play,
  Pause,
  ArrowRight,
  Compass,
  Bookmark,
  Target,
  Share2,
  RefreshCw,
  Heart,
  Volume2,
  GraduationCap,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { useTheme } from '../../context/ThemeContext';
import { DAILY_VERSE, ALL_SURAHS_LIST, getDailyHadith, getDailyDua } from '../../data/quranData';
import { generatePrayerTimesForToday } from '../../data/prayersData';
import { fetchLearningTip } from '../../services/api';
import { GeometricPattern } from '../common/GeometricPattern';

export const HomeScreen: React.FC = () => {
  const navigate = useNavigate();
  const { setActiveTab, setActiveSurahNumber, setActiveAyahNumber, userStats, playAudioVerse, pauseAudioVerse, audioState } = useApp();
  const { readerSettings } = useTheme();

  const [prayers, setPrayers] = useState(generatePrayerTimesForToday());
  const [learningTip, setLearningTip] = useState<string>(
    'Pacing yourself with 3-5 ayahs daily with active reflection leads to 90% higher long-term retention than rapid reading.'
  );
  const [loadingTip, setLoadingTip] = useState(false);
  const [showUrdu, setShowUrdu] = useState(false);
  const [hadithOffset, setHadithOffset] = useState(0);
  const [duaOffset, setDuaOffset] = useState(0);

  const dailyHadith = getDailyHadith(hadithOffset);
  const dailyDua = getDailyDua(duaOffset);

  // Countdown timer for next prayer
  const [nextPrayerInfo, setNextPrayerInfo] = useState<{ name: string; timeLeft: string }>({ name: 'Asr', timeLeft: '1h 24m' });

  useEffect(() => {
    const updateTimer = () => {
      const pList = generatePrayerTimesForToday();
      setPrayers(pList);
      const nextP = pList.find((p) => p.isNext) || pList[0];
      const diffMs = nextP.timestamp - Date.now();

      if (diffMs > 0) {
        const hrs = Math.floor(diffMs / (1000 * 60 * 60));
        const mins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
        setNextPrayerInfo({ name: nextP.name, timeLeft: `${hrs}h ${mins}m` });
      } else {
        setNextPrayerInfo({ name: nextP.name, timeLeft: 'Starting now' });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleRefreshTip = async () => {
    setLoadingTip(true);
    const newTip = await fetchLearningTip('Intermediate');
    setLearningTip(newTip);
    setLoadingTip(false);
  };

  const isDailyVersePlaying = audioState.isPlaying && audioState.surahNumber === 2 && audioState.ayahNumber === 255;

  const handleToggleDailyAudio = () => {
    if (isDailyVersePlaying) {
      pauseAudioVerse();
    } else {
      playAudioVerse(2, 255, 'Alafasy_128kbps', 'mishary');
    }
  };

  return (
    <div className="space-y-6 pb-24 px-4 pt-4 max-w-4xl mx-auto">
      {/* Greeting Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1F3A5F] via-[#162A45] to-[#0F1C2E] p-6 text-white shadow-xl">
        <GeometricPattern opacity={0.15} />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full bg-[#6E8FB5]/30 text-[#C7CEDB] text-xs font-semibold border border-[#6E8FB5]/40">
                14 Safar 1448 AH
              </span>
              <span className="text-[#C7CEDB]/80 text-xs font-medium">• Wednesday</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Welcome to NoorVerse
            </h2>
            <p className="text-[#F7F9FC]/80 text-sm mt-1 max-w-md">
              Your peaceful Quran learning sanctuary. May your heart find tranquility in remembrance.
            </p>
          </div>

          {/* Quick Streak Badge */}
          <div className="flex items-center bg-[#0B1320]/50 backdrop-blur-md rounded-2xl p-3 border border-[#6E8FB5]/30 self-start md:self-auto">
            <div className="w-10 h-10 rounded-xl bg-[#6E8FB5]/20 flex items-center justify-center text-[#C7CEDB] mr-3">
              <Flame className="w-6 h-6 fill-[#C7CEDB] animate-pulse" />
            </div>
            <div>
              <div className="text-xl font-bold text-[#F7F9FC]">{userStats.streakDays} Days</div>
              <div className="text-xs text-[#C7CEDB]/75 font-medium">Reading Streak</div>
            </div>
          </div>
        </div>
      </div>

      {/* Prayer Countdown Card */}
      <div>
        {/* Next Prayer Countdown Card */}
        <Link
          to="/prayer"
          onClick={() => setActiveTab('prayer')}
          className="group block relative overflow-hidden rounded-2xl bg-white dark:bg-[#132035] p-5 border border-[#C7CEDB]/40 dark:border-[#1F3A5F]/60 shadow-sm hover:shadow-md transition-all cursor-pointer"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-[#6E8FB5]/15 dark:bg-[#1F3A5F] flex items-center justify-center text-[#1F3A5F] dark:text-[#C7CEDB]">
                <Compass className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#1F3A5F] dark:text-[#C7CEDB]">
                Next Prayer
              </span>
            </div>
            <span className="text-xs text-[#6E8FB5] dark:text-[#C7CEDB] font-semibold flex items-center">
              London <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>

          <div className="flex items-baseline justify-between">
            <div>
              <h3 className="text-2xl font-black text-[#1F3A5F] dark:text-[#F7F9FC]">
                {nextPrayerInfo.name}
              </h3>
              <p className="text-xs text-[#6E8FB5] dark:text-[#C7CEDB]/80 font-medium mt-0.5">
                In {nextPrayerInfo.timeLeft}
              </p>
            </div>
            <div className="text-right">
              <span className="text-lg font-bold font-mono text-[#1F3A5F] dark:text-[#F7F9FC]">
                3:50 PM
              </span>
              <div className="text-[11px] text-[#6E8FB5] dark:text-[#C7CEDB]">Qibla: 118.9° E</div>
            </div>
          </div>
        </Link>
      </div>

      {/* Noorani Qaida & Tajweed Quick Access Banner */}
      <Link
        to="/noorani-qaida"
        onClick={() => setActiveTab('learn')}
        className="group block relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-950 p-6 text-white shadow-lg hover:shadow-xl transition-all cursor-pointer border border-emerald-500/20 space-y-3"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-400 text-emerald-950 flex items-center justify-center font-serif text-2xl font-black shadow-md border border-amber-300">
              ن
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="text-lg font-extrabold text-emerald-50 group-hover:text-amber-300 transition-colors">
                  Interactive Noorani Qaida
                </h3>
                <span className="px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 font-bold text-[10px] border border-amber-400/30 uppercase tracking-wider">
                  15 Chapters • Audio & Makharij
                </span>
              </div>
              <p className="text-xs text-emerald-200/80 mt-0.5">
                Master Arabic letters, Makharij articulation points, short vowels & Tajweed with AI audio.
              </p>
            </div>
          </div>

          <div className="w-10 h-10 rounded-full bg-amber-400 text-emerald-950 flex items-center justify-center font-bold shadow group-hover:scale-110 group-hover:bg-amber-300 transition-all shrink-0 hidden sm:flex">
            <GraduationCap className="w-5 h-5" />
          </div>
        </div>
      </Link>

      {/* Daily Verse of the Day */}
      <div className="rounded-3xl bg-white dark:bg-[#132035] p-6 border border-[#C7CEDB]/40 dark:border-[#1F3A5F]/60 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#6E8FB5]"></span>
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#1F3A5F] dark:text-[#F7F9FC]">
              Verse of the Day
            </h3>
            <span className="text-xs text-[#6E8FB5] dark:text-[#C7CEDB]/70 font-medium">
              • {DAILY_VERSE.surahName} ({DAILY_VERSE.surahNumber}:{DAILY_VERSE.numberInSurah})
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setShowUrdu(!showUrdu)}
              className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-[#6E8FB5]/15 dark:bg-[#1F3A5F] text-[#1F3A5F] dark:text-[#F7F9FC] hover:bg-[#6E8FB5]/25 transition-colors"
            >
              {showUrdu ? 'EN' : 'UR'}
            </button>
            <button
              onClick={handleToggleDailyAudio}
              className={`p-2 rounded-full transition-colors ${
                isDailyVersePlaying
                  ? 'bg-[#1F3A5F] text-white'
                  : 'bg-[#6E8FB5]/15 dark:bg-[#1F3A5F] text-[#1F3A5F] dark:text-[#C7CEDB] hover:bg-[#6E8FB5]/25'
              }`}
              title="Play Recitation"
            >
              {isDailyVersePlaying ? <Pause className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Arabic Text */}
        <div className="text-right font-serif text-2xl md:text-3xl leading-loose text-[#1F3A5F] dark:text-[#C7CEDB] dir-rtl pt-2">
          {DAILY_VERSE.arabicText}
        </div>

        {/* Translation */}
        <p className="text-sm md:text-base text-[#1F3A5F]/90 dark:text-[#F7F9FC]/90 leading-relaxed italic">
          "{showUrdu ? DAILY_VERSE.translationUr : DAILY_VERSE.translationEn}"
        </p>

        {/* AI Key Reflection Badge */}
        <div className="rounded-xl bg-[#6E8FB5]/15 dark:bg-[#0B1320]/60 p-3 border border-[#6E8FB5]/30 text-xs text-[#1F3A5F] dark:text-[#C7CEDB] flex items-start space-x-2">
          <Sparkles className="w-4 h-4 text-[#6E8FB5] shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-[#1F3A5F] dark:text-[#F7F9FC]">AI Quran Insight:</span>{' '}
            {DAILY_VERSE.tafsirShort}
          </div>
        </div>
      </div>

      {/* Hadith & Dua Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Daily Hadith */}
        <div className="rounded-2xl bg-white dark:bg-[#132035] p-5 border border-[#C7CEDB]/40 dark:border-[#1F3A5F]/60 shadow-sm space-y-3 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 font-bold text-[10px] border border-emerald-500/30">
                  Today's Hadith
                </span>
                <span className="text-[10px] text-[#6E8FB5] dark:text-[#C7CEDB]/70 font-semibold">
                  • {dailyHadith.topic}
                </span>
              </div>
              <button
                onClick={() => setHadithOffset((prev) => prev + 1)}
                className="p-1 rounded-lg bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 transition-colors flex items-center space-x-1 text-[10px] font-bold"
                title="Explore Next Hadith"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Next ({dailyHadith.currentIndex}/{dailyHadith.totalCount})</span>
              </button>
            </div>

            <p className="text-right font-serif text-lg leading-relaxed text-[#1F3A5F] dark:text-[#F7F9FC]">
              {dailyHadith.arabic}
            </p>

            <p className="text-xs text-[#1F3A5F]/90 dark:text-[#C7CEDB] italic leading-relaxed">
              "{showUrdu ? dailyHadith.translationUr : dailyHadith.text}"
            </p>
          </div>

          <div className="pt-2 border-t border-[#C7CEDB]/30 dark:border-[#1F3A5F]/40 flex items-center justify-between text-[11px] text-[#6E8FB5] dark:text-[#C7CEDB]/80 font-medium">
            <span>{dailyHadith.narrator}</span>
            <span className="font-semibold text-emerald-800 dark:text-emerald-300">{dailyHadith.source}</span>
          </div>
        </div>

        {/* Daily Dua */}
        <div className="rounded-2xl bg-white dark:bg-[#132035] p-5 border border-[#C7CEDB]/40 dark:border-[#1F3A5F]/60 shadow-sm space-y-3 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-900 dark:text-amber-300 font-bold text-[10px] border border-amber-500/30">
                  Daily Supplication
                </span>
                <span className="text-[10px] text-[#6E8FB5] dark:text-[#C7CEDB]/70 font-semibold">
                  • {dailyDua.category}
                </span>
              </div>
              <button
                onClick={() => setDuaOffset((prev) => prev + 1)}
                className="p-1 rounded-lg bg-amber-50 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 hover:bg-amber-100 transition-colors flex items-center space-x-1 text-[10px] font-bold"
                title="Explore Next Dua"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Next ({dailyDua.currentIndex}/{dailyDua.totalCount})</span>
              </button>
            </div>

            <div className="text-xs font-bold text-emerald-900 dark:text-emerald-300">
              {dailyDua.title}
            </div>

            <p className="text-right font-serif text-xl font-bold leading-relaxed text-[#1F3A5F] dark:text-[#F7F9FC]">
              {dailyDua.arabic}
            </p>

            <p className="text-xs font-semibold text-[#6E8FB5] dark:text-[#C7CEDB]">
              {dailyDua.transliteration}
            </p>

            <p className="text-xs text-[#1F3A5F]/90 dark:text-[#C7CEDB] italic leading-relaxed">
              "{showUrdu ? dailyDua.translationUr : dailyDua.translation}"
            </p>
          </div>

          <div className="pt-2 border-t border-[#C7CEDB]/30 dark:border-[#1F3A5F]/40 flex items-center justify-between text-[11px] text-[#6E8FB5] dark:text-[#C7CEDB]/80 font-medium">
            <span>Daily Auto-Rotated Supplication</span>
            <span className="font-semibold text-amber-800 dark:text-amber-300">{dailyDua.reference}</span>
          </div>
        </div>
      </div>

      {/* AI Learning Tip of the Day */}
      <div className="rounded-2xl bg-gradient-to-r from-[#1F3A5F] via-[#162A45] to-[#0F1C2E] text-white p-5 shadow-md relative overflow-hidden">
        <GeometricPattern opacity={0.15} />
        <div className="relative z-10 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-[#C7CEDB]" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#C7CEDB]">
                AI Learning Tip
              </h3>
            </div>
            <button
              onClick={handleRefreshTip}
              disabled={loadingTip}
              className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              title="Get another tip"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loadingTip ? 'animate-spin' : ''}`} />
            </button>
          </div>

          <p className="text-sm leading-relaxed text-[#F7F9FC] font-medium">
            {learningTip}
          </p>
          <div className="text-[11px] text-[#C7CEDB]/75 italic">
            Powered by NoorVerse AI Tutor • Personalize in Settings
          </div>
        </div>
      </div>

      {/* Quick Actions Grid */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold uppercase tracking-wider text-[#1F3A5F] dark:text-[#C7CEDB]">
          Quick Actions
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <Link
            to="/quran"
            onClick={() => setActiveTab('quran')}
            className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white dark:bg-[#132035] border border-[#C7CEDB]/40 dark:border-[#1F3A5F]/60 shadow-sm hover:border-[#6E8FB5] hover:shadow transition-all group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-[#6E8FB5]/15 dark:bg-[#1F3A5F] text-[#1F3A5F] dark:text-[#C7CEDB] flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <BookOpen className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-[#1F3A5F] dark:text-[#F7F9FC]">Surah Catalog</span>
            <span className="text-[10px] text-[#6E8FB5] dark:text-[#C7CEDB]/80 mt-0.5">114 Surahs</span>
          </Link>

          <Link
            to="/noorani-qaida"
            onClick={() => setActiveTab('learn')}
            className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white dark:bg-[#132035] border border-[#C7CEDB]/40 dark:border-[#1F3A5F]/60 shadow-sm hover:border-[#6E8FB5] hover:shadow transition-all group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-[#6E8FB5]/15 dark:bg-[#1F3A5F] text-[#1F3A5F] dark:text-[#C7CEDB] flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <Target className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-[#1F3A5F] dark:text-[#F7F9FC]">Tajweed & Qaida</span>
            <span className="text-[10px] text-[#6E8FB5] dark:text-[#C7CEDB]/80 mt-0.5">Interactive</span>
          </Link>

          <Link
            to="/dhikr"
            onClick={() => setActiveTab('dhikr')}
            className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white dark:bg-[#132035] border border-[#C7CEDB]/40 dark:border-[#1F3A5F]/60 shadow-sm hover:border-[#6E8FB5] hover:shadow transition-all group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-[#6E8FB5]/15 dark:bg-[#1F3A5F] text-[#1F3A5F] dark:text-[#C7CEDB] flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <Compass className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-[#1F3A5F] dark:text-[#F7F9FC]">Digital Tasbeeh</span>
            <span className="text-[10px] text-[#6E8FB5] dark:text-[#C7CEDB]/80 mt-0.5">Dhikr Counter</span>
          </Link>

          <Link
            to="/ai-quran"
            onClick={() => setActiveTab('ai')}
            className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white dark:bg-[#132035] border border-[#C7CEDB]/40 dark:border-[#1F3A5F]/60 shadow-sm hover:border-[#6E8FB5] hover:shadow transition-all group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-[#6E8FB5]/15 dark:bg-[#1F3A5F] text-[#1F3A5F] dark:text-[#C7CEDB] flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-[#1F3A5F] dark:text-[#F7F9FC]">AI Quizzes</span>
            <span className="text-[10px] text-[#6E8FB5] dark:text-[#C7CEDB]/80 mt-0.5">Test Knowledge</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
