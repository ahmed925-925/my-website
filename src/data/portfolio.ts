
export const personalInfo = {
  name: 'Ahmed Mohamed Mahmoud Ibrahim',
  title: 'MERN Stack Developer',
  email: 'aahmed.muhaamed@gmail.com',
  phone: '+201029851247',
  location: 'Qena, Egypt',
  github: 'https://github.com/amedmohmed925',
  Linkedin: 'https://www.linkedin.com/in/aahmedmuhaamed',
  // Add your profile image URL here (can be from public folder or external URL)
  profileImage: 'https://i.imgur.com/9GJiXYg.jpeg' // You can update this path with your actual image
};

export const projects = [
  
  {
    id: 'codie-market',
    title: {
      en: 'Codie Market - Digital Products Marketplace',
      ar: 'كودي ماركت - سوق المنتجات الرقمية'
    },
    description: {
      en: 'A modern web platform for discovering, buying, and selling digital products, templates, and business solutions. Features developer profiles, product ratings, cart management, and a responsive UI.',
      ar: 'منصة ويب حديثة لاستكشاف وشراء وبيع المنتجات الرقمية والقوالب وحلول الأعمال. توفر المنصة ملفات تعريف للمطورين، تقييمات للمنتجات، إدارة سلة المشتريات، وواجهة مستخدم متجاوبة.'
    },
    fullDescription: {
      en: 'Codie Market is a comprehensive marketplace for digital products and business templates. Users can browse developer profiles, view product details, add items to their cart, and complete purchases. The platform supports multi-language (Arabic/English), advanced search and filtering, and interactive forms for product creation. Built with React, Redux, Bootstrap, TailwindCSS, and integrates with a Node.js/Express backend API. Features include secure authentication with OTP verification, admin and seller dashboards, product management system, and a seamless shopping experience.',
      ar: 'كودي ماركت هو سوق شامل للمنتجات الرقمية وقوالب الأعمال. يمكن للمستخدمين تصفح ملفات المطورين، عرض تفاصيل المنتجات، إضافة العناصر إلى السلة، وإتمام عمليات الشراء. تدعم المنصة تعدد اللغات (العربية/الإنجليزية)، البحث والتصفية المتقدمة، ونماذج تفاعلية لإنشاء المنتجات. تم بناء المنصة باستخدام React وRedux وBootstrap وTailwindCSS، وتتكامل مع واجهة برمجة تطبيقات باك-إند مبنية بـ Node.js/Express. تتضمن الميزات تسجيل دخول آمن مع التحقق عبر OTP، لوحات تحكم للإدارة والبائعين، نظام إدارة المنتجات، وتجربة تسوق سلسة.'
    },
    technologies: ['React', 'Redux', 'React Router', 'Bootstrap', 'TailwindCSS', 'Axios', 'Font Awesome', 'Vite', 'Node.js', 'Express.js', 'MongoDB'],
    links: {
      live: 'https://codiemarket.com'
    },
    category: 'fullstack',
    image: '/projects/codie-market.png',
    features: {
      en: [
        '👨‍💻 Developer Profiles with Ratings & Reviews',
        '🛍️ Advanced Product Cards with Images, Prices & Tags',
        '🛒 Complete Shopping Cart & Checkout System',
        '🌐 Multi-Language Support (Arabic/English)',
        '📱 Fully Responsive Design for All Devices',
        '🔍 Advanced Search & Smart Filtering',
        '📝 Interactive Forms for Product Creation',
        '🔐 Secure Authentication with OTP Verification',
        '👨‍💼 Admin & Seller Dashboard Panels',
        '🔗 RESTful API Integration with Backend'
      ],
      ar: [
        '👨‍💻 ملفات تعريف المطورين مع التقييمات والمراجعات',
        '🛍️ بطاقات منتجات متقدمة مع الصور والأسعار والوسوم',
        '🛒 نظام سلة مشتريات ودفع متكامل',
        '🌐 دعم تعدد اللغات (عربي/إنجليزي)',
        '📱 تصميم متجاوب بالكامل لجميع الأجهزة',
        '🔍 بحث متقدم وتصفية ذكية',
        '📝 نماذج تفاعلية لإنشاء المنتجات',
        '🔐 مصادقة آمنة مع التحقق عبر OTP',
        '👨‍💼 لوحات تحكم للإدارة والبائعين',
        '🔗 تكامل RESTful API مع الباك-إند'
      ]
    }
  },
   {
    id: 'eduquest',
    title: {
      en: 'EduQuest.com',
      ar: 'رحلة التعلم'
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
      frontend: 'https://github.com/amedmohmed925/Final-project-Frontend-project---nodejs-course',
      backend: 'https://github.com/amedmohmed925/Final-Project-Nodejs',
      live: 'https://eduquestcourses.netlify.app/'
    },
    category: 'fullstack',
    image: '/projects/eduquest.png', // Add your project image
    features: {
      en: ['User Authentication & Authorization', 'Course Management System', 'Payment Gateway Integration', 'Real-time Updates', 'Interactive Learning Modules'],
      ar: ['مصادقة وتفويض المستخدم', 'نظام إدارة الدورات', 'تكامل بوابة الدفع', 'التحديثات الفورية', 'وحدات تعليمية تفاعلية']
    }
  },
   {
    id: 'Casher',
    title: {
      en: 'Casher - Multi-Tenant POS System',
      ar: 'كاشير - نظام نقاط البيع متعدد المستأجرين'
    },
    description: {
      en: 'An advanced multi-tenant cashier system designed for supermarkets and large stores. Provides comprehensive management of products, invoices, customers, inventory, and financial reports with a smart subscription system.',
      ar: 'نظام كاشير متقدم متعدد المستأجرين مصمم خصيصاً للسوبرماركت والمتاجر الكبيرة. يوفر إدارة شاملة للمنتجات، الفواتير، العملاء، المخزون والتقارير المالية مع نظام اشتراكات ذكي.'
    },
    fullDescription: {
      en: 'Casher Project is a comprehensive Point of Sale (POS) management solution targeting supermarkets and large retail stores. Built with a multi-tenant architecture that allows each store owner to have a separate, isolated account with their own private data. Features include secure JWT authentication with OTP verification, advanced product and customer management, smart invoice system with automatic profit calculations, real-time inventory tracking, comprehensive analytics dashboard with daily/monthly/yearly reports, flexible subscription system with 30-day free trial, and a powerful Super Admin panel for complete system oversight.',
      ar: 'نظام Casher هو حل متكامل لإدارة نقاط البيع يستهدف السوبرماركت والمتاجر الكبيرة. تم بناؤه بمعماريّة متعددة المستأجرين تتيح لكل مالك متجر الحصول على حساب منفصل ومعزول مع بياناته الخاصة. يتضمن نظام مصادقة آمن بـ JWT مع OTP، إدارة متقدمة للمنتجات والعملاء، نظام فواتير ذكي مع حساب تلقائي للأرباح، تتبع فوري للمخزون، لوحة تحليلات شاملة بتقارير يومية وشهرية وسنوية، نظام اشتراكات مرن مع فترة تجريبية 30 يوم، ولوحة Super Admin قوية لإدارة كاملة للنظام.'
    },
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'Bcrypt', 'Multer', 'Cloudinary', 'Nodemailer', 'Express-Validator', 'Swagger UI', 'Winston', 'Helmet', 'CORS', 'Jest', 'Supertest'],
    links: {
      github: 'https://github.com/amedmohmed925/KasherProject',
    },
    category: 'backend',
    image: '/projects/Casher.png',
    features: {
      en: [
        '🔐 Secure JWT Authentication with OTP Verification',
        '👥 Multi-Tenant Architecture with Isolated Data',
        '📦 Advanced Product & Inventory Management',
        '🧾 Smart Invoice System with Auto Profit Calculation',
        '💳 Flexible Subscription System (30-day Free Trial)',
        '📊 Comprehensive Analytics & Financial Reports',
        '👨‍💼 Super Admin Panel for Complete Oversight',
        '🛡️ Enterprise-Grade Security (XSS, CSRF, Rate Limiting)',
        '📚 Full Swagger API Documentation',
        '🧪 Automated Testing with Jest & Supertest'
      ],
      ar: [
        '🔐 مصادقة آمنة بـ JWT مع التحقق عبر OTP',
        '👥 معمارية متعددة المستأجرين مع بيانات معزولة',
        '📦 إدارة متقدمة للمنتجات والمخزون',
        '🧾 نظام فواتير ذكي مع حساب تلقائي للأرباح',
        '💳 نظام اشتراكات مرن (فترة تجريبية 30 يوم)',
        '📊 تحليلات شاملة وتقارير مالية',
        '👨‍💼 لوحة Super Admin للإدارة الكاملة',
        '🛡️ أمان على مستوى المؤسسات (XSS, CSRF, Rate Limiting)',
        '📚 توثيق Swagger كامل لجميع الـ APIs',
        '🧪 اختبارات آلية باستخدام Jest و Supertest'
      ]
    }
  },
  {
    id: 'bidaya-platform',
    title: {
      en: 'Bidaya Platform - Educational Management System',
      ar: 'منصة البداية - نظام إدارة تعليمية'
    },
    description: {
      en: 'A comprehensive educational platform specialized in teaching mathematics for high school students. Features video lessons, interactive quizzes, assignments, and analytics with full Arabic support and dark mode.',
      ar: 'منصة تعليمية شاملة متخصصة في تدريس الرياضيات لطلاب المرحلة الثانوية. توفر دروس فيديو، اختبارات تفاعلية، مهام، وتحليلات مع دعم كامل للعربية والوضع الليلي.'
    },
    fullDescription: {
      en: 'Bidaya Platform is a comprehensive e-learning system specifically designed for high school students (grades 1-3) with support for science and literature tracks. Built with React and Node.js, the platform offers organized educational content, interactive quizzes with automatic grading, task management, video lessons, and comprehensive analytics. Features include secure authentication with OTP verification, code-based registration system, role-based access control (Student, Instructor, Admin), personal dashboard with progress tracking, academic calendar, and educational materials management. The platform provides both student and admin interfaces with complete CRUD operations, dark/light mode with saved preferences, and fully responsive mobile-first design with RTL Arabic support.',
      ar: 'منصة البداية هي نظام تعليمي إلكتروني شامل مصمم خصيصاً لطلاب المرحلة الثانوية (الصفوف 1-3) مع دعم المسارين العلمي والأدبي. تم بناؤها باستخدام React و Node.js، توفر المنصة محتوى تعليمي منظم، اختبارات تفاعلية مع تصحيح تلقائي، إدارة المهام، دروس فيديو، وتحليلات شاملة. تتضمن الميزات مصادقة آمنة مع التحقق عبر OTP، نظام تسجيل قائم على الأكواد، التحكم في الوصول على أساس الأدوار (طالب، معلم، مشرف)، لوحة تحكم شخصية مع تتبع التقدم، تقويم أكاديمي، وإدارة المواد التعليمية. توفر المنصة واجهات للطلاب والإدارة مع عمليات CRUD كاملة، وضع داكن/فاتح مع حفظ الإعدادات، وتصميم متجاوب بالكامل mobile-first مع دعم RTL للعربية.'
    },
    technologies: ['React', 'Redux Toolkit', 'React Router', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'Bcrypt', 'Nodemailer', 'Express Validator', 'Joi', 'CSS3', 'Vercel'],
    links: {
      live: 'https://incomparable-bubblegum-7cd17f.netlify.app/'
    },
    category: 'fullstack',
    image: '/projects/bidaya-platform.png',
    features: {
      en: [
        '🎓 Complete Educational Management for High School (Grades 1-3)',
        '📹 Interactive Video Lessons with Multiple Quality Options',
        '🧠 Smart Quizzes with Automatic Grading & Detailed Analytics',
        '📝 Assignment System with Submission Tracking',
        '📊 Comprehensive Dashboard with Progress Analytics',
        '📅 Academic Calendar with Events & Deadlines',
        '🔐 Secure Authentication with OTP Email Verification',
        '👥 Role-Based Access Control (Student, Instructor, Admin)',
        '🌙 Dark/Light Mode with Saved Preferences',
        '🌐 Full RTL Arabic Support & Mobile-First Design'
      ],
      ar: [
        '🎓 إدارة تعليمية كاملة للمرحلة الثانوية (الصفوف 1-3)',
        '📹 دروس فيديو تفاعلية مع خيارات جودة متعددة',
        '🧠 اختبارات ذكية مع تصحيح تلقائي وتحليلات تفصيلية',
        '📝 نظام مهام مع تتبع التسليم',
        '📊 لوحة تحكم شاملة مع تحليلات التقدم',
        '📅 تقويم أكاديمي مع الفعاليات والمواعيد النهائية',
        '🔐 مصادقة آمنة مع التحقق عبر OTP بالبريد الإلكتروني',
        '👥 التحكم في الوصول على أساس الأدوار (طالب، معلم، مشرف)',
        '🌙 وضع داكن/فاتح مع حفظ الإعدادات',
        '🌐 دعم كامل للعربية RTL وتصميم Mobile-First'
      ]
    }
  },
  
 
 
  {
    id: 'ghrass',
    title: {
      en: 'Ghirass Library - Islamic & Literary Books Platform',
      ar: 'مكتبة غِرَاسٌ - منصة الكتب الإسلامية والأدبية'
    },
    description: {
      en: 'An advanced e-commerce platform for selling Islamic and literary books, allowing users to browse and purchase books easily and securely, with an integrated inventory and order management system.',
      ar: 'منصة إلكترونية متطورة لبيع الكتب الإسلامية والأدبية، تُمكن المستخدمين من تصفح وشراء الكتب بطريقة سهلة وآمنة، مع نظام إدارة متكامل للمخزون والطلبات.'
    },
    fullDescription: {
      en: 'Ghirass Library is a modern and sophisticated web application built with React.js technology, aimed at providing an exceptional purchasing experience for Islamic and literary books. The project features an attractive and responsive Arabic user interface, with full support for various categories such as Fiqh, Tafsir, Aqeedah, Hadith, Seerah, and Arabic language books. Built from scratch with advanced features including secure Firebase Authentication with user role support (Admin/User), smart shopping cart system with real-time data persistence, automatic inventory management with instant updates after each sale, comprehensive order management with email notifications via EmailJS, integrated admin dashboard for complete book management, and outstanding user experience with Bootstrap 5 and Animate.css effects. The platform includes image compression with CompressorJS, responsive design for all devices, high performance with Vite build tool, and scalable architecture for future growth.',
      ar: 'مكتبة غِرَاسٌ هي تطبيق ويب حديث ومتطور مبني بتقنية React.js من الصفر، يهدف إلى توفير تجربة شراء مميزة للكتب الإسلامية والأدبية. يتميز المشروع بواجهة مستخدم جذابة ومتجاوبة باللغة العربية، مع دعم كامل للعديد من الفئات مثل كتب الفقه والتفسير والعقيدة والحديث والسيرة واللغة العربية. تم بناء المشروع بالكامل من الصفر مع ميزات متقدمة تشمل نظام مصادقة آمن عبر Firebase مع دعم أدوار المستخدمين (Admin/User)، سلة تسوق ذكية مع حفظ البيانات في الوقت الفعلي، إدارة تلقائية للمخزون مع تحديث فوري عند كل عملية بيع، إدارة شاملة للطلبات مع إرسال إشعارات عبر البريد الإلكتروني باستخدام EmailJS، لوحة تحكم إدارية متكاملة لإدارة الكتب بالكامل، وتجربة مستخدم متميزة مع تأثيرات Bootstrap 5 وAnimate.css. تشمل المنصة ضغط الصور باستخدام CompressorJS، تصميم متجاوب لجميع الأجهزة، أداء عالي مع أداة Vite، وبنية معمارية قابلة للتوسع.'
    },
    technologies: ['React.js', 'Vite', 'Firebase', 'Firestore', 'Firebase Storage', 'Firebase Authentication', 'Bootstrap', 'Animate.css', 'EmailJS', 'CompressorJS', 'React Router', 'React Toastify', 'FontAwesome', 'PropTypes'],
    links: {
      live: 'https://ghrass-library.vercel.app/',
      github: 'https://github.com/amedmohmed925/ghrass-library'
    },
    category: 'fullstack',
    image: '/projects/ghrass.png',
    features: {
      en: [
        '🔐 Secure Firebase Authentication with Role-Based Access (Admin/User)',
        '🛒 Smart Shopping Cart with Real-Time Data Persistence',
        '📦 Automatic Inventory Management with Instant Updates',
        '📧 Comprehensive Order System with EmailJS Notifications',
        '👨‍💼 Integrated Admin Dashboard for Complete Book Management',
        '📚 Multiple Book Categories (Fiqh, Tafsir, Aqeedah, Hadith, Seerah, Arabic)',
        '🖼️ Image Compression with CompressorJS Before Upload',
        '📱 Fully Responsive Design with Bootstrap 5',
        '✨ Attractive Visual Effects with Animate.css',
        '⚡ High Performance with Vite Build Tool',
        '🔍 Advanced Search and Filter System',
        '📊 Order Tracking and Management Dashboard'
      ],
      ar: [
        '🔐 مصادقة آمنة عبر Firebase مع أدوار المستخدمين (مدير/مستخدم)',
        '🛒 سلة تسوق ذكية مع حفظ البيانات في الوقت الفعلي',
        '📦 إدارة تلقائية للمخزون مع تحديث فوري',
        '📧 نظام طلبات شامل مع إشعارات EmailJS',
        '👨‍💼 لوحة تحكم إدارية متكاملة لإدارة الكتب',
        '📚 فئات متعددة للكتب (فقه، تفسير، عقيدة، حديث، سيرة، لغة عربية)',
        '🖼️ ضغط الصور باستخدام CompressorJS قبل الرفع',
        '📱 تصميم متجاوب بالكامل مع Bootstrap 5',
        '✨ تأثيرات بصرية جذابة مع Animate.css',
        '⚡ أداء عالي مع أداة Vite',
        '🔍 نظام بحث وتصفية متقدم',
        '📊 لوحة متابعة وإدارة الطلبات'
      ]
    }
  },
  
  {
    id: 'rawnaq',
    title: {
      en: 'Rawnaq - Arabic Fashion E-Commerce',
      ar: 'رونق - متجر الأزياء العربية'
    },
    description: {
      en: 'A modern e-commerce platform specializing in authentic Arabic fashion. Combines Arab heritage with contemporary design featuring elegant Islamic patterns, gold and olive colors, and full RTL Arabic support. Built with Bolt AI assistance for design.',
      ar: 'منصة تجارة إلكترونية عصرية متخصصة في الأزياء العربية الأصيلة. يجمع بين التراث العربي والتصميم المعاصر مع نقوش إسلامية أنيقة، ألوان ذهبية وزيتونية، ودعم كامل للعربية RTL. تم البناء بمساعدة Bolt AI للتصميم.'
    },
    fullDescription: {
      en: 'Rawnaq is a comprehensive e-commerce platform built with cutting-edge web technologies, specifically designed for authentic Arabic fashion. The platform delivers a seamless shopping experience that combines authenticity with modernity. Features include an elegant Islamic design with geometric patterns and Cairo Arabic font, comprehensive admin dashboard with live statistics and interactive charts, smart shopping cart with automatic data persistence, secure authentication system with protected routes, product management with multiple images and variants, order tracking and customer management, reports and analytics with Recharts, and fully responsive design across all devices. The project showcases beautiful Islamic backgrounds, custom icons (crescent, star, patterns), and smooth animations with Framer Motion.',
      ar: 'رونق هو منصة تجارة إلكترونية متكاملة مبنية بأحدث تقنيات الويب، مصممة خصيصاً للأزياء العربية الأصيلة. توفر المنصة تجربة تسوق سلسة تجمع بين الأصالة والعصرية. تتضمن الميزات تصميم إسلامي أنيق مع نقوش هندسية وخط Cairo العربي، لوحة إدارة شاملة مع إحصائيات حية ورسوم بيانية تفاعلية، سلة تسوق ذكية مع حفظ تلقائي للبيانات، نظام مصادقة آمن مع حماية للمسارات، إدارة المنتجات مع صور متعددة ومتغيرات، تتبع الطلبات وإدارة العملاء، تقارير وتحليلات مع Recharts، وتصميم متجاوب بالكامل لجميع الأجهزة. يعرض المشروع خلفيات إسلامية جميلة، أيقونات مخصصة (هلال، نجمة، زخارف)، ورسوم متحركة سلسة مع Framer Motion.'
    },
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'React Router', 'React Hook Form', 'React Query', 'Framer Motion', 'Recharts', 'Headless UI', 'Heroicons', 'Lucide React', 'Yup', 'date-fns', 'Supabase'],
    links: {
      github: 'https://github.com/amedmohmed925/newBrand',
      live: 'https://fancy-twilight-9285bc.netlify.app/'
    },
    category: 'frontend',
    image: '/projects/rawnaq.png',
    features: {
      en: [
        '🕌 Elegant Islamic Design with Geometric Patterns',
        '🛍️ Complete E-Commerce with Cart & Checkout',
        '📊 Admin Dashboard with Live Analytics & Charts',
        '🎨 Cairo Arabic Font & Full RTL Support',
        '🌙 Custom Islamic Icons (Crescent, Star, Patterns)',
        '🔐 Secure Authentication & Protected Routes',
        '📦 Product Management with Multiple Images & Variants',
        '📱 100% Responsive Design for All Devices',
        '✨ Smooth Animations with Framer Motion',
        '🤖 Built with Bolt AI Design Assistance'
      ],
      ar: [
        '🕌 تصميم إسلامي أنيق مع نقوش هندسية',
        '🛍️ تجارة إلكترونية كاملة مع سلة ودفع',
        '📊 لوحة إدارة مع تحليلات حية ورسوم بيانية',
        '🎨 خط Cairo العربي ودعم RTL كامل',
        '🌙 أيقونات إسلامية مخصصة (هلال، نجمة، زخارف)',
        '🔐 مصادقة آمنة ومسارات محمية',
        '📦 إدارة المنتجات مع صور ومتغيرات متعددة',
        '📱 تصميم متجاوب 100% لجميع الأجهزة',
        '✨ رسوم متحركة سلسة مع Framer Motion',
        '🤖 مبني بمساعدة Bolt AI للتصميم'
      ]
    }
  },
 
 
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
    'CI/CD (Vercel)','C++'
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
