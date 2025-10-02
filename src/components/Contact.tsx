import { Mail, Phone, Github, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { personalInfo } from '../data/portfolio';

export default function Contact() {
  const { t } = useLanguage();

  const contactItems = [
    {
      icon: Mail,
      label: t.contact.email,
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`
    },
    {
      icon: Phone,
      label: t.contact.phone,
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`
    },
    {
      icon: Github,
      label: t.contact.github,
      value: 'amedmohmed925',
      href: personalInfo.github
    }
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-8 py-20">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.contact.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {contactItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fadeIn"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-xl group-hover:scale-110 transition-transform duration-200">
                  <item.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    {item.label}
                  </p>
                  <p className="text-gray-900 dark:text-white font-medium truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {item.value}
                  </p>
                </div>

                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors opacity-0 group-hover:opacity-100" />
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg"
          >
            <Mail className="w-5 h-5" />
            {t.contact.sendMessage}
          </a>
        </div>
      </div>
    </section>
  );
}
