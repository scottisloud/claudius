'use client';

import { useState, useEffect } from 'react';
import { QuizQuestion, QuizAttempt } from '@/data/quizzes';

interface QuizProps {
  questions: QuizQuestion[];
  onComplete: (attempts: QuizAttempt[], timeSpent: number) => void;
  domain?: string;
}

export default function Quiz({ questions, onComplete, domain }: QuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | number[])[]>(
    new Array(questions.length).fill(null)
  );
  const [showExplanation, setShowExplanation] = useState(false);
  const [startTime] = useState(Date.now());
  const [questionStartTime, setQuestionStartTime] = useState(Date.now());

  const currentQuestion = questions[currentQuestionIndex];
  const currentAnswer = selectedAnswers[currentQuestionIndex];
  const isMultiSelect = currentQuestion.multiSelect || false;
  const totalQuestions = questions.length;

  useEffect(() => {
    setQuestionStartTime(Date.now());
  }, [currentQuestionIndex]);

  const handleAnswerSelect = (optionIndex: number) => {
    if (showExplanation) return; // Don't allow changes after submitting

    const newAnswers = [...selectedAnswers];

    if (isMultiSelect) {
      const current = (newAnswers[currentQuestionIndex] as number[]) || [];
      if (current.includes(optionIndex)) {
        // Remove if already selected
        newAnswers[currentQuestionIndex] = current.filter(i => i !== optionIndex);
      } else {
        // Add to selection
        newAnswers[currentQuestionIndex] = [...current, optionIndex].sort();
      }
    } else {
      newAnswers[currentQuestionIndex] = optionIndex;
    }

    setSelectedAnswers(newAnswers);
  };

  const isAnswerCorrect = (): boolean => {
    const answer = selectedAnswers[currentQuestionIndex];
    const correct = currentQuestion.correctAnswer;

    if (isMultiSelect) {
      const selected = (answer as number[]) || [];
      const correctAnswers = correct as number[];
      return selected.length === correctAnswers.length &&
             selected.every(a => correctAnswers.includes(a));
    } else {
      return answer === correct;
    }
  };

  const handleSubmitAnswer = () => {
    if (currentAnswer === null || (isMultiSelect && (currentAnswer as number[]).length === 0)) {
      return; // Don't submit if no answer selected
    }
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowExplanation(false);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setShowExplanation(false);
    }
  };

  const handleFinish = () => {
    const totalTimeSpent = Date.now() - startTime;
    const attempts: QuizAttempt[] = questions.map((q, index) => ({
      questionId: q.id,
      selectedAnswer: selectedAnswers[index],
      isCorrect: (() => {
        const answer = selectedAnswers[index];
        const correct = q.correctAnswer;
        if (q.multiSelect) {
          const selected = (answer as number[]) || [];
          const correctAnswers = correct as number[];
          return selected.length === correctAnswers.length &&
                 selected.every(a => correctAnswers.includes(a));
        } else {
          return answer === correct;
        }
      })()
    }));

    onComplete(attempts, totalTimeSpent);
  };

  const isOptionSelected = (optionIndex: number): boolean => {
    if (isMultiSelect) {
      const selected = (currentAnswer as number[]) || [];
      return selected.includes(optionIndex);
    } else {
      return currentAnswer === optionIndex;
    }
  };

  const getOptionClassName = (optionIndex: number): string => {
    const baseClass = "w-full text-left p-4 rounded-lg border-2 transition-all";

    if (!showExplanation) {
      // Before submission
      if (isOptionSelected(optionIndex)) {
        return `${baseClass} border-aws-orange bg-aws-orange text-white font-semibold`;
      }
      return `${baseClass} border-gray-300 dark:border-gray-600 hover:border-aws-light-blue bg-white dark:bg-gray-800 text-gray-900 dark:text-white`;
    } else {
      // After submission - show correct/incorrect
      const correct = currentQuestion.correctAnswer;
      const isCorrectOption = isMultiSelect
        ? (correct as number[]).includes(optionIndex)
        : correct === optionIndex;

      if (isCorrectOption) {
        return `${baseClass} border-green-500 bg-green-50 dark:bg-green-900/20 text-green-900 dark:text-green-100`;
      } else if (isOptionSelected(optionIndex)) {
        return `${baseClass} border-red-500 bg-red-50 dark:bg-red-900/20 text-red-900 dark:text-red-100`;
      }
      return `${baseClass} border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400`;
    }
  };

  const progressPercentage = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
            Question {currentQuestionIndex + 1} of {totalQuestions}
          </span>
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {Math.round(progressPercentage)}% Complete
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
          <div
            className="bg-aws-orange h-3 rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8 mb-6">
        {/* Domain & Difficulty Badge */}
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-block bg-aws-light-blue text-white text-xs px-3 py-1 rounded-full">
            {currentQuestion.domain}
          </span>
          <span className={`inline-block text-xs px-3 py-1 rounded-full ${
            currentQuestion.difficulty === 'easy' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' :
            currentQuestion.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300' :
            'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
          }`}>
            {currentQuestion.difficulty.charAt(0).toUpperCase() + currentQuestion.difficulty.slice(1)}
          </span>
          {isMultiSelect && (
            <span className="inline-block bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 text-xs px-3 py-1 rounded-full">
              Select Multiple
            </span>
          )}
        </div>

        {/* Question Text */}
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6">
          {currentQuestion.question}
        </h2>

        {/* Answer Options */}
        <div className="space-y-3 mb-6">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              disabled={showExplanation}
              className={getOptionClassName(index)}
            >
              <div className="flex items-start">
                <span className="mr-3 font-bold">
                  {String.fromCharCode(65 + index)}.
                </span>
                <span className="flex-1">{option}</span>
                {showExplanation && (
                  <span className="ml-2">
                    {(isMultiSelect
                      ? (currentQuestion.correctAnswer as number[]).includes(index)
                      : currentQuestion.correctAnswer === index) && '✓'}
                    {!isMultiSelect && currentAnswer === index && currentAnswer !== currentQuestion.correctAnswer && '✗'}
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Explanation (shown after submission) */}
        {showExplanation && (
          <div className={`p-4 rounded-lg ${
            isAnswerCorrect()
              ? 'bg-green-50 dark:bg-green-900/20 border-2 border-green-500'
              : 'bg-red-50 dark:bg-red-900/20 border-2 border-red-500'
          }`}>
            <div className="flex items-start mb-2">
              <span className="text-2xl mr-3">
                {isAnswerCorrect() ? '✓' : '✗'}
              </span>
              <div className="flex-1">
                <h3 className={`font-bold text-lg mb-2 ${
                  isAnswerCorrect() ? 'text-green-900 dark:text-green-100' : 'text-red-900 dark:text-red-100'
                }`}>
                  {isAnswerCorrect() ? 'Correct!' : 'Incorrect'}
                </h3>
                <p className={`break-words ${
                  isAnswerCorrect() ? 'text-green-800 dark:text-green-200' : 'text-red-800 dark:text-red-200'
                }`}>
                  {currentQuestion.explanation}
                </p>
                {currentQuestion.references && currentQuestion.references.length > 0 && (
                  <div className="mt-3">
                    <p className="text-sm font-semibold mb-1">References:</p>
                    {currentQuestion.references.map((ref, idx) => (
                      <a
                        key={idx}
                        href={ref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-aws-light-blue hover:underline block break-all"
                      >
                        {ref}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center">
        <button
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
          className="px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          ← Previous
        </button>

        <div className="flex gap-3">
          {!showExplanation ? (
            <button
              onClick={handleSubmitAnswer}
              disabled={currentAnswer === null || (isMultiSelect && (currentAnswer as number[]).length === 0)}
              className="px-6 py-2 bg-aws-orange text-white rounded-lg hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Submit Answer
            </button>
          ) : currentQuestionIndex === totalQuestions - 1 ? (
            <button
              onClick={handleFinish}
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
            >
              Finish Quiz
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="px-6 py-2 bg-aws-light-blue text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Next →
            </button>
          )}
        </div>
      </div>

      {/* Keyboard Shortcuts Hint */}
      <div className="mt-4 text-center text-xs text-gray-500 dark:text-gray-500">
        Tip: Use number keys (1-4) to select answers quickly
      </div>
    </div>
  );
}
