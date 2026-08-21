import React, { createContext, useContext, useEffect, useState } from 'react';
import { ReaderSettings } from '../types';

interface ThemeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  readerSettings: ReaderSettings;
  updateReaderSettings: (newSettings: Partial<ReaderSettings>) => void;
}

const DEFAULT_SETTINGS: ReaderSettings = {
  arabicFontSize: 28,
  translationFontSize: 16,
  showWordByWord: true,
  showTransliteration: true,
  selectedTranslation: 'sahih',
  selectedReciter: 'mishary',
  scriptType: 'uthmani',
  autoScroll: true,
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('noorverse_dark_mode');
    return saved ? JSON.parse(saved) : true;
  });

  const [readerSettings, setReaderSettings] = useState<ReaderSettings>(() => {
    const saved = localStorage.getItem('noorverse_reader_settings');
    return saved ? JSON.parse(saved) : DEFAULT_SETTINGS;
  });

  useEffect(() => {
    localStorage.setItem('noorverse_dark_mode', JSON.stringify(isDarkMode));
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    localStorage.setItem('noorverse_reader_settings', JSON.stringify(readerSettings));
  }, [readerSettings]);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  const updateReaderSettings = (newSettings: Partial<ReaderSettings>) => {
    setReaderSettings((prev) => ({ ...prev, ...newSettings }));
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode, readerSettings, updateReaderSettings }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
};
