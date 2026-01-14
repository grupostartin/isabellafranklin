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
    { icon: Star, text: "MENTORIA DAS BELLAS ☀️", href: "https://wa.me/5531990622003", subtitle: "Formulário ou WhatsApp" },
    { icon: PlayCircle, text: "PORTAL DAS BELLAS", href: "#", subtitle: "(Em breve)" },
    { icon: Heart, text: "ATENDIMENTO SISTÊMICO", href: "https://wa.me/5531990622003" },
    { icon: BookOpen, text: "CURSO ALÉM DAS MÁSCARAS", href: "https://wa.me/5531990622003" },
    { icon: BookOpen, text: "CURSO DESTRAVE SUA VIDA", href: "https://wa.me/5531990622003" },
    { icon: Camera, text: "CONTATO PARA PALESTRAS E EVENTOS", href: "https://wa.me/5531990622003" },
  ];

  return (
    <header className="relative min-h-screen flex items-start md:items-center pt-6 pb-12 md:pt-24 md:pb-20 overflow-x-hidden bg-background-light">
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
            className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl mb-8 relative"
          >
            <img
              src={IMAGES.hero}
              alt="Isabella Franklin"
              className="w-full h-full object-cover object-top"
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
                {/* Visual Background - Using a styled overlay pattern */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 z-0"></div>

                {/* Hero image as a subtle background overlay like the reference */}
                <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-30 z-0 overflow-hidden">
                  <img src={IMAGES.hero} className="w-full h-full object-cover object-top filter grayscale" alt="" />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent to-gray-900"></div>
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
        <div className="hidden md:grid grid-cols-2 gap-12 items-center">

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative order-1"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 pointer-events-none"></div>
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7 }}
                src={IMAGES.hero}
                alt="Retrato profissional da terapeuta sorrindo suavemente"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent-green/20 rounded-full blur-2xl -z-10"
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1 }}
              className="absolute -top-6 -right-6 w-40 h-40 bg-primary/20 rounded-full blur-2xl -z-10"
            />
          </motion.div>

          {/* Content Side */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col space-y-8 order-2 md:pl-8"
          >
            <div className="text-center md:text-left">
              <motion.h2 variants={itemVariants} className="text-secondary font-bold tracking-wider text-sm uppercase mb-2">
                Mentora e Terapeuta Sistêmica
              </motion.h2>
              <motion.h1 variants={itemVariants} className="font-display text-5xl md:text-6xl text-gray-900 mb-6">
                <span className="text-primary italic">Isabella Franklin</span>
              </motion.h1>
            </div>

            <div className="flex flex-col space-y-4 w-full max-w-lg mx-auto md:mx-0">
              {buttons.map((btn, index) => (
                <motion.a
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  href={btn.href}
                  className="relative flex items-center justify-between w-full h-24 px-8 rounded-3xl shadow-xl isolate border border-white/20 overflow-hidden group"
                >
                  {/* Visual Background - Using a dark sleek pattern */}
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 z-0"></div>

                  {/* Hero image as a subtle background overlay */}
                  <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-30 z-0 overflow-hidden">
                    <img src={IMAGES.hero} className="w-full h-full object-cover object-top filter grayscale" alt="" />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-gray-900"></div>
                  </div>

                  <div className="flex items-center relative z-10">
                    <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl mr-6 group-hover:bg-primary/20 transition-colors">
                      <btn.icon className="w-8 h-8 text-white group-hover:text-primary transition-colors" strokeWidth={1.5} />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-xl text-white tracking-wide">{btn.text}</span>
                      {btn.subtitle && <span className="text-white/50 text-sm font-medium uppercase tracking-widest mt-1">{btn.subtitle}</span>}
                    </div>
                  </div>
                  <ArrowRight className="text-white/40 group-hover:text-primary group-hover:translate-x-2 transition-all relative z-10" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Hero;