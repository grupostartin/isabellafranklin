import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle, ArrowRight, ShieldCheck, Heart, Sparkles, BookOpen, Users, Video, Clock, CreditCard, MessageCircle, HelpCircle } from 'lucide-react';
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

const Portal: React.FC = () => {
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
                        className="bg-[#FFFBF9] border border-secondary/10 rounded-[2.5rem] p-8 md:p-12 shadow-sm"
                    >
                        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                            Hoje vivo do que eu amo, tenho um relacionamento incrível e me sinto cada vez mais feliz e realizada com a vida e com quem eu sou, hoje quero te ajudar a voltar pra você assim como elas voltaram:
                        </p>

                        {/* Depoimentos / Testimonials Space */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                            {[1, 2].map((i) => (
                                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-left">
                                    <div className="flex text-yellow-500 mb-3">
                                        <Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" />
                                    </div>
                                    <p className="text-gray-600 text-sm italic mb-4">"Minha vida mudou completamente depois do portal. Hoje me sinto segura e dona da minha história."</p>
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold text-xs uppercase">B</div>
                                        <span className="text-sm font-bold text-gray-900">Aluna do Portal</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <p className="text-xl font-display text-secondary font-bold italic">
                            "No final do ano, quero receber uma mensagem sua, assim como recebi delas!"
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
                        <p className="text-white/60 text-lg">A transformação que acontece quando você decide atravessar.</p>
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
                                    "Tem medo de impor limites",
                                    "Teve medo de ser abandonada e passou a cobrar atenção",
                                    "Falta de posicionamento",
                                    "Insegurança, ansiedade e estresse altos",
                                    "Passou muito tempo só no celular ao invés de fazer o que precisa",
                                    "Medo de julgamento, ou dizer não",
                                    "Explodiu do nada...e depois se sentiu culpa",
                                    "Problemas financeiros"
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
                                    "Consegue se posicionar sem culpa e impor seus limites",
                                    "Sabe se comunicar de forma assertiva",
                                    "Melhora suas relações e é cada vez mais realizada no relacionamento",
                                    "Se sente segura de si e autoconfiante",
                                    "Atrai relacionamentos maduros",
                                    "Se livra do medo do julgamento e realiza seus sonhos",
                                    "É equilibrada emocionalmente",
                                    "Quebra padrões de repetição e se torna cada vez mais próspera"
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
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">Pra quem é o Portal?</h2>
                        <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "Mulheres que têm dificuldades de impor limites",
                            "Mulheres que se sentem emocionalmente dependentes",
                            "Mulheres com medo do julgamento",
                            "Mulheres que querem destravar problemas financeiros",
                            "Mulheres que vivem ansiosas, estressadas, ou procrastinam"
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-[#FFFBF9] p-8 rounded-3xl border border-secondary/5 h-full flex items-center justify-center text-center hover:shadow-md transition-shadow"
                            >
                                <p className="text-gray-700 font-bold leading-relaxed">{item}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- FEATURES SECTION --- */}
            <section className="py-24 bg-[#FFFBF9]">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-6">
                        <div className="max-w-2xl">
                            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                NA PRÁTICA, <br />
                                <span className="text-secondary italic">COMO FUNCIONA O PORTAL?</span>
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                O Portal das Bellas é um espaço vivo que está sempre sendo atualizado. Veja tudo o que você terá acesso imediato:
                            </p>
                        </div>
                        <div className="bg-secondary/10 px-6 py-3 rounded-2xl flex items-center space-x-3 shrink-0">
                            <Clock className="text-secondary" />
                            <span className="text-secondary font-bold text-sm uppercase tracking-widest">Acesso Imediato</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Users size={28} />,
                                title: "Meditações guiadas semanais",
                                detail: "Ao vivo e gravadas. Para você ter equilíbrio emocional e conseguir ser próspera até nos momentos difíceis."
                            },
                            {
                                icon: <Video size={28} />,
                                title: "Aulas ao vivo quinzenais",
                                detail: "Com aprofundamento sobre relacionamentos, dinâmicas sistêmicas, posicionamento… tudo para você ter um relacionamento leve."
                            },
                            {
                                icon: <BookOpen size={28} />,
                                title: "Clube do Livro",
                                detail: "Com leituras selecionadas para você desenvolver sua mentalidade e prosperidade financeira."
                            },
                            {
                                icon: <Sparkles size={28} />,
                                title: "Aulas complementares gravadas",
                                detail: "Entenda seus traumas, desbloqueie padrões financeiros e transforme-se na sua versão magnética e autoconfiante."
                            },
                            {
                                icon: <ArrowRight size={28} />,
                                title: "Desafios semanais",
                                detail: "Para aplicar na vida real e ter resultados tangíveis e visíveis na sua vida financeira e em seus relacionamentos."
                            },
                            {
                                icon: <Heart size={28} />,
                                title: "Práticas de alinhamento energético",
                                detail: "Saia do modo sobrevivência e sinta-se presente e disposta para as conquistas do seu dia a dia."
                            }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:border-secondary/20 transition-colors"
                            >
                                <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-6 italic">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                                <p className="text-gray-600 text-base leading-relaxed">{feature.detail}</p>
                            </motion.div>
                        ))}

                        {/* Special Features */}
                        <div className="md:col-span-2 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                            <div className="bg-gradient-to-br from-[#1A0F0D] to-black text-white p-8 rounded-[2rem] flex items-center justify-between group overflow-hidden relative">
                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold mb-2">Convidados especiais</h3>
                                    <p className="text-white/60">Trazendo visões que complementam e enriquecem a travessia.</p>
                                </div>
                                <div className="relative z-10 shrink-0 ml-4">
                                    <Star className="text-primary group-hover:scale-110 transition-transform" size={40} />
                                </div>
                                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
                            </div>
                            <div className="bg-secondary/10 text-secondary p-8 rounded-[2rem] flex items-center justify-between group overflow-hidden relative border border-secondary/20">
                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold mb-2">Descontos exclusivos</h3>
                                    <p className="text-secondary/70">Em mentorias, cursos e experiências conduzidas por mim.</p>
                                </div>
                                <div className="relative z-10 shrink-0 ml-4">
                                    <CreditCard className="group-hover:rotate-12 transition-transform" size={40} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- SOCIAL PROOF 2 --- */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6 italic underline decoration-secondary">
                            MAS NÃO ACREDITE APENAS NO QUE EU TO FALANDO
                        </h2>
                        <p className="text-xl text-gray-500">Veja dezenas de mulheres vivendo isso:</p>
                    </div>

                    {/* Placeholder for Depoimentos Cards/Scroll */}
                    <div className="flex flex-wrap justify-center gap-4">
                        {[1, 2, 3, 4, 5, 6].map(i => (
                            <div key={i} className="w-full sm:w-64 aspect-[9/16] bg-gray-100 rounded-3xl overflow-hidden shadow-md flex items-center justify-center relative group">
                                <MessageCircle size={32} className="text-gray-300 group-hover:scale-110 transition-transform" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                                    <p className="text-white text-xs font-bold">Depoimento {i}</p>
                                </div>
                            </div>
                        ))}
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
                            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Cruze o portal para sua nova vida</h2>
                            <p className="text-gray-500 mb-10 italic">Depois que você atravessar o portal, sua vida nunca será a mesma.</p>

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
                                <div className="flex items-center space-x-4 mb-2">
                                    <span className="text-gray-900 font-bold text-lg uppercase tracking-tight mt-2">Por:</span>
                                    <span className="text-6xl md:text-8xl font-display font-bold text-secondary tracking-tighter">R$ 397,00</span>
                                </div>
                                <span className="text-gray-500 font-medium mb-10">Ou parcelado em 12x no cartão</span>

                                <motion.a
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    href="https://link-de-pagamento-aqui.com"
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
                        <h2 className="font-display text-4xl font-bold mb-4 italic">FAQ</h2>
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
        </div>
    );
};

export default Portal;
