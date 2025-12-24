import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AWS SAA-C03 Study Guide",
  description: "Interactive learning platform for AWS Solutions Architect Associate certification",
};

export default function AWSSAALayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-aws-dark-blue text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/aws-saa-study" className="text-2xl font-bold hover:text-aws-orange transition-colors">
              AWS SAA-C03 Study
            </Link>
            <div className="flex gap-6">
              <Link href="/aws-saa-study" className="hover:text-aws-orange transition-colors">
                Home
              </Link>
              <Link href="/aws-saa-study/flashcards" className="hover:text-aws-orange transition-colors">
                Flashcards
              </Link>
              <Link href="/aws-saa-study/quizzes" className="hover:text-aws-orange transition-colors">
                Quizzes
              </Link>
              <Link href="/aws-saa-study/about" className="hover:text-aws-orange transition-colors">
                About
              </Link>
              <Link href="/" className="hover:text-aws-orange transition-colors">
                ← Back
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-900 py-6">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>AWS SAA-C03 Study Guide - Built for certification success</p>
          <p className="mt-2">Good luck on your exam! 🚀</p>
        </div>
      </footer>
    </div>
  );
}
