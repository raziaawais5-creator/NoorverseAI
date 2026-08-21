import React, { useState } from 'react';
import { Search, BookOpen, Bookmark, Filter, ArrowRight, Star } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { ALL_SURAHS_LIST } from '../../data/quranData';
import { SurahReader } from './SurahReader';

export const QuranScreen: React.FC = () => {
  const { activeSurahNumber, setActiveSurahNumber, bookmarks, searchQuery, setSearchQuery } = useApp();
  const [viewMode, setViewMode] = useState<'surahs' | 'bookmarks' | 'reader'>('surahs');
  const [filterRevelation, setFilterRevelation] = useState<'all' | 'Meccan' | 'Medinan'>('all');

  if (viewMode === 'reader') {
    return <SurahReader onBack={() => setViewMode('surahs')} />;
  }

  const filteredSurahs = ALL_SURAHS_LIST.filter((s) => {
    const matchesQuery =
      s.nameTransliterated.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.nameEnglish.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.number.toString() === searchQuery.trim();

    const matchesRevelation = filterRevelation === 'all' || s.revelationType === filterRevelation;
    return matchesQuery && matchesRevelation;
  });

  return (
    <div className="space-y-6 pb-28 px-4 pt-4 max-w-4xl mx-auto">
      {/* Header & Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h2 className="text-2xl font-black text-emerald-950 dark:text-emerald-50">
            The Noble Quran
          </h2>
          <p className="text-xs text-emerald-800/60 dark:text-emerald-400/60 font-medium">
            114 Surahs • Search by Name, Number, or Meaning
          </p>
        </div>

        {/* View mode toggle */}
        <div className="flex rounded-xl bg-emerald-50 dark:bg-emerald-900/30 p-1 border border-emerald-900/10 dark:border-emerald-500/15 self-start sm:self-auto">
          <button
            onClick={() => setViewMode('surahs')}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors flex items-center space-x-1.5 ${
              viewMode === 'surahs'
                ? 'bg-emerald-700 text-amber-300 shadow-sm'
                : 'text-emerald-800 dark:text-emerald-300'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Surahs ({ALL_SURAHS_LIST.length})</span>
          </button>
          <button
            onClick={() => setViewMode('bookmarks')}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors flex items-center space-x-1.5 ${
              viewMode === 'bookmarks'
                ? 'bg-emerald-700 text-amber-300 shadow-sm'
                : 'text-emerald-800 dark:text-emerald-300'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5" />
            <span>Bookmarks ({bookmarks.length})</span>
          </button>
        </div>
      </div>

      {viewMode === 'surahs' ? (
        <>
          {/* Search & Filter Strip */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-emerald-700 dark:text-emerald-300 absolute left-3.5 top-3.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Surah (e.g., Al-Fatiha, Ya-Sin, 67)..."
                className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white dark:bg-[#18221D] border border-emerald-900/10 dark:border-emerald-500/20 text-xs text-emerald-950 dark:text-emerald-100 placeholder-emerald-800/40 focus:outline-none focus:ring-2 focus:ring-emerald-600/50 shadow-sm"
              />
            </div>

            {/* Revelation Filter Buttons */}
            <div className="flex items-center space-x-1 bg-white dark:bg-[#18221D] p-1 rounded-2xl border border-emerald-900/10 dark:border-emerald-500/20 shadow-sm">
              <button
                onClick={() => setFilterRevelation('all')}
                className={`px-3 py-2 text-xs font-semibold rounded-xl transition-colors ${
                  filterRevelation === 'all'
                    ? 'bg-emerald-700 text-amber-300'
                    : 'text-emerald-800 dark:text-emerald-200'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilterRevelation('Meccan')}
                className={`px-3 py-2 text-xs font-semibold rounded-xl transition-colors ${
                  filterRevelation === 'Meccan'
                    ? 'bg-emerald-700 text-amber-300'
                    : 'text-emerald-800 dark:text-emerald-200'
                }`}
              >
                Meccan
              </button>
              <button
                onClick={() => setFilterRevelation('Medinan')}
                className={`px-3 py-2 text-xs font-semibold rounded-xl transition-colors ${
                  filterRevelation === 'Medinan'
                    ? 'bg-emerald-700 text-amber-300'
                    : 'text-emerald-800 dark:text-emerald-200'
                }`}
              >
                Medinan
              </button>
            </div>
          </div>

          {/* Surah List Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {filteredSurahs.map((surah) => (
              <div
                key={surah.number}
                onClick={() => {
                  setActiveSurahNumber(surah.number);
                  setViewMode('reader');
                }}
                className="group p-4 rounded-2xl bg-white dark:bg-[#18221D] border border-emerald-900/10 dark:border-emerald-500/15 shadow-sm hover:shadow-md hover:border-emerald-500/40 transition-all cursor-pointer flex items-center justify-between"
              >
                <div className="flex items-center space-x-3">
                  {/* Number Badge */}
                  <div className="w-10 h-10 rounded-2xl bg-emerald-50 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 font-bold text-xs flex items-center justify-center border border-emerald-900/10 dark:border-emerald-500/20 group-hover:bg-emerald-700 group-hover:text-amber-300 transition-colors">
                    {surah.number}
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-emerald-950 dark:text-emerald-50 group-hover:text-emerald-700 dark:group-hover:text-amber-300 transition-colors">
                      {surah.nameTransliterated}
                    </h3>
                    <p className="text-[11px] text-emerald-800/60 dark:text-emerald-400/60 font-medium">
                      {surah.nameEnglish} • {surah.versesCount} Ayahs
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <div className="font-serif text-lg font-bold text-emerald-900 dark:text-emerald-100 dir-rtl">
                    {surah.nameArabic}
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 font-medium">
                    {surah.revelationType}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        /* Bookmarks View */
        <div className="space-y-4">
          {bookmarks.length === 0 ? (
            <div className="py-16 text-center space-y-3 bg-white dark:bg-[#18221D] rounded-3xl p-6 border border-emerald-900/10 dark:border-emerald-500/15">
              <Bookmark className="w-10 h-10 text-emerald-300 mx-auto" />
              <h3 className="text-base font-bold text-emerald-950 dark:text-emerald-50">
                No Saved Bookmarks Yet
              </h3>
              <p className="text-xs text-emerald-800/60 dark:text-emerald-400/60 max-w-sm mx-auto">
                Bookmark verses while reading in Surah mode to easily revisit them anytime.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {bookmarks.map((bm) => (
                <div
                  key={bm.id}
                  onClick={() => {
                    setActiveSurahNumber(bm.surahNumber);
                    setViewMode('reader');
                  }}
                  className="p-5 rounded-2xl bg-white dark:bg-[#18221D] border border-emerald-900/10 dark:border-emerald-500/15 shadow-sm hover:border-emerald-500/40 transition-all cursor-pointer space-y-2"
                >
                  <div className="flex items-center justify-between text-xs font-bold text-emerald-800 dark:text-emerald-300">
                    <span>
                      {bm.surahName} ({bm.surahNumber}:{bm.ayahNumber})
                    </span>
                    <span className="text-[10px] text-emerald-800/50 dark:text-emerald-400/50">
                      {new Date(bm.createdAt).toLocaleDateString()}
                    </span>
                  </div>

                  <p className="text-right font-serif text-xl text-emerald-950 dark:text-emerald-50 dir-rtl">
                    {bm.arabicText}
                  </p>

                  {bm.note && (
                    <p className="text-xs italic text-amber-700 dark:text-amber-300 bg-amber-500/10 p-2.5 rounded-xl border border-amber-500/20">
                      "{bm.note}"
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
