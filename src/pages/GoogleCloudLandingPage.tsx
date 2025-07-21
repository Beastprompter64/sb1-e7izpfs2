import React from 'react';
import { motion } from 'framer-motion';
import { Check, Cloud, Zap, Shield, Users, Target, ArrowRight } from 'lucide-react';
import ClientReferences from '../components/ClientReferences';
import ContactForm from '../components/ContactForm';

const GoogleCloudHero: React.FC = () => {
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
            <span className="text-gradient">Externalisez vos projets Google Cloud</span>
            <span className="block mt-2 md:mt-4">Sans recruter !</span>
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-600 fade-in fade-in-delay-1">
            Notre centre de services GCP externalisé vous met à disposition une squad IA-augmentée en moins de 10 jours.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto fade-in fade-in-delay-2">
            <div className="flex items-center justify-center md:justify-start">
              <Check className="text-teal-500 mr-3 flex-shrink-0" size={24} />
              <span className="text-gray-700 font-medium">Profils certifiés Google Cloud Platform & Vertex AI</span>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <Check className="text-teal-500 mr-3 flex-shrink-0" size={24} />
              <span className="text-gray-700 font-medium">Delivery en marque blanche ou co-delivery</span>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <Check className="text-teal-500 mr-3 flex-shrink-0" size={24} />
              <span className="text-gray-700 font-medium">Marges optimisées pour partenaires & intégrateurs Google</span>
            </div>
          </div>

          <div className="mt-10 fade-in fade-in-delay-3">
            <a 
              href="https://calendly.com/digitalfactory-etechconsulting-mg-com-gtempaccount/30min" 
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta-primary inline-block rounded-md px-8 py-4 text-lg font-semibold text-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <span>🔍 Planifier un audit gratuit de vos besoins</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProblemSection: React.FC = () => {
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
            Trop de projets <span className="text-gradient">GCP</span>, pas assez de ressources ?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Vos clients veulent du Vertex AI, du CI/CD sur Kubernetes, du BigQuery, du Duet AI, mais vos équipes sont saturées ou incomplètes.
          </p>
          
          <div className="text-left">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Vous cherchez ?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div 
                className="modern-card p-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="flex items-start">
                  <div className="gradient-icon-container mr-4">
                    <Users className="text-teal-500" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Une squad GCP externalisée, prête à l'emploi</h4>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="modern-card p-6"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-start">
                  <div className="gradient-icon-container mr-4">
                    <Zap className="text-blue-500" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Une montée en charge rapide sans recruter</h4>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="modern-card p-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="flex items-start">
                  <div className="gradient-icon-container mr-4">
                    <Target className="text-emerald-500" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Un modèle white label rentable et flexible</h4>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="modern-card p-6"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="flex items-start">
                  <div className="gradient-icon-container mr-4">
                    <Shield className="text-purple-500" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Une sous-traitance Vertex AI sécurisée</h4>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const GoogleSquadSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-teal-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            <span className="text-gradient">Google+ Squad</span> : votre centre de services augmenté
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Nous avons créé un centre de services IA-augmenté spécialement conçu pour les revendeurs, intégrateurs et agences cloud Google.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: Check, title: "Profils certifiés GCP, DevOps, Vertex AI" },
            { icon: Zap, title: "Activation sous 10 jours" },
            { icon: Target, title: "Pilotage centralisé, agile, et intégrable à votre delivery" },
            { icon: Users, title: "Co-delivery ou marque blanche, selon votre besoin" },
            { icon: Shield, title: "Compatible outsourcing ou TMA GCP offshore" },
            { icon: Cloud, title: "Copilotage boosté par IA (Duet AI, copilotes internes, code assisté)" }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="modern-card p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="gradient-icon-container w-fit mx-auto mb-4">
                <item.icon className="text-teal-500" size={24} />
              </div>
              <h3 className="font-semibold text-gray-900">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: "1",
      title: "Audit flash gratuit",
      description: "freins actuels, roadmap technique"
    },
    {
      number: "2", 
      title: "Proposition de squad cloud à la demande",
      description: "sizing + profils"
    },
    {
      number: "3",
      title: "Activation rapide",
      description: "démarrage sous 10 jours"
    },
    {
      number: "4",
      title: "Pilotage agile + reporting",
      description: "avec option montée en compétence"
    }
  ];

  const benefits = [
    "Vous livrez plus vite.",
    "Vous scalez votre offre Google Cloud sans charge fixe.",
    "Vous améliorez votre marge delivery."
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
            Comment <span className="text-gradient">ça fonctionne</span> ?
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="modern-card p-6 text-center relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">({step.description})</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="text-gray-300" size={24} />
                </div>
              )}
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
          <div className="space-y-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center justify-center">
                <ArrowRight className="text-teal-500 mr-3" size={20} />
                <span className="text-lg font-medium text-gray-900">{benefit}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ExpertiseSection: React.FC = () => {
  const expertises = [
    "Google Cloud Platform (GCP)",
    "Vertex AI & Duet AI", 
    "Firebase / Firestore",
    "Kubernetes / CI/CD / DevOps GCP",
    "Looker, BigQuery, Dataflow",
    "Google Workspace automatisé",
    "Services managés & TMA Google Cloud"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-teal-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Nos expertises <span className="text-gradient">Google Cloud</span>
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {expertises.map((expertise, index) => (
            <motion.div 
              key={index}
              className="modern-card p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="gradient-icon-container w-fit mx-auto mb-4">
                <Cloud className="text-teal-500" size={24} />
              </div>
              <h3 className="font-semibold text-gray-900">{expertise}</h3>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="modern-card p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="flex items-center justify-center mb-4">
            <Check className="text-teal-500 mr-3" size={24} />
            <span className="text-lg font-medium text-gray-900">
              Nos consultants sont formés aux best practices GCP, au delivery agile externalisé et à l'intégration copilot IA.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ProblemSolutionSection: React.FC = () => {
  const comparisons = [
    {
      problem: "Pas assez d'experts Vertex AI",
      solution: "Profils déjà opérationnels, copilotes IA embarqués"
    },
    {
      problem: "Projets GCP en retard", 
      solution: "Delivery rapide, externalisation cloud native"
    },
    {
      problem: "Marges trop faibles",
      solution: "Offre GCP white label offshore rentable"
    },
    {
      problem: "Charge fluctuante",
      solution: "Allocation modulable, à la demande"
    },
    {
      problem: "Difficulté à recruter",
      solution: "Squad GCP externalisée en 10 jours"
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
            Ce que <span className="text-gradient">vous gagnez</span>
          </h2>
        </motion.div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Vos problèmes actuels</h3>
              <div className="space-y-4">
                {comparisons.map((item, index) => (
                  <motion.div 
                    key={index}
                    className="bg-red-50 border border-red-200 p-4 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <p className="text-red-800 font-medium">{item.problem}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Ce que Google+ Squad vous apporte</h3>
              <div className="space-y-4">
                {comparisons.map((item, index) => (
                  <motion.div 
                    key={index}
                    className="bg-teal-50 border border-teal-200 p-4 rounded-lg"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <p className="text-teal-800 font-medium">{item.solution}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const DiscoveryOfferSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-teal-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="modern-card p-8 md:p-12 max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            <span className="text-gradient">Offre découverte</span> exclusive
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-start">
              <Check className="text-teal-500 mr-3 flex-shrink-0 mt-1" size={20} />
              <span className="text-gray-700">Audit gratuit de vos besoins actuels (GCP, Workspace, Vertex AI)</span>
            </div>
            <div className="flex items-start">
              <Check className="text-teal-500 mr-3 flex-shrink-0 mt-1" size={20} />
              <span className="text-gray-700">Proposition de delivery squad externalisée sous 72h</span>
            </div>
            <div className="flex items-start">
              <Check className="text-teal-500 mr-3 flex-shrink-0 mt-1" size={20} />
              <span className="text-gray-700">Conseils personnalisés pour scaler votre activité Google sans recruter</span>
            </div>
          </div>
          
          <a 
            href="https://calendly.com/digitalfactory-etechconsulting-mg-com-gtempaccount/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-button inline-block"
          >
            <span>📅 Planifiez votre audit avec un expert du delivery GCP</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const GoogleCloudContactSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Vous êtes partenaire GCP, intégrateur Google Workspace ou agence IA ?
          </h2>
          <p className="text-xl text-gray-700">
            ➡️ Passez à la vitesse supérieure avec <span className="text-gradient font-semibold">Google+ Squad</span>, votre centre de services DevOps & AI augmenté, en remplissant ce formulaire.
          </p>
        </motion.div>
        
        <ContactForm />
      </div>
    </section>
  );
};

const GoogleCloudLandingPage: React.FC = () => {
  return (
    <div>
      <GoogleCloudHero />
      <ProblemSection />
      <GoogleSquadSection />
      <HowItWorksSection />
      <ExpertiseSection />
      <ProblemSolutionSection />
      <ClientReferences />
      <DiscoveryOfferSection />
      <GoogleCloudContactSection />
    </div>
  );
};

export default GoogleCloudLandingPage;