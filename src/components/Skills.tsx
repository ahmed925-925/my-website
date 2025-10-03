import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { skills } from '../data/portfolio';
import { getSkillIcon } from '../utils/skillIcons';
import SkillCard from './SkillCard';

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
                    <SkillCard
                      key={skill}
                      skill={skill}
                      Icon={Icon}
                      color={color}
                      variants={cardVariants}
                    />
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
