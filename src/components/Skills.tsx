import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { skills } from '../data/portfolio';
import { getSkillIcon } from '../utils/skillIcons';

export default function Skills() {
  const { t } = useLanguage();

  const categories = [
    { key: 'frontend', title: t.skills.frontend, skills: skills.frontend, accentColor: 'blue' },
    { key: 'backend', title: t.skills.backend, skills: skills.backend, accentColor: 'green' },
    { key: 'tools', title: t.skills.tools, skills: skills.tools, accentColor: 'purple' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 100
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        delay: 0.2
      }
    }
  };

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-20 overflow-hidden">
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.skills.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {t.skills.subtitle}
          </p>
        </motion.div>

        <div className="space-y-12">
          {categories.map((category) => (
            <motion.div
              key={category.key}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="space-y-6"
            >
              <motion.h3
                variants={itemVariants}
                className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3"
              >
                <span className={`w-3 h-3 rounded-full bg-${category.accentColor}-500 animate-pulse`}></span>
                {category.title}
              </motion.h3>

              <motion.div
                variants={containerVariants}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
              >
                {category.skills.map((skill) => {
                  const { icon: Icon, color } = getSkillIcon(skill);
                  return (
                    <motion.div
                      key={skill}
                      variants={cardVariants}
                      whileHover={{ 
                        scale: 1.05, 
                        y: -5,
                        transition: { type: 'spring', stiffness: 300 }
                      }}
                      className="group relative bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
                    >
                      {/* Gradient Background on Hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                      
                      {/* Content */}
                      <div className="relative z-10 flex flex-col items-center gap-3">
                        <div className={`p-3 rounded-lg bg-gradient-to-br ${color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white text-center leading-tight">
                          {skill}
                        </p>
                      </div>

                      {/* Shine Effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
