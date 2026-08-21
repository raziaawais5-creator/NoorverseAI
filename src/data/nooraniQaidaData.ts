export interface QaidaItem {
  id: string;
  arabic: string;
  nameArabic?: string;
  transliteration: string;
  urduTitle?: string;
  makhrajOrNote?: string;
  audioText?: string;
  tajweedCategory?: string;
  ruleDetail?: string;
  audioUrl?: string; // Optional direct mp3 if available
}

export interface QaidaQuizQuestion {
  id: string;
  question: string;
  arabicPrompt?: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  audioTextToPlay?: string;
}

export interface QaidaChapter {
  id: number;
  title: string;
  shortTitle: string;
  arabicTitle: string;
  category: string;
  description: string;
  tajweedRuleSummary: string;
  items: QaidaItem[];
  quizQuestions?: QaidaQuizQuestion[];
}

export const NOORANI_QAIDA_CHAPTERS: QaidaChapter[] = [
  // 1. Alphabets (Huroof Mufradat)
  {
    id: 1,
    title: 'Lesson 1: Alphabets (Huroof Mufradat)',
    shortTitle: 'Alphabets',
    arabicTitle: 'الدرس الأول: الحروف المفردة',
    category: 'Foundations',
    description: 'Learn all 29 individual Arabic letters with precise anatomical points of articulation (Makharij) and authentic Arabic pronunciation.',
    tajweedRuleSummary: 'Focus on pronouncing each letter from its exact throat, tongue, lip, or nasal exit point without rushing.',
    items: [
      { id: '1-1', arabic: 'ا', nameArabic: 'أَلِفْ', transliteration: 'Alif', audioText: 'أَلِفْ', makhrajOrNote: 'Al-Jawf (الجَوْف) - Empty space of mouth and throat. Air flows freely.' },
      { id: '1-2', arabic: 'ب', nameArabic: 'بَاءْ', transliteration: 'Baa', audioText: 'بَاءْ', makhrajOrNote: 'Ash-Shafatayn (الشَّفَتَيْن) - Wet inner part of both lips pressing together lightly.' },
      { id: '1-3', arabic: 'ت', nameArabic: 'تَاءْ', transliteration: 'Taa', audioText: 'تَاءْ', makhrajOrNote: 'Tip of tongue touching roots of upper two front incisors with gentle breath (Hams).' },
      { id: '1-4', arabic: 'ث', nameArabic: 'ثَاءْ', transliteration: 'Thaa', audioText: 'ثَاءْ', makhrajOrNote: 'Tip of tongue touching biting edges of upper two front teeth. Soft whispered "th" (like thin).' },
      { id: '1-5', arabic: 'ج', nameArabic: 'جِيمْ', transliteration: 'Jeem', audioText: 'جِيمْ', makhrajOrNote: 'Middle of tongue pressing firmly against hard palate (roof of mouth).' },
      { id: '1-6', arabic: 'ح', nameArabic: 'حَاءْ', transliteration: 'Ḥaa', audioText: 'حَاءْ', makhrajOrNote: 'Awsat al-Halq (وَسَط الحَلْق) - Middle of throat. Pure, crisp, unconstricted breath.' },
      { id: '1-7', arabic: 'خ', nameArabic: 'خَاءْ', transliteration: 'Khaa', audioText: 'خَاءْ', makhrajOrNote: 'Adna al-Halq (أَدْنَى الحَلْق) - Upper throat nearest to mouth. Full-mouth heavy letter (Tafkheem).' },
      { id: '1-8', arabic: 'د', nameArabic: 'دَالْ', transliteration: 'Daal', audioText: 'دَالْ', makhrajOrNote: 'Tip of tongue touching roots of upper front teeth. Light letter with clear tone.' },
      { id: '1-9', arabic: 'ذ', nameArabic: 'ذَالْ', transliteration: 'Dhaal', audioText: 'ذَالْ', makhrajOrNote: 'Tip of tongue touching edges of upper front teeth. Soft voiced "th" (like this).' },
      { id: '1-10', arabic: 'ر', nameArabic: 'رَاءْ', transliteration: 'Raa', audioText: 'رَاءْ', makhrajOrNote: 'Tip of tongue touching gums behind upper front teeth. Heavy with Fatha/Damma, light with Kasra.' },
      { id: '1-11', arabic: 'ز', nameArabic: 'زَايْ', transliteration: 'Zaay', audioText: 'زَايْ', makhrajOrNote: 'Tip of tongue just behind lower teeth; sound whistles out with vibration (Safeer).' },
      { id: '1-12', arabic: 'س', nameArabic: 'سِينْ', transliteration: 'Seen', audioText: 'سِينْ', makhrajOrNote: 'Tip of tongue behind bottom front teeth with clear whistling and gentle airflow (Safeer).' },
      { id: '1-13', arabic: 'ش', nameArabic: 'شِينْ', transliteration: 'Sheen', audioText: 'شِينْ', makhrajOrNote: 'Middle of tongue raised towards roof of mouth with spreading of breath (Tafash-shi).' },
      { id: '1-14', arabic: 'ص', nameArabic: 'صَادْ', transliteration: 'Ṣaad', audioText: 'صَادْ', makhrajOrNote: 'Tip of tongue behind lower teeth, back of tongue elevated high. Full-mouth heavy whistling (Itbaaq).' },
      { id: '1-15', arabic: 'ض', nameArabic: 'ضَادْ', transliteration: 'Ḍaad', audioText: 'ضَادْ', makhrajOrNote: 'Side edge of tongue pressed firmly against upper back molars. Heavy unique Arabic letter (Istitalah).' },
      { id: '1-16', arabic: 'ط', nameArabic: 'طَاءْ', transliteration: 'Ṭaa', audioText: 'طَاءْ', makhrajOrNote: 'Tip of tongue touching roots of upper front teeth with maximum elevation (Strongest heavy letter).' },
      { id: '1-17', arabic: 'ظ', nameArabic: 'ظَاءْ', transliteration: 'Ẓaa', audioText: 'ظَاءْ', makhrajOrNote: 'Tip of tongue touching edges of upper front teeth with tongue elevated. Heavy voiced sound.' },
      { id: '1-18', arabic: 'ع', nameArabic: 'عَيْنْ', transliteration: '‘Ayn', audioText: 'عَيْنْ', makhrajOrNote: 'Awsat al-Halq (وَسَط الحَلْق) - Middle of throat. Deep, resonant guttural constriction without scratching.' },
      { id: '1-19', arabic: 'غ', nameArabic: 'غَيْنْ', transliteration: 'Ghayn', audioText: 'غَيْنْ', makhrajOrNote: 'Adna al-Halq (أَدْنَى الحَلْق) - Upper throat nearest to mouth. Heavy, flowing sound.' },
      { id: '1-20', arabic: 'ف', nameArabic: 'فَاءْ', transliteration: 'Faa', audioText: 'فَاءْ', makhrajOrNote: 'Wet inner portion of lower lip touching edges of upper two front incisors.' },
      { id: '1-21', arabic: 'ق', nameArabic: 'قَافْ', transliteration: 'Qaaf', audioText: 'قَافْ', makhrajOrNote: 'Deepest back root of tongue touching soft palate (Uvula). Heavy Qalqalah letter.' },
      { id: '1-22', arabic: 'ك', nameArabic: 'كَافْ', transliteration: 'Kaaf', audioText: 'كَافْ', makhrajOrNote: 'Root of tongue touching hard palate just forward of Qaaf. Light letter with soft breath release.' },
      { id: '1-23', arabic: 'ل', nameArabic: 'لَامْ', transliteration: 'Laam', audioText: 'لَامْ', makhrajOrNote: 'Lateral edge of tongue touching gums of upper front teeth. Light in all normal positions.' },
      { id: '1-24', arabic: 'م', nameArabic: 'مِيمْ', transliteration: 'Meem', audioText: 'مِيمْ', makhrajOrNote: 'Dry outer surfaces of both lips closing gently together, with natural nasal resonance (Ghunnah).' },
      { id: '1-25', arabic: 'ن', nameArabic: 'نُونْ', transliteration: 'Noon', audioText: 'نُونْ', makhrajOrNote: 'Tip of tongue touching gums of upper two front incisors with natural nasal resonance (Ghunnah).' },
      { id: '1-26', arabic: 'و', nameArabic: 'وَاوْ', transliteration: 'Waaw', audioText: 'وَاوْ', makhrajOrNote: 'Complete circular rounding of both lips without them touching.' },
      { id: '1-27', arabic: 'هـ', nameArabic: 'هَاءْ', transliteration: 'Haa', audioText: 'هَاءْ', makhrajOrNote: 'Aqsa al-Halq (أَقْصَى الحَلْق) - Deepest bottom of the throat near vocal cords. Light breath.' },
      { id: '1-28', arabic: 'ء', nameArabic: 'هَمْزَة', transliteration: 'Hamzah', audioText: 'هَمْزَة', makhrajOrNote: 'Aqsa al-Halq (أَقْصَى الحَلْق) - Deepest base of throat. Decisive, sharp glottal stop.' },
      { id: '1-29', arabic: 'ي', nameArabic: 'يَاءْ', transliteration: 'Yaa', audioText: 'يَاءْ', makhrajOrNote: 'Middle of tongue raised towards hard palate without touching.' },
    ],
    quizQuestions: [
      {
        id: 'q1-1',
        question: 'Which letter originates from the middle of the throat (Awsat al-Halq)?',
        options: ['ح (Ḥaa)', 'خ (Khaa)', 'ق (Qaaf)', 'ك (Kaaf)'],
        correctIndex: 0,
        explanation: 'Ḥaa (ح) and ‘Ayn (ع) originate directly from the middle of the throat.',
        audioTextToPlay: 'حَاءْ',
      },
      {
        id: 'q1-2',
        question: 'How many total single Arabic alphabets (Huroof Mufradat) exist in the Quran?',
        options: ['26', '28', '29', '32'],
        correctIndex: 2,
        explanation: 'There are 29 distinct Arabic letters when counting Hamzah (ء) and Alif (ا) individually.',
      },
      {
        id: 'q1-3',
        question: 'Which of the following is produced by rounding both lips into a circular shape?',
        options: ['ب (Baa)', 'م (Meem)', 'و (Waaw)', 'ف (Faa)'],
        correctIndex: 2,
        explanation: 'Waaw (و) is articulated by rounding both lips into a complete circle without touching.',
        audioTextToPlay: 'وَاوْ',
      },
      {
        id: 'q1-4',
        question: 'What is the point of articulation for the letter Ḍaad (ض)?',
        options: ['Tip of tongue touching front teeth', 'Side edge of tongue pressed against upper back molars', 'Middle of the throat', 'Both lips closing'],
        correctIndex: 1,
        explanation: 'Ḍaad (ض) is unique to Arabic and is produced by pressing the side edge of the tongue against the upper back molars.',
        audioTextToPlay: 'ضَادْ',
      },
    ],
  },

  // 2. Alphabets Shapes / Compound Letters (Huroof Murakkabat)
  {
    id: 2,
    title: 'Lesson 2: Alphabets Shapes (Huroof Murakkabat)',
    shortTitle: 'Letter Shapes',
    arabicTitle: 'الدرس الثاني: الحروف المركبة وأشكالها',
    category: 'Letter Forms',
    description: 'Master how Arabic letters join together in words, recognizing their isolated, initial (beginning), medial (middle), and final (end) shapes.',
    tajweedRuleSummary: 'Recognize letters by their distinct dots, base curves, and connection tails when joined into words.',
    items: [
      { id: '2-1', arabic: 'لا', transliteration: 'Laam-Alif', audioText: 'لَامْ أَلِفْ', makhrajOrNote: 'Essential ligature: Laam entwined with Alif.' },
      { id: '2-2', arabic: 'لأ', transliteration: 'Laam-Hamzah', audioText: 'لَامْ هَمْزَة', makhrajOrNote: 'Laam connected with Hamzah seated atop Alif.' },
      { id: '2-3', arabic: 'بـ', transliteration: 'Initial Baa (بـ)', audioText: 'بَاءْ', makhrajOrNote: 'Baa at the beginning of a word: one dot underneath the tooth.' },
      { id: '2-4', arabic: 'ـبـ', transliteration: 'Medial Baa (ـبـ)', audioText: 'بَاءْ', makhrajOrNote: 'Baa in the middle of a word: connected from both sides with one dot below.' },
      { id: '2-5', arabic: 'ـب', transliteration: 'Final Baa (ـب)', audioText: 'بَاءْ', makhrajOrNote: 'Baa at the end of a word: full cup shape with one dot underneath.' },
      { id: '2-6', arabic: 'با', transliteration: 'Baa-Alif', audioText: 'بَاءْ أَلِفْ', makhrajOrNote: 'Initial Baa connected straight up into Alif.' },
      { id: '2-7', arabic: 'تا', transliteration: 'Taa-Alif', audioText: 'تَاءْ أَلِفْ', makhrajOrNote: 'Initial Taa (two dots above) connected to Alif.' },
      { id: '2-8', arabic: 'ثا', transliteration: 'Thaa-Alif', audioText: 'ثَاءْ أَلِفْ', makhrajOrNote: 'Initial Thaa (three dots above) connected to Alif.' },
      { id: '2-9', arabic: 'نوا', transliteration: 'Noon-Waaw-Alif', audioText: 'نُونْ وَاوْ أَلِفْ', makhrajOrNote: 'Three-letter joint compound with distinct dot positions.' },
      { id: '2-10', arabic: 'بج', transliteration: 'Baa-Jeem', audioText: 'بَاءْ جِيمْ', makhrajOrNote: 'Baa initial dropping down into a Jeem.' },
      { id: '2-11', arabic: 'تح', transliteration: 'Taa-Ḥaa', audioText: 'تَاءْ حَاءْ', makhrajOrNote: 'Taa connected into middle-throat Ḥaa.' },
      { id: '2-12', arabic: 'ثخ', transliteration: 'Thaa-Khaa', audioText: 'ثَاءْ خَاءْ', makhrajOrNote: 'Thaa connected into heavy upper-throat Khaa.' },
      { id: '2-13', arabic: 'يس', transliteration: 'Yaa-Seen', audioText: 'يَاءْ سِينْ', makhrajOrNote: 'Yaa (two dots below) connected into three-toothed Seen.' },
      { id: '2-14', arabic: 'صدم', transliteration: 'Ṣaad-Daal-Meem', audioText: 'صَادْ دَالْ مِيمْ', makhrajOrNote: 'Heavy Ṣaad loop connected to Daal and Meem circle.' },
      { id: '2-15', arabic: 'الحمد', transliteration: 'Al-Hamdu', audioText: 'أَلْحَمْدُ', makhrajOrNote: 'Complete Quranic word form from Surah Al-Fatiha.' },
    ],
    quizQuestions: [
      {
        id: 'q2-1',
        question: 'How do you distinguish between initial Baa (بـ), Taa (تـ), and Thaa (ثـ)?',
        options: ['By their height', 'By the number and placement of dots (1 below, 2 above, 3 above)', 'By their vowels', 'They have identical sounds'],
        correctIndex: 1,
        explanation: 'Baa has 1 dot below, Taa has 2 dots above, and Thaa has 3 dots above the initial tooth.',
      },
      {
        id: 'q2-2',
        question: 'In the compound letter (لا), which two letters are joined?',
        options: ['Baa and Alif', 'Laam and Alif', 'Kaaf and Alif', 'Noon and Alif'],
        correctIndex: 1,
        explanation: 'لا is the special compound ligature of Laam (ل) and Alif (ا).',
        audioTextToPlay: 'لَامْ أَلِفْ',
      },
    ],
  },

  // 3. Harkat (Short Vowels: Zabar, Zer, Pesh)
  {
    id: 3,
    title: 'Lesson 3: Harkat (Short Vowels: Fatha, Kasra, Damma)',
    shortTitle: 'Harkat (Short Vowels)',
    arabicTitle: 'الدرس الثالث: الحركات (زبر، زیر، پیش)',
    category: 'Vowels',
    description: 'Master the three fundamental short vowels: Fatha (Zabar َ ), Kasra (Zer ِ ), and Damma (Pesh ُ ). Pronounce crisply for exactly 1 count without stretching.',
    tajweedRuleSummary: 'Harkat must be pronounced swiftly and crisply for exactly 1 Harakah (approx. 1 second / 1 finger tap) without elongation.',
    items: [
      { id: '3-1', arabic: 'أَ', transliteration: 'A (Fatha / Zabar)', audioText: 'أَ', makhrajOrNote: 'Short crisp A vowel sound (1 count).' },
      { id: '3-2', arabic: 'إِ', transliteration: 'I (Kasra / Zer)', audioText: 'إِ', makhrajOrNote: 'Short crisp I vowel sound (1 count) lowering the jaw.' },
      { id: '3-3', arabic: 'أُ', transliteration: 'U (Damma / Pesh)', audioText: 'أُ', makhrajOrNote: 'Short crisp U vowel sound (1 count) rounding the lips.' },
      { id: '3-4', arabic: 'بَ', transliteration: 'Ba', audioText: 'بَ', makhrajOrNote: 'Fatha on Baa - open jaw cleanly.' },
      { id: '3-5', arabic: 'بِ', transliteration: 'Bi', audioText: 'بِ', makhrajOrNote: 'Kasra under Baa - lower bottom lip.' },
      { id: '3-6', arabic: 'بُ', transliteration: 'Bu', audioText: 'بُ', makhrajOrNote: 'Damma on Baa - round lips forward.' },
      { id: '3-7', arabic: 'تَ', transliteration: 'Ta', audioText: 'تَ', makhrajOrNote: 'Fatha on Taa.' },
      { id: '3-8', arabic: 'تِ', transliteration: 'Ti', audioText: 'تِ', makhrajOrNote: 'Kasra under Taa.' },
      { id: '3-9', arabic: 'تُ', transliteration: 'Tu', audioText: 'تُ', makhrajOrNote: 'Damma on Taa.' },
      { id: '3-10', arabic: 'جَ', transliteration: 'Ja', audioText: 'جَ', makhrajOrNote: 'Fatha on Jeem.' },
      { id: '3-11', arabic: 'حَ', transliteration: 'Ḥa', audioText: 'حَ', makhrajOrNote: 'Fatha on sharp throat Ḥaa.' },
      { id: '3-12', arabic: 'خَ', transliteration: 'Kha (Heavy)', audioText: 'خَ', makhrajOrNote: 'Fatha on heavy full-mouth Khaa.' },
      { id: '3-13', arabic: 'دَ', transliteration: 'Da', audioText: 'دَ', makhrajOrNote: 'Fatha on light Daal.' },
      { id: '3-14', arabic: 'رَ', transliteration: 'Ra (Heavy)', audioText: 'رَ', makhrajOrNote: 'Fatha on Raa makes it heavy (Tafkheem).' },
      { id: '3-15', arabic: 'سَ', transliteration: 'Sa', audioText: 'سَ', makhrajOrNote: 'Fatha on light Seen.' },
      { id: '3-16', arabic: 'صَ', transliteration: 'Ṣa (Heavy)', audioText: 'صَ', makhrajOrNote: 'Fatha on heavy Ṣaad.' },
      { id: '3-17', arabic: 'طَ', transliteration: 'Ṭa (Heavy)', audioText: 'طَ', makhrajOrNote: 'Fatha on strongest heavy letter Ṭaa.' },
      { id: '3-18', arabic: 'عَ', transliteration: '‘A', audioText: 'عَ', makhrajOrNote: 'Fatha on middle-throat ‘Ayn.' },
      { id: '3-19', arabic: 'قَ', transliteration: 'Qa (Heavy)', audioText: 'قَ', makhrajOrNote: 'Fatha on deep uvular Qaaf.' },
      { id: '3-20', arabic: 'مَ', transliteration: 'Ma', audioText: 'مَ', makhrajOrNote: 'Fatha on light Meem.' },
    ],
    quizQuestions: [
      {
        id: 'q3-1',
        question: 'How long should a single Harakah (Fatha, Kasra, or Damma) be stretched?',
        options: ['1 Count (Crisp & Short)', '2 Counts', '4 Counts', '6 Counts'],
        correctIndex: 0,
        explanation: 'Harkat are short vowels and must not be stretched beyond 1 single count.',
      },
      {
        id: 'q3-2',
        question: 'What happens to the letter Raa (ر) when it carries a Fatha (Zabar َ ) or Damma (Pesh ُ )?',
        options: ['It becomes light (Tarqeeq)', 'It becomes heavy (Tafkheem)', 'It becomes silent', 'It bounces (Qalqalah)'],
        correctIndex: 1,
        explanation: 'Raa with Fatha (رَ) or Damma (رُ) is pronounced heavy with a full mouth.',
        audioTextToPlay: 'رَ',
      },
    ],
  },

  // 4. Long Voices (Standing Harakat / Khari Zabar, Khari Zer, Ulta Pesh)
  {
    id: 4,
    title: 'Lesson 4: Long Voices (Standing Harakat)',
    shortTitle: 'Long Voices',
    arabicTitle: 'الدرس الرابع: الحركات القائمة (کھڑی زبر، کھڑی زیر، الٹا پیش)',
    category: 'Vowels',
    description: 'Standing Fatha (Khari Zabar ٰ ), Standing Kasra (Khari Zer ٖ ), and Inverted Damma (Ulta Pesh ٗ ) elongate the sound for exactly 2 counts (equal to Alif, Yaa, and Waw Madd).',
    tajweedRuleSummary: 'Standing Harakat take the place of letters of Madd and must be sustained for 2 full counts.',
    items: [
      { id: '4-1', arabic: 'أٰ', transliteration: 'Aa (Standing Fatha / Khari Zabar)', audioText: 'آ', makhrajOrNote: 'Elongate for 2 counts (equal to Alif Madd).' },
      { id: '4-2', arabic: 'إٖ', transliteration: 'Ee (Standing Kasra / Khari Zer)', audioText: 'إِي', makhrajOrNote: 'Elongate for 2 counts (equal to Yaa Madd).' },
      { id: '4-3', arabic: 'أٗ', transliteration: 'Oo (Inverted Damma / Ulta Pesh)', audioText: 'أُو', makhrajOrNote: 'Elongate for 2 counts (equal to Waw Madd).' },
      { id: '4-4', arabic: 'بٰ', transliteration: 'Baa (2 counts)', audioText: 'بَا', makhrajOrNote: 'Baa with Standing Fatha held for 2 counts.' },
      { id: '4-5', arabic: 'بٖ', transliteration: 'Bee (2 counts)', audioText: 'بِي', makhrajOrNote: 'Baa with Standing Kasra held for 2 counts.' },
      { id: '4-6', arabic: 'بٗ', transliteration: 'Boo (2 counts)', audioText: 'بُو', makhrajOrNote: 'Baa with Inverted Damma held for 2 counts.' },
      { id: '4-7', arabic: 'تٰ', transliteration: 'Taa (2 counts)', audioText: 'تَا', makhrajOrNote: 'Taa with Standing Fatha.' },
      { id: '4-8', arabic: 'تٖ', transliteration: 'Tee (2 counts)', audioText: 'تِي', makhrajOrNote: 'Taa with Standing Kasra.' },
      { id: '4-9', arabic: 'تٗ', transliteration: 'Too (2 counts)', audioText: 'تُو', makhrajOrNote: 'Taa with Inverted Damma.' },
      { id: '4-10', arabic: 'حٰ', transliteration: 'Ḥaa (2 counts)', audioText: 'حَا', makhrajOrNote: 'Throat Ḥaa with Standing Fatha.' },
      { id: '4-11', arabic: 'رٰ', transliteration: 'Raa (2 counts - Heavy)', audioText: 'رَا', makhrajOrNote: 'Heavy Raa elongated for 2 counts.' },
      { id: '4-12', arabic: 'هٖ', transliteration: 'Hee (Ha-e-Kinayah 2 counts)', audioText: 'هِي', makhrajOrNote: 'Standing Kasra on pronoun Haa (Silah Sughra).' },
      { id: '4-13', arabic: 'لٰهَ', transliteration: 'Laaha', audioText: 'لَاهَ', makhrajOrNote: 'Standing Fatha on Laam followed by Haa.' },
      { id: '4-14', arabic: 'مٰلِكِ', transliteration: 'Maaliki', audioText: 'مَالِكِ', makhrajOrNote: 'Standing Fatha on Meem (from Surah Al-Fatiha:1:4).' },
    ],
    quizQuestions: [
      {
        id: 'q4-1',
        question: 'What is the duration of a Standing Fatha (Khari Zabar ٰ )?',
        options: ['1 Count', '2 Counts (Alif Madd duration)', '4 Counts', '6 Counts'],
        correctIndex: 1,
        explanation: 'A standing Fatha equals a natural Alif Madd and is sustained for 2 full counts.',
        audioTextToPlay: 'بَا',
      },
      {
        id: 'q4-2',
        question: 'Which sign represents an Inverted Damma (Ulta Pesh)?',
        options: ['َ (Fatha)', 'ٖ (Khari Zer)', 'ٗ (Ulta Pesh)', 'ً (Tanween)'],
        correctIndex: 2,
        explanation: 'ٗ is the inverted Damma (Ulta Pesh) producing an elongated "Oo" sound for 2 counts.',
      },
    ],
  },

  // 5. Tanween (Double Vowels: Do Zabar, Do Zer, Do Pesh)
  {
    id: 5,
    title: 'Lesson 5: Tanween (Double Vowels: ً  ٍ  ٌ)',
    shortTitle: 'Tanween',
    arabicTitle: 'الدرس الخامس: التنوين (دو زبر، دو زیر، دو پیش)',
    category: 'Vowels & Nunation',
    description: 'Double vowels produce an unwritten Noon Sakinah sound (N) at the end of the letter: Fathatayn (-an), Kasratayn (-in), Dammatayn (-un).',
    tajweedRuleSummary: 'Tanween is an unwritten Noon Sakinah sound that subject to Izhar, Idgham, Iqlab, or Ikhfa rules depending on the letter that follows.',
    items: [
      { id: '5-1', arabic: 'أً', transliteration: 'An (Fathatayn / Do Zabar)', audioText: 'أَنْ', makhrajOrNote: 'Produces "-an" sound with unwritten Noon Sakinah.' },
      { id: '5-2', arabic: 'أٍ', transliteration: 'In (Kasratayn / Do Zer)', audioText: 'إِنْ', makhrajOrNote: 'Produces "-in" sound with unwritten Noon Sakinah.' },
      { id: '5-3', arabic: 'أٌ', transliteration: 'Un (Dammatayn / Do Pesh)', audioText: 'أُنْ', makhrajOrNote: 'Produces "-un" sound with unwritten Noon Sakinah.' },
      { id: '5-4', arabic: 'بً', transliteration: 'Ban', audioText: 'بَنْ', makhrajOrNote: 'Baa with Fathatayn.' },
      { id: '5-5', arabic: 'بٍ', transliteration: 'Bin', audioText: 'بِنْ', makhrajOrNote: 'Baa with Kasratayn.' },
      { id: '5-6', arabic: 'بٌ', transliteration: 'Bun', audioText: 'بُنْ', makhrajOrNote: 'Baa with Dammatayn.' },
      { id: '5-7', arabic: 'تً', transliteration: 'Tan', audioText: 'تَنْ', makhrajOrNote: 'Taa with Fathatayn.' },
      { id: '5-8', arabic: 'تٍ', transliteration: 'Tin', audioText: 'تِنْ', makhrajOrNote: 'Taa with Kasratayn.' },
      { id: '5-9', arabic: 'تٌ', transliteration: 'Tun', audioText: 'تُنْ', makhrajOrNote: 'Taa with Dammatayn.' },
      { id: '5-10', arabic: 'دً', transliteration: 'Dan', audioText: 'دَنْ', makhrajOrNote: 'Daal with Fathatayn.' },
      { id: '5-11', arabic: 'دٍ', transliteration: 'Din', audioText: 'دِنْ', makhrajOrNote: 'Daal with Kasratayn.' },
      { id: '5-12', arabic: 'دٌ', transliteration: 'Dun', audioText: 'دُنْ', makhrajOrNote: 'Daal with Dammatayn.' },
      { id: '5-13', arabic: 'رً', transliteration: 'Ran (Heavy)', audioText: 'رَنْ', makhrajOrNote: 'Heavy Raa with Fathatayn.' },
      { id: '5-14', arabic: 'رٍ', transliteration: 'Rin (Light)', audioText: 'رِنْ', makhrajOrNote: 'Light Raa with Kasratayn.' },
      { id: '5-15', arabic: 'كُفُوًا', transliteration: 'Kufuwan', audioText: 'كُفُوًا', makhrajOrNote: 'Tanween on Waaw from Surah Al-Ikhlas:112:4.' },
    ],
    quizQuestions: [
      {
        id: 'q5-1',
        question: 'What phonetic sound does Tanween add to the end of a letter?',
        options: ['A silent Haa', 'A hidden Noon Sakinah (-n sound)', 'A long Madd', 'A Qalqalah bounce'],
        correctIndex: 1,
        explanation: 'Tanween (ً  ٍ  ٌ) adds an unwritten Noon Sakinah sound (-an, -in, -un) to the word.',
      },
    ],
  },

  // 6. Sukoon & Jazm (سکون و جزم)
  {
    id: 6,
    title: 'Lesson 6: Sukoon & Jazm (سکون و جزم)',
    shortTitle: 'Sukoon & Jazm',
    arabicTitle: 'الدرس السادس: السكون والجزم',
    category: 'Stops & Qalqalah',
    description: 'A letter with Sukoon ( ْ ) has no active vowel and is locked to the previous letter. Apply clear Qalqalah (echo bounce) on (ق, ط, ب, ج, د).',
    tajweedRuleSummary: 'When stopping on a Sukoon, do not add phantom vowels. Apply Qalqalah bounce only on the 5 letters of Qutb Jad (قطب جد).',
    items: [
      { id: '6-1', arabic: 'أَبْ', transliteration: 'Ab (Qalqalah)', audioText: 'أَبْ', makhrajOrNote: 'Alif joined with Baa carrying Sukoon - clear bounce (Qalqalah).' },
      { id: '6-2', arabic: 'أَتْ', transliteration: 'At (Hams)', audioText: 'أَتْ', makhrajOrNote: 'Join Alif with Taa - release slight whisper of air (Hams).' },
      { id: '6-3', arabic: 'أَجْ', transliteration: 'Aj (Qalqalah)', audioText: 'أَجْ', makhrajOrNote: 'Qalqalah bouncing sound on Jeem.' },
      { id: '6-4', arabic: 'أَحْ', transliteration: 'Aḥ (Throat Haa)', audioText: 'أَحْ', makhrajOrNote: 'Smooth middle-throat Ḥaa stop with breath.' },
      { id: '6-5', arabic: 'أَخْ', transliteration: 'Akh (Heavy Khaa)', audioText: 'أَخْ', makhrajOrNote: 'Upper throat heavy Khaa stop.' },
      { id: '6-6', arabic: 'أَدْ', transliteration: 'Ad (Qalqalah)', audioText: 'أَدْ', makhrajOrNote: 'Qalqalah bouncing sound on Daal.' },
      { id: '6-7', arabic: 'أَطْ', transliteration: 'Aṭ (Strong Qalqalah)', audioText: 'أَطْ', makhrajOrNote: 'Strongest heavy Qalqalah bounce on Ṭaa.' },
      { id: '6-8', arabic: 'أَقْ', transliteration: 'Aq (Deep Qalqalah)', audioText: 'أَقْ', makhrajOrNote: 'Deep heavy Qalqalah bounce on Qaaf.' },
      { id: '6-9', arabic: 'أَمْ', transliteration: 'Am', audioText: 'أَمْ', makhrajOrNote: 'Clear Meem stop (Izhar Shafawi).' },
      { id: '6-10', arabic: 'أَنْ', transliteration: 'An', audioText: 'أَنْ', makhrajOrNote: 'Clear Noon stop.' },
      { id: '6-11', arabic: 'قُلْ', transliteration: 'Qul', audioText: 'قُلْ', makhrajOrNote: 'Deep Qaaf with Damma joined to Laam Sukoon.' },
      { id: '6-12', arabic: 'مَنْ', transliteration: 'Man', audioText: 'مَنْ', makhrajOrNote: 'Meem with Fatha joined to Noon Sukoon.' },
    ],
    quizQuestions: [
      {
        id: 'q6-1',
        question: 'Which group of 5 letters bounce with Qalqalah when carrying a Sukoon ( ْ )?',
        options: ['خ ص ض غ ط', 'ق ط ب ج د (قُطْبُ جَدٍّ)', 'ي ر م ل و ن', 'ء هـ ع ح غ خ'],
        correctIndex: 1,
        explanation: 'The 5 Qalqalah letters are combined in the mnemonic "Qutb Jad" (ق, ط, ب, ج, د).',
        audioTextToPlay: 'أَبْ',
      },
      {
        id: 'q6-2',
        question: 'What is the function of a Sukoon ( ْ ) over an Arabic letter?',
        options: ['It doubles the letter', 'It indicates absence of vowel and joins it to the preceding letter', 'It stretches the sound for 6 counts', 'It adds a nasal hum'],
        correctIndex: 1,
        explanation: 'A Sukoon signifies no active vowel, anchoring the letter to the one before it.',
      },
    ],
  },

  // 7. Shaddah / Tashdeed (تشدید)
  {
    id: 7,
    title: 'Lesson 7: Shaddah / Tashdeed (تشدید)',
    shortTitle: 'Shaddah',
    arabicTitle: 'الدرس السابع: الشدة والتَشْدِيد',
    category: 'Doubled Letters',
    description: 'A letter with Shaddah ( ّ ) is doubled: pronounced first with a firm Sukoon pause, then immediately released with its active vowel.',
    tajweedRuleSummary: 'Give doubled letters distinct emphasis (Nabr) without rushing through the first silent part.',
    items: [
      { id: '7-1', arabic: 'أَبَّ', transliteration: 'Abba', audioText: 'أَبَّ', makhrajOrNote: 'Double stress on Baa with Fatha.' },
      { id: '7-2', arabic: 'أَبِّ', transliteration: 'Abbi', audioText: 'أَبِّ', makhrajOrNote: 'Double stress on Baa with Kasra.' },
      { id: '7-3', arabic: 'أَبُّ', transliteration: 'Abbu', audioText: 'أَبُّ', makhrajOrNote: 'Double stress on Baa with Damma.' },
      { id: '7-4', arabic: 'إِنَّ', transliteration: 'Inna (Ghunnah)', audioText: 'إِنَّ', makhrajOrNote: 'Noon Mushaddadah - hold nasal Ghunnah for 2 beats.' },
      { id: '7-5', arabic: 'ثُمَّ', transliteration: 'Thumma (Ghunnah)', audioText: 'ثُمَّ', makhrajOrNote: 'Meem Mushaddadah - hold nasal Ghunnah for 2 beats.' },
      { id: '7-6', arabic: 'رَبَّنَا', transliteration: 'Rabbanaa', audioText: 'رَبَّنَا', makhrajOrNote: 'Shaddah on Baa followed by 2-count Alif Madd.' },
      { id: '7-7', arabic: 'حَقَّ', transliteration: 'Ḥaqqa', audioText: 'حَقَّ', makhrajOrNote: 'Double stress on deep heavy Qaaf.' },
      { id: '7-8', arabic: 'مَدَّ', transliteration: 'Madda', audioText: 'مَدَّ', makhrajOrNote: 'Double stress on Daal.' },
      { id: '7-9', arabic: 'قُلْ هُوَ اللَّهُ', transliteration: 'Qul Huwal-Laahu', audioText: 'قُلْ هُوَ اللَّهُ', makhrajOrNote: 'Shaddah on heavy Laam in Allah.' },
    ],
    quizQuestions: [
      {
        id: 'q7-1',
        question: 'How many components make up a letter with a Shaddah ( ّ )?',
        options: ['1 single fast letter', '2 letters: the first carries Sukoon and the second carries a vowel', '3 letters combined', 'A letter with an echo'],
        correctIndex: 1,
        explanation: 'A Shaddah represents two identical letters: the first has a Sukoon and the second has an active vowel.',
        audioTextToPlay: 'أَبَّ',
      },
    ],
  },

  // 8. Leen Letters (Huroof Leen: Waw Leen & Yaa Leen)
  {
    id: 8,
    title: 'Lesson 8: Leen Letters (Huroof Leen)',
    shortTitle: 'Leen Letters',
    arabicTitle: 'الدرس الثامن: حروف اللين (واو لين، یاء لين)',
    category: 'Soft Glides',
    description: 'When Waw (و) or Yaa (ي) carries a Sukoon and is preceded by a Fatha (Zabar َ ), it is pronounced smoothly and softly with an easy glide without jerking.',
    tajweedRuleSummary: 'Leen means softness. Pronounce effortlessly without excessive elongation unless stopping at the end of a verse (Madd Leen 2, 4, or 6 counts).',
    items: [
      { id: '8-1', arabic: 'أَوْ', transliteration: 'Aw', audioText: 'أَوْ', makhrajOrNote: 'Waw Leen: Fatha before Waw Sukoon - smooth soft glide.' },
      { id: '8-2', arabic: 'أَيْ', transliteration: 'Ay', audioText: 'أَيْ', makhrajOrNote: 'Yaa Leen: Fatha before Yaa Sukoon - smooth soft glide.' },
      { id: '8-3', arabic: 'بَوْ', transliteration: 'Baw', audioText: 'بَوْ', makhrajOrNote: 'Baa with Waw Leen.' },
      { id: '8-4', arabic: 'بَيْ', transliteration: 'Bay', audioText: 'بَيْ', makhrajOrNote: 'Baa with Yaa Leen.' },
      { id: '8-5', arabic: 'تَوْ', transliteration: 'Taw', audioText: 'تَوْ', makhrajOrNote: 'Taa with Waw Leen.' },
      { id: '8-6', arabic: 'تَيْ', transliteration: 'Tay', audioText: 'تَيْ', makhrajOrNote: 'Taa with Yaa Leen.' },
      { id: '8-7', arabic: 'خَوْفٍ', transliteration: 'Khawf (Surah Quraysh)', audioText: 'خَوْفٍ', makhrajOrNote: 'Waw Leen in Surah Quraysh.' },
      { id: '8-8', arabic: 'صَيْفِ', transliteration: 'Ṣayf (Surah Quraysh)', audioText: 'صَيْفِ', makhrajOrNote: 'Yaa Leen in Surah Quraysh.' },
      { id: '8-9', arabic: 'بَيْتِ', transliteration: 'Bayt', audioText: 'بَيْتِ', makhrajOrNote: 'Yaa Leen in Al-Bayt.' },
      { id: '8-10', arabic: 'يَوْمِ الدِّينِ', transliteration: 'Yawmid-Deen', audioText: 'يَوْمِ الدِّينِ', makhrajOrNote: 'Waw Leen in Yawm (Surah Al-Fatiha:1:4).' },
    ],
    quizQuestions: [
      {
        id: 'q8-1',
        question: 'What are the two Letters of Leen (حروف اللين)?',
        options: ['Alif and Laam', 'Waw Sukoon and Yaa Sukoon preceded by Fatha (Zabar)', 'Noon and Meem', 'Qaaf and Ṭaa'],
        correctIndex: 1,
        explanation: 'The Leen letters are Waw Sukoon (وْ) and Yaa Sukoon (يْ) preceded by a letter with Fatha.',
        audioTextToPlay: 'أَوْ',
      },
    ],
  },

  // 9. Madd (Elongations: Asli, Muttasil, Munfasil, Lazim)
  {
    id: 9,
    title: 'Lesson 9: Madd (Quranic Elongations)',
    shortTitle: 'Madd Rules',
    arabicTitle: 'الدرس التاسع: أحكام المدود',
    category: 'Elongation',
    description: 'Learn the principles of Quranic elongation: Madd Asli (2 counts), Madd Muttasil (Connected 4-5 counts), Madd Munfasil (Separated 4-5 counts), and Madd Lazim (Compulsory 6 counts).',
    tajweedRuleSummary: 'When a letter of Madd (ا, و, ي) meets a Hamzah in the same word (Muttasil 4-5 counts), across words (Munfasil 4-5 counts), or meets a Sukoon/Shaddah (Lazim 6 counts).',
    items: [
      { id: '9-1', arabic: 'قَالَ', transliteration: 'Qaala (Madd Asli 2 counts)', audioText: 'قَالَ', makhrajOrNote: 'Natural Madd (Asli) - elongate for exactly 2 counts.' },
      { id: '9-2', arabic: 'قِيلَ', transliteration: 'Qeela (Madd Asli 2 counts)', audioText: 'قِيلَ', makhrajOrNote: 'Yaa preceded by Kasra - 2 counts.' },
      { id: '9-3', arabic: 'يَقُولُ', transliteration: 'Yaqoolu (Madd Asli 2 counts)', audioText: 'يَقُولُ', makhrajOrNote: 'Waw preceded by Damma - 2 counts.' },
      { id: '9-4', arabic: 'جَآءَ', transliteration: 'Jaaa’a (Madd Muttasil 4-5 counts)', audioText: 'جَاءَ', makhrajOrNote: 'Connected Madd: Madd letter followed by Hamzah in the SAME word (4-5 counts).' },
      { id: '9-5', arabic: 'السَّمَآءِ', transliteration: 'As-Samaaa’i (Madd Muttasil 4-5 counts)', audioText: 'السَّمَاءِ', makhrajOrNote: 'Connected Madd with wavy Madd sign.' },
      { id: '9-6', arabic: 'يٰٓأَيُّهَا', transliteration: 'Yaaa-Ayyuhaa (Madd Munfasil 4-5 counts)', audioText: 'يَا أَيُّهَا', makhrajOrNote: 'Separated Madd: Madd at end of one word, Hamzah at start of next word (4-5 counts).' },
      { id: '9-7', arabic: 'إِنَّآ أَعْطَيْنَاكَ', transliteration: 'Innaaa A‘ṭaynaak (Madd Munfasil)', audioText: 'إِنَّا أَعْطَيْنَاكَ', makhrajOrNote: 'Madd Munfasil from Surah Al-Kawthar:108:1.' },
      { id: '9-8', arabic: 'الضَّآلِّينَ', transliteration: 'Aḍ-Ḍaaalleen (Madd Lazim 6 counts)', audioText: 'الضَّالِّينَ', makhrajOrNote: 'Madd Lazim Kalimi Muthaqqal: Madd letter followed by a Shaddah - full 6 counts (Surah Al-Fatiha:1:7).' },
      { id: '9-9', arabic: 'الصَّآخَّةُ', transliteration: 'Aṣ-Ṣaakh-khah (Madd Lazim 6 counts)', audioText: 'الصَّاخَّةُ', makhrajOrNote: 'Compulsory 6-count Madd.' },
    ],
    quizQuestions: [
      {
        id: 'q9-1',
        question: 'How many counts must Madd Lazim (such as in الضَّآلِّينَ) be elongated?',
        options: ['2 Counts', '4 Counts', '5 Counts', '6 Full Counts'],
        correctIndex: 3,
        explanation: 'Madd Lazim is compulsory and must be held for 6 full counts without reduction.',
        audioTextToPlay: 'الضَّالِّينَ',
      },
      {
        id: 'q9-2',
        question: 'What distinguishes Madd Muttasil from Madd Munfasil?',
        options: ['Muttasil has Hamzah in the SAME word; Munfasil has Hamzah in the NEXT word', 'Muttasil is 2 counts, Munfasil is 10 counts', 'Munfasil only applies on heavy letters', 'They have no difference'],
        correctIndex: 0,
        explanation: 'Madd Muttasil occurs when the Hamzah is in the same word as the Madd letter.',
      },
    ],
  },

  // 10. Heavy Letters (Huroof Musta'liyah / Tafkheem)
  {
    id: 10,
    title: 'Lesson 10: Heavy Letters (Huroof Musta‘liyah)',
    shortTitle: 'Heavy Letters',
    arabicTitle: 'الدرس العاشر: الحروف المستعلية المفخمة (خص ضغط قظ)',
    category: 'Tafkheem',
    description: 'The 7 Heavy Letters are always pronounced with elevation of the back of the tongue (Tafkheem / Full Mouth): خ, ص, ض, غ, ط, ق, ظ (Grouped in "خُصَّ ضَغْطٍ قِظْ").',
    tajweedRuleSummary: 'Always fill the mouth with sound on these 7 letters regardless of whether they carry Fatha, Damma, or Kasra.',
    items: [
      { id: '10-1', arabic: 'خَ', transliteration: 'Kha (Heavy)', audioText: 'خَ', makhrajOrNote: 'Upper throat heavy letter (خُصَّ).' },
      { id: '10-2', arabic: 'صَ', transliteration: 'Ṣa (Heavy & Whispered)', audioText: 'صَ', makhrajOrNote: 'Elevated back of tongue with heavy whistle.' },
      { id: '10-3', arabic: 'ضَ', transliteration: 'Ḍa (Heavy)', audioText: 'ضَ', makhrajOrNote: 'Side of tongue with maximum Istitalah (full mouth resonance).' },
      { id: '10-4', arabic: 'غَ', transliteration: 'Gha (Heavy)', audioText: 'غَ', makhrajOrNote: 'Upper throat flowing heavy sound.' },
      { id: '10-5', arabic: 'طَ', transliteration: 'Ṭa (Strongest Heavy Letter)', audioText: 'طَ', makhrajOrNote: 'The strongest and heaviest letter in the entire Arabic language.' },
      { id: '10-6', arabic: 'قَ', transliteration: 'Qa (Deep Uvular Heavy)', audioText: 'قَ', makhrajOrNote: 'Deepest tongue base against soft palate.' },
      { id: '10-7', arabic: 'ظَ', transliteration: 'Ẓa (Heavy Voiced)', audioText: 'ظَ', makhrajOrNote: 'Tongue tip at edge of teeth with back elevated.' },
      { id: '10-8', arabic: 'خُصَّ ضَغْطٍ قِظْ', transliteration: 'Khuṣṣa Ḍaghṭin Qidh', audioText: 'خُصَّ ضَغْطٍ قِظْ', makhrajOrNote: 'The famous mnemonic sentence combining all 7 permanent heavy letters.' },
    ],
    quizQuestions: [
      {
        id: 'q10-1',
        question: 'Which phrase combines all 7 permanent heavy letters (Huroof Musta‘liyah)?',
        options: ['يَرْمَلُون', 'قُطْبُ جَدٍّ', 'خُصَّ ضَغْطٍ قِظْ', 'أَنْتُمْ عَابِدُون'],
        correctIndex: 2,
        explanation: 'خُصَّ ضَغْطٍ قِظْ contains all 7 heavy letters: خ, ص, ض, غ, ط, ق, ظ.',
        audioTextToPlay: 'خُصَّ ضَغْطٍ قِظْ',
      },
    ],
  },

  // 11. Heavy and Light Alif (Tafkheem & Tarqeeq of Alif)
  {
    id: 11,
    title: 'Lesson 11: Heavy and Light Alif (أَحْكَامُ الْأَلِف)',
    shortTitle: 'Heavy & Light Alif',
    arabicTitle: 'الدرس الحادي عشر: تفخيم وترقيق الألف',
    category: 'Tafkheem & Tarqeeq',
    description: 'Alif has no independent weight: it mimics the letter before it! If preceded by a heavy letter, Alif is heavy (Tafkheem). If preceded by a light letter, Alif is light (Tarqeeq).',
    tajweedRuleSummary: 'Alif is a mirror: Heavy after (خ, ص, ض, غ, ط, ق, ظ, heavy Raa, heavy Laam), and light after all other letters.',
    items: [
      { id: '11-1', arabic: 'قَالَ', transliteration: 'Qaala (Heavy Alif)', audioText: 'قَالَ', makhrajOrNote: 'Heavy Alif: Preceded by heavy Qaaf (Full mouth resonance).' },
      { id: '11-2', arabic: 'طَالَ', transliteration: 'Ṭaala (Heavy Alif)', audioText: 'طَالَ', makhrajOrNote: 'Heavy Alif: Preceded by strongest heavy letter Ṭaa.' },
      { id: '11-3', arabic: 'صَابِرِينَ', transliteration: 'Ṣaabireen (Heavy Alif)', audioText: 'صَابِرِينَ', makhrajOrNote: 'Heavy Alif: Preceded by heavy Ṣaad.' },
      { id: '11-4', arabic: 'غَائِبِينَ', transliteration: 'Ghaa’ibeen (Heavy Alif)', audioText: 'غَائِبِينَ', makhrajOrNote: 'Heavy Alif: Preceded by heavy Ghayn.' },
      { id: '11-5', arabic: 'كَانَ', transliteration: 'Kaana (Light Alif)', audioText: 'كَانَ', makhrajOrNote: 'Light Alif: Preceded by light Kaaf (Smiling open sound).' },
      { id: '11-6', arabic: 'مَالَكُم', transliteration: 'Maalakum (Light Alif)', audioText: 'مَالَكُمْ', makhrajOrNote: 'Light Alif: Preceded by light Meem.' },
      { id: '11-7', arabic: 'بَابُ', transliteration: 'Baabu (Light Alif)', audioText: 'بَابُ', makhrajOrNote: 'Light Alif: Preceded by light Baa.' },
      { id: '11-8', arabic: 'نَارًا', transliteration: 'Naaran (Light Alif)', audioText: 'نَارًا', makhrajOrNote: 'Light Alif on Noon followed by heavy Raa.' },
    ],
    quizQuestions: [
      {
        id: 'q11-1',
        question: 'How is the Alif pronounced in the word قَالَ (Qaala)?',
        options: ['Light (Tarqeeq)', 'Heavy (Tafkheem) because it follows heavy Qaaf', 'With Ghunnah', 'With Qalqalah'],
        correctIndex: 1,
        explanation: 'Alif follows the rule of the letter before it; since Qaaf is heavy, Alif is pronounced heavy.',
        audioTextToPlay: 'قَالَ',
      },
      {
        id: 'q11-2',
        question: 'In the word كَانَ (Kaana), why is the Alif pronounced light (Tarqeeq)?',
        options: ['Because Kaaf is a light letter', 'Because it has a Kasra', 'Because of a Waqf stop', 'Because of a Shaddah'],
        correctIndex: 0,
        explanation: 'Because Kaaf is a light letter, the succeeding Alif is pronounced light and flat.',
        audioTextToPlay: 'كَانَ',
      },
    ],
  },

  // 12. Heavy and Light Laam (Tafkheem & Tarqeeq of Laam)
  {
    id: 12,
    title: 'Lesson 12: Heavy and Light Laam (أَحْكَامُ اللَّام)',
    shortTitle: 'Heavy & Light Laam',
    arabicTitle: 'الدرس الثاني عشر: تفخيم وترقيق لام لفظ الجلالة',
    category: 'Tafkheem & Tarqeeq',
    description: 'Laam is always light EXCEPT in the divine name of Allah (لفظ الجلالة). It is heavy (Tafkheem) when preceded by Fatha ( َ ) or Damma ( ُ ), and light (Tarqeeq) when preceded by Kasra ( ِ ).',
    tajweedRuleSummary: 'Fatha / Damma before "Allah" = Heavy Laam (Full mouth). Kasra before "Allah" or in any normal word = Light Laam.',
    items: [
      { id: '12-1', arabic: 'قَالَ اللَّهُ', transliteration: 'Qaalal-Laahu (Heavy Laam)', audioText: 'قَالَ اللَّهُ', makhrajOrNote: 'Heavy Laam in Allah: Preceded by Fatha on Laam.' },
      { id: '12-2', arabic: 'نَصْرُ اللَّهِ', transliteration: 'Naṣrul-Laahi (Heavy Laam)', audioText: 'نَصْرُ اللَّهِ', makhrajOrNote: 'Heavy Laam in Allah: Preceded by Damma on Raa.' },
      { id: '12-3', arabic: 'عَبْدُ اللَّهِ', transliteration: '‘Abdul-Laahi (Heavy Laam)', audioText: 'عَبْدُ اللَّهِ', makhrajOrNote: 'Heavy Laam in Allah: Preceded by Damma on Daal.' },
      { id: '12-4', arabic: 'بِسْمِ اللَّهِ', transliteration: 'Bismil-Laahi (Light Laam)', audioText: 'بِسْمِ اللَّهِ', makhrajOrNote: 'Light Laam in Allah: Preceded by Kasra on Meem (Bism-i).' },
      { id: '12-5', arabic: 'قُلِ اللَّهُمَّ', transliteration: 'Qulil-Laahumma (Light Laam)', audioText: 'قُلِ اللَّهُمَّ', makhrajOrNote: 'Light Laam: Preceded by Kasra under Laam.' },
      { id: '12-6', arabic: 'لَيْلَةُ الْقَدْرِ', transliteration: 'Laylatul-Qadr (Standard Light Laam)', audioText: 'لَيْلَةُ الْقَدْرِ', makhrajOrNote: 'Standard Laam in non-divine word is ALWAYS light.' },
    ],
    quizQuestions: [
      {
        id: 'q12-1',
        question: 'Why is the Laam in بِسْمِ اللَّهِ (Bismillaah) pronounced light (Tarqeeq)?',
        options: ['Because it is preceded by a Kasra (Zer ِ ) under the Meem', 'Because it has a Sukoon', 'Because it is at the start of a Surah', 'Because Laam is always heavy'],
        correctIndex: 0,
        explanation: 'When the divine name of Allah is preceded by a Kasra, the Laam is pronounced light.',
        audioTextToPlay: 'بِسْمِ اللَّهِ',
      },
    ],
  },

  // 13. Heavy and Light Raa (Tafkheem & Tarqeeq of Raa)
  {
    id: 13,
    title: 'Lesson 13: Heavy and Light Raa (أَحْكَامُ الرَّاء)',
    shortTitle: 'Heavy & Light Raa',
    arabicTitle: 'الدرس الثالث عشر: أحكام الراء (تفخيم وترقيق)',
    category: 'Tafkheem & Tarqeeq',
    description: 'Raa is Heavy (Tafkheem) when carrying Fatha ( َ ), Damma ( ُ ), or a Sukoon preceded by Fatha/Damma. Raa is Light (Tarqeeq) when carrying Kasra ( ِ ) or Sukoon preceded by an original Kasra.',
    tajweedRuleSummary: 'Fatha/Damma = Heavy Raa (Full mouth). Kasra = Light Raa (Smiling thin resonance).',
    items: [
      { id: '13-1', arabic: 'رَبَّنَا', transliteration: 'Rabbanaa (Heavy Raa)', audioText: 'رَبَّنَا', makhrajOrNote: 'Heavy Raa: Carries Fatha (Zabar).' },
      { id: '13-2', arabic: 'رُحَمَاءُ', transliteration: 'Ruḥamaaa’u (Heavy Raa)', audioText: 'رُحَمَاءُ', makhrajOrNote: 'Heavy Raa: Carries Damma (Pesh).' },
      { id: '13-3', arabic: 'قُرْآنٌ', transliteration: 'Qur’aanun (Heavy Raa Sukoon)', audioText: 'قُرْآنٌ', makhrajOrNote: 'Heavy Raa: Sukoon preceded by Damma on Qaaf.' },
      { id: '13-4', arabic: 'أَرْسَلْنَا', transliteration: 'Arsalnaa (Heavy Raa Sukoon)', audioText: 'أَرْسَلْنَا', makhrajOrNote: 'Heavy Raa: Sukoon preceded by Fatha on Hamzah.' },
      { id: '13-5', arabic: 'رِزْقًا', transliteration: 'Rizqan (Light Raa)', audioText: 'رِزْقًا', makhrajOrNote: 'Light Raa: Carries Kasra (Zer).' },
      { id: '13-6', arabic: 'رِجَالٌ', transliteration: 'Rijaalun (Light Raa)', audioText: 'رِجَالٌ', makhrajOrNote: 'Light Raa: Carries Kasra (Zer).' },
      { id: '13-7', arabic: 'فِرْعَوْنَ', transliteration: 'Fir‘awna (Light Raa Sukoon)', audioText: 'فِرْعَوْنَ', makhrajOrNote: 'Light Raa: Sukoon preceded by genuine Kasra on Faa.' },
      { id: '13-8', arabic: 'مِرْيَةٍ', transliteration: 'Miryatin (Light Raa Sukoon)', audioText: 'مِرْيَةٍ', makhrajOrNote: 'Light Raa: Sukoon preceded by Kasra on Meem.' },
    ],
    quizQuestions: [
      {
        id: 'q13-1',
        question: 'When is the letter Raa (ر) pronounced light (Tarqeeq)?',
        options: ['When it carries a Kasra (Zer ِ ) or Sukoon preceded by Kasra', 'When it carries a Fatha', 'When it carries a Damma', 'Always'],
        correctIndex: 0,
        explanation: 'Raa is light when it has a Kasra (like رِزْقًا) or has a Sukoon preceded by an original Kasra (like فِرْعَوْنَ).',
        audioTextToPlay: 'رِزْقًا',
      },
    ],
  },

  // 14. Gunnah / Ghunnah (Nasalization on Noon & Meem Mushaddadah)
  {
    id: 14,
    title: 'Lesson 14: Gunnah / Ghunnah (الغُنَّة)',
    shortTitle: 'Ghunnah',
    arabicTitle: 'الدرس الرابع عشر: أحكام الغنة والنون والميم المشددتين',
    category: 'Nasal Resonance',
    description: 'Ghunnah is a pleasant nasal resonance originating from the nasal cavity (Khayshoom). Whenever Noon (نّ) or Meem (مّ) carries a Shaddah, you MUST hold a 2-count Ghunnah.',
    tajweedRuleSummary: 'Wajib Ghunnah: Hold the nasal hum for 2 full beats whenever Noon or Meem has a Shaddah ( ّ ).',
    items: [
      { id: '14-1', arabic: 'إِنَّ', transliteration: 'Inna (Noon Mushaddadah)', audioText: 'إِنَّ', makhrajOrNote: 'Noon with Shaddah: Hold 2-beat nasal resonance in Khayshoom.' },
      { id: '14-2', arabic: 'أَنَّ', transliteration: 'Anna (Noon Mushaddadah)', audioText: 'أَنَّ', makhrajOrNote: 'Noon with Shaddah: Hold 2-beat Ghunnah.' },
      { id: '14-3', arabic: 'ثُمَّ', transliteration: 'Thumma (Meem Mushaddadah)', audioText: 'ثُمَّ', makhrajOrNote: 'Meem with Shaddah: Close lips and sustain nasal resonance for 2 beats.' },
      { id: '14-4', arabic: 'عَمَّ', transliteration: '‘Amma (Meem Mushaddadah)', audioText: 'عَمَّ', makhrajOrNote: 'Meem with Shaddah in Surah An-Naba:78:1.' },
      { id: '14-5', arabic: 'قُلْ أَعُوذُ بِرَبِّ النَّاسِ', transliteration: 'An-Naas (Surah An-Nas)', audioText: 'النَّاسِ', makhrajOrNote: 'Noon Mushaddadah Ghunnah in An-Naas (114:1).' },
      { id: '14-6', arabic: 'مِّن مَّالٍ', transliteration: 'Mim-Maalin (Idgham with Ghunnah)', audioText: 'مِنْ مَالٍ', makhrajOrNote: 'Noon merging into Meem with complete 2-beat Ghunnah.' },
      { id: '14-7', arabic: 'مِن وَالٍ', transliteration: 'Miw-Waalin (Idgham with Ghunnah)', audioText: 'مِنْ وَالٍ', makhrajOrNote: 'Noon merging into Waw with 2-beat Ghunnah.' },
    ],
    quizQuestions: [
      {
        id: 'q14-1',
        question: 'From which anatomical location does the sound of Ghunnah (غنة) resonate?',
        options: ['The throat (Halq)', 'The nasal cavity (Al-Khayshoom)', 'The lips (Shafatayn)', 'The chest'],
        correctIndex: 1,
        explanation: 'Ghunnah is a nasal sound produced exclusively within the nasal cavity (الخَيْشُوم).',
        audioTextToPlay: 'إِنَّ',
      },
      {
        id: 'q14-2',
        question: 'What is the required duration of Ghunnah on Noon Mushaddadah (نّ) and Meem Mushaddadah (مّ)?',
        options: ['Zero counts', '1 Count', '2 Full Counts', '8 Counts'],
        correctIndex: 2,
        explanation: 'Ghunnah on Noon and Meem with Shaddah must be sustained for 2 full counts.',
      },
    ],
  },

  // 15. Haroof e Muqataat (Mysterious Quranic Disjointed Letters)
  {
    id: 15,
    title: 'Lesson 15: Haroof e Muqata‘at (الحروف المقطعة)',
    shortTitle: 'Muqatta‘at',
    arabicTitle: 'الدرس الخامس عشر: الحروف المقطعة في أوائل السور',
    category: 'Quranic Openings',
    description: 'Master the 14 mysterious isolated letters appearing at the start of 29 Quranic Surahs. Read each letter by its full spelling name with exact Madd (2 to 6 counts) and Ghunnah rules.',
    tajweedRuleSummary: 'Letters with Madd Lazim (ك, م, ع, س, ل, ق, ن) are held for 6 counts. Letters of "Hayyun Tahura" (ح, ي, ط, هـ, ر) are held for 2 counts. Alif has zero elongation.',
    items: [
      { id: '15-1', arabic: 'الٓمٓ', nameArabic: 'أَلِفْ لَامْ مِيمْ', transliteration: 'Alif Laaam Mmeeem', audioText: 'أَلِفْ لَامْ مِيمْ', makhrajOrNote: 'Alif (0 counts) + Laam (6 counts Madd) + Idgham Ghunnah (2 counts) + Meem (6 counts Madd). Starts Surah Al-Baqarah & Ali Imran.' },
      { id: '15-2', arabic: 'الٓمٓصٓ', nameArabic: 'أَلِفْ لَامْ مِيمْ صَادْ', transliteration: 'Alif Laaam Mmeeem Ṣaaad', audioText: 'أَلِفْ لَامْ مِيمْ صَادْ', makhrajOrNote: 'Starts Surah Al-A‘raf. 6 counts on Laam, Meem, and heavy Ṣaad.' },
      { id: '15-3', arabic: 'الٓر', nameArabic: 'أَلِفْ لَامْ رَا', transliteration: 'Alif Laaam Raa', audioText: 'أَلِفْ لَامْ رَا', makhrajOrNote: 'Alif (0) + Laam (6) + Raa (2 counts). Starts Surahs Yunus, Hud, Yusuf, Ibrahim, Al-Hijr.' },
      { id: '15-4', arabic: 'الٓمٓر', nameArabic: 'أَلِفْ لَامْ مِيمْ رَا', transliteration: 'Alif Laaam Mmeeem Raa', audioText: 'أَلِفْ لَامْ مِيمْ رَا', makhrajOrNote: 'Starts Surah Ar-Ra‘d.' },
      { id: '15-5', arabic: 'كٰهٰيٰعٰٓصٓ', nameArabic: 'كَافْ هَا يَا عَيْنْ صَادْ', transliteration: 'Kaaaf Haa Yaa ‘Ayyyn Ṣaaad', audioText: 'كَافْ هَا يَا عَيْنْ صَادْ', makhrajOrNote: 'Surah Maryam opening: Kaaf (6), Haa (2), Yaa (2), ‘Ayn (4-6 with Ikhfa Ghunnah), Ṣaad (6 counts with Qalqalah stop).' },
      { id: '15-6', arabic: 'طٰهٰ', nameArabic: 'طَا هَا', transliteration: 'Ṭaa Haa', audioText: 'طَا هَا', makhrajOrNote: 'Surah Taha: Heavy Ṭaa (2 counts) + Light Haa (2 counts).' },
      { id: '15-7', arabic: 'طٰسٓمٓ', nameArabic: 'طَا سِينْ مِيمْ', transliteration: 'Ṭaa Seeem Mmeeem', audioText: 'طَا سِينْ مِيمْ', makhrajOrNote: 'Surah Ash-Shu‘ara & Al-Qasas: Ṭaa (2) + Seen (6) merged with Meem (Ghunnah + 6 counts).' },
      { id: '15-8', arabic: 'طٰسٓ', nameArabic: 'طَا سِينْ', transliteration: 'Ṭaa Seeen', audioText: 'طَا سِينْ', makhrajOrNote: 'Surah An-Naml: Ṭaa (2 counts) + Seen (6 counts).' },
      { id: '15-9', arabic: 'يٰسٓ', nameArabic: 'يَا سِينْ', transliteration: 'Yaa Seeen', audioText: 'يَا سِينْ', makhrajOrNote: 'Surah Yasin opening: Yaa (2 counts) + Seen (6 counts).' },
      { id: '15-10', arabic: 'صٓ', nameArabic: 'صَادْ', transliteration: 'Ṣaaad', audioText: 'صَادْ', makhrajOrNote: 'Surah Sad: Heavy Ṣaad held for 6 counts with Qalqalah on Daal.' },
      { id: '15-11', arabic: 'حٰمٓ', nameArabic: 'حَا مِيمْ', transliteration: 'Ḥaa Mmeeem', audioText: 'حَا مِيمْ', makhrajOrNote: 'The 7 Hawameem Surahs: Ḥaa (2 counts) + Meem (6 counts).' },
      { id: '15-12', arabic: 'عٓسٓقٓ', nameArabic: 'عَيْنْ سِينْ قَافْ', transliteration: '‘Ayyyn Seeen Qaaaf', audioText: 'عَيْنْ سِينْ قَافْ', makhrajOrNote: 'Surah Ash-Shura: ‘Ayn (4-6) + Ikhfa Ghunnah + Seen (6) + Ikhfa Ghunnah + Qaaf (6 counts).' },
      { id: '15-13', arabic: 'قٓ', nameArabic: 'قَافْ', transliteration: 'Qaaaf', audioText: 'قَافْ', makhrajOrNote: 'Surah Qaf: Deep heavy Qaaf held for 6 counts.' },
      { id: '15-14', arabic: 'نٓ', nameArabic: 'نُونْ', transliteration: 'Nooon', audioText: 'نُونْ', makhrajOrNote: 'Surah Al-Qalam: Noon held for 6 counts.' },
    ],
    quizQuestions: [
      {
        id: 'q15-1',
        question: 'How is the opening of Surah Al-Baqarah (الٓمٓ) correctly recited in Tajweed?',
        options: ['Alam', 'Alif Laaam Mmeeem (Reading letter names with 6 counts Madd and Ghunnah)', 'Ilm', 'Alif-Lam-Meem without stretching'],
        correctIndex: 1,
        explanation: 'Huroof-e-Muqatta‘at are recited by pronouncing their full letter names: Alif (0), Laam (6 counts), merging Ghunnah, and Meem (6 counts).',
        audioTextToPlay: 'أَلِفْ لَامْ مِيمْ',
      },
      {
        id: 'q15-2',
        question: 'Which of the Muqatta‘at letters are elongated for only 2 counts (حي طهر)?',
        options: ['ك, م, ع, س', 'ح, ي, ط, هـ, ر (حَيٌّ طَهُرَ)', 'ق, ن, ص', 'Alif only'],
        correctIndex: 1,
        explanation: 'The 5 letters in "Hayyun Tahura" (ح, ي, ط, هـ, ر) receive only 2 counts of natural Madd.',
        audioTextToPlay: 'طَا هَا',
      },
    ],
  },
];
