import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowLeft,
  Play,
  Pause,
  Bookmark,
  BookmarkCheck,
  FileText,
  Sparkles,
  Settings,
  Volume2,
  ChevronLeft,
  ChevronRight,
  Eye,
  Share2,
  Check,
  Mic,
  Loader2,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { useTheme } from '../../context/ThemeContext';
import { ALL_SURAHS_LIST, SURAH_VERSES_DATA, RECITERS, loadSurahVerses } from '../../data/quranData';
import { Verse, WordMeaning } from '../../types';
import { FontSettingsModal } from './FontSettingsModal';
import { WordByWordModal } from './WordByWordModal';
import { TafsirModal } from './TafsirModal';
import { AiPronunciationModal } from '../common/AiPronunciationModal';

export const SurahReader: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const {
    activeSurahNumber,
    setActiveSurahNumber,
    activeAyahNumber,
    bookmarks,
    addBookmark,
    removeBookmark,
    isBookmarked,
    saveNote,
    getNote,
    audioState,
    playAudioVerse,
    pauseAudioVerse,
    resumeAudioVerse,
  } = useApp();
  const { readerSettings } = useTheme();

  // Modals state
  const [isFontSettingsOpen, setIsFontSettingsOpen] = useState(false);
  const [selectedWord, setSelectedWord] = useState<WordMeaning | null>(null);
  const [selectedTafsirVerse, setSelectedTafsirVerse] = useState<Verse | null>(null);
  const [selectedPronunciationVerse, setSelectedPronunciationVerse] = useState<Verse | null>(null);
  const [noteVerse, setNoteVerse] = useState<Verse | null>(null);
  const [noteText, setNoteText] = useState('');
  const [copiedId, setCopiedId] = useState<number | null>(null);

  // Verses loading state
  const [verses, setVerses] = useState<Verse[]>(() => SURAH_VERSES_DATA[activeSurahNumber] || []);
  const [isLoadingVerses, setIsLoadingVerses] = useState<boolean>(!SURAH_VERSES_DATA[activeSurahNumber]);

  const surahInfo = ALL_SURAHS_LIST.find((s) => s.number === activeSurahNumber) || ALL_SURAHS_LIST[0];

  useEffect(() => {
    let isMounted = true;
    if (SURAH_VERSES_DATA[activeSurahNumber] && SURAH_VERSES_DATA[activeSurahNumber].length > 0) {
      setVerses(SURAH_VERSES_DATA[activeSurahNumber]);
      setIsLoadingVerses(false);
    } else {
      setIsLoadingVerses(true);
      loadSurahVerses(activeSurahNumber)
        .then((data) => {
          if (isMounted) {
            setVerses(data);
            setIsLoadingVerses(false);
          }
        })
        .catch((err) => {
          console.error('Failed to load surah verses:', err);
          if (isMounted) {
            setVerses(SURAH_VERSES_DATA[activeSurahNumber] || SURAH_VERSES_DATA[1] || []);
            setIsLoadingVerses(false);
          }
        });
    }

    return () => {
      isMounted = false;
    };
  }, [activeSurahNumber]);

  // Auto-follow active verse and sync activeSurahNumber when continuous audio is playing
  useEffect(() => {
    if (audioState.isPlaying && audioState.surahNumber) {
      if (audioState.surahNumber !== activeSurahNumber) {
        setActiveSurahNumber(audioState.surahNumber);
      } else if (audioState.ayahNumber && !isLoadingVerses) {
        const timer = setTimeout(() => {
          const element = document.getElementById(`ayah-${audioState.ayahNumber}`);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 100);
        return () => clearTimeout(timer);
      }
    }
  }, [audioState.isPlaying, audioState.surahNumber, audioState.ayahNumber, activeSurahNumber, setActiveSurahNumber, isLoadingVerses]);

  const currentReciter = RECITERS.find((r) => r.id === readerSettings.selectedReciter) || RECITERS[0];

  const handleNextSurah = () => {
    if (activeSurahNumber < 114) {
      setActiveSurahNumber(activeSurahNumber + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevSurah = () => {
    if (activeSurahNumber > 1) {
      setActiveSurahNumber(activeSurahNumber - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleToggleAudio = (verse: Verse) => {
    const isThisPlaying =
      audioState.isPlaying &&
      audioState.surahNumber === activeSurahNumber &&
      audioState.ayahNumber === verse.numberInSurah;

    if (isThisPlaying) {
      pauseAudioVerse();
    } else {
      playAudioVerse(activeSurahNumber, verse.numberInSurah, currentReciter.subfolder, currentReciter.id);
    }
  };

  const handleSaveNoteSubmit = () => {
    if (noteVerse) {
      saveNote(activeSurahNumber, noteVerse.numberInSurah, noteText);
      setNoteVerse(null);
    }
  };

  const handleCopyVerse = (verse: Verse) => {
    const textToCopy = `${verse.arabicText}\n"${verse.translationEn}"\n— Surah ${surahInfo.nameTransliterated} (${activeSurahNumber}:${verse.numberInSurah})`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(verse.numberInSurah);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6 pb-28 px-4 pt-4 max-w-4xl mx-auto">
      {/* Top Controls Bar */}
      <div className="flex items-center justify-between bg-white dark:bg-[#18221D] p-3 rounded-2xl border border-emerald-900/10 dark:border-emerald-500/15 shadow-sm sticky top-0 sm:top-2 z-20 backdrop-blur-md">
        <button
          onClick={onBack}
          className="flex items-center space-x-1.5 px-3 py-2 rounded-xl bg-emerald-50 dark:bg-emerald-900/40 text-xs font-bold text-emerald-800 dark:text-emerald-200 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 transition-all group active:scale-95 shadow-xs"
          title="Back to Surah Catalog"
          aria-label="Back to Surahs"
        >
          <ArrowLeft className="w-4 h-4 text-emerald-700 dark:text-amber-400 group-hover:-translate-x-0.5 transition-transform" />
          <span>Back</span>
        </button>

        <div className="text-center">
          <h2 className="text-sm font-black text-emerald-950 dark:text-emerald-50">
            {surahInfo.nameTransliterated}
          </h2>
          <span className="text-[10px] text-emerald-800/60 dark:text-emerald-400/60 font-medium">
            {surahInfo.revelationType} • {surahInfo.versesCount} Verses
          </span>
        </div>

        <button
          onClick={() => setIsFontSettingsOpen(true)}
          className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-200 hover:bg-emerald-100 transition-colors"
          title="Reader Settings"
        >
          <Settings className="w-4 h-4" />
        </button>
      </div>

      {/* Surah Header Card */}
      <div className="rounded-3xl bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-950 p-6 text-white text-center shadow-lg relative overflow-hidden">
        <div className="relative z-10 space-y-3">
          <div className="text-4xl font-serif font-bold text-amber-300 tracking-wide dir-rtl">
            {surahInfo.nameArabic}
          </div>
          <h1 className="text-xl font-extrabold text-emerald-50">{surahInfo.nameTransliterated}</h1>
          <p className="text-xs text-emerald-200/80 font-medium">
            "{surahInfo.nameEnglish}" • Juz {surahInfo.juzNumber} • Page {surahInfo.pageNumber}
          </p>

          {/* Basmalah except for Surah At-Tawbah (9) */}
          {activeSurahNumber !== 9 && (
            <div className="pt-3 border-t border-emerald-700/40">
              <div className="font-serif text-2xl text-amber-200/90 dir-rtl">
                بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Verses List or Loading Indicator */}
      {isLoadingVerses ? (
        <div className="py-20 text-center space-y-4 bg-white dark:bg-[#18221D] rounded-3xl p-8 border border-emerald-900/10 dark:border-emerald-500/15 shadow-sm">
          <Loader2 className="w-10 h-10 text-emerald-600 dark:text-emerald-400 animate-spin mx-auto" />
          <div>
            <h3 className="text-base font-bold text-emerald-950 dark:text-emerald-50">
              Loading Full Verses for Surah {surahInfo.nameTransliterated}...
            </h3>
            <p className="text-xs text-emerald-800/60 dark:text-emerald-400/60 mt-1">
              Fetching complete Quranic text, English, and Urdu translations ({surahInfo.versesCount} Ayahs)
            </p>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {(verses || []).map((verse) => {
            const bookmarked = isBookmarked(activeSurahNumber, verse.numberInSurah);
            const isPlayingThis =
              audioState.isPlaying &&
              audioState.surahNumber === activeSurahNumber &&
              audioState.ayahNumber === verse.numberInSurah;
            const userNote = getNote(activeSurahNumber, verse.numberInSurah);

            return (
              <div
                key={verse.numberInSurah}
                id={`ayah-${verse.numberInSurah}`}
                className={`rounded-3xl p-6 transition-all border ${
                  isPlayingThis
                    ? 'bg-amber-500/10 dark:bg-amber-400/10 border-amber-500/40 shadow-md ring-2 ring-amber-400/30'
                    : 'bg-white dark:bg-[#18221D] border-emerald-900/10 dark:border-emerald-500/15 shadow-sm hover:shadow-md'
                }`}
              >
                {/* Ayah Top Control Strip */}
                <div className="flex items-center justify-between border-b border-emerald-900/10 dark:border-emerald-500/10 pb-3 mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-emerald-700 text-amber-300 text-xs font-bold flex items-center justify-center shadow-sm">
                      {verse.numberInSurah}
                    </div>
                    <span className="text-xs text-emerald-800/60 dark:text-emerald-400/60 font-medium">
                      Juz {verse.juz || surahInfo.juzNumber}
                    </span>
                  </div>

                  <div className="flex items-center space-x-1">
                    {/* Play Audio Button */}
                    <button
                      onClick={() => handleToggleAudio(verse)}
                      className={`p-2 rounded-full transition-colors ${
                        isPlayingThis
                          ? 'bg-amber-500 text-emerald-950'
                          : 'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200 hover:bg-emerald-100'
                      }`}
                      title="Play Audio"
                    >
                      {isPlayingThis ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </button>

                    {/* Bookmark Button */}
                    <button
                      onClick={() => {
                        if (bookmarked) {
                          const bm = bookmarks.find(
                            (b) => b.surahNumber === activeSurahNumber && b.ayahNumber === verse.numberInSurah
                          );
                          if (bm) removeBookmark(bm.id);
                        } else {
                          addBookmark({
                            surahNumber: activeSurahNumber,
                            surahName: surahInfo.nameTransliterated,
                            ayahNumber: verse.numberInSurah,
                            arabicText: verse.arabicText,
                          });
                        }
                      }}
                      className={`p-2 rounded-full transition-colors ${
                        bookmarked
                          ? 'text-amber-500 bg-amber-500/15'
                          : 'text-emerald-800 dark:text-emerald-200 hover:bg-emerald-100 dark:hover:bg-emerald-900/30'
                      }`}
                      title="Bookmark Verse"
                    >
                      {bookmarked ? <BookmarkCheck className="w-4 h-4 fill-amber-500" /> : <Bookmark className="w-4 h-4" />}
                    </button>

                    {/* Note Button */}
                    <button
                      onClick={() => {
                        setNoteVerse(verse);
                        setNoteText(getNote(activeSurahNumber, verse.numberInSurah) || '');
                      }}
                      className={`p-2 rounded-full transition-colors ${
                        userNote
                          ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/50'
                          : 'text-emerald-800 dark:text-emerald-200 hover:bg-emerald-100 dark:hover:bg-emerald-900/30'
                      }`}
                      title="Personal Note"
                    >
                      <FileText className="w-4 h-4" />
                    </button>

                    {/* AI Tafsir Button */}
                    <button
                      onClick={() => setSelectedTafsirVerse(verse)}
                      className="p-2 rounded-full bg-amber-500/15 text-amber-600 dark:text-amber-300 hover:bg-amber-500/25 transition-colors"
                      title="AI Tafsir & Reflection"
                    >
                      <Sparkles className="w-4 h-4" />
                    </button>

                    {/* AI Pronunciation & Mistake Test Button */}
                    <button
                      onClick={() => setSelectedPronunciationVerse(verse)}
                      className="p-2 rounded-full bg-emerald-700 text-amber-300 hover:bg-emerald-600 transition-colors shadow-sm"
                      title="AI Recitation & Pronunciation Mistake Check"
                    >
                      <Mic className="w-4 h-4" />
                    </button>

                    {/* Copy Button */}
                    <button
                      onClick={() => handleCopyVerse(verse)}
                      className="p-2 rounded-full text-emerald-800 dark:text-emerald-200 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 transition-colors"
                      title="Copy Ayah"
                    >
                      {copiedId === verse.numberInSurah ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Arabic Text Display */}
                <div
                  style={{ fontSize: `${readerSettings.arabicFontSize}px` }}
                  className="text-right font-serif font-bold text-emerald-950 dark:text-emerald-50 leading-loose dir-rtl py-2"
                >
                  {verse.arabicText}
                </div>

                {/* Word-by-Word Interactive Chips */}
                {readerSettings.showWordByWord && verse.words && verse.words.length > 0 && (
                  <div className="flex flex-wrap justify-end gap-2 py-3 border-t border-emerald-900/5 dark:border-emerald-500/10">
                    {verse.words.map((w, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedWord(w)}
                        className="px-2.5 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-900/10 dark:border-emerald-500/20 text-right group hover:border-amber-400 hover:bg-amber-500/10 transition-all"
                      >
                        <div className="font-serif text-base font-bold text-emerald-950 dark:text-emerald-100 dir-rtl group-hover:text-amber-600 dark:group-hover:text-amber-300">
                          {w.arabic}
                        </div>
                        {w.english !== w.arabic && (
                          <div className="text-[10px] text-emerald-800/70 dark:text-emerald-300/70 font-medium">
                            {w.english}
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                )}

                {/* Transliteration */}
                {readerSettings.showTransliteration && verse.transliteration && (
                  <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mt-2">
                    {verse.transliteration}
                  </p>
                )}

                {/* English Translation */}
                <p
                  style={{ fontSize: `${readerSettings.translationFontSize}px` }}
                  className="text-emerald-900/90 dark:text-emerald-100/90 mt-2 leading-relaxed"
                >
                  {verse.translationEn}
                </p>

                {/* Urdu Translation */}
                {verse.translationUr && (
                  <p className="text-right font-serif text-sm font-semibold text-emerald-800/80 dark:text-emerald-200/80 mt-2 dir-rtl leading-relaxed border-t border-emerald-900/5 dark:border-emerald-500/10 pt-2">
                    {verse.translationUr}
                  </p>
                )}

                {/* User Saved Note Banner */}
                {userNote && (
                  <div className="mt-3 p-3 rounded-2xl bg-amber-500/10 dark:bg-amber-400/10 border border-amber-500/20 text-xs text-amber-900 dark:text-amber-200 space-y-1">
                    <div className="font-bold flex items-center space-x-1">
                      <FileText className="w-3.5 h-3.5" />
                      <span>Your Note:</span>
                    </div>
                    <p className="italic">{userNote}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Navigation Footer for Previous / Next Surah */}
      <div className="flex items-center justify-between pt-6 border-t border-emerald-900/10 dark:border-emerald-500/15">
        <button
          onClick={handlePrevSurah}
          disabled={activeSurahNumber <= 1}
          className={`flex items-center space-x-2 px-4 py-2.5 rounded-2xl text-xs font-bold transition-all ${
            activeSurahNumber <= 1
              ? 'opacity-40 cursor-not-allowed bg-emerald-100 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400'
              : 'bg-emerald-700 text-amber-300 shadow hover:bg-emerald-800'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Previous Surah</span>
        </button>

        <button
          onClick={handleNextSurah}
          disabled={activeSurahNumber >= 114}
          className={`flex items-center space-x-2 px-4 py-2.5 rounded-2xl text-xs font-bold transition-all ${
            activeSurahNumber >= 114
              ? 'opacity-40 cursor-not-allowed bg-emerald-100 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400'
              : 'bg-emerald-700 text-amber-300 shadow hover:bg-emerald-800'
          }`}
        >
          <span>Next Surah</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Note Modal */}
      {noteVerse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="w-full max-w-md bg-white dark:bg-[#18221D] rounded-3xl p-6 border border-emerald-900/10 dark:border-emerald-500/20 shadow-2xl space-y-4">
            <h3 className="text-base font-bold text-emerald-950 dark:text-emerald-50">
              Personal Note for Ayah {noteVerse.numberInSurah}
            </h3>
            <textarea
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
              placeholder="Write your personal reflections or key learnings..."
              rows={4}
              className="w-full rounded-2xl bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-900/10 dark:border-emerald-500/20 p-3 text-xs text-emerald-950 dark:text-emerald-100 focus:outline-none"
            />
            <div className="flex space-x-2">
              <button
                onClick={() => setNoteVerse(null)}
                className="flex-1 py-2 rounded-xl bg-emerald-100 dark:bg-emerald-900/40 text-xs font-bold text-emerald-800 dark:text-emerald-200"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveNoteSubmit}
                className="flex-1 py-2 rounded-xl bg-emerald-700 text-amber-300 text-xs font-bold shadow hover:bg-emerald-800"
              >
                Save Note
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modals */}
      <FontSettingsModal isOpen={isFontSettingsOpen} onClose={() => setIsFontSettingsOpen(false)} />
      <WordByWordModal isOpen={!!selectedWord} onClose={() => setSelectedWord(null)} word={selectedWord} />
      <TafsirModal
        isOpen={!!selectedTafsirVerse}
        onClose={() => setSelectedTafsirVerse(null)}
        verse={selectedTafsirVerse}
        surahName={surahInfo.nameTransliterated}
        surahNumber={activeSurahNumber}
      />
      {selectedPronunciationVerse && (
        <AiPronunciationModal
          isOpen={!!selectedPronunciationVerse}
          onClose={() => setSelectedPronunciationVerse(null)}
          targetText={selectedPronunciationVerse.arabicText}
          itemTitle={`Surah ${surahInfo.nameTransliterated} (${activeSurahNumber}:${selectedPronunciationVerse.numberInSurah})`}
          transliteration={selectedPronunciationVerse.transliteration}
          type="quran"
        />
      )}
    </div>
  );
};
