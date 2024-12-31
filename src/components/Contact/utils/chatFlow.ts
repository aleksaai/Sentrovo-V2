import { Step } from '../types/ContactTypes';

export const getNextStep = (currentStep: Step): Step | null => {
  const steps: { [key in Step]: Step | null } = {
    name: 'email',
    email: 'phone',
    phone: 'service',
    service: 'message',
    message: 'complete',
    complete: null
  };
  
  return steps[currentStep];
};

export const getStepMessage = (step: Step): string => {
  const messages: { [key in Step]: string } = {
    name: 'Wie dürfen wir Sie nennen?',
    email: 'Unter welcher E-Mail-Adresse können wir Sie erreichen?',
    phone: 'Und Ihre Telefonnummer für eine persönliche Beratung?',
    service: 'Welcher Service interessiert Sie?',
    message: 'Beschreiben Sie kurz Ihr Anliegen:',
    complete: 'Vielen Dank für Ihre Anfrage! Wir melden uns schnellstmöglich bei Ihnen.'
  };
  
  return messages[step];
};

export const validateInput = (step: Step, value: string): string | null => {
  const trimmedValue = value.trim();

  if (!trimmedValue) {
    return 'Bitte geben Sie eine Antwort ein.';
  }

  switch (step) {
    case 'email':
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(trimmedValue)) {
        return 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
      }
      break;

    case 'phone':
      const phoneRegex = /^[\d\s\-\+()]{6,20}$/;
      if (!phoneRegex.test(trimmedValue)) {
        return 'Bitte geben Sie eine gültige Telefonnummer ein.';
      }
      break;

    case 'name':
      if (trimmedValue.length < 2) {
        return 'Der Name muss mindestens 2 Zeichen lang sein.';
      }
      break;

    case 'message':
      if (trimmedValue.length < 10) {
        return 'Bitte beschreiben Sie Ihr Anliegen etwas ausführlicher (mindestens 10 Zeichen).';
      }
      break;
  }

  return null;
};