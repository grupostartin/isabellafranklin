import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  CheckCircle, 
  ShieldCheck, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp, 
  Heart, 
  Eye, 
  Sparkles, 
  Lock, 
  Gift, 
  HelpCircle, 
  Clock, 
  Check,
  XCircle,
  AlertCircle,
  ZoomIn,
  X
} from 'lucide-react';
import { IMAGES } from '../constants';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

interface CardSlideshowProps {
  images: string[];
  label: string;
  subtitle: string;
  onZoom: (src: string) => void;
}

const CardSlideshow: React.FC<CardSlideshowProps> = ({ images, label, subtitle, onZoom }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Add a random offset so that transitions across cards are not synchronized
    const intervalTime = 4000 + Math.random() * 2000;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, intervalTime);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div 
      onClick={() => onZoom(images[index])}
      className="relative cursor-zoom-in rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 bg-[#2D1B18] shadow-md hover:shadow-xl hover:border-primary/30 transition-all duration-500 group aspect-[9/16] w-28 sm:w-44 flex-shrink-0"
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={images[index]}
          src={images[index]}
          alt={`${label} - ${subtitle}`}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
      </AnimatePresence>

      {/* Dark Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent pointer-events-none"></div>

      {/* Zoom Icon indicator */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-white/15 backdrop-blur-sm p-1.5 sm:p-2.5 rounded-full text-white shadow-lg border border-white/10">
          <ZoomIn size={14} className="sm:w-[18px] sm:h-[18px]" />
        </div>
      </div>

      {/* Text Overlay */}
      <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-4 sm:left-4 sm:right-4 pointer-events-none">
        <h4 className="font-display font-black text-lg sm:text-2xl text-white tracking-wide uppercase leading-none">
          {label}
        </h4>
        <p className="text-primary font-bold text-[9px] sm:text-[11px] tracking-wider sm:tracking-widest uppercase mt-0.5 sm:mt-1">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

const LP2: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [showStickyHeader, setShowStickyHeader] = useState(false);
  const [hasOrderBump, setHasOrderBump] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    document.body.classList.remove('loading');
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowStickyHeader(true);
      } else {
        setShowStickyHeader(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const scrollToOffer = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    e.preventDefault();
    const offerSection = document.getElementById('oferta');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Base and order bump pricing
  const basePriceCash = 57.00;
  const basePriceInstallment = 5.90;
  
  const bumpPriceCash = 32.00;
  const bumpPriceInstallment = 3.31;

  const finalPriceCash = hasOrderBump ? (basePriceCash + bumpPriceCash) : basePriceCash;
  const finalPriceInstallment = hasOrderBump ? (basePriceInstallment + bumpPriceInstallment) : basePriceInstallment;

  const checkoutUrl = "https://pay.kiwify.com.br/fpFPUmF";

  const painPoints = [
    "Por que eu sempre faço tanto pelos outros e quase ninguém faz o mesmo por mim?",
    "Eu não consigo me posicionar nem dizer não sem me sentir culpada.",
    "Por mais que eu tente, nunca me sinto boa o suficiente.",
    "Eu sei que mereço mais, mas continuo aceitando menos do que gostaria.",
    "Eu me sinto insegura e queria confiar mais em mim mesma.",
    "Parece que eu vivo para agradar os outros e me esqueço de mim.",
    "Às vezes sinto que me perdi de mim mesma."
  ];

  const deliverables = [
    { text: "7 aulas do Desafio da Mulher Posicionada", value: "R$ 197,00" },
    { text: "Workbook completo de exercícios de destrave de ciclos", value: "R$ 97,00" },
    { text: "Exercício de identificação de crenças e padrões", value: "R$ 87,00" },
    { text: "Carta de libertação emocional", value: "R$ 67,00" },
    { text: "Plano da Nova Mulher", value: "R$ 97,00" },
    { text: "Meditação guiada de fortalecimento da autoconfiança", value: "R$ 77,00" },
    { text: "BÔNUS: Meditação da Mulher Posicionada", value: "R$ 97,00", isBonus: true }
  ];

  const forYouList = [
    "Tem dificuldade de dizer não e acaba colocando todo mundo na sua frente.",
    "Sente culpa quando escolhe suas próprias necessidades.",
    "Busca aprovação constantemente e se preocupa demais com o que os outros pensam.",
    "Sabe que merece mais, mas continua aceitando menos do que gostaria.",
    "Se sente insegura e gostaria de confiar mais em si mesma.",
    "Está cansada de viver no piloto automático e repetir os mesmos padrões.",
    "Quer desenvolver mais autoestima, autoconfiança e amor-próprio.",
    "Está pronta para parar de se abandonar e começar a se escolher."
  ];

  const notForYouList = [
    "Acredita que sua vida vai mudar sem que você mude seus comportamentos.",
    "Procura uma solução mágica sem olhar para si mesma.",
    "Não está disposta a aplicar os exercícios e reflexões propostas.",
    "Prefere continuar culpando as circunstâncias em vez de assumir responsabilidade pela própria transformação."
  ];

  const faqs = [
    {
      q: "1. Esse desafio serve para mim?",
      a: "Se você sente que faz demais pelos outros, tem dificuldade de se posicionar, duvida de si mesma ou sente que se perdeu ao longo da vida, sim. Esse desafio foi criado para mulheres que querem voltar a confiar em si mesmas, resgatar seu poder pessoal e construir uma vida mais alinhada com quem realmente são."
    },
    {
      q: "2. E se eu não tiver tempo?",
      a: "As aulas foram feitas para gerar transformação, não apenas motivação. Por isso, durante 7 dias, você vai precisar reservar um tempo para você. A pergunta é: você consegue se escolher por alguns minutos por dia?"
    },
    {
      q: "3. E se eu não gostar ou perceber que não é para mim?",
      a: "Você não está comprando apenas conteúdo, você está se dando a oportunidade de olhar para si mesma de uma forma diferente. Mas se durante o período de garantia você sentir que o desafio não faz sentido para você, basta solicitar o reembolso. Sem burocracia."
    },
    {
      q: "4. Eu já fiz terapia, cursos, mentorias e ainda continuo repetindo os mesmos padrões. O que muda aqui?",
      a: "Porque muitas vezes o problema não é falta de conhecimento. É falta de consciência sobre os padrões invisíveis que estão dirigindo sua vida. Durante o desafio, você vai olhar para crenças, autoimagem, máscaras, feridas emocionais e padrões de comportamento que talvez nunca tenha percebido antes."
    },
    {
      q: "5. Eu sou muito insegura. Será que consigo mudar em apenas 7 dias?",
      a: "Os 7 dias não existem para transformar sua vida inteira. Eles existem para iniciar uma transformação. Em 7 dias você pode ter uma descoberta que muda a forma como você se vê para sempre. E às vezes uma única descoberta muda tudo."
    },
    {
      q: "6. Preciso ter conhecimento sobre espiritualidade, constelação familiar ou desenvolvimento pessoal?",
      a: "Não. O desafio foi criado para qualquer mulher que deseja se conhecer melhor e voltar a confiar em si mesma. Tudo será explicado de forma simples, prática e aplicável à vida real."
    },
    {
      q: "7. O que eu vou ganhar ao final desses 7 dias?",
      a: "Você vai sair com mais clareza sobre quem é, quais padrões estão te sabotando, por que você se abandona em determinadas situações e quais passos precisa dar para se tornar uma mulher mais posicionada, segura e conectada consigo mesma."
    }
  ];

  // Map directory contents for testimonials
  const tabImages = {
    dia_00: [
      '/assets/testimonials/dia_00/depoimento_1.jpeg',
      '/assets/testimonials/dia_00/depoimento_2.jpeg',
      '/assets/testimonials/dia_00/depoimento_3.jpeg',
      '/assets/testimonials/dia_00/depoimento_4.jpeg',
    ],
    dia_07: [
      '/assets/testimonials/dia_07/depoimento_1.jpeg',
      '/assets/testimonials/dia_07/depoimento_2.jpeg',
      '/assets/testimonials/dia_07/depoimento_3.jpeg',
      '/assets/testimonials/dia_07/depoimento_4.jpeg',
    ],
    dia_365: [
      '/assets/testimonials/dia_365/depoimento_1.jpeg',
      '/assets/testimonials/dia_365/depoimento_2.jpeg',
      '/assets/testimonials/dia_365/depoimento_3.jpeg',
      '/assets/testimonials/dia_365/depoimento_4.jpeg',
    ],
    novos: [
      '/assets/testimonials/novos/depoimento_1.jpeg',
      '/assets/testimonials/novos/depoimento_2.jpeg',
      '/assets/testimonials/novos/depoimento_3.jpeg',
      '/assets/testimonials/novos/depoimento_4.jpeg',
    ]
  };

  return (
    <div className="font-body text-gray-800 bg-[#FFFBF9] overflow-x-hidden antialiased select-none">
      
      {/* --- STICKY CTA HEADER --- */}
      <AnimatePresence>
        {showStickyHeader && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 bg-[#FFFBF9]/95 backdrop-blur-md z-50 border-b border-orange-100 shadow-md py-2.5 sm:py-3 px-3 sm:px-4 transition-all"
          >
            <div className="max-w-6xl mx-auto flex items-center justify-between">
              <div className="flex flex-col">
                <span className="font-display font-bold text-gray-900 text-xs sm:text-sm md:text-base tracking-wide">Isabella Franklin</span>
                <span className="text-[10px] sm:text-xs text-secondary font-semibold uppercase tracking-wider hidden md:inline">Desafio Despertar das Bellas</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-4">
                <div className="hidden lg:flex items-center text-xs text-gray-500 font-medium space-x-1">
                  <ShieldCheck size={14} className="text-accent-green" />
                  <span>Garantia de 7 Dias</span>
                </div>
                <button
                  onClick={scrollToOffer}
                  className="bg-gradient-to-r from-primary to-secondary hover:from-primary-hover hover:to-secondary text-white text-[10px] sm:text-xs md:text-sm font-bold py-2 sm:py-2.5 px-3 sm:px-5 md:px-7 rounded-lg sm:rounded-xl shadow-glow-primary hover:shadow-lg transition-all transform hover:scale-105 duration-200 whitespace-nowrap"
                >
                  QUERO ENTRAR NO DESAFIO AGORA
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- BANNER DE DEPOIMENTOS (BANNER TOP DE TUDO) --- */}
      <section className="py-8 sm:py-12 bg-[#1D110F] text-white relative z-25 border-b border-orange-950/20 shadow-lg">
        {/* Glowing Background Lights */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-bl from-secondary/10 to-transparent rounded-full blur-[80px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-[80px] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center">
          {/* Section Header */}
          <div className="text-center mb-6 sm:mb-8 max-w-2xl">
            <span className="text-[10px] sm:text-xs text-primary font-bold uppercase tracking-widest bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
              Minha Evolução
            </span>
            <h2 className="font-display text-xl sm:text-3xl font-bold mt-2 leading-tight text-white">
              Do Medo ao Poder Pessoal
            </h2>
            <p className="mt-2 text-white/60 text-xs sm:text-sm leading-relaxed font-light">
              Acompanhe a minha própria jornada e veja como o posicionamento transformou a minha vida do Dia 0 ao Dia 365.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="flex justify-center items-center gap-3 sm:gap-6 w-full max-w-3xl">
            <CardSlideshow 
              images={tabImages.dia_00}
              label="DIA 0"
              subtitle="MEDO"
              onZoom={setSelectedImage}
            />
            <CardSlideshow 
              images={tabImages.dia_07}
              label="DIA 7"
              subtitle="CLAREZA"
              onZoom={setSelectedImage}
            />
            <CardSlideshow 
              images={tabImages.dia_365}
              label="DIA 365"
              subtitle="LIBERDADE"
              onZoom={setSelectedImage}
            />
          </div>

          <p className="text-[10px] text-white/35 mt-6 italic">
            * Clique em qualquer imagem para ampliar.
          </p>
        </div>
      </section>

      {/* --- HERO / ABERTURA --- */}
      <section className="relative flex items-center justify-center pt-6 sm:pt-10 pb-16 sm:pb-24 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-[#FFFBF9] via-[#FFF8F5] to-[#FFFBF9]">
        {/* Background Gradients */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-secondary/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center text-center">
          {/* Text Content */}
          <div className="flex flex-col space-y-5 sm:space-y-6 items-center text-center">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-2"
            >
              <img
                src="/assets/images/logo.png"
                alt="MANA Terapia e Mentoria"
                className="h-10 sm:h-12 w-auto object-contain"
                onError={(e) => {
                  // Fallback if logo doesn't load
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center space-x-2 bg-secondary/10 border border-secondary/20 px-4 py-2 rounded-full w-fit"
            >
              <Sparkles size={14} className="text-secondary animate-pulse" />
              <span className="text-secondary font-bold text-[10px] sm:text-xs tracking-wider uppercase">DESAFIO DESPERTAR DAS BELLAS</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 leading-tight font-bold max-w-3xl"
            >
              Nos próximos <span className="text-primary italic">7 dias</span> você vai voltar a confiar em si mesma e <span className="text-secondary italic">despertar o poder pessoal</span> que existe em você
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed max-w-2xl mx-auto font-normal"
            >
              Mulheres agradadoras se perdem pelo outro. Mulheres posicionadas atraem amor, prosperidade e a vida que desejam viver.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-2 sm:pt-4 flex flex-col space-y-4 items-center w-full"
            >
              <button
                onClick={scrollToOffer}
                className="inline-flex items-center justify-center px-6 py-4 sm:px-8 sm:py-5 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-2xl shadow-xl shadow-primary/20 text-base sm:text-lg md:text-xl group hover:shadow-2xl hover:shadow-primary/30 transition-all w-full sm:w-fit text-center"
              >
                QUERO DESPERTAR MEU PODER
                <ArrowRight className="ml-2 group-hover:translate-x-1.5 transition-transform" size={18} />
              </button>
              
              <div className="flex flex-wrap justify-center gap-y-2 gap-x-4 sm:gap-x-6 text-xs sm:text-sm text-gray-500 font-medium">
                <span className="flex items-center">
                  <ShieldCheck size={16} className="text-accent-green mr-1.5" />
                  Garantia incondicional de 7 dias
                </span>
                <span className="flex items-center">
                  <Lock size={15} className="text-accent-green mr-1.5" />
                  Ambiente 100% seguro
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* --- IDENTIFICAÇÃO / DORES --- */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-xs text-secondary font-bold uppercase tracking-widest bg-secondary/10 px-3.5 py-1.5 rounded-full">Sintomas</span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl text-gray-900 font-bold mt-4 leading-tight">
              Você já se pegou pensando...
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-5"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {painPoints.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
                className="flex items-start space-x-4 p-5 sm:p-6 bg-[#FFFBF9] rounded-2xl border border-orange-100/60 hover:border-primary/20 hover:shadow-md transition-all duration-300 group"
              >
                <div className="bg-secondary/10 p-2 rounded-xl flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                  <AlertCircle size={18} className="text-secondary" />
                </div>
                <p className="text-gray-750 font-medium leading-relaxed text-sm sm:text-base italic">
                  "{item}"
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-10 sm:mt-12 p-5 sm:p-8 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl border-2 border-dashed border-primary/20 text-center"
          >
            <p className="text-gray-800 text-base sm:text-lg md:text-xl font-medium italic leading-relaxed">
              "Se você se identificou em alguma dessas situações, saiba: você não está quebrada. Você apenas foi programada para agir assim. E você está no lugar certo."
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- NARRATIVA DO PROBLEMA --- */}
      <section className="py-16 md:py-24 bg-[#FFFBF9] relative overflow-hidden border-t border-orange-50/50">
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-48 h-96 bg-primary/5 rounded-r-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-48 h-96 bg-secondary/5 rounded-l-full blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-10">
            <span className="text-xs text-primary font-bold uppercase tracking-widest bg-primary/10 px-3.5 py-1.5 rounded-full w-fit">A Verdadeira Causa</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-gray-900 font-bold leading-tight mt-4">
              E se o problema nunca tivesse sido você?
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-4"></div>
          </div>

          <div className="space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed font-normal text-left max-w-3xl mx-auto">
            <p>
              Você não nasceu insegura. Você não nasceu dependendo da aprovação dos outros. E, definitivamente, não nasceu acreditando que precisava agradar para ser amada.
            </p>
            <p className="font-normal text-gray-800 border-l-4 border-primary pl-4 py-1 bg-primary/5 rounded-r-xl">
              Ao longo da vida, você foi sendo condicionada.
            </p>
            <p>
              Aprendeu a evitar conflitos. Aprendeu a colocar as necessidades dos outros acima das suas. Aprendeu que ser boazinha era mais seguro do que ser verdadeira.
            </p>
            <p>
              E muitas dessas aprendizagens nasceram de dores, medos e padrões que foram passando de geração em geração. Sem perceber, você começou a viver seguindo regras que nunca escolheu.
            </p>

            <div className="my-10 p-6 sm:p-8 bg-white rounded-3xl border border-orange-100 shadow-sm space-y-4">
              <h3 className="font-display font-bold text-lg sm:text-xl text-gray-950 text-center md:text-left">O resultado?</h3>
              <ul className="space-y-3 font-normal text-gray-800">
                <li className="flex items-start space-x-2.5">
                  <XCircle className="text-red-500 mt-1 flex-shrink-0" size={16} />
                  <span>Te ensinaram a cuidar de todo mundo. Mas ninguém te ensinou a cuidar de você.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <XCircle className="text-red-500 mt-1 flex-shrink-0" size={16} />
                  <span>Te ensinaram a ser aceita. Mas não te ensinaram a descobrir quem você é.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <XCircle className="text-red-500 mt-1 flex-shrink-0" size={16} />
                  <span>Te ensinaram a agradar. Mas não te ensinaram a se escolher.</span>
                </li>
              </ul>
            </div>

            <div className="text-center pt-4">
              <h4 className="font-display font-bold text-xl sm:text-2xl text-accent-green mb-2">A boa notícia?</h4>
              <p className="font-semibold text-gray-900">
                Tudo aquilo que foi aprendido pode ser desaprendido.
              </p>
              <p className="text-sm text-gray-500 mt-1">
                E é exatamente isso que vamos começar a fazer nos próximos 7 dias.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- O MÉTODO (OS 3 ATOS) --- */}
      <section className="py-20 md:py-24 bg-[#1A0F0D] text-white relative overflow-hidden">
        {/* Decorative background effects */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-[120px] opacity-[0.08] pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-[120px] opacity-[0.08] pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="text-xs text-primary font-bold uppercase tracking-widest bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">O Método</span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold mt-4 leading-tight">
              A Jornada de 7 Dias
            </h2>
            <p className="mt-4 text-white/60 max-w-2xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed">
              Estruturada rigorosamente em 3 atos para você reconstruir o seu posicionamento e resgatar o seu espaço vital.
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* ACT 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-3xl flex flex-col justify-between hover:bg-white/10 transition-colors"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/15 px-3 py-1 rounded-full inline-block mb-4">
                  Ato 1 (Dias 1 & 2)
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold mb-4 text-white">1. A PRISÃO INVISÍVEL</h3>
                <p className="text-white/80 font-semibold italic text-xs mb-4">
                  "Entenda por que você se tornou uma mulher agradadora - e como isso impacta sua vida."
                </p>
                <p className="text-white/50 text-xs sm:text-sm leading-relaxed font-light">
                  Nos dois primeiros dias você vai identificar os padrões, crenças e comportamentos que fazem você se apagar, agradar a todos e perder a confiança em si mesma. Essa é a raiz de tudo, e a maioria das mulheres nunca para para olhar para ela.
                </p>
              </div>
            </motion.div>

            {/* ACT 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-3xl flex flex-col justify-between hover:bg-white/10 transition-colors"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/15 px-3 py-1 rounded-full inline-block mb-4">
                  Ato 2 (Dias 3 & 4)
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold mb-4 text-white">2. O DESPERTAR</h3>
                <p className="text-white/80 font-semibold italic text-xs mb-4">
                  "Identifique o que está impedindo você de viver a vida que deseja."
                </p>
                <p className="text-white/50 text-xs sm:text-sm leading-relaxed font-light">
                  Em 2 dias você vai enxergar como suas feridas emocionais, seus condicionamentos e os padrões que você herdou estão moldando seus relacionamentos, sua autoestima e as escolhas que você faz todos os dias, muitas vezes sem perceber.
                </p>
              </div>
            </motion.div>

            {/* ACT 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-3xl flex flex-col justify-between hover:bg-white/10 transition-colors"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/15 px-3 py-1 rounded-full inline-block mb-4">
                  Ato 3 (Dias 5, 6 & 7)
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold mb-4 text-white">3. UMA NOVA MULHER</h3>
                <p className="text-white/80 font-semibold italic text-xs mb-4">
                  "Construa uma nova forma de se enxergar e se posicionar."
                </p>
                <p className="text-white/50 text-xs sm:text-sm leading-relaxed font-light">
                  Nos últimos 3 dias você vai se tornar a nova mulher que sempre sonhou em ser, vai confiar mais em si mesma, estabelecer limites saudáveis e criar uma vida alinhada com quem você realmente é.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="mt-12 flex justify-center">
            <button
              onClick={scrollToOffer}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-secondary font-bold text-sm sm:text-base md:text-lg rounded-2xl shadow-glow hover:bg-gray-100 transition-colors"
            >
              COMEÇAR MINHA TRANSFORMAÇÃO DE 7 DIAS
            </button>
          </div>
        </div>
      </section>

      {/* --- O QUE VOCÊ VAI RECEBER --- */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-xs text-secondary font-bold uppercase tracking-widest bg-secondary/10 px-3.5 py-1.5 rounded-full">Conteúdo Incluso</span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl text-gray-900 font-bold mt-4 leading-tight">
              Tudo o que você vai receber:
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-5"></div>
          </div>

          <div className="bg-[#FFFBF9] rounded-3xl sm:rounded-[2.5rem] p-5 sm:p-8 md:p-10 border border-orange-100 shadow-md">
            <div className="divide-y divide-orange-100/50">
              {deliverables.map((item, idx) => (
                <div key={idx} className="py-4 sm:py-5 flex flex-col sm:flex-row items-center sm:justify-between text-center sm:text-left gap-3 sm:gap-4 first:pt-0 last:pb-0">
                  <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3.5">
                    <div className="bg-[#7F9B52]/10 p-1.5 rounded-lg flex-shrink-0">
                      <Check className="text-accent-green" size={14} />
                    </div>
                    <span className="text-gray-800 font-medium text-xs sm:text-sm md:text-base leading-snug">
                      {item.text}
                      {item.isBonus && (
                        <span className="ml-2 inline-block bg-primary/20 text-primary text-[10px] px-2 py-0.5 rounded font-extrabold uppercase">
                          BÔNUS EXCLUSIVO
                        </span>
                      )}
                    </span>
                  </div>
                  <span className="text-gray-400 font-light text-xs sm:text-sm line-through sm:ml-4 flex-shrink-0">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* --- VISUALIZAÇÃO DOS MOCKUPS --- */}
            <div className="mt-10 pt-8 border-t border-orange-100">
              <p className="text-center font-display font-bold text-gray-900 text-lg sm:text-xl mb-6">
                Visualização do Material:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Mockup 1: Meditação Portal do Renascimento */}
                <div className="bg-white p-4 rounded-2xl border border-orange-100 shadow-sm flex flex-col space-y-3">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-50 border border-orange-50 cursor-zoom-in group" onClick={() => setSelectedImage('/assets/mockups/meditacao_renascimento.jpeg')}>
                    <img 
                      src="/assets/mockups/meditacao_renascimento.jpeg" 
                      alt="Meditação Guiada Portal do Renascimento" 
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="bg-white/95 p-2 rounded-full text-secondary shadow-md">
                        <ZoomIn size={16} />
                      </div>
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] text-secondary font-bold uppercase tracking-wider bg-secondary/10 px-2.5 py-0.5 rounded">Meditação Guiada</span>
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base mt-1">Portal do Renascimento</h4>
                    <p className="text-xs text-gray-500 mt-0.5">Meditação guiada completa para fortalecimento da autoconfiança.</p>
                  </div>
                </div>

                {/* Mockup 2: Mapa das Crenças Invisíveis */}
                <div className="bg-white p-4 rounded-2xl border border-orange-100 shadow-sm flex flex-col space-y-3">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-50 border border-orange-50 cursor-zoom-in group" onClick={() => setSelectedImage('/assets/mockups/exercicio_crencas.jpeg')}>
                    <img 
                      src="/assets/mockups/exercicio_crencas.jpeg" 
                      alt="Mapa das Crenças Invisíveis" 
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="bg-white/95 p-2 rounded-full text-secondary shadow-md">
                        <ZoomIn size={16} />
                      </div>
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] text-accent-green font-bold uppercase tracking-wider bg-accent-green/10 px-2.5 py-0.5 rounded">Workbook Prático</span>
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base mt-1">Mapa das Crenças Invisíveis</h4>
                    <p className="text-xs text-gray-500 mt-0.5">Exercício de identificação e reprogramação de crenças e padrões.</p>
                  </div>
                </div>

                {/* Mockup 3: Meditação Uma Nova Mulher */}
                <div className="bg-white p-4 rounded-2xl border border-orange-100 shadow-sm flex flex-col space-y-3">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-50 border border-orange-50 cursor-zoom-in group" onClick={() => setSelectedImage('/assets/mockups/meditacao_nova_mulher.jpeg')}>
                    <img 
                      src="/assets/mockups/meditacao_nova_mulher.jpeg" 
                      alt="Meditação Guiada Uma Nova Mulher" 
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="bg-white/95 p-2 rounded-full text-secondary shadow-md">
                        <ZoomIn size={16} />
                      </div>
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] text-primary font-bold uppercase tracking-wider bg-primary/10 px-2.5 py-0.5 rounded">Áudio Bônus</span>
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base mt-1">Meditação: Uma Nova Mulher</h4>
                    <p className="text-xs text-gray-500 mt-0.5">Bônus exclusivo para fortalecimento da identidade e posicionamento.</p>
                  </div>
                </div>

                {/* Mockup 4: Plano Uma Nova Mulher */}
                <div className="bg-white p-4 rounded-2xl border border-orange-100 shadow-sm flex flex-col space-y-3">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-50 border border-orange-50 cursor-zoom-in group" onClick={() => setSelectedImage('/assets/mockups/plano_nova_mulher.jpeg')}>
                    <img 
                      src="/assets/mockups/plano_nova_mulher.jpeg" 
                      alt="Plano Uma Nova Mulher" 
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="bg-white/95 p-2 rounded-full text-secondary shadow-md">
                        <ZoomIn size={16} />
                      </div>
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] text-accent-green font-bold uppercase tracking-wider bg-accent-green/10 px-2.5 py-0.5 rounded">Planejador de Hábitos</span>
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base mt-1">Plano Uma Nova Mulher</h4>
                    <p className="text-xs text-gray-500 mt-0.5">Guia de ações e escolhas diárias para construir sua nova identidade.</p>
                  </div>
                </div>

              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-orange-100 text-center">
              <p className="text-xs uppercase tracking-widest text-gray-400 font-bold">VALOR TOTAL DE TODOS OS ENTREGÁVEIS:</p>
              <p className="text-2xl sm:text-3xl font-bold text-gray-500 line-through mt-1">R$ 709,00</p>
              <p className="text-accent-green text-sm sm:text-base font-semibold mt-1">
                Adquira hoje e economize mais de 90%
              </p>
              <p className="text-[10px] text-gray-400 mt-2 italic">
                * Clique nos mockups acima para ampliá-los.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- É PARA VOCÊ / NÃO É PARA VOCÊ --- */}
      <section className="py-16 md:py-24 bg-[#FFFBF9] relative overflow-hidden border-t border-orange-50/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            
            {/* É PARA VOCÊ */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-orange-100/60">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-accent-green/10 p-2.5 rounded-2xl">
                  <CheckCircle className="text-accent-green" size={24} />
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-gray-950">É para você que...</h3>
              </div>
              <ul className="space-y-4">
                {forYouList.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-gray-700 text-sm sm:text-base leading-relaxed">
                    <Check className="text-accent-green mt-1 flex-shrink-0" size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* NÃO É PARA VOCÊ */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-orange-100/60">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-red-50 p-2.5 rounded-2xl">
                  <XCircle className="text-red-500" size={24} />
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-gray-950">Não é para você que...</h3>
              </div>
              <ul className="space-y-4">
                {notForYouList.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-gray-700 text-sm sm:text-base leading-relaxed">
                    <X className="text-red-500 mt-1.5 flex-shrink-0" size={14} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>



      {/* --- IMAGE DETAIL OVERLAY MODAL --- */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              className="relative max-w-[90vw] max-h-[85vh] md:max-w-[420px] aspect-[9/16] rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Testemunho Detalhado"
                className="w-full h-full object-contain"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-black/60 text-white hover:bg-black/90 p-2.5 rounded-full backdrop-blur-sm shadow-md transition-colors border border-white/10"
              >
                <X size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- DUAS TRAJETÓRIAS ("A verdade é que nada muda...") --- */}
      <section className="py-20 md:py-24 bg-[#FFFBF9] relative overflow-hidden border-t border-orange-50/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-xs text-primary font-bold uppercase tracking-widest bg-primary/10 px-3.5 py-1.5 rounded-full">Decisão</span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl text-gray-900 font-bold mt-4 leading-tight">
              A verdade é que nada muda...
            </h2>
            <p className="mt-3 text-gray-500 max-w-xl mx-auto text-xs sm:text-sm md:text-base">
              ...enquanto você continua repetindo os mesmos padrões. Daqui a 6 meses, qual será sua escolha?
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-5"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
            
            {/* PATH 1 */}
            <div className="bg-red-50/40 p-6 sm:p-8 rounded-3xl border border-red-100 flex flex-col justify-between">
              <div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-red-700 mb-4">Caminho 1: O <span className="italic">Piloto Automático</span></h3>
                <p className="text-gray-650 text-sm sm:text-base leading-relaxed mb-6 font-light">
                  Continuar exatamente onde está hoje. Evitando conflitos, engolindo sapos, dizendo 'sim' querendo dizer 'não'. Vivendo para agradar a todos ao seu redor e, no final das contas, abandonando você mesma.
                </p>
              </div>
              <span className="text-xs text-red-500/80 font-bold tracking-wider uppercase bg-red-100/60 py-2 px-4 rounded-xl text-center">
                Estagnação e anulação pessoal
              </span>
            </div>

            {/* PATH 2 */}
            <div className="bg-accent-green/5 p-6 sm:p-8 rounded-3xl border border-accent-green/20 flex flex-col justify-between">
              <div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-accent-green mb-4">Caminho 2: Despertar das <span className="italic">Bellas</span></h3>
                <p className="text-gray-650 text-sm sm:text-base leading-relaxed mb-6 font-light">
                  Estar mais confiante, mais posicionada e construindo uma vida alinhada com quem você realmente é. Rompendo os ciclos de carência emocional e atraindo o respeito, prosperidade e reciprocidade que merece.
                </p>
              </div>
              <span className="text-xs text-accent-green font-bold tracking-wider uppercase bg-accent-green/10 py-2 px-4 rounded-xl text-center">
                Autoconfiança e posicionamento real
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* --- SOBRE MENTORA --- */}
      <section className="py-20 md:py-24 bg-white relative overflow-hidden border-t border-orange-50/50">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative aspect-[3/4] w-full max-w-[360px] rounded-[3rem] overflow-hidden border-8 border-secondary/5 shadow-2xl">
              <img 
                src={IMAGES.about} 
                alt="Isabella Franklin" 
                className="w-full h-full object-cover object-center scale-105 hover:scale-100 transition-transform duration-700" 
              />
            </div>
            <div className="absolute top-10 -left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl -z-10"></div>
            <div className="absolute bottom-10 -right-10 w-32 h-32 bg-secondary/20 rounded-full blur-xl -z-10"></div>
          </div>

          <div className="lg:col-span-7 space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left">
            <span className="text-xs text-secondary font-bold uppercase tracking-widest bg-secondary/10 px-3.5 py-1.5 rounded-full w-fit">Sua Mentora</span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Talvez você se identifique comigo...
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mt-3"></div>

            <div className="space-y-4 text-gray-650 leading-relaxed text-sm sm:text-base font-light">
              <p>
                Durante muito tempo eu também fui uma mulher que buscava fora aquilo que precisava construir dentro de si. Eu me preocupava com a opinião dos outros, buscava aprovação, tentava corresponder às expectativas e, sem perceber, me afastava cada vez mais de quem eu realmente era.
              </p>
              <p>
                Por trás disso existiam inseguranças, feridas emocionais, crenças e padrões que eu carregava sem sequer perceber. Até que a vida começou a me mostrar que, enquanto eu continuasse tentando agradar todo mundo, nunca conseguiria construir a vida que realmente desejava viver.
              </p>
              <p>
                Foi essa busca por respostas que me levou ao autoconhecimento há mais de 10 anos. Desde então, mergulhei em estudos sobre comportamento humano, desenvolvimento pessoal, espiritualidade, Constelação Familiar, Cura Prânica e diversas ferramentas de transformação emocional.
              </p>
              <p className="font-semibold text-gray-900 italic">
                Hoje, como terapeuta e consteladora familiar, ajudo mulheres a identificarem os padrões invisíveis que as fazem se abandonar, para que possam desenvolver mais autoconfiança, posicionamento e liberdade para viver de forma alinhada consigo mesmas. Porque eu acredito que nenhuma mulher nasceu para viver tentando ser quem os outros esperam. Ela nasceu para ser quem verdadeiramente é.
              </p>
            </div>

            <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-5 w-full justify-center lg:justify-start">
              <div className="flex-shrink-0">
                <img 
                  src={IMAGES.signature} 
                  alt="Assinatura Isabella Franklin" 
                  className="h-10 opacity-60 md:h-12"
                  onError={(e) => {
                    // Fallback signature
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <p className="text-sm font-bold text-gray-900 uppercase tracking-wide">Isabella Franklin</p>
                <p className="text-xs text-gray-500 font-medium">Terapeuta Sistêmica e Mentora de Mulheres</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- ORDER BUMP & FINAL OFFER --- */}
      <section id="oferta" className="py-20 md:py-24 bg-gradient-to-b from-white to-[#FFFBF9] relative scroll-mt-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-8">
          
          {/* ORDER BUMP CHECKBOX */}
          <div className="bg-[#EBF7F2] rounded-3xl p-6 border-2 border-dashed border-[#7F9B52] shadow-sm relative overflow-hidden transition-all hover:shadow-md">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 relative z-10">
              
              <div className="flex items-start space-x-4">
                <div className="bg-[#7F9B52] text-white p-3 rounded-2xl mt-1 md:mt-0 flex-shrink-0 flex items-center justify-center shadow-md shadow-accent-green/20">
                  <Gift size={22} className="animate-bounce" />
                </div>
                <div>
                  <h4 className="font-display font-extrabold text-gray-950 text-base sm:text-lg">
                    Tenha acesso ao Desafio pelo triplo de tempo!
                  </h4>
                  <p className="text-accent-green font-bold text-xs uppercase tracking-wider mt-0.5">
                    TRIPLIQUE SEU TEMPO DE ACESSO
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mt-2 font-light">
                    O acesso padrão ao Desafio é de 30 dias. Ao selecionar esta oferta complementar, você estende o seu período para **90 dias** para rever as aulas e realizar os exercícios quantas vezes desejar.
                  </p>
                </div>
              </div>

              <div className="flex-shrink-0 w-full md:w-auto flex items-center justify-start md:justify-center">
                <label className="flex items-center space-x-3 cursor-pointer bg-white px-5 py-3.5 rounded-2xl border border-orange-100 shadow-sm hover:border-[#7F9B52] transition-colors w-full justify-center md:w-auto">
                  <input
                    type="checkbox"
                    checked={hasOrderBump}
                    onChange={(e) => setHasOrderBump(e.target.checked)}
                    className="w-5 h-5 rounded-md border-orange-200 text-[#7F9B52] focus:ring-[#7F9B52] cursor-pointer"
                  />
                  <span className="font-bold text-gray-900 text-xs sm:text-sm whitespace-nowrap">
                    Adicionar por apenas mais <span className="text-[#7F9B52]">R$ 3,31/mês</span>
                  </span>
                </label>
              </div>

            </div>
          </div>

          {/* MAIN PRODUCT OFFER BOX */}
          <div className="bg-gradient-to-br from-[#1A0F0D] to-[#2D1B18] text-white rounded-3xl sm:rounded-[3rem] p-6 sm:p-8 md:p-12 shadow-2xl relative overflow-hidden border border-white/10 text-center">
            
            <div className="absolute top-6 right-6 opacity-25 animate-spin" style={{ animationDuration: '10s' }}>
              <Star size={36} className="text-primary fill-primary" />
            </div>

            <span className="text-xs text-primary font-bold uppercase tracking-wider bg-primary/20 border border-primary/40 px-4 py-1.5 rounded-full inline-block mb-6">
              Oferta Especial de Lançamento
            </span>

            <h3 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
              Desafio <span className="text-primary italic">Despertar das Bellas</span>
            </h3>
            
            <p className="text-white/70 text-xs sm:text-sm md:text-base max-w-lg mx-auto mb-8 font-light leading-relaxed">
              O primeiro passo definitivo para quebrar o ciclo de carência transgeracional e começar a se posicionar com segurança e leveza nos próximos 7 dias.
            </p>

            {/* Price Box */}
            <div className="bg-white/5 backdrop-blur-md rounded-3xl py-6 px-6 max-w-sm mx-auto mb-8 border border-white/10 relative">
              <span className="text-white/50 text-xs uppercase tracking-widest font-semibold block">POR APENAS</span>
              <div className="flex items-center justify-center mt-2">
                <span className="text-base sm:text-xl md:text-2xl font-bold text-primary mr-1.5">12x de</span>
                <span className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white">
                  R$ {finalPriceInstallment.toFixed(2).replace('.', ',')}
                </span>
              </div>
              <span className="text-white/40 text-xs mt-2 block">
                ou R$ {finalPriceCash.toFixed(2).replace('.', ',')} à vista
              </span>
              {hasOrderBump && (
                <div className="absolute -top-3 -right-3 bg-accent-green text-white font-extrabold text-[9px] uppercase tracking-wider px-2.5 py-1 rounded-full shadow-lg">
                  + 60 DIAS ADICIONADOS
                </div>
              )}
            </div>

            {/* CTA Button */}
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href={checkoutUrl}
              className="w-full inline-flex items-center justify-center px-6 py-4 sm:py-5 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-2xl shadow-xl shadow-primary/25 text-base sm:text-lg group hover:shadow-2xl hover:shadow-primary/40 transition-all text-center"
            >
              COMEÇAR MINHA JORNADA AGORA
              <ArrowRight className="ml-2.5 group-hover:translate-x-1.5 transition-transform" size={18} />
            </motion.a>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-white/50 text-xs font-light">
              <span className="flex items-center">
                <ShieldCheck size={16} className="text-accent-green mr-1.5 flex-shrink-0" />
                Acesso Imediato à Plataforma
              </span>
              <span className="flex items-center">
                <Lock size={15} className="text-accent-green mr-1.5 flex-shrink-0" />
                Pagamento Seguro e Criptografado
              </span>
            </div>

            {/* Guarantee Section */}
            <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center text-center md:text-left">
              <div className="md:col-span-3 flex justify-center">
                <div className="bg-white/10 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center border border-white/20">
                  <span className="font-display font-bold text-xl sm:text-2xl text-primary">7</span>
                  <span className="text-[10px] sm:text-xs uppercase text-white/70 font-semibold ml-0.5">Dias</span>
                </div>
              </div>
              <div className="md:col-span-9 space-y-2">
                <h4 className="font-bold text-white text-sm sm:text-base">Garantia Blindada de 7 Dias</h4>
                <p className="text-white/60 text-xs leading-relaxed font-light">
                  Se por qualquer motivo você não se identificar com as aulas nos primeiros 7 dias de acesso, basta nos enviar um e-mail. Nós devolvemos 100% do seu investimento. Sem perguntas, sem estresse. O risco é todo meu.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-16 md:py-24 bg-[#FFFBF9] border-t border-orange-50/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-xs text-secondary font-bold uppercase tracking-widest bg-secondary/10 px-3.5 py-1.5 rounded-full">FAQ</span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl text-gray-900 font-bold mt-4 leading-tight">
              Perguntas Frequentes
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-5"></div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-sm border border-orange-100/60 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full text-left p-4 sm:p-6 flex items-center justify-between focus:outline-none focus:ring-1 focus:ring-primary/20"
                >
                  <span className="font-bold text-gray-900 pr-4 text-sm sm:text-base md:text-lg">{faq.q}</span>
                  {activeFaq === i ? (
                    <ChevronUp className="text-primary flex-shrink-0" size={18} />
                  ) : (
                    <ChevronDown className="text-primary flex-shrink-0" size={18} />
                  )}
                </button>
                <AnimatePresence initial={false}>
                  {activeFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-4 pb-4 sm:px-6 sm:pb-6 pt-1 text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base border-t border-orange-50/20 mt-1">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 bg-[#150B0A] border-t border-white/5 text-center text-white/30 text-xs">
        <div className="max-w-6xl mx-auto px-4 space-y-4">
          <p className="font-display font-medium text-white/50 text-sm tracking-wide">Isabella Franklin</p>
          <p>© {new Date().getFullYear()} Isabella Franklin. Todos os direitos reservados.</p>
          <p className="max-w-md mx-auto leading-relaxed text-[10px]">
            Qualquer dúvida ou suporte, entre em contato através de nossos canais de atendimento oficial. Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook.
          </p>
        </div>
      </footer>

    </div>
  );
};

export default LP2;
