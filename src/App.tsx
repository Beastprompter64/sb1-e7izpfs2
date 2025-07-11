import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ValueProposition from './components/ValueProposition';
import ClientReferences from './components/ClientReferences';
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
      <Hero />
      <ValueProposition />
      <ClientReferences />
      <PricingTable />
      <TrialOffer />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;