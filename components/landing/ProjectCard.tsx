import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  href: string;
  icon: string;
  stats?: string;
}

export default function ProjectCard({ title, description, href, icon, stats }: ProjectCardProps) {
  return (
    <Link href={href} className="block group">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all transform hover:-translate-y-1">
        <div className="text-5xl mb-4">{icon}</div>
        <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-aws-orange transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {description}
        </p>
        {stats && (
          <div className="text-sm text-gray-500 dark:text-gray-500">
            {stats}
          </div>
        )}
      </div>
    </Link>
  );
}
