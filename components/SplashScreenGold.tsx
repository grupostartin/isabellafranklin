import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface SplashScreenGoldProps {
  onComplete: () => void;
}

const WindowLightGlow: React.FC = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
    {/* Warm light source */}
    <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_0%_10%,rgba(233,122,1,0.14),transparent_70%)]" />
    {/* Window shadows */}
    <div className="absolute top-[8%] left-0 w-[240px] h-[360px] opacity-[0.06] transform rotate-[15deg] -translate-x-12 select-none pointer-events-none">
      <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full h-full">
        <div className="bg-[#E97A01] blur-[3px]" />
        <div className="bg-[#E97A01] blur-[3px]" />
        <div className="bg-[#E97A01] blur-[3px]" />
        <div className="bg-[#E97A01] blur-[3px]" />
      </div>
    </div>
  </div>
);

const SunflowerOutline: React.FC<{ className?: string }> = ({ className = "absolute right-0 top-0 w-[280px] h-[280px] md:w-[380px] md:h-[380px]" }) => (
  <div className={`${className} opacity-[0.03] text-[#E97A01] pointer-events-none select-none z-0`}>
    <svg viewBox="0 0 100 100" className="w-full h-full stroke-current fill-none" strokeWidth="0.5">
      <circle cx="50" cy="50" r="14" strokeDasharray="1 1" />
      <circle cx="50" cy="50" r="9" />
      {Array.from({ length: 24 }).map((_, i) => {
        const angle = (i * 360) / 24;
        return (
          <path
            key={i}
            d="M 50 50 Q 46 25 50 15 Q 54 25 50 50"
            transform={`rotate(${angle} 50 50)`}
          />
        );
      })}
    </svg>
  </div>
);

const SparkleStars: React.FC = () => (
  <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
    <div className="absolute left-[5%] top-[15%] text-[#E97A01]/30 animate-pulse" style={{ animationDuration: '3s' }}>
      <Star size={12} className="fill-[#E97A01]" />
    </div>
    <div className="absolute right-[8%] top-[40%] text-[#E97A01]/45 animate-pulse" style={{ animationDuration: '4.5s' }}>
      <Star size={16} className="fill-[#E97A01]" />
    </div>
    <div className="absolute left-[12%] bottom-[20%] text-[#E97A01]/35 animate-pulse" style={{ animationDuration: '3.5s' }}>
      <Star size={14} className="fill-[#E97A01]" />
    </div>
  </div>
);

const SplashScreenGold: React.FC<SplashScreenGoldProps> = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3800); // Duration matches loaders
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-[#0B0504] flex items-center justify-center p-4 overflow-hidden select-none"
    >
      <WindowLightGlow />
      <SunflowerOutline className="absolute right-0 bottom-0 w-[300px] h-[300px] opacity-[0.02]" />
      <SparkleStars />

      <div className="max-w-2xl text-center relative z-10">
        <motion.img
          src="/assets/images/logo.png"
          alt="Logo Isabella Franklin"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="h-14 md:h-18 mx-auto mb-10 object-contain brightness-0 invert"
          onError={(e) => {
            (e.target as HTMLElement).style.display = 'none';
          }}
        />

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
          className="font-display text-2xl sm:text-4xl md:text-5xl text-white leading-tight font-medium"
        >
          Você está <span className="text-primary italic font-normal">preparada</span> para viver uma experiência <span className="text-secondary italic font-normal">incrível?</span>
        </motion.h1>

        <div className="mt-10 mx-auto w-44 sm:w-56 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
          <motion.div
            initial={{ left: "-100%" }}
            animate={{ left: "100%" }}
            transition={{ duration: 2.2, delay: 1.2, ease: "easeInOut" }}
            className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-primary to-transparent"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default SplashScreenGold;
