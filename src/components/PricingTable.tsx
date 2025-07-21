import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { pricingPackages } from '../data/pricing';
import InteractivePricingCalculator from './InteractivePricingCalculator';

const PricingTable: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-white to-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Nos <span className="text-gradient">Offres</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Tarification transparente sans frais cachés. Choisissez le forfait qui correspond à vos besoins.
          </motion.p>
        </div>
        
        <InteractivePricingCalculator />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPackages.map((pkg, index) => (
            <motion.div 
              key={pkg.id}
              className={`pricing-card p-8 ${pkg.isPopular ? 'popular' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              {pkg.isPopular && (
                <div className="text-center mb-4">
                  <span className="inline-block bg-gradient-to-r from-teal-400 to-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    Le Plus Populaire
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <p className="text-gray-600 mb-4">{pkg.focus}</p>
                
                <div className="mb-4">
                  <p className="text-gray-700 font-medium">{pkg.team}</p>
                  <div className="flex items-end justify-center mt-2">
                    <span className="text-3xl font-bold text-gradient-pulse">{pkg.price}</span>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-6 mb-8">
                <ul className="space-y-3">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="flex-shrink-0 p-1 bg-teal-100 rounded-full mr-3 mt-0.5">
                        <Check size={14} className="text-teal-600" />
                      </span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <a 
                href="#contact" 
                className={`gradient-button w-full block text-center ${
                  pkg.isPopular ? 'shadow-lg' : ''
                }`}
              >
                <span>🎯 Choisir mon Pack</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingTable;