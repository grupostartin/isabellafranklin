import React from 'react';
import { Brain, Heart, Flower } from 'lucide-react';
import { motion } from 'framer-motion';

const TargetAudience: React.FC = () => {
  const cards = [
    {
      icon: Brain,
      colorClass: "text-complementary",
      bgClass: "bg-complementary/10 group-hover:bg-complementary/20",
      title: "Ansiedade & Sobrecarga",
      description: "Para você que sente a mente acelerada, dificuldade em descansar e o peso de ter que dar conta de tudo o tempo todo."
    },
    {
      icon: Heart,
      colorClass: "text-primary",
      bgClass: "bg-primary/10 group-hover:bg-primary/20",
      title: "Reconexão Consigo Mesma",
      description: "Para quem se sente perdida em meio aos papéis que desempenha e deseja reencontrar sua própria essência e desejos."
    },
    {
      icon: Flower,
      colorClass: "text-secondary",
      bgClass: "bg-secondary/10 group-hover:bg-secondary/20",
      title: "Desenvolvimento Emocional",
      description: "Para quem busca ferramentas para lidar melhor com as emoções, relacionamentos e construir uma autoestima sólida."
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
  };

  return (
    <section id="para-quem" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="font-display text-3xl md:text-4xl text-gray-900 font-bold mb-4">Para quem é este espaço?</h2>
          <p className="text-gray-600 text-lg">
            Se você se identifica com algum destes sentimentos, saiba que não está sozinha.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-surface-light p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 text-center group cursor-default"
            >
              <div className={`w-16 h-16 ${card.bgClass} rounded-full flex items-center justify-center mx-auto mb-6 transition-colors`}>
                <card.icon className={`${card.colorClass}`} size={32} />
              </div>
              <h3 className="font-display text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TargetAudience;