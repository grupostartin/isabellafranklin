import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Quem Sou Eu", href: "#sobre" },
    { name: "Para Quem É", href: "#para-quem" },
    { name: "Serviços", href: "#servicos" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`fixed w-full z-50 transition-all duration-300 hidden md:block ${scrolled
        ? 'bg-white/90 backdrop-blur-md shadow-sm py-2'
        : 'bg-transparent py-2'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <img
              src="/assets/images/logo.png"
              alt="MANA Terapia e Mentoria"
              className="h-10 md:h-12 w-auto cursor-pointer object-contain"
              onClick={() => window.scrollTo(0, 0)}
            />
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-primary transition-colors text-sm font-medium tracking-wide uppercase"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#agendar"
              className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary-hover transition-all shadow-glow-primary transform hover:scale-105 active:scale-95"
            >
              Agendar
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-white border-t border-gray-100"
        >
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#agendar"
              className="block text-center mt-4 w-full px-5 py-3 bg-primary text-white rounded-lg hover:bg-primary-hover font-medium"
            >
              Agendar Sessão
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;