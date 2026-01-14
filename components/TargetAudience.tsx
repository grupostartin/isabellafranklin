import React from 'react';
import { X, Check, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const TargetAudience: React.FC = () => {
  const beforeItems = [
    "Dependente emocional: vive com medo de ser abandonada ou trocada.",
    "Não sabe se posicionar nem colocar seus limites.",
    "É insegura, não confia em si e tem baixa autoestima.",
    "Vive ansiosa e emocionalmente desequilibrada.",
    "Repete ciclos frustrantes nos relacionamentos e vida financeira."
  ];

  const afterItems = [
    "Emocionalmente independente: não se anula para ser amada.",
    "Se posiciona com clareza e sustenta seus limites.",
    "Se sente segura, autoconfiante e magnética.",
    "Emocionalmente equilibrada: sabe lidar com suas emoções.",
    "Rompe ciclos repetitivos nos relacionamentos e vida financeira."
  ];

  return (
    <section id="para-quem" className="py-12 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-3 block">Para quem é este espaço</span>
          <h2 className="font-display text-4xl md:text-5xl text-gray-900 font-bold">A Travessia da Transformação</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch relative">
          {/* Decorative Arrow for Desktop */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 items-center justify-center">
            <ArrowRight className="text-primary" size={24} />
          </div>

          {/* Before Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-surface-light p-8 md:p-12 rounded-[2rem] border border-gray-100 shadow-sm relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <X size={120} strokeWidth={1} />
            </div>

            <h3 className="font-display text-2xl md:text-3xl font-bold text-gray-800 mb-8 flex items-center">
              <span className="w-10 h-10 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mr-4 text-lg">
                <X size={20} />
              </span>
              Como você chega
            </h3>

            <ul className="space-y-6">
              {beforeItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start text-gray-600 text-lg leading-relaxed"
                >
                  <span className="mr-3 mt-1.5 flex-shrink-0 w-1.5 h-1.5 bg-secondary/40 rounded-full"></span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* After Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 md:p-12 rounded-[2rem] border-2 border-primary/20 shadow-xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity text-primary">
              <Check size={120} strokeWidth={1} />
            </div>

            <h3 className="font-display text-2xl md:text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <span className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center mr-4 text-lg">
                <Check size={20} />
              </span>
              Como você sai
            </h3>

            <ul className="space-y-6">
              {afterItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start text-gray-800 font-medium text-lg leading-relaxed group-hover:translate-x-1 transition-transform"
                >
                  <Check className="mr-3 mt-1 text-primary flex-shrink-0" size={18} strokeWidth={3} />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 italic text-lg">
            "A transformação não é sobre se tornar outra pessoa, é sobre voltar para casa."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TargetAudience;