import React, { useEffect, useRef } from 'react';

const CalendarBooking: React.FC = () => {
  // On utilise une "ref" pour cibler l'élément, c'est une meilleure pratique en React que getElementById.
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ce drapeau nous permettra de savoir si le composant a été "démonté" par React.
    // C'est la clé pour éviter la duplication en mode strict.
    let isCancelled = false;

    const scriptId = 'google-calendar-script';
    const cssId = 'google-calendar-css';

    // Si la cible n'est pas encore prête, ou si le script a déjà été ajouté, on ne fait rien.
    if (!targetRef.current || document.getElementById(scriptId)) {
      return;
    }

    // Load Google Calendar CSS
    const link = document.createElement('link');
    link.href = 'https://calendar.google.com/calendar/scheduling-button-script.css';
    link.rel = 'stylesheet';
    link.id = cssId;
    document.head.appendChild(link);

    // Load Google Calendar Script
    const script = document.createElement('script');
    script.src = 'https://calendar.google.com/calendar/scheduling-button-script.js';
    script.async = true;
    script.id = scriptId;

    script.onload = () => {
      // Le script est chargé. On exécute la fonction SEULEMENT SI le composant n'a pas été démonté entre-temps.
      if (!isCancelled && window.calendar && window.calendar.schedulingButton && targetRef.current) {
        window.calendar.schedulingButton.load({
          url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ0KcspWLolQCci7Dq5aCFLD-JEpv98aBlMUhE2oKcNUky7FlCYoinTpGX_lrce_bhRaDiPh4g71?gv=true',
          color: '#039BE5',
          label: 'Réserver un rendez-vous',
          target: targetRef.current,
        });
      }
    };

    document.head.appendChild(script);

    // La fonction de nettoyage, qui s'exécute quand le composant est "démonté"
    return () => {
      // On met le drapeau à true. Si le script.onload s'exécute après ça, il ne fera rien.
      isCancelled = true;

      // On nettoie les scripts et le CSS ajoutés au <head>
      const loadedLink = document.getElementById(cssId);
      if (loadedLink) {
        document.head.removeChild(loadedLink);
      }
      const loadedScript = document.getElementById(scriptId);
      if (loadedScript) {
        document.head.removeChild(loadedScript);
      }
      
      // On vide aussi la div cible pour être absolument sûr de ne laisser aucune trace.
      if (targetRef.current) {
        targetRef.current.innerHTML = '';
      }
    };
  }, []); // Le tableau de dépendances vide est correct, le code ne s'exécute qu'au "montage".

  // On lie notre ref à la div qui contiendra le bouton.
  return <div ref={targetRef}></div>;
};

// L'extension de l'interface Window reste la même
declare global {
  interface Window {
    calendar: {
      schedulingButton: {
        load: (config: {
          url: string;
          color: string;
          label: string;
          target: HTMLElement;
        }) => void;
      };
    };
  }
}

export default CalendarBooking;
