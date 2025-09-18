import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { 
  Check, 
  X, 
  Shield, 
  Clock, 
  Eye, 
  TrendingUp,
  Users,
  AlertTriangle,
  Zap,
  Target,
  Send,
  CheckCircle,
  Sparkles,
  Server,
  Lock,
  BarChart3,
  Globe,
  Cpu
} from 'lucide-react';
import ConfettiExplosion from 'react-confetti-explosion';

// Custom styles for the SmartOps page
const SmartOpsStyles = () => (
  <style>{`
    .challenge-title-gradient {
      background: linear-gradient(135deg, #a0c801, #2fa8cf);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      color: transparent;
    }
    
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      25% { transform: translateX(-2px); }
      75% { transform: translateX(2px); }
    }
    
    .animate-shake {
      animation: shake 0.5s ease-in-out;
    }
  `}</style>
);

// Types
interface FormData {
  firstName: string;
  lastName: string;
  company: string;
  position: string;
  email: string;
  consent: boolean;
}

// Hero Section Component
const SmartOpsHero: React.FC = () => {
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
            <span className="text-gradient">Vos opérations IT critiques, disponibles</span>
            <span className="block mt-2 md:mt-4">
              <span className="inline-block bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-lg font-mono font-bold text-6xl md:text-7xl lg:text-8xl shadow-lg transform -rotate-2 hover:rotate-0 transition-transform duration-300 tracking-wider">24/7</span>
            </span>
            <span className="block mt-2 md:mt-4">Sans stress. Sans friction.</span>
          </h1>

          <p className="mt-6 max-w-4xl mx-auto text-lg md:text-xl text-gray-600 fade-in fade-in-delay-1">
            eTech Consulting, votre centre de services nouvelle génération : supervision multi-niveaux, cybersécurité managée et automatisation par l'IA. Flexible, transparent et optimisé pour vos enjeux critiques.
          </p>

          <div className="mt-10 flex justify-center items-center gap-4 flex-wrap fade-in fade-in-delay-2">
            <a 
              href="#smartops-form" 
              className="hero-cta-primary inline-block rounded-md px-8 py-4 text-lg font-semibold text-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <span>🔍 Recevoir mon diagnostic gratuit</span>
            </a>
            
            <a 
              href="#smartops-form" 
              className="bg-white hover:bg-gray-50 text-gray-900 font-semibold py-4 px-8 rounded-md shadow-md border border-gray-200 transition-colors duration-200 inline-block text-center"
            >
              <span>💼 Demander un devis gratuit</span>
            </a>
          </div>

          <p className="mt-4 text-sm text-gray-500 fade-in fade-in-delay-3">
            Évaluation rapide, personnalisée et sans engagement.
          </p>
        </div>
      </div>
    </section>
  );
};

