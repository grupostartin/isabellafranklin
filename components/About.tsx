import React from 'react';
import { motion } from 'framer-motion';
import { IMAGES } from '../constants';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-surface-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-secondary rounded-2xl rotate-3 opacity-20 transform translate-x-4 translate-y-4"></div>
              <img
                src={IMAGES.about}
                alt="Terapeuta em ambiente natural e iluminado"
                className="relative rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2 space-y-6"
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm">Minha História</span>
            <h2 className="font-display text-4xl md:text-5xl text-gray-900 font-bold">
              Acolhimento e Transformação
            </h2>
            <div className="w-20 h-1 bg-secondary rounded-full"></div>

            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Olá, sou a Isabella Franklin. Acredito que a terapia é mais do que resolver problemas; é um processo profundo de autoconhecimento. Minha missão é ajudar mulheres a redescobrirem sua força interior em um ambiente livre de julgamentos.
              </p>
              <p>
                Com mais de 10 anos de experiência clínica, combino técnicas baseadas em evidências com uma abordagem humana e empática. Aqui, sua história importa e seus sentimentos são validados.
              </p>
            </div>

            <div className="pt-4">
              <img
                src={IMAGES.signature}
                alt="Assinatura Dra. Isabella Franklin"
                className="h-16 opacity-70"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;