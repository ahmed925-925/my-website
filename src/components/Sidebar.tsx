import { useState } from 'react';
import { Moon, Sun, Globe, Menu, X, Zap, Briefcase, GraduationCap, Mail, Home } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

const navItems = [
  { id: 'about', icon: Home, label: 'About' },
  { id: 'skills', icon: Zap, label: 'Skills' },
  { id: 'projects', icon: Briefcase, label: 'Projects' },
  { id: 'education', icon: GraduationCap, label: 'Education' },
  { id: 'contact', icon: Mail, label: 'Contact' }
];

export default function Sidebar() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false); // Close sidebar on mobile after navigation
    }
  };

  const sidebarVariants = {
    open: { width: '16rem' },
    closed: { width: '5rem' }
  };

  const menuItemVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: -20 }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-6 left-6 z-50 p-3 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-gray-900 dark:text-white" />
        ) : (
          <Menu className="w-6 h-6 text-gray-900 dark:text-white" />
        )}
      </motion.button>

      {/* Overlay for mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        variants={sidebarVariants}
        className={`fixed left-0 top-0 h-screen bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex flex-col items-center py-8 z-50 transition-all duration-300 shadow-xl ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="flex-1 flex flex-col items-center gap-8 w-full px-4">
          {/* Logo */}
          <motion.button
            onClick={() => scrollToSection('about')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative group"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
              <span className="text-xl font-bold text-white">AM</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity -z-10"></div>
          </motion.button>

          {/* Desktop Toggle Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="hidden lg:block p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <Menu className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </motion.button>

          {/* Navigation */}
          <nav className="flex flex-col gap-2 w-full">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
              >
                <item.icon className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex-shrink-0" />
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.span
                      variants={menuItemVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                      className="text-gray-900 dark:text-white font-medium whitespace-nowrap"
                    >
                      {t.nav[item.id as keyof typeof t.nav]}
                    </motion.span>
                  )}
                </AnimatePresence>

                {/* Tooltip for closed state */}
                {!isOpen && (
                  <span className="absolute left-full ml-4 px-3 py-1 bg-gray-900 dark:bg-gray-700 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">
                    {t.nav[item.id as keyof typeof t.nav]}
                  </span>
                )}
              </motion.button>
            ))}
          </nav>
        </div>

        {/* Bottom Controls */}
        <div className="flex flex-col gap-3 w-full px-4">
          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 group"
          >
            {theme === 'light' ? (
              <Moon className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex-shrink-0" />
            ) : (
              <Sun className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-yellow-500 transition-colors flex-shrink-0" />
            )}
            
            <AnimatePresence>
              {isOpen && (
                <motion.span
                  variants={menuItemVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className="text-gray-900 dark:text-white font-medium whitespace-nowrap"
                >
                  {theme === 'light' ? 'Dark' : 'Light'}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Language Toggle */}
          <motion.button
            onClick={toggleLanguage}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 group relative"
          >
            <Globe className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex-shrink-0" />
            
            <AnimatePresence>
              {isOpen && (
                <motion.span
                  variants={menuItemVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className="text-gray-900 dark:text-white font-medium whitespace-nowrap"
                >
                  {language === 'en' ? 'العربية' : 'English'}
                </motion.span>
              )}
            </AnimatePresence>

            {!isOpen && (
              <span className="absolute -top-1 -right-1 text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900 px-1.5 py-0.5 rounded-full">
                {language.toUpperCase()}
              </span>
            )}
          </motion.button>
        </div>
      </motion.aside>

      {/* Spacer for main content */}
      <div className={`${isOpen ? 'lg:w-64' : 'lg:w-20'} transition-all duration-300`}></div>
    </>
  );
}
