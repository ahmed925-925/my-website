import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';

interface PageFlipTransitionProps {
  children: ReactNode;
  locationKey: string;
  direction?: 'forward' | 'backward';
}

const supportsAdvancedEffects = () => {
  if (typeof window === 'undefined') return false;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return false;

  const canvas = document.createElement('canvas');
  const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
  const hasWebGL = !!gl;

  const supportsTransform3d = 'perspective' in document.documentElement.style;

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const isLowEndDevice = navigator.hardwareConcurrency ? navigator.hardwareConcurrency < 4 : false;

  return supportsTransform3d && hasWebGL && !isLowEndDevice && !isMobile;
};

const createAdvancedVariants = (direction: 'forward' | 'backward'): { exit: any; enter: any } => {
  const exitRotate = direction === 'forward' ? -180 : 180;
  const enterRotateFrom = direction === 'forward' ? 180 : -180;

  return {
    exit: {
      rotateY: exitRotate,
      opacity: 0,
      scale: 0.8,
      transformOrigin: direction === 'forward' ? 'right center' : 'left center',
      transition: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    },
    enter: {
      rotateY: [enterRotateFrom, 0],
      opacity: [0, 1],
      scale: [0.8, 1],
      transformOrigin: direction === 'forward' ? 'left center' : 'right center',
      transition: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  };
};

const createFallbackVariants = (direction: 'forward' | 'backward'): { exit: any; enter: any } => {
  const exitX = direction === 'forward' ? -100 : 100;
  const enterXFrom = direction === 'forward' ? 100 : -100;

  return {
    exit: {
      x: exitX,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    },
    enter: {
      x: [enterXFrom, 0],
      opacity: [0, 1],
      transition: {
        duration: 0.3,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  };
};

export default function PageFlipTransition({ children, locationKey, direction = 'forward' }: PageFlipTransitionProps) {
  const [useAdvanced, setUseAdvanced] = useState(false);

  useEffect(() => {
    setUseAdvanced(supportsAdvancedEffects());
  }, []);

  const variants = useAdvanced
    ? createAdvancedVariants(direction)
    : createFallbackVariants(direction);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={locationKey}
        initial="enter"
        animate={{
          rotateY: 0,
          opacity: 1,
          scale: 1,
          x: 0,
          transition: {
            duration: useAdvanced ? 0.8 : 0.3,
            ease: [0.43, 0.13, 0.23, 0.96]
          }
        }}
        exit="exit"
        variants={variants}
        style={{
          transformStyle: useAdvanced ? 'preserve-3d' : undefined,
          backfaceVisibility: useAdvanced ? 'hidden' : undefined,
          perspective: useAdvanced ? 1200 : undefined,
        }}
        className="w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
