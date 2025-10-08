import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { projects } from '../data/portfolio';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { language, t } = useLanguage();

  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.15 }}
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-20"
      >
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Project Not Found
          </h2>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ 
        duration: 0.15,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-950 dark:to-purple-950 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <motion.div
        animate={{
          background: [
            'radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
          ]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ 
            duration: 0.2,
            ease: [0.22, 1, 0.36, 1]
          }}
          onClick={() => navigate('/projects')}
          className="mb-6 md:mb-8 flex items-center ml-12 gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-200 dark:border-gray-700"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-2 transition-transform duration-300 text-blue-600 dark:text-blue-400" />
          <span className="font-medium text-sm sm:text-base text-gray-900 dark:text-white">Back to Projects</span>
        </motion.button>

        <div className="max-w-7xl mx-auto">
          {/* Hero Section - Image on Right, Content on Left */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 50 }}
            className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 mb-8 md:mb-12"
          >
            {/* Left Side - Main Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="flex flex-col justify-center space-y-4 md:space-y-6 order-2 lg:order-1"
            >
              {/* Category Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-bold shadow-lg w-fit"
              >
                <span className="text-lg">
                  {project.category === 'fullstack' ? '🚀' : project.category === 'frontend' ? '🎨' : '⚙️'}
                </span>
                {project.category === 'fullstack' ? 'Full Stack' : project.category === 'frontend' ? 'Front-End' : 'Back-End'}
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white leading-tight"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                  {project.title[language]}
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed"
              >
                {project.fullDescription[language]}
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-3 pt-2"
              >
                {project.links.github && (
                  <motion.a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-xl font-medium hover:bg-gray-800 dark:hover:bg-gray-600 transition-all shadow-lg hover:shadow-xl"
                  >
                    <Github className="w-5 h-5" />
                    <span>{t.projects.viewCode}</span>
                  </motion.a>
                )}
                {project.links.live && (
                  <motion.a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>{t.projects.viewLive}</span>
                  </motion.a>
                )}
                {project.links.frontend && (
                  <motion.a
                    href={project.links.frontend}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>{t.projects.viewFrontend}</span>
                  </motion.a>
                )}
                {project.links.backend && (
                  <motion.a
                    href={project.links.backend}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-xl font-medium hover:bg-gray-800 dark:hover:bg-gray-600 transition-all shadow-lg hover:shadow-xl"
                  >
                    <Github className="w-5 h-5" />
                    <span>{t.projects.viewBackend}</span>
                  </motion.a>
                )}
              </motion.div>
            </motion.div>

            {/* Right Side - Project Image */}
            <motion.div
              initial={{ opacity: 0, x: 50, rotateY: -15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ delay: 0.3, duration: 0.8, type: 'spring' }}
              className="order-1 lg:order-2"
            >
              <motion.div
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl group"
                style={{ perspective: '1000px' }}
              >
                {/* Glowing Border Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl md:rounded-3xl opacity-75 group-hover:opacity-100 blur-sm transition-opacity duration-300" />
                
                {/* Image Container */}
                <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-800 rounded-2xl md:rounded-3xl overflow-hidden h-[300px] sm:h-[400px] lg:h-[500px] flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title[language]}
                    className="w-full h-full object-contain transform transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  
                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Technologies Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mb-8 md:mb-12"
          >
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl border border-gray-200 dark:border-gray-700">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 flex items-center gap-3"
              >
                <span className="text-3xl">⚡</span>
                Technologies Used
              </motion.h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, idx) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ 
                      delay: 0.9 + idx * 0.05,
                      type: 'spring',
                      stiffness: 200
                    }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl text-sm font-semibold shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Features Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mb-8 md:mb-12"
          >
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl border border-gray-200 dark:border-gray-700">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 flex items-center gap-3"
              >
                <span className="text-3xl">✨</span>
                Key Features
              </motion.h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features[language].map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: 1.1 + idx * 0.1,
                      type: 'spring',
                      stiffness: 100
                    }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-start gap-3 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-xl border border-blue-200 dark:border-gray-500 hover:border-blue-400 dark:hover:border-blue-400 transition-all group"
                  >
                    <CheckCircle className="w-6 h-6 text-green-500 dark:text-green-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-sm sm:text-base text-gray-700 dark:text-gray-200 break-words leading-relaxed">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Special Sections for EduQuest Project */}
          {project.id === 'eduquest' && (
            <>
              {/* My Role & Responsibilities Section */}
              {(project.myRole || project.responsibilities) && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="mb-8 md:mb-12"
                >
                  <div className="bg-gradient-to-br from-blue-50/80 to-purple-50/80 dark:from-blue-900/20 dark:to-purple-900/20 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl border border-blue-200 dark:border-blue-700">
                    <motion.h3
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.3 }}
                      className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 flex items-center gap-3"
                    >
                      <span className="text-3xl">👨‍💻</span>
                      {language === 'ar' ? 'دوري في المشروع' : 'My Role in the Project'}
                    </motion.h3>
                    
                    {project.myRole && (
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4 }}
                        className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6"
                      >
                        {project.myRole[language]}
                      </motion.p>
                    )}

                    {project.responsibilities && (
                      <div className="space-y-3">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                          <span className="text-xl">📋</span>
                          {language === 'ar' ? 'المسؤوليات الأساسية' : 'Key Responsibilities'}
                        </h4>
                        <div className="grid grid-cols-1 gap-3">
                          {project.responsibilities[language].map((responsibility, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -30 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 1.5 + idx * 0.1 }}
                              className="flex items-start gap-3 p-3 bg-white/60 dark:bg-gray-800/60 rounded-lg"
                            >
                              <CheckCircle className="w-5 h-5 text-blue-500 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                              <span className="text-sm sm:text-base text-gray-700 dark:text-gray-200">{responsibility}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

              {/* Integrations Section */}
              {project.integrations && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 }}
                  className="mb-8 md:mb-12"
                >
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                    <motion.h3
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.5 }}
                      className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 flex items-center gap-3"
                    >
                      <span className="text-3xl">🔗</span>
                      {language === 'ar' ? 'التكاملات والخدمات' : 'Integrations & Services'}
                    </motion.h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {project.integrations.map((integration, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.6 + idx * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                          className="p-4 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl border border-green-200 dark:border-green-700 text-center"
                        >
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{integration}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Highlights Section */}
              {project.highlights && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6 }}
                  className="mb-8 md:mb-12"
                >
                  <div className="bg-gradient-to-br from-yellow-50/80 to-orange-50/80 dark:from-yellow-900/20 dark:to-orange-900/20 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl border border-yellow-200 dark:border-yellow-700">
                    <motion.h3
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.7 }}
                      className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 flex items-center gap-3"
                    >
                      <span className="text-3xl">🎯</span>
                      {language === 'ar' ? 'أبرز الإنجازات التقنية' : 'Technical Highlights'}
                    </motion.h3>
                    <div className="space-y-4">
                      {project.highlights[language].map((highlight, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1.8 + idx * 0.1 }}
                          className="flex items-start gap-3 p-4 bg-white/70 dark:bg-gray-800/70 rounded-xl border border-yellow-300 dark:border-yellow-600"
                        >
                          <span className="text-2xl">⭐</span>
                          <span className="text-sm sm:text-base text-gray-700 dark:text-gray-200 leading-relaxed">{highlight}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Author & Notes Section */}
              {(project.author || project.notes) && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8 }}
                  className="mb-8 md:mb-12"
                >
                  <div className="bg-gradient-to-br from-purple-50/80 to-pink-50/80 dark:from-purple-900/20 dark:to-pink-900/20 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl border border-purple-200 dark:border-purple-700">
                    {project.author && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.9 }}
                        className="text-center mb-6"
                      >
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center justify-center gap-3 mb-2">
                          <span className="text-2xl">👨‍💻</span>
                          {project.author[language]}
                        </h3>
                      </motion.div>
                    )}

                    {project.notes && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2 }}
                        className="bg-white/60 dark:bg-gray-800/60 rounded-xl p-4"
                      >
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                          <span className="text-xl">📝</span>
                          {language === 'ar' ? 'ملاحظات إضافية' : 'Additional Notes'}
                        </h4>
                        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">{project.notes[language]}</p>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              )}
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}