// Challenges Section
const ChallengesSection: React.FC = () => {
  const challenges = [
    {
      title: "Équipes internes débordées et sous-staffées",
      description: "Vos ressources IT ne suffisent plus pour absorber la charge croissante."
    },
    {
      title: "Incidents hors horaires non traités",
      description: "Les pannes la nuit ou le week-end mettent en péril vos opérations."
    },
    {
      title: "Infogérance locale trop chère et peu flexible",
      description: "Un modèle rigide et coûteux qui bride votre agilité."
    },
    {
      title: "Pression croissante sur la cybersécurité et la conformité",
      description: "Des menaces plus fréquentes et des règles plus strictes."
    },
    {
      title: "Trop peu d'automatisation",
      description: "La multiplication des tickets manuels ralentit vos équipes."
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
            Les défis auxquels <span className="text-gradient">vous faites face</span>
          </h2>
          <p className="text-xl mb-8" style={{ color: '#555' }}>
            Les DSI, CTO et RSSI nous confient souvent les mêmes problématiques :
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {challenges.map((challenge, index) => (
            <motion.div 
              key={index}
              className="group bg-red-50 border border-red-200 p-6 rounded-lg flex items-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover:animate-shake" style={{ backgroundColor: '#e74c3c' }}>
                <X className="text-white" size={16} />
              </div>
              <div>
                <h3 className="text-red-800 font-bold text-lg mb-2">{challenge.title}</h3>
                <p className="text-red-700">{challenge.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <span className="text-lg italic text-gray-700">
            Ces obstacles ralentissent vos projets et fragilisent vos opérations critiques.
          </span>
        </motion.p>
      </div>
    </section>
  );
};

// SmartOps Solution Section
const SmartOpsSolutionSection: React.FC = () => {
  const solutions = [
    {
      icon: Eye,
      title: "Supervision unifiée et proactive",
      description: "Infra, applicatif, réseau et sécurité, tout piloté dans un seul cockpit",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Clock,
      title: "Disponibilité garantie",
      description: "Couverture HO, HNO et 24/7 grâce à nos équipes en rotation",
      color: "from-green-400 to-green-600"
    },
    {
      icon: Shield,
      title: "Cybersécurité augmentée par l'IA",
      description: "SOC managé, détection proactive et tableaux de bord clairs",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: BarChart3,
      title: "Pilotage transparent",
      description: "SLA clairs, reporting continu, visibilité complète",
      color: "from-teal-400 to-teal-600"
    },
    {
      icon: TrendingUp,
      title: "Flexibilité et ROI",
      description: "Modèle hybride/offshore optimisé, jusqu'à -30% de coûts opérationnels",
      color: "from-orange-400 to-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            La réponse - offre <span className="text-gradient">"SmartOps"</span>
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Avec eTech Consulting, vos opérations deviennent un atout stratégique au lieu d'être une contrainte.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div 
              key={index}
              className="modern-card p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${solution.color} flex items-center justify-center`}>
                <solution.icon className="text-white" size={24} />
              </div>
              <div className="flex items-center justify-center mb-2">
                <Check className="text-green-500 mr-2" size={20} />
                <h3 className="text-lg font-bold text-gray-900">{solution.title}</h3>
              </div>
              <p className="text-gray-600">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Trust & Use Cases Section
const TrustUseCasesSection: React.FC = () => {
  const testimonials = [
    {
      quote: "Avec eTech Consulting, nous avons gagné +25% de disponibilité applicative tout en réduisant nos coûts d'exploitation. Leur pilotage 24/7 est devenu essentiel.",
      author: "DSI – Groupe Santé",
      highlight: "+25% de disponibilité"
    },
    {
      quote: "Nous avions besoin d'une couverture HNO fiable pour nos opérations internationales. eTech Consulting a mis en place une équipe dédiée qui nous accompagne désormais au quotidien.",
      author: "CTO – ETI Industrie",
      highlight: "Couverture HNO fiable"
    },
    {
      quote: "Nous travaillons depuis 3 ans avec eTech à qui nous avons confié notre supervision et monitoring 24/7 sur un périmètre large. Une équipe réactive, qui respecte les consignes, avec un suivi commercial précis et des SLA clairs.",
      author: "CISO/CTO – Pure Player Multi-Cloud",
      highlight: "3 ans de collaboration"
    }
  ];

  const partners = [
    { name: "Google Cloud", logo: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=100&h=60&fit=crop" },
    { name: "Microsoft", logo: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=100&h=60&fit=crop" },
    { name: "AWS", logo: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=100&h=60&fit=crop" },
    { name: "Azure", logo: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=100&h=60&fit=crop" },
    { name: "VMware", logo: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=100&h=60&fit=crop" }
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
            Ils nous font <span className="text-gradient">confiance</span>
          </h2>
          <p className="text-xl text-gray-700">
            Depuis plus de 10 ans, nous accompagnons ETI et grands comptes avec des solutions sur-mesure et des partenaires technologiques de premier plan.
          </p>
        </motion.div>
        
        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="modern-card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="mb-4">
                <div className="text-3xl text-blue-600 mb-3">"</div>
                <p className="text-gray-700 italic mb-4">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mr-3">
                    <Users className="text-white" size={16} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{testimonial.author}</p>
                    <p className="text-xs text-blue-600 font-medium">{testimonial.highlight}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partners */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Partenaires stratégiques</h3>
          <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
            Parce que vos opérations critiques exigent sérieux et conformité, l'équipe s'appuie sur des partenaires technologiques de premier plan et respecte les standards les plus exigeants du marché.
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                className="modern-card p-4 w-32 h-20 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-gray-600 font-medium text-sm">{partner.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Urgency Section
const UrgencySection: React.FC = () => {
  const stats = [
    { value: "+40%", label: "d'attaques cyber recensées depuis 2023", icon: AlertTriangle },
    { value: "60%", label: "des incidents surviennent la nuit ou le week-end", icon: Clock },
    { value: "70%", label: "des ETI déclarent manquer de ressources internes pour tenir leurs SLA", icon: Users }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Pourquoi agir <span className="text-gradient">maintenant</span>
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Le contexte IT rend l'inaction risquée :
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="modern-card p-6 text-center bg-white border-orange-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="gradient-icon-container w-fit mx-auto mb-4">
                <stat.icon className="text-orange-600" size={24} />
              </div>
              <div className="text-3xl font-bold text-gradient-pulse mb-2">{stat.value}</div>
              <p className="text-gray-700 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="modern-card p-6 inline-block bg-gradient-to-r from-orange-100 to-red-100 border-orange-300">
            <p className="text-xl font-bold text-orange-800">
              🚨 Vos opérations critiques n'attendent pas : sécurisez-les dès aujourd'hui.
            </p>
          </div>
        </motion.div>
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
          source: 'SmartOps Landing Page'
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
    <section id="smartops-form" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            <span className="text-gradient">Passez à l'action</span>
          </h2>
          <p className="text-xl text-gray-700">
            Évaluez la maturité de vos opérations IT avec notre diagnostic gratuit.
          </p>
          <p className="text-lg text-gray-600 mt-4">
            En quelques questions clés, identifiez vos points forts, vos zones de risque et vos leviers d'optimisation immédiats.
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
                🎉 Demande envoyée avec succès !
              </h3>
              <p className="text-gray-700">
                Nous vous contactons sous 24h pour planifier votre diagnostic personnalisé.
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
                
                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
                    Fonction*
                  </label>
                  <input
                    id="position"
                    type="text"
                    placeholder="DSI, CTO, RSSI..."
                    className={`modern-input w-full px-4 py-3 ${errors.position ? 'border-red-500' : ''}`}
                    {...register("position", { required: "La fonction est requise" })}
                  />
                  {errors.position && (
                    <p className="mt-1 text-sm text-red-600">{errors.position.message}</p>
                  )}
                </div>
              </div>

              <div className="mb-6">
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

              <div className="mb-6">
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 mt-1"
                    {...register("consent", { required: "Le consentement est requis" })}
                  />
                  <span className="ml-2 text-sm text-gray-600">
                    J'accepte d'être contacté par eTech Consulting concernant cette demande de diagnostic. 
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
                      <span>🔍 Recevoir mon diagnostic gratuit</span> <Send size={18} className="ml-2" />
                    </>
                  )}
                </button>
                
                <p className="text-center mt-4 text-sm text-gray-600">
                  Déjà utilisé par plusieurs DSI et CTO en France et à l'international.
                </p>
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
        href="#smartops-form"
        className="gradient-button w-full block text-center"
      >
        <span>🔍 Recevoir mon diagnostic gratuit</span>
      </a>
    </div>
  );
};

// Main Landing Page Component
const SmartOpsLandingPage: React.FC = () => {
  return (
    <div>
      <SmartOpsStyles />
      <SmartOpsHero />
      <ChallengesSection />
      <SmartOpsSolutionSection />
      <TrustUseCasesSection />
      <UrgencySection />
      <FormSection />
      <StickyCTA />
    </div>
  );
};

export default SmartOpsLandingPage;