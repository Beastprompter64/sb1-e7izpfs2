import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, CpuIcon } from 'lucide-react';

const ValueProposition: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100" id="value-proposition">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Livrez <span className="text-gradient-pulse">Mieux</span>. Livrez <span className="text-gradient-pulse">Plus Vite</span>.
          </h2>
          <p className="text-xl text-gray-700">
            Nos équipes offshore intégrées à l'IA améliorent naturellement votre flux de travail agile, apportant l'expertise dont vous avez besoin sans la charge d'agrandir vos équipes internes.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            className="modern-card p-8 text-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -5 }}
          >
            <div className="gradient-icon-container w-fit mx-auto mb-6">
              <CpuIcon className="text-teal-500" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Accélération par l'IA</h3>
            <p className="text-gray-700">
              Nos outils d'IA propriétaires optimisent la qualité du code, automatisent les tâches répétitives et accélèrent votre cycle de développement jusqu'à 40%.
            </p>
          </motion.div>
          
          <motion.div 
            className="modern-card p-8 text-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -5 }}
          >
            <div className="gradient-icon-container w-fit mx-auto mb-6">
              <Zap className="text-blue-500" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Intégration Agile</h3>
            <p className="text-gray-700">
              Nos équipes s'intègrent parfaitement dans vos flux de travail existants avec une transparence totale et une communication quotidienne dans votre langue.
            </p>
          </motion.div>
          
          <motion.div 
            className="modern-card p-8 text-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.4 }}
            whileHover={{ y: -5 }}
          >
            <div className="gradient-icon-container w-fit mx-auto mb-6">
              <ShieldCheck className="text-emerald-500" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Montée en Charge Sans Risque</h3>
            <p className="text-gray-700">
              Commencez par un sprint d'essai de 5 jours et ajustez la taille de votre équipe selon vos besoins, avec une tarification transparente et sans engagement à long terme.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;