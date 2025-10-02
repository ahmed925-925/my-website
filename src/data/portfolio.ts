export const personalInfo = {
  name: 'Ahmed Mohamed Mahmoud Ibrahim',
  title: 'MERN Stack Developer',
  email: 'aahmed.muhaamed@gmail.com',
  phone: '+201029851247',
  location: 'Qena, Egypt',
  github: 'https://github.com/amedmohmed925',
  // Add your profile image URL here (can be from public folder or external URL)
  profileImage: 'https://i.imgur.com/9GJiXYg.jpeg' // You can update this path with your actual image
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
    fullDescription: {
      en: 'A comprehensive Learning Management System built with the MERN stack. Features include user authentication with JWT, course management, payment gateway integration, real-time updates, and interactive learning modules. The system supports multiple user roles including students, instructors, and administrators.',
      ar: 'نظام إدارة تعليمي شامل مبني بتقنية MERN Stack. يتضمن مصادقة المستخدم باستخدام JWT، إدارة الدورات، تكامل بوابة الدفع، التحديثات الفورية، ووحدات تعليمية تفاعلية. يدعم النظام أدوار متعددة للمستخدمين بما في ذلك الطلاب والمدرسين والمسؤولين.'
    },
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Firebase'],
    links: {
      frontend: '#',
      backend: '#'
    },
    category: 'fullstack',
    image: '/projects/eduquest.jpg', // Add your project image
    features: {
      en: ['User Authentication & Authorization', 'Course Management System', 'Payment Gateway Integration', 'Real-time Updates', 'Interactive Learning Modules'],
      ar: ['مصادقة وتفويض المستخدم', 'نظام إدارة الدورات', 'تكامل بوابة الدفع', 'التحديثات الفورية', 'وحدات تعليمية تفاعلية']
    }
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
    fullDescription: {
      en: 'An e-commerce platform dedicated to Islamic and educational books. Built with React and Firebase, featuring real-time inventory management, search and filter capabilities, shopping cart functionality, and responsive design for optimal viewing on all devices.',
      ar: 'منصة تجارة إلكترونية مخصصة للكتب الإسلامية والتعليمية. مبني باستخدام React و Firebase، يتميز بإدارة المخزون الفورية، قدرات البحث والتصفية، وظيفة سلة التسوق، وتصميم متجاوب للعرض الأمثل على جميع الأجهزة.'
    },
    technologies: ['React', 'Firebase', 'JavaScript', 'HTML', 'CSS'],
    links: {
      live: '#'
    },
    category: 'frontend',
    image: '/projects/ghrass.jpg',
    features: {
      en: ['Real-time Inventory Management', 'Advanced Search & Filters', 'Shopping Cart', 'Responsive Design', 'Firebase Integration'],
      ar: ['إدارة المخزون الفورية', 'بحث وتصفية متقدمة', 'سلة التسوق', 'تصميم متجاوب', 'تكامل Firebase']
    }
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
    fullDescription: {
      en: 'A robust RESTful API built with Node.js and Express.js for e-commerce applications. Features include complete CRUD operations for products, orders, and user management, JWT authentication, MongoDB database integration, and comprehensive error handling.',
      ar: 'واجهة برمجة RESTful قوية مبنية باستخدام Node.js و Express.js لتطبيقات التجارة الإلكترونية. تتضمن عمليات CRUD كاملة للمنتجات والطلبات وإدارة المستخدمين، مصادقة JWT، تكامل قاعدة بيانات MongoDB، ومعالجة شاملة للأخطاء.'
    },
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'RESTful API'],
    links: {
      github: '#'
    },
    category: 'backend',
    image: '/projects/ecommerce-api.jpg',
    features: {
      en: ['RESTful API Design', 'JWT Authentication', 'CRUD Operations', 'MongoDB Integration', 'Error Handling'],
      ar: ['تصميم RESTful API', 'مصادقة JWT', 'عمليات CRUD', 'تكامل MongoDB', 'معالجة الأخطاء']
    }
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
    fullDescription: {
      en: 'A comprehensive product management application with full CRUD functionality. Features include data validation, Excel export capabilities, local storage persistence, and an intuitive user interface for managing product inventories.',
      ar: 'تطبيق شامل لإدارة المنتجات مع وظائف CRUD كاملة. يتضمن التحقق من صحة البيانات، قدرات تصدير Excel، الاستمرارية في التخزين المحلي، وواجهة مستخدم بديهية لإدارة مخزون المنتجات.'
    },
    technologies: ['HTML', 'CSS', 'JavaScript'],
    links: {
      live: '#'
    },
    category: 'frontend',
    image: '/projects/products-management.jpg',
    features: {
      en: ['CRUD Operations', 'Excel Export', 'Data Validation', 'Local Storage', 'Responsive UI'],
      ar: ['عمليات CRUD', 'تصدير Excel', 'التحقق من البيانات', 'التخزين المحلي', 'واجهة متجاوبة']
    }
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
    fullDescription: {
      en: 'A modern, fully responsive restaurant website featuring smooth animations, interactive menu displays, online reservation system, and an elegant design that showcases the restaurant\'s ambiance and offerings.',
      ar: 'موقع مطعم حديث ومتجاوب بالكامل يتميز برسوم متحركة سلسة، عروض قائمة تفاعلية، نظام حجز عبر الإنترنت، وتصميم أنيق يعرض أجواء المطعم وعروضه.'
    },
    technologies: ['HTML', 'CSS', 'JavaScript'],
    links: {
      live: '#'
    },
    category: 'frontend',
    image: '/projects/restaurant.jpg',
    features: {
      en: ['Responsive Design', 'Smooth Animations', 'Interactive Menu', 'Reservation System', 'Modern UI/UX'],
      ar: ['تصميم متجاوب', 'رسوم متحركة سلسة', 'قائمة تفاعلية', 'نظام الحجز', 'واجهة حديثة']
    }
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
    },
    image: '/certificates/react-cert.jpg', // Add your certificate image
    date: '2024'
  },
  {
    name: {
      en: 'Back-End Track Certificate',
      ar: 'شهادة مسار الواجهات الخلفية'
    },
    issuer: {
      en: 'Creativa Innovation Hub, Qena',
      ar: 'مركز كرياتيفا للابتكار، قنا'
    },
    image: '/certificates/backend-cert.jpg',
    date: '2024'
  },
  {
    name: {
      en: 'Pre-Programming Certificate',
      ar: 'شهادة ما قبل البرمجة'
    },
    issuer: {
      en: 'Creativa Innovation Hub, Qena',
      ar: 'مركز كرياتيفا للابتكار، قنا'
    },
    image: '/certificates/preprogramming-cert.jpg',
    date: '2023'
  }
];
