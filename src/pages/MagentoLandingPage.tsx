import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { 
  Check, 
  Zap, 
  DollarSign, 
  Users, 
  ShoppingCart, 
  Cpu, 
  ArrowRight, 
  Clock, 
  TrendingUp,
  Shield,
  Smartphone,
  Globe,
  ChevronDown,
  ChevronUp,
  ExternalLink
} from 'lucide-react';

// Types
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  websiteUrl: string;
  difficulties: string[];
  consent: boolean;
}

interface FAQItem {
  question: string;
  answer: string;
}

// Hero Section Component
const MagentoHero: React.FC = () => {
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
            <span className="text-gradient">Magento freine votre croissance ?</span>
            <span className="block mt-2 md:mt-4">Passez à une stack e-commerce 3x plus rapide</span>
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-600 fade-in fade-in-delay-1">
            Recevez un audit technique + un prototype visuel personnalisé (3 pages) pour migrer intelligemment de Magento vers une stack headless moderne, rapide et IA-ready.
          </p>

          <div className="mt-10 fade-in fade-in-delay-2">
            <a 
              href="#audit-form" 
              className="hero-cta-primary inline-block rounded-md px-8 py-4 text-lg font-semibold text-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <span>🔍 Recevoir mon audit gratuit</span>
            </a>
          </div>

          {/* Animated prototype mockup */}
        </div>
      </div>
    </section>
  );
};

