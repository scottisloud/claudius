import Link from "next/link";

export default function S2WrappedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative">
      {/* Back button */}
      <div className="absolute top-4 left-4 z-50">
        <Link
          href="/"
          className="inline-block px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors backdrop-blur-sm"
        >
          ← Back to Tools
        </Link>
      </div>

      {children}
    </div>
  );
}
