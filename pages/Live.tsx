import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, Star, ArrowRight, CheckCircle, Search, ShieldCheck } from 'lucide-react';
import { IMAGES } from '../constants';

const Live: React.FC = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Add actual submit logic here if needed (e.g. ActiveCampaign, Mailchimp)
        setTimeout(() => {
            navigate('/live/obrigado');
        }, 800);
    };

    return (
        <div className="font-body text-white bg-[#1A0F0D] min-h-screen overflow-x-hidden selection:bg-primary selection:text-white">
            
            {/* Background elements */}
            <div className="fixed inset-0 z-0">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 mix-blend-screen opacity-60 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4 mix-blend-screen opacity-50 pointer-events-none" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light pointer-events-none"></div>
            </div>

            {/* Header Section */}
            <section className="relative z-10 pt-16 pb-20 px-4 md:px-8 max-w-5xl mx-auto flex flex-col items-center justify-center text-center min-h-[90vh]">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8 flex items-center bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10 shadow-xl"
                >
                    <Star className="text-secondary w-5 h-5 mr-3 fill-secondary animate-pulse" />
                    <span className="text-secondary font-bold uppercase tracking-[0.2em] text-sm">Aula VIP • Online e Gratuita</span>
                </motion.div>

                <motion.h1 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="font-display text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] mb-8"
                >
                    Conquiste relacionamentos <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#ff8473] to-secondary italic">
                        incríveis
                    </span>
                    , uma vida financeira próspera e equilíbrio emocional.
                </motion.h1>

                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-xl md:text-2xl text-white/90 max-w-3xl font-medium leading-relaxed mb-6"
                >
                    Em apenas UMA AULA, você vai aprender a verdade sobre mulheres posicionadas que ninguém te contou!
                </motion.p>

                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-lg text-white/60 max-w-2xl leading-relaxed mb-12"
                >
                    Se você trava na hora de se posicionar, sente culpa quando coloca limites ou sempre acaba cedendo... <strong className="text-white">essa aula é pra você!</strong>
                </motion.p>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 shadow-2xl relative"
                >
                    {/* Glowing effect under the form */}
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-50 rounded-[2rem] -z-10" />
                    
                    <div className="flex items-center justify-center space-x-6 mb-8 text-primary">
                        <div className="flex items-center bg-primary/10 px-4 py-2 rounded-xl">
                            <Calendar className="w-5 h-5 mr-2" />
                            <span className="font-bold tracking-tight">DIA 19.03</span>
                        </div>
                        <div className="flex items-center bg-primary/10 px-4 py-2 rounded-xl">
                            <Clock className="w-5 h-5 mr-2" />
                            <span className="font-bold tracking-tight">ÀS 19H30</span>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="relative group">
                            <input
                                type="text"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Digite seu nome"
                                className="w-full bg-white/10 border border-white/20 focus:border-primary text-white rounded-xl px-5 py-4 outline-none transition-all placeholder:text-white/40 focus:bg-white/15"
                            />
                        </div>
                        
                        <div className="relative group">
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Digite seu melhor e-mail"
                                className="w-full bg-white/10 border border-white/20 focus:border-primary text-white rounded-xl px-5 py-4 outline-none transition-all placeholder:text-white/40 focus:bg-white/15"
                            />
                        </div>

                        <div className="relative group flex">
                            <div className="bg-white/10 border border-white/20 border-r-0 rounded-l-xl px-4 py-4 flex items-center justify-center text-white/70">
                                🇧🇷 +55
                            </div>
                            <input
                                type="tel"
                                required
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="Digite seu telefone"
                                className="w-full bg-white/10 border border-white/20 focus:border-primary text-white rounded-r-xl px-5 py-4 outline-none transition-all placeholder:text-white/40 focus:bg-white/15"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full mt-6 py-5 rounded-xl font-bold text-lg md:text-xl transition-all flex items-center justify-center space-x-2 shadow-xl hover:shadow-primary/30 uppercase tracking-tight ${isSubmitting ? 'bg-primary/70 cursor-not-allowed scale-95' : 'bg-primary hover:bg-[#E35F4B] text-white hover:-translate-y-1'}`}
                        >
                            <span>{isSubmitting ? 'AGUARDE...' : 'TÔ DENTRO, QUERO PARTICIPAR'}</span>
                            {!isSubmitting && <ArrowRight className="w-6 h-6 ml-1" />}
                        </button>
                        
                        <div className="pt-3 flex items-center justify-center text-xs text-white/30 space-x-1">
                            <ShieldCheck size={14} />
                            <span>Seus dados estão seguros conosco.</span>
                        </div>
                    </form>
                </motion.div>
            </section>

            {/* Information Section */}
            <section className="relative z-10 py-24 px-4 bg-gradient-to-b from-transparent to-[#0a0605]">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">Nessa aula você vai entender:</h2>
                        <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                        {[
                            {
                                title: "O bloqueio do posicionamento",
                                text: "Por que você sabe exatamente o que precisa dizer, mas simplesmente trava na hora H."
                            },
                            {
                                title: "A raiz emocional",
                                text: "Descubra de onde vem o medo profundo de se posicionar e aprenda como olhar e curar isso."
                            },
                            {
                                title: "O erro silencioso",
                                text: "Aquele erro que você comete todo dia: se diminuir e aceitar menos para não perder quem você ama."
                            }
                        ].map((item, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors"
                            >
                                <div className="w-12 h-12 bg-secondary/20 text-secondary rounded-xl flex items-center justify-center mb-6">
                                    <Search size={24} />
                                </div>
                                <h3 className="text-xl font-display font-bold text-white mb-4 leading-tight">{item.title}</h3>
                                <p className="text-white/60 leading-relaxed">{item.text}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-primary/10 border border-primary/30 rounded-[2.5rem] p-10 md:p-16 text-center shadow-2xl relative overflow-hidden"
                    >
                        {/* Glow inside card */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/30 blur-[100px] rounded-full pointer-events-none" />
                        
                        <div className="relative z-10 flex flex-col items-center">
                            <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight leading-tight">
                                SE TORNE A VERSÃO<br/>
                                <span className="text-secondary italic">MAIS PRÓSPERA DE SI</span>
                            </h2>
                            <p className="text-xl text-white/80 max-w-2xl mb-12">
                                Aprenda como se posicionar na vida e nos relacionamentos para conquistar o sucesso que te espera em 2026.
                            </p>

                            <button
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="px-12 py-6 rounded-2xl font-bold text-xl transition-all flex items-center justify-center space-x-2 bg-secondary hover:bg-[#966b4d] text-white shadow-xl shadow-secondary/30 hover:-translate-y-1 w-full max-w-md uppercase tracking-tight"
                            >
                                <span>QUERO PARTICIPAR</span>
                                <ArrowRight className="w-6 h-6 ml-2" />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Live;
