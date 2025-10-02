import { GraduationCap, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { education, certifications } from '../data/portfolio';

export default function Education() {
  const { language, t } = useLanguage();

  return (
    <section id="education" className="min-h-screen flex items-center justify-center px-8 py-20">
      <div className="max-w-5xl w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.education.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {t.education.subtitle}
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fadeIn">
            <div className="flex items-start gap-6">
              <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-xl">
                <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {education.degree[language]}
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
                  {education.university[language]}
                </p>
                <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
                  <span>{education.location[language]}</span>
                  <span>•</span>
                  <span>{education.year[language]}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fadeIn" style={{ animationDelay: '100ms' }}>
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {t.education.certifications}
              </h3>
            </div>

            <div className="grid gap-4">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
                >
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {cert.name[language]}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {t.education.from} {cert.issuer[language]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
