import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/common/Header';
import { BottomNav } from './components/common/BottomNav';
import { GeometricPattern } from './components/common/GeometricPattern';
import { PublicHomePage } from './components/seo/PublicHomePage';
import { PublicQuranPage } from './components/seo/PublicQuranPage';
import { PublicTajweedPage } from './components/seo/PublicTajweedPage';
import { PublicAiQuranPage } from './components/seo/PublicAiQuranPage';
import { PublicTafsirPage } from './components/seo/PublicTafsirPage';
import { PublicPronunciationPage } from './components/seo/PublicPronunciationPage';
import { PublicArabicRootsPage } from './components/seo/PublicArabicRootsPage';
import { PublicIslamicLearningPage } from './components/seo/PublicIslamicLearningPage';
import { PublicNooraniQaidaPage } from './components/seo/PublicNooraniQaidaPage';
import { PublicLearnPage } from './components/seo/PublicLearnPage';
import { PublicPrayerPage } from './components/seo/PublicPrayerPage';
import { PublicDhikrPage } from './components/seo/PublicDhikrPage';
import { PublicAboutPage } from './components/seo/PublicAboutPage';
import { PublicContactPage } from './components/seo/PublicContactPage';
import { ProtectedProfilePage } from './components/profile/ProtectedProfilePage';
import { Play, Pause, X, Volume2, SkipBack, SkipForward } from 'lucide-react';

const MainLayout: React.FC = () => {
  const {
    audioState,
    pauseAudioVerse,
    resumeAudioVerse,
    stopAudioVerse,
    playNextVerse,
    playPreviousVerse,
  } = useApp();

  return (
    <div className="min-h-screen bg-[#F7F9FC] dark:bg-[#0B1320] text-[#1F3A5F] dark:text-[#F7F9FC] transition-colors duration-300 relative flex flex-col font-sans">
      <GeometricPattern />
      <Header />

      <main className="flex-1 z-10">
        <Routes>
          {/* Public SEO Friendly Routes */}
          <Route path="/" element={<PublicHomePage />} />
          <Route path="/quran" element={<PublicQuranPage />} />
          <Route path="/tajweed" element={<PublicTajweedPage />} />
          <Route path="/ai-quran" element={<PublicAiQuranPage />} />
          <Route path="/ai" element={<Navigate to="/ai-quran" replace />} />
          <Route path="/quran-tafsir" element={<PublicTafsirPage />} />
          <Route path="/quran-pronunciation" element={<PublicPronunciationPage />} />
          <Route path="/arabic-roots" element={<PublicArabicRootsPage />} />
          <Route path="/islamic-learning" element={<PublicIslamicLearningPage />} />
          
          {/* Noorani Qaida Dedicated & Alias Routes */}
          <Route path="/noorani-qaida" element={<PublicNooraniQaidaPage />} />
          <Route path="/interactive-noorani-qaida" element={<PublicNooraniQaidaPage />} />
          <Route path="/qaida" element={<Navigate to="/noorani-qaida" replace />} />
          <Route path="/nooraniqaida" element={<Navigate to="/noorani-qaida" replace />} />
          <Route path="/learn/noorani-qaida" element={<PublicNooraniQaidaPage />} />
          <Route path="/learn/qaida" element={<Navigate to="/noorani-qaida" replace />} />

          {/* Standard Navigation Routes */}
          <Route path="/learn" element={<PublicLearnPage />} />
          <Route path="/prayer" element={<PublicPrayerPage />} />
          <Route path="/dhikr" element={<PublicDhikrPage />} />
          
          {/* About & Contact Routes */}
          <Route path="/about" element={<PublicAboutPage />} />
          <Route path="/about-us" element={<Navigate to="/about" replace />} />
          <Route path="/contact" element={<PublicContactPage />} />
          <Route path="/contact-us" element={<Navigate to="/contact" replace />} />
          <Route path="/support" element={<Navigate to="/contact" replace />} />
          <Route path="/feedback" element={<Navigate to="/contact" replace />} />

          {/* Protected Profile Route (Protected via LoginGate when unauthenticated) */}
          <Route path="/profile" element={<ProtectedProfilePage />} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Persistent Audio Player Floating Bar */}
      {audioState.surahNumber !== null && (
        <div className="fixed bottom-20 left-4 right-4 z-40 max-w-lg mx-auto bg-gradient-to-r from-[#1F3A5F] via-[#162A45] to-[#0F1C2E] text-white rounded-2xl p-3 shadow-xl border border-[#6E8FB5]/40 flex items-center justify-between backdrop-blur-md animate-slide-up">
          <div className="flex items-center space-x-3 overflow-hidden">
            <div className="w-9 h-9 rounded-xl bg-[#6E8FB5] text-white flex-shrink-0 flex items-center justify-center font-bold text-xs shadow">
              <Volume2 className="w-5 h-5 animate-pulse" />
            </div>
            <div className="min-w-0">
              <div className="text-xs font-extrabold text-[#F7F9FC] truncate">
                Surah #{audioState.surahNumber} • Ayah #{audioState.ayahNumber}
              </div>
              <div className="text-[10px] text-[#C7CEDB] font-medium truncate flex items-center space-x-1">
                <span>{audioState.reciterName || 'Classical Recitation'}</span>
                <span className="text-amber-400 font-bold">• Continuous</span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-1 flex-shrink-0">
            <button
              onClick={playPreviousVerse}
              className="p-1.5 rounded-full hover:bg-white/10 text-[#C7CEDB] transition-colors"
              title="Previous Ayah"
            >
              <SkipBack className="w-4 h-4" />
            </button>
            <button
              onClick={() => (audioState.isPlaying ? pauseAudioVerse() : resumeAudioVerse())}
              className="p-2 rounded-full bg-[#6E8FB5] text-white hover:bg-[#5C7DA3] shadow transition-transform active:scale-95 mx-0.5"
              title={audioState.isPlaying ? 'Pause' : 'Play'}
            >
              {audioState.isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
            </button>
            <button
              onClick={playNextVerse}
              className="p-1.5 rounded-full hover:bg-white/10 text-[#C7CEDB] transition-colors"
              title="Next Ayah"
            >
              <SkipForward className="w-4 h-4" />
            </button>
            <button
              onClick={stopAudioVerse}
              className="p-1.5 rounded-full hover:bg-white/10 text-[#C7CEDB] transition-colors ml-1"
              title="Close Player"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      <BottomNav />
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AppProvider>
          <MainLayout />
        </AppProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
