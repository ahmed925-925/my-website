import { Github, Mail, MapPin, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { personalInfo } from '../data/portfolio';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-8 py-20">
      <div className="max-w-4xl w-full">
        <div className="space-y-6 animate-fadeIn">
          <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
            {t.hero.greeting}
          </p>

          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
            {t.hero.name}
          </h1>

          <h2 className="text-3xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300">
            {t.hero.title}
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed">
            {t.hero.description}
          </p>

          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <MapPin className="w-5 h-5" />
            <span>{t.hero.location}</span>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg"
            >
              {t.hero.cta}
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>

          <div className="flex flex-wrap gap-6 pt-6 text-gray-600 dark:text-gray-400">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm">{personalInfo.email}</span>
            </a>

            <a
              href={personalInfo.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
            >
              <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm">Portfolio</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
