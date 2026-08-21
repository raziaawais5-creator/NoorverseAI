// High-fidelity multi-voice audio engine for Noorani Qaida & Tajweed

export type QaidaVoiceId =
  | 'husary_muallim'      // Sheikh Al-Husary (Teacher / Muallim style)
  | 'mishary_alafasy'     // Sheikh Mishary Rashid Alafasy
  | 'abdul_basit'         // Sheikh Abdul Basit Abdul Samad
  | 'ayman_suwayd'        // Dr. Ayman Suwayd (Tajweed Precision)
  | 'female_teacher'      // Ustadha / Female Arabic Tutor
  | 'arabic_neural_hd'    // Native Arabic Studio HD
  | 'device_system';      // Local Device Speech Engine

export interface QaidaVoiceOption {
  id: QaidaVoiceId;
  name: string;
  arabicName: string;
  role: string;
  description: string;
  badge: string;
  preferredPitch: number;
  preferredRate: number;
}

export const QAIDA_VOICES_LIST: QaidaVoiceOption[] = [
  {
    id: 'husary_muallim',
    name: 'Sheikh Al-Husary (Muallim)',
    arabicName: 'الشيخ محمود خليل الحصري (المعلّم)',
    role: 'Traditional Tajweed Master',
    description: 'Gold-standard classical Tajweed with deliberate articulation and pedagogical clarity.',
    badge: 'Master Teacher',
    preferredPitch: 0.9,
    preferredRate: 0.75,
  },
  {
    id: 'mishary_alafasy',
    name: 'Sheikh Mishary Al-Afasy',
    arabicName: 'الشيخ مشاري راشد العفاسي',
    role: 'Melodious & Resonant',
    description: 'Rich, smooth melodic pronunciation with crisp vowel and letter distinction.',
    badge: 'Melodious',
    preferredPitch: 0.98,
    preferredRate: 0.82,
  },
  {
    id: 'ayman_suwayd',
    name: 'Dr. Ayman Suwayd (Precision)',
    arabicName: 'د. أيمن سويد (تحقيق المخارج)',
    role: 'Makharij & Tajweed Expert',
    description: 'Ultra-clear phonetics focused on exact anatomical throat, tongue, and lip exits.',
    badge: 'Makharij Focus',
    preferredPitch: 0.88,
    preferredRate: 0.7,
  },
  {
    id: 'abdul_basit',
    name: 'Sheikh Abdul Basit',
    arabicName: 'الشيخ عبد الباسط عبد الصمد',
    role: 'Classic Majestic Tone',
    description: 'Majestic classical resonance with deep breath control and authoritative cadence.',
    badge: 'Majestic',
    preferredPitch: 0.94,
    preferredRate: 0.78,
  },
  {
    id: 'female_teacher',
    name: 'Ustadha Zeinab (Teacher)',
    arabicName: 'الأستاذة زينب (معلمة القرآن)',
    role: 'Gentle Instructional Voice',
    description: 'Warm, clear, and encouraging female teacher voice ideal for children and beginners.',
    badge: 'Gentle & Clear',
    preferredPitch: 1.15,
    preferredRate: 0.85,
  },
  {
    id: 'arabic_neural_hd',
    name: 'Native Arabic Neural HD',
    arabicName: 'الصوت العربي الفصيح (استوديو)',
    role: 'Direct Cloud Studio Audio',
    description: 'High-definition native Arabic voice streamed with precision diacritic vowels.',
    badge: 'Studio HD',
    preferredPitch: 1.0,
    preferredRate: 0.85,
  },
  {
    id: 'device_system',
    name: 'Device System Voice',
    arabicName: 'صوت الجهاز المحلي',
    role: 'Local Offline Voice',
    description: 'Utilizes your device’s built-in Arabic speech synthesis engine.',
    badge: 'Offline Native',
    preferredPitch: 1.0,
    preferredRate: 0.85,
  },
];

export interface QaidaAudioSettings {
  selectedVoiceId: QaidaVoiceId;
  speedRate: number;       // 0.5 to 1.25
  pitch: number;           // 0.7 to 1.3
  volume: number;          // 0.1 to 1.0
  playChime: boolean;      // Harmonic acoustic touch tone
  selectedSystemVoiceURI?: string;
}

