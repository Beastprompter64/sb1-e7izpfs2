import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle, Sparkles } from 'lucide-react';
import { FormData } from '../types';
import ConfettiExplosion from 'react-confetti-explosion';

const ContactForm: React.FC = () => {
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
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setShowConfetti(true);
        reset();
        
        // Reset submission status after 8 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setShowConfetti(false);
        }, 8000);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // You could add error state handling here if needed
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-white to-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-gradient">Contactez</span>-nous
            </h2>
            <p className="text-xl text-gray-700">
              Prêt à améliorer vos capacités de développement ? Envoyez-nous un message et nous vous répondrons sous 24 heures.
            </p>
          </motion.div>
          
          <motion.div
            className="modern-card p-8 md:p-10"
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
                <div className="flex justify-center mb-4">
                  <div className="gradient-icon-container">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    >
                      <CheckCircle size={48} className="text-teal-600" />
                    </motion.div>
                  </div>
                </div>
                <motion.h3 
                  className="text-3xl font-bold text-gradient-pulse mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  🎉 Félicitations ! Message Envoyé !
                </motion.h3>
                <p className="text-gray-700">
                  Merci de nous avoir contactés. Nous vous répondrons sous 24 heures avec une surprise spéciale !
                </p>
                <div className="mt-4 flex justify-center">
                  <Sparkles className="text-yellow-500 animate-pulse" size={24} />
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nom*
                    </label>
                    <input
                      id="name"
                      type="text"
                      className={`modern-input w-full px-4 py-3 ${errors.name ? 'border-red-500' : ''}`}
                      {...register("name", { required: "Le nom est requis" })}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Téléphone*
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className={`modern-input w-full px-4 py-3 ${errors.phone ? 'border-red-500' : ''}`}
                      {...register("phone", { required: "Le numéro de téléphone est requis" })}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email*
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
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Sujet*
                  </label>
                  <input
                    id="subject"
                    type="text"
                    className={`modern-input w-full px-4 py-3 ${errors.subject ? 'border-red-500' : ''}`}
                    {...register("subject", { required: "Le sujet est requis" })}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                  )}
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className={`modern-input w-full px-4 py-3 ${errors.message ? 'border-red-500' : ''}`}
                    {...register("message", { required: "Le message est requis" })}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
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
                        <span>🚀 Obtenir ma Consultation Gratuite</span> <Send size={18} className="ml-2" />
                      </>
                    )}
                  </button>
                </div>
                
                <p className="text-center mt-4 text-sm text-gray-600">
                  Nous garantissons une réponse sous 24 heures pendant les jours ouvrés.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;