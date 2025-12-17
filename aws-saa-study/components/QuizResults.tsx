'use client';

import { QuizQuestion, QuizAttempt } from '@/data/quizzes';
import Link from 'next/link';

interface QuizResultsProps {
  questions: QuizQuestion[];
  attempts: QuizAttempt[];
  timeSpent: number;
  domain?: string;
  onRestart: () => void;
}

export default function QuizResults({
  questions,
  attempts,
  timeSpent,
  domain,
  onRestart
}: QuizResultsProps) {
  const correctCount = attempts.filter(a => a.isCorrect).length;
  const totalQuestions = questions.length;
  const scorePercentage = Math.round((correctCount / totalQuestions) * 100);
  const passed = scorePercentage >= 72; // SAA-C03 passing score is 72%

  const formatTime = (ms: number): string => {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const getGrade = (): { letter: string; color: string; message: string } => {
    if (scorePercentage >= 90) {
      return { letter: 'A', color: 'text-green-600', message: 'Excellent! You\'re ready for the exam!' };
    } else if (scorePercentage >= 80) {
      return { letter: 'B', color: 'text-blue-600', message: 'Great job! Almost exam-ready!' };
    } else if (scorePercentage >= 72) {
      return { letter: 'C', color: 'text-yellow-600', message: 'Passing! Keep practicing to improve.' };
    } else {
      return { letter: 'D', color: 'text-red-600', message: 'Keep studying! Review the areas you missed.' };
    }
  };

  const grade = getGrade();

  return (
    <div className="max-w-4xl mx-auto">
      {/* Celebration/Result Card */}
      <div className={`rounded-xl shadow-2xl p-8 md:p-12 mb-8 text-center ${
        passed
          ? 'bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20'
          : 'bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20'
      }`}>
        <div className="text-6xl mb-4">
          {passed ? '🎉' : '📚'}
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Quiz Complete!
        </h1>
        {domain && (
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
            {domain} Domain
          </p>
        )}

        {/* Score Display */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 mb-6 shadow-lg">
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div>
              <div className={`text-7xl font-bold ${grade.color}`}>
                {scorePercentage}%
              </div>
              <div className="text-gray-600 dark:text-gray-400 mt-2">
                {correctCount} / {totalQuestions} correct
              </div>
            </div>
            <div className="text-center">
              <div className={`text-6xl font-bold ${grade.color}`}>
                {grade.letter}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Grade
              </div>
            </div>
          </div>
          <p className={`mt-6 text-lg font-semibold ${grade.color}`}>
            {grade.message}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
            <div className="text-3xl font-bold text-aws-orange">
              {formatTime(timeSpent)}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Time Spent
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
            <div className="text-3xl font-bold text-green-600">
              {correctCount}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Correct Answers
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
            <div className="text-3xl font-bold text-red-600">
              {totalQuestions - correctCount}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Incorrect Answers
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={onRestart}
            className="px-6 py-3 bg-aws-orange text-white rounded-lg hover:bg-orange-600 transition-colors font-semibold"
          >
            Retake Quiz
          </button>
          <Link
            href="/quizzes"
            className="px-6 py-3 bg-aws-light-blue text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-block"
          >
            Browse Quizzes
          </Link>
          <Link
            href="/"
            className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-semibold inline-block"
          >
            Home
          </Link>
        </div>
      </div>

      {/* Detailed Breakdown */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Question Breakdown
        </h2>

        <div className="space-y-4">
          {questions.map((question, index) => {
            const attempt = attempts[index];
            const isCorrect = attempt.isCorrect;

            return (
              <div
                key={question.id}
                className={`p-4 rounded-lg border-2 ${
                  isCorrect
                    ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                    : 'border-red-500 bg-red-50 dark:bg-red-900/20'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="text-2xl">
                    {isCorrect ? '✓' : '✗'}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-bold text-gray-900 dark:text-white">
                        Q{index + 1}:
                      </span>
                      <span className="text-xs px-2 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                        {question.domain}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        question.difficulty === 'easy' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' :
                        question.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300' :
                        'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
                      }`}>
                        {question.difficulty}
                      </span>
                    </div>
                    <p className="text-gray-900 dark:text-white mb-2">
                      {question.question}
                    </p>
                    <div className="text-sm">
                      <p className={isCorrect ? 'text-green-800 dark:text-green-200' : 'text-red-800 dark:text-red-200'}>
                        {question.multiSelect ? (
                          <>
                            <strong>Your answer:</strong> {
                              (attempt.selectedAnswer as number[])?.map(i =>
                                String.fromCharCode(65 + i)
                              ).join(', ') || 'None'
                            }
                            <br />
                            <strong>Correct answer:</strong> {
                              (question.correctAnswer as number[]).map(i =>
                                String.fromCharCode(65 + i)
                              ).join(', ')
                            }
                          </>
                        ) : (
                          <>
                            <strong>Your answer:</strong> {
                              attempt.selectedAnswer !== null
                                ? String.fromCharCode(65 + (attempt.selectedAnswer as number))
                                : 'None'
                            }
                            {' | '}
                            <strong>Correct answer:</strong> {
                              String.fromCharCode(65 + (question.correctAnswer as number))
                            }
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Study Recommendations */}
      {scorePercentage < 90 && (
        <div className="mt-8 bg-gradient-to-r from-aws-orange/10 to-aws-light-blue/10 rounded-xl p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            📖 Study Recommendations
          </h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            {scorePercentage < 72 && (
              <li>• Review the flashcards for {domain || 'all domains'} to reinforce key concepts</li>
            )}
            <li>• Focus on questions you got wrong and review the explanations</li>
            <li>• Check the reference links provided in the explanations</li>
            <li>• Practice with different quiz sets to cover more scenarios</li>
            {scorePercentage >= 72 && scorePercentage < 80 && (
              <li>• You're close to excellence! Review edge cases and service limits</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
