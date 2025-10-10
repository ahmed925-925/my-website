
export const personalInfo = {
  name: 'Ahmed Mohamed Mahmoud Ibrahim',
  title: 'MERN Stack Developer',
  email: 'aahmed.muhaamed@gmail.com',
  phone: '+201029851247',
  location: 'Qena, Egypt',
  github: 'https://github.com/amedmohmed925',
  Linkedin: 'https://www.linkedin.com/in/aahmedmuhaamed',
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
      en: "I built the entire front-end of Codie Market from scratch and actively contributed to the back-end development as well. It’s one of the most challenging and educational projects I’ve worked on — I faced multiple technical obstacles, but each one helped me grow and refine my skills. Codie Market is a comprehensive marketplace for digital products and business templates. It allows users to browse developer profiles, explore detailed product pages, add items to their cart, and complete purchases smoothly. The platform supports both Arabic and English, features advanced search and filtering, and includes interactive forms for product creation. I developed it using React, Redux, Bootstrap, while integrating it with a Node.js/Express backend API. The project also includes secure authentication with OTP verification, admin and seller dashboards, and a complete product management system, delivering a seamless and engaging shopping experience.",
      ar: 'قمتُ ببناء الواجهة الأمامية لسوق كودي من الصفر، وساهمتُ بفعالية في تطوير الواجهة الخلفية. يُعدّ هذا المشروع من أكثر المشاريع التي عملت عليها تحديًا وتثقيفًا، فقد واجهتُ العديد من العقبات التقنية، لكن كل واحدة منها ساعدتني على تنمية مهاراتي وصقلها. سوق كودي هو سوق شامل للمنتجات الرقمية وقوالب الأعمال. يتيح للمستخدمين تصفح ملفات تعريف المطورين، واستكشاف صفحات المنتجات التفصيلية، وإضافة المنتجات إلى سلة التسوق، وإتمام عمليات الشراء بسلاسة. تدعم المنصة اللغتين العربية والإنجليزية، وتتميز ببحث وتصفية متقدمين، وتتضمن نماذج تفاعلية لإنشاء المنتجات.طوّرتُه باستخدام React وRedux وBootstrap، مع دمجه مع واجهة برمجة تطبيقات خلفية Node.js/Express. يتضمن المشروع أيضًا مصادقة آمنة مع التحقق من كلمة المرور لمرة واحدة (OTP)، ولوحات معلومات للمسؤول والبائع، ونظامًا متكاملًا لإدارة المنتجات، مما يوفر تجربة تسوق سلسة وجذابة..'
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
    ar: 'رحلة التعلم (EduQuest)'
  },
  description: {
    en: "I built EduQuest — a full-featured online Learning Management System (LMS) from scratch, including both frontend and backend. It supports live sessions, course management, exams, payments and a rich community system.",
    ar: 'قمت بتطوير EduQuest — نظام تعليمي إلكتروني متكامل (LMS) من الصفر، بما يشمل الواجهة الأمامية والخلفية. يدعم جلسات مباشرة، إدارة الكورسات، الامتحانات، الدفع، ونظام مجتمع تفاعلي متقدّم.'
  },
  shortDescription: {
    en: "Complete Learning Management System with live classes, WebRTC video sessions, real-time chat, advanced exam engine, payment integration, and comprehensive analytics.",
    ar: 'نظام إدارة تعليمي متكامل مع فصول مباشرة، جلسات فيديو WebRTC، دردشة فورية، محرك امتحانات متقدم، تكامل دفع، وتحليلات شاملة.'
  },
  fullDescription: {
    en: `I designed and implemented EduQuest end-to-end (frontend + backend). 
I developed a scalable Node.js/Express API with MongoDB (Mongoose), implemented secure authentication (JWT + refresh tokens + OTP email verification), role-based access control (Student / Teacher / Admin), and integrated payment processing and invoicing.
On the frontend I built a responsive React (Vite) application with Redux Toolkit for state management, an advanced video player with progress tracking and watermarking, in-app chat, and dashboards for each role.
Key capabilities include WebRTC-based live sessions (video/audio + screen sharing), real-time features via Socket.IO, an advanced exam engine with auto-grading and anti-cheating controls, certificate PDF generation, and background task processing with Bull + Redis for heavy jobs (emails, video processing, reports).`,
    ar: `قمت بتصميم وتنفيذ EduQuest من البداية للنهاية (واجهة أمامية + باك إند).
طورت واجهات API قابلة للتوسع باستخدام Node.js و Express مع قاعدة بيانات MongoDB (Mongoose)، وطبّقت نظام مصادقة آمن (JWT + Refresh Tokens + تحقق OTP عبر البريد)، ونظام صلاحيات قائم على الأدوار (طالب / مدرس / مشرف). 
على الواجهة الأمامية طورت تطبيق React مبني على Vite مع Redux Toolkit لإدارة الحالة، مشغل فيديو متقدم مع تتبّع التقدّم وعلامة مائية، دردشة داخل التطبيق، ولوحات تحكم مخصّصة لكل دور.
تشمل الميزات الأساسية: جلسات مباشرة باستخدام WebRTC (فيديو/صوت ومشاركة شاشة)، تحديثات فورية عبر Socket.IO، محرك امتحانات متقدّم مع تصحيح تلقائي ووسائل منع الغش، توليد شهادات PDF، ومعالجة مهام الخلفية باستخدام Bull + Redis (لبعث البريد ومعالجة الفيديو والتقارير).`
  },
  technologies: [
    'React (Vite)', 'Redux Toolkit', 'React Router', 'React Player',
    'Node.js', 'Express.js', 'MongoDB', 'Mongoose',
    'Socket.IO', 'WebRTC', 'ICE Servers',
    'JWT', 'bcrypt', 'OTP (email)',
    'Cloudinary', 'Multer', 'AWS S3 (optional)',
    'Paymob (payment gateway)', 'Stripe (optional)',
    'Bull', 'Redis',
    'Nodemailer', 'PDFKit',
    'Winston (logging)', 'Swagger (API docs)',
    'Mocha', 'Chai', 'Supertest', 'Sinon',
    'Chart.js', 'React Chart.js 2'
  ],
  integrations: [
    'Cloudinary (media storage & transforms)',
    'Paymob (payment processing)',
    'SMTP provider via Nodemailer',
  ],
  links: {
    frontend: 'https://github.com/amedmohmed925/Final-project-Frontend-project---nodejs-course',
    backend: 'https://github.com/amedmohmed925/Final-Project-Nodejs',
    live: 'https://eduquestcourses.netlify.app/'
  },
  category: 'fullstack',
  image: '/projects/eduquest.png',
 
  features: {
    en: [
      'Full user management (registration, email OTP, login with JWT + refresh tokens, role-based access)',
      'Course authoring: sections, lessons, resources (video, PDF, links)',
      'Live sessions: WebRTC peer-to-peer video/audio, screen sharing, participant roles & recording hooks',
      'Real-time chat & notifications using Socket.IO',
      'Advanced exam engine: timed tests, auto-grading, question bank, anti-cheating features',
      'Payment & subscriptions: cart, coupons, invoice generation, Paymob integration',
      'Certificate generation (PDF) and verification system',
      'Background processing for heavy tasks (emails, video jobs) using Bull + Redis',
      'Comprehensive admin panel: approvals, logs, analytics and coupon management',
      'Analytics dashboards (users, courses, sales, attendance) with Chart.js'
    ],
    ar: [
      'إدارة مستخدمين كاملة (تسجيل، تحقق OTP عبر البريد، تسجيل JWT + Refresh Tokens، صلاحيات حسب الأدوار)',
      'إنشاء كورسات: أقسام، دروس، موارد (فيديو، PDF، روابط)',
      'جلسات مباشرة: WebRTC للفيديو/الصوت، مشاركة الشاشة، أدوار المشاركين وخيارات التسجيل',
      'دردشة وإشعارات فورية باستخدام Socket.IO',
      'محرك امتحانات متقدّم: اختبارات زمنية، تصحيح تلقائي، بنك أسئلة، وسائل منع الغش',
      'نظام دفع والاشتراكات: سلة، كوبونات، فواتير، وتكامل مع Paymob',
      'توليد الشهادات بصيغ PDF ونظام للتحقق من الشهادة',
      'معالجة مهام الخلفية (بريد، معالجة فيديو) باستخدام Bull + Redis',
      'لوحة تحكم إدارية متكاملة: موافقات، سجلات، إحصائيات وإدارة كوبونات',
      'لوحات تحليلات (المستخدمين، الكورسات، المبيعات، الحضور) باستخدام Chart.js'
    ]
  },
  myRole: {
    en: "I built the entire platform end-to-end: I implemented the backend APIs, designed the database schemas, developed the frontend UI, integrated real-time features and payment gateways, and deployed the system.",
    ar: 'قمتُ بتطوير المنصة كاملة من الألف إلى الياء: طبّقت واجهات الـ API للباك إند، صممت مخططات قاعدة البيانات، طورت واجهة المستخدم، دمجت ميزات التحديث الفوري وبوابات الدفع، ونشرت المنصة.'
  },
  responsibilities: {
    en: [
      'Architected backend with Node.js, Express and MongoDB (Mongoose).',
      'Implemented authentication & authorization (JWT, refresh tokens, OTP verification).',
      'Built responsive React frontend with Redux Toolkit and role-based dashboards.',
      'Integrated WebRTC + Socket.IO for live classes and real-time interactions.',
      'Developed exam engine with auto-grading, timers and question bank.',
      'Integrated Cloudinary for media uploads and Paymob for payments.',
      'Implemented background workers with Bull + Redis for email, reports and heavy jobs.',
      'Wrote unit & integration tests (Mocha, Chai, Supertest) and documented APIs with Swagger.',
      'Deployed services and set up logging/monitoring (Winston).'
    ],
    ar: [
      'تصميم بنية الباك إند باستخدام Node.js و Express و MongoDB (Mongoose).',
      'تنفيذ المصادقة والتفويض (JWT، Refresh Tokens، تحقق OTP عبر البريد).',
      'بناء واجهة React متجاوبة مع Redux Toolkit ولوحات تحكم حسب الدور.',
      'دمج WebRTC و Socket.IO للجلسات المباشرة والتفاعل الفوري.',
      'تطوير محرك الامتحانات مع التصحيح التلقائي والمؤقتات وبنك الأسئلة.',
      'تكامل Cloudinary لرفع الوسائط و Paymob لعمليات الدفع.',
      'تنفيذ عمال الخلفية باستخدام Bull + Redis للبريد والتقارير والمهام الثقيلة.',
      'كتابة اختبارات وحدة واندماج (Mocha، Chai، Supertest) وتوثيق الـ API باستخدام Swagger.',
      'نشر الخدمات وإعداد السجلات والمراقبة (Winston).'
    ]
  },
  highlights: {
    en: [
      'I implemented secure OTP email verification and refresh-token flow to ensure safe long sessions.',
      'Live classroom feature using WebRTC with screen-share and participant role controls.',
      'Scalable job queue for processing emails and media using Bull + Redis.',
      'Automated certificate generation (PDF) and downloadable invoices.',
      'Complete admin dashboard for moderation, analytics and coupon management.'
    ],
    ar: [
      'قمت بتنفيذ نظام تحقق OTP آمن وتدفق Refresh Tokens لضمان جلسات طويلة آمنة.',
      'ميزة الفصل المباشر باستخدام WebRTC مع مشاركة شاشة وتحكم في أدوار المشاركين.',
      'نظام قوائم انتظار (قابل للتوسع) لمعالجة البريد والوسائط باستخدام Bull + Redis.',
      'توليد تلقائي للشهادات (PDF) وفواتير قابلة للتحميل.',
      'لوحة تحكم إدارية كاملة للمراجعة، التحليلات وإدارة الكوبونات.'
    ]
  },
  author: {
    en: 'Ahmed Mohammed — Fullstack Developer',
    ar: 'أحمد محمد — مطور Fullstack'
  },
  notes: {
    en: 'This project was built from scratch. Repositories contain setup instructions and API docs (Swagger) in the README. Feel free to check the live demo and the source code for implementation details.',
    ar: 'تم بناء هذا المشروع من الصفر. المستودعات تحتوي على تعليمات التشغيل وتوثيق API (Swagger) في ملف README. اطلع على العرض الحي والكود المصدري لمزيد من التفاصيل.'
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
    description: {
      en: 'Successfully completed an intensive React.js training program covering modern React concepts, component development, state management, hooks, and building responsive web applications.',
      ar: 'أكملت بنجاح برنامج تدريبي مكثف في React.js يغطي مفاهيم React الحديثة، تطوير المكونات، إدارة الحالة، الخطافات، وبناء تطبيقات ويب متجاوبة.'
    },
    image: '/certificates/react-cert.png',
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
    description: {
      en: 'Completed comprehensive backend development training covering Node.js, Express.js, MongoDB, RESTful APIs, authentication systems, and server-side application architecture.',
      ar: 'أكملت تدريباً شاملاً في تطوير الواجهات الخلفية يغطي Node.js وExpress.js وMongoDB وواجهات RESTful API وأنظمة المصادقة ومعمارية التطبيقات من جانب الخادم.'
    },
    image: '/certificates/backend-cert.png',
    date: '2025'
  },
 
 {
  name: {
    en: 'DIGITOPIA Competition Certificate',
    ar: 'شهادة مسابقة DIGITOPIA'
  },
  issuer: {
    en: 'Ministry of Communications and Information Technology (MCIT), Egypt',
    ar: 'وزارة الاتصالات وتكنولوجيا المعلومات – مصر'
  },
  description: {
    en: 'Awarded for active participation in the DIGITOPIA competition in the field of software development and artificial intelligence, achieving the second stage as part of my startup "Codie".',
    ar: 'تم الحصول عليها لمشاركتي الفعالة في مسابقة DIGITOPIA في مجال البرمجيات والذكاء الاصطناعي، وتحقيقي المرحلة الثانية ضمن فريقي في شركة Codie.'
  },
  image: '/certificates/digitopia-cert.png',
  date: '2025'
}


];
