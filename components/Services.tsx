import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { IMAGES } from '../constants';

const Services: React.FC = () => {
  const services = [
    {
      title: "Terapia Individual",
      desc: "Sessões semanais focadas nas suas questões pessoais, traumas e crescimento emocional em um ambiente sigiloso.",
      image: IMAGES.service1,
      borderColor: "border-primary",
      btnColor: "text-primary hover:text-primary-hover"
    },
    {
      title: "Jornada da Autoestima",
      desc: "Um programa estruturado para fortalecer sua autoimagem, confiança e amor próprio através de exercícios práticos.",
      image: IMAGES.service2,
      borderColor: "border-secondary",
      btnColor: "text-secondary hover:text-red-700"
    },
    {
      title: "Mentoria de Carreira",
      desc: "Direcionamento estratégico para mulheres que desejam alavancar suas carreiras sem sacrificar a saúde mental.",
      image: IMAGES.service3,
      borderColor: "border-accent-green",
      btnColor: "text-accent-green hover:text-green-700"
    }
  ];

  return (
    <section id="servicos" className="py-12 md:py-20 bg-surface-light relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/80 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-secondary font-bold tracking-widest uppercase text-sm">Como posso ajudar</span>
            <h2 className="font-display text-3xl md:text-4xl text-gray-900 font-bold mt-2">Meus Serviços</h2>
          </motion.div>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:block w-32 h-[1px] bg-gray-300 mb-4 origin-right"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className={`flex flex-col bg-white rounded-[2rem] overflow-hidden shadow-lg border-t-4 ${service.borderColor} transition-transform duration-300`}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                  style={{ objectPosition: 'center 20%' }}
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow text-center md:text-left items-center md:items-start">
                <h3 className="font-display text-xl md:text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                  {service.desc}
                </p>
                <a
                  href="#"
                  className={`inline-flex items-center justify-center md:justify-start font-bold transition-colors ${service.btnColor} group`}
                >
                  Quero saber mais <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;