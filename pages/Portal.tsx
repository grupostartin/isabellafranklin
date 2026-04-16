import React from 'react';
import { Star, CheckCircle, ArrowRight, ShieldCheck, Heart, Sparkles, BookOpen, Users, Video, Clock, CreditCard, MessageCircle, HelpCircle, Quote, Eye, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { IMAGES } from '../constants';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

interface Testimonial {
    text: string;
    author: string;
    role: string;
    avatar?: string;
    images?: string[];
}

const Portal: React.FC = () => {
    const testimonials: Testimonial[] = [
        {
            text: "Gratidão por tanto. Sou prova de que o seu propósito esta sendo vivido e cumprido nessa terra.",
            author: "Ana Carolina Perondi",
            role: "Portal das Bellas",
            avatar: "A",
            images: ["/assets/images/WhatsApp Image 2026-02-20 at 14.40.05.jpeg"]
        },
        {
            text: "Isa, Bella querida ✨ Esses ensinamentos e mudanças têm sido milagres na minha vida. Gratidão por tudo mesmo!",
            author: "Maiara Parisoto",
            role: "Portal das Bellas",
            avatar: "M",
            images: [
                "/assets/images/WhatsApp Image 2026-02-20 at 14.42.37.jpeg",
                "/assets/images/WhatsApp Image 2026-02-20 at 14.49.41.jpeg"
            ]
        },
        {
            text: "Graças a você eu mudei de dentro pra fora...",
            author: "Caroline Martines",
            role: "Mentoria Individual",
            avatar: "C",
            images: ["/assets/testimonials/caroline.jpg"]
        },
        {
            text: "Michelle, você é incrível! Sua jornada é inspiradora e seu crescimento me emociona. Gratidão por confiar nesse processo.",
            author: "Michelle",
            role: "Portal das Bellas",
            avatar: "M",
            images: [
                "/assets/testimonials/michelle-2.jpg",
                "/assets/testimonials/michelle-1.jpg"
            ]
        },
        {
            text: "Priscila, você chegou tão longe! Sua transformação é real e visível. Que honra acompanhar sua jornada.",
            author: "Priscila",
            role: "Portal das Bellas",
            avatar: "P",
            images: ["/assets/testimonials/priscila.jpg"]
        }
    ];

    const [selectedTestimonial, setSelectedTestimonial] = React.useState<Testimonial | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

    // Reset image index when modal opens
    React.useEffect(() => {
        if (selectedTestimonial) setCurrentImageIndex(0);
    }, [selectedTestimonial]);

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedTestimonial?.images && currentImageIndex < selectedTestimonial.images.length - 1) {
            setCurrentImageIndex(prev => prev + 1);
        }
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (currentImageIndex > 0) {
            setCurrentImageIndex(prev => prev - 1);
        }
    };

    return (
        <div className="font-body text-gray-800 bg-[#FFFBF9] overflow-x-hidden">


            {/* --- HERO SECTION --- */}
            <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20 px-4 overflow-hidden">
                {/* Background Video (Desktop & Mobile) */}
                <div className="absolute inset-0 z-0">
                    <video
                        src={IMAGES.portalBackgroundVideo}
                        className="w-full h-full object-cover blur-sm scale-110"
                        autoPlay
                        muted
                        loop
                        playsInline
                    />
                    <div className="absolute inset-0 bg-black/60" />
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="flex flex-col space-y-8 text-center lg:text-left items-center lg:items-start"
                    >
                        <motion.div variants={fadeInUp} className="inline-flex items-center space-x-2 bg-secondary/10 lg:bg-secondary/10 px-4 py-2 rounded-full w-fit backdrop-blur-sm">
                            <Sparkles size={16} className="text-secondary" />
                            <span className="text-secondary font-bold text-xs tracking-widest uppercase">Um espaço vivo de transformação</span>
                        </motion.div>

                        <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-7xl text-white leading-[1.1]">
                            PORTAL DAS <br />
                            <span className="text-secondary italic">BELLAS</span>
                        </motion.h1>

                        <motion.div variants={fadeInUp} className="space-y-4">
                            <p className="text-xl md:text-2xl font-bold text-white/90 leading-tight transition-colors">
                                Saia da dependência emocional e se transforme na mulher confiante que atrai o sucesso que merece.
                            </p>
                            <p className="text-lg text-white/70 leading-relaxed transition-colors">
                                Relacionamentos duradouros, prosperidade financeira e uma relação linda com Deus te esperam quando você assumir o seu lugar.
                            </p>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="pt-4 flex flex-col space-y-4 w-full sm:w-auto">
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="#checkout"
                                className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-2xl shadow-xl shadow-secondary/20 text-xl group text-center"
                            >
                                QUERO ME TRANSFORMAR
                                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </motion.a>
                            <div className="flex items-center justify-center lg:justify-start space-x-6">
                                <span className="flex items-center text-xs text-white/50">
                                    <ShieldCheck size={14} className="mr-1 text-accent-green" /> 7 dias de garantia
                                </span>
                                <span className="flex items-center text-xs text-white/50">
                                    <Star size={14} className="mr-1 text-yellow-400 fill-yellow-400" /> +500 vidas transformadas
                                </span>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="hidden lg:flex flex-col items-center justify-center space-y-4"
                    >
                        <div className="bg-white/5 backdrop-blur-md px-8 py-6 rounded-3xl border border-white/10 flex flex-col items-center text-center">
                            <div className="text-secondary mb-3">
                                <Sparkles size={32} className="animate-pulse" />
                            </div>
                            <h3 className="text-xl font-display text-white font-bold italic">Ambiente Seleto</h3>
                            <p className="text-white/40 text-xs uppercase tracking-widest mt-1">Exclusividade Garantida</p>

                            <div className="mt-6 flex items-center -space-x-2">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white/10 bg-white/5 overflow-hidden flex items-center justify-center text-[8px] text-white/40">
                                        {String.fromCharCode(64 + i)}
                                    </div>
                                ))}
                                <div className="px-3 h-8 rounded-full border-2 border-white/10 bg-secondary/20 flex items-center justify-center text-[10px] font-bold text-white ml-2">
                                    +500 BELLAS
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- PAIN / IDENTITY SECTION --- */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h2 className="font-display text-3xl md:text-5xl text-gray-900 font-bold mb-8 leading-tight">
                            Alguém te machucou, <br />
                            <span className="text-secondary italic">mas a insegurança não precisa ficar com você…</span>
                        </h2>

                        <div className="space-y-6 text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto italic">
                            <p>
                                Se colocando por último, fazendo tudo pelos outros, tentando dar conta de tudo sozinha… E mesmo assim, sentindo que nunca é suficiente. Nunca é reconhecida. Você também sente isso?
                            </p>
                            <p className="font-bold text-gray-900 not-italic">
                                Porque eu senti. E PRECISEI ATRAVESSAR O PORTAL PRA VOLTAR PRA MIM
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-[#D1523E] border border-secondary/10 rounded-[2.5rem] p-8 md:p-12 shadow-sm"
                    >
                        <p className="text-lg text-white mb-8 leading-relaxed">
                            Hoje posso te provar que é possível viver uma vida onde você tem um relacionamento incrível e se sente cada vez mais feliz e realizada com a vida e com quem é. Quero te ajudar a voltar pra você assim como elas voltaram:
                        </p>

                        {/* Depoimentos / Testimonials Space */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            {testimonials.map((t, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-white rounded-[2rem] shadow-md border border-secondary/10 overflow-hidden flex flex-col hover:shadow-xl transition-all group cursor-pointer"
                                    onClick={() => setSelectedTestimonial(t)}
                                >
                                    <div className="relative aspect-square bg-gray-50 overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent z-[1]" />
                                        {t.images && t.images.length > 0 && (
                                            <img
                                                src={t.images[0]}
                                                alt={t.author}
                                                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                            />
                                        )}
                                        <div className="absolute top-4 left-4 z-[2] bg-white/90 backdrop-blur-sm p-2 rounded-xl shadow-sm border border-secondary/10">
                                            <Quote size={14} className="text-[#D1523E]" />
                                        </div>
                                    </div>

                                    <div className="p-6 bg-white shrink-0">
                                        <div className="flex text-yellow-500 mb-2">
                                            {[...Array(5)].map((_, starIdx) => (
                                                <Star key={starIdx} size={12} fill="currentColor" />
                                            ))}
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <span className="block text-sm font-bold text-gray-900">{t.author}</span>
                                            </div>
                                            <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                                                <Eye size={16} />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <p className="text-2xl font-display text-white font-bold">
                            No final do ano, quero receber uma mensagem sua, assim como recebi delas!
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* --- BEFORE / AFTER SECTION --- */}
            <section className="py-24 bg-[#1A0F0D] text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-[120px] translate-x-1/2 translate-y-1/2"></div>
                </div>

                <div className="max-w-6xl mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-4xl md:text-5xl mb-4">TÁ NA HORA DE VOCÊ <br /><span className="text-primary italic">VOLTAR PRA VOCÊ</span></h2>
                        <p className="text-white/60 text-lg">A transformação que acontece quando você decide atravessar o Portal:</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* BEFORE */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10"
                        >
                            <h3 className="text-2xl font-display font-bold mb-8 flex items-center text-white/40 uppercase tracking-widest text-sm">
                                ANTES DO PORTAL DAS BELLAS
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    "Tem dificuldade de impor limites",
                                    "Vive com dependência emocional e medo do abandono",
                                    "Não consegue se posicionar",
                                    "Vive insegura, ansiosa e estressada",
                                    "Passa tempo demais no celular e procrastina",
                                    "Tem medo de julgamento e dificuldade em dizer não",
                                    "Explode de repente e depois sente culpa",
                                    "Repete padrões e atrai relacionamentos imaturos",
                                    "Enfrenta dificuldades financeiras"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start space-x-3 text-white/50">
                                        <div className="bg-red-500/20 text-red-400 p-0.5 rounded mt-1">
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path></svg>
                                        </div>
                                        <span className="text-base">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* AFTER */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-primary/10 border border-primary/20 rounded-3xl p-8 md:p-10 relative overflow-hidden group hover:border-primary/40 transition-colors"
                        >
                            <div className="absolute top-4 right-4 text-primary opacity-20 group-hover:rotate-12 transition-transform">
                                <Sparkles size={120} />
                            </div>
                            <h3 className="text-2xl font-display font-bold mb-8 flex items-center text-primary uppercase tracking-widest text-sm">
                                DEPOIS DO PORTAL DAS BELLAS
                            </h3>
                            <ul className="space-y-4 relative z-10">
                                {[
                                    "Impõe limites com segurança e sem culpa",
                                    "Se relaciona com maturidade e autonomia emocional",
                                    "Sabe se posicionar na vida e nos relacionamentos",
                                    "Se sente segura de si e autoconfiante",
                                    "Age com foco e disciplina",
                                    "Se expressa sem medo de julgamento e realiza seus sonhos",
                                    "É equilibrada emocionalmente",
                                    "Quebra ciclos de repetição e tem relacionamentos incríveis",
                                    "Quebra padrões e se torna cada vez mais próspera"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start space-x-3 text-white">
                                        <div className="bg-primary text-white p-0.5 rounded mt-1">
                                            <CheckCircle size={12} strokeWidth={3} />
                                        </div>
                                        <span className="text-base font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- TARGET AUDIENCE --- */}
            <section className="py-16 bg-white relative">
                <div className="max-w-6xl mx-auto px-4 relative z-10">
                    <div className="text-center mb-12">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="font-display text-4xl font-bold text-gray-900 mb-4"
                        >
                            Pra quem é o <span className="text-primary">Portal?</span>
                        </motion.h2>
                        <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                icon: <ShieldCheck size={20} />,
                                title: "Limites e Posicionamento",
                                text: "Para mulheres que têm dificuldade de dizer não e se anulam pelos outros."
                            },
                            {
                                icon: <Heart size={20} />,
                                title: "Dependência Emocional",
                                text: "Para quem deseja conquistar autonomia emocional e felicidade real no amor."
                            },
                            {
                                icon: <MessageCircle size={20} />,
                                title: "Medo do Julgamento",
                                text: "Para quem trava na hora de se expressar por medo do que vão pensar."
                            },
                            {
                                icon: <Sparkles size={20} />,
                                title: "Insegurança",
                                text: "Para quem quer resgatar a mulher confiante que existe por dentro."
                            },
                            {
                                icon: <CreditCard size={20} />,
                                title: "Vida Financeira",
                                text: "Para mulheres que querem desbloquear padrões que impedem a abundância."
                            },
                            {
                                icon: <Clock size={20} />,
                                title: "Foco e Equilíbrio",
                                text: "Para quem vive ansiosa e quer ter controle sobre sua rotina e emoções."
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                whileHover={{ y: -5 }}
                                className="group relative bg-[#D1523E] p-6 rounded-[1.5rem] border border-white/10 hover:shadow-2xl transition-all duration-300 shadow-xl"
                            >
                                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-white mb-4 shadow-sm">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-white/90 transition-colors">{item.title}</h3>
                                <p className="text-white/80 text-sm leading-relaxed">{item.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- FEATURES SECTION --- */}
            <section className="py-16 bg-[#1A0F0D] relative overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

                <div className="max-w-6xl mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between mb-12 gap-6 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="max-w-xl"
                        >
                            <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                                NA PRÁTICA, <br />
                                <span className="text-primary uppercase tracking-tight">COMO FUNCIONA O PORTAL?</span>
                            </h2>
                            <p className="text-base text-white/60 leading-relaxed">
                                O Portal das Bellas é um espaço vivo que está sempre sendo atualizado. Veja tudo o que você terá acesso imediato:
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-primary px-6 py-3 rounded-xl flex items-center space-x-3 shrink-0 shadow-lg"
                        >
                            <Clock className="text-white w-4 h-4" />
                            <span className="text-white font-bold text-xs uppercase tracking-[0.2em]">Acesso Imediato</span>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                icon: <Users size={24} />,
                                title: "Meditações guiadas",
                                detail: "Ao vivo e gravadas. Para você ter equilíbrio emocional e ser próspera no caos."
                            },
                            {
                                icon: <Video size={24} />,
                                title: "Aulas ao vivo",
                                detail: "Aprofundamento quinzenal sobre relações e dinâmicas sistêmicas para um amor leve."
                            },
                            {
                                icon: <BookOpen size={24} />,
                                title: "Clube do Livro",
                                detail: "Leituras selecionadas para desenvolver sua mentalidade e prosperidade financeira."
                            },
                            {
                                icon: <Sparkles size={24} />,
                                title: "Aulas gravadas",
                                detail: "Entenda seus traumas e transforme-se na sua versão magnética e autoconfiante."
                            },
                            {
                                icon: <ArrowRight size={24} />,
                                title: "Desafios semanais",
                                detail: "Aplicações práticas para resultados visíveis em finanças e relacionamentos."
                            },
                            {
                                icon: <Heart size={24} />,
                                title: "Alinhamento energético",
                                detail: "Saia do modo sobrevivência e sinta-se disposta para as conquistas do dia."
                            }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                className="group relative bg-white/5 backdrop-blur-sm p-6 rounded-[1.5rem] border border-white/10 hover:border-primary/40 transition-all duration-300"
                            >
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                                <p className="text-white/50 text-sm leading-relaxed">{feature.detail}</p>
                            </motion.div>
                        ))}

                        {/* Special Features Overlay Cards */}
                        <div className="md:col-span-2 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
                            <motion.div
                                whileHover={{ scale: 1.01 }}
                                className="bg-gradient-to-br from-[#241512] to-[#1A0F0D] p-6 rounded-[1.5rem] flex items-center justify-between group relative border border-white/5 hover:border-secondary/30 transition-all"
                            >
                                <div className="z-10">
                                    <h3 className="text-lg font-bold text-white mb-1">Convidados especiais</h3>
                                    <p className="text-white/40 text-sm">Visões que enriquecem a travessia.</p>
                                </div>
                                <div className="z-10 w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary">
                                    <Star size={24} fill="currentColor" />
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.01 }}
                                className="bg-gradient-to-br from-primary/20 to-primary/5 p-6 rounded-[1.5rem] flex items-center justify-between group relative border border-primary/20 hover:border-primary transition-all"
                            >
                                <div className="z-10">
                                    <h3 className="text-lg font-bold text-white mb-1">Descontos exclusivos</h3>
                                    <p className="text-white/40 text-sm">Em mentorias, cursos e experiências.</p>
                                </div>
                                <div className="z-10 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                                    <CreditCard size={24} />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>



            {/* --- CHECKOUT / PRICING SECTION --- */}
            <section id="checkout" className="py-24 bg-[#FFFBF9] relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 40 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100 -translate-y-10"
                    >
                        <div className="p-8 md:p-12 text-center">
                            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Atravesse o portal para sua nova vida</h2>
                            <p className="text-gray-500 mb-10">Depois que você atravessar o portal, sua vida nunca será a mesma.</p>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                                {[
                                    { icon: <Video size={16} />, text: "Aulas ao vivo" },
                                    { icon: <HelpCircle size={16} />, text: "Suporte individual" },
                                    { icon: <Sparkles size={16} />, text: "Módulos gravados" },
                                    { icon: <Users size={16} />, text: "Meditações ao vivo" },
                                    { icon: <BookOpen size={16} />, text: "Clube do Livro" },
                                    { icon: <MessageCircle size={16} />, text: "Comunidade" },
                                    { icon: <Star size={16} />, text: "Ambiência" },
                                    { icon: <ArrowRight size={16} />, text: "Desafios" }
                                ].map((item, i) => (
                                    <div key={i} className="flex flex-col items-center p-4 bg-secondary/5 rounded-2xl border border-secondary/5">
                                        <div className="text-secondary mb-2">{item.icon}</div>
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-600">{item.text}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col items-center bg-gray-50/50 p-10 rounded-[2.5rem] border border-gray-100">
                                <span className="text-gray-400 line-through text-2xl mb-2 font-light italic">De: R$ 997,00</span>
                                <div className="flex flex-col items-center mb-2">
                                    <div className="flex items-baseline space-x-3">
                                        <span className="text-gray-900 font-bold text-xl uppercase tracking-tight">12x de</span>
                                        <span className="text-6xl md:text-8xl font-display font-bold text-secondary tracking-tighter">R$ 51,40</span>
                                    </div>
                                    <span className="text-gray-500 text-lg font-medium mt-3">Ou R$ 497,00 <span className="underline">à vista</span></span>
                                </div>

                                <motion.a
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    href="https://pay.kiwify.com.br/E6pfuZi"
                                    className="w-full max-w-sm py-6 bg-secondary text-white font-bold text-2xl rounded-2xl shadow-xl shadow-secondary/30 flex items-center justify-center group"
                                >
                                    QUERO ATRAVESSAR O PORTAL
                                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </motion.a>
                                <p className="mt-6 text-xs text-gray-400 flex items-center">
                                    <ShieldCheck size={14} className="mr-1" /> Transação 100% segura • Acesso vitalício aos desafios do período
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- MENTOR SECTION --- */}
            <section className="py-24 bg-white relative">
                <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-5 relative">
                        <div className="aspect-[3/4] rounded-[3rem] overflow-hidden border-8 border-secondary/5 shadow-2xl">
                            <img src={IMAGES.about} alt="Isabella Franklin" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-secondary/10 flex items-center space-x-4">
                            <img src={IMAGES.signature} alt="Firma" className="h-10 opacity-60" />
                        </div>
                    </div>

                    <div className="lg:col-span-7">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                            Quem será sua <br /><span className="text-secondary italic">mentora?</span>
                        </h2>

                        <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                            <p>Meu nome é <strong>Isabella Franklin</strong> e minha jornada não foi nada linear:</p>
                            <ul className="space-y-4">
                                {[
                                    "Passei por muitos problemas financeiros, ganhava R$ 440,00 pra ser humilhada no trabalho",
                                    "Fiquei mais de 8 anos solteira porque estava totalmente emocionalmente indisponível, mesmo afirmando que queria alguém",
                                    "Era muito estressada e raivosa - esse foi um dos motivos que eu busquei autoconhecimento",
                                    "Tive um trauma muito grande aos 18 ao ver meus pais se separarem e fui pro mundo tentar fugir da dor",
                                    "Sentia por dentro um vazio enorme por não me reconhecer nas minhas atitudes",
                                    "Não sabia dizer não pra ninguém e sempre me anulava pra manter a paz"
                                ].map((step, i) => (
                                    <li key={i} className="flex items-start space-x-3">
                                        <div className="bg-secondary/10 text-secondary p-1 rounded-full mt-1.5"><ArrowRight size={10} /></div>
                                        <span>{step}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="bg-secondary/5 p-8 rounded-3xl border border-secondary/10 mt-10">
                                <p className="font-bold text-xl text-gray-900 mb-4 italic italic">"Até que resolvi fazer uma ÚNICA COISA: Eu decidi parar de agradar os outros e comecei a olhar pra mim."</p>
                                <p className="mb-4">E DESCOBRI ALGO QUE MUDOU TUDO: <strong>NÃO É QUE EU NÃO ME AMAVA, É QUE EU NÃO ME CONHECIA.</strong></p>
                                <p>E quando comecei a me conhecer, passei a me posicionar, a impor limites, a sair da dependência emocional e a me conectar com Deus de uma forma profunda e real.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- FAQ SECTION --- */}
            <section className="py-24 bg-[#FFFBF9]">
                <div className="max-w-3xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-4xl font-bold mb-4">FAQ</h2>
                        <div className="w-12 h-1 bg-secondary mx-auto"></div>
                    </div>

                    <div className="space-y-4">
                        {[
                            { q: "Como acesso as aulas?", a: "Imediatamente após a confirmação do pagamento, você receberá em seu e-mail todos os dados de acesso à plataforma onde as aulas (gravadas e ao vivo) e meditações ficam disponíveis." },
                            { q: "Como funciona o pagamento?", a: "O pagamento é processado de forma segura e pode ser feito via Cartão de Crédito (em até 12x), PIX ou Boleto Bancário." },
                            { q: "E se eu não gostar?", a: "Você tem uma garantia incondicional de 7 dias. Se por qualquer motivo sentir que o Portal não é para você, basta solicitar o reembolso e devolvemos 100% do seu investimento." },
                            { q: "Funciona pra mim?", a: "Funciona para qualquer mulher que esteja cansada do seu momento atual e genuinamente queira mudar sua vida, seus relacionamentos e suas finanças através do autoconhecimento." }
                        ].map((faq, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100"
                            >
                                <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.q}</h3>
                                <p className="text-gray-600">{faq.a}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- FINAL CTA BARREL --- */}
            <section className="py-24 bg-gradient-to-br from-primary to-secondary text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
                </div>
                <div className="max-w-4xl mx-auto px-4 relative z-10">
                    <h2 className="font-display text-4xl md:text-6xl font-bold mb-8">O Portal está aberto para você.</h2>
                    <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto italic">A travessia que separa quem você é hoje de quem você nasceu para ser.</p>

                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://wa.me/5531990622003"
                        className="inline-flex items-center px-12 py-6 bg-white text-secondary font-bold text-2xl rounded-2xl shadow-2xl hover:bg-gray-50 transition-colors uppercase tracking-tight"
                    >
                        SIM! QUERO ENTRAR NO PORTAL
                        <ArrowRight className="ml-3 transition-transform group-hover:translate-x-1" />
                    </motion.a>

                    <div className="mt-8 flex items-center justify-center space-x-6 text-sm opacity-60">
                        <span>Acesso imediato</span>
                        <span>•</span>
                        <span>Garantia de 7 dias</span>
                    </div>
                </div>
            </section>

            <footer className="py-12 bg-[#1A0F0D] text-center">
                <p className="text-white/20 text-xs tracking-widest uppercase">© {new Date().getFullYear()} Isabella Franklin. Todos os direitos reservados.</p>
            </footer>

            {/* Testimonial Modal */}
            <AnimatePresence>
                {selectedTestimonial && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                        onClick={() => setSelectedTestimonial(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className={`bg-white rounded-[2.5rem] ${selectedTestimonial.images && selectedTestimonial.images.length > 0 ? 'max-w-sm' : 'max-w-2xl'} w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl relative`}
                        >
                            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0 z-20">
                                <div className="px-2">
                                    <h3 className="font-display text-2xl font-bold text-gray-900 leading-tight">{selectedTestimonial.author}</h3>
                                    <p className="text-secondary text-xs font-bold uppercase tracking-widest mt-0.5">{selectedTestimonial.role}</p>
                                </div>
                                <button
                                    onClick={() => setSelectedTestimonial(null)}
                                    className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-gray-900"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            <div className="p-4 overflow-y-auto custom-scrollbar flex-1 relative bg-gray-50/30">
                                {selectedTestimonial.images && selectedTestimonial.images.length > 0 ? (
                                    <div className="relative group touch-none">
                                        <div className="overflow-hidden rounded-2xl shadow-inner">
                                            <motion.div
                                                className="flex"
                                                animate={{ x: `-${currentImageIndex * 100}%` }}
                                                transition={{ type: "spring", stiffness: 400, damping: 40 }}
                                                drag="x"
                                                dragConstraints={{ left: 0, right: 0 }}
                                                onDragEnd={(e, { offset, velocity }) => {
                                                    const swipe = Math.abs(offset.x) > 50 || Math.abs(velocity.x) > 200;
                                                    if (swipe) {
                                                        if (offset.x < 0) nextImage(e as any);
                                                        else prevImage(e as any);
                                                    }
                                                }}
                                            >
                                                {selectedTestimonial.images.map((img, idx) => (
                                                    <div key={idx} className="min-w-full flex items-start justify-center">
                                                        <img
                                                            src={img}
                                                            alt={`Parte ${idx + 1}`}
                                                            className="w-full h-auto object-contain"
                                                        />
                                                    </div>
                                                ))}
                                            </motion.div>
                                        </div>

                                        {selectedTestimonial.images.length > 1 && (
                                            <>
                                                <div className="absolute top-1/2 -translate-y-1/2 -left-3 z-30">
                                                    <button
                                                        onClick={prevImage}
                                                        className={`p-2 rounded-full bg-white shadow-xl text-gray-900 border border-secondary/10 transition-all ${currentImageIndex === 0 ? 'opacity-0 scale-50 pointer-events-none' : 'opacity-100 hover:scale-110 active:scale-95'}`}
                                                    >
                                                        <ArrowRight className="rotate-180" size={18} />
                                                    </button>
                                                </div>
                                                <div className="absolute top-1/2 -translate-y-1/2 -right-3 z-30">
                                                    <button
                                                        onClick={nextImage}
                                                        className={`p-3 rounded-full bg-white shadow-xl text-gray-900 border border-secondary/10 transition-all ${currentImageIndex === selectedTestimonial.images.length - 1 ? 'opacity-0 scale-50 pointer-events-none' : 'opacity-100 hover:scale-110 active:scale-95'}`}
                                                    >
                                                        <ArrowRight size={18} />
                                                    </button>
                                                </div>
                                                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex space-x-1.5 z-30">
                                                    {selectedTestimonial.images.map((_, idx) => (
                                                        <button
                                                            key={idx}
                                                            onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                                                            className={`w-1.5 h-1.5 rounded-full transition-all ${currentImageIndex === idx ? 'bg-secondary w-4' : 'bg-gray-300 hover:bg-gray-400'}`}
                                                        />
                                                    ))}
                                                </div>
                                            </>
                                        )}
                                    </div>
                                ) : (
                                    <div className="p-6 relative">
                                        <Quote className="absolute -top-2 -left-2 text-secondary/10 w-12 h-12 -z-10" />
                                        <p className="text-gray-700 text-lg leading-relaxed italic whitespace-pre-line relative z-10">
                                            "{selectedTestimonial.text}"
                                        </p>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Portal;
