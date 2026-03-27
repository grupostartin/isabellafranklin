import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { Download, LayoutDashboard, LogOut, RefreshCcw, Search, Table, Users } from 'lucide-react';
import { motion } from 'framer-motion';

interface Registration {
    id: string;
    name: string;
    email: string;
    phone: string;
    created_at: string;
}

const IsaAdmin: React.FC = () => {
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loginError, setLoginError] = useState('');
    const [registrations, setRegistrations] = useState<Registration[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === ADMIN_PASSWORD) {
            setIsAuthenticated(true);
            setLoginError('');
            fetchRegistrations();
        } else {
            setLoginError('Senha incorreta! Tente novamente.');
        }
    };

    const fetchRegistrations = async () => {
        setIsLoading(true);
        try {
            const { data, error } = await supabase
                .from('live_registrations')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;
            setRegistrations(data || []);
        } catch (err) {
            console.error('Erro ao buscar dados:', err);
        } finally {
            setIsLoading(false);
        }
    };

    const filteredRegistrations = registrations.filter(reg => 
        reg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        reg.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        reg.phone.includes(searchTerm)
    );

    const exportToCSV = () => {
        const headers = ['Nome', 'Email', 'Telefone', 'Data'];
        const csvRows = [
            headers.join(','),
            ...registrations.map(reg => [
                `"${reg.name}"`,
                `"${reg.email}"`,
                `"${reg.phone}"`,
                `"${new Date(reg.created_at).toLocaleString('pt-BR')}"`
            ].join(','))
        ];
        
        const blob = new Blob([csvRows.join('\n')], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', `inscricoes_live_${new Date().toLocaleDateString()}.csv`);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-[#1A0F0D] flex items-center justify-center p-4">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full max-w-md bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl"
                >
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-primary/20 text-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <LayoutDashboard size={32} />
                        </div>
                        <h1 className="text-2xl font-bold text-white">Administração Isa</h1>
                        <p className="text-white/40">Digite a senha para continuar</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Sua senha secreta"
                                className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white outline-none focus:border-primary"
                            />
                        </div>
                        {loginError && <p className="text-red-400 text-sm text-center">{loginError}</p>}
                        <button
                            type="submit"
                            className="w-full bg-primary hover:bg-[#E35F4B] text-white font-bold py-4 rounded-xl transition-all"
                        >
                            Acessar Painel
                        </button>
                    </form>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#FDF8F6] text-gray-800 p-4 md:p-8">
            <div className="max-w-6xl mx-auto">
                <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Dashboard de Inscritos</h1>
                        <p className="text-gray-500">Monitoramento em tempo real da Live</p>
                    </div>
                    
                    <div className="flex items-center gap-3">
                        <button 
                            onClick={exportToCSV}
                            className="flex items-center gap-2 bg-secondary/10 text-secondary hover:bg-secondary/20 px-4 py-2.5 rounded-xl font-bold transition-all"
                        >
                            <Download size={20} />
                            Exportar CSV
                        </button>
                        <button 
                            onClick={() => setIsAuthenticated(false)}
                            className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-600 px-4 py-2.5 rounded-xl font-bold transition-all"
                        >
                            <LogOut size={20} />
                            Sair
                        </button>
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <div className="flex items-center gap-4">
                             <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-xl flex items-center justify-center">
                                <Users size={24} />
                             </div>
                             <div>
                                <p className="text-gray-500 text-sm">Total de Inscritos</p>
                                <h2 className="text-2xl font-bold">{registrations.length}</h2>
                             </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100 overflow-hidden">
                    <div className="p-6 border-b border-gray-50 flex flex-col md:flex-row gap-4 items-center justify-between">
                        <div className="relative w-full md:w-96">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Pesquisar por nome, e-mail ou telefone..."
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-11 pr-4 py-3 outline-none focus:border-primary transition-all"
                            />
                        </div>
                        <button 
                            onClick={fetchRegistrations}
                            className="p-3 bg-gray-50 hover:bg-gray-100 text-gray-500 rounded-xl flex items-center gap-2 transition-all"
                            disabled={isLoading}
                        >
                            <RefreshCcw className={isLoading ? 'animate-spin' : ''} size={20} />
                            {isLoading ? 'Atualizando...' : 'Atualizar'}
                        </button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-gray-50 text-gray-500 text-sm uppercase tracking-wider">
                                    <th className="px-6 py-4 font-semibold">Nome</th>
                                    <th className="px-6 py-4 font-semibold">Contato</th>
                                    <th className="px-6 py-4 font-semibold">Data da Inscrição</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {isLoading ? (
                                    <tr>
                                        <td colSpan={3} className="px-6 py-10 text-center text-gray-400">Carregando dados...</td>
                                    </tr>
                                ) : filteredRegistrations.length === 0 ? (
                                    <tr>
                                        <td colSpan={3} className="px-6 py-10 text-center text-gray-400">Nenhum inscrito encontrado.</td>
                                    </tr>
                                ) : (
                                    filteredRegistrations.map((reg) => (
                                        <tr key={reg.id} className="hover:bg-gray-50/50 transition-colors">
                                            <td className="px-6 py-4 font-medium text-gray-900">{reg.name}</td>
                                            <td className="px-6 py-4">
                                                <div className="text-gray-900">{reg.email}</div>
                                                <div className="text-sm text-gray-500">{reg.phone}</div>
                                            </td>
                                            <td className="px-6 py-4 text-gray-500">
                                                {new Date(reg.created_at).toLocaleString('pt-BR', {
                                                    day: '2-digit',
                                                    month: '2-digit',
                                                    year: 'numeric',
                                                    hour: '2-digit',
                                                    minute: '2-digit'
                                                })}
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IsaAdmin;
