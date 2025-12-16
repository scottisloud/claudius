'use client';

import { useState } from 'react';
import { Flashcard as FlashcardType } from '@/data/flashcards';

interface FlashcardProps {
  card: FlashcardType;
  onNext?: () => void;
  onPrevious?: () => void;
  currentIndex?: number;
  totalCards?: number;
}

export default function Flashcard({
  card,
  onNext,
  onPrevious,
  currentIndex = 0,
  totalCards = 1
}: FlashcardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    setIsFlipped(false);
    setTimeout(() => onNext?.(), 150);
  };

  const handlePrevious = () => {
    setIsFlipped(false);
    setTimeout(() => onPrevious?.(), 150);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      handleFlip();
    } else if (e.key === 'ArrowRight' && onNext) {
      e.preventDefault();
      handleNext();
    } else if (e.key === 'ArrowLeft' && onPrevious) {
      e.preventDefault();
      handlePrevious();
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress indicator */}
      <div className="mb-4 text-center text-sm text-gray-600 dark:text-gray-400">
        Card {currentIndex + 1} of {totalCards}
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-2">
          <div
            className="bg-aws-orange h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / totalCards) * 100}%` }}
          />
        </div>
      </div>

      {/* Category badge */}
      <div className="mb-3 flex items-center justify-center gap-2">
        <span className="inline-block bg-aws-light-blue text-white text-xs px-3 py-1 rounded-full">
          {card.category}
        </span>
        {card.tags.map(tag => (
          <span
            key={tag}
            className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Main flashcard */}
      <div
        className={`flip-card ${isFlipped ? 'flipped' : ''} cursor-pointer h-80 md:h-96`}
        onClick={handleFlip}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
        aria-label="Flip card"
      >
        <div className="flip-card-inner w-full h-full">
          {/* Front */}
          <div className="flip-card-front bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6 md:p-8 border-2 border-gray-200 dark:border-gray-700 overflow-y-auto">
            <div className="h-full flex flex-col items-center justify-center text-center">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {card.front}
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-auto">
                Click or press Space to flip
              </p>
            </div>
          </div>

          {/* Back */}
          <div className="flip-card-back bg-gradient-to-br from-aws-light-blue to-aws-dark-blue rounded-xl shadow-2xl p-6 md:p-8 overflow-y-auto">
            <div className="h-full flex flex-col items-center justify-center text-center">
              <div className="text-white whitespace-pre-line text-sm md:text-base leading-relaxed max-w-full">
                {card.back}
              </div>
              {card.relatedServices && card.relatedServices.length > 0 && (
                <div className="mt-4 pt-4 border-t border-white/20 w-full">
                  <p className="text-sm text-white/80 mb-2">Related Services:</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {card.relatedServices.map(service => (
                      <span
                        key={service}
                        className="bg-white/20 text-white text-xs px-3 py-1 rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="mt-6 flex justify-between items-center">
        <button
          onClick={handlePrevious}
          disabled={!onPrevious}
          className="px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          ← Previous
        </button>

        <button
          onClick={handleFlip}
          className="px-6 py-2 bg-aws-orange text-white rounded-lg hover:bg-orange-600 transition-colors"
        >
          Flip Card
        </button>

        <button
          onClick={handleNext}
          disabled={!onNext}
          className="px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Next →
        </button>
      </div>

      {/* Keyboard shortcuts hint */}
      <div className="mt-4 text-center text-xs text-gray-500 dark:text-gray-500">
        Keyboard shortcuts: <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">Space</kbd> to flip,{' '}
        <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">←</kbd>{' '}
        <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">→</kbd> to navigate
      </div>
    </div>
  );
}
