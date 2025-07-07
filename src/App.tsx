import React, { useEffect, useRef, useState } from 'react';
import Header from './components/Header';
import ValueProposition from './components/ValueProposition';
import ClientReferences from './components/ClientReferences';
import Benefits from './components/Benefits';
import PricingTable from './components/PricingTable';
import TrialOffer from './components/TrialOffer';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const GlobalStyles = () => (
  <style>{`
    body {
        font-family: 'Inter', sans-serif;
        margin: 0; 
    }
    
    .hero-section {
        position: relative;
        overflow: hidden;
        background-color: #f8fafc;
    }

    #fiber-canvas {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
    }

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    .fade-in { animation: fadeIn 0.8s ease-out forwards; opacity: 0; }
    .fade-in-delay-1 { animation-delay: 0.2s; }
    .fade-in-delay-2 { animation-delay: 0.4s; }
    .fade-in-delay-3 { animation-delay: 0.6s; }
    
    /* Enhanced card styling for consistent design */
    .modern-card {
        background: rgba(248, 250, 252, 0.8);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(203, 213, 225, 0.3);
        border-radius: 16px;
        transition: all 0.3s ease;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }
    
    .modern-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 20px 25px -5px rgba(59, 130, 246, 0.1), 0 10px 10px -5px rgba(59, 130, 246, 0.04);
        border-color: rgba(45, 212, 191, 0.4);
        background: rgba(255, 255, 255, 0.9);
    }
    
    .pillar-card {
        transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
    }
    .pillar-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 10px 30px rgba(59, 130, 246, 0.1);
        border-color: rgba(93, 223, 204, 0.8);
    }

    /* Animation de dégradé dynamique pour le texte */
    @keyframes gradientShift {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }

    @keyframes gradientPulse {
        0%, 100% {
            background-size: 200% 200%;
            background-position: 0% 50%;
        }
        50% {
            background-size: 300% 300%;
            background-position: 100% 50%;
        }
    }

    .text-gradient {
        background: linear-gradient(45deg, #2dd4bf, #3b82f6, #8b5cf6, #06b6d4, #10b981);
        background-size: 300% 300%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        animation: gradientShift 4s ease-in-out infinite;
    }

    .text-gradient-pulse {
        background: linear-gradient(45deg, #2dd4bf, #3b82f6, #f59e0b, #ef4444, #8b5cf6);
        background-size: 400% 400%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        animation: gradientPulse 3s ease-in-out infinite;
    }
    
    /* Animation de dégradé dynamique pour les boutons */
    @keyframes buttonGradientShift {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }

    @keyframes buttonGradientHover {
        0% {
            background-position: 0% 50%;
            background-size: 200% 200%;
        }
        50% {
            background-position: 100% 50%;
            background-size: 250% 250%;
        }
        100% {
            background-position: 0% 50%;
            background-size: 200% 200%;
        }
    }

    .gradient-button {
        background: linear-gradient(135deg, #2dd4bf, #3b82f6, #8b5cf6, #06b6d4);
        background-size: 300% 300%;
        border: none;
        color: white;
        font-weight: 600;
        padding: 12px 24px;
        border-radius: 12px;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(45, 212, 191, 0.3);
        animation: buttonGradientShift 5s ease-in-out infinite;
        position: relative;
        overflow: hidden;
    }
    
    .gradient-button::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(135deg, #14b8a6, #2563eb, #7c3aed, #0891b2);
        background-size: 300% 300%;
        opacity: 0;
        transition: opacity 0.3s ease;
        animation: buttonGradientHover 3s ease-in-out infinite;
    }
    
    .gradient-button:hover::before {
        opacity: 1;
    }
    
    .gradient-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(45, 212, 191, 0.4);
        animation: buttonGradientHover 2s ease-in-out infinite;
    }

    .gradient-button > * {
        position: relative;
        z-index: 1;
    }
    
    /* Enhanced icon containers with dynamic gradients */
    .gradient-icon-container {
        background: linear-gradient(135deg, rgba(45, 212, 191, 0.1), rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1));
        background-size: 200% 200%;
        border: 1px solid rgba(45, 212, 191, 0.2);
        border-radius: 12px;
        padding: 12px;
        transition: all 0.3s ease;
        animation: gradientShift 6s ease-in-out infinite;
    }
    
    .gradient-icon-container:hover {
        background: linear-gradient(135deg, rgba(45, 212, 191, 0.2), rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2));
        background-size: 250% 250%;
        border-color: rgba(45, 212, 191, 0.4);
        transform: scale(1.05);
        animation: gradientPulse 2s ease-in-out infinite;
    }
    
    /* Pricing card enhancements with dynamic gradients */
    .pricing-card {
        background: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(203, 213, 225, 0.3);
        border-radius: 20px;
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
    }
    
    .pricing-card:hover {
        transform: translateY(-12px);
        box-shadow: 0 25px 50px -12px rgba(59, 130, 246, 0.15);
        border-color: rgba(45, 212, 191, 0.5);
    }
    
    .pricing-card.popular {
        border: 2px solid transparent;
        background: linear-gradient(white, white) padding-box,
                    linear-gradient(135deg, #2dd4bf, #3b82f6, #8b5cf6) border-box;
        background-size: 100% 100%, 300% 300%;
        animation: gradientShift 4s ease-in-out infinite;
    }
    
    .pricing-card.popular::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(135deg, #2dd4bf, #3b82f6, #8b5cf6, #06b6d4);
        background-size: 300% 300%;
        animation: gradientShift 3s ease-in-out infinite;
    }
    
    /* Form enhancements */
    .modern-input {
        background: rgba(255, 255, 255, 0.8);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(203, 213, 225, 0.3);
        border-radius: 12px;
        transition: all 0.3s ease;
    }
    
    .modern-input:focus {
        outline: none;
        border-color: rgba(45, 212, 191, 0.5);
        box-shadow: 0 0 0 3px rgba(45, 212, 191, 0.1);
        background: rgba(255, 255, 255, 0.95);
    }

    /* Animation pour les boutons CTA du hero */
    .hero-cta-primary {
        background: linear-gradient(135deg, #2dd4bf, #3b82f6, #8b5cf6, #06b6d4);
        background-size: 300% 300%;
        animation: buttonGradientShift 4s ease-in-out infinite;
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
    }

    .hero-cta-primary::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(135deg, #14b8a6, #2563eb, #7c3aed, #0891b2);
        background-size: 300% 300%;
        opacity: 0;
        transition: opacity 0.3s ease;
        animation: buttonGradientHover 2.5s ease-in-out infinite;
    }

    .hero-cta-primary:hover::before {
        opacity: 1;
    }

    .hero-cta-primary:hover {
        transform: scale(1.05);
        box-shadow: 0 8px 25px rgba(45, 212, 191, 0.4);
    }

    .hero-cta-primary > * {
        position: relative;
        z-index: 1;
    }
  `}</style>
);

const FiberCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particlesArray;
    let animationFrameId;

    // Configuration
    const config = {
      particleCount: 100,
      particleSize: 2,
      maxDistance: 120,
      speed: 0.5,
    };

    // Classe pour une particule
    class Particle {
      constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        if (this.x > canvas.width || this.x < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.directionY = -this.directionY;
        }
        this.x += this.directionX;
        this.y += this.directionY;
      }
    }

    // Initialiser les particules
    function init() {
      canvas.width = window.innerWidth;
      canvas.height = document.querySelector('.hero-section')?.offsetHeight || window.innerHeight;
      particlesArray = [];
      let numberOfParticles = config.particleCount;
      for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * config.particleSize) + 1;
        let x = (Math.random() * ((canvas.width - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((canvas.height - size * 2) - (size * 2)) + size * 2);
        let directionX = (Math.random() * config.speed * 2) - config.speed;
        let directionY = (Math.random() * config.speed * 2) - config.speed;
        let color = 'white';

        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
      }
    }

    // Connecter les particules
    function connect() {
      let opacityValue = 1;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x)) +
            ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
          if (distance < (config.maxDistance * config.maxDistance)) {
            opacityValue = 1 - (distance / (config.maxDistance * config.maxDistance));
            ctx.strokeStyle = `rgba(60, 130, 246, ${opacityValue})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    }

    // Boucle d'animation
    function animate() {
      animationFrameId = requestAnimationFrame(animate);
      ctx.fillStyle = 'rgba(248, 250, 252, 0.2)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
      connect();
    }

    // Gérer le redimensionnement de la fenêtre
    const handleResize = () => {
      init();
    };

    window.addEventListener('resize', handleResize);
    
    init();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return <canvas id="fiber-canvas" ref={canvasRef}></canvas>;
};

function App() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => {
        document.head.removeChild(link);
    }
  }, []);

  return (
    <>
      <GlobalStyles />
      <Header />
      
      <section className="hero-section">
        <FiberCanvas />
        
        <div className="relative z-10 isolate mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 fade-in">
              <span className="text-gradient">Divisez par 2 votre Time-to-Market.</span>
              <span className="block mt-2 md:mt-4">Libérez l'Innovation.</span>
            </h1>

            <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-600 fade-in fade-in-delay-1">
              Déployez votre Squad Agile offshore en 10 jours. Nos équipes à Madagascar, augmentées par l'IA, transforment vos idées en produits plus vite que jamais.
            </p>

            <div className="mt-10 flex justify-center items-center gap-4 flex-wrap fade-in fade-in-delay-2">
              <a href="#contact" className="hero-cta-primary inline-block rounded-md px-6 py-3 text-base font-semibold text-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                <span>Lancer mon projet →</span>
              </a>
              <a href="#trial" className="inline-block rounded-md border border-gray-300 px-6 py-3 text-base font-semibold text-gray-700 hover:bg-gray-100 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-transform transform hover:scale-105">
                Découvrir le Sprint Test
              </a>
            </div>
          </div>

          <div className="mt-20 lg:mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 text-left fade-in fade-in-delay-3">
            
            <div className="pillar-card bg-slate-50/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-teal-50 mb-4">
                <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="iconGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor:'#2dd4bf'}} />
                      <stop offset="100%" style={{stopColor:'#3b82f6'}} />
                    </linearGradient>
                  </defs>
                  <path d="M8.25 4.5L15.75 12L8.25 19.5" stroke="url(#iconGradient1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900">Vitesse & Agilité</h3>
              <p className="mt-2 text-gray-600">Une équipe opérationnelle en 10 jours et des sprints de 2 semaines pour une livraison accélérée et une adaptation continue.</p>
            </div>

            <div className="pillar-card bg-slate-50/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-teal-50 mb-4">
                <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="iconGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor:'#2dd4bf'}} />
                      <stop offset="100%" style={{stopColor:'#3b82f6'}} />
                    </linearGradient>
                  </defs>
                  <path d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.75A.75.75 0 013 4.5h.75m0 0H21m-9 12.75h5.25m-5.25 0h-5.25m5.25 0V15m0 3.75V15m0 0H9m5.25 0h5.25M9 15h5.25" stroke="url(#iconGradient2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900">Coûts Optimisés</h3>
              <p className="mt-2 text-gray-600">Accédez à des talents seniorisés avec un TJM ultra-compétitif. Un modèle simple, prévisible, sans frais cachés.</p>
            </div>

            <div className="pillar-card bg-slate-50/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-teal-50 mb-4">
                <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="iconGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor:'#2dd4bf'}} />
                      <stop offset="100%" style={{stopColor:'#3b82f6'}} />
                    </linearGradient>
                  </defs>
                  <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.562L16.25 22.5l-.648-1.938a3.375 3.375 0 00-2.684-2.684l-1.938-.648 1.938-.648a3.375 3.375 0 002.684-2.684l.648-1.938.648 1.938a3.375 3.375 0 002.684 2.684l1.938.648-1.938.648a3.375 3.375 0 00-2.684 2.684z" stroke="url(#iconGradient3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900">Performance IA</h3>
              <p className="mt-2 text-gray-600">Chaque squad est équipée d'outils IA (Copilot, tests auto) pour booster la productivité, la qualité et la documentation.</p>
            </div>
          </div>
        </div>
      </section>

      <ValueProposition />
      <ClientReferences />
      <Benefits />
      <PricingTable />
      <TrialOffer />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;