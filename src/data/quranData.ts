import { Surah, Verse } from '../types';
import { ALL_SURAHS_LIST } from './surahsList';

export { ALL_SURAHS_LIST };

export const RECITERS = [
  { id: 'mishary', name: 'Mishary Rashid Alafasy', style: 'Murattal', subfolder: 'Alafasy_128kbps' },
  { id: 'sudais', name: 'Abdul Rahman Al-Sudais', style: 'Hadr', subfolder: 'AbdulSamad_64kbps_QuranExplorer.com' },
  { id: 'ghamdi', name: 'Saad Al-Ghamdi', style: 'Murattal', subfolder: 'Ghamadi_40kbps' },
  { id: 'shatri', name: 'Abu Bakr Al-Shatri', style: 'Murattal', subfolder: 'Abu_Bakr_Ash-Shaatree_128kbps' },
];

export const SURAH_VERSES_DATA: { [key: number]: Verse[] } = {
  // Surah Al-Fatiha (1)
  1: [
    {
      number: 1,
      numberInSurah: 1,
      arabicText: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
      translationEn: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.',
      translationUr: 'اللہ کے نام سے جو نہایت مہربان، رحم فرمانے والا ہے۔',
      transliteration: 'Bismillaahir-Raḥmaanir-Raheem',
      juz: 1,
      page: 1,
      words: [
        { arabic: 'بِسْمِ', transliteration: 'Bismi', english: 'In the name', root: 'س-م-و', grammar: 'Preposition + Noun' },
        { arabic: 'اللَّهِ', transliteration: 'Allaahi', english: 'of Allah', root: 'إ-ل-ه', grammar: 'Proper Noun' },
        { arabic: 'الرَّحْمَٰنِ', transliteration: 'ar-Raḥmaani', english: 'the Entirely Merciful', root: 'ر-ح-م', grammar: 'Adjective' },
        { arabic: 'الرَّحِيمِ', transliteration: 'ar-Raḥeemi', english: 'the Especially Merciful', root: 'ر-ح-م', grammar: 'Adjective' },
      ],
      tafsirShort: 'The Basmalah inaugurates our recitation. It declares that all learning, actions, and worship commence under the divine shelter and grace of Allah.',
    },
    {
      number: 2,
      numberInSurah: 2,
      arabicText: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
      translationEn: '[All] praise is [due] to Allah, Lord of the worlds -',
      translationUr: 'سب تعریفیں اللہ ہی کے لیے ہیں جو تمام جہانوں کا پرورش کرنے والا پروردگار ہے۔',
      transliteration: 'Al-ḥamdu lillaahi Rabbil-\'Aalameen',
      juz: 1,
      page: 1,
      words: [
        { arabic: 'الْحَمْدُ', transliteration: 'Al-ḥamdu', english: 'All praise & gratitude', root: 'ح-م-د', grammar: 'Noun' },
        { arabic: 'لِلَّهِ', transliteration: 'lillaahi', english: 'is due to Allah', root: 'إ-ل-ه', grammar: 'Preposition + Noun' },
        { arabic: 'رَبِّ', transliteration: 'Rabbi', english: 'Lord & Sustainer', root: 'ر-ب-ب', grammar: 'Noun' },
        { arabic: 'الْعَالَمِينَ', transliteration: 'al-\'Aalameen', english: 'of all the worlds', root: 'ع-ل-م', grammar: 'Plural Noun' },
      ],
      tafsirShort: 'Al-Hamd conveys profound praise, love, and gratitude to Allah as the Creator, Nourisher, and Master of all realms and beings.',
    },
    {
      number: 3,
      numberInSurah: 3,
      arabicText: 'الرَّحْمَٰنِ الرَّحِيمِ',
      translationEn: 'The Entirely Merciful, the Especially Merciful,',
      translationUr: 'بہت مہربان، نہایت رحم فرمانے والا۔',
      transliteration: 'Ar-Raḥmaanir-Raheem',
      juz: 1,
      page: 1,
      words: [
        { arabic: 'الرَّحْمَٰنِ', transliteration: 'Ar-Raḥmaani', english: 'The Entirely Merciful', root: 'ر-ح-م' },
        { arabic: 'الرَّحِيمِ', transliteration: 'Ar-Raḥeemi', english: 'The Especially Merciful', root: 'ر-ح-م' },
      ],
      tafsirShort: 'Affirms Allah\'s universal compassion embracing all creation in this world, and His special mercy bestowed upon believers.',
    },
    {
      number: 4,
      numberInSurah: 4,
      arabicText: 'مَالِكِ يَوْمِ الدِّينِ',
      translationEn: 'Sovereign of the Day of Recompense.',
      translationUr: 'روز جزا اور انصاف کے دن کا مالک۔',
      transliteration: 'Maaliki Yawmid-Deen',
      juz: 1,
      page: 1,
      words: [
        { arabic: 'مَالِكِ', transliteration: 'Maaliki', english: 'Master / Sovereign', root: 'م-ل-ك' },
        { arabic: 'يَوْمِ', transliteration: 'Yawmi', english: 'Day', root: 'ي-و-م' },
        { arabic: 'الدِّينِ', transliteration: 'ad-Deen', english: 'of Judgment / Recompense', root: 'د-ي-ن' },
      ],
      tafsirShort: 'Reminds humanity of the ultimate Day of Reckoning where complete and unshared justice belongs to Allah alone.',
    },
    {
      number: 5,
      numberInSurah: 5,
      arabicText: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ',
      translationEn: 'It is You we worship and You we ask for help.',
      translationUr: 'ہم تیری ہی عبادت کرتے ہیں اور تجھ ہی سے مدد مانگتے ہیں۔',
      transliteration: 'Iyyaaka na\'budu wa iyyaaka nasta\'een',
      juz: 1,
      page: 1,
      words: [
        { arabic: 'إِيَّاكَ', transliteration: 'Iyyaaka', english: 'You alone', root: 'إ-ي-ا' },
        { arabic: 'نَعْبُدُ', transliteration: 'na\'budu', english: 'we worship', root: 'ع-ب-د' },
        { arabic: 'وَإِيَّاكَ', transliteration: 'wa-iyyaaka', english: 'and You alone', root: 'إ-ي-ا' },
        { arabic: 'نَسْتَعِينُ', transliteration: 'nasta\'een', english: 'we ask for assistance', root: 'ع-و-ن' },
      ],
      tafsirShort: 'The ultimate covenant of pure monotheism (Tawhid): dedicating worship exclusively to Allah and seeking His divine support in all things.',
    },
    {
      number: 6,
      numberInSurah: 6,
      arabicText: 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ',
      translationEn: 'Guide us to the straight path -',
      translationUr: 'ہمیں سیدھے اور سچے راستے کی ہدایت فرما۔',
      transliteration: 'Ihdinaṣ-Ṣiraaṭal-Mustaqeem',
      juz: 1,
      page: 1,
      words: [
        { arabic: 'اهْدِنَا', transliteration: 'Ihdinaa', english: 'Guide us', root: 'ه-د-ي' },
        { arabic: 'الصِّرَاطَ', transliteration: 'aṣ-Ṣiraaṭa', english: 'to the path', root: 'ص-ر-ط' },
        { arabic: 'الْمُسْتَقِيمَ', transliteration: 'al-Mustaqeem', english: 'the straight & upright', root: 'ق-و-م' },
      ],
      tafsirShort: 'The essential supplication of the believer: petitioning Allah for continuous steadfastness, wisdom, and moral uprightness.',
    },
    {
      number: 7,
      numberInSurah: 7,
      arabicText: 'صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ',
      translationEn: 'The path of those upon whom You have bestowed favor, not of those who have evoked [Your] anger or of those who are astray.',
      translationUr: 'ان لوگوں کا راستہ جن پر تو نے انعام فرمایا، نہ ان کا جن پر غضب ہوا اور نہ گمراہ ہونے والوں کا۔',
      transliteration: 'Ṣiraaṭal-ladheena an\'amta \'alayhim ghayril-maghḍoobi \'alayhim wa laḍ-ḍaaalleen',
      juz: 1,
      page: 1,
      words: [
        { arabic: 'صِرَاطَ', transliteration: 'Ṣiraaṭa', english: 'The path of', root: 'ص-ر-ط' },
        { arabic: 'الَّذِينَ', transliteration: 'alladheena', english: 'those who', root: 'الذي' },
        { arabic: 'أَنْعَمْتَ', transliteration: 'an\'amta', english: 'You have favored', root: 'ن-ع-م' },
        { arabic: 'عَلَيْهِمْ', transliteration: '\'alayhim', english: 'upon them', root: 'ع-ل-ي' },
        { arabic: 'غَيْرِ', transliteration: 'ghayri', english: 'not [of]', root: 'غ-ي-ر' },
        { arabic: 'الْمَغْضُوبِ', transliteration: 'al-maghḍoobi', english: 'those who earned anger', root: 'غ-ض-ب' },
        { arabic: 'عَلَيْهِمْ', transliteration: '\'alayhim', english: 'upon them', root: 'ع-ل-ي' },
        { arabic: 'وَلَا الضَّالِّينَ', transliteration: 'wa laḍ-ḍaaalleen', english: 'nor those who went astray', root: 'ض-ل-ل' },
      ],
      tafsirShort: 'Clarifies that the true path is that of the Prophets, the truthful, the martyrs, and the righteous, avoiding both willful defiance and misguided ignorance.',
    },
  ],

  // Surah Al-Asr (103)
  103: [
    {
      number: 1,
      numberInSurah: 1,
      arabicText: 'وَالْعَصْرِ',
      translationEn: 'By time,',
      translationUr: 'زمانے کی قسم!',
      transliteration: 'Wal-\'Aṣr',
      juz: 30,
      page: 601,
      words: [
        { arabic: 'وَالْعَصْرِ', transliteration: 'Wal-\'Aṣr', english: 'By the declining time', root: 'ع-ص-ر' },
      ],
      tafsirShort: 'Allah swears by Time as the arena of human endeavor and the ultimate testament to human choices.',
    },
    {
      number: 2,
      numberInSurah: 2,
      arabicText: 'إِنَّ الْإِنسَانَ لَفِي خُسْرٍ',
      translationEn: 'Indeed, mankind is in loss,',
      translationUr: 'بے شک تمام انسان خسارے اور نقصان میں ہیں،',
      transliteration: 'Innal-insaana lafee khusr',
      juz: 30,
      page: 601,
      words: [
        { arabic: 'إِنَّ', transliteration: 'Inna', english: 'Indeed', root: 'إ-ن-ن' },
        { arabic: 'الْإِنسَانَ', transliteration: 'al-Insaana', english: 'mankind', root: 'أ-ن-س' },
        { arabic: 'لَفِي', transliteration: 'lafee', english: 'is surely in', root: 'ف-ي' },
        { arabic: 'خُسْرٍ', transliteration: 'khusr', english: 'loss / ruin', root: 'خ-س-ر' },
      ],
      tafsirShort: 'Every passing moment depletes one\'s lifespan, bringing inevitable loss unless invested in eternal truth.',
    },
    {
      number: 3,
      numberInSurah: 3,
      arabicText: 'إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ',
      translationEn: 'Except for those who have believed and done righteous deeds and advised each other to truth and advised each other to patience.',
      translationUr: 'سوائے ان کے جو ایمان لائے اور جنہوں نے نیک عمل کیے اور ایک دوسرے کو حق کی وصیت کی اور صبر کی تاکید کی۔',
      transliteration: 'Illal-ladheena aamanoo wa \'amiluṣ-ṣaaliḥaati wa tawaaṣaw bil-ḥaqqi wa tawaaṣaw biṣ-ṣabr',
      juz: 30,
      page: 601,
      words: [
        { arabic: 'إِلَّا الَّذِينَ', transliteration: 'Illal-ladheena', english: 'Except those who', root: 'الذي' },
        { arabic: 'آمَنُوا', transliteration: 'aamanoo', english: 'believed', root: 'أ-م-ن' },
        { arabic: 'وَعَمِلُوا', transliteration: 'wa \'amiloo', english: 'and did', root: 'ع-م-ل' },
        { arabic: 'الصَّالِحَاتِ', transliteration: 'aṣ-ṣaaliḥaati', english: 'righteous deeds', root: 'ص-ل-ح' },
        { arabic: 'وَتَوَاصَوْا', transliteration: 'wa tawaaṣaw', english: 'and counselled one another', root: 'و-ص-ي' },
        { arabic: 'بِالْحَقِّ', transliteration: 'bil-ḥaqqi', english: 'to the truth', root: 'ح-ق-ق' },
        { arabic: 'وَتَوَاصَوْا بِالصَّبْرِ', transliteration: 'wa tawaaṣaw biṣ-ṣabr', english: 'and to steadfast patience', root: 'ص-ب-ر' },
      ],
      tafsirShort: 'Imam Shafi\'i remarked that if Allah had only revealed this Surah, it would have been sufficient guidance for all mankind.',
    },
  ],

  // Surah Al-Kawthar (108)
  108: [
    {
      number: 1,
      numberInSurah: 1,
      arabicText: 'إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ',
      translationEn: 'Indeed, We have granted you, [O Muhammad], al-Kawthar.',
      translationUr: 'اے محبوب! بے شک ہم نے آپ کو کوثر (بے انتہا بھلائی اور حوض کوثر) عطا فرما دی۔',
      transliteration: 'Innaaa a\'ṭaynaakal-Kawthar',
      juz: 30,
      page: 602,
      words: [
        { arabic: 'إِنَّا', transliteration: 'Innaaa', english: 'Indeed We', root: 'إ-ن-ن' },
        { arabic: 'أَعْطَيْنَاكَ', transliteration: 'a\'ṭaynaaka', english: 'have granted you', root: 'ع-ط-و' },
        { arabic: 'الْكَوْثَرَ', transliteration: 'al-Kawthar', english: 'the Abundant Good / Heavenly Fountain', root: 'ك-ث-ر' },
      ],
      tafsirShort: 'Consolation to the Prophet (peace be upon him) assuring him of immense, boundless blessings and eternal honor.',
    },
    {
      number: 2,
      numberInSurah: 2,
      arabicText: 'فَصَلِّ لِرَبِّكَ وَانْحَرْ',
      translationEn: 'So pray to your Lord and sacrifice [to Him alone].',
      translationUr: 'پس آپ اپنے رب کے لیے نماز پڑھیں اور قربانی کریں۔',
      transliteration: 'Faṣalli liRabbika wanḥar',
      juz: 30,
      page: 602,
      words: [
        { arabic: 'فَصَلِّ', transliteration: 'Faṣalli', english: 'So pray', root: 'ص-ل-و' },
        { arabic: 'لِرَبِّكَ', transliteration: 'liRabbika', english: 'to your Lord', root: 'ر-ب-ب' },
        { arabic: 'وَانْحَرْ', transliteration: 'wanḥar', english: 'and sacrifice', root: 'ن-ح-ر' },
      ],
      tafsirShort: 'Instructs the believer to direct all devotional prayer and ritual sacrifice exclusively for Allah\'s pleasure.',
    },
    {
      number: 3,
      numberInSurah: 3,
      arabicText: 'إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ',
      translationEn: 'Indeed, your enemy is the one cut off.',
      translationUr: 'بے شک آپ کا دشمن ہی بے نام و نشان اور جڑ کٹا ہے۔',
      transliteration: 'Inna shaani\'aka huwal-abtar',
      juz: 30,
      page: 602,
      words: [
        { arabic: 'إِنَّ', transliteration: 'Inna', english: 'Indeed', root: 'إ-ن-ن' },
        { arabic: 'شَانِئَكَ', transliteration: 'shaani\'aka', english: 'your enemy / hater', root: 'ش-ن-أ' },
        { arabic: 'هُوَ', transliteration: 'huwa', english: 'he is', root: 'هو' },
        { arabic: 'الْأَبْتَرُ', transliteration: 'al-abtar', english: 'the one cut off from all good', root: 'ب-ت-ر' },
      ],
      tafsirShort: 'Divine promise that those who hate the Prophet and his message are severed from all lasting legacy, goodness, and grace.',
    },
  ],

  // Surah Al-Kafirun (109)
  109: [
    {
      number: 1,
      numberInSurah: 1,
      arabicText: 'قُلْ يَا أَيُّهَا الْكَافِرُونَ',
      translationEn: 'Say, "O disbelievers,',
      translationUr: 'آپ کہہ دیجیے: اے کافرو!',
      transliteration: 'Qul yaaa ayyuhal-kaafiroon',
      juz: 30,
      page: 603,
    },
    {
      number: 2,
      numberInSurah: 2,
      arabicText: 'لَا أَعْبُدُ مَا تَعْبُدُونَ',
      translationEn: 'I do not worship what you worship.',
      translationUr: 'میں ان کی عبادت نہیں کرتا جنہیں تم پوجتے ہو۔',
      transliteration: 'Laaa a\'budu maa ta\'budoon',
      juz: 30,
      page: 603,
    },
    {
      number: 3,
      numberInSurah: 3,
      arabicText: 'وَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ',
      translationEn: 'Nor are you worshippers of what I worship.',
      translationUr: 'اور نہ تم اس کی عبادت کرنے والے ہو جس کی میں عبادت کرتا ہوں۔',
      transliteration: 'Wa laaa antum \'aabidoona maaa a\'bud',
      juz: 30,
      page: 603,
    },
    {
      number: 4,
      numberInSurah: 4,
      arabicText: 'وَلَا أَنَا عَابِدٌ مَّا عَبَدتُّمْ',
      translationEn: 'Nor will I be a worshipper of what you worship.',
      translationUr: 'اور نہ میں کبھی ان کی عبادت کروں گا جن کی تم نے پرستش کی۔',
      transliteration: 'Wa laaa ana \'aabidum-maa \'abattum',
      juz: 30,
      page: 603,
    },
    {
      number: 5,
      numberInSurah: 5,
      arabicText: 'وَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ',
      translationEn: 'Nor will you be worshippers of what I worship.',
      translationUr: 'اور نہ تم اس کی عبادت کرنے والے بنو گے جس کی میں عبادت کرتا ہوں۔',
      transliteration: 'Wa laaa antum \'aabidoona maaa a\'bud',
      juz: 30,
      page: 603,
    },
    {
      number: 6,
      numberInSurah: 6,
      arabicText: 'لَكُمْ دِينُكُمْ وَلِيَ دِينِ',
      translationEn: 'For you is your religion, and for me is my religion."',
      translationUr: 'تمہارے لیے تمہارا دین ہے اور میرے لیے میرا دین ہے۔',
      transliteration: 'Lakum deenukum wa liya deen',
      juz: 30,
      page: 603,
      tafsirShort: 'Clear demarcation of theological boundaries and rejection of any syncretic compromise on pure monotheism.',
    },
  ],

  // Surah An-Nasr (110)
  110: [
    {
      number: 1,
      numberInSurah: 1,
      arabicText: 'إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ',
      translationEn: 'When the victory of Allah has come and the conquest,',
      translationUr: 'جب اللہ کی مدد اور فتح آ جائے،',
      transliteration: 'Idhaa jaaa\'a naṣrul-laahi wal-fatḥ',
      juz: 30,
      page: 603,
    },
    {
      number: 2,
      numberInSurah: 2,
      arabicText: 'وَرَأَيْتَ النَّاسَ يَدْخُلُونَ فِي دِينِ اللَّهِ أَفْوَاجًا',
      translationEn: 'And you see the people entering into the religion of Allah in multitudes,',
      translationUr: 'اور آپ لوگوں کو دیکھ لیں کہ وہ اللہ کے دین میں فوج در فوج داخل ہو رہے ہیں،',
      transliteration: 'Wa ra\'aytan-naasa yadkhuloona fee deenil-laahi afwaajaa',
      juz: 30,
      page: 603,
    },
    {
      number: 3,
      numberInSurah: 3,
      arabicText: 'فَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُ ۚ إِنَّهُ كَانَ تَوَّابًا',
      translationEn: 'Then exalt [Him] with praise of your Lord and ask forgiveness of Him. Indeed, He is ever Accepting of repentance.',
      translationUr: 'تو اپنے رب کی حمد کے ساتھ تسبیح کیجیے اور اس سے مغفرت طلب کیجیے، بے شک وہ بڑا ہی توبہ قبول فرمانے والا ہے۔',
      transliteration: 'Fasabbiḥ biḥamdi Rabbika wastaghfirh; innahoo kaana Tawwaabaa',
      juz: 30,
      page: 603,
      tafsirShort: 'Commands ultimate humility, praise, and seeking forgiveness from Allah upon achieving great spiritual success and victory.',
    },
  ],

  // Surah Al-Masad (111)
  111: [
    {
      number: 1,
      numberInSurah: 1,
      arabicText: 'تَبَّتْ يَدَا أَبِي لَهَبٍ وَتَبَّ',
      translationEn: 'May the hands of Abu Lahab be ruined, and ruined is he.',
      translationUr: 'ابو لہب کے دونوں ہاتھ ٹوٹ گئے اور وہ خود ہلاک ہو گیا!',
      transliteration: 'Tabbat yadaaa Abee Lahabiw-wa tabb',
      juz: 30,
      page: 603,
    },
    {
      number: 2,
      numberInSurah: 2,
      arabicText: 'مَا أَغْنَىٰ عَنْهُ مَالُهُ وَمَا كَسَبَ',
      translationEn: 'His wealth will not avail him or that which he gained.',
      translationUr: 'نہ اس کا مال اس کے کچھ کام آیا اور نہ اس کی کمائی۔',
      transliteration: 'Maaa aghnaa \'anhu maaluhu wa maa kasab',
      juz: 30,
      page: 603,
    },
    {
      number: 3,
      numberInSurah: 3,
      arabicText: 'سَيَصْلَىٰ نَارًا ذَاتَ لَهَبٍ',
      translationEn: 'He will [enter to] burn in a Fire of [blazing] flame',
      translationUr: 'وہ جلد ہی شعلے مارتی ہوئی آگ میں داخل ہوگا۔',
      transliteration: 'Sayaṣlaa naaran dhaata lahab',
      juz: 30,
      page: 603,
    },
    {
      number: 4,
      numberInSurah: 4,
      arabicText: 'وَامْرَأَتُهُ حَمَّالَةَ الْحَطَبِ',
      translationEn: 'And his wife [as well] - the carrier of firewood.',
      translationUr: 'اور اس کی بیوی بھی جو ایندھن (کانٹے) اٹھانے والی ہے۔',
      transliteration: 'Wamra\'atuhu ḥammaalatal-ḥaṭab',
      juz: 30,
      page: 603,
    },
    {
      number: 5,
      numberInSurah: 5,
      arabicText: 'فِي جِيدِهَا حَبْلٌ مِّن مَّسَدٍ',
      translationEn: 'Around her neck is a rope of [twisted] fiber.',
      translationUr: 'اس کے گلے میں بٹی ہوئی کھجور کی رسی ہوگی۔',
      transliteration: 'Fee jeedihaa ḥablum-mim-masad',
      juz: 30,
      page: 603,
    },
  ],

  // Surah Al-Ikhlas (112)
  112: [
    {
      number: 1,
      numberInSurah: 1,
      arabicText: 'قُلْ هُوَ اللَّهُ أَحَدٌ',
      translationEn: 'Say, "He is Allah, [who is] One,',
      translationUr: 'آپ فرما دیجیے: وہ اللہ ایک اور یکتا ہے۔',
      transliteration: 'Qul Huwal-Laahu Aḥad',
      juz: 30,
      page: 604,
      words: [
        { arabic: 'قُلْ', transliteration: 'Qul', english: 'Say', root: 'ق-و-ل' },
        { arabic: 'هُوَ', transliteration: 'Huwa', english: 'He is', root: 'هو' },
        { arabic: 'اللَّهُ', transliteration: 'Allaahu', english: 'Allah', root: 'إ-ل-ه' },
        { arabic: 'أَحَدٌ', transliteration: 'Aḥad', english: 'One & Unique', root: 'و-ح-د' },
      ],
      tafsirShort: 'Establishes absolute, uncompromised Tawhid (monotheism) — Allah is singular in His Essence, Names, and Attributes.',
    },
    {
      number: 2,
      numberInSurah: 2,
      arabicText: 'اللَّهُ الصَّمَدُ',
      translationEn: 'Allah, the Eternal Refuge.',
      translationUr: 'اللہ بے نیاز ہے، سب اس کے محتاج ہیں۔',
      transliteration: 'Allaahuṣ-Ṣamad',
      juz: 30,
      page: 604,
      words: [
        { arabic: 'اللَّهُ', transliteration: 'Allaahu', english: 'Allah', root: 'إ-ل-ه' },
        { arabic: 'الصَّمَدُ', transliteration: 'aṣ-Ṣamad', english: 'the Self-Sufficient Master / Eternal Refuge', root: 'ص-م-د' },
      ],
      tafsirShort: 'As-Samad means the absolute Sustainer upon Whom all existence relies, while He needs nothing from any creation.',
    },
    {
      number: 3,
      numberInSurah: 3,
      arabicText: 'لَمْ يَلِدْ وَلَمْ يُولَدْ',
      translationEn: 'He neither begets nor is born,',
      translationUr: 'نہ اس کی کوئی اولاد ہے اور نہ وہ کسی سے پیدا ہوا ہے۔',
      transliteration: 'Lam yalid wa lam yoolad',
      juz: 30,
      page: 604,
      words: [
        { arabic: 'لَمْ يَلِدْ', transliteration: 'Lam yalid', english: 'He begets not', root: 'و-ل-د' },
        { arabic: 'وَلَمْ يُولَدْ', transliteration: 'wa lam yoolad', english: 'nor was He begotten', root: 'و-ل-د' },
      ],
      tafsirShort: 'Refutes all anthropomorphic claims, polytheism, and false concepts of divine lineage.',
    },
    {
      number: 4,
      numberInSurah: 4,
      arabicText: 'وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ',
      translationEn: 'Nor is there to Him any equivalent."',
      translationUr: 'اور نہ ہی کوئی اس کا ہمسر یا برابر ہے۔',
      transliteration: 'Wa lam yakul-lahoo kufuwan aḥad',
      juz: 30,
      page: 604,
      words: [
        { arabic: 'وَلَمْ يَكُن', transliteration: 'Wa lam yakun', english: 'And nor is there', root: 'ك-و-ن' },
        { arabic: 'لَّهُ', transliteration: 'lahoo', english: 'unto Him', root: 'له' },
        { arabic: 'كُفُوًا', transliteration: 'kufuwan', english: 'any equal / comparable', root: 'ك-ف-ء' },
        { arabic: 'أَحَدٌ', transliteration: 'aḥad', english: 'anyone', root: 'و-ح-د' },
      ],
      tafsirShort: 'Affirms that nothing in all created heavens and earth resembles or compares to Allah in majesty, power, or holiness.',
    },
  ],

  // Surah Al-Falaq (113)
  113: [
    {
      number: 1,
      numberInSurah: 1,
      arabicText: 'قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ',
      translationEn: 'Say, "I seek refuge in the Lord of daybreak',
      translationUr: 'آپ کہہ دیجیے: میں صبح کے رب کی پناہ مانگتا ہوں،',
      transliteration: 'Qul a\'oodhu biRabbil-falaq',
      juz: 30,
      page: 604,
      words: [
        { arabic: 'قُلْ', transliteration: 'Qul', english: 'Say', root: 'ق-و-ل' },
        { arabic: 'أَعُوذُ', transliteration: 'a\'oodhu', english: 'I seek refuge', root: 'ع-و-ذ' },
        { arabic: 'بِرَبِّ', transliteration: 'biRabbi', english: 'in the Lord', root: 'ر-ب-ب' },
        { arabic: 'الْفَلَقِ', transliteration: 'al-falaq', english: 'of daybreak', root: 'ف-ل-ق' },
      ],
    },
    {
      number: 2,
      numberInSurah: 2,
      arabicText: 'مِن شَرِّ مَا خَلَقَ',
      translationEn: 'From the evil of that which He created',
      translationUr: 'ہر اس چیز کے شر سے جو اس نے پیدا فرمائی،',
      transliteration: 'Min sharri maa khalaq',
      juz: 30,
      page: 604,
      words: [
        { arabic: 'مِن شَرِّ', transliteration: 'Min sharri', english: 'From evil', root: 'ش-ر-ر' },
        { arabic: 'مَا خَلَقَ', transliteration: 'maa khalaq', english: 'of what He created', root: 'خ-ل-ق' },
      ],
    },
    {
      number: 3,
      numberInSurah: 3,
      arabicText: 'وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ',
      translationEn: 'And from the evil of darkness when it settles',
      translationUr: 'اور اندھیری رات کے شر سے جب وہ چھا جائے،',
      transliteration: 'Wa min sharri ghaasiqin idhaa waqab',
      juz: 30,
      page: 604,
      words: [
        { arabic: 'وَمِن شَرِّ', transliteration: 'Wa min sharri', english: 'And from evil', root: 'ش-ر-ر' },
        { arabic: 'غَاسِقٍ', transliteration: 'ghaasiqin', english: 'of darkness', root: 'غ-س-ق' },
        { arabic: 'إِذَا وَقَبَ', transliteration: 'idhaa waqab', english: 'when it overspreads', root: 'و-ق-ب' },
      ],
    },
    {
      number: 4,
      numberInSurah: 4,
      arabicText: 'وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ',
      translationEn: 'And from the evil of the blowers in knots',
      translationUr: 'اور گرہوں میں پھونکنے والیوں (جادوگرنیوں) کے شر سے،',
      transliteration: 'Wa min sharrin-naffaathaati fil-\'uqad',
      juz: 30,
      page: 604,
      words: [
        { arabic: 'النَّفَّاثَاتِ', transliteration: 'an-naffaathaati', english: 'the blowers', root: 'ن-ف-ث' },
        { arabic: 'فِي الْعُقَدِ', transliteration: 'fil-\'uqad', english: 'in knots', root: 'ع-ق-د' },
      ],
    },
    {
      number: 5,
      numberInSurah: 5,
      arabicText: 'وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ',
      translationEn: 'And from the evil of an envier when he envies."',
      translationUr: 'اور حسد کرنے والے کے شر سے جب وہ حسد کرے۔',
      transliteration: 'Wa min sharri haasidin idhaa hasad',
      juz: 30,
      page: 604,
      words: [
        { arabic: 'حَاسِدٍ', transliteration: 'haasidin', english: 'an envier', root: 'ح-س-د' },
        { arabic: 'إِذَا حَسَدَ', transliteration: 'idhaa hasad', english: 'when he envies', root: 'ح-س-د' },
      ],
    },
  ],

  // Surah An-Nas (114)
  114: [
    {
      number: 1,
      numberInSurah: 1,
      arabicText: 'قُلْ أَعُوذُ بِرَبِّ النَّاسِ',
      translationEn: 'Say, "I seek refuge in the Lord of mankind,',
      translationUr: 'آپ کہہ دیجیے: میں تمام انسانوں کے رب کی پناہ مانگتا ہوں،',
      transliteration: 'Qul a\'oodhu biRabbin-naas',
      juz: 30,
      page: 604,
      words: [
        { arabic: 'قُلْ', transliteration: 'Qul', english: 'Say', root: 'ق-و-ل' },
        { arabic: 'أَعُوذُ', transliteration: 'a\'oodhu', english: 'I seek refuge', root: 'ع-و-ذ' },
        { arabic: 'بِرَبِّ النَّاسِ', transliteration: 'biRabbin-naas', english: 'in the Lord of mankind', root: 'ر-ب-ب' },
      ],
    },
    {
      number: 2,
      numberInSurah: 2,
      arabicText: 'مَلِكِ النَّاسِ',
      translationEn: 'The Sovereign of mankind,',
      translationUr: 'تمام انسانوں کے حقیقی بادشاہ کی،',
      transliteration: 'Malikin-naas',
      juz: 30,
      page: 604,
      words: [
        { arabic: 'مَلِكِ النَّاسِ', transliteration: 'Malikin-naas', english: 'The Sovereign of mankind', root: 'م-ل-ك' },
      ],
    },
    {
      number: 3,
      numberInSurah: 3,
      arabicText: 'إِلَٰهِ النَّاسِ',
      translationEn: 'The God of mankind,',
      translationUr: 'تمام انسانوں کے معبود برحق کی،',
      transliteration: 'Ilaahin-naas',
      juz: 30,
      page: 604,
      words: [
        { arabic: 'إِلَٰهِ النَّاسِ', transliteration: 'Ilaahin-naas', english: 'The God of mankind', root: 'إ-ل-ه' },
      ],
    },
    {
      number: 4,
      numberInSurah: 4,
      arabicText: 'مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ',
      translationEn: 'From the evil of the retreating whisperer -',
      translationUr: 'وسوسہ ڈالنے والے، پیچھے ہٹ جانے والے شیطان کے شر سے،',
      transliteration: 'Min sharril-waswaasil-khannaas',
      juz: 30,
      page: 604,
      words: [
        { arabic: 'الْوَسْوَاسِ', transliteration: 'al-waswaas', english: 'the whisperer', root: 'و-س-و-س' },
        { arabic: 'الْخَنَّاسِ', transliteration: 'al-khannaas', english: 'the retreating one', root: 'خ-ن-س' },
      ],
    },
    {
      number: 5,
      numberInSurah: 5,
      arabicText: 'الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ',
      translationEn: 'Who whispers [evil] into the breasts of mankind -',
      translationUr: 'جو لوگوں کے سینوں میں وسوسے ڈالتا ہے،',
      transliteration: 'Alladhee yuwaswisu fee ṣudoorin-naas',
      juz: 30,
      page: 604,
      words: [
        { arabic: 'الَّذِي يُوَسْوِسُ', transliteration: 'Alladhee yuwaswisu', english: 'Who whispers', root: 'و-س-و-س' },
        { arabic: 'فِي صُدُورِ النَّاسِ', transliteration: 'fee ṣudoorin-naas', english: 'into the chests of mankind', root: 'ص-د-ر' },
      ],
    },
    {
      number: 6,
      numberInSurah: 6,
      arabicText: 'مِنَ الْجِنَّةِ وَالنَّاسِ',
      translationEn: 'From among the jinn and mankind."',
      translationUr: 'خواہ وہ جنات میں سے ہو یا انسانوں میں سے۔',
      transliteration: 'Minal-jinnati wan-naas',
      juz: 30,
      page: 604,
      words: [
        { arabic: 'مِنَ الْجِنَّةِ', transliteration: 'Minal-jinnati', english: 'From jinn', root: 'ج-ن-ن' },
        { arabic: 'وَالنَّاسِ', transliteration: 'wan-naas', english: 'and mankind', root: 'أ-ن-س' },
      ],
    },
  ],
};

// Dynamic Daily Collections (Rotate on a Daily Basis)
export interface DailyHadithItem {
  id: string;
  arabic: string;
  text: string;
  translationUr: string;
  narrator: string;
  source: string;
  topic: string;
}

export interface DailyDuaItem {
  id: string;
  title: string;
  arabic: string;
  transliteration: string;
  translation: string;
  translationUr: string;
  reference: string;
  category: string;
}

export const DAILY_HADITHS_COLLECTION: DailyHadithItem[] = [
  {
    id: 'h1',
    topic: 'Quranic Excellence',
    arabic: 'خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ',
    text: 'The best among you are those who learn the Quran and teach it.',
    translationUr: 'تم میں سے بہترین شخص وہ ہے جو قرآن مجید کا علم حاصل کرے اور اسے دوسروں کو سکھائے۔',
    narrator: 'Narrated by Uthman ibn Affan (RA)',
    source: 'Sahih al-Bukhari 5027',
  },
  {
    id: 'h2',
    topic: 'Sincerity & Intention',
    arabic: 'إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى',
    text: 'Actions are judged by intentions, and every person will be rewarded according to what they intended.',
    translationUr: 'اعمال کا دارومدار نیتوں پر ہے، اور ہر انسان کو وہی کچھ ملے گا جس کی اس نے نیت کی۔',
    narrator: 'Narrated by Umar ibn al-Khattab (RA)',
    source: 'Sahih al-Bukhari 1 & Sahih Muslim 1907',
  },
  {
    id: 'h3',
    topic: 'Compassion & Divine Mercy',
    arabic: 'الرَّاحِمُونَ يَرْحَمُهُمُ الرَّحْمَنُ، ارْحَمُوا مَنْ فِي الأَرْضِ يَرْحَمْكُمْ مَنْ فِي السَّمَاءِ',
    text: 'The Merciful ones will be shown mercy by the Most Merciful. Show mercy to those on earth, and the One in the heavens will show mercy to you.',
    translationUr: 'رحم کرنے والوں پر رحمن رحم فرماتا ہے۔ تم زمین والوں پر رحم کرو، آسمان والا تم پر رحم کرے گا۔',
    narrator: 'Narrated by Abdullah ibn Amr (RA)',
    source: 'Sunan al-Tirmidhi 1924',
  },
  {
    id: 'h4',
    topic: 'Virtue of Seeking Knowledge',
    arabic: 'مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ',
    text: 'Whoever travels a path in search of Islamic knowledge, Allah will make easy for him a path leading to Paradise.',
    translationUr: 'جو شخص علم کی تلاش میں کسی راستے پر چلتا ہے، اللہ تعالی اس کے بدلے میں اس کے لیے جنت کا راستہ آسان کر دیتا ہے۔',
    narrator: 'Narrated by Abu Hurairah (RA)',
    source: 'Sahih Muslim 2699',
  },
  {
    id: 'h5',
    topic: 'Good Manners & Charity',
    arabic: 'تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ لَكَ صَدَقَةٌ',
    text: 'Your smile for your brother is recorded for you as a charity.',
    translationUr: 'اپنے مسلمان بھائی کے چہرے کے سامنے تمہارا تبسم فرمانا تمہارے لیے صدقہ کا ثواب رکھتا ہے۔',
    narrator: 'Narrated by Abu Dharr (RA)',
    source: 'Sunan al-Tirmidhi 1956',
  },
  {
    id: 'h6',
    topic: 'Gratitude & Patience',
    arabic: 'عَجَبًا لأَمْرِ الْمُؤْمِنِ إِنَّ أَمْرَهُ كُلَّهُ خَيْرٌ وَلَيْسَ ذَاكَ لأَحَدٍ إِلاَّ لِلْمُؤْمِنِ',
    text: 'How wonderful is the affair of the believer! All his affairs are good. If prosperity comes to him he is grateful, and if adversity strikes he endures with patience.',
    translationUr: 'مومن کا معاملہ بھی عجیب و غریب ہے! اس کا ہر کام اس کے لیے خیر کا باعث ہے۔ خوشی پر شکر اور تکلیف پر صبر کرتا ہے۔',
    narrator: 'Narrated by Suhayb ibn Sinan (RA)',
    source: 'Sahih Muslim 2999',
  },
  {
    id: 'h7',
    topic: 'Remembrance of Allah',
    arabic: 'مَثَلُ الَّذِي يَذْكُرُ رَبَّهُ وَالَّذِي لاَ يَذْكُرُ رَبَّهُ مَثَلُ الْحَيِّ وَالْمَيِّتِ',
    text: 'The parable of the one who remembers his Lord and the one who does not is like that of the living and the dead.',
    translationUr: 'اپنے رب کا ذکر کرنے والے اور نہ کرنے والے کی مثال ایسے ہے جیسے کوئی زندہ اور مردہ شخص۔',
    narrator: 'Narrated by Abu Musa al-Ash\'ari (RA)',
    source: 'Sahih al-Bukhari 6407',
  },
  {
    id: 'h8',
    topic: 'Excellence of Character',
    arabic: 'إِنَّ مِنْ خِيَارِكُمْ أَحْسَنَكُمْ أَخْلاَقًا',
    text: 'Verily, the best among you are those who possess the best manners and character.',
    translationUr: 'بیشک تم میں سے سب سے بہترین لوگ وہ ہیں جن کا اخلاق سب سے عمدہ اور شائستہ ہے۔',
    narrator: 'Narrated by Abdullah ibn Amr (RA)',
    source: 'Sahih al-Bukhari 3559',
  },
  {
    id: 'h9',
    topic: 'Brotherhood & True Faith',
    arabic: 'لاَ يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ',
    text: 'None of you truly believes until he loves for his brother what he loves for himself.',
    translationUr: 'تم میں سے کوئی شخص اس وقت تک سچا مومن نہیں ہو سکتا جب تک اپنے بھائی کے لیے وہی پسند نہ کرے جو اپنے لیے کرتا ہے۔',
    narrator: 'Narrated by Anas ibn Malik (RA)',
    source: 'Sahih al-Bukhari 13 & Sahih Muslim 45',
  },
  {
    id: 'h10',
    topic: 'Truthfulness & Integrity',
    arabic: 'عَلَيْكُمْ بِالصِّدْقِ فَإِنَّ الصِّدْقَ يَهْدِي إِلَى الْبِرِّ وَإِنَّ الْبِرَّ يَهْدِي إِلَى الْجَنَّةِ',
    text: 'Hold fast to truthfulness, for truthfulness leads to righteousness, and righteousness leads to Paradise.',
    translationUr: 'سچائی کو اپنے اوپر لازم کر لو، کیونکہ سچائی نیکی کی طرف لے جاتی ہے اور نیکی جنت کا راستہ دکھاتی ہے۔',
    narrator: 'Narrated by Abdullah ibn Mas\'ud (RA)',
    source: 'Sahih Muslim 2607',
  },
];

export const DAILY_DUAS_COLLECTION: DailyDuaItem[] = [
  {
    id: 'd1',
    title: 'Dua for Knowledge & Wisdom',
    arabic: 'رَّبِّ زِدْنِي عِلْمًا',
    transliteration: 'Rabbi zidnee \'ilmaa',
    translation: 'My Lord, increase me in knowledge.',
    translationUr: 'اے میرے پروردگار! میرے علم میں اضافہ فرما۔',
    reference: 'Surah Taha 20:114',
    category: 'Knowledge & Growth',
  },
  {
    id: 'd2',
    title: 'Dua for Goodness in Both Worlds',
    arabic: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
    transliteration: 'Rabbanaa aatinaa fid-dunyaa ḥasanatan wa fil-aakhirati ḥasanatan wa qinaa \'adhaaban-naar',
    translation: 'Our Lord, give us in this world that which is good and in the Hereafter that which is good and protect us from the punishment of the Fire.',
    translationUr: 'اے ہمارے رب! ہمیں دنیا میں بھی بھلائی عطا فرما اور آخرت میں بھی بھلائی، اور ہمیں آگ کے عذاب سے بچا۔',
    reference: 'Surah Al-Baqarah 2:201',
    category: 'Comprehensive Goodness',
  },
  {
    id: 'd3',
    title: 'Dua for Steadfast Heart & Faith',
    arabic: 'يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ',
    transliteration: 'Yaa Muqallibal-quloobi thabbit qalbee \'alaa deenik',
    translation: 'O Turner of the hearts, keep my heart firm upon Your religion.',
    translationUr: 'اے دلوں کو پھیرنے والے! میرے دل کو اپنے دین اور اطاعت پر ثابت قدم رکھ۔',
    reference: 'Sunan al-Tirmidhi 2140',
    category: 'Faith & Perseverance',
  },
  {
    id: 'd4',
    title: 'Dua for Relief from Anxiety & Grief',
    arabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ، وَالْبُخْلِ وَالْجُبْنِ',
    transliteration: 'Allaahumma innee a\'oodhu bika minal-hammi wal-ḥazani, wal-\'ajzi wal-kasali, wal-bukhli wal-jubn',
    translation: 'O Allah, I seek refuge in You from anxiety and sorrow, weakness and laziness, miserliness and cowardice.',
    translationUr: 'اے اللہ! میں پریشانی اور غم، عاجزی اور سستی، بخل اور بزدلی سے تیری پناہ کا طالب ہوں۔',
    reference: 'Sahih al-Bukhari 6369',
    category: 'Peace of Mind',
  },
  {
    id: 'd5',
    title: 'Dua of Prophet Yunus (AS) in Distress',
    arabic: 'لَّا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ',
    transliteration: 'Laaa ilaaha illaa Anta Subḥaanaka innee kuntu minaẓ-ẓaalimeen',
    translation: 'There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers.',
    translationUr: 'تیرے سوا کوئی معبود نہیں، تو پاک ہے، بے شک میں ہی زیادتی کرنے والوں میں سے تھا۔',
    reference: 'Surah Al-Anbiya 21:87',
    category: 'Relief & Repentance',
  },
  {
    id: 'd6',
    title: 'Dua for Mercy upon Parents',
    arabic: 'رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا',
    transliteration: 'Rabbir-ḥamhumā kamā rabbayānī ṣagheerā',
    translation: 'My Lord, have mercy upon them as they brought me up when I was small.',
    translationUr: 'اے میرے رب! ان دونوں پر رحم فرما جس طرح انہوں نے بچپن میں میری پرورش کی۔',
    reference: 'Surah Al-Isra 17:24',
    category: 'Family & Mercy',
  },
  {
    id: 'd7',
    title: 'Dua for Guidance & Piety',
    arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى',
    transliteration: 'Allaahumma innee as\'alukal-hudaa wat-tuqaa wal-\'afaafa wal-ghinaa',
    translation: 'O Allah, I ask You for guidance, piety, chastity, and self-sufficiency.',
    translationUr: 'اے اللہ! میں تجھ سے ہدایت، تقویٰ، پاکدامنی اور بے نیازی کا سوال کرتا ہوں۔',
    reference: 'Sahih Muslim 2721',
    category: 'Spiritual Elevation',
  },
  {
    id: 'd8',
    title: 'Dua for Protection from Harm',
    arabic: 'بِسْمِ اللَّهِ الَّذِي لاَ يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الأَرْضِ وَلاَ فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ',
    transliteration: 'Bismillaahil-ladhee laa yaḍurru ma\'as-mihee shay\'un fil-arḍi wa laa fis-samaaa\'i wa Huwas-Samee\'ul-\'Aleem',
    translation: 'In the name of Allah, with Whose name nothing can cause harm in the earth or in the heaven, and He is the All-Hearing, All-Knowing.',
    translationUr: 'اللہ کے نام سے جس کے نام کے ساتھ زمین اور آسمان کی کوئی چیز نقصان نہیں پہنچا سکتی اور وہی خوب سننے اور جاننے والا ہے۔',
    reference: 'Sunan Abu Dawud 5088',
    category: 'Daily Protection',
  },
  {
    id: 'd9',
    title: 'Dua for Gratitude for Divine Favors',
    arabic: 'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ وَعَلَىٰ وَالِدَيَّ',
    transliteration: 'Rabbi awzi\'neee an ashkura ni\'matakal-lateee an\'amta \'alayya wa \'alaa waalidayya',
    translation: 'My Lord, enable me to be grateful for Your favor which You have bestowed upon me and upon my parents.',
    translationUr: 'اے میرے رب! مجھے توفیق دے کہ میں تیری اس نعمت کا شکر ادا کروں جو تو نے مجھ پر اور میرے والدین پر فرمائی۔',
    reference: 'Surah An-Naml 27:19',
    category: 'Gratitude & Grace',
  },
];

