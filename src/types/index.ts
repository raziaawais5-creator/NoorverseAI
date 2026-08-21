export type TabType = 'home' | 'quran' | 'learn' | 'ai' | 'prayer' | 'dhikr' | 'profile';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  authProvider: 'google' | 'email' | 'guest';
  createdAt: string;
}

export interface Surah {
  number: number;
  nameArabic: string;
  nameTransliterated: string;
  nameEnglish: string;
  revelationType: 'Meccan' | 'Medinan';
  versesCount: number;
  juzNumber: number;
  pageNumber: number;
  verses?: Verse[];
}

export interface WordMeaning {
  arabic: string;
  transliteration: string;
  english: string;
  root?: string;
  grammar?: string;
}

export interface Verse {
  number: number;
  numberInSurah: number;
  arabicText: string;
  translationEn: string;
  translationUr?: string;
  transliteration?: string;
  words?: WordMeaning[];
  tafsirShort?: string;
  juz: number;
  page: number;
  hizbQuarter?: number;
}

export interface Bookmark {
  id: string;
  surahNumber: number;
  surahName: string;
  ayahNumber: number;
  arabicText: string;
  createdAt: string;
  note?: string;
}

export interface Note {
  id: string;
  surahNumber: number;
  ayahNumber: number;
  text: string;
  createdAt: string;
}

export interface PrayerTime {
  name: string;
  arabicName: string;
  time: string; // "05:15 AM"
  timestamp: number; // unix timestamp for easy countdown calculation
  isPassed: boolean;
  isNext: boolean;
  iconName: string;
}

export interface DhikrItem {
  id: string;
  arabic: string;
  transliteration: string;
  translation: string;
  targetCount: number;
  currentCount: number;
  category: 'Morning' | 'Evening' | 'General' | 'Dua';
  virtue?: string;
}

export interface TajweedLesson {
  id: string;
  title: string;
  arabicTitle: string;
  description: string;
  rules: string[];
  examples: {
    arabic: string;
    transliteration: string;
    explanation: string;
  }[];
  audioSampleUrl?: string;
}

export interface NooraniAlphabet {
  id: number;
  letter: string;
  name: string;
  transliteration: string;
  makhraj: string; // Point of articulation
  forms: {
    isolated: string;
    initial: string;
    medial: string;
    final: string;
  };
}

export interface UserStats {
  streakDays: number;
  lastReadDate: string;
  totalReadingMinutes: number;
  versesReadCount: number;
  surahsCompleted: number;
  hifzGoalVerses: number;
  hifzMemorizedCount: number;
  prayersLoggedToday: { [key: string]: boolean };
  unlockedBadges: string[];
}

export interface ReaderSettings {
  arabicFontSize: number; // in px
  translationFontSize: number;
  showWordByWord: boolean;
  showTransliteration: boolean;
  selectedTranslation: 'sahih' | 'clearQuran' | 'yusufAli' | 'urdu';
  selectedReciter: string; // 'mishary' | 'sudais' | 'ghamdi' | 'shatri'
  scriptType: 'uthmani' | 'indopak';
  autoScroll: boolean;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface QuizData {
  quizTitle: string;
  questions: QuizQuestion[];
}
