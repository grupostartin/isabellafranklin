import React from 'react';
import { Quote, Star, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface Testimonial {
    text: string;
    author: string;
    role: string;
}

const Testimonials: React.FC = () => {
    const testimonials: Testimonial[] = [
        {
            text: "Graças a você eu mudei de dentro pra fora. Você me deu um 360 e me abriu um olhar para tantos aspectos da vida que eu nem tinha ideia. Me fez acreditar em mim e tornou este um dos melhores anos da minha vida!",
            author: "Caroline Martines",
            role: "Mentoria Individual"
        },
        {
            text: "A Mentoria das Bellas tem sido transformadora. Senti camadas dentro de mim se reorganizando, me permitindo enxergar padrões, me libertar de bloqueios e abrir espaço para minha evolução com mais amor, coragem e clareza.",
            author: "Priscila",
            role: "Mentoria das Bellas"
        },
        {
            text: "Encontrei meu equilíbrio emocional e, consequentemente, minha vida financeira destravou. Era tudo uma questão de posicionamento interno.",
            author: "Fernanda Lima",
            role: "Mentoria de Posicionamento"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.95, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <section id="depoimentos" className="py-20 md:py-32 bg-[#F46771]/05 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-[#F46771]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex justify-center space-x-1 mb-4"
                    >
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={18} className="fill-primary text-primary" />
                        ))}
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="font-display text-4xl md:text-5xl text-gray-900 font-bold"
                    >
                        Vidas que Floresceram
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="h-1 bg-[#F46771] mx-auto mt-6 rounded-full"
                    ></motion.div>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-[#F46771]/10 flex flex-col items-center text-center relative"
                        >
                            <div className="absolute -top-6 bg-[#F46771] text-white p-4 rounded-2xl shadow-lg ring-4 ring-white">
                                <Quote size={24} />
                            </div>

                            <p className="text-gray-600 text-lg leading-relaxed italic mb-8 mt-4">
                                "{t.text}"
                            </p>

                            <div className="mt-auto">
                                <h4 className="font-display text-xl font-bold text-gray-900">{t.author}</h4>
                                <p className="text-primary text-sm font-semibold uppercase tracking-widest mt-1">{t.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="mt-20 text-center flex flex-col items-center"
                >
                    <p className="text-gray-500 font-medium mb-8">Transformações reais acompanhadas pela Dra. Isabella Franklin</p>

                    <motion.a
                        href="https://wa.me/5531990622003"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center px-10 py-5 bg-primary text-white font-bold text-xl rounded-2xl shadow-glow-primary hover:bg-primary-hover transition-all duration-300 group"
                    >
                        Quero iniciar minha travessia
                        <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                    </motion.a>

                    <p className="mt-6 text-gray-400 text-sm">Vagas limitadas para acompanhamento individual</p>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
