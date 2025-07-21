import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Helper Functions & Data ---

// Helper to create SVG icons
const createIcon = (path, viewBox = "0 0 24 24") => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox={viewBox}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="inline-block"
  >
    {path}
  </svg>
);

// Icon definitions for packs
const icons = {
  calculator: createIcon(
    <>
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
      <line x1="8" y1="6" x2="16" y2="6"></line>
      <line x1="16" y1="14" x2="16" y2="18"></line>
      <line x1="12" y1="10" x2="12" y2="18"></line>
      <line x1="8" y1="10" x2="8" y2="18"></line>
    </>
  ),
  clock: createIcon(
    <>
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </>
  ),
  launch: createIcon(<path d="m22 2-7 20-4-9-9-4 20-7z" />),
  growth: createIcon(<polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />),
  vision: createIcon(
    <>
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </>
  ),
};

// Data for each pack: base price and description
const packInfoData = {
    Launch: { name: 'Pack Lancement', basePrice: 645, description: 'Orienté MVP/POC, 1 PO + 2 développeurs' },
    Growth: { name: 'Pack Croissance', basePrice: 1075, description: 'Équipe feature complète, PO + Scrum/Tech + 3-4 dévs' },
    Vision: { name: 'Pack Vision', basePrice: 1615, description: 'Livraison long terme, PO + Scrum + 6-8 profils' },
};

// Discount percentages based on duration and pack
const discountData = {
    '30-59': { Launch: 5.15, Growth: 4.87, Vision: 5.00 },
    '60-119': { Launch: 9.56, Growth: 9.73, Vision: 10.00 },
    '120-249': { Launch: 15.44, Growth: 15.04, Vision: 15.00 },
    '250-499': { Launch: 19.85, Growth: 20.35, Vision: 20.00 },
    '500+': { Launch: 25.00, Growth: 24.78, Vision: 25.00 },
};

// --- Main Component ---
const InteractivePricingCalculator = () => {
  // --- State Management ---
  const [pack, setPack] = useState('Growth'); // Default to 'Growth' as it's popular
  const [durationInWeeks, setDurationInWeeks] = useState(1); // Duration in weeks, starting at 1

  // --- Price Calculation Logic ---
  const getPricingInfo = (selectedPack, durationWeeks) => {
    const durationInDays = durationWeeks * 5; // 5 working days per week
    const basePrice = packInfoData[selectedPack].basePrice;
    let discountPercentage = 0; // Default discount is 0

    // Apply discount only if duration is 25 days (5 weeks) or more
    if (durationInDays >= 25) {
        let tierKey;
        if (durationInDays >= 500) tierKey = '500+';
        else if (durationInDays >= 250) tierKey = '250-499';
        else if (durationInDays >= 120) tierKey = '120-249';
        else if (durationInDays >= 60) tierKey = '60-119';
        else tierKey = '30-59'; // The first discount tier starts at 30 days, but we apply it from 25 days
        
        discountPercentage = discountData[tierKey][selectedPack];
    }

    const discountedTJM = basePrice * (1 - discountPercentage / 100);
    const total = discountedTJM * durationInDays;

    return { 
        tjm: discountedTJM, 
        total, 
        durationInDays, 
        discountPercentage,
        basePrice 
    };
  };

  const { tjm, total, durationInDays, discountPercentage, basePrice } = getPricingInfo(pack, durationInWeeks);

  // --- Component Rendering ---
  return (
    <motion.div
      className="modern-card p-6 sm:p-8 w-full max-w-5xl mx-auto mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="text-center mb-8">
        <div className="gradient-icon-container w-fit mx-auto mb-6">
          <div className="text-primary-500">{icons.calculator}</div>
        </div>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          <span className="text-gradient">Calculateur</span> de Prix Interactif
        </h3>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          Choisissez votre pack et la durée pour estimer votre budget en temps réel.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* --- Controls Section --- */}
        <div className="lg:col-span-3 space-y-8">
          {/* Pack Selector */}
          <PackSelector selectedPack={pack} onSelectPack={setPack} />

          {/* Duration Slider */}
          <div>
            <label className="flex items-center text-lg font-medium text-gray-700 mb-3">
              <span className="text-primary-500 mr-3">{icons.clock}</span>
              Durée du projet : <span className="font-bold text-gradient-pulse ml-2">{durationInWeeks} {durationInWeeks === 1 ? 'semaine' : 'semaines'}</span>
            </label>
            <input
              type="range"
              min="1" // Start from week 1
              max="120" // Approx 2 years
              value={durationInWeeks}
              onChange={(e) => setDurationInWeeks(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1 px-1">
              <span>1 sem</span>
              <span>120 sem</span>
            </div>
          </div>
        </div>

        {/* --- Results Section --- */}
        <div className="lg:col-span-2 bg-gradient-to-br from-primary-400 to-secondary-500 text-white p-6 rounded-2xl flex flex-col shadow-card">
          <h4 className="text-xl font-bold mb-4 text-center text-primary-100">
            Votre Estimation
          </h4>
          
          <div className="text-center my-auto">
             <p className="text-sm text-primary-200 uppercase tracking-wider">
              TJM après remise
            </p>
            <div className="text-5xl font-bold my-2 flex items-center justify-center">
                <AnimatePresence mode="wait">
                    <motion.span
                        key={tjm}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.2 }}
                    >
                        {tjm.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}
                    </motion.span>
                </AnimatePresence>
            </div>
             <p className="text-sm text-primary-200">
              Prix de base: {basePrice.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}/j
            </p>
          </div>

          <div className="border-t border-primary-300/50 pt-4 mt-4 space-y-2">
            <div className="flex justify-between text-sm text-primary-100">
              <span>Remise appliquée:</span>
              <span className="font-semibold text-white bg-white/20 px-2 py-0.5 rounded-full">{discountPercentage.toFixed(2)}%</span>
            </div>
            <div className="flex justify-between text-sm text-primary-100">
              <span>Projet total ({durationInDays} jours):</span>
              <span className="font-semibold text-white">{total.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}</span>
            </div>
          </div>

          <a href="#trial" className="gradient-button w-full mt-6 block text-center">
            <span>🚀 Je me lance</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

// --- Sub-component for Pack Selection ---
const PackSelector = ({ selectedPack, onSelectPack }) => {
  return (
    <div>
      <label className="text-lg font-medium text-gray-700 mb-4 block">
        Choisissez votre pack
      </label>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Object.entries(packInfoData).map(([packId, packInfo]) => (
          <motion.button
            key={packId}
            onClick={() => onSelectPack(packId)}
            className={`modern-card p-4 text-center transition-all duration-300 flex flex-col items-center justify-between space-y-2 h-full ${
              selectedPack === packId
                ? 'bg-primary-50 border-primary-500 shadow-card-hover scale-105'
                : 'hover:border-primary-300'
            }`}
            whileTap={{ scale: 0.98 }}
            whileHover={{ y: -2 }}
          >
            <div>
                <div className={`transition-colors duration-300 mb-2 ${selectedPack === packId ? 'text-primary-500' : 'text-gray-500'}`}>
                    {icons[packId.toLowerCase()]}
                </div>
                <span className={`font-semibold transition-colors duration-300 ${selectedPack === packId ? 'text-primary-600' : 'text-gray-800'}`}>
                    {packInfo.name}
                </span>
                <p className="text-xs text-gray-500 mt-1">{packInfo.description}</p>
            </div>
            <div className={`font-bold text-lg mt-2 ${selectedPack === packId ? 'text-gradient-pulse' : 'text-gray-800'}`}>
                {packInfo.basePrice}€/jour
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default InteractivePricingCalculator;