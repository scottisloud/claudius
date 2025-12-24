import ProjectCard from '@/components/landing/ProjectCard';

export default function LandingPage() {
  const projects = [
    {
      title: "AWS SAA-C03 Study",
      description: "Interactive flashcards and quizzes for AWS Solutions Architect Associate certification",
      icon: "☁️",
      stats: "112 flashcards • 90 quiz questions",
      href: "/aws-saa-study"
    },
    {
      title: "S2 Wrapped 2025",
      description: "Year in review analytics and statistics",
      icon: "📊",
      stats: "2025 Edition",
      href: "/s2-wrapped/2025"
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Tools
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Select a tool to get started
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.href} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}
