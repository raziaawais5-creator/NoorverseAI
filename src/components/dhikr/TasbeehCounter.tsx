import React, { useState, useEffect, useRef } from 'react';
import {
  RotateCcw,
  Volume2,
  VolumeX,
  Sparkles,
  CheckCircle2,
  Plus,
  Play,
  Pause,
  SlidersHorizontal,
  X,
  Award,
  Flame,
  Globe,
  Settings,
} from 'lucide-react';
import { TASBEEH_PRESETS } from '../../data/adhkarData';

interface CustomDhikr {
  label: string;
  arabic: string;
  transliteration: string;
  translation: string;
  virtue?: string;
  target: number;
}

export const TasbeehCounter: React.FC = () => {
  const [presets, setPresets] = useState<CustomDhikr[]>(TASBEEH_PRESETS);
  const [selectedPresetIndex, setSelectedPresetIndex] = useState<number>(0);
  const selectedPreset = presets[selectedPresetIndex] || presets[0];

  const [count, setCount] = useState<number>(0);
  const [totalLaps, setTotalLaps] = useState<number>(0);
  const [todayTotalCount, setTodayTotalCount] = useState<number>(() => {
    const saved = localStorage.getItem('noor_tasbeeh_today_count');
    return saved ? parseInt(saved, 10) : 0;
  });

  const [customTarget, setCustomTarget] = useState<number>(selectedPreset.target);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [vibrationEnabled, setVibrationEnabled] = useState<boolean>(true);
  const [isAutoCounting, setIsAutoCounting] = useState<boolean>(false);
  const [autoSpeed, setAutoSpeed] = useState<number>(1500); // ms per step

  // Modals
  const [showAddCustomModal, setShowAddCustomModal] = useState<boolean>(false);
  const [showCompletionModal, setShowCompletionModal] = useState<boolean>(false);

  // New Custom Dhikr Form State
  const [newLabel, setNewLabel] = useState('');
  const [newArabic, setNewArabic] = useState('');
  const [newTransliteration, setNewTransliteration] = useState('');
  const [newTranslation, setNewTranslation] = useState('');
  const [newTarget, setNewTarget] = useState('100');

  // Keep track of custom target when preset changes
  useEffect(() => {
    setCustomTarget(selectedPreset.target);
    setCount(0);
    setTotalLaps(0);
    setIsAutoCounting(false);
  }, [selectedPresetIndex]);

  // Audio Synth Helper
  const playBeep = (type: 'click' | 'complete') => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      if (type === 'click') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(650, ctx.currentTime);
        gain.gain.setValueAtTime(0.12, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
        osc.start();
        osc.stop(ctx.currentTime + 0.04);
      } else {
        // Round completion chime
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
        osc.frequency.exponentialRampToValueAtTime(783.99, ctx.currentTime + 0.2); // G5
        gain.gain.setValueAtTime(0.2, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
        osc.start();
        osc.stop(ctx.currentTime + 0.4);
      }
    } catch (e) {
      // Audio synth optional fallback
    }
  };

  const handleIncrement = () => {
    if (vibrationEnabled && 'vibrate' in navigator) {
      try {
        navigator.vibrate(25);
      } catch (e) {
        // ignore
      }
    }

    const nextCount = count + 1;
    const nextTodayTotal = todayTotalCount + 1;
    setTodayTotalCount(nextTodayTotal);
    localStorage.setItem('noor_tasbeeh_today_count', nextTodayTotal.toString());

    if (nextCount >= customTarget) {
      playBeep('complete');
      setCount(0);
      setTotalLaps((prev) => prev + 1);
      setShowCompletionModal(true);
      if (isAutoCounting) setIsAutoCounting(false);
    } else {
      playBeep('click');
      setCount(nextCount);
    }
  };

  // Auto-count interval effect
  useEffect(() => {
    let timer: any = null;
    if (isAutoCounting) {
      timer = setInterval(() => {
        handleIncrement();
      }, autoSpeed);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isAutoCounting, count, customTarget, autoSpeed, soundEnabled, vibrationEnabled, todayTotalCount]);

  // Keyboard shortcut (spacebar)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' && !showAddCustomModal) {
        e.preventDefault();
        handleIncrement();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [count, customTarget, soundEnabled, vibrationEnabled, showAddCustomModal]);

  const handleReset = () => {
    setCount(0);
  };

  const handleCreateCustomDhikr = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLabel.trim()) return;

    const created: CustomDhikr = {
      label: newLabel.trim(),
      arabic: newArabic.trim() || newLabel.trim(),
      transliteration: newTransliteration.trim() || newLabel.trim(),
      translation: newTranslation.trim() || 'Custom Remembrance',
      target: parseInt(newTarget, 10) || 100,
    };

    const updated = [...presets, created];
    setPresets(updated);
    setSelectedPresetIndex(updated.length - 1);
    setShowAddCustomModal(false);

    // Reset form
    setNewLabel('');
    setNewArabic('');
    setNewTransliteration('');
    setNewTranslation('');
    setNewTarget('100');
  };

  // Active bead index on 33-bead visual ring
  const beadProgressRatio = count / customTarget;
  const activeBeadIndex = Math.floor(beadProgressRatio * 33);

  return (
    <div className="space-y-6 flex flex-col items-center max-w-2xl mx-auto">
      {/* Preset Phrases Selector Strip */}
      <div className="w-full flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
        {presets.map((p, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedPresetIndex(idx)}
            className={`px-3.5 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition-all flex items-center space-x-1.5 shrink-0 ${
              selectedPresetIndex === idx
                ? 'bg-emerald-700 text-amber-300 shadow-md ring-2 ring-amber-400/40 scale-105'
                : 'bg-white dark:bg-[#18221D] text-emerald-900 dark:text-emerald-200 border border-emerald-900/10 dark:border-emerald-500/15 hover:bg-emerald-50'
            }`}
          >
            <span>{p.label}</span>
            <span className="text-[10px] opacity-75 font-mono">({p.target})</span>
          </button>
        ))}

        <button
          onClick={() => setShowAddCustomModal(true)}
          className="px-3.5 py-2 rounded-2xl text-xs font-bold bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30 hover:bg-amber-500/25 transition-all flex items-center space-x-1 shrink-0"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Add Custom Dhikr</span>
        </button>
      </div>

      {/* Selected Dhikr Phrase Header Card */}
      <div className="w-full rounded-3xl bg-white dark:bg-[#18221D] p-6 border border-emerald-900/10 dark:border-emerald-500/15 shadow-sm space-y-3 text-center relative overflow-hidden">
        <div className="flex items-center justify-between text-xs text-emerald-800/60 dark:text-emerald-400/60 font-medium border-b border-emerald-900/5 dark:border-emerald-500/10 pb-2">
          <span className="font-bold text-amber-600 dark:text-amber-400 flex items-center space-x-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{selectedPreset.label}</span>
          </span>
          <div className="flex items-center space-x-2 font-mono">
            <span>Daily Total: <strong>{todayTotalCount}</strong></span>
          </div>
        </div>

        <div className="font-serif text-3xl md:text-4xl font-bold text-emerald-950 dark:text-emerald-50 leading-relaxed dir-rtl py-1">
          {selectedPreset.arabic}
        </div>

        <p className="text-xs font-semibold text-amber-700 dark:text-amber-300">
          {selectedPreset.transliteration}
        </p>

        <p className="text-xs text-emerald-900/80 dark:text-emerald-200/80 italic">
          "{selectedPreset.translation}"
        </p>

        {selectedPreset.virtue && (
          <div className="mt-2 text-[11px] text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 p-2.5 rounded-2xl border border-emerald-900/5 dark:border-emerald-500/10 font-medium">
            ✨ {selectedPreset.virtue}
          </div>
        )}
      </div>

      {/* Main Digital Tasbeeh Physical Ring & Counter Display */}
      <div className="w-full rounded-3xl bg-gradient-to-b from-[#182B21] via-[#101E17] to-[#0A140F] p-6 text-white border-2 border-emerald-600/30 shadow-2xl flex flex-col items-center space-y-6 relative overflow-hidden">
        
        {/* Top Control Settings Strip */}
        <div className="w-full flex items-center justify-between z-10">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className={`p-2 rounded-xl text-xs font-bold transition-all border ${
                soundEnabled
                  ? 'bg-emerald-600/30 text-amber-300 border-amber-400/30'
                  : 'bg-white/5 text-gray-400 border-white/10'
              }`}
              title={soundEnabled ? 'Mute Audio Beep' : 'Enable Audio Beep'}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setIsAutoCounting(!isAutoCounting)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all border flex items-center space-x-1.5 ${
                isAutoCounting
                  ? 'bg-amber-500 text-emerald-950 border-amber-400 animate-pulse font-extrabold'
                  : 'bg-white/5 text-emerald-200 border-white/10 hover:bg-white/10'
              }`}
            >
              {isAutoCounting ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isAutoCounting ? 'Auto On' : 'Auto Play'}</span>
            </button>

            {isAutoCounting && (
              <select
                value={autoSpeed}
                onChange={(e) => setAutoSpeed(Number(e.target.value))}
                className="bg-emerald-950 text-amber-300 border border-emerald-700/50 text-[10px] rounded-lg px-1.5 py-1 font-mono focus:outline-none"
              >
                <option value={2000}>2.0s</option>
                <option value={1500}>1.5s</option>
                <option value={1000}>1.0s</option>
                <option value={600}>0.6s</option>
              </select>
            )}
          </div>

          {/* Quick Target Selector Dropdown */}
          <div className="flex items-center space-x-1.5">
            <span className="text-[10px] text-emerald-300/80 font-bold uppercase tracking-wider">Goal:</span>
            <div className="flex rounded-xl bg-emerald-950/80 p-1 border border-emerald-700/40">
              {[33, 100, 500, 1000].map((t) => (
                <button
                  key={t}
                  onClick={() => {
                    setCustomTarget(t);
                    setCount(0);
                  }}
                  className={`px-2 py-0.5 text-[10px] font-bold rounded-lg transition-all ${
                    customTarget === t
                      ? 'bg-amber-400 text-emerald-950 font-black'
                      : 'text-emerald-300 hover:text-white'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Realistic Digital LCD Screen Unit */}
        <div className="w-full max-w-md rounded-2xl bg-[#09150E] p-4 border-2 border-emerald-500/40 shadow-inner flex flex-col items-center justify-center relative">
          <div className="absolute top-2 left-3 text-[9px] font-mono text-emerald-500/70 uppercase tracking-widest">
            DIGITAL TALLY COUNTER
          </div>
          <div className="absolute top-2 right-3 text-[9px] font-mono text-amber-400/80 font-bold">
            LAP: {totalLaps}
          </div>

          {/* Green Glow Digital LED Display */}
          <div className="my-3 font-mono text-6xl md:text-7xl font-black text-amber-300 tracking-widest drop-shadow-[0_0_12px_rgba(251,191,36,0.6)] select-none">
            {String(count).padStart(3, '0')}
          </div>

          <div className="w-full flex items-center justify-between text-[11px] font-mono text-emerald-300/80 border-t border-emerald-800/50 pt-2 px-1">
            <span>TARGET: {customTarget}</span>
            <span>REMAINING: {customTarget - count}</span>
          </div>
        </div>

        {/* Visual 33-Beads Physical Ring Animation */}
        <div className="relative w-64 h-64 flex items-center justify-center my-2">
          {/* Circular Track Ring */}
          <div className="absolute inset-0 rounded-full border-4 border-emerald-800/40 border-dashed animate-spin-slow"></div>

          {/* Beads arranged in circle */}
          {Array.from({ length: 33 }).map((_, idx) => {
            const angle = (idx / 33) * 360 - 90; // degrees
            const radius = 105; // px
            const x = radius * Math.cos((angle * Math.PI) / 180);
            const y = radius * Math.sin((angle * Math.PI) / 180);

            const isPassed = idx <= activeBeadIndex;

            return (
              <div
                key={idx}
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
                className={`absolute w-4 h-4 rounded-full transition-all duration-300 shadow-md ${
                  isPassed
                    ? 'bg-amber-400 scale-125 border border-amber-200 ring-2 ring-amber-400/50'
                    : 'bg-emerald-900 border border-emerald-700/60 opacity-60'
                }`}
              />
            );
          })}

          {/* Large Central Tap Button */}
          <button
            onClick={handleIncrement}
            className="w-40 h-40 rounded-full bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-900 text-white flex flex-col items-center justify-center shadow-[0_10px_30px_rgba(16,185,129,0.3)] border-4 border-amber-400/90 hover:scale-105 active:scale-95 transition-all cursor-pointer group select-none relative z-10"
          >
            <span className="text-xs font-bold uppercase text-amber-300 tracking-wider group-hover:scale-110 transition-transform">
              TAP / SPACE
            </span>
            <span className="font-mono text-3xl font-black text-white mt-1">
              +1
            </span>
            <span className="text-[10px] text-emerald-200/80 font-medium mt-0.5">
              Click to Count
            </span>
          </button>
        </div>

        {/* Bottom Control Actions (Reset & Laps) */}
        <div className="w-full flex items-center justify-between pt-2 border-t border-emerald-800/40 z-10">
          <button
            onClick={handleReset}
            className="px-4 py-2 rounded-2xl bg-white/10 hover:bg-white/20 text-emerald-100 text-xs font-bold flex items-center space-x-1.5 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Counter</span>
          </button>

          <div className="flex items-center space-x-2 text-xs font-bold text-amber-300">
            <Award className="w-4 h-4 text-amber-400" />
            <span>Completed Laps: {totalLaps}</span>
          </div>
        </div>
      </div>

      {/* Completion Modal / Celebration Overlay */}
      {showCompletionModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-sm rounded-3xl bg-white dark:bg-[#18221D] p-6 border border-emerald-900/10 dark:border-emerald-500/20 shadow-2xl text-center space-y-4 animate-scale-up">
            <div className="w-16 h-16 rounded-full bg-amber-400/20 text-amber-500 flex items-center justify-center mx-auto border border-amber-400/40">
              <Sparkles className="w-8 h-8 animate-bounce" />
            </div>

            <div>
              <h3 className="text-xl font-black text-emerald-950 dark:text-emerald-50">
                MashaAllah! Goal Reached!
              </h3>
              <p className="text-xs text-emerald-800/70 dark:text-emerald-300/70 mt-1">
                You completed <strong>{customTarget}</strong> counts of <strong>{selectedPreset.label}</strong>.
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-900/30 text-xs text-emerald-900 dark:text-emerald-200 italic border border-emerald-900/5">
              "{selectedPreset.virtue || 'May Allah accept your dhikr and fill your heart with light and tranquility.'}"
            </div>

            <div className="pt-2 flex items-center space-x-2">
              <button
                onClick={() => {
                  setShowCompletionModal(false);
                  setCount(0);
                }}
                className="flex-1 py-3 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-amber-300 text-xs font-bold shadow-md transition-colors"
              >
                Start Next Lap
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Custom Dhikr Modal */}
      {showAddCustomModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-md rounded-3xl bg-white dark:bg-[#18221D] p-6 border border-emerald-900/10 dark:border-emerald-500/20 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-emerald-900/10 dark:border-emerald-500/15 pb-3">
              <h3 className="text-lg font-bold text-emerald-950 dark:text-emerald-50">
                Create Custom Dhikr
              </h3>
              <button
                onClick={() => setShowAddCustomModal(false)}
                className="p-1 rounded-full text-emerald-800 dark:text-emerald-200 hover:bg-emerald-50 dark:hover:bg-emerald-900/30"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateCustomDhikr} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-emerald-900 dark:text-emerald-200 mb-1">
                  Title / Name (e.g., Hasbi Allah)
                </label>
                <input
                  type="text"
                  required
                  value={newLabel}
                  onChange={(e) => setNewLabel(e.target.value)}
                  placeholder="e.g. Hasbi Allah"
                  className="w-full px-3 py-2 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-900/10 dark:border-emerald-500/20 text-xs text-emerald-950 dark:text-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-emerald-900 dark:text-emerald-200 mb-1">
                  Arabic Text (Optional)
                </label>
                <input
                  type="text"
                  value={newArabic}
                  onChange={(e) => setNewArabic(e.target.value)}
                  placeholder="e.g. حَسْبِيَ اللَّهُ"
                  className="w-full px-3 py-2 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-900/10 dark:border-emerald-500/20 text-xs font-serif text-right text-emerald-950 dark:text-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-emerald-900 dark:text-emerald-200 mb-1">
                  Transliteration (Optional)
                </label>
                <input
                  type="text"
                  value={newTransliteration}
                  onChange={(e) => setNewTransliteration(e.target.value)}
                  placeholder="e.g. Hasbi Allahu la ilaha illa Hu"
                  className="w-full px-3 py-2 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-900/10 dark:border-emerald-500/20 text-xs text-emerald-950 dark:text-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-emerald-900 dark:text-emerald-200 mb-1">
                  Target Count
                </label>
                <select
                  value={newTarget}
                  onChange={(e) => setNewTarget(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-900/10 dark:border-emerald-500/20 text-xs text-emerald-950 dark:text-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-600 cursor-pointer"
                >
                  <option value="33" className="dark:bg-[#18221D]">33</option>
                  <option value="100" className="dark:bg-[#18221D]">100</option>
                  <option value="500" className="dark:bg-[#18221D]">500</option>
                  <option value="1000" className="dark:bg-[#18221D]">1000</option>
                  <option value="5000" className="dark:bg-[#18221D]">5000</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-amber-300 text-xs font-bold shadow-md transition-colors"
                >
                  Save & Switch to Custom Dhikr
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
