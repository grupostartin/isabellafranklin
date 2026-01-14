import React from 'react';
import { Star, PlayCircle, BookOpen, Camera, ArrowRight, ChevronDown, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { IMAGES } from '../constants';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const buttons = [
    { icon: Star, text: "MENTORIA DAS BELLAS ☀️", href: "https://forms.gle/DrkqwchzUhXS4ETH8", image: IMAGES.btn1, position: 'center 20%' },
    { icon: PlayCircle, text: "PORTAL DAS BELLAS", href: "#", subtitle: "(Em breve)", image: IMAGES.btn2, position: 'center 35%' },
    { icon: Heart, text: "ATENDIMENTO SISTÊMICO", href: "https://wa.me/5531990622003", image: IMAGES.btn3, position: 'center 20%' },
    { icon: BookOpen, text: "CURSO ALÉM DAS MÁSCARAS", href: "https://wa.me/5531990622003", image: IMAGES.btn4, position: 'center 35%' },
    { icon: BookOpen, text: "CURSO DESTRAVE SUA VIDA", href: "https://wa.me/5531990622003", image: IMAGES.btn5, position: 'center 35%' },
    { icon: Camera, text: "CONTATO PARA PALESTRAS E EVENTOS", href: "https://wa.me/5531990622003", image: IMAGES.btn6, position: 'center 20%' },
  ];

  return (
    <header className="relative min-h-screen flex items-start md:items-center pt-6 pb-12 md:pt-24 md:pb-20 overflow-x-hidden bg-gradient-to-br from-[#FFFBF9] via-white to-[#FDF4EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col items-center max-w-sm mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-6 pt-2"
          >
            <img
              src="/assets/images/logo.png"
              alt="Logo Isabella Franklin"
              className="h-28 mx-auto object-contain"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-full aspect-[2/1] rounded-3xl overflow-hidden shadow-2xl mb-6 relative"
          >
            <img
              src={IMAGES.hero}
              alt="Isabella Franklin"
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center 15%' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center space-x-2 text-gray-400 mb-6"
          >
            <span className="text-xs tracking-[0.2em] uppercase">Links Úteis</span>
            <ChevronDown size={14} />
          </motion.div>

          <div className="w-full space-y-4">
            {buttons.map((btn, index) => (
              <motion.a
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + (index * 0.1) }}
                href={btn.href}
                className="relative flex items-center w-full h-24 px-6 rounded-3xl shadow-xl isolate border border-white/20 active:scale-[0.98] transition-all overflow-hidden group"
              >
                {/* Custom Background Image for each button */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img src={btn.image} className="w-full h-full object-cover opacity-60 grayscale-[20%]" style={{ objectPosition: btn.position }} alt="" />
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/60 to-transparent"></div>
                </div>

                <div className="flex items-center w-full justify-between relative z-10">
                  <div className="flex items-center">
                    <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl mr-4 group-hover:bg-primary/20 transition-colors">
                      <btn.icon className="w-6 h-6 text-white group-hover:text-primary transition-colors" strokeWidth={1.5} />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-lg text-white tracking-wide">{btn.text}</span>
                      {btn.subtitle && <span className="text-white/50 text-xs font-medium uppercase tracking-widest mt-0.5">{btn.subtitle}</span>}
                    </div>
                  </div>
                  <ArrowRight className="text-white/40 group-hover:text-primary group-hover:translate-x-1 transition-all" size={20} />
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid grid-cols-12 gap-12 items-start max-w-6xl mx-auto">

          {/* Left Side: Identity (Texto ACIMA da Foto) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="col-span-4 flex flex-col space-y-8"
          >
            <div className="space-y-4">
              <motion.h2 variants={itemVariants} className="text-secondary font-bold tracking-wider text-xs uppercase">
                Mentora e Terapeuta Sistêmica
              </motion.h2>
              <motion.h1 variants={itemVariants} className="font-display text-4xl lg:text-5xl text-gray-900 leading-tight">
                <span className="text-primary italic">Isabella Franklin</span>
              </motion.h1>
              <div className="w-16 h-1 bg-primary rounded-full"></div>
            </div>

            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-2xl group max-w-xs bg-gray-100">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7 }}
                src={IMAGES.hero}
                alt="Retrato profissional"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 15%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
            </div>
          </motion.div>

          {/* Right Side: Links (Invisíveis até o Hover) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="col-span-8 flex flex-col pt-24"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-12">
              {buttons.map((btn, index) => (
                <motion.a
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  href={btn.href}
                  className="relative flex items-center justify-between w-full h-32 px-8 rounded-[2.5rem] shadow-xl border border-white/20 overflow-hidden group bg-gray-900 opacity-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
                >
                  {/* Visual Background Pattern with specific image */}
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <img src={btn.image} className="w-full h-full object-cover opacity-70 grayscale-[10%] group-hover:scale-105 transition-transform duration-700" style={{ objectPosition: btn.position }} alt="" />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/70 to-transparent"></div>
                  </div>

                  <div className="flex items-center relative z-10">
                    <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl mr-5 group-hover:bg-primary/20 transition-colors">
                      <btn.icon className="w-8 h-8 text-white group-hover:text-primary transition-colors" strokeWidth={1.5} />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-lg lg:text-xl text-white tracking-wide">{btn.text}</span>
                      {btn.subtitle && <span className="text-white/50 text-xs font-medium uppercase tracking-widest mt-1">{btn.subtitle}</span>}
                    </div>
                  </div>
                  <ArrowRight className="text-white/40 group-hover:text-primary group-hover:translate-x-2 transition-all relative z-10" size={28} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1 cursor-pointer z-20 group"
        onClick={() => {
          const nextSec = document.getElementById('sobre');
          if (nextSec) nextSec.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-gray-400 font-bold group-hover:text-primary transition-colors">Descobrir</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="text-primary/70 group-hover:text-primary transition-colors" size={32} strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </header>
  );
};

export default Hero;