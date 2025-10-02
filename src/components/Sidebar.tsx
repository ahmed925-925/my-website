import { Moon, Sun, Globe } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

const navItems = [
  { id: 'about', icon: '👤' },
  { id: 'skills', icon: '⚡' },
  { id: 'projects', icon: '💼' },
  { id: 'education', icon: '🎓' },
  { id: 'contact', icon: '📧' }
];

export default function Sidebar() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-20 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex flex-col items-center py-8 z-50 transition-colors duration-300">
      <div className="flex-1 flex flex-col items-center gap-8">
        <button
          onClick={() => scrollToSection('about')}
          className="text-2xl font-bold text-blue-600 dark:text-blue-400 hover:scale-110 transition-transform duration-200"
          aria-label="Home"
        >
          AM
        </button>

        <nav className="flex flex-col gap-6">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="group relative text-2xl hover:scale-125 transition-all duration-200"
              aria-label={t.nav[item.id as keyof typeof t.nav]}
            >
              <span className="block transform group-hover:rotate-12 transition-transform">
                {item.icon}
              </span>
              <span className="absolute left-full ml-4 px-3 py-1 bg-gray-900 dark:bg-gray-700 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {t.nav[item.id as keyof typeof t.nav]}
              </span>
            </button>
          ))}
        </nav>
      </div>

      <div className="flex flex-col gap-4">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 group"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? (
            <Moon className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
          ) : (
            <Sun className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
          )}
        </button>

        <button
          onClick={toggleLanguage}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 group relative"
          aria-label="Toggle language"
        >
          <Globe className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
          <span className="absolute -top-1 -right-1 text-xs font-bold text-blue-600 dark:text-blue-400">
            {language.toUpperCase()}
          </span>
        </button>
      </div>
    </aside>
  );
}
