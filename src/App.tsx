import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/common/Header';
import { BottomNav } from './components/common/BottomNav';
import { GeometricPattern } from './components/common/GeometricPattern';
import { HomeScreen } from './components/home/HomeScreen';
import { QuranScreen } from './components/quran/QuranScreen';
import { LearnScreen } from './components/learn/LearnScreen';
import { PrayerScreen } from './components/prayer/PrayerScreen';
import { DhikrScreen } from './components/dhikr/DhikrScreen';
import { ProfileScreen } from './components/profile/ProfileScreen';
import { AiLearningScreen } from './components/ai/AiLearningScreen';
import { LoginGate } from './components/auth/LoginGate';
import { Play, Pause, X, Volume2, SkipBack, SkipForward } from 'lucide-react';

const MainContent: React.FC = () => {
  const {
    user,
    activeTab,
    audioState,
    pauseAudioVerse,
    resumeAudioVerse,
    stopAudioVerse,
    playNextVerse,
    playPreviousVerse,
  } = useApp();

  if (!user) {
    return <LoginGate />;
  }

  return (
    <div className="min-h-screen bg-[#F7F9FC] dark:bg-[#0B1320] text-[#1F3A5F] dark:text-[#F7F9FC] transition-colors duration-300 relative flex flex-col font-sans">
      <GeometricPattern />
      <Header />

      <main className="flex-1 z-10">
        {activeTab === 'home' && <HomeScreen />}
        {activeTab === 'quran' && <QuranScreen />}
        {activeTab === 'ai' && <AiLearningScreen />}
        {activeTab === 'learn' && <LearnScreen />}
        {activeTab === 'prayer' && <PrayerScreen />}
        {activeTab === 'dhikr' && <DhikrScreen />}
        {activeTab === 'profile' && <ProfileScreen />}
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
    <ThemeProvider>
      <AppProvider>
        <MainContent />
      </AppProvider>
    </ThemeProvider>
  );
}
