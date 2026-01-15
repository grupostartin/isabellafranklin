import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3500); // Total duration of splash screen
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-[#F46771]/20 flex items-center justify-center p-4"
    >
      <div className="max-w-2xl text-center">
        <motion.img
          src="/assets/images/logo.png"
          alt="Logo Isabella Franklin"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="h-16 md:h-20 mx-auto mb-8 object-contain"
        />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="font-display text-3xl md:text-5xl lg:text-6xl text-gray-800 leading-tight italic"
        >
          <span className="text-primary">Mulheres seguras</span> não esperam <span className="text-secondary">permissão.</span>
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
          className="h-1 bg-gradient-to-r from-primary via-secondary to-accent-green mt-8 mx-auto w-1/2 rounded-full"
        />
      </div>
    </motion.div>
  );
};

export default SplashScreen;