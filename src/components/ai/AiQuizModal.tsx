import React, { useState } from 'react';
import { X, CheckCircle2, XCircle, Sparkles, Award, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { QuizData } from '../../types';

export const AiQuizModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  quizData: QuizData | null;
}> = ({ isOpen, onClose, quizData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [showResult, setShowResult] = useState(false);

  if (!isOpen || !quizData) return null;

  const currentQ = quizData.questions[currentIndex];

  const handleSelectOption = (qIdx: number, optIdx: number) => {
    if (showResult) return;
    setSelectedAnswers((prev) => ({ ...prev, [qIdx]: optIdx }));
  };

  const handleNextQuestion = () => {
    if (currentIndex < quizData.questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setShowResult(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  };

  const calculateScore = () => {
    let score = 0;
    quizData.questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctIndex) score++;
    });
    return score;
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setSelectedAnswers({});
    setShowResult(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-lg bg-white dark:bg-[#18221D] rounded-3xl p-6 border border-emerald-900/10 dark:border-emerald-500/20 shadow-2xl space-y-5 max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-emerald-900/10 dark:border-emerald-500/10 pb-3">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-amber-500" />
            <h3 className="text-base font-bold text-emerald-950 dark:text-emerald-50">
              {quizData.quizTitle}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-emerald-100 dark:hover:bg-emerald-900/40 text-emerald-800 dark:text-emerald-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!showResult ? (
          <div className="space-y-4 flex-1 flex flex-col justify-between">
            {/* Progress indicator */}
            <div className="flex items-center justify-between text-xs font-semibold text-emerald-800 dark:text-emerald-300">
              <span>
                Question {currentIndex + 1} of {quizData.questions.length}
              </span>
              <span className="text-amber-600 dark:text-amber-400 font-bold">
                {Math.round(((currentIndex + 1) / quizData.questions.length) * 100)}%
              </span>
            </div>

            {/* Question Card */}
            <div className="p-5 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/40 border border-emerald-900/10 dark:border-emerald-500/20 space-y-4">
              <h4 className="text-sm md:text-base font-bold text-emerald-950 dark:text-emerald-50 leading-relaxed">
                {currentQ?.question}
              </h4>

              <div className="space-y-2">
                {(currentQ?.options || []).map((option, optIdx) => {
                  const isSelected = selectedAnswers[currentIndex] === optIdx;
                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelectOption(currentIndex, optIdx)}
                      className={`w-full p-3.5 rounded-xl border text-left text-xs md:text-sm font-semibold transition-all flex items-center justify-between ${
                        isSelected
                          ? 'bg-emerald-700 text-amber-300 border-emerald-700 shadow-md'
                          : 'bg-white dark:bg-[#141C18] text-emerald-950 dark:text-emerald-100 border-emerald-900/10 dark:border-emerald-500/20 hover:border-emerald-500/40'
                      }`}
                    >
                      <span>{option}</span>
                      {isSelected && <CheckCircle2 className="w-4 h-4 text-amber-300" />}
                    </button>
                  );
                })}
              </div>
            </div>

            <button
              onClick={handleNextQuestion}
              disabled={selectedAnswers[currentIndex] === undefined}
              className={`w-full py-3 rounded-2xl text-xs md:text-sm font-bold shadow transition-all ${
                selectedAnswers[currentIndex] === undefined
                  ? 'bg-emerald-200 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-500 cursor-not-allowed'
                  : 'bg-emerald-700 text-amber-300 hover:bg-emerald-800'
              }`}
            >
              {currentIndex < quizData.questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
            </button>
          </div>
        ) : (
          /* Results Summary */
          <div className="space-y-6 text-center py-4">
            <div className="w-20 h-20 rounded-full bg-amber-500/20 text-amber-500 flex items-center justify-center mx-auto border-2 border-amber-400">
              <Award className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-black text-emerald-950 dark:text-emerald-50">
                Quiz Completed!
              </h3>
              <p className="text-sm font-bold text-emerald-800 dark:text-emerald-300">
                You scored <span className="text-amber-500 font-extrabold text-xl">{calculateScore()}</span> out of{' '}
                {quizData.questions.length}
              </p>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={handleReset}
                className="flex-1 py-3 rounded-2xl bg-emerald-100 dark:bg-emerald-900/40 text-emerald-900 dark:text-emerald-100 text-xs font-bold flex items-center justify-center space-x-1.5"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Retry Quiz</span>
              </button>
              <button
                onClick={onClose}
                className="flex-1 py-3 rounded-2xl bg-emerald-700 text-amber-300 text-xs font-bold shadow hover:bg-emerald-800"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
