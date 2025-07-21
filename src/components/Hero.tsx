import React, { useEffect, useRef } from 'react';

interface ParticleConfig {
  particleCount: number;
  particleSize: number;
  maxDistance: number;
  speed: number;
}

class Particle {
  x: number;
  y: number;
  directionX: number;
  directionY: number;
  size: number;
  color: string;

  constructor(x: number, y: number, directionX: number, directionY: number, size: number, color: string) {
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
    this.color = color;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  update(canvas: HTMLCanvasElement): void {
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

const FiberCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particlesArray: Particle[] = [];
    let animationFrameId: number;

    // Configuration
    const config: ParticleConfig = {
      particleCount: 100,
      particleSize: 2,
      maxDistance: 120,
      speed: 0.5,
    };

    // Initialiser les particules
    function init(): void {
      if (!canvas) return;
      
      canvas.width = window.innerWidth;
      canvas.height = document.querySelector('.hero-section')?.clientHeight || window.innerHeight;
      particlesArray = [];
      
      const numberOfParticles = config.particleCount;
      for (let i = 0; i < numberOfParticles; i++) {
        const size = (Math.random() * config.particleSize) + 1;
        const x = (Math.random() * ((canvas.width - size * 2) - (size * 2)) + size * 2);
        const y = (Math.random() * ((canvas.height - size * 2) - (size * 2)) + size * 2);
        const directionX = (Math.random() * config.speed * 2) - config.speed;
        const directionY = (Math.random() * config.speed * 2) - config.speed;
        const color = 'white';

        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
      }
    }

    // Connecter les particules
    function connect(): void {
      if (!ctx) return;
      
      let opacityValue = 1;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x)) +
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
    function animate(): void {
      if (!ctx || !canvas) return;
      
      animationFrameId = requestAnimationFrame(animate);
      ctx.fillStyle = 'rgba(248, 250, 252, 0.2)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update(canvas);
        particlesArray[i].draw(ctx);
      }
      connect();
    }

    // Gérer le redimensionnement de la fenêtre
    const handleResize = (): void => {
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

const Hero: React.FC = () => {
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
            <span className="text-gradient">Lancez vos produits 2x plus vite pour la moitié du coût.</span>
            <span className="block mt-2 md:mt-4">Sans recruter.</span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-600 fade-in fade-in-delay-1">
            Déployez une équipe de développeurs seniors 100% autonome en 10 jours. On vous livre une fonctionnalité business viable toutes les 2 semaines. Garanti.
          </p>

          <div className="mt-10 flex justify-center items-center gap-4 flex-wrap fade-in fade-in-delay-2">
            <a href="#trial" className="hero-cta-primary inline-block rounded-md px-6 py-3 text-base font-semibold text-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              <span>3.500 € de crédit offert →</span>
            </a>
            <a href="#contact" className="inline-block rounded-md border border-gray-300 px-6 py-3 text-base font-semibold text-gray-700 hover:bg-gray-100 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-transform transform hover:scale-105">
             🚀 Débloquer mon potentiel
            </a>
            
            {/* Visual cue arrow */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <svg className="w-6 h-6 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
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
            <p className="mt-2 text-gray-600">Une équipe opérationnelle en 10 jours, soit 8x plus vite que pour recruter un seul dev.</p>
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
                <path d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="url(#iconGradient2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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
            <p className="mt-2 text-gray-600">Nos IA propriétaires réduisent les bugs de 40% et accélèrent les tests de 75%. Résultat : vous livrez plus vite un produit plus stable.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;