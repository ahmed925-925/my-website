import { Github, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { personalInfo } from '../data/portfolio';
import OptimizedImage from './OptimizedImage';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-20 overflow-hidden">
      <div className="max-w-7xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 order-2 lg:order-1">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-lg text-blue-600 dark:text-blue-400 font-medium"
            >
              {t.hero.greeting}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight"
            >
              {t.hero.name}
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent"
            >
              {t.hero.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed"
            >
              {t.hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
            >
              <MapPin className="w-5 h-5" />
              <span>{t.hero.location}</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.a
                href="/projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                {t.hero.cta}
              </motion.a>

              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-medium transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl"
              >
                <Github className="w-5 h-5" />
                GitHub
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex flex-wrap gap-6 pt-6 text-gray-600 dark:text-gray-400"
            >
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm">{personalInfo.email}</span>
              </a>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center items-center"
          >
            <div className="relative">
              {/* Animated rings */}
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-2xl"
              />
              
              {/* Outer ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-75 blur-md"
              />

              {/* Image container */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl"
              >
                {/* Placeholder gradient when no image */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center">
                  <div className="text-center text-white">
                    <img src="https://i.imgur.com/9GJiXYg.jpeg" alt="" />
                  </div>
                </div>
                
                {/* Actual image - will show when you add the image */}
                <OptimizedImage
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  priority={true}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </motion.div>

              {/* Floating particles */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-full opacity-20 blur-xl"
              />
              
              <motion.div
                animate={{
                  y: [0, 20, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-500 rounded-full opacity-20 blur-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
