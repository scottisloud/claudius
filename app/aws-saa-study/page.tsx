import Link from 'next/link';
import { flashcards, categories } from '@/data/aws-saa/flashcards';
import { quizQuestions } from '@/data/aws-saa/quizzes';

export default function AWSSAAHome() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          AWS Solutions Architect Associate
        </h1>
        <h2 className="text-2xl md:text-3xl text-aws-light-blue mb-6">
          SAA-C03 Study Platform
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Master AWS services with interactive flashcards and structured learning.
          From 56% to passing in 8 weeks!
        </p>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
          <div className="text-4xl font-bold text-aws-orange mb-2">
            {flashcards.length}
          </div>
          <div className="text-gray-600 dark:text-gray-400">
            Flashcards
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
          <div className="text-4xl font-bold text-aws-light-blue mb-2">
            {quizQuestions.length}
          </div>
          <div className="text-gray-600 dark:text-gray-400">
            Quiz Questions
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
          <div className="text-4xl font-bold text-purple-600 mb-2">
            {categories.length}
          </div>
          <div className="text-gray-600 dark:text-gray-400">
            Categories
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
          <div className="text-4xl font-bold text-green-600 mb-2">
            8
          </div>
          <div className="text-gray-600 dark:text-gray-400">
            Weeks to Success
          </div>
        </div>
      </div>

      {/* Quick actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <Link href="/aws-saa-study/flashcards" className="block group">
          <div className="bg-gradient-to-br from-aws-light-blue to-aws-dark-blue rounded-xl shadow-lg p-8 text-white hover:shadow-2xl transition-all transform hover:-translate-y-1">
            <h3 className="text-2xl font-bold mb-3">📚 Study Flashcards</h3>
            <p className="text-white/80 mb-4">
              Master AWS services with interactive flashcards covering Analytics, Migration, Databases, and more.
            </p>
            <div className="flex items-center text-white group-hover:text-aws-orange transition-colors">
              Start Learning →
            </div>
          </div>
        </Link>

        <Link href="/aws-saa-study/quizzes" className="block group">
          <div className="bg-gradient-to-br from-aws-orange to-orange-600 rounded-xl shadow-lg p-8 text-white hover:shadow-2xl transition-all transform hover:-translate-y-1">
            <h3 className="text-2xl font-bold mb-3">🎯 Practice Quizzes</h3>
            <p className="text-white/80 mb-4">
              Test your knowledge with {quizQuestions.length}+ scenario-based questions that mirror the actual SAA-C03 exam format.
            </p>
            <div className="flex items-center text-white group-hover:text-yellow-200 transition-colors">
              Take a Quiz →
            </div>
          </div>
        </Link>
      </div>

      {/* Categories overview */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
          Study by Category
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map(category => {
            const count = flashcards.filter(card => card.category === category).length;
            return (
              <Link
                key={category}
                href={`/aws-saa-study/flashcards?category=${encodeURIComponent(category)}`}
                className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-aws-orange hover:text-white transition-all text-center group"
              >
                <div className="font-semibold mb-1">{category}</div>
                <div className="text-sm opacity-75">{count} cards</div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Study tips */}
      <div className="mt-12 bg-gradient-to-r from-aws-orange/10 to-aws-light-blue/10 rounded-xl p-8">
        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          💡 Study Tips
        </h3>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          <li>• Focus on your weakest domains: Analytics (0%), Migration (33%), and Databases (44%)</li>
          <li>• Use flashcards daily for spaced repetition and better retention</li>
          <li>• Master service comparisons (Multi-AZ vs Read Replicas, SQS vs SNS, etc.)</li>
          <li>• Practice identifying keywords: "MOST secure," "LEAST cost," "LEAST operational overhead"</li>
          <li>• Target 75%+ on practice exams before scheduling your real exam</li>
        </ul>
      </div>
    </div>
  );
}
