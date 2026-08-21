import React from 'react';
import { X, Type, Eye, Volume2 } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { RECITERS } from '../../data/quranData';

export const FontSettingsModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const { readerSettings, updateReaderSettings } = useTheme();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-md bg-white dark:bg-[#18221D] rounded-3xl p-6 border border-emerald-900/10 dark:border-emerald-500/20 shadow-2xl space-y-6">
        <div className="flex items-center justify-between border-b border-emerald-900/10 dark:border-emerald-500/10 pb-4">
          <div className="flex items-center space-x-2">
            <Type className="w-5 h-5 text-emerald-700 dark:text-emerald-300" />
            <h3 className="text-lg font-bold text-emerald-950 dark:text-emerald-50">
              Reader Preferences
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-emerald-100 dark:hover:bg-emerald-900/40 text-emerald-800 dark:text-emerald-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Font Size Sliders */}
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-xs font-semibold text-emerald-900 dark:text-emerald-200 mb-1">
              <span>Arabic Font Size ({readerSettings.arabicFontSize}px)</span>
            </div>
            <input
              type="range"
              min="20"
              max="48"
              value={readerSettings.arabicFontSize}
              onChange={(e) => updateReaderSettings({ arabicFontSize: Number(e.target.value) })}
              className="w-full accent-emerald-600 cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs font-semibold text-emerald-900 dark:text-emerald-200 mb-1">
              <span>Translation Font Size ({readerSettings.translationFontSize}px)</span>
            </div>
            <input
              type="range"
              min="12"
              max="24"
              value={readerSettings.translationFontSize}
              onChange={(e) => updateReaderSettings({ translationFontSize: Number(e.target.value) })}
              className="w-full accent-emerald-600 cursor-pointer"
            />
          </div>
        </div>

        {/* Toggles */}
        <div className="space-y-3 pt-2">
          <label className="flex items-center justify-between text-xs font-semibold text-emerald-900 dark:text-emerald-200 cursor-pointer">
            <span className="flex items-center space-x-2">
              <Eye className="w-4 h-4 text-emerald-600" />
              <span>Show Word-by-Word Analysis</span>
            </span>
            <input
              type="checkbox"
              checked={readerSettings.showWordByWord}
              onChange={(e) => updateReaderSettings({ showWordByWord: e.target.checked })}
              className="w-4 h-4 accent-emerald-600 rounded"
            />
          </label>

          <label className="flex items-center justify-between text-xs font-semibold text-emerald-900 dark:text-emerald-200 cursor-pointer">
            <span>Show English Transliteration</span>
            <input
              type="checkbox"
              checked={readerSettings.showTransliteration}
              onChange={(e) => updateReaderSettings({ showTransliteration: e.target.checked })}
              className="w-4 h-4 accent-emerald-600 rounded"
            />
          </label>
        </div>

        {/* Reciter Selector */}
        <div className="space-y-2 pt-2">
          <label className="text-xs font-semibold text-emerald-900 dark:text-emerald-200 flex items-center space-x-1">
            <Volume2 className="w-4 h-4 text-amber-500" />
            <span>Preferred Audio Reciter</span>
          </label>
          <select
            value={readerSettings.selectedReciter}
            onChange={(e) => updateReaderSettings({ selectedReciter: e.target.value })}
            className="w-full rounded-xl bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-900/10 dark:border-emerald-500/20 p-2.5 text-xs text-emerald-950 dark:text-emerald-100 font-medium focus:outline-none"
          >
            {RECITERS.map((r) => (
              <option key={r.id} value={r.id}>
                {r.name} ({r.style})
              </option>
            ))}
          </select>
        </div>

        {/* Save Button */}
        <button
          onClick={onClose}
          className="w-full py-3 rounded-2xl bg-emerald-700 text-amber-300 font-bold text-sm shadow-md hover:bg-emerald-800 transition-colors"
        >
          Apply Preferences
        </button>
      </div>
    </div>
  );
};
