import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

import Hero from './components/Hero';
import ValueProposition from './components/ValueProposition';
import ClientReferences from './components/ClientReferences';
import PricingTable from './components/PricingTable';
import TrialOffer from './components/TrialOffer';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import GoogleCloudLandingPage from './pages/GoogleCloudLandingPage';

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
        background: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(15px);
        border: 1px solid rgba(203, 213, 225, 0.4);
        border-radius: 16px;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08), 0 0 40px rgba(78, 205, 196, 0.1);
    }
    
    .modern-card:hover {
        transform: translateY(-12px) scale(1.02);
        box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15), 0 0 60px rgba(78, 205, 196, 0.2);
        border-color: rgba(78, 205, 196, 0.6);
        background: rgba(255, 255, 255, 0.95);
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
            filter: hue-rotate(0deg);
        }
        50% {
            background-position: 100% 50%;
            filter: hue-rotate(180deg);
        }
        100% {
            background-position: 0% 50%;
            filter: hue-rotate(360deg);
        }
    }

    @keyframes gradientPulse {
        0%, 100% {
            background-size: 300% 300%;
            background-position: 0% 50%;
            filter: brightness(1) saturate(1.2);
        }
        50% {
            background-size: 400% 400%;
            background-position: 100% 50%;
            filter: brightness(1.2) saturate(1.5);
        }
    }

    .text-gradient {
        background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57, #ff9ff3, #54a0ff);
        background-size: 400% 400%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        animation: gradientShift 3.6s ease-in-out infinite;
    }

    .text-gradient-pulse {
        background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57, #ff9ff3, #54a0ff, #5f27cd);
        background-size: 500% 500%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        animation: gradientPulse 2.4s ease-in-out infinite;
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
        background: linear-gradient(135deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57, #ff9ff3);
        background-size: 400% 400%;
        border: none;
        color: white;
        font-weight: 600;
        padding: 12px 24px;
        border-radius: 12px;
        transition: all 0.2s ease;
        box-shadow: 0 4px 20px rgba(255, 107, 107, 0.4), 0 0 30px rgba(78, 205, 196, 0.3);
        animation: buttonGradientShift 3.6s ease-in-out infinite;
        position: relative;
        overflow: hidden;
        transform: translateY(0);
    }
    
    .gradient-button::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(135deg, #ff5252, #26d0ce, #1e88e5, #66bb6a, #ffca28, #ab47bc);
        background-size: 400% 400%;
        opacity: 0;
        transition: opacity 0.2s ease;
        animation: buttonGradientHover 2.4s ease-in-out infinite;
    }
    
    .gradient-button:hover::before {
        opacity: 1;
    }
    
    .gradient-button:hover {
        transform: translateY(-4px) scale(1.05);
        box-shadow: 0 12px 35px rgba(255, 107, 107, 0.5), 0 0 40px rgba(78, 205, 196, 0.4);
        animation: buttonGradientHover 1.8s ease-in-out infinite;
    }
    
    .gradient-button:active {
        transform: translateY(-2px) scale(1.02);
        transition: all 0.1s ease;
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
        animation: gradientShift 7.2s ease-in-out infinite;
    }
    
    .gradient-icon-container:hover {
        background: linear-gradient(135deg, rgba(45, 212, 191, 0.2), rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2));
        background-size: 250% 250%;
        border-color: rgba(45, 212, 191, 0.4);
        transform: scale(1.05);
        animation: gradientPulse 2.4s ease-in-out infinite;
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
        animation: gradientShift 4.8s ease-in-out infinite;
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
        animation: gradientShift 3.6s ease-in-out infinite;
    }
    
    /* Form enhancements */
    .modern-input {
        background: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(15px);
        border: 2px solid rgba(203, 213, 225, 0.4);
        border-radius: 12px;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    }
    
    .modern-input:focus {
        outline: none;
        border-color: rgba(78, 205, 196, 0.8);
        box-shadow: 0 0 0 4px rgba(78, 205, 196, 0.2), 0 4px 20px rgba(78, 205, 196, 0.3);
        background: rgba(255, 255, 255, 0.95);
        transform: translateY(-2px);
    }
    
    /* Slider styling */
    .slider::-webkit-slider-thumb {
        appearance: none;
        height: 24px;
        width: 24px;
        border-radius: 50%;
        background: linear-gradient(45deg, #14b8a6, #0891b2);
        cursor: pointer;
        box-shadow: 0 4px 15px rgba(20, 184, 166, 0.4);
        transition: all 0.2s ease;
        border: 2px solid white;
    }
    
    .slider::-webkit-slider-thumb:hover {
        transform: scale(1.1);
        box-shadow: 0 6px 20px rgba(20, 184, 166, 0.6);
    }
    
    .slider::-webkit-slider-track {
        height: 6px;
        border-radius: 4px;
        background: #e5e7eb;
    }
    
    .slider::-moz-range-thumb {
        height: 24px;
        width: 24px;
        border-radius: 50%;
        background: linear-gradient(45deg, #14b8a6, #0891b2);
        cursor: pointer;
        box-shadow: 0 4px 15px rgba(20, 184, 166, 0.4);
        border: 2px solid white;
        transition: all 0.2s ease;
    }
    
    .slider::-moz-range-thumb:hover {
      transform: scale(1.1);
      box-shadow: 0 6px 20px rgba(20, 184, 166, 0.6);
    }
    
    .slider::-moz-range-track {
      height: 6px;
      border-radius: 4px;
      background: #e5e7eb;
    }

    /* Responsive Google Calendar Styles */
    #calendar-booking-target {
      width: 100% !important;
      max-width: 100% !important;
      overflow: hidden;
    }
    
    #calendar-booking-target iframe,
    #calendar-booking-target > div {
      width: 100% !important;
      max-width: 100% !important;
      height: auto !important;
      min-height: 400px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
    
    /* Mobile-specific calendar adjustments */
    @media (max-width: 768px) {
      #calendar-booking-target iframe,
      #calendar-booking-target > div {
        min-height: 350px;
        font-size: 14px;
      }
      
      #calendar-booking-target .calendar-content {
        padding: 8px !important;
      }
    }
    
    @media (max-width: 480px) {
      #calendar-booking-target iframe,
      #calendar-booking-target > div {
        min-height: 300px;
        font-size: 12px;
      }
    }
    /* Animation pour les boutons CTA du hero */
    .hero-cta-primary {
        background: linear-gradient(135deg, #2dd4bf, #3b82f6, #8b5cf6, #06b6d4);
        background-size: 300% 300%;
        animation: buttonGradientShift 4.8s ease-in-out infinite;
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
        animation: buttonGradientHover 3s ease-in-out infinite;
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

const ScrollToAnchor = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view in Google Analytics
    if (typeof gtag !== 'undefined') {
      gtag('config', 'G-71912C8Z7H', {
        page_path: location.pathname + location.search + location.hash,
      });
    }

    if (location.hash) {
      // Remove the # from the hash to get the element ID
      const elementId = location.hash.substring(1);
      
      // Add a small delay to ensure the DOM has rendered
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
  }, [location]);

  return null;
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
    <Router>
      <GlobalStyles />
      <ScrollToAnchor />
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <ValueProposition />
            <ClientReferences />
            <PricingTable />
            <TrialOffer />
            <ContactForm />
          </>
        } />
        <Route path="/nos-cas-d-usages/google-cloud" element={<GoogleCloudLandingPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;