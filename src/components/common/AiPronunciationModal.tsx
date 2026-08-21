import React, { useState, useRef, useEffect } from 'react';
import {
  Mic,
  Square,
  Sparkles,
  Volume2,
  X,
  AlertTriangle,
  CheckCircle,
  HelpCircle,
  RefreshCw,
  Award,
  ChevronRight,
  ShieldAlert,
} from 'lucide-react';
import { analyzePronunciation, PronunciationAnalysisResult } from '../../services/api';
import { useApp } from '../../context/AppContext';

interface AiPronunciationModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetText: string;
  itemTitle: string;
  transliteration?: string;
  type: 'qaida' | 'quran';
  makhrajDefault?: string;
}

export const AiPronunciationModal: React.FC<AiPronunciationModalProps> = ({
  isOpen,
  onClose,
  targetText,
  itemTitle,
  transliteration,
  type,
  makhrajDefault,
}) => {
  const { isPremium, openUpgradeModal, userCurrency } = useApp();
  const [isRecording, setIsRecording] = useState(false);
  const [recordingSeconds, setRecordingSeconds] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<PronunciationAnalysisResult | null>(null);
  const [isPlayingRefAudio, setIsPlayingRefAudio] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<any>(null);

  useEffect(() => {
    if (!isOpen) {
      resetState();
    }
  }, [isOpen]);

  const resetState = () => {
    setIsRecording(false);
    setRecordingSeconds(0);
    setIsAnalyzing(false);
    setResult(null);
    setErrorMessage(null);
    if (timerRef.current) clearInterval(timerRef.current);
  };

  if (!isOpen) return null;

  const handlePlayReference = () => {
    setIsPlayingRefAudio(true);
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(targetText);
      utterance.lang = 'ar-SA';
      utterance.rate = 0.8; // slightly slower for tajweed clarity
      utterance.onend = () => setIsPlayingRefAudio(false);
      utterance.onerror = () => setIsPlayingRefAudio(false);
      window.speechSynthesis.speak(utterance);
    } else {
      setTimeout(() => setIsPlayingRefAudio(false), 1200);
    }
  };

  const startRecording = async () => {
    if (!isPremium) {
      openUpgradeModal('AI Voice Tajweed Pronunciation Coach');
      return;
    }
    setErrorMessage(null);
    setResult(null);
    audioChunksRef.current = [];

    try {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;

        mediaRecorder.ondataavailable = (e) => {
          if (e.data.size > 0) {
            audioChunksRef.current.push(e.data);
          }
        };

        mediaRecorder.start();
        setIsRecording(true);
        setRecordingSeconds(0);

        timerRef.current = setInterval(() => {
          setRecordingSeconds((prev) => prev + 1);
        }, 1000);
      } else {
        // Fallback for environments without mic stream
        simulateRecording();
      }
    } catch (err) {
      console.warn('Microphone access not available, falling back to instant simulation:', err);
      simulateRecording();
    }
  };

  const simulateRecording = () => {
    setIsRecording(true);
    setRecordingSeconds(0);
    timerRef.current = setInterval(() => {
      setRecordingSeconds((prev) => prev + 1);
    }, 1000);
  };

  const stopRecordingAndAnalyze = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setIsRecording(false);
    setIsAnalyzing(true);

    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        const reader = new FileReader();
        reader.readAsDataURL(audioBlob);
        reader.onloadend = async () => {
          const base64Audio = (reader.result as string).split(',')[1];
          await runAnalysis(base64Audio);
        };
      };
      mediaRecorderRef.current.stop();
      // stop stream tracks
      mediaRecorderRef.current.stream.getTracks().forEach((track) => track.stop());
    } else {
      // simulated analysis
      setTimeout(async () => {
        await runAnalysis(undefined);
      }, 1500);
    }
  };

  const runAnalysis = async (audioBase64?: string) => {
    try {
      const res = await analyzePronunciation({
        targetText,
        itemTitle,
        type,
        audioBase64,
      });
      setResult(res);
    } catch (err: any) {
      setErrorMessage('Could not analyze recitation. Please try again.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="bg-white dark:bg-[#1C1A17] border border-amber-900/20 dark:border-amber-500/20 rounded-3xl max-w-lg w-full p-6 shadow-2xl space-y-5 my-8 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-stone-600 dark:text-stone-300 hover:bg-amber-50 dark:hover:bg-stone-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center space-x-2.5">
          <div className="w-9 h-9 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-500 flex items-center justify-center">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-extrabold text-stone-950 dark:text-stone-50">
              AI Pronunciation & Mistake Analyzer
            </h3>
            <p className="text-xs text-stone-600 dark:text-stone-400">
              {type === 'qaida' ? 'Noorani Qaida Articulation' : 'Quranic Tajweed Verification'}
            </p>
          </div>
        </div>

        {/* Target Card */}
        <div className="p-4 rounded-2xl bg-amber-50/70 dark:bg-stone-900/60 border border-amber-900/10 dark:border-amber-500/15 text-center space-y-2">
          <div className="text-xs font-semibold text-amber-900/70 dark:text-amber-300/70 uppercase tracking-wider">
            {itemTitle}
          </div>
          <div className="font-serif text-3xl font-bold text-stone-950 dark:text-amber-300 dir-rtl py-2">
            {targetText}
          </div>
          {transliteration && (
            <div className="text-xs font-mono text-amber-900 dark:text-amber-300">
              {transliteration}
            </div>
          )}

          <div className="flex items-center justify-center space-x-3 pt-1">
            <button
              onClick={handlePlayReference}
              disabled={isPlayingRefAudio}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-amber-400/20 border border-amber-400/30 text-xs font-bold text-amber-900 dark:text-amber-300 hover:bg-amber-400/30 transition-colors"
            >
              <Volume2 className="w-4 h-4" />
              <span>{isPlayingRefAudio ? 'Playing Correct Sound...' : 'Listen Correct Qari Sound'}</span>
            </button>
          </div>
        </div>

        {/* Recording Controls & Audio Pulse */}
        {!result && !isAnalyzing && (
          <div className="py-4 text-center space-y-4">
            {isRecording ? (
              <div className="space-y-3">
                <div className="relative inline-flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-red-500/20 animate-ping absolute" />
                  <button
                    onClick={stopRecordingAndAnalyze}
                    className="w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg relative z-10 hover:bg-red-700 transition-all scale-105"
                  >
                    <Square className="w-7 h-7 fill-white" />
                  </button>
                </div>

                <div className="flex flex-col items-center">
                  <span className="text-xs font-bold text-red-600 dark:text-red-400 flex items-center space-x-1">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span>Recording... 00:0{recordingSeconds}s</span>
                  </span>
                  <p className="text-xs text-stone-600 dark:text-stone-400 mt-1">
                    Recite clearly into your microphone, then tap stop.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <button
                  onClick={startRecording}
                  className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-amber-700 via-stone-800 to-amber-900 text-amber-200 font-extrabold text-sm shadow-md flex items-center justify-center space-x-2.5 hover:opacity-95 transition-all"
                >
                  <Mic className="w-5 h-5 text-amber-300" />
                  <span>Tap to Record & Check Mistakes</span>
                </button>
                <p className="text-[11px] text-stone-600 dark:text-stone-400 text-center">
                  AI will analyze your speech for Makhraj, elongation (Madd), and heavy/light letter rules.
                </p>
              </div>
            )}
          </div>
        )}

        {/* Analyzing Spinner */}
        {isAnalyzing && (
          <div className="py-8 text-center space-y-3">
            <RefreshCw className="w-9 h-9 text-amber-500 animate-spin mx-auto" />
            <div className="text-sm font-bold text-stone-950 dark:text-stone-50">
              AI Tajweed Engine Analyzing...
            </div>
            <p className="text-xs text-stone-600 dark:text-stone-400">
              Evaluating letter vibration, throat constriction, and rule precision.
            </p>
          </div>
        )}

        {/* Analysis Results Display */}
        {result && (
          <div className="space-y-4 pt-1 animate-fade-in">
            {/* Score Overview Cards */}
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20">
                <div className="text-[10px] font-bold text-amber-800 dark:text-amber-300 uppercase">Overall</div>
                <div className="text-xl font-black text-amber-600 dark:text-amber-400 mt-0.5">
                  {result.overallScore}%
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-stone-500/10 border border-stone-500/20">
                <div className="text-[10px] font-bold text-stone-800 dark:text-stone-300 uppercase">Makhraj</div>
                <div className="text-xl font-black text-stone-700 dark:text-stone-300 mt-0.5">
                  {result.makhrajScore}%
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-orange-500/10 border border-orange-500/20">
                <div className="text-[10px] font-bold text-orange-800 dark:text-orange-300 uppercase">Tajweed</div>
                <div className="text-xl font-black text-orange-700 dark:text-orange-300 mt-0.5">
                  {result.tajweedScore}%
                </div>
              </div>
            </div>

            {/* Detected Mistakes Section */}
            <div className="space-y-2">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-stone-950 dark:text-stone-100 flex items-center space-x-1.5">
                <ShieldAlert className="w-4 h-4 text-amber-500" />
                <span>Detected Pronunciation Mistakes ({result.detectedMistakes.length})</span>
              </h4>

              {result.detectedMistakes.length === 0 ? (
                <div className="p-3 rounded-2xl bg-amber-50 dark:bg-stone-900/60 border border-amber-500/20 text-xs font-semibold text-stone-800 dark:text-stone-200 flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>Excellent! No major pronunciation errors detected. Perfect makhraj timing.</span>
                </div>
              ) : (
                <div className="space-y-2">
                  {result.detectedMistakes.map((mistake, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-2xl bg-amber-50/80 dark:bg-amber-950/40 border border-amber-500/30 text-xs space-y-1"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-extrabold text-amber-900 dark:text-amber-200 flex items-center space-x-1">
                          <AlertTriangle className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                          <span>{mistake.mistakeType}</span>
                        </span>
                        <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-200 dark:bg-amber-900/60 text-amber-900 dark:text-amber-200">
                          Letter: {mistake.letter}
                        </span>
                      </div>
                      <p className="text-amber-950 dark:text-amber-100 font-medium">
                        {mistake.description}
                      </p>
                      <div className="text-[10px] text-amber-800/80 dark:text-amber-300/80 italic font-sans">
                        Location: {mistake.location}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Makhraj Anatomy Guide */}
            {(result.makhrajGuide || makhrajDefault) && (
              <div className="p-3 rounded-2xl bg-stone-950/10 dark:bg-stone-900/60 border border-amber-500/20 text-xs space-y-1">
                <div className="font-extrabold text-stone-900 dark:text-stone-200 flex items-center space-x-1">
                  <HelpCircle className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                  <span>Makhraj (Articulation) Technique:</span>
                </div>
                <p className="text-stone-700 dark:text-stone-300">
                  {result.makhrajGuide || makhrajDefault}
                </p>
              </div>
            )}

            {/* AI Coach Advice */}
            {result.aiCoachAdvice && (
              <div className="p-3 rounded-2xl bg-gradient-to-r from-stone-900 to-amber-950 text-stone-50 border border-amber-500/30 text-xs space-y-1">
                <div className="font-bold text-amber-300 flex items-center space-x-1">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>AI Qari Advice:</span>
                </div>
                <p className="text-stone-200 font-sans leading-relaxed">{result.aiCoachAdvice}</p>
              </div>
            )}

            {/* Re-test Action */}
            <div className="pt-2">
              <button
                onClick={resetState}
                className="w-full py-2.5 px-4 rounded-2xl bg-amber-800/10 dark:bg-amber-500/10 hover:bg-amber-800/20 text-xs font-bold text-amber-900 dark:text-amber-200 flex items-center justify-center space-x-1.5 transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Re-record & Test Again</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
