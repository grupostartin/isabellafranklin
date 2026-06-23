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
  HelpCircle, 
  Clock, 
  Check,
  XCircle,
  AlertCircle,
  ZoomIn,
  X
} from 'lucide-react';
import { IMAGES } from '../constants';
import SplashScreenGold from '../components/SplashScreenGold';

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

const SpiralSeparator: React.FC = () => (
  <div className="flex items-center justify-center my-10 sm:my-14 pointer-events-none select-none z-10 relative">
    <div className="h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent w-full max-w-[180px] sm:max-w-[240px]" />
    <div className="mx-4 relative flex items-center justify-center">
      <div className="absolute w-7 h-7 rounded-full bg-primary/10 blur-sm" />
      <svg viewBox="0 0 24 24" className="w-5.5 h-5.5 text-primary relative z-10 fill-none stroke-current" strokeWidth="1.5">
        <path d="M12 12c1-1 2.5-.5 2.5 1s-1.5 2-3 2-3.5-2.5-3.5-4.5 3-5.5 5.5-5.5 6 4 6 7-4.5 8-8 8-7-5.5-7-9.5C4.5 6 9.5 3.5 15 3.5" />
      </svg>
    </div>
    <div className="h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent w-full max-w-[180px] sm:max-w-[240px]" />
  </div>
);

const SparkleStars: React.FC = () => (
  <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
    <div className="absolute left-[5%] top-[15%] text-primary/30 animate-pulse" style={{ animationDuration: '3s' }}>
      <Star size={12} className="fill-primary" />
    </div>
    <div className="absolute right-[8%] top-[40%] text-primary/45 animate-pulse" style={{ animationDuration: '4.5s' }}>
      <Star size={16} className="fill-primary" />
    </div>
    <div className="absolute left-[12%] bottom-[20%] text-primary/35 animate-pulse" style={{ animationDuration: '3.5s' }}>
      <Star size={14} className="fill-primary" />
    </div>
  </div>
);

