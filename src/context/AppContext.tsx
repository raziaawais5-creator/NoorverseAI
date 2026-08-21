import React, { createContext, useContext, useEffect, useState } from 'react';
import { Bookmark, Note, TabType, UserProfile, UserStats } from '../types';
import { ALL_SURAHS_LIST, RECITERS, getVerseAudioUrl } from '../data/quranData';
import { PricingModal } from '../components/common/PricingModal';
import { AuthModal } from '../components/auth/AuthModal';

export interface AudioState {
  isPlaying: boolean;
  surahNumber: number | null;
  ayahNumber: number | null;
  reciterId: string;
  reciterSubfolder?: string;
  reciterName?: string;
  audioUrl: string | null;
  autoPlayNext?: boolean;
}

interface AppContextType {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;

  // Selected Surah for Reader
  activeSurahNumber: number;
  setActiveSurahNumber: (num: number) => void;
  activeAyahNumber: number | null;
  setActiveAyahNumber: (num: number | null) => void;

  // User Profile & Authentication
  user: UserProfile | null;
  loginWithGoogle: (data?: { name?: string; email?: string; avatarUrl?: string }) => void;
  loginWithEmail: (email: string, name?: string) => void;
  signUpWithEmail: (email: string, password: string, name: string) => void;
  logout: () => void;
  isAuthModalOpen: boolean;
  setIsAuthModalOpen: (open: boolean) => void;
  openAuthModal: () => void;

  // Bookmarks & Notes
  bookmarks: Bookmark[];
  addBookmark: (bookmark: Omit<Bookmark, 'id' | 'createdAt'>) => void;
  removeBookmark: (id: string) => void;
  isBookmarked: (surahNum: number, ayahNum: number) => boolean;

  notes: Note[];
  saveNote: (surahNum: number, ayahNum: number, text: string) => void;
  getNote: (surahNum: number, ayahNum: number) => string | undefined;

  // User Statistics & Progress
  userStats: UserStats;
  logReadingTime: (minutes: number) => void;
  togglePrayerLog: (prayerName: string) => void;
  unlockBadge: (badgeId: string) => void;

  // Audio Player
  audioState: AudioState;
  playAudioVerse: (surahNum: number, ayahNum: number, reciterSubfolder?: string, reciterId?: string) => void;
  playNextVerse: () => void;
  playPreviousVerse: () => void;
  pauseAudioVerse: () => void;
  resumeAudioVerse: () => void;
  stopAudioVerse: () => void;

  // Premium / Paid Plan State
  isPremium: boolean;
  setIsPremium: (val: boolean) => void;
  userCurrency: 'PKR' | 'USD';
  setUserCurrency: (curr: 'PKR' | 'USD') => void;
  isUpgradeModalOpen: boolean;
  setIsUpgradeModalOpen: (open: boolean) => void;
  openUpgradeModal: (featureTitle?: string) => void;
  upgradeModalFeatureTitle?: string;

  // Search filter query
  searchQuery: string;
  setSearchQuery: (q: string) => void;
}

