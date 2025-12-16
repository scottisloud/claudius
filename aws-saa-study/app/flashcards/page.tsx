'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Flashcard from '@/components/Flashcard';
import { flashcards, categories } from '@/data/flashcards';
import Link from 'next/link';

function FlashcardsContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');

  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam || 'all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shuffled, setShuffled] = useState(false);

  const filteredCards = selectedCategory === 'all'
    ? flashcards
    : flashcards.filter(card => card.category === selectedCategory);

  const displayCards = shuffled
    ? [...filteredCards].sort(() => Math.random() - 0.5)
    : filteredCards;

  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedCategory, shuffled]);

  const handleNext = () => {
    if (currentIndex < displayCards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleShuffle = () => {
    setShuffled(!shuffled);
    setCurrentIndex(0);
  };

  if (displayCards.length === 0) {
    return (
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-6">No flashcards found</h1>
        <Link href="/flashcards" className="text-aws-light-blue hover:underline">
          ← Back to all flashcards
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          AWS Flashcards
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Master AWS services with interactive flashcards
        </p>
      </div>

      {/* Category selector */}
      <div className="mb-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <label className="font-semibold text-gray-700 dark:text-gray-300">
            Category:
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-aws-orange outline-none"
          >
            <option value="all">All Categories ({flashcards.length} cards)</option>
            {categories.map(category => {
              const count = flashcards.filter(card => card.category === category).length;
              return (
                <option key={category} value={category}>
                  {category} ({count} cards)
                </option>
              );
            })}
          </select>

          <button
            onClick={handleShuffle}
            className={`px-4 py-2 rounded-lg transition-colors ${
              shuffled
                ? 'bg-aws-orange text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            🔀 {shuffled ? 'Shuffled' : 'Shuffle'}
          </button>

          <Link
            href="/"
            className="ml-auto px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            ← Home
          </Link>
        </div>

        <div className="text-sm text-gray-600 dark:text-gray-400">
          Showing {displayCards.length} card{displayCards.length !== 1 ? 's' : ''}
          {selectedCategory !== 'all' && ` in ${selectedCategory}`}
        </div>
      </div>

      {/* Flashcard */}
      <div className="mb-8">
        <Flashcard
          card={displayCards[currentIndex]}
          onNext={currentIndex < displayCards.length - 1 ? handleNext : undefined}
          onPrevious={currentIndex > 0 ? handlePrevious : undefined}
          currentIndex={currentIndex}
          totalCards={displayCards.length}
        />
      </div>

      {/* Quick jump */}
      {displayCards.length > 5 && (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Quick Jump
          </h3>
          <div className="flex flex-wrap gap-2">
            {displayCards.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-10 h-10 rounded-lg transition-colors ${
                  index === currentIndex
                    ? 'bg-aws-orange text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Progress message */}
      {currentIndex === displayCards.length - 1 && (
        <div className="mt-8 text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-xl">
          <div className="text-2xl mb-2">🎉</div>
          <h3 className="text-xl font-bold text-green-800 dark:text-green-400 mb-2">
            Great job!
          </h3>
          <p className="text-green-700 dark:text-green-300 mb-4">
            You've reached the last card in this set.
          </p>
          <button
            onClick={() => setCurrentIndex(0)}
            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Start Over
          </button>
        </div>
      )}
    </div>
  );
}

export default function FlashcardsPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl text-gray-600 dark:text-gray-400">Loading flashcards...</div>
      </div>
    }>
      <FlashcardsContent />
    </Suspense>
  );
}