// Helper to get daily Hadith based on current date + optional manual offset
export function getDailyHadith(offset: number = 0): DailyHadithItem & { dayOfYear: number; totalCount: number; currentIndex: number } {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);

  const idx = Math.abs((dayOfYear + offset) % DAILY_HADITHS_COLLECTION.length);
  return {
    ...DAILY_HADITHS_COLLECTION[idx],
    dayOfYear,
    totalCount: DAILY_HADITHS_COLLECTION.length,
    currentIndex: idx + 1,
  };
}

// Helper to get daily Supplication (Dua) based on current date + optional manual offset
export function getDailyDua(offset: number = 0): DailyDuaItem & { dayOfYear: number; totalCount: number; currentIndex: number } {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);

  const idx = Math.abs((dayOfYear + offset) % DAILY_DUAS_COLLECTION.length);
  return {
    ...DAILY_DUAS_COLLECTION[idx],
    dayOfYear,
    totalCount: DAILY_DUAS_COLLECTION.length,
    currentIndex: idx + 1,
  };
}

// Backward Compatibility Exports
export const DAILY_HADITH = getDailyHadith();
export const DAILY_DUA = getDailyDua();

export const DAILY_VERSE: Verse & { surahName: string; surahNumber: number } = {
  number: 255,
  numberInSurah: 255,
  surahNumber: 2,
  surahName: "Al-Baqarah",
  arabicText: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ",
  translationEn: "Allah - there is no deity except Him, the Ever-Living, the Sustainer of [all] existence. Neither drowsiness overtakes Him nor sleep.",
  translationUr: "اللہ، اس کے سوا کوئی معبود نہیں، وہ زندہ جاوید اور تمام کائنات کو سنبھالنے والا ہے۔ نہ اسے اونگھ آتی ہے اور نہ نیند۔",
  transliteration: "Allaahu laaa ilaaha illaa Huwal-Ḥayyul-Qayyoom...",
  juz: 3,
  page: 42,
  tafsirShort: "Ayat al-Kursi (The Verse of the Throne) is the greatest single verse of the Holy Quran, asserting Allah's absolute sovereignty, life, knowledge, and eternal wakefulness."
};

