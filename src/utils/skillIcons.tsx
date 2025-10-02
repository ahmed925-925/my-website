import { 
  Code2, 
  Palette, 
  Database, 
  Server, 
  Boxes,
  Layout,
  Zap,
  FileCode,
  Globe,
  GitBranch,
  TestTube,
  Settings,
  Lock,
  Layers,
  Workflow,
  type LucideIcon
} from 'lucide-react';

// Map skill names to their icons and colors
export const skillIconMap: Record<string, { icon: LucideIcon, color: string }> = {
  // Frontend
  'React.js': { icon: Code2, color: 'from-blue-400 to-cyan-400' },
  'Redux': { icon: Boxes, color: 'from-purple-400 to-pink-400' },
  'Context API': { icon: Layers, color: 'from-blue-400 to-purple-400' },
  'React Router': { icon: Workflow, color: 'from-green-400 to-cyan-400' },
  'React Hooks': { icon: Code2, color: 'from-cyan-400 to-blue-400' },
  'HTML': { icon: FileCode, color: 'from-orange-400 to-red-400' },
  'CSS': { icon: Palette, color: 'from-blue-400 to-indigo-400' },
  'Sass': { icon: Palette, color: 'from-pink-400 to-rose-400' },
  'Tailwind CSS': { icon: Palette, color: 'from-cyan-400 to-blue-400' },
  'Bootstrap': { icon: Palette, color: 'from-purple-400 to-violet-400' },
  'Responsive Design': { icon: Layout, color: 'from-green-400 to-teal-400' },
  'Vite': { icon: Zap, color: 'from-purple-400 to-blue-400' },
  'Webpack': { icon: Boxes, color: 'from-blue-400 to-cyan-400' },
  
  // Backend
  'Node.js': { icon: Server, color: 'from-green-400 to-emerald-400' },
  'Express.js': { icon: Server, color: 'from-gray-400 to-gray-600' },
  'MongoDB': { icon: Database, color: 'from-green-400 to-teal-400' },
  'Mongoose': { icon: Database, color: 'from-red-400 to-rose-400' },
  'RESTful API': { icon: Globe, color: 'from-blue-400 to-indigo-400' },
  'JWT Authentication': { icon: Lock, color: 'from-yellow-400 to-orange-400' },
  'Firebase': { icon: Server, color: 'from-yellow-400 to-orange-400' },
  'MVC Architecture': { icon: Layers, color: 'from-purple-400 to-pink-400' },
  'Postman': { icon: Settings, color: 'from-orange-400 to-red-400' },
  'Socket.io': { icon: Zap, color: 'from-gray-400 to-gray-600' },
  
  // Tools
  'JavaScript (ES6+)': { icon: FileCode, color: 'from-yellow-400 to-orange-400' },
  'TypeScript': { icon: FileCode, color: 'from-blue-400 to-blue-600' },
  'Git': { icon: GitBranch, color: 'from-orange-400 to-red-400' },
  'GitHub': { icon: GitBranch, color: 'from-gray-400 to-gray-600' },
  'Jest': { icon: TestTube, color: 'from-red-400 to-pink-400' },
  'Mocha': { icon: TestTube, color: 'from-amber-600 to-orange-600' },
  'Supertest': { icon: TestTube, color: 'from-green-400 to-teal-400' },
  'Gulp.js': { icon: Settings, color: 'from-red-400 to-rose-400' },
  'Pug.js': { icon: FileCode, color: 'from-brown-400 to-amber-400' },
  'CI/CD (Vercel)': { icon: Workflow, color: 'from-gray-400 to-gray-600' }
};

export const getSkillIcon = (skillName: string) => {
  return skillIconMap[skillName] || { icon: Code2, color: 'from-gray-400 to-gray-600' };
};
