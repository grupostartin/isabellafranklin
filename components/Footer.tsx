import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <img
              src="/assets/images/logo.png"
              alt="MANA Terapia e Mentoria"
              className="h-10 md:h-12 w-auto mb-4 object-contain"
            />
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
              Psicologia clínica e mentoria para mulheres que buscam reencontrar sua essência e viver com mais plenitude.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-gray-200">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#sobre" className="hover:text-primary transition-colors">Sobre Mim</a></li>
              <li><a href="#servicos" className="hover:text-primary transition-colors">Serviços</a></li>
              <li><a href="#para-quem" className="hover:text-primary transition-colors">Para quem é</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-gray-200">Contato</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center group">
                <Mail className="w-4 h-4 mr-2 group-hover:text-primary transition-colors" />
                isabellafanini@hotmail.com
              </li>
              <li className="flex items-center group">
                <Phone className="w-4 h-4 mr-2 group-hover:text-primary transition-colors" />
                (31) 99062-2003
              </li>
              <li className="flex items-center group">
                <MapPin className="w-4 h-4 mr-2 group-hover:text-primary transition-colors" />
                São Paulo, SP
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2026 Isabella Franklin. Todos os direitos reservados.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;