const DEFAULT_STATS: UserStats = {
  streakDays: 7,
  lastReadDate: new Date().toISOString().split('T')[0],
  totalReadingMinutes: 142,
  versesReadCount: 384,
  surahsCompleted: 5,
  hifzGoalVerses: 50,
  hifzMemorizedCount: 28,
  prayersLoggedToday: { Fajr: true, Dhuhr: true, Asr: true, Maghrib: false, Isha: false },
  unlockedBadges: ['first_step', '7_day_streak', 'night_owl', 'tajweed_novice'],
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [activeSurahNumber, setActiveSurahNumber] = useState<number>(1);
  const [activeAyahNumber, setActiveAyahNumber] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // User Profile & Authentication State
  const [user, setUser] = useState<UserProfile | null>(() => {
    const saved = localStorage.getItem('noorverse_user');
    return saved ? JSON.parse(saved) : null;
  });

  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);

  const loginWithGoogle = (data?: { name?: string; email?: string; avatarUrl?: string }) => {
    const googleUser: UserProfile = {
      id: `usr-google-${Date.now()}`,
      name: data?.name || 'Reciter',
      email: data?.email || 'user@noorverse.com',
      avatarUrl: data?.avatarUrl || undefined,
      authProvider: 'google',
      createdAt: new Date().toISOString(),
    };
    setUser(googleUser);
    localStorage.setItem('noorverse_user', JSON.stringify(googleUser));
  };

  const loginWithEmail = (email: string, name?: string) => {
    const emailUser: UserProfile = {
      id: `usr-email-${Date.now()}`,
      name: name || email.split('@')[0],
      email: email,
      avatarUrl: undefined,
      authProvider: 'email',
      createdAt: new Date().toISOString(),
    };
    setUser(emailUser);
    localStorage.setItem('noorverse_user', JSON.stringify(emailUser));
  };

  const signUpWithEmail = (email: string, password: string, name: string) => {
    loginWithEmail(email, name);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('noorverse_user');
  };

  const openAuthModal = () => {
    setIsAuthModalOpen(true);
  };

  // Premium Subscription & Paid Plan State
  const [isPremium, setIsPremium] = useState<boolean>(() => {
    return localStorage.getItem('noorverse_is_premium') === 'true';
  });
  const [userCurrency, setUserCurrencyState] = useState<'PKR' | 'USD'>(() => {
    return (localStorage.getItem('noorverse_currency') as 'PKR' | 'USD') || 'PKR';
  });
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState<boolean>(false);
  const [upgradeModalFeatureTitle, setUpgradeModalFeatureTitle] = useState<string>('');

  const setUserCurrency = (curr: 'PKR' | 'USD') => {
    setUserCurrencyState(curr);
    localStorage.setItem('noorverse_currency', curr);
  };

  const setIsPremiumSave = (val: boolean) => {
    setIsPremium(val);
    localStorage.setItem('noorverse_is_premium', val.toString());
  };

  const openUpgradeModal = (title?: string) => {
    setUpgradeModalFeatureTitle(title || '');
    setIsUpgradeModalOpen(true);
  };

  const [bookmarks, setBookmarks] = useState<Bookmark[]>(() => {
    const saved = localStorage.getItem('noorverse_bookmarks');
    return saved ? JSON.parse(saved) : [
      {
        id: 'bm-1',
        surahNumber: 1,
        surahName: 'Al-Fatiha',
        ayahNumber: 5,
        arabicText: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ',
        createdAt: new Date().toISOString(),
        note: 'My favorite verse for daily reliance on Allah.',
      },
      {
        id: 'bm-2',
        surahNumber: 112,
        surahName: 'Al-Ikhlas',
        ayahNumber: 1,
        arabicText: 'قُلْ هُوَ اللَّهُ أَحَدٌ',
        createdAt: new Date().toISOString(),
      }
    ];
  });

  const [notes, setNotes] = useState<Note[]>(() => {
    const saved = localStorage.getItem('noorverse_notes');
    return saved ? JSON.parse(saved) : [];
  });

  const [userStats, setUserStats] = useState<UserStats>(() => {
    const saved = localStorage.getItem('noorverse_user_stats');
    return saved ? JSON.parse(saved) : DEFAULT_STATS;
  });

  const [audioState, setAudioState] = useState<AudioState>({
    isPlaying: false,
    surahNumber: null,
    ayahNumber: null,
    reciterId: 'mishary',
    audioUrl: null,
  });

  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    localStorage.setItem('noorverse_bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  useEffect(() => {
    localStorage.setItem('noorverse_notes', JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    localStorage.setItem('noorverse_user_stats', JSON.stringify(userStats));
  }, [userStats]);

  const addBookmark = (bm: Omit<Bookmark, 'id' | 'createdAt'>) => {
    const newBm: Bookmark = {
      ...bm,
      id: `bm-${Date.now()}`,
      createdAt: new Date().toISOString(),
    };
    setBookmarks((prev) => [newBm, ...prev]);
  };

  const removeBookmark = (id: string) => {
    setBookmarks((prev) => prev.filter((b) => b.id !== id));
  };

  const isBookmarked = (surahNum: number, ayahNum: number) => {
    return bookmarks.some((b) => b.surahNumber === surahNum && b.ayahNumber === ayahNum);
  };

  const saveNote = (surahNum: number, ayahNum: number, text: string) => {
    setNotes((prev) => {
      const existingIdx = prev.findIndex((n) => n.surahNumber === surahNum && n.ayahNumber === ayahNum);
      if (existingIdx >= 0) {
        const updated = [...prev];
        updated[existingIdx] = { ...updated[existingIdx], text, createdAt: new Date().toISOString() };
        return updated;
      } else {
        return [...prev, { id: `note-${Date.now()}`, surahNumber: surahNum, ayahNumber: ayahNum, text, createdAt: new Date().toISOString() }];
      }
    });
  };

  const getNote = (surahNum: number, ayahNum: number) => {
    return notes.find((n) => n.surahNumber === surahNum && n.ayahNumber === ayahNum)?.text;
  };

  const logReadingTime = (minutes: number) => {
    setUserStats((prev) => ({
      ...prev,
      totalReadingMinutes: prev.totalReadingMinutes + minutes,
      versesReadCount: prev.versesReadCount + 3,
    }));
  };

  const togglePrayerLog = (prayerName: string) => {
    setUserStats((prev) => ({
      ...prev,
      prayersLoggedToday: {
        ...prev.prayersLoggedToday,
        [prayerName]: !prev.prayersLoggedToday[prayerName],
      },
    }));
  };

  const unlockBadge = (badgeId: string) => {
    setUserStats((prev) => {
      if (prev.unlockedBadges.includes(badgeId)) return prev;
      return { ...prev, unlockedBadges: [...prev.unlockedBadges, badgeId] };
    });
  };

  // Audio methods
  const playAudioVerse = (
    surahNum: number,
    ayahNum: number,
    reciterSubfolder: string = 'Alafasy_128kbps',
    reciterId: string = 'mishary'
  ) => {
    if (audioElement) {
      audioElement.pause();
      audioElement.src = '';
    }

    const url = getVerseAudioUrl(reciterSubfolder, surahNum, ayahNum);
    const newAudio = new Audio(url);

    const reciterObj = RECITERS.find((r) => r.id === reciterId);
    const reciterName = reciterObj ? reciterObj.name : 'Mishary Rashid Alafasy';

    newAudio.onended = () => {
      const surahMeta = ALL_SURAHS_LIST.find((s) => s.number === surahNum);
      if (surahMeta) {
        let nextSurah = surahNum;
        let nextAyah = ayahNum + 1;

        if (nextAyah > surahMeta.versesCount) {
          if (surahNum < 114) {
            nextSurah = surahNum + 1;
            nextAyah = 1;
          } else {
            // Reached end of Quran
            setAudioState((prev) => ({ ...prev, isPlaying: false }));
            return;
          }
        }

        // Automatically start next verse
        playAudioVerse(nextSurah, nextAyah, reciterSubfolder, reciterId);
      } else {
        setAudioState((prev) => ({ ...prev, isPlaying: false }));
      }
    };

    newAudio.onerror = () => {
      console.warn("Audio playback notice: network or reciter stream fallback");
      setAudioState((prev) => ({ ...prev, isPlaying: false }));
    };

    newAudio.play().then(() => {
      setAudioState({
        isPlaying: true,
        surahNumber: surahNum,
        ayahNumber: ayahNum,
        reciterId,
        reciterSubfolder,
        reciterName,
        audioUrl: url,
        autoPlayNext: true,
      });
    }).catch((err) => {
      console.log("Audio play error:", err);
      setAudioState((prev) => ({ ...prev, isPlaying: false }));
    });

    setAudioElement(newAudio);
  };

  const playNextVerse = () => {
    if (audioState.surahNumber === null || audioState.ayahNumber === null) return;
    const surahNum = audioState.surahNumber;
    const ayahNum = audioState.ayahNumber;
    const surahMeta = ALL_SURAHS_LIST.find((s) => s.number === surahNum);
    if (!surahMeta) return;

    let nextSurah = surahNum;
    let nextAyah = ayahNum + 1;
    if (nextAyah > surahMeta.versesCount) {
      if (surahNum < 114) {
        nextSurah = surahNum + 1;
        nextAyah = 1;
      } else {
        return;
      }
    }
    playAudioVerse(
      nextSurah,
      nextAyah,
      audioState.reciterSubfolder || 'Alafasy_128kbps',
      audioState.reciterId || 'mishary'
    );
  };

  const playPreviousVerse = () => {
    if (audioState.surahNumber === null || audioState.ayahNumber === null) return;
    const surahNum = audioState.surahNumber;
    const ayahNum = audioState.ayahNumber;

    let prevSurah = surahNum;
    let prevAyah = ayahNum - 1;
    if (prevAyah < 1) {
      if (surahNum > 1) {
        prevSurah = surahNum - 1;
        const prevSurahMeta = ALL_SURAHS_LIST.find((s) => s.number === prevSurah);
        prevAyah = prevSurahMeta ? prevSurahMeta.versesCount : 1;
      } else {
        return;
      }
    }
    playAudioVerse(
      prevSurah,
      prevAyah,
      audioState.reciterSubfolder || 'Alafasy_128kbps',
      audioState.reciterId || 'mishary'
    );
  };

  const pauseAudioVerse = () => {
    if (audioElement) {
      audioElement.pause();
      setAudioState((prev) => ({ ...prev, isPlaying: false }));
    }
  };

  const resumeAudioVerse = () => {
    if (audioElement) {
      audioElement.play();
      setAudioState((prev) => ({ ...prev, isPlaying: true }));
    }
  };

  const stopAudioVerse = () => {
    if (audioElement) {
      audioElement.pause();
      audioElement.currentTime = 0;
    }
    setAudioState({
      isPlaying: false,
      surahNumber: null,
      ayahNumber: null,
      reciterId: 'mishary',
      audioUrl: null,
    });
  };

  return (
    <AppContext.Provider
      value={{
        activeTab,
        setActiveTab,
        activeSurahNumber,
        setActiveSurahNumber,
        activeAyahNumber,
        setActiveAyahNumber,
        bookmarks,
        addBookmark,
        removeBookmark,
        isBookmarked,
        notes,
        saveNote,
        getNote,
        userStats,
        logReadingTime,
        togglePrayerLog,
        unlockBadge,
        audioState,
        playAudioVerse,
        playNextVerse,
        playPreviousVerse,
        pauseAudioVerse,
        resumeAudioVerse,
        stopAudioVerse,
        searchQuery,
        setSearchQuery,
        user,
        loginWithGoogle,
        loginWithEmail,
        signUpWithEmail,
        logout,
        isAuthModalOpen,
        setIsAuthModalOpen,
        openAuthModal,
        isPremium,
        setIsPremium: setIsPremiumSave,
        userCurrency,
        setUserCurrency,
        isUpgradeModalOpen,
        setIsUpgradeModalOpen,
        openUpgradeModal,
        upgradeModalFeatureTitle,
      }}
    >
      {children}
      <PricingModal
        isOpen={isUpgradeModalOpen}
        onClose={() => setIsUpgradeModalOpen(false)}
        featureTitle={upgradeModalFeatureTitle}
      />
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
};
