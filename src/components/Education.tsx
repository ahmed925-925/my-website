import { GraduationCap, Award, Calendar, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { education, certifications } from '../data/portfolio';
import { useState } from 'react';

export default function Education() {
  const { language, t } = useLanguage();
  const [selectedCertificate, setSelectedCertificate] = useState<typeof certifications[0] | null>(null);

  return (
    <section id="education" className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-20">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.education.title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400">
            {t.education.subtitle}
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* Degree Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-4 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-blue-200 dark:border-blue-800"
          >
            <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="p-3 md:p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg flex-shrink-0"
              >
                <GraduationCap className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </motion.div>

              <div className="flex-1 min-w-0">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2 break-words">
                  {education.degree[language]}
                </h3>
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-2 font-medium break-words">
                  {education.university[language]}
                </p>
                <div className="flex flex-wrap items-center gap-2 md:gap-4 text-sm md:text-base text-gray-600 dark:text-gray-400">
                  <span className="break-words">{education.location[language]}</span>
                  <span className="hidden sm:inline">•</span>
                  <span className="flex items-center gap-2">
                    <Calendar className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                    <span>{education.year[language]}</span>
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certifications Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <Award className="w-5 h-5 md:w-7 md:h-7 text-blue-600 dark:text-blue-400 flex-shrink-0" />
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                {t.education.certifications}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  onClick={() => setSelectedCertificate(cert)}
                  className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                >
                  {/* Certificate Image */}
                  <div className="relative h-48 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.name[language]}
                      className="w-full h-full object-contain p-2 bg-white"
                      onError={(e) => {
                        // Show placeholder if image fails to load
                        e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2Y3ZjdmNyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTRweCIgZmlsbD0iIzk5OTk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkNlcnRpZmljYXRlPC90ZXh0Pjwvc3ZnPg==';
                      }}
                    />
                    
                    {/* Date Badge */}
                    {cert.date && (
                      <div className="absolute top-2 right-2 md:top-4 md:right-4 px-2 md:px-3 py-0.5 md:py-1 bg-white/90 dark:bg-gray-900/90 rounded-full text-xs font-semibold text-gray-900 dark:text-white backdrop-blur-sm">
                        {cert.date}
                      </div>
                    )}
                  </div>

                  {/* Certificate Info */}
                  <div className="p-4 md:p-6 space-y-2 md:space-y-3">
                    <h4 className="text-base md:text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors break-words leading-tight">
                      {cert.name[language]}
                    </h4>
                    <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                      <Award className="w-3 h-3 md:w-4 md:h-4 mt-0.5 flex-shrink-0 text-blue-500" />
                      <span className="break-words">{cert.issuer[language]}</span>
                    </p>
                  </div>

                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Certificate Modal */}
        <AnimatePresence>
          {selectedCertificate && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedCertificate(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 20, stiffness: 300 }}
                className="relative max-w-4xl max-h-[90vh] bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedCertificate(null)}
                  className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Certificate Image */}
                <div className="p-4">
                  <img
                    src={selectedCertificate.image}
                    alt={selectedCertificate.name[language]}
                    className="w-full h-auto object-contain max-h-[60vh]"
                  />
                </div>

                {/* Certificate Details */}
                <div className="p-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                  <div className="space-y-4">
                    {/* Certificate Name */}
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                      {selectedCertificate.name[language]}
                    </h3>
                    
                    {/* Issuer */}
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <Award className="w-5 h-5 text-blue-500 flex-shrink-0" />
                      <span className="font-medium">{selectedCertificate.issuer[language]}</span>
                      {selectedCertificate.date && (
                        <span className="ml-auto text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full">
                          {selectedCertificate.date}
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    {selectedCertificate.description && (
                      <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        <p>{selectedCertificate.description[language]}</p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
