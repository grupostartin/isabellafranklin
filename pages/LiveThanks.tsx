import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, AlertTriangle, ArrowRight, MessageCircle } from 'lucide-react';
import { IMAGES } from '../constants';

const LiveThanks: React.FC = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="font-body text-gray-800 bg-[#FFFBF9] min-h-screen overflow-x-hidden selection:bg-primary selection:text-white flex items-center justify-center">
            
            {/* Background elements */}
            <div className="fixed inset-0 z-0">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />
            </div>

            <section className="relative z-10 w-full px-4 py-20 flex flex-col items-center">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                    className="max-w-2xl mx-auto bg-white rounded-[3rem] p-10 md:p-14 shadow-2xl border border-gray-100 text-center relative overflow-hidden"
                >
                    {/* Top decoration strip */}
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-secondary" />

                    <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                        <CheckCircle className="w-10 h-10" />
                    </div>

                    <h1 className="font-display text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6 tracking-tight">
                        Parabéns! Sua inscrição foi <span className="text-secondary italic">QUASE</span> concluída.
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed font-medium">
                        Você está a UM passo de aprender a se posicionar e se tornar a VERSÃO MAIS PRÓSPERA DE SI.
                    </p>

                    <div className="bg-primary/5 border border-primary/20 rounded-3xl p-8 mb-10 text-left space-y-6 flex flex-col items-center shadow-inner">
                        <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-2">
                            <AlertTriangle className="w-6 h-6" />
                        </div>
                        
                        <h2 className="font-bold text-xl text-gray-900 text-center">Agora você só precisa entrar no Grupo de WhatsApp!</h2>
                        
                        <ul className="space-y-4 text-gray-700 w-full max-w-md">
                            <li className="flex items-start">
                                <ArrowRight className="w-5 h-5 text-primary mr-3 shrink-0 mt-0.5" />
                                <span><strong>É muito importante que você entre no grupo</strong>, porque por lá irei enviar todas as informações, materiais e link de acesso pra nossa aula.</span>
                            </li>
                            <li className="flex items-start">
                                <ArrowRight className="w-5 h-5 text-primary mr-3 shrink-0 mt-0.5" />
                                <span><strong>Fique tranquila: o grupo é FECHADO PARA AVISO</strong> então não terão muitas mensagens enchendo o seu celular.</span>
                            </li>
                        </ul>
                    </div>

                    <motion.a
                        href="https://chat.whatsapp.com/DKKkKww2E4O4xHjIQyP84H" // Placeholder group link
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full py-6 rounded-2xl font-bold text-lg md:text-xl transition-all flex items-center justify-center space-x-3 bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl shadow-[#25D366]/30 hover:-translate-y-1 uppercase tracking-tight mx-auto max-w-md"
                    >
                        <MessageCircle className="w-7 h-7" />
                        <span>ACESSE O GRUPO E FIQUE POR DENTRO</span>
                    </motion.a>
                    
                    <p className="mt-8 text-sm text-gray-400 font-medium tracking-wide">(Não feche essa página antes de entrar no grupo)</p>
                </motion.div>
            </section>
        </div>
    );
};

export default LiveThanks;
