import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AWS SAA-C03 Study Guide",
  description: "Interactive learning platform for AWS Solutions Architect Associate certification",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          {/* Header */}
          <header className="bg-aws-dark-blue text-white shadow-lg">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold hover:text-aws-orange transition-colors">
                  AWS SAA-C03 Study
                </Link>
                <div className="flex gap-6">
                  <Link href="/" className="hover:text-aws-orange transition-colors">
                    Home
                  </Link>
                  <Link href="/flashcards" className="hover:text-aws-orange transition-colors">
                    Flashcards
                  </Link>
                  <Link href="/about" className="hover:text-aws-orange transition-colors">
                    About
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
      </body>
    </html>
  );
}
