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
            Voici comment nous tenons nos propos
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            <span className="text-gradient-pulse">Et pourquoi nos concurrents ne peuvent pas</span>
          </h3>
          <p className="text-xl text-gray-700">
            Découvrez les trois piliers qui nous différencient de toutes les autres ESN et agences de développement.
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
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Notre IA propriétaire</h3>
            <p className="text-gray-700">
              Là où les autres ESN vous vendent juste des humains, nous avons bâti une IA qui accélère le cycle de dev de 40%. Concrètement : moins de bugs, des livraisons plus rapides et un code de meilleure qualité.
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
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Une équipe autonome, pas un fardeau</h3>
            <p className="text-gray-700">
              Oubliez le micro-management. Nos squads s'intègrent en mode 'plug & play' dans vos outils (Slack, Jira, Teams). Un rapport simple chaque jour. Zéro charge administrative pour vous. Vous vous concentrez sur votre produit, pas sur la gestion de projet.
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
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Testez-nous gratuitement. Zéro risque.</h3>
            <p className="text-gray-700">
              On prend tous les risques. Commencez avec un sprint d'essai de 5 jours sur une de vos fonctionnalités. Si le résultat ne vous bluffe pas, vous ne payez rien et vous gardez le code. C'est aussi simple que ça.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;