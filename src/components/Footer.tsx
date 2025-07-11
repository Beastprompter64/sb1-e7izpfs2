import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <span className="text-primary-300 font-bold text-2xl mr-1">DIGITAL</span>
              <span className="text-secondary-400 font-bold text-2xl">FACTORY</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Améliorez vos équipes agiles avec le développement offshore propulsé par l'IA. Nous livrons mieux et plus rapidement sans agrandir vos équipes internes.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail size={18} className="text-primary-300 mr-3 mt-1 flex-shrink-0" />
                <a href="mailto:contact@digitalfactory.tech" className="text-gray-400 hover:text-white transition-colors">
                  l.rakotoarison@etechconsulting-mg.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="text-primary-300 mr-3 mt-1 flex-shrink-0" />
                <a href="tel:+33123456789" className="text-gray-400 hover:text-white transition-colors">
                  +33 7 57 94 00 30
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="text-primary-300 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">Antananarivo, Madagascar</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">
                  Tarifs
                </a>
              </li>
              <li>
                <a href="#trial" className="text-gray-400 hover:text-white transition-colors">
                  Offre d'Essai
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-500">
            &copy; {currentYear} Digital Factory. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;