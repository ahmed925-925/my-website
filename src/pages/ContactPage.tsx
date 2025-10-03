import { motion } from 'framer-motion';
import Contact from '../components/Contact';

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ 
        duration: 0.15,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="min-h-screen py-20 px-4"
    >
      <Contact />
    </motion.div>
  );
}