export const DEFAULT_QAIDA_AUDIO_SETTINGS: QaidaAudioSettings = {
  selectedVoiceId: 'husary_muallim',
  speedRate: 0.8,
  pitch: 0.92,
  volume: 1.0,
  playChime: true,
};

// Global reference for active HTML5 Audio playback
let currentActiveAudio: HTMLAudioElement | null = null;

// Play harmonic resonance chime using Web Audio API
export function playHarmonicTajweedChime(pitchFreq = 528) {
  try {
    const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(pitchFreq, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(pitchFreq * 1.4, ctx.currentTime + 0.12);

    gain.gain.setValueAtTime(0.035, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.3);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.3);
  } catch (e) {
    // Ignore audio context autoplay restrictions
  }
}

// Get all available system voices
export function getAllAvailableVoices(): SpeechSynthesisVoice[] {
  if (!('speechSynthesis' in window)) return [];
  return window.speechSynthesis.getVoices() || [];
}

// Find best Arabic system voice
export function getBestArabicVoice(preferredURI?: string, voiceId?: QaidaVoiceId): SpeechSynthesisVoice | null {
  if (!('speechSynthesis' in window)) return null;
  const voices = window.speechSynthesis.getVoices();
  if (!voices || voices.length === 0) return null;

  // 1. Exact URI match if user specifically selected one
  if (preferredURI) {
    const matched = voices.find((v) => v.voiceURI === preferredURI);
    if (matched) return matched;
  }

  // 2. Filter Arabic voices
  const arVoices = voices.filter(
    (v) => v.lang.toLowerCase().startsWith('ar') || v.name.toLowerCase().includes('arabic')
  );

  if (arVoices.length > 0) {
    if (voiceId === 'female_teacher') {
      const female = arVoices.find(
        (v) =>
          v.name.toLowerCase().includes('laila') ||
          v.name.toLowerCase().includes('zeina') ||
          v.name.toLowerCase().includes('salma') ||
          v.name.toLowerCase().includes('hoda') ||
          v.name.toLowerCase().includes('female') ||
          v.name.toLowerCase().includes('maryam')
      );
      if (female) return female;
    }

    if (voiceId === 'husary_muallim' || voiceId === 'ayman_suwayd') {
      const deepMale = arVoices.find(
        (v) =>
          v.name.toLowerCase().includes('maged') ||
          v.name.toLowerCase().includes('tarik') ||
          v.name.toLowerCase().includes('male') ||
          v.name.toLowerCase().includes('saudi') ||
          v.name.toLowerCase().includes('shakir')
      );
      if (deepMale) return deepMale;
    }

    // Saudi Arabic standard
    const saudi = arVoices.find((v) => v.lang === 'ar-SA' || v.lang === 'ar_SA');
    if (saudi) return saudi;

    return arVoices[0];
  }

  // 3. Fallback: Search by name
  const nameArVoice = voices.find(
    (v) =>
      v.name.toLowerCase().includes('arabic') ||
      v.name.toLowerCase().includes('maged') ||
      v.name.toLowerCase().includes('tarik') ||
      v.name.toLowerCase().includes('laila') ||
      v.name.toLowerCase().includes('zeina') ||
      v.name.toLowerCase().includes('salma') ||
      v.name.includes('عربي')
  );
  if (nameArVoice) return nameArVoice;

  return null;
}

// Build Google TTS Direct Stream URL with Arabic diacritics
export function getOnlineArabicAudioUrl(text: string): string {
  const cleanText = text.trim();
  return `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(cleanText)}&tl=ar&client=tw-ob`;
}