const LP2: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [showStickyHeader, setShowStickyHeader] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
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

  const handleSplashComplete = () => {
    setShowSplash(false);
    document.body.classList.remove('loading');
  };

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

  // Base pricing
  const basePriceCash = 57.00;
  const basePriceInstallment = 5.90;

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
    {
      num: "01",
      icon: "video",
      badge: { label: "Aulas ao Vivo", color: "primary" },
      title: "7 aulas ao vivo do Desafio da Mulher Posicionada",
      description: "Aulas profundas e transformadoras para despertar sua nova consciência.",
      value: "R$ 197,00",
      image: "/assets/mockups/meditacao_renascimento.jpeg",
      imageAlt: "7 Aulas ao Vivo"
    },
    {
      num: "02",
      icon: "book",
      badge: { label: "Workbook", color: "accent-green" },
      title: "Workbook completo de exercícios de destrave de ciclos",
      description: "Exercícios práticos para quebrar padrões e destravar sua vida.",
      value: "R$ 97,00",
      image: "/assets/mockups/exercicio_crencas.jpeg",
      imageAlt: "Workbook Destrave de Ciclos"
    },
    {
      num: "03",
      icon: "headphones",
      badge: { label: "Meditações Guiadas", color: "secondary" },
      title: "2 Meditações Guiadas",
      description: "",
      bullets: [
        { label: "Meditação – Portal do Renascimento", detail: "para você se despedir da sua velha versão" },
        { label: "Meditação – De volta para casa", detail: "para você conectar com sua essência" }
      ],
      value: "R$ 147,00",
      image: "/assets/mockups/meditacao_renascimento.jpeg",
      imageAlt: "Meditação Portal do Renascimento"
    },
    {
      num: "04",
      icon: "star",
      badge: { label: "BÔNUS EXCLUSIVO", color: "primary" },
      title: "1 Meditação Bônus – Uma Nova Mulher",
      description: "",
      bullets: [
        { label: "Meditação – Uma Nova Mulher", detail: "Autoconfiante, Posicionada, no Seu Poder" }
      ],
      value: "R$ 97,00",
      isBonus: true,
      image: "/assets/mockups/meditacao_nova_mulher.jpeg",
      imageAlt: "Meditação Uma Nova Mulher"
    },
    {
      num: "05",
      icon: "map",
      badge: { label: "Exercícios Extras", color: "accent-green" },
      title: "+ Exercícios Extras",
      description: "",
      bullets: [
        { label: "Mapa do seu território", detail: "definindo limites" },
        { label: "Mapa das Crenças que sabotam o seu poder", detail: "" }
      ],
      value: "R$ 87,00",
      image: "/assets/mockups/plano_nova_mulher.jpeg",
      imageAlt: "Exercícios Extras"
    }
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
    <>
      <AnimatePresence>
        {showSplash && <SplashScreenGold onComplete={handleSplashComplete} />}
      </AnimatePresence>

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
      <section className="py-8 sm:py-12 bg-[#0F0807] text-white relative z-20 border-b border-orange-950/20 shadow-lg overflow-hidden">
        {/* Visual theme helpers */}
        <WindowLightGlow />
        <SunflowerOutline className="absolute right-0 top-0 w-[240px] h-[240px] opacity-[0.03]" />
        <SparkleStars />

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
      <section className="relative flex items-center justify-center pt-8 sm:pt-14 pb-20 sm:pb-28 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-[#0F0807] via-[#080403] to-[#0F0807] text-white">
        {/* Visual theme helpers */}
        <WindowLightGlow />
        <SunflowerOutline className="absolute right-0 bottom-0 w-[300px] h-[300px] md:w-[420px] md:h-[420px] opacity-[0.02]" />
        <SparkleStars />

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
                className="h-10 sm:h-12 w-auto object-contain brightness-0 invert"
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
              className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full w-fit"
            >
              <Sparkles size={14} className="text-primary animate-pulse" />
              <span className="text-primary font-bold text-[10px] sm:text-xs tracking-wider uppercase">DESAFIO DESPERTAR DAS BELLAS</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white leading-tight font-bold max-w-3xl"
            >
              Nos próximos <span className="text-primary italic">7 dias</span> você vai voltar a confiar em si mesma e <span className="text-secondary italic">despertar o poder pessoal</span> que existe em você
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto font-light"
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
                className="inline-flex items-center justify-center px-6 py-4 sm:px-8 sm:py-5 bg-gradient-to-r from-primary to-secondary hover:from-primary-hover hover:to-secondary text-white font-bold rounded-2xl shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 border border-primary/25 transition-all w-full sm:w-fit text-center group transform hover:scale-103 duration-200"
              >
                QUERO DESPERTAR MEU PODER
                <ArrowRight className="ml-2 group-hover:translate-x-1.5 transition-transform" size={18} />
              </button>
              
              <div className="flex flex-wrap justify-center gap-y-2 gap-x-4 sm:gap-x-6 text-xs sm:text-sm text-gray-400 font-medium">
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
      {/* --- IDENTIFICAÇÃO / DORES --- */}
      <section className="py-16 md:py-24 bg-[#FDFBF7] relative overflow-hidden">
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
                className="flex items-start space-x-4 p-5 sm:p-6 bg-white rounded-2xl border border-orange-100/40 hover:border-primary/20 hover:shadow-md transition-all duration-300 group"
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
            className="mt-10 sm:mt-12 p-5 sm:p-8 bg-[#F9F6F0] rounded-3xl border border-orange-100/65 shadow-sm text-center"
          >
            <p className="text-gray-800 text-base sm:text-lg md:text-xl font-medium italic leading-relaxed">
              "Se você se identificou em alguma dessas situações, saiba: você não está quebrada. Você apenas foi programada para agir assim. E você está no lugar certo."
            </p>
          </motion.div>

          <SpiralSeparator />
        </div>
      </section>

      {/* --- NARRATIVA DO PROBLEMA --- */}
      <section className="py-16 md:py-24 bg-[#0F0807] text-white relative overflow-hidden border-t border-orange-950/20">
        <WindowLightGlow />
        <SunflowerOutline className="absolute left-0 top-0 w-[285px] h-[285px] opacity-[0.02] transform -scale-x-100" />
        <SparkleStars />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-10">
            <span className="text-xs text-primary font-bold uppercase tracking-widest bg-primary/10 border border-primary/20 px-3.5 py-1.5 rounded-full w-fit">A Verdadeira Causa</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white font-bold leading-tight mt-4">
              E se o problema nunca tivesse sido <span className="text-primary italic">você?</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-4"></div>
          </div>

          <div className="space-y-6 text-gray-300 text-base sm:text-lg leading-relaxed font-light text-left max-w-3xl mx-auto">
            <p>
              Você não nasceu insegura. Você não nasceu dependendo da aprovação dos outros. E, definitivamente, não nasceu acreditando que precisava agradar para ser amada.
            </p>
            <p className="font-semibold text-white border-l-4 border-primary pl-4 py-1.5 bg-primary/10 rounded-r-xl">
              Ao longo da vida, você foi sendo condicionada.
            </p>
            <p>
              Aprendeu a evitar conflitos. Aprendeu a colocar as necessidades dos outros acima das suas. Aprendeu que ser boazinha era mais seguro do que ser verdadeira.
            </p>
            <p>
              E muitas dessas aprendizagens nasceram de dores, medos e padrões que foram passando de geração em geração. Sem perceber, você começou a viver seguindo regras que nunca escolheu.
            </p>

            <div className="my-10 p-6 sm:p-8 bg-[#1C100E]/40 backdrop-blur-md rounded-3xl border border-primary/25 shadow-lg shadow-black/30 space-y-4">
              <h3 className="font-display font-bold text-lg sm:text-xl text-white text-center md:text-left">O resultado?</h3>
              <ul className="space-y-3 font-normal text-gray-200">
                <li className="flex items-start space-x-2.5">
                  <XCircle className="text-red-500 mt-1 flex-shrink-0" size={16} />
                  <span>Te ensinaram a cuidar de todo mundo. Mas ninguém te ensinou a <span className="text-primary font-semibold">cuidar de você.</span></span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <XCircle className="text-red-500 mt-1 flex-shrink-0" size={16} />
                  <span>Te ensinaram a ser aceita. Mas não te ensinaram a <span className="text-primary font-semibold">descobrir quem você é.</span></span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <XCircle className="text-red-500 mt-1 flex-shrink-0" size={16} />
                  <span>Te ensinaram a agradar. Mas não te ensinaram a <span className="text-primary font-semibold">se escolher.</span></span>
                </li>
              </ul>
            </div>

            <div className="text-center pt-4">
              <h4 className="font-display font-bold text-xl sm:text-2xl text-accent-green mb-2">A boa notícia?</h4>
              <p className="font-semibold text-white">
                Tudo aquilo que foi aprendido pode ser desaprendido.
              </p>
              <p className="text-sm text-gray-400 mt-1">
                E é exatamente isso que vamos começar a fazer nos próximos 7 dias.
              </p>
            </div>
          </div>

          <SpiralSeparator />
        </div>
      </section>

      {/* --- O MÉTODO (OS 3 ATOS) --- */}
      <section className="py-20 md:py-24 bg-[#FDFBF7] text-gray-800 relative overflow-hidden border-t border-orange-50/50">
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="text-xs text-primary font-bold uppercase tracking-widest bg-primary/10 border border-primary/20 px-3.5 py-1.5 rounded-full">O Método</span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl text-gray-900 font-bold mt-4 leading-tight">
              A Jornada de 7 Dias
            </h2>
            <p className="mt-4 text-gray-650 max-w-2xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed font-light">
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
              className="bg-white border border-orange-100/50 p-6 sm:p-8 rounded-3xl flex flex-col justify-between hover:shadow-md hover:border-primary/20 transition-all duration-300"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3.5 py-1 rounded-full inline-block mb-4">
                  Ato 1 (Dias 1 & 2)
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold mb-4 text-gray-900">1. A PRISÃO INVISÍVEL</h3>
                <p className="text-gray-700 font-semibold italic text-xs mb-4">
                  "Entenda por que você se tornou uma mulher agradadora - e como isso impacta sua vida."
                </p>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-light">
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
              className="bg-white border border-orange-100/50 p-6 sm:p-8 rounded-3xl flex flex-col justify-between hover:shadow-md hover:border-primary/20 transition-all duration-300"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3.5 py-1 rounded-full inline-block mb-4">
                  Ato 2 (Dias 3 & 4)
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold mb-4 text-gray-900">2. O DESPERTAR</h3>
                <p className="text-gray-700 font-semibold italic text-xs mb-4">
                  "Identifique o que está impedindo você de viver a vida que deseja."
                </p>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-light">
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
              className="bg-white border border-orange-100/50 p-6 sm:p-8 rounded-3xl flex flex-col justify-between hover:shadow-md hover:border-primary/20 transition-all duration-300"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3.5 py-1 rounded-full inline-block mb-4">
                  Ato 3 (Dias 5, 6 & 7)
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold mb-4 text-gray-900">3. UMA NOVA MULHER</h3>
                <p className="text-gray-700 font-semibold italic text-xs mb-4">
                  "Construa uma nova forma de se enxergar e se posicionar."
                </p>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-light">
                  Nos últimos 3 dias você vai se tornar a nova mulher que sempre sonhou em ser, vai confiar mais em si mesma, estabelecer limites saudáveis e criar uma vida alinhada com quem você realmente é.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="mt-12 flex justify-center">
            <button
              onClick={scrollToOffer}
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-secondary hover:from-primary-hover hover:to-secondary text-white font-bold text-sm sm:text-base md:text-lg rounded-2xl shadow-xl shadow-primary/20 hover:shadow-2xl border border-primary/25 transition-all transform hover:scale-103 duration-200"
            >
              COMEÇAR MINHA TRANSFORMAÇÃO DE 7 DIAS
            </button>
          </div>

          <SpiralSeparator />
        </div>
      </section>
      <section className="py-16 md:py-24 bg-[#0F0807] text-white relative overflow-hidden border-t border-orange-950/20">
        <WindowLightGlow />
        <SunflowerOutline className="absolute right-0 top-0 w-[300px] h-[300px] opacity-[0.02]" />
        <SparkleStars />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-xs text-secondary font-bold uppercase tracking-widest bg-secondary/10 border border-secondary/20 px-3.5 py-1.5 rounded-full">Conteúdo Incluso</span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl text-white font-bold mt-4 leading-tight">
              Tudo o que você vai receber:
            </h2>
            <p className="mt-3 text-white/50 text-xs sm:text-sm font-light max-w-md mx-auto">
              Materiais completos e transformadores para te guiar em cada passo da sua jornada.
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-5"></div>
          </div>

          {/* --- DELIVERABLES NUMBERED CARDS with inline images --- */}
          <div className="space-y-4 sm:space-y-5">
            {deliverables.map((item, idx) => {
              const badgeColors: Record<string, string> = {
                "primary": "bg-primary/20 text-primary border-primary/30",
                "accent-green": "bg-accent-green/15 text-accent-green border-accent-green/25",
                "secondary": "bg-secondary/15 text-secondary border-secondary/25",
              };
              const iconMap: Record<string, React.ReactNode> = {
                "video": (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <circle cx="12" cy="12" r="10" /><polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none"/>
                  </svg>
                ),
                "book": (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                  </svg>
                ),
                "headphones": (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
                  </svg>
                ),
                "map": (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/>
                  </svg>
                ),
                "star": (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ),
              };

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: idx * 0.07 }}
                  className={`relative flex flex-col sm:flex-row gap-0 rounded-2xl sm:rounded-3xl border overflow-hidden transition-all duration-300 group ${
                    item.isBonus
                      ? "bg-gradient-to-br from-primary/10 to-[#1C100E]/70 border-primary/35 hover:border-primary/55 shadow-lg shadow-primary/10"
                      : "bg-[#1C100E]/50 backdrop-blur-md border-white/8 hover:border-primary/20"
                  }`}
                >
                  {/* LEFT: text content */}
                  <div className="flex-1 p-5 sm:p-7 flex flex-col justify-center gap-3">
                    {/* Number + badge row */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`font-display font-black text-xl sm:text-2xl select-none ${
                        item.isBonus ? "text-primary" : "text-white/25"
                      }`}>
                        {item.num}
                      </span>
                      <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${badgeColors[item.badge.color] ?? badgeColors["primary"]} flex items-center gap-1.5`}>
                        <span>{iconMap[item.icon]}</span>
                        {item.badge.label}
                      </span>
                      {item.isBonus && (
                        <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-yellow-500/15 text-yellow-400 border border-yellow-500/25 animate-pulse">
                          UAU!
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className={`font-display font-bold text-base sm:text-lg md:text-xl leading-snug ${
                      item.isBonus ? "text-primary" : "text-white"
                    }`}>
                      {item.title}
                    </h3>

                    {/* Description */}
                    {item.description && (
                      <p className="text-white/50 text-xs sm:text-sm font-light leading-relaxed">{item.description}</p>
                    )}

                    {/* Bullets */}
                    {item.bullets && (
                      <ul className="space-y-1.5">
                        {item.bullets.map((b, bi) => (
                          <li key={bi} className="flex items-start gap-2 text-xs sm:text-sm text-white/60">
                            <span className="text-primary mt-0.5 flex-shrink-0">•</span>
                            <span>
                              <span className="font-semibold text-white/80">{b.label}</span>
                              {b.detail && <span className="text-white/40 italic"> – {b.detail}</span>}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* RIGHT: product image */}
                  <div
                    className="relative w-full sm:w-48 md:w-56 flex-shrink-0 aspect-[4/3] sm:aspect-auto overflow-hidden cursor-zoom-in"
                    onClick={() => setSelectedImage(item.image)}
                  >
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Gradient overlay left edge on desktop */}
                    <div className="hidden sm:block absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#1C100E] to-transparent pointer-events-none z-10" />
                    <div className="absolute inset-0 bg-black/20 pointer-events-none" />
                    {/* Zoom hint */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                      <div className="bg-black/60 text-primary backdrop-blur-sm border border-primary/30 p-2 rounded-full shadow-md">
                        <ZoomIn size={14} />
                      </div>
                    </div>
                  </div>

                  {/* Bonus glow ring */}
                  {item.isBonus && (
                    <div className="absolute inset-0 rounded-2xl sm:rounded-3xl pointer-events-none ring-1 ring-primary/20 shadow-[inset_0_0_40px_rgba(233,122,1,0.05)]" />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Total + CTA */}
          <div className="mt-10 sm:mt-12 bg-[#1C100E]/60 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-primary/20 p-6 sm:p-8 text-center shadow-xl shadow-black/30">
            <p className="text-xs uppercase tracking-widest text-white/35 font-bold">VALOR TOTAL DE TODOS OS ENTREGÁVEIS:</p>
            <p className="text-2xl sm:text-3xl font-bold text-white/30 line-through mt-1">R$ 625,00</p>
            <p className="text-accent-green text-sm sm:text-base font-semibold mt-1">
              Adquira hoje e economize mais de 90%
            </p>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToOffer}
              className="mt-6 inline-flex items-center justify-center gap-2.5 px-7 sm:px-10 py-3.5 sm:py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-xl sm:rounded-2xl shadow-xl shadow-primary/25 hover:shadow-primary/40 border border-primary/25 transition-all text-sm sm:text-base"
            >
              <Sparkles size={16} className="flex-shrink-0" />
              COMEÇAR MINHA TRANSFORMAÇÃO DE 7 DIAS
              <ArrowRight size={16} className="flex-shrink-0" />
            </motion.button>

            <p className="mt-4 text-[10px] text-white/30 font-light flex items-center justify-center gap-1.5">
              <ShieldCheck size={12} className="text-accent-green" />
              Garantia de 7 Dias ou seu dinheiro de volta
            </p>
          </div>

          <SpiralSeparator />
        </div>
      </section>

      {/* --- É PARA VOCÊ / NÃO É PARA VOCÊ --- */}
      <section className="py-16 md:py-24 bg-[#FDFBF7] relative overflow-hidden border-t border-orange-50/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            
            {/* É PARA VOCÊ */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-orange-100/50 hover:shadow-md transition-all duration-300">
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
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-orange-100/50 hover:shadow-md transition-all duration-300">
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

          <SpiralSeparator />
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
      <section className="py-20 md:py-24 bg-[#0F0807] text-white relative overflow-hidden border-t border-orange-950/20">
        <WindowLightGlow />
        <SunflowerOutline className="absolute left-0 bottom-0 w-[300px] h-[300px] opacity-[0.02] transform -scale-x-100" />
        <SparkleStars />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-xs text-primary font-bold uppercase tracking-widest bg-primary/10 border border-primary/20 px-3.5 py-1.5 rounded-full">Decisão</span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl text-white font-bold mt-4 leading-tight">
              A verdade é que nada muda...
            </h2>
            <p className="mt-3 text-gray-300 max-w-xl mx-auto text-xs sm:text-sm md:text-base font-light">
              ...enquanto você continua repetindo os mesmos padrões. Daqui a 6 meses, qual será sua escolha?
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-5"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
            
            {/* PATH 1 */}
            <div className="bg-red-950/10 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-red-900/30 shadow-lg shadow-black/20 flex flex-col justify-between hover:border-red-900/50 transition-all duration-300">
              <div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-red-400 mb-4">Caminho 1: O <span className="italic">Piloto Automático</span></h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
                  Continuar exatamente onde está hoje. Evitando conflitos, engolindo sapos, dizendo 'sim' querendo dizer 'não'. Vivendo para agradar a todos ao seu redor e, no final das contas, abandonando você mesma.
                </p>
              </div>
              <span className="text-xs text-red-400/90 font-bold tracking-wider uppercase bg-red-950/30 border border-red-900/25 py-2 px-4 rounded-xl text-center">
                Estagnação e anulação pessoal
              </span>
            </div>

            {/* PATH 2 */}
            <div className="bg-accent-green/10 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-accent-green/30 shadow-lg shadow-black/20 flex flex-col justify-between hover:border-accent-green/50 transition-all duration-300">
              <div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-accent-green mb-4">Caminho 2: Despertar das <span className="italic">Bellas</span></h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
                  Estar mais confiante, mais posicionada e construindo uma vida alinhada com quem você realmente é. Rompendo os ciclos de carência emocional e atraindo o respeito, prosperidade e reciprocidade que merece.
                </p>
              </div>
              <span className="text-xs text-accent-green/90 font-bold tracking-wider uppercase bg-accent-green/20 border border-accent-green/25 py-2 px-4 rounded-xl text-center">
                Autoconfiança e posicionamento real
              </span>
            </div>

          </div>

          <SpiralSeparator />
        </div>
      </section>

      {/* --- SOBRE MENTORA --- */}
      <section className="py-20 md:py-24 bg-[#FDFBF7] relative overflow-hidden border-t border-orange-50/50">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative aspect-[3/4] w-full max-w-[360px] rounded-[3rem] overflow-hidden border-8 border-primary/10 shadow-2xl">
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

            <div className="space-y-4 text-gray-655 leading-relaxed text-sm sm:text-base font-light">
              <p>
                Durante muito tempo eu também fui uma mulher que buscava fora aquilo que precisava construir dentro de si. Eu me preocupava com a opinion dos outros, buscava aprovação, tentava corresponder às expectativas e, sem perceber, me afastava cada vez mais de quem eu realmente era.
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

        <SpiralSeparator />
      </section>

      {/* --- ORDER BUMP & FINAL OFFER --- */}
      <section id="oferta" className="py-20 md:py-24 bg-[#0F0807] text-white relative overflow-hidden border-t border-orange-950/20 scroll-mt-24">
        <WindowLightGlow />
        <SunflowerOutline className="absolute right-0 top-0 w-[300px] h-[300px] opacity-[0.02]" />
        <SparkleStars />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10 space-y-8">
          
          {/* MAIN PRODUCT OFFER BOX */}
          <div className="bg-[#1C100E]/40 backdrop-blur-md text-white rounded-3xl sm:rounded-[3rem] p-6 sm:p-8 md:p-12 shadow-2xl relative overflow-hidden border border-primary/25 text-center">
            
            <div className="absolute top-6 right-6 opacity-20 animate-spin" style={{ animationDuration: '12s' }}>
              <Star size={36} className="text-primary fill-primary" />
            </div>

            <span className="text-xs text-primary font-bold uppercase tracking-wider bg-primary/20 border border-primary/45 px-4 py-1.5 rounded-full inline-block mb-6 animate-pulse">
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
                  R$ {basePriceInstallment.toFixed(2).replace('.', ',')}
                </span>
              </div>
              <span className="text-white/40 text-xs mt-2 block">
                ou R$ {basePriceCash.toFixed(2).replace('.', ',')} à vista
              </span>
            </div>

            {/* CTA Button */}
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href={checkoutUrl}
              className="w-full inline-flex items-center justify-center px-6 py-4 sm:py-5 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-2xl shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/40 border border-primary/25 transition-all text-center group transform hover:scale-102 duration-200"
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

          <SpiralSeparator />
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-16 md:py-24 bg-[#FDFBF7] border-t border-orange-50/50">
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
                className="bg-white rounded-2xl shadow-sm border border-orange-100/40 hover:border-primary/20 hover:shadow-md transition-all duration-300 overflow-hidden"
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
                      <div className="px-4 pb-4 sm:px-6 sm:pb-6 pt-1 text-gray-650 leading-relaxed text-xs sm:text-sm md:text-base border-t border-orange-50/20 mt-1">
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
    </>
  );
};

export default LP2;
