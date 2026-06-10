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
  Users, 
  Gift, 
  HelpCircle, 
  Clock, 
  Check 
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

const LP2: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeDay, setActiveDay] = useState<number | null>(0); // First day open by default
  const [showStickyHeader, setShowStickyHeader] = useState(false);

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

  const scrollToOffer = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const offerSection = document.getElementById('oferta');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const situations = [
    {
      bold: "Você sempre coloca as necessidades dos outros acima das suas:",
      desc: "Diz 'sim' quando quer dizer 'não', acumulando ressentimento e cansaço extremo por medo de desapontar."
    },
    {
      bold: "Sente uma necessidade constante de validação e aprovação:",
      desc: "Sua paz depende do humor do seu parceiro, da atenção de amigos ou do reconhecimento externo."
    },
    {
      bold: "Repete os mesmos padrões destrutivos em relacionamentos:",
      desc: "Embora saiba o que te machuca, você se vê repetindo o ciclo de carência, rejeição e dependência emocional."
    },
    {
      bold: "Carrega lealdades invisíveis e pesos que parecem não ser seus:",
      desc: "Sente que está repetindo a história triste, a escassez ou a submissão de sua mãe, pai ou linhagem familiar."
    },
    {
      bold: "Usa máscaras inconscientes para se proteger da dor:",
      desc: "Esconde sua fragilidade atrás da postura da 'boazinha', da 'forte que aguenta tudo', da 'controladora' ou da 'salvadora'."
    }
  ];

  const curriculum = [
    {
      act: "ATO 1 — Desmontar a Vida Antiga",
      lessons: [
        {
          num: 1,
          title: "O Despertar",
          subtitle: "A vida que você vive é realmente sua ou foi construída apenas para que você fosse aceita?",
          desc: "Nesta primeira aula, vamos puxar o véu das aparências. Você vai identificar a diferença entre quem você se tornou para sobreviver e quem você realmente é por baixo das expectativas sociais."
        },
        {
          num: 2,
          title: "Crenças & Piloto Automático",
          subtitle: "Por que você repete padrões de comportamento mesmo sabendo que eles vão te machucar?",
          desc: "Desvende os gatilhos subconscientes que te fazem voltar para a carência e anulação pessoal. Vamos iluminar os caminhos neurais que mantêm você presa em ciclos antigos."
        }
      ]
    },
    {
      act: "ATO 2 — Mostrar a Prisão Invisível",
      lessons: [
        {
          num: 3,
          title: "A Verdade sobre a Autoimagem",
          subtitle: "Você não vive à altura do seu potencial; você vive à altura da imagem limitada que tem de si mesma.",
          desc: "Seu cérebro sempre agirá de acordo com o que você acredita merecer. Vamos mapear como sua autoimagem foi distorcida ao longo dos anos e como começar a restabelecer a verdade sobre seu valor."
        },
        {
          num: 4,
          title: "Máscaras e Feridas da Infância",
          subtitle: "Toda máscara nasceu para proteger uma dor profunda. Qual é a sua?",
          desc: "Análise detalhada das 5 feridas emocionais (rejeição, abandono, humilhação, traição e injustiça) e como elas criaram suas máscaras de proteção: a boazinha, a forte, a controladora e a salvadora."
        }
      ]
    },
    {
      act: "ATO 3 — Construir a Nova Mulher",
      lessons: [
        {
          num: 5,
          title: "Reconexão com o Feminino Saudável",
          subtitle: "Corpo, intuição, receptividade, prazer, autocuidado e o resgate do magnetismo pessoal.",
          desc: "Aprenda a sair do estado de hipervigilância e estresse crônico (masculino distorcido) para acessar a intuição, a leveza, a vulnerabilidade segura e a força magnética do feminino curado."
        },
        {
          num: 6,
          title: "Ativação do Masculino Saudável",
          subtitle: "Ação, limites, direção, decisão e posicionamento firme. Sem isso, nada muda.",
          desc: "Compreensão sem ação é apenas frustração. Você aprenderá como usar sua energia de proteção e limite (masculino) para dizer não sem culpa, tomar decisões difíceis e se fazer respeitar nos relacionamentos."
        },
        {
          num: 7,
          title: "Manifestação da Nova Identidade",
          subtitle: "Sua nova postura perante a vida, o dinheiro e o amor começa a partir daqui.",
          desc: "Integração das polaridades interna e consolidação de uma nova postura posicionada. Roteiro prático para continuar vivendo em sua verdade, expandindo sua prosperidade e atraindo relacionamentos baseados no respeito mútuo."
        }
      ]
    }
  ];

  const testimonials = [
    {
      text: "Eu passei a vida inteira tentando agradar a todos e me sentindo culpada por simplesmente respirar. Em apenas uma semana de conteúdos da Isabella, consegui falar 'não' para demandas abusivas no meu trabalho e me senti extremamente leve. O posicionamento muda tudo!",
      name: "Caroline Rocha",
      role: "Aluna Resgate de Si",
      avatar: "CR"
    },
    {
      text: "Entender que minha necessidade de salvar o mundo era, na verdade, uma lealdade invisível à dor da minha mãe me libertou. A aula de máscaras e feridas é um divisor de águas. Recomendo para toda mulher que se sente perdida ou cansada de ser 'boazinha'.",
      name: "Rafaela Andrade",
      role: "Aluna Resgate de Si",
      avatar: "RA"
    },
    {
      text: "Eu tinha muito medo de me impor e o meu parceiro acabar me deixando. Depois de fazer os exercícios da jornada, entendi que o amor de verdade não exige a minha anulação. Hoje meu relacionamento é muito mais maduro, equilibrado e respeitoso.",
      name: "Camila Neves",
      role: "Aluna Resgate de Si",
      avatar: "CN"
    }
  ];

  const deliverables = [
    { name: "Jornada Resgate de Si (7 Aulas Profundas em Áudio e Vídeo)", value: "R$ 297,00" },
    { name: "Workbook Digital de Exercícios e Ativações Diárias", value: "R$ 97,00" },
    { name: "Aula Bônus: 'Limites Saudáveis nos Relacionamentos'", value: "R$ 147,00" },
    { name: "Comunidade Exclusiva de Alunas no Telegram para Suporte", value: "R$ 197,00" }
  ];

  return (
    <div className="font-body text-gray-800 bg-[#FFFBF9] overflow-x-hidden antialiased">
      
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
                <span className="text-[10px] sm:text-xs text-secondary font-semibold uppercase tracking-wider hidden md:inline">Resgate de Si • Jornada 7 Dias</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-4">
                <div className="hidden lg:flex items-center text-xs text-gray-500 font-medium space-x-1">
                  <ShieldCheck size={14} className="text-accent-green" />
                  <span>Garantia de 7 Dias</span>
                </div>
                <a
                  href="#oferta"
                  onClick={scrollToOffer}
                  className="bg-gradient-to-r from-primary to-secondary hover:from-primary-hover hover:to-secondary text-white text-[10px] sm:text-xs md:text-sm font-bold py-2 sm:py-2.5 px-3 sm:px-5 md:px-7 rounded-lg sm:rounded-xl shadow-glow-primary hover:shadow-lg transition-all transform hover:scale-105 duration-200 whitespace-nowrap"
                >
                  QUERO RESGATAR MEU PODER
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- HERO / ABERTURA --- */}
      <section className="relative min-h-screen flex items-center justify-center pt-28 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-[#FFFBF9] via-[#FFF8F5] to-[#FFFBF9]">
        {/* Background Gradients */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-secondary/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
          {/* Text Content */}
          <div className="flex flex-col space-y-5 sm:space-y-6 lg:col-span-7 items-center lg:items-start text-center lg:text-left">
            {/* Logo */}
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
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center space-x-2 bg-secondary/10 border border-secondary/20 px-4 py-2 rounded-full w-fit"
            >
              <Sparkles size={14} className="text-secondary animate-pulse" />
              <span className="text-secondary font-bold text-[10px] sm:text-xs tracking-wider uppercase">Jornada de Transformação Imediata</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight font-bold"
            >
              Você se perde pelo outro porque aprendeu que <span className="text-secondary italic">precisava</span>.
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-display text-xl sm:text-2xl md:text-3xl text-primary font-semibold italic"
            >
              É hora de aprender a se encontrar.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              Nos próximos 7 dias você vai voltar a confiar em si mesma, resgatar o poder pessoal que existe em você e quebrar o ciclo de dependência.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pt-2 sm:pt-4 flex flex-col space-y-4 items-center lg:items-start w-full"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                href="#oferta"
                onClick={scrollToOffer}
                className="inline-flex items-center justify-center px-6 py-4 sm:px-8 sm:py-5 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-2xl shadow-xl shadow-primary/20 text-base sm:text-lg md:text-xl group hover:shadow-2xl hover:shadow-primary/30 transition-all w-full sm:w-fit text-center"
              >
                QUERO RESGATAR MEU PODER
                <ArrowRight className="ml-2 group-hover:translate-x-1.5 transition-transform" size={18} />
              </motion.a>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-y-2 gap-x-4 sm:gap-x-6 text-xs sm:text-sm text-gray-500 font-medium">
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

          {/* Presentation Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end mt-4 lg:mt-0"
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[420px] aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
              <img
                src={IMAGES.hero}
                alt="Isabella Franklin"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
              className="absolute -bottom-6 left-4 right-4 sm:left-auto sm:right-auto sm:-left-4 md:-left-8 bg-white p-4 sm:p-5 rounded-2xl shadow-2xl flex items-center space-x-3.5 max-w-[90%] sm:max-w-[280px] mx-auto sm:mx-0 border border-orange-50"
            >
              <div className="bg-secondary/15 p-2.5 sm:p-3 rounded-xl flex-shrink-0">
                <Heart className="text-secondary fill-secondary" size={20} />
              </div>
              <div>
                <p className="font-bold text-gray-900 leading-tight text-xs sm:text-sm">Quebre o Ciclo</p>
                <p className="text-[10px] sm:text-xs text-gray-500 mt-0.5 leading-relaxed">Rompa com o trauma transgeracional e resgate seu espaço.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- PARA QUEM É --- */}
      <section className="py-16 md:py-28 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-xs text-secondary font-bold uppercase tracking-widest bg-secondary/10 px-3.5 py-1.5 rounded-full">Identificação</span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl text-gray-900 font-bold mt-4 leading-tight">
              Isso soa familiar <span className="text-primary italic">para você</span>?
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-5"></div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {situations.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left space-y-3 sm:space-y-0 sm:space-x-4 p-5 sm:p-6 bg-[#FFFBF9] rounded-2xl border border-orange-100 hover:border-primary/20 hover:shadow-md transition-all duration-300 group"
              >
                <div className="bg-secondary/10 p-2 sm:p-2.5 rounded-xl flex-shrink-0 group-hover:bg-secondary/20 transition-colors mx-auto sm:mx-0">
                  <Eye size={18} className="text-secondary sm:w-5 sm:h-5" />
                </div>
                <div className="flex flex-col items-center sm:items-start">
                  <h3 className="font-bold text-gray-900 text-base sm:text-lg leading-snug">{item.bold}</h3>
                  <p className="text-gray-600 mt-1 sm:mt-1.5 leading-relaxed text-xs sm:text-sm md:text-base">{item.desc}</p>
                </div>
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
              "Se você se reconheceu em alguma dessas situações, saiba: você não está quebrada. Você apenas foi programada para agir assim. E você está no lugar certo."
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- NARRATIVA DO PROBLEMA (A RAIZ) --- */}
      <section className="py-16 md:py-28 bg-[#FFFBF9] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-48 h-96 bg-primary/5 rounded-r-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-48 h-96 bg-secondary/5 rounded-l-full blur-3xl pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-4 sm:space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left">
              <span className="text-xs text-primary font-bold uppercase tracking-widest bg-primary/10 px-3.5 py-1.5 rounded-full w-fit">A Raiz Oculta</span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-gray-900 font-bold leading-tight">
                A culpa não é sua. É uma <span className="text-secondary italic">programação invisível</span>.
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mt-3"></div>
              
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg font-light">
                Você aprendeu desde a infância que, para ser aceita e amada, precisava ser a "boazinha", a "silenciosa", ou a "forte que resolve tudo". O amor tornou-se condicionado à sua utilidade ou anulação.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg font-light">
                Isso não é uma fraqueza de caráter. Isso se chama <strong className="text-gray-900 font-semibold">Trauma Transgeracional</strong>. São padrões emocionais, medos e feridas repetidos de mãe para filha, de geração em geração, operando no piloto automático do seu sistema familiar.
              </p>
            </div>

            <div className="lg:col-span-6 bg-white p-5 sm:p-8 md:p-10 rounded-3xl sm:rounded-[2.5rem] shadow-xl border border-orange-50 space-y-5 sm:space-y-6">
              <h3 className="font-display text-xl sm:text-2xl text-gray-900 font-bold mb-3 sm:mb-4">Você foi programada, mas pode se libertar:</h3>
              
              <div className="space-y-4">
                {[
                  { title: "Não é traição com a família", desc: "Romper as lealdades sistêmicas invisíveis que te fazem sofrer não é desonrar seus pais, é curar a linhagem." },
                  { title: "A boazinha é uma máscara", desc: "A agradadora implacável é apenas a sua criança assustada tentando garantir que não será abandonada." },
                  { title: "Sua história pode ser reescrita", desc: "Uma programação antiga e repetitiva pode ser desativada e substituída por uma identidade de posicionamento, amor próprio e limites." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="bg-[#7F9B52]/10 p-1.5 rounded-lg mt-1 flex-shrink-0">
                      <Check className="text-accent-green" size={14} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm sm:text-base">{item.title}</h4>
                      <p className="text-gray-500 text-xs sm:text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 sm:pt-4">
                <a
                  href="#oferta"
                  onClick={scrollToOffer}
                  className="w-full inline-flex items-center justify-center px-4 sm:px-6 py-3.5 sm:py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-xl shadow-md text-sm sm:text-base hover:shadow-lg transition-all text-center"
                >
                  QUERO REESCREVER MEUS PADRÕES
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- A JORNADA (AS 7 AULAS EM 3 ATOS) --- */}
      <section className="py-20 md:py-28 bg-[#1A0F0D] text-white relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-[120px] opacity-[0.07] pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-[120px] opacity-[0.07] pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16 md:mb-20">
            <span className="text-xs text-primary font-bold uppercase tracking-widest bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">O Método</span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold mt-4 leading-tight">
              A Jornada de 7 Dias para <span className="text-primary italic">Resgatar Seu Poder</span>
            </h2>
            <p className="mt-4 text-white/60 max-w-2xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed">
              Assista ou escute a uma aula rápida e execute uma ativação diária prática estruturada em 3 atos para transformar sua postura de dentro para fora.
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6"></div>
          </div>

          <div className="space-y-12">
            {curriculum.map((actGroup, actIdx) => (
              <div key={actIdx} className="space-y-6">
                {/* Act Title */}
                <h3 className="font-display text-lg sm:text-xl md:text-2xl text-primary font-bold flex items-center justify-center md:justify-start space-x-3 border-b border-white/10 pb-3">
                  <span className="bg-primary/25 text-primary text-[10px] sm:text-xs px-2.5 py-1 rounded-md uppercase font-semibold">Fase {actIdx + 1}</span>
                  <span>{actGroup.act}</span>
                </h3>

                {/* Lessons List */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {actGroup.lessons.map((lesson, lessonIdx) => (
                    <motion.div
                      key={lessonIdx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: lessonIdx * 0.1 }}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl hover:bg-white/10 transition-colors flex flex-col justify-between items-center md:items-start text-center md:text-left"
                    >
                      <div className="flex flex-col items-center md:items-start w-full">
                        <div className="flex items-center justify-between w-full mb-4">
                          <span className="text-xs font-bold uppercase tracking-widest text-[#7F9B52] bg-[#7F9B52]/10 px-3 py-1 rounded-full">
                            Dia 0{lesson.num}
                          </span>
                          <Clock size={15} className="text-white/30" />
                        </div>
                        <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2 text-white">{lesson.title}</h4>
                        <p className="text-white/80 text-xs italic mb-4 font-light leading-relaxed">
                          "{lesson.subtitle}"
                        </p>
                        <p className="text-white/50 text-xs sm:text-sm leading-relaxed font-light">
                          {lesson.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 sm:mt-16 flex justify-center w-full px-4 sm:px-0">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#oferta"
              onClick={scrollToOffer}
              className="w-full sm:w-auto text-center inline-flex items-center justify-center px-6 sm:px-10 py-4 sm:py-5 bg-white text-secondary font-bold text-sm sm:text-base md:text-lg rounded-2xl shadow-glow hover:bg-gray-100 transition-colors"
            >
              INICIAR MINHA JORNADA DE 7 DIAS
            </motion.a>
          </div>
        </div>
      </section>

      {/* --- SOBRE ISABELLA FRANKLIN --- */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative aspect-[3/4] w-full max-w-[360px] rounded-full overflow-hidden border-8 border-secondary/5 shadow-2xl">
              <img 
                src={IMAGES.about} 
                alt="Isabella Franklin" 
                className="w-full h-full object-cover object-center scale-105 hover:scale-100 transition-transform duration-700" 
              />
            </div>
            {/* Soft decorative blur */}
            <div className="absolute top-10 -left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl -z-10"></div>
            <div className="absolute bottom-10 -right-10 w-32 h-32 bg-secondary/20 rounded-full blur-xl -z-10"></div>
          </div>

          <div className="lg:col-span-7 space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left">
            <span className="text-xs text-secondary font-bold uppercase tracking-widest bg-secondary/10 px-3.5 py-1.5 rounded-full w-fit">Sua Mentora</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              A mulher posicionada que você quer ser começou na minha própria <span className="text-secondary italic">ruptura</span>.
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mt-3"></div>

            <div className="space-y-4 text-gray-600 leading-relaxed text-base md:text-lg font-light">
              <p>
                Eu já estive exatamente no mesmo lugar de anulação emocional que você se encontra hoje. Fui a pessoa que dizia 'sim' para todos, que guardava mágoas imensas e tentava desesperadamente ser perfeita para não ser deixada de lado.
              </p>
              <p>
                A dor de viver sob a máscara da 'boazinha estressada' tornou-se insustentável. Eu precisei mergulhar fundo na Terapia Sistêmica, na cura do feminino e na compreensão dos traumas herdados dos meus antepassados para conseguir me resgatar.
              </p>
              <p className="font-bold text-gray-800 italic">
                Hoje, após quase 10 anos de jornada de autodescoberta e facilitação de cura, guio mulheres a romperem com as lealdades invisíveis do passado para que se tornem magnéticas, seguras e bem-sucedidas em suas vidas e relações.
              </p>
            </div>

            <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-5 w-full justify-center lg:justify-start">
              <div className="flex-shrink-0">
                <img src={IMAGES.signature} alt="Assinatura Isabella Franklin" className="h-10 opacity-60 md:h-12" />
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <p className="text-sm font-bold text-gray-900 uppercase tracking-wide">Isabella Franklin</p>
                <p className="text-xs text-gray-500 font-medium">Terapeuta Sistêmica e Mentora de Mulheres</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- PROVA SOCIAL / DEPOIMENTOS --- */}
      <section className="py-16 md:py-28 bg-[#FFFBF9] relative overflow-hidden border-t border-orange-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-xs text-accent-green font-bold uppercase tracking-widest bg-[#7F9B52]/10 px-3.5 py-1.5 rounded-full">Histórias de Sucesso</span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl text-gray-900 font-bold mt-4 leading-tight">
              Os resultados de quem escolheu <span className="text-secondary under">se priorizar</span>:
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-5"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                className="bg-white p-5 sm:p-8 rounded-3xl shadow-lg border border-orange-50/50 flex flex-col justify-between text-center md:text-left items-center md:items-start"
              >
                <div className="flex flex-col items-center md:items-start">
                  <div className="flex space-x-1 mb-5 justify-center md:justify-start">
                    {[1, 2, 3, 4, 5].map(s => (
                      <Star key={s} size={15} className="fill-[#E97A01] text-[#E97A01]" />
                    ))}
                  </div>
                  <p className="italic text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed mb-6 font-light">
                    "{t.text}"
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-3.5 pt-4 border-t border-gray-50 w-full justify-center md:justify-start">
                  <div className="bg-secondary/15 text-secondary w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0">
                    {t.avatar}
                  </div>
                  <div className="flex flex-col items-center sm:items-start">
                    <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-xs text-gray-400 font-medium">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- O QUE VOCÊ VAI RECEBER (ÂNCORA DE VALOR) --- */}
      <section className="py-16 md:py-20 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-xs text-secondary font-bold uppercase tracking-widest bg-secondary/10 px-3.5 py-1.5 rounded-full">Conteúdo Completo</span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl text-gray-900 font-bold mt-4 leading-tight">
              O que você recebe ao <span className="text-primary italic">garantir seu acesso</span>:
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
                    <span className="text-gray-800 font-medium text-xs sm:text-sm md:text-base leading-snug">{item.name}</span>
                  </div>
                  <span className="text-gray-400 font-light text-xs sm:text-sm line-through sm:ml-4 flex-shrink-0">{item.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-orange-100 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left">
                <p className="text-xs uppercase tracking-widest text-gray-400 font-bold">Valor Total Somado:</p>
                <p className="text-lg sm:text-xl font-bold text-gray-500 line-through">R$ 738,00</p>
              </div>
              <div className="bg-secondary/10 px-4 sm:px-5 py-3 rounded-2xl border border-secondary/20 text-center">
                <span className="text-secondary font-bold text-xs sm:text-sm md:text-base">
                  Economia Imediata de R$ 641,00 hoje!
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- OFERTA E PREÇO --- */}
      <section id="oferta" className="py-16 md:py-20 bg-gradient-to-b from-white to-[#FFFBF9] relative scroll-mt-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-br from-[#1A0F0D] to-[#2D1B18] text-white rounded-3xl sm:rounded-[3rem] p-5 sm:p-8 md:p-12 shadow-2xl relative overflow-hidden border border-white/10 text-center">
            
            {/* Absolute decorative star */}
            <div className="absolute top-6 right-6 opacity-20 animate-spin" style={{ animationDuration: '8s' }}>
              <Star size={36} className="text-primary fill-primary" />
            </div>

            <span className="text-xs text-primary font-bold uppercase tracking-wider bg-primary/25 border border-primary/45 px-4 py-1.5 rounded-full inline-block mb-6">
              Oferta Especial de Lançamento
            </span>

            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Jornada Resgate de Si
            </h3>
            <p className="text-white/60 text-xs sm:text-sm md:text-base max-w-lg mx-auto mb-8 font-light leading-relaxed">
              O primeiro passo definitivo para quebrar o ciclo de carência transgeracional e começar a se posicionar com segurança e leveza.
            </p>

            {/* Price Box */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl py-6 px-4 max-w-sm mx-auto mb-8 border border-white/5">
              <span className="text-white/50 text-xs uppercase tracking-widest font-semibold block">Por Apenas</span>
              <div className="flex items-center justify-center mt-2">
                <span className="text-base sm:text-xl md:text-2xl font-bold text-primary mr-1">12x de</span>
                <span className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white">R$ 9,70</span>
              </div>
              <span className="text-white/40 text-[10px] sm:text-xs mt-2 block">ou R$ 97,00 à vista</span>
            </div>

            {/* CTA Button */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href="https://wa.me/5531990622003"
              className="w-full inline-flex items-center justify-center px-4 sm:px-8 py-4 sm:py-5 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-2xl shadow-xl shadow-primary/25 text-sm sm:text-base md:text-lg group hover:shadow-2xl transition-all text-center"
            >
              COMEÇAR MINHA JORNADA AGORA
              <ArrowRight className="ml-2 sm:ml-2.5 group-hover:translate-x-1.5 transition-transform" size={16} />
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
      <section className="py-16 md:py-28 bg-[#FFFBF9] border-t border-orange-50/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-xs text-secondary font-bold uppercase tracking-widest bg-secondary/10 px-3.5 py-1.5 rounded-full">FAQ</span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl text-gray-900 font-bold mt-4 leading-tight">
              Perguntas Frequentes
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-5"></div>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Para quem é este produto?",
                a: "A jornada foi desenhada especificamente para mulheres que se identificam como 'agradadoras': aquelas que vivem para satisfazer as necessidades alheias, têm dificuldade em dizer não, sofrem de codependência ou carência emocional, e percebem que repetem dinâmicas familiares difíceis."
              },
              {
                q: "Preciso ter experiência prévia com desenvolvimento pessoal?",
                a: "Não. As aulas são estruturadas em uma linguagem simples, empática e acolhedora, explicando os conceitos sistêmicos desde o básico até práticas de ativação imediatas para aplicar na rotina."
              },
              {
                q: "Como vou acessar o conteúdo?",
                a: "Assim que sua inscrição for confirmada, você receberá um e-mail com todas as instruções e links para acessar nossa plataforma exclusiva de membros, onde as aulas e o workbook digital já estão disponíveis."
              },
              {
                q: "Quanto tempo vou precisar dedicar por dia?",
                a: "Apenas de 15 a 20 minutos por dia. As aulas são gravadas em formato direto ao ponto para que você consiga consumir e praticar a ativação diária sem sobrecarregar sua rotina."
              },
              {
                q: "E se eu sentir que não é para mim? Tem garantia?",
                a: "Sim, absolutamente. Você tem uma garantia incondicional de 7 dias. Se você não gostar do conteúdo, da plataforma ou da minha voz, basta entrar em contato e estornaremos cada centavo."
              },
              {
                q: "Qual a diferença deste produto para a mentoria ou o portal?",
                a: "A jornada Resgate de Si de 7 dias é um produto de entrada (low-ticket) focado em dar clareza rápida sobre as feridas infantis, máscaras e dinâmicas sistêmicas. O portal e a mentoria individual são ecossistemas mais profundos, com acompanhamento personalizado e longo prazo."
              }
            ].map((faq, i) => (
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
                      <div className="px-4 pb-4 sm:px-6 sm:pb-6 pt-1 text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base border-t border-orange-50 font-light">
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

      {/* --- CTA FINAL --- */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-[#1A0F0D] to-[#221310] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="w-96 h-96 bg-primary rounded-full blur-[100px] absolute -bottom-10 -left-10"></div>
          <div className="w-96 h-96 bg-secondary rounded-full blur-[100px] absolute -top-10 -right-10"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-6 sm:space-y-8">
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
            A mulher que você quer ser está esperando você dar o primeiro passo.
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
            Você passou anos cuidando das necessidades do mundo inteiro. Chegou o momento de olhar de volta para si e recuperar a sua postura e o seu valor.
          </p>

          <div className="pt-4 flex flex-col items-center justify-center w-full px-4 sm:px-0">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/5531990622003"
              className="w-full sm:w-auto text-center inline-flex items-center justify-center px-6 sm:px-12 py-4 sm:py-6 bg-white text-secondary font-bold text-base sm:text-xl rounded-2xl shadow-2xl hover:bg-gray-50 transition-colors"
            >
              COMEÇAR MINHA JORNADA AGORA
              <ArrowRight className="ml-3" />
            </motion.a>
            <p className="mt-4 text-[10px] sm:text-xs text-white/40 font-light">
              Pagamento seguro • Acesso imediato • Garantia incondicional de 7 dias
            </p>
          </div>

          <div className="pt-8 text-white/60 italic font-light text-xs sm:text-sm max-w-lg mx-auto border-t border-white/5">
            "Não tenha medo de perder quem só te amava quando você se desrespeitava para agradar. O resgate de si é o único caminho para a prosperidade e amor real."
            <span className="block mt-2 font-bold text-white not-italic text-xs uppercase tracking-wider">— Isabella Franklin</span>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-10 bg-[#150B0A] border-t border-white/5 text-center text-white/30 text-xs">
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
