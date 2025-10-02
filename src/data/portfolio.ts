export const personalInfo = {
  name: 'Ahmed Mohamed Mahmoud Ibrahim',
  title: 'MERN Stack Developer',
  email: 'aahmed.muhaamed@gmail.com',
  phone: '+201029851247',
  location: 'Qena, Egypt',
  github: 'https://github.com/amedmohmed925',
  portfolio: 'https://ahmed-muhamed.netlify.app'
};

export const projects = [
  {
    id: 'eduquest',
    title: {
      en: 'EduQuest.com',
      ar: 'EduQuest.com'
    },
    description: {
      en: 'Developed a comprehensive educational system (LMS) with basic and advanced features. Implemented JWT authentication, API interfaces for user management and payment gateway integration.',
      ar: 'تطوير نظام تعليمي شامل (LMS) بميزات أساسية ومتقدمة. تنفيذ مصادقة JWT، واجهات API لإدارة المستخدمين وتكامل بوابة الدفع.'
    },
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Firebase'],
    links: {
      frontend: '#',
      backend: '#'
    },
    category: 'fullstack'
  },
  {
    id: 'ghrass',
    title: {
      en: 'Ghrass Library Website',
      ar: 'موقع مكتبة غراس'
    },
    description: {
      en: 'Created a platform for displaying and selling Islamic and educational books. Included inventory management and product display functionalities.',
      ar: 'إنشاء منصة لعرض وبيع الكتب الإسلامية والتعليمية. تشمل إدارة المخزون ووظائف عرض المنتجات.'
    },
    technologies: ['React', 'Firebase', 'JavaScript', 'HTML', 'CSS'],
    links: {
      live: '#'
    },
    category: 'frontend'
  },
  {
    id: 'ecommerce-api',
    title: {
      en: 'E-Commerce API',
      ar: 'واجهة برمجة التجارة الإلكترونية'
    },
    description: {
      en: 'Designed and developed a REST API for managing products, orders, and users in an e-commerce system.',
      ar: 'تصميم وتطوير REST API لإدارة المنتجات والطلبات والمستخدمين في نظام التجارة الإلكترونية.'
    },
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'RESTful API'],
    links: {
      github: '#'
    },
    category: 'backend'
  },
  {
    id: 'products-management',
    title: {
      en: 'Products Management System',
      ar: 'نظام إدارة المنتجات'
    },
    description: {
      en: 'Built an application for adding, editing, and deleting products with Excel data export functionality.',
      ar: 'بناء تطبيق لإضافة وتعديل وحذف المنتجات مع وظيفة تصدير البيانات إلى Excel.'
    },
    technologies: ['HTML', 'CSS', 'JavaScript'],
    links: {
      live: '#'
    },
    category: 'frontend'
  },
  {
    id: 'restaurant',
    title: {
      en: 'Restaurant Website',
      ar: 'موقع مطعم'
    },
    description: {
      en: 'Developed a responsive restaurant website with professional visual animations.',
      ar: 'تطوير موقع مطعم متجاوب مع رسوم متحركة بصرية احترافية.'
    },
    technologies: ['HTML', 'CSS', 'JavaScript'],
    links: {
      live: '#'
    },
    category: 'frontend'
  }
];

export const skills = {
  frontend: [
    'React.js', 'Redux', 'Context API', 'React Router', 'React Hooks',
    'HTML', 'CSS', 'Sass', 'Tailwind CSS', 'Bootstrap',
    'Responsive Design', 'Vite', 'Webpack'
  ],
  backend: [
    'Node.js', 'Express.js', 'MongoDB', 'Mongoose',
    'RESTful API', 'JWT Authentication', 'Firebase',
    'MVC Architecture', 'Postman', 'Socket.io'
  ],
  tools: [
    'JavaScript (ES6+)', 'TypeScript', 'Git', 'GitHub',
    'Jest', 'Mocha', 'Supertest', 'Gulp.js', 'Pug.js',
    'CI/CD (Vercel)'
  ]
};

export const education = {
  degree: {
    en: 'Bachelor\'s Degree in Educational Technology',
    ar: 'بكالوريوس في تكنولوجيا التعليم'
  },
  university: {
    en: 'Faculty of Specific Education, South Valley University',
    ar: 'كلية التربية النوعية، جامعة جنوب الوادي'
  },
  location: {
    en: 'Qena, Egypt',
    ar: 'قنا، مصر'
  },
  year: {
    en: 'Expected 2027',
    ar: 'متوقع 2027'
  }
};

export const certifications = [
  {
    name: {
      en: 'React Track Certificate',
      ar: 'شهادة مسار React'
    },
    issuer: {
      en: 'Creativa Innovation Hub, Qena',
      ar: 'مركز كرياتيفا للابتكار، قنا'
    }
  },
  {
    name: {
      en: 'Back-End Track Certificate',
      ar: 'شهادة مسار الواجهات الخلفية'
    },
    issuer: {
      en: 'Creativa Innovation Hub, Qena',
      ar: 'مركز كرياتيفا للابتكار، قنا'
    }
  },
  {
    name: {
      en: 'Pre-Programming Certificate',
      ar: 'شهادة ما قبل البرمجة'
    },
    issuer: {
      en: 'Creativa Innovation Hub, Qena',
      ar: 'مركز كرياتيفا للابتكار، قنا'
    }
  }
];
