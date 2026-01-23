import React from 'react';
import { Quote, Star, ArrowRight, Eye, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

interface Testimonial {
    text: string;
    author: string;
    role: string;
    images?: string[];
}

const Testimonials: React.FC = () => {
    const testimonials: Testimonial[] = [
        {
            text: "Graças a você eu mudei de dentro pra fora...",
            author: "Caroline Martines",
            role: "Mentoria Individual",
            images: ["/assets/testimonials/caroline.jpg"]
        },
        {
            text: "A Mentoria das Bellas tem sido transformadora...",
            author: "Priscila",
            role: "Mentoria das Bellas",
            images: ["/assets/testimonials/priscila.jpg"]
        },
        {
            text: "A mentoria das Bellas foi um divisor de águas na minha vida...",
            author: "Michelle Melo",
            role: "Mentoria das Bellas",
            images: ["/assets/testimonials/michelle-2.jpg", "/assets/testimonials/michelle-1.jpg"]
        }
    ];

    const [selectedTestimonial, setSelectedTestimonial] = React.useState<Testimonial | null>(null);

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
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-3xl shadow-lg border border-[#F46771]/10 flex flex-col relative overflow-hidden h-[500px]"
                        >
                            <div className="absolute top-0 w-full p-4 flex justify-between items-start z-10">
                                <div className="bg-[#F46771] text-white p-3 rounded-xl shadow-lg">
                                    <Quote size={20} />
                                </div>
                            </div>

                            <div className="flex-1 overflow-hidden relative">
                                {t.images && t.images.length > 0 ? (
                                    <div className="w-full h-full relative cursor-pointer" onClick={() => setSelectedTestimonial(t)}>
                                        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-[1] h-full" />
                                        <img
                                            src={t.images[0]}
                                            alt={`Depoimento de ${t.author}`}
                                            className="w-full h-full object-cover object-top opacity-90 transition-transform duration-500 hover:scale-105"
                                        />
                                    </div>
                                ) : (
                                    <div className="p-8 pt-16 h-full relative cursor-pointer" onClick={() => setSelectedTestimonial(t)}>
                                        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent z-[1]" />
                                        <p className="text-gray-600 text-lg leading-relaxed italic line-clamp-6">
                                            "{t.text}"
                                        </p>
                                    </div>
                                )}
                            </div>

                            <div className="p-6 relative z-10 bg-white border-t border-gray-100">
                                <div className="mb-4">
                                    <h4 className="font-display text-xl font-bold text-gray-900">{t.author}</h4>
                                    <p className="text-primary text-sm font-semibold uppercase tracking-widest">{t.role}</p>
                                </div>
                                <button
                                    onClick={() => setSelectedTestimonial(t)}
                                    className="w-full flex items-center justify-center space-x-2 py-3 bg-gray-50 hover:bg-primary/10 text-gray-700 hover:text-primary rounded-xl transition-colors font-medium group"
                                >
                                    <Eye size={18} className="group-hover:scale-110 transition-transform" />
                                    <span>Ver depoimento completo</span>
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <AnimatePresence>
                    {selectedTestimonial && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                            onClick={() => setSelectedTestimonial(null)}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                onClick={(e) => e.stopPropagation()}
                                className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl relative"
                            >
                                <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0 z-20">
                                    <div>
                                        <h3 className="font-display text-2xl font-bold text-gray-900">{selectedTestimonial.author}</h3>
                                        <p className="text-primary text-sm font-medium">{selectedTestimonial.role}</p>
                                    </div>
                                    <button
                                        onClick={() => setSelectedTestimonial(null)}
                                        className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500 hover:text-gray-900"
                                    >
                                        <X size={24} />
                                    </button>
                                </div>

                                <div className="p-6 overflow-y-auto custom-scrollbar">
                                    {selectedTestimonial.images && selectedTestimonial.images.length > 0 ? (
                                        <div className="space-y-4">
                                            {selectedTestimonial.images.map((img, idx) => (
                                                <img
                                                    key={idx}
                                                    src={img}
                                                    alt={`Depoimento de ${selectedTestimonial.author} - Parte ${idx + 1}`}
                                                    className="w-full h-auto rounded-xl shadow-sm border border-gray-100"
                                                />
                                            ))}
                                        </div>
                                    ) : (
                                        <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                                            "{selectedTestimonial.text}"
                                        </p>
                                    )}
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

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
