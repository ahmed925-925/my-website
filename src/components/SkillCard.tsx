import { motion } from 'framer-motion';
import { memo } from 'react';
import { Video as LucideIcon } from 'lucide-react';

interface SkillCardProps {
  skill: string;
  Icon: LucideIcon;
  color: string;
  variants: any;
}

const SkillCard = memo(({ skill, Icon, color, variants }: SkillCardProps) => {
  return (
    <motion.div
      key={skill}
      variants={variants}
      whileHover={{
        scale: 1.05,
        y: -5,
        transition: { type: 'spring', stiffness: 300 }
      }}
      className="group relative bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

      <div className="relative z-10 flex flex-col items-center gap-3">
        <div className={`p-3 rounded-lg bg-gradient-to-br ${color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <p className="text-sm font-semibold text-gray-900 dark:text-white text-center leading-tight">
          {skill}
        </p>
      </div>

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      </div>
    </motion.div>
  );
});

SkillCard.displayName = 'SkillCard';

export default SkillCard;
