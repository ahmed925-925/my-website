import { GraduationCap, Award, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { education, certifications } from '../data/portfolio';

export default function Education() {
  const { language, t } = useLanguage();

  return (
    <section id="education" className="min-h-screen flex items-center justify-center px-8 py-20">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.education.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
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
            className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-blue-200 dark:border-blue-800"
          >
            <div className="flex items-start gap-6">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg"
              >
                <GraduationCap className="w-8 h-8 text-white" />
              </motion.div>

              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {education.degree[language]}
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-2 font-medium">
                  {education.university[language]}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400">
                  <span>{education.location[language]}</span>
                  <span>•</span>
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {education.year[language]}
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
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-7 h-7 text-blue-600 dark:text-blue-400" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                {t.education.certifications}
              </h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                >
                  {/* Certificate Image */}
                  <div className="relative h-48 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.name[language]}
                      className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      onError={(e) => {
                        e.currentTarget.style.opacity = '0';
                      }}
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 to-purple-600/80 flex items-center justify-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: idx * 0.1 + 0.3, type: 'spring' }}
                      >
                        <Award className="w-16 h-16 text-white opacity-90" />
                      </motion.div>
                    </div>
                    
                    {/* Date Badge */}
                    {cert.date && (
                      <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 dark:bg-gray-900/90 rounded-full text-xs font-semibold text-gray-900 dark:text-white backdrop-blur-sm">
                        {cert.date}
                      </div>
                    )}
                  </div>

                  {/* Certificate Info */}
                  <div className="p-6 space-y-3">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {cert.name[language]}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                      <Award className="w-4 h-4 mt-0.5 flex-shrink-0 text-blue-500" />
                      <span>{cert.issuer[language]}</span>
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
      </div>
    </section>
  );
}
