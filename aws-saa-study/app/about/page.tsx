import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
        About This Study Platform
      </h1>

      <div className="prose dark:prose-invert max-w-none">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-6">
          <h2 className="text-2xl font-bold mb-4">Your Path to AWS Certification</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            This interactive learning platform is designed to help you prepare for the AWS Certified
            Solutions Architect Associate (SAA-C03) exam. Based on a comprehensive 8-week study guide,
            it focuses on taking you from a 56% practice score to passing (72%+) through targeted study
            of your weakest domains.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3">Key Focus Areas</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li><strong>Analytics Services</strong> (0% → Proficient): Athena, Glue, Kinesis, EMR, Redshift</li>
            <li><strong>Migration & Transfer</strong> (33% → Proficient): DMS, DataSync, Snow Family</li>
            <li><strong>Database Services</strong> (44% → Proficient): RDS, Aurora, DynamoDB, ElastiCache</li>
            <li><strong>Integration Services</strong>: SQS, SNS, EventBridge, Step Functions</li>
            <li><strong>Cost Optimization</strong>: Pricing models, storage classes, cost tools</li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-6">
          <h2 className="text-2xl font-bold mb-4">Features</h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-aws-orange mb-2">📚 70+ Flashcards</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Interactive flashcards covering all major AWS services with flip animations, categorization,
                and related service links.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-aws-orange mb-2">🔀 Shuffle & Filter</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Study by category or shuffle all cards for varied practice. Filter by Analytics,
                Migration, Database, Integration, Compute, Storage, Networking, Security, and Cost Optimization.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-aws-orange mb-2">⌨️ Keyboard Shortcuts</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Efficient navigation with keyboard controls: Space/Enter to flip, Arrow keys to navigate.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-aws-orange mb-2">🎯 Service Comparisons</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Master critical exam topics like Multi-AZ vs Read Replicas, SQS vs SNS vs EventBridge,
                Redis vs Memcached, and more.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-aws-orange/10 to-aws-light-blue/10 rounded-xl p-8 mb-6">
          <h2 className="text-2xl font-bold mb-4">Study Strategy</h2>
          <div className="space-y-3 text-gray-700 dark:text-gray-300">
            <p>
              <strong>Week 1-2:</strong> Focus on Analytics (Athena, Glue, Kinesis, Redshift, EMR)
            </p>
            <p>
              <strong>Week 3:</strong> Master Migration services (DMS, DataSync, Snow Family, 7 Rs)
            </p>
            <p>
              <strong>Week 4:</strong> Deep dive into Databases (RDS, Aurora, DynamoDB, specialty DBs)
            </p>
            <p>
              <strong>Week 5:</strong> Learn Integration patterns (SQS, SNS, EventBridge, Step Functions)
            </p>
            <p>
              <strong>Week 6:</strong> Optimize for Cost (pricing models, storage classes, cost tools)
            </p>
            <p>
              <strong>Week 7-8:</strong> Practice exams and final review
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Practice quizzes with 165+ questions mapped to weekly topics</li>
            <li>Progress tracking and performance analytics</li>
            <li>Spaced repetition algorithm for optimal flashcard review</li>
            <li>Full 8-week study guide with sessions and resources</li>
            <li>Timed practice exam mode</li>
          </ul>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/flashcards"
            className="inline-block px-8 py-3 bg-aws-orange text-white rounded-lg hover:bg-orange-600 transition-colors text-lg font-semibold"
          >
            Start Studying Now →
          </Link>
        </div>
      </div>
    </div>
  );
}