// Problems Section
const ProblemsSection: React.FC = () => {
  const problems = [
    {
      icon: Zap,
      title: "Votre stack est devenue un goulet d'étranglement technique ?",
      color: "text-red-500"
    },
    {
      icon: DollarSign,
      title: "Votre site coûte 3x plus cher que vos concurrents modernes ?",
      color: "text-orange-500"
    },
    {
      icon: Users,
      title: "Vos équipes marketing sont dépendantes des développeurs ?",
      color: "text-yellow-500"
    },
    {
      icon: Cpu,
      title: "Impossible d'intégrer vos outils IA ou CRM ?",
      color: "text-purple-500"
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
            Ces problèmes <span className="text-gradient">vous parlent</span> ?
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div 
              key={index}
              className="modern-card p-6 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start">
                <div className={`gradient-icon-container mr-4 ${problem.color}`}>
                  <problem.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{problem.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Why Leave Magento Section
const WhyLeaveMagentoSection: React.FC = () => {
  const reasons = [
    {
      title: "Vitesse",
      description: "Front lent, temps de chargement pénalisant",
      icon: Clock,
      color: "from-red-400 to-red-600"
    },
    {
      title: "Coûts", 
      description: "Maintenance élevée, devs rares et chers",
      icon: DollarSign,
      color: "from-orange-400 to-orange-600"
    },
    {
      title: "UX",
      description: "Expérience datée, peu personnalisable", 
      icon: Smartphone,
      color: "from-yellow-400 to-yellow-600"
    },
    {
      title: "IA",
      description: "Architecture fermée, intégrations complexes",
      icon: Cpu,
      color: "from-purple-400 to-purple-600"
    }
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
            Pourquoi quitter <span className="text-gradient">Magento</span> ?
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div 
              key={index}
              className="modern-card p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${reason.color} flex items-center justify-center`}>
                <reason.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Modern Stack Section
const ModernStackSection: React.FC = () => {
  const technologies = [
    "Next.js", "Node.js", "PHP", "Laravel", "Symfony", "Python", "Strapi", "Aimeos", "Sylius", "Saleor"
  ];

  const features = [
    {
      title: "Front ultra-rapide",
      description: "Performance optimisée, SEO natif",
      icon: Zap
    },
    {
      title: "CMS headless",
      description: "Flexibilité totale, API-first",
      icon: Globe
    },
    {
      title: "Modules IA",
      description: "SEO, recherche intelligente, recommandations",
      icon: Cpu
    },
    {
      title: "Architecture moderne",
      description: "API-first, évolutive, scalable",
      icon: Shield
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-green-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ce qu'on implémente <span className="text-gradient">pour vous</span>
          </h2>
          <p className="text-xl text-gray-700">Une stack moderne headless & IA-ready</p>
        </motion.div>
        
        {/* Technologies */}
        <div className="mb-16">
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                className="px-4 py-2 bg-white rounded-full border border-green-200 text-gray-700 font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, backgroundColor: "#f0fdf4" }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="modern-card p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="gradient-icon-container w-fit mx-auto mb-4">
                <feature.icon className="text-green-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Benefits Section with Animated Counters
const BenefitsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const benefits = [
    { value: 3, suffix: "x", label: "plus rapide à développer", color: "from-green-400 to-green-600" },
    { value: 50, suffix: "%", label: "de coûts en moins sur 2-3 ans", color: "from-blue-400 to-blue-600" },
    { value: 48, suffix: "h", label: "pour lancer une campagne marketing par une team alléger", color: "from-purple-400 to-purple-600" }
  ];

  const AnimatedCounter: React.FC<{ value: number; suffix: string; isVisible: boolean }> = ({ value, suffix, isVisible }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (isVisible) {
        const timer = setInterval(() => {
          setCount(prev => {
            if (prev < value) {
              return prev + 1;
            }
            clearInterval(timer);
            return value;
          });
        }, 50);
        return () => clearInterval(timer);
      }
    }, [isVisible, value]);

    return <span>{count}{suffix}</span>;
  };

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
            Bénéfices <span className="text-gradient">directs</span>
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              className="modern-card p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: 0.5, 
                  delay: index * 0.1,
                  onComplete: () => setIsVisible(true)
                }
              }}
              viewport={{ once: true }}
            >
              <div className={`text-5xl font-bold bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent mb-4`}>
                <AnimatedCounter value={benefit.value} suffix={benefit.suffix} isVisible={isVisible} />
              </div>
              <p className="text-gray-700 font-medium">{benefit.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Audit Offer Section
const AuditOfferSection: React.FC = () => {
  const auditItems = [
    {
      icon: "⚙️",
      title: "Audit technique",
      description: "Performance, sécurité, dette, hébergement..."
    },
    {
      icon: "🧠", 
      title: "Audit coût & exploitation",
      description: "Modules, hébergement, maintenance..."
    },
    {
      icon: "🧱",
      title: "Comparatif de stack",
      description: "Élaboration du plan de migration"
    },
    {
      icon: "🚀",
      title: "Prototype visuel personnalisé",
      description: "Accueil, fiche produit, panier..."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            <span className="text-gradient">L'offre</span> : Audit Magento + Prototype personnalisé
          </h2>
          <p className="text-xl text-gray-700">
            Une vision claire, des recommandations actionnables, et un prototype concret : le meilleur moyen de décider sans vous engager.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {auditItems.map((item, index) => (
            <motion.div 
              key={index}
              className="modern-card p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="modern-card p-6 inline-block">
            <p className="text-lg font-medium text-gray-900 mb-2">📝 Livrables & Recommandations</p>
            <p className="text-gray-600">Document complet avec plan d'action personnalisé</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Client References Section
const ClientReferencesSection: React.FC = () => {
  const references = [
    { name: "Hertz Madagascar", url: "https://hertz.mg/fr" },
    { name: "Club Auto MAIF", url: "https://www.clubauto-maif.com/" },
    { name: "Fraikin", url: "https://www.fraikin.fr/fr" },
    { name: "Smallable", url: "https://www.smallable.com/fr" },
    { name: "Mademoiselle D", url: "https://mademoiselled.fr/" }
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
            Voir un exemple - <span className="text-gradient">références clients</span>
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {references.map((ref, index) => (
            <motion.a
              key={index}
              href={ref.url}
              target="_blank"
              rel="noopener noreferrer"
              className="modern-card p-6 text-center hover:shadow-lg transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                {ref.name}
              </h3>
              <div className="flex items-center justify-center text-gray-500 group-hover:text-green-600 transition-colors">
                <ExternalLink size={16} className="mr-2" />
                <span className="text-sm">Voir le site</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials Section
const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "On est passés de 6 semaines à 48h pour lancer une campagne marketing. La nouvelle stack a libéré toute notre équipe.",
      author: "Responsable e-commerce, secteur mode",
      highlight: "6 semaines → 48h"
    },
    {
      quote: "Grâce à l'audit, on a identifié plus de 30k€ d'économies annuelles. La stack headless nous a fait gagner en performance et en ROI.",
      author: "DSI, groupe retail multi-marques", 
      highlight: "30k€ d'économies"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-green-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ce que disent <span className="text-gradient">nos clients</span>
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="modern-card p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="mb-6">
                <div className="text-4xl text-green-600 mb-4">"</div>
                <p className="text-lg text-gray-700 italic mb-4">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mr-4">
                    <Users className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-green-600 font-medium">{testimonial.highlight}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// FAQ Section
const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "Est-ce que je peux migrer sans tout refaire ?",
      answer: "Oui, nous proposons une migration progressive qui préserve vos données et permet une transition en douceur. Nous analysons votre existant pour identifier ce qui peut être conservé et optimisé."
    },
    {
      question: "Est-ce que ça fonctionne en B2B ?",
      answer: "Absolument. Nos solutions headless sont particulièrement adaptées au B2B avec des fonctionnalités avancées comme les catalogues personnalisés, la gestion des comptes clients, et l'intégration ERP/CRM."
    },
    {
      question: "Combien de temps dure la migration ?",
      answer: "Selon la complexité, entre 2 à 6 mois. L'audit gratuit nous permet d'établir un planning précis adapté à votre situation et vos contraintes business."
    },
    {
      question: "Quelles sont les stacks recommandées ?",
      answer: "Nous recommandons des solutions comme Next.js + Strapi, Laravel + Vue.js, ou Symfony + React selon vos besoins. Chaque stack est choisie en fonction de vos contraintes techniques et business."
    },
    {
      question: "Peut-on tester avant de se lancer ?",
      answer: "C'est exactement l'objectif de notre audit gratuit ! Vous recevez un prototype fonctionnel et des recommandations détaillées pour évaluer la solution avant tout engagement."
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
            Questions <span className="text-gradient">fréquentes</span>
          </h2>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              className="modern-card mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                className="w-full p-6 text-left flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="text-green-600 flex-shrink-0" size={20} />
                ) : (
                  <ChevronDown className="text-gray-400 flex-shrink-0" size={20} />
                )}
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6"
                >
                  <p className="text-gray-700">{faq.answer}</p>
                </motion.div>
              )}
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

  const difficulties = [
    "Performance lente",
    "Coûts de maintenance élevés",
    "Difficultés d'intégration",
    "Expérience utilisateur datée",
    "Problèmes de sécurité",
    "Manque de flexibilité"
  ];

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://arkedown.app.n8n.cloud/webhook/f9bba934-ed29-4308-bde4-e6bba501b0d9', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          source: 'Magento Landing Page',
          difficulties: data.difficulties.join(', ')
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        reset();
        
        setTimeout(() => {
          setIsSubmitted(false);
        }, 8000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="audit-form" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            <span className="text-gradient">Demandez</span> votre audit gratuit
          </h2>
          <p className="text-xl text-gray-700">
            Recevez votre audit personnalisé et votre prototype en moins de 72h
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
              <div className="gradient-icon-container w-fit mx-auto mb-6">
                <Check size={48} className="text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gradient-pulse mb-4">
                🎉 Demande envoyée avec succès !
              </h3>
              <p className="text-gray-700">
                Nous vous contactons sous 24h pour planifier votre audit personnalisé.
              </p>
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
                  <label htmlFor="websiteUrl" className="block text-sm font-medium text-gray-700 mb-1">
                    URL du site Magento*
                  </label>
                  <input
                    id="websiteUrl"
                    type="url"
                    placeholder="https://votre-site.com"
                    className={`modern-input w-full px-4 py-3 ${errors.websiteUrl ? 'border-red-500' : ''}`}
                    {...register("websiteUrl", { required: "L'URL du site est requise" })}
                  />
                  {errors.websiteUrl && (
                    <p className="mt-1 text-sm text-red-600">{errors.websiteUrl.message}</p>
                  )}
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Difficultés rencontrées (plusieurs choix possibles)
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {difficulties.map((difficulty, index) => (
                    <label key={index} className="flex items-center">
                      <input
                        type="checkbox"
                        value={difficulty}
                        className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                        {...register("difficulties")}
                      />
                      <span className="ml-2 text-gray-700">{difficulty}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-green-600 focus:ring-green-500 mt-1"
                    {...register("consent", { required: "Le consentement est requis" })}
                  />
                  <span className="ml-2 text-sm text-gray-600">
                    J'accepte d'être contacté par Digital Factory concernant cette demande d'audit. 
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
                    <span>🚀 Demander mon audit gratuit maintenant</span>
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
        href="#audit-form"
        className="gradient-button w-full block text-center"
      >
        <span>🔍 Demander mon audit gratuit</span>
      </a>
    </div>
  );
};

// Main Landing Page Component
const MagentoLandingPage: React.FC = () => {
  return (
    <div>
      <MagentoHero />
      <ProblemsSection />
      <WhyLeaveMagentoSection />
      <ModernStackSection />
      <BenefitsSection />
      <AuditOfferSection />
      <ClientReferencesSection />
      <TestimonialsSection />
      <FAQSection />
      <FormSection />
      <StickyCTA />
    </div>
  );
};

export default MagentoLandingPage;