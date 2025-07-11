import React from 'react';
import { motion } from 'framer-motion';

const companyLogos = [
  {
    id: 1,
    name: "Total Energies",
    logo: "https://images2.imgbox.com/0d/cf/SV31WCrC_o.png"
  },
  {
    id: 2,
    name: "Renault",
    logo: "https://images2.imgbox.com/24/c7/JLLhEJxI_o.png"
  },
  {
    id: 3,
    name: "Petit Forestier",
    logo: "https://images2.imgbox.com/9c/1e/7lQoiUmD_o.png"
  },
  {
    id: 4,
    name: "Illicado",
    logo: "https://images2.imgbox.com/a2/62/7yuNGYWh_o.png"
  },
  {
    id: 5,
    name: "Saint Gobain",
    logo: "https://images2.imgbox.com/32/4d/BPiUa9lI_o.png"
  },
  {
    id: 6,
    name: "Smallable",
    logo: "https://images2.imgbox.com/cc/06/DXdujOUm_o.png"
  },
  {
    id: 7,
    name: "Ardian",
    logo: "https://images2.imgbox.com/08/69/4Ubfxi6C_o.png"
  },
  {
    id: 8,
    name: "Agronutrition",
    logo: "https://images2.imgbox.com/f8/d1/f2g3fXze_o.png"
  }
];

const ClientReferences: React.FC = () => {
  // Duplicate the logos array for seamless infinite scroll
  const duplicatedLogos = [...companyLogos, ...companyLogos];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ils nous font <span className="text-gradient">confiance</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Des startups aux entreprises établies, découvrez les organisations qui accélèrent leur développement avec nous
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-slate-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
          
          {/* Sliding logos container */}
          <div className="flex overflow-hidden">
            <motion.div
              className="flex space-x-12 items-center"
              animate={{
                x: [0, -(240 * companyLogos.length)]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 26,
                  ease: "linear",
                },
              }}
              style={{ width: `${240 * duplicatedLogos.length}px` }}
            >
              {duplicatedLogos.map((company, index) => (
                <div
                  key={`${company.id}-${index}`}
                  className="flex-shrink-0 w-48 h-24 flex items-center justify-center"
                >
                  <div className="modern-card p-4 w-full h-full flex items-center justify-center hover:scale-105 transition-transform duration-300 hover:shadow-lg">
                    <img
                      src={company.logo}
                      alt={`${company.name} logo`}
                      className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gradient-pulse mb-2">650+</div>
            <p className="text-gray-600">Projets livrés</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gradient-pulse mb-2">70</div>
            <p className="text-gray-600">Net promoter score</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gradient-pulse mb-2">40+</div>
            <p className="text-gray-600">Technologies maîtrisées</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientReferences;