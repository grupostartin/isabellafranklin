import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle, ShieldCheck, ArrowRight, ChevronDown, Heart, Eye } from 'lucide-react';
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

const LP: React.FC = () => {
    return (
        <div className="font-body text-gray-800 bg-[#FFFBF9] overflow-x-hidden">

            {/* --- HERO SECTION --- */}
            <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 px-4 overflow-hidden">
                {/* Abstract Background */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-gradient-to-bl from-[#D1523E]/10 to-transparent rounded-bl-full decoration-clone"></div>
                    <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[#F46771]/10 to-transparent rounded-tr-full"></div>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="flex flex-col space-y-6"
                    >
                        <motion.div variants={fadeInUp} className="inline-flex items-center space-x-2 bg-[#D1523E]/10 px-4 py-2 rounded-full w-fit">
                            <Star size={16} className="text-secondary fill-secondary" />
                            <span className="text-secondary font-bold text-xs tracking-widest uppercase">Curso Além das Máscaras</span>
                        </motion.div>

                        <motion.h1 variants={fadeInUp} className="font-display text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight">
                            Uma jornada <span className="text-primary italic">definitiva</span> para transformar sua vida
                        </motion.h1>

                        <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
                            Torne-se uma mulher mais confiante, leve e dona de si. Quebre os ciclos de autossabotagem e pare de repetir padrões que te afastam da vida que você deseja.
                        </motion.p>

                        <motion.div variants={fadeInUp} className="pt-4">
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="https://wa.me/5531990622003"
                                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-2xl shadow-lg shadow-primary/25 text-lg group"
                            >
                                QUERO TRANSFORMAR MINHA VIDA
                                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </motion.a>
                            <p className="mt-3 text-sm text-gray-400 flex items-center">
                                <ShieldCheck size={14} className="mr-1" /> Garantia de 7 dias ou seu dinheiro de volta
                            </p>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5] border-4 border-white">
                            <img
                                src={IMAGES.hero}
                                alt="Isabella Franklin"
                                className="w-full h-full object-cover object-center"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                            className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl flex items-center space-x-4 max-w-xs"
                        >
                            <div className="bg-[#F46771]/20 p-3 rounded-full">
                                <Heart className="text-[#F46771] fill-[#F46771]" size={24} />
                            </div>
                            <div>
                                <p className="font-bold text-gray-900 leading-tight">Cure suas feridas emocionais</p>
                                <p className="text-xs text-gray-500 mt-1">E desbloqueie seu verdadeiro potencial</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* --- PROBLEM / AWARENESS SECTION --- */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-display text-3xl md:text-4xl text-gray-900 font-bold mb-8"
                    >
                        É um mergulho direto na <span className="text-secondary">origem dos seus bloqueios</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-600 leading-relaxed mb-12"
                    >
                        Pra você entender por que se sabota, por que repete os mesmos padrões e por que, mesmo tentando, ainda sente que está travada.
                        Não dá pra mudar sem encarar a raiz. Nesse processo, você vai olhar de frente pras feridas emocionais que moldaram sua forma de amar, decidir e se enxergar.
                    </motion.p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                        {[
                            "Por que você diz 'sim' quando quer dizer 'não'?",
                            "Por que sente culpa ao se posicionar?",
                            "Por que tem medo da rejeição?",
                            "Por que continua repetindo ciclos infelizes?"
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + (i * 0.1) }}
                                className="flex items-start space-x-4 p-6 bg-[#FFFBF9] rounded-2xl border border-orange-100 shadow-sm"
                            >
                                <div className="bg-primary/10 p-2 rounded-lg mt-1">
                                    <Eye size={20} className="text-primary" />
                                </div>
                                <p className="text-gray-700 font-medium">{item}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- TRANSFORMATION / MODULES --- */}
            <section className="py-20 bg-[#1A0F0D] text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    {/* Background Texture/Pattern */}
                    <div className="w-96 h-96 bg-primary rounded-full blur-[120px] absolute -top-20 -left-20"></div>
                    <div className="w-96 h-96 bg-secondary rounded-full blur-[120px] absolute bottom-20 right-20"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-3xl md:text-5xl mb-4">O que você vai viver no <span className="text-primary italic">Além das Máscaras</span></h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Reconhecer Feridas", desc: "Identifique rejeição, abandono, traição, humilhação e injustiça." },
                            { title: "Quebrar Padrões", desc: "Pare com ciclos de comparação, insegurança e necessidade de aprovação." },
                            { title: "Autenticidade", desc: "Pare de viver com medo de desagradar. Tome decisões por você." },
                            { title: "Curar a Criança Interior", desc: "Acolha os sentimentos que aprendeu a esconder desde criança." },
                            { title: "Posicionamento", desc: "Aprenda a colocar limites sem culpa e com clareza." },
                            { title: "Amor Próprio", desc: "Reconstrua a forma como você se trata e se enxerga." }
                        ].map((card, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors"
                            >
                                <CheckCircle className="text-primary mb-4" size={32} />
                                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                                <p className="text-white/60 text-sm leading-relaxed">{card.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="https://wa.me/5531990622003"
                            className="inline-block px-10 py-5 bg-white text-secondary font-bold text-lg rounded-2xl shadow-glow hover:bg-gray-100 transition-colors"
                        >
                            GARANTIR MINHA VAGA AGORA
                        </motion.a>
                    </div>
                </div>
            </section>

            {/* --- TESTIMONIALS (Custom for LP) --- */}
            <section className="py-20 md:py-32 bg-[#FFFBF9]">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-3xl md:text-5xl text-gray-900 font-bold">Os resultados são <span className="text-secondary under">inquestionáveis</span></h2>
                        <p className="mt-4 text-gray-500">Histórias reais de quem decidiu tirar as máscaras.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white p-8 rounded-3xl shadow-lg border border-orange-100 flex flex-col"
                        >
                            <div className="flex space-x-1 mb-4">
                                {[1, 2, 3, 4, 5].map(s => <Star key={s} size={16} className="fill-yellow-400 text-yellow-400" />)}
                            </div>
                            <p className="italic text-gray-600 mb-6 flex-grow">"Comecei com a Isabella há uns meses atrás... aah como está sendo leve e transformadora! Não poderia ter escolhido melhor mentora. Buscar lá no fundo as minhas próprias respostas não seria tão leve sem você!"</p>
                            <div>
                                <p className="font-bold text-gray-900">Caroline Rocha</p>
                                <p className="text-xs text-secondary uppercase font-bold tracking-widest">Aluna Além das Máscaras</p>
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white p-8 rounded-3xl shadow-lg border border-orange-100 flex flex-col"
                        >
                            <div className="flex space-x-1 mb-4">
                                {[1, 2, 3, 4, 5].map(s => <Star key={s} size={16} className="fill-yellow-400 text-yellow-400" />)}
                            </div>
                            <p className="italic text-gray-600 mb-6 flex-grow">"Foi uma linda jornada de autoconhecimento e transformação. Eu estava perdida, me sentia rejeitada... Me sinto uma nova mulher! Hoje consigo me olhar e reconhecer minha força."</p>
                            <div>
                                <p className="font-bold text-gray-900">Rafa Andrade</p>
                                <p className="text-xs text-secondary uppercase font-bold tracking-widest">Aluna Além das Máscaras</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- AUTHOR / TRANSFORMATION --- */}
            <section className="py-20 bg-white relative overflow-hidden">
                <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="hidden lg:block lg:col-span-5 relative">
                        <div className="aspect-[3/4] rounded-full overflow-hidden border-8 border-[#F46771]/10 relative z-10 w-full max-w-sm mx-auto">
                            <img src={IMAGES.about} alt="Isabella Transformation" className="w-full h-full object-cover" />
                        </div>
                        {/* Decorators */}
                        <div className="absolute top-10 -left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl"></div>
                        <div className="absolute bottom-10 -right-10 w-32 h-32 bg-secondary/20 rounded-full blur-xl"></div>
                    </div>

                    <div className="lg:col-span-7">
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ainda em dúvida? Vou te mostrar minha transformação.</h2>
                        <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                            <p>Ao longo de minha vida, passei por uma profunda transformação pessoal. Antigamente, eu era uma pessoa extremamente estressada e infeliz, sempre buscando soluções externas para o vazio que sentia por dentro.</p>
                            <p>Não me reconhecia no espelho e agia de maneiras que não refletiam meu verdadeiro eu. Guardava uma dor tão intensa que parecia insuportável.</p>
                            <p className="font-bold text-gray-800">Essa insustentável dor interna me levou a um ponto de ruptura.</p>
                            <p>Há quase 10 anos, vivo uma jornada de autodescoberta e autoconhecimento que me reconectou com minha verdadeira identidade. Abandonei a personagem que antes vivia e abracei minha espiritualidade.</p>
                        </div>

                        <div className="mt-8 pt-8 border-t border-gray-100 flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                <img src={IMAGES.signature} alt="Assinatura" className="h-12 opacity-50" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-gray-900">Isabella Franklin</p>
                                <p className="text-xs text-gray-500">Mentora e Terapeuta Sistêmica</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- FAQ SECTION --- */}
            <section className="py-20 bg-[#FFFBF9]">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="font-display text-3xl text-center font-bold mb-12">Perguntas Frequentes</h2>

                    <div className="space-y-4">
                        {[
                            { q: "Qual a duração do curso?", a: "A duração pode variar de acordo com o ritmo de cada aluna. Alguns materiais são liberados imediatamente, outros após 7 dias." },
                            { q: "Como acesso o curso?", a: "Os materiais são enviados no momento da compra e disponibilizados em uma plataforma online 24h por dia." },
                            { q: "Tem suporte?", a: "Sim! Qualquer dúvida é só entrar em contato pelo e-mail ou na plataforma." },
                            { q: "E se eu não gostar?", a: "Se você ver que o curso não é pra você, te reembolsamos 100% dentro de 7 dias. O risco é todo meu." }
                        ].map((faq, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
                            >
                                <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.q}</h3>
                                <p className="text-gray-600">{faq.a}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- FINAL CTA --- */}
            <section className="py-24 bg-gradient-to-br from-primary to-secondary text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Comece sua transformação hoje</h2>
                    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">Não deixe para depois a vida leve e confiante que você merece viver. O primeiro passo só depende de você.</p>

                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://wa.me/5531990622003"
                        className="inline-flex items-center px-12 py-6 bg-white text-secondary font-bold text-2xl rounded-2xl shadow-2xl hover:bg-gray-50 transition-colors"
                    >
                        QUERO ME INSCREVER AGORA
                        <ArrowRight className="ml-3" />
                    </motion.a>
                    <p className="mt-6 text-sm opacity-70">Pagamento seguro • Acesso imediato • 7 dias de garantia</p>
                </div>
            </section>

            <footer className="py-8 bg-[#1A0F0D] text-center text-white/30 text-xs">
                <p>© {new Date().getFullYear()} Isabella Franklin. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
};

export default LP;