// Audio helper for reciter audio verse URLs
export function getVerseAudioUrl(reciterSubfolder: string, surahNum: number, ayahNum: number): string {
  const sStr = String(surahNum).padStart(3, '0');
  const aStr = String(ayahNum).padStart(3, '0');
  return `https://everyayah.com/data/${reciterSubfolder}/${sStr}${aStr}.mp3`;
}

// Dynamic loader for full Surah verses from API with local caching
export async function loadSurahVerses(surahNumber: number): Promise<Verse[]> {
  if (SURAH_VERSES_DATA[surahNumber] && SURAH_VERSES_DATA[surahNumber].length > 0) {
    return SURAH_VERSES_DATA[surahNumber];
  }

  try {
    const res = await fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}/editions/quran-uthmani,en.sahih,ur.jalandhry`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    const arabicAyahs = json.data?.[0]?.ayahs || [];
    const englishAyahs = json.data?.[1]?.ayahs || [];
    const urduAyahs = json.data?.[2]?.ayahs || [];

    const surahMeta = ALL_SURAHS_LIST.find((s) => s.number === surahNumber);

    const verses: Verse[] = arabicAyahs.map((a: any, idx: number) => {
      let text = a.text;
      if (surahNumber !== 1 && surahNumber !== 9) {
        text = text.replace(/^﻿?بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ\s*/, '');
      }

      const wordsArr = text.split(' ').map((w: string) => ({
        arabic: w,
        transliteration: w,
        english: w,
      }));

      return {
        number: a.number,
        numberInSurah: a.numberInSurah,
        arabicText: text,
        translationEn: englishAyahs[idx]?.text || '',
        translationUr: urduAyahs[idx]?.text || '',
        transliteration: `${surahMeta?.nameTransliterated || 'Surah ' + surahNumber} ${surahNumber}:${a.numberInSurah}`,
        juz: a.juz,
        page: a.page,
        words: wordsArr,
        tafsirShort: `Verse ${a.numberInSurah} of ${surahMeta?.nameTransliterated || 'Surah ' + surahNumber}. Reflect upon the divine wisdom, guidance, and spiritual elevation within this verse.`,
      };
    });

    if (verses.length > 0) {
      SURAH_VERSES_DATA[surahNumber] = verses;
    }
    return verses;
  } catch (err) {
    console.error('Error fetching surah verses:', err);
    if (SURAH_VERSES_DATA[surahNumber]) {
      return SURAH_VERSES_DATA[surahNumber];
    }
    return SURAH_VERSES_DATA[1] || [];
  }
}
