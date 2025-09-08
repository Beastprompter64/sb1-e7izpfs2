import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { 
  Check, 
  Zap, 
  Shield, 
  Users, 
  Target, 
  ArrowRight, 
  Clock, 
  TrendingUp,
  Smartphone,
  Code,
  ChevronDown,
  ChevronUp,
  Send,
  CheckCircle,
  Sparkles
} from 'lucide-react';
import ConfettiExplosion from 'react-confetti-explosion';

// Types
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  projectType: string;
  timeline: string;
  budget: string;
  description: string;
  consent: boolean;
}

// Hero Section Component
const MobileHero: React.FC = () => {
  return (
    <section className="hero-section relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-20"
        >
          <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/90 to-white/80"></div>
      </div>
      
      <div className="relative z-10 isolate mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-black tracking-tight text-gray-900 fade-in">
            <span className="text-gradient">Votre application mobile métier,</span>
            <span className="block mt-2 md:mt-4">livrée en 30 jours.</span>
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-600 fade-in fade-in-delay-1">
            Sans recrutement. Sans friction. Externalisez en toute confiance avec notre centre de services Flutter & React Native, opérationnel dès demain.
          </p>

          <div className="mt-10 fade-in fade-in-delay-2">
            <a 
              href="#mobile-form" 
              className="hero-cta-primary inline-block rounded-md px-8 py-4 text-lg font-semibold text-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <span>📱 Je partage mon projet</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Values Section
const ValuesSection: React.FC = () => {
  const values = [
    {
      icon: Zap,
      title: "Vitesse",
      description: "Intégration immédiate et livraison ultra performante",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Shield,
      title: "Qualité", 
      description: "Code propre, sécurisé, testé et scalable",
      color: "from-green-400 to-teal-500"
    },
    {
      icon: TrendingUp,
      title: "Agilité",
      description: "Méthode agile, sprints courts, flexibilité garantie",
      color: "from-blue-400 to-indigo-500"
    },
    {
      icon: Users,
      title: "Proximité",
      description: "Collaboration fluide, alignement business & tech",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: Target,
      title: "Transparence",
      description: "Modèle clair, coûts maîtrisés, zéro surprise",
      color: "from-teal-400 to-cyan-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Nos valeurs, <span className="text-gradient">votre accélérateur produit</span>
          </h2>
          <p className="text-xl text-gray-700">
            Nos squads mobiles deviennent votre moteur de delivery :
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div 
              key={index}
              className="modern-card p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${value.color} flex items-center justify-center`}>
                <value.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Challenges vs Solutions Section
const ChallengesSolutionsSection: React.FC = () => {
  const challenges = [
    "Pénurie de développeurs mobiles spécialisés",
    "Pression forte sur votre Time-to-Market",
    "MVP et nouvelles fonctionnalités à livrer vite",
    "Besoin d'une équipe prête immédiatement",
    "Exigence de conformité, sécurité et scalabilité"
  ];

  const solutions = [
    "Centre de services mobile Flutter / React Native prêt à l'emploi",
    "Squad experte dimensionnée à vos besoins réels",
    "Starter Pack technique préintégré (CI/CD, QA, monitoring, analytics, env. dev/prod, documentation)",
    "Approche agile, transparente et orientée delivery"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-red-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Vos défis, <span className="text-gradient">notre solution</span>
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Challenges */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Ce que vous vivez aujourd'hui</h3>
            <div className="space-y-4">
              {challenges.map((challenge, index) => (
                <motion.div 
                  key={index}
                  className="bg-red-50 border border-red-200 p-4 rounded-lg flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-white text-sm">!</span>
                  </div>
                  <p className="text-red-800 font-medium">{challenge}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Solutions */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Notre réponse</h3>
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <motion.div 
                  key={index}
                  className="bg-green-50 border border-green-200 p-4 rounded-lg flex items-start"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <Check className="text-white" size={14} />
                  </div>
                  <p className="text-green-800 font-medium">{solution}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// How It Works Section
const HowItWorksSection: React.FC = () => {
  const phases = [
    {
      number: "1",
      title: "Sprint Express",
      duration: "3 à 5 jours",
      items: [
        "Cadrage intelligent (vision, objectifs, backlog priorisé)",
        "Prototype rapide validé par les utilisateurs",
        "Environnement outillé mis à disposition dès le jour 1"
      ],
      color: "from-blue-400 to-blue-600"
    },
    {
      number: "2",
      title: "Build rapide & itératif",
      duration: "30 jours",
      items: [
        "Développement agile par itérations courtes",
        "QA automatisée et monitoring qualité",
        "MVP fonctionnel livré en un mois"
      ],
      color: "from-green-400 to-green-600"
    },
    {
      number: "3",
      title: "Amélioration continue & scalabilité",
      duration: "En continu",
      items: [
        "Optimisation basée sur la data et les feedbacks réels",
        "Ajout de nouvelles fonctionnalités",
        "Déploiement progressif ou en big bang",
        "Possibilité d'extension avec squads supplémentaires"
      ],
      color: "from-purple-400 to-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Comment <span className="text-gradient">ça marche</span> ?
          </h2>
        </motion.div>
        
        <div className="space-y-12">
          {phases.map((phase, index) => (
            <motion.div 
              key={index}
              className="modern-card p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex flex-col md:flex-row items-start md:items-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${phase.color} text-white rounded-full flex items-center justify-center font-bold text-2xl mr-6 mb-4 md:mb-0 flex-shrink-0`}>
                  {phase.number}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Phase {phase.number} – {phase.title}</h3>
                  <p className="text-lg text-gray-600">({phase.duration})</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {phase.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start">
                    <Check className="text-green-500 mr-3 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Benefits Section
const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      title: "Time-to-Market accéléré",
      description: "+40% de vélocité sur vos cycles de dev",
      icon: Zap,
      stat: "+40%"
    },
    {
      title: "Zéro délai de recrutement",
      description: "Équipes prêtes dès demain",
      icon: Clock,
      stat: "24h"
    },
    {
      title: "Équipe experte et scalable",
      description: "Design, dev, QA, devops, tout en un",
      icon: Users,
      stat: "360°"
    },
    {
      title: "Maîtrise et transparence des coûts",
      description: "Pas de surprises ni retards cachés",
      icon: Target,
      stat: "0€"
    },
    {
      title: "Livraison de qualité",
      description: "MVP fiable, sécurisé et prêt à scaler",
      icon: Shield,
      stat: "100%"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ce que <span className="text-gradient">vous y gagnez</span>
          </h2>
          <p className="text-xl text-gray-700">
            Avec notre modèle, vous bénéficiez de :
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              className="modern-card p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="gradient-icon-container w-fit mx-auto mb-4">
                <benefit.icon className="text-teal-500" size={24} />
              </div>
              <div className="text-3xl font-bold text-gradient-pulse mb-2">{benefit.stat}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Use Cases Section
const UseCasesSection: React.FC = () => {
  const useCases = [
    {
      sector: "Retail",
      title: "MVP e-commerce mobile en 30 jours",
      description: "pour accélérer la stratégie omnicanale",
      icon: "🛍️",
      color: "from-pink-400 to-rose-500"
    },
    {
      sector: "Banque/Fintech",
      title: "Application mobile sécurisée",
      description: "intégrée au SI, avec monitoring en temps réel",
      icon: "🏦",
      color: "from-blue-400 to-indigo-500"
    },
    {
      sector: "SaaS B2B",
      title: "Refonte complète d'une app React Native",
      description: "avec CI/CD préintégré et QA automatisée",
      icon: "💼",
      color: "from-green-400 to-teal-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            <span className="text-gradient">Use cases</span>
          </h2>
          <p className="text-xl text-gray-700">
            Exemples de missions récentes :
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div 
              key={index}
              className="modern-card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${useCase.color} flex items-center justify-center text-2xl`}>
                {useCase.icon}
              </div>
              <div className="text-center">
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">{useCase.sector}</h4>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Form Section
const FormSection: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const projectTypes = [
    "Application mobile native (iOS/Android)",
    "Application cross-platform (Flutter/React Native)",
    "Refonte d'application existante",
    "MVP/Prototype",
    "Application métier/interne",
    "Application grand public",
    "Autre"
  ];

  const timelines = [
    "Urgent (moins de 30 jours)",
    "Court terme (1-3 mois)",
    "Moyen terme (3-6 mois)",
    "Long terme (6+ mois)",
    "À définir"
  ];

  const budgets = [
    "< 50k€",
    "50k€ - 100k€",
    "100k€ - 200k€",
    "200k€ - 500k€",
    "> 500k€",
    "À définir"
  ];

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://arkedown.app.n8n.cloud/webhook/063e4d4c-f023-440f-b16a-7caecc3a9c27', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          source: 'Mobile Apps Landing Page'
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setShowConfetti(true);
        reset();
        
        setTimeout(() => {
          setIsSubmitted(false);
          setShowConfetti(false);
        }, 8000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="mobile-form" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            <span className="text-gradient">Lancez votre application mobile</span> dès demain !
          </h2>
          <p className="text-xl text-gray-700">
            Votre projet mobile mérite d'aller plus vite. Nous avons les squads, les outils et l'expérience pour livrer sans attendre.
          </p>
        </motion.div>
        
        <motion.div
          className="modern-card p-8 md:p-10 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {isSubmitted ? (
            <div className="text-center py-10">
              {showConfetti && (
                <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
                  <ConfettiExplosion
                    force={0.8}
                    duration={3000}
                    particleCount={150}
                    width={1600}
                    colors={['#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#ff6b6b']}
                  />
                </div>
              )}
              <div className="gradient-icon-container w-fit mx-auto mb-6">
                <CheckCircle size={48} className="text-teal-600" />
              </div>
              <h3 className="text-3xl font-bold text-gradient-pulse mb-4">
                🎉 Projet reçu avec succès !
              </h3>
              <p className="text-gray-700">
                Nous analysons votre demande et vous contactons sous 24h pour démarrer votre projet mobile.
              </p>
              <div className="mt-4 flex justify-center">
                <Sparkles className="text-yellow-500 animate-pulse" size={24} />
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    Prénom*
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    className={`modern-input w-full px-4 py-3 ${errors.firstName ? 'border-red-500' : ''}`}
                    {...register("firstName", { required: "Le prénom est requis" })}
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Nom*
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    className={`modern-input w-full px-4 py-3 ${errors.lastName ? 'border-red-500' : ''}`}
                    {...register("lastName", { required: "Le nom est requis" })}
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email professionnel*
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={`modern-input w-full px-4 py-3 ${errors.email ? 'border-red-500' : ''}`}
                    {...register("email", { 
                      required: "L'email est requis",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Adresse email invalide"
                      }
                    })}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Entreprise*
                  </label>
                  <input
                    id="company"
                    type="text"
                    className={`modern-input w-full px-4 py-3 ${errors.company ? 'border-red-500' : ''}`}
                    {...register("company", { required: "Le nom de l'entreprise est requis" })}
                  />
                  {errors.company && (
                    <p className="mt-1 text-sm text-red-600">{errors.company.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">
                    Type de projet*
                  </label>
                  <select
                    id="projectType"
                    className={`modern-input w-full px-4 py-3 ${errors.projectType ? 'border-red-500' : ''}`}
                    {...register("projectType", { required: "Le type de projet est requis" })}
                  >
                    <option value="">Sélectionnez...</option>
                    {projectTypes.map((type, index) => (
                      <option key={index} value={type}>{type}</option>
                    ))}
                  </select>
                  {errors.projectType && (
                    <p className="mt-1 text-sm text-red-600">{errors.projectType.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-1">
                    Timeline souhaitée*
                  </label>
                  <select
                    id="timeline"
                    className={`modern-input w-full px-4 py-3 ${errors.timeline ? 'border-red-500' : ''}`}
                    {...register("timeline", { required: "La timeline est requise" })}
                  >
                    <option value="">Sélectionnez...</option>
                    {timelines.map((timeline, index) => (
                      <option key={index} value={timeline}>{timeline}</option>
                    ))}
                  </select>
                  {errors.timeline && (
                    <p className="mt-1 text-sm text-red-600">{errors.timeline.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
                    Budget estimé
                  </label>
                  <select
                    id="budget"
                    className="modern-input w-full px-4 py-3"
                    {...register("budget")}
                  >
                    <option value="">Sélectionnez...</option>
                    {budgets.map((budget, index) => (
                      <option key={index} value={budget}>{budget}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  Description du projet*
                </label>
                <textarea
                  id="description"
                  rows={5}
                  placeholder="Décrivez votre projet mobile, vos objectifs, fonctionnalités clés, contraintes techniques..."
                  className={`modern-input w-full px-4 py-3 ${errors.description ? 'border-red-500' : ''}`}
                  {...register("description", { required: "La description du projet est requise" })}
                ></textarea>
                {errors.description && (
                  <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
                )}
              </div>

              <div className="mb-6">
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-teal-600 focus:ring-teal-500 mt-1"
                    {...register("consent", { required: "Le consentement est requis" })}
                  />
                  <span className="ml-2 text-sm text-gray-600">
                    J'accepte d'être contacté par Digital Factory concernant mon projet mobile. 
                    Mes données seront traitées conformément à la politique de confidentialité.*
                  </span>
                </label>
                {errors.consent && (
                  <p className="mt-1 text-sm text-red-600">{errors.consent.message}</p>
                )}
              </div>
              
              <div className="text-center">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`gradient-button inline-flex items-center justify-center ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <span>🚀 Lancer mon projet mobile maintenant</span> <Send size={18} className="ml-2" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

// Sticky CTA for Mobile
const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const threshold = window.innerHeight;
      setIsVisible(scrolled > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t border-gray-200 shadow-lg md:hidden">
      <a 
        href="#mobile-form"
        className="gradient-button w-full block text-center"
      >
        <span>📱 Je partage mon projet</span>
      </a>
    </div>
  );
};

// Main Landing Page Component
const MobileLandingPage: React.FC = () => {
  return (
    <div>
      <MobileHero />
      <ValuesSection />
      <ChallengesSolutionsSection />
      <HowItWorksSection />
      <BenefitsSection />
      <UseCasesSection />
      <FormSection />
      <StickyCTA />
    </div>
  );
};

export default MobileLandingPage;