'use client';

import { useState } from 'react';
import Link from 'next/link';
import Quiz from '@/components/Quiz';
import QuizResults from '@/components/QuizResults';
import { quizQuestions, quizDomains, getQuestionsByDomain, QuizQuestion, QuizAttempt } from '@/data/quizzes';

export default function QuizzesPage() {
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([]);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizResults, setQuizResults] = useState<{
    attempts: QuizAttempt[];
    timeSpent: number;
  } | null>(null);

  const handleStartQuiz = (domain: string) => {
    const questions = domain === 'all'
      ? [...quizQuestions].sort(() => Math.random() - 0.5) // Shuffle all questions
      : getQuestionsByDomain(domain);

    setQuizQuestions(questions);
    setSelectedDomain(domain);
    setQuizStarted(true);
    setQuizCompleted(false);
  };

  const handleQuizComplete = (attempts: QuizAttempt[], timeSpent: number) => {
    setQuizResults({ attempts, timeSpent });
    setQuizCompleted(true);

    // Save to localStorage for history
    const history = JSON.parse(localStorage.getItem('quizHistory') || '[]');
    history.push({
      id: Date.now().toString(),
      date: new Date().toISOString(),
      domain: selectedDomain || 'all',
      score: attempts.filter(a => a.isCorrect).length,
      totalQuestions: attempts.length,
      timeSpent
    });
    localStorage.setItem('quizHistory', JSON.stringify(history));
  };

  const handleRestart = () => {
    setQuizStarted(false);
    setQuizCompleted(false);
    setQuizResults(null);
    setSelectedDomain(null);
  };

  if (quizStarted && !quizCompleted) {
    return (
      <div className="py-8">
        <Quiz
          questions={quizQuestions}
          onComplete={handleQuizComplete}
          domain={selectedDomain || undefined}
        />
      </div>
    );
  }

  if (quizCompleted && quizResults) {
    return (
      <div className="py-8">
        <QuizResults
          questions={quizQuestions}
          attempts={quizResults.attempts}
          timeSpent={quizResults.timeSpent}
          domain={selectedDomain || undefined}
          onRestart={handleRestart}
        />
      </div>
    );
  }

  // Quiz selection screen
  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Practice Quizzes
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Test your knowledge with scenario-based questions that mirror the actual SAA-C03 exam format
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
          <div className="text-4xl font-bold text-aws-orange mb-2">
            {quizQuestions.length}
          </div>
          <div className="text-gray-600 dark:text-gray-400">
            Total Questions
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
          <div className="text-4xl font-bold text-aws-light-blue mb-2">
            {quizDomains.length}
          </div>
          <div className="text-gray-600 dark:text-gray-400">
            Domains
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
          <div className="text-4xl font-bold text-green-600 mb-2">
            72%
          </div>
          <div className="text-gray-600 dark:text-gray-400">
            Passing Score
          </div>
        </div>
      </div>

      {/* Quiz Options */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Choose a Quiz Domain
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* All Questions Quiz */}
          <button
            onClick={() => handleStartQuiz('all')}
            className="group p-6 rounded-lg border-2 border-aws-orange hover:bg-aws-orange transition-all text-left"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-white">
                All Domains
              </h3>
              <span className="text-2xl">🎯</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-white mb-3">
              Practice with questions from all domains
            </p>
            <div className="text-aws-orange group-hover:text-white font-semibold">
              {quizQuestions.length} questions
            </div>
          </button>

          {/* Domain-specific quizzes */}
          {quizDomains.map(domain => {
            const questionCount = getQuestionsByDomain(domain).length;
            const emoji = {
              'Analytics': '📊',
              'Migration': '🚚',
              'Database': '💾',
              'Integration': '🔗',
              'Compute': '⚡',
              'Storage': '📦',
              'Security': '🔒',
              'Cost Optimization': '💰',
              'Networking': '🌐'
            }[domain] || '📚';

            return (
              <button
                key={domain}
                onClick={() => handleStartQuiz(domain)}
                className="group p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 hover:border-aws-light-blue hover:bg-aws-light-blue transition-all text-left"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-white">
                    {domain}
                  </h3>
                  <span className="text-2xl">{emoji}</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-white mb-3">
                  Focus on {domain.toLowerCase()} services
                </p>
                <div className="text-aws-light-blue group-hover:text-white font-semibold">
                  {questionCount} question{questionCount !== 1 ? 's' : ''}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Quiz Tips */}
      <div className="bg-gradient-to-r from-aws-orange/10 to-aws-light-blue/10 rounded-xl p-8">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          💡 Quiz Tips
        </h3>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          <li>• Read each question carefully - keywords like "MOST cost-effective" and "LEAST operational overhead" are crucial</li>
          <li>• For multi-select questions, select ALL correct answers to get credit</li>
          <li>• Review explanations even for questions you got right to deepen understanding</li>
          <li>• Aim for 75%+ on practice quizzes before taking the actual exam</li>
          <li>• Click reference links in explanations to learn more about specific services</li>
        </ul>
      </div>

      {/* Back to Home */}
      <div className="mt-8 text-center">
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
