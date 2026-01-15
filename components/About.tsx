import React from 'react';
import { motion } from 'framer-motion';
import { IMAGES } from '../constants';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-12 md:py-20 bg-[#D1523E]/10 overflow-hidden">
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
                className="relative rounded-2xl shadow-xl w-full h-[300px] md:h-[500px] object-cover"
                style={{ objectPosition: 'center 15%' }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2 space-y-6 text-center md:text-left flex flex-col items-center md:items-start"
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm">Minha História</span>
            <h2 className="font-display text-3xl md:text-5xl text-gray-900 font-bold">
              Acolhimento e Transformação
            </h2>
            <div className="w-20 h-1 bg-secondary rounded-full mx-auto md:mx-0"></div>

            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Durante muitos anos, eu vivi desconectada de quem eu era. A virada não veio de fora, mas do momento em que decidi olhar para dentro, em uma busca profunda por <span className="text-secondary font-semibold italic">autoconhecimento, consciência emocional e integração espiritual.</span>
              </p>
              <p>
                Há mais de uma década, transformo essa vivência em método. Foi através de estudos, práticas e do acompanhamento de milhares de mulheres que nasceu o <strong className="text-secondary">Método Mulher Bella</strong>.
              </p>
              <p>
                Este é um caminho para quem deseja sair do autoabandono para a maturidade emocional. Um processo para deixar de se adaptar para "caber" e aprender a <span className="text-primary font-medium">se escolher, honrar seu valor e sustentar o próprio lugar.</span>
              </p>
              <p>
                Hoje, guio mulheres em uma travessia estruturada de posicionamento interno e verdade emocional, refletindo em relacionamentos saudáveis, prosperidade e equilíbrio.
              </p>
              <p className="font-bold text-primary italic text-xl border-l-4 border-primary pl-6 py-2 mt-8 bg-surface-light rounded-r-lg">
                Aqui, a transformação começa em você e reverbera em todas as áreas da sua vida.
              </p>
            </div>


          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;