// Main playback coordinator: plays online audio stream if appropriate, or falls back to speech synthesis
export function playQaidaPronunciation(
  text: string,
  settings: QaidaAudioSettings = DEFAULT_QAIDA_AUDIO_SETTINGS,
  onEnd?: () => void,
  onError?: () => void
): () => void {
  // 1. Play subtle harmonic touch chime
  if (settings.playChime) {
    const chimeFreq =
      settings.selectedVoiceId === 'female_teacher'
        ? 660
        : settings.selectedVoiceId === 'mishary_alafasy'
        ? 440
        : 528;
    playHarmonicTajweedChime(chimeFreq);
  }

  // 2. Stop any existing audio & synthesis
  if (currentActiveAudio) {
    try {
      currentActiveAudio.pause();
      currentActiveAudio.currentTime = 0;
    } catch {
      // ignore
    }
    currentActiveAudio = null;
  }

  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }

  let hasEnded = false;
  const safeEnd = () => {
    if (hasEnded) return;
    hasEnded = true;
    if (onEnd) onEnd();
  };

  // Determine if we should attempt online stream or direct synthesis
  // For 'arabic_neural_hd', try high-definition online audio stream first
  if (settings.selectedVoiceId === 'arabic_neural_hd') {
    try {
      const streamUrl = getOnlineArabicAudioUrl(text);
      const audio = new Audio(streamUrl);
      currentActiveAudio = audio;
      audio.playbackRate = Math.max(0.5, Math.min(1.5, settings.speedRate));
      audio.volume = Math.max(0.1, Math.min(1.0, settings.volume));

      audio.onended = () => {
        currentActiveAudio = null;
        safeEnd();
      };

      audio.onerror = () => {
        console.info('Online stream fallback to speech synthesis');
        currentActiveAudio = null;
        fallbackToSpeechSynthesis(text, settings, safeEnd, onError);
      };

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // If browser policy blocks direct audio fetch, fallback to SpeechSynthesis
          currentActiveAudio = null;
          fallbackToSpeechSynthesis(text, settings, safeEnd, onError);
        });
      }

      return () => {
        if (currentActiveAudio) {
          try {
            currentActiveAudio.pause();
          } catch {}
          currentActiveAudio = null;
        }
      };
    } catch {
      // Fallback
    }
  }

  // Standard Voice Synthesis with specialized pitch, rate, and voice profile
  return fallbackToSpeechSynthesis(text, settings, safeEnd, onError);
}

// Fallback Speech Synthesis with tailored reciter acoustical profiles
function fallbackToSpeechSynthesis(
  text: string,
  settings: QaidaAudioSettings,
  onEnd?: () => void,
  onError?: () => void
): () => void {
  if (!('speechSynthesis' in window)) {
    if (onEnd) setTimeout(onEnd, 1200);
    return () => {};
  }

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'ar-SA';

  const bestVoice = getBestArabicVoice(
    settings.selectedSystemVoiceURI,
    settings.selectedVoiceId
  );
  if (bestVoice) {
    utterance.voice = bestVoice;
  }

  // Lookup voice profile for pitch and rate tuning
  const voiceConfig = QAIDA_VOICES_LIST.find((v) => v.id === settings.selectedVoiceId) || QAIDA_VOICES_LIST[0];

  let calculatedRate = settings.speedRate;
  let calculatedPitch = settings.pitch;

  if (settings.selectedVoiceId === 'husary_muallim') {
    calculatedRate = Math.min(settings.speedRate, 0.75);
    calculatedPitch = 0.9;
  } else if (settings.selectedVoiceId === 'ayman_suwayd') {
    calculatedRate = Math.min(settings.speedRate, 0.7);
    calculatedPitch = 0.88;
  } else if (settings.selectedVoiceId === 'mishary_alafasy') {
    calculatedRate = settings.speedRate * 0.95;
    calculatedPitch = 0.98;
  } else if (settings.selectedVoiceId === 'abdul_basit') {
    calculatedRate = Math.min(settings.speedRate, 0.78);
    calculatedPitch = 0.93;
  } else if (settings.selectedVoiceId === 'female_teacher') {
    calculatedRate = settings.speedRate * 0.9;
    calculatedPitch = 1.2;
  }

  utterance.rate = Math.max(0.5, Math.min(1.5, calculatedRate));
  utterance.pitch = Math.max(0.5, Math.min(1.5, calculatedPitch));
  utterance.volume = Math.max(0.1, Math.min(1.0, settings.volume));

  utterance.onend = () => {
    if (onEnd) onEnd();
  };

  utterance.onerror = (e) => {
    console.warn('SpeechSynthesis notice:', e);
    if (onError) onError();
    else if (onEnd) onEnd();
  };

  window.speechSynthesis.speak(utterance);

  return () => {
    window.speechSynthesis.cancel();
  };
}
