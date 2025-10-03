import { motion } from 'framer-motion';
import Hero from '../components/Hero';

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ 
        duration: 0.15,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="min-h-screen"
    >
      <Hero />
    </motion.div>
  );
}
