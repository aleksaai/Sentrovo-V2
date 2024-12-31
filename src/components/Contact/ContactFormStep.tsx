import React from 'react';
import { motion } from 'framer-motion';
import { FormData, Step } from './types/ContactTypes';
import ServiceSelect from './ServiceSelect';
import MessageInput from './MessageInput';

interface ContactFormStepProps {
  step: Step;
  formData: FormData;
  updateFormData: (field: keyof FormData, value: string) => void;
  setCurrentStep: (step: Step) => void;
}

const ContactFormStep = ({ step, formData, updateFormData, setCurrentStep }: ContactFormStepProps) => {
  const steps = {
    welcome: {
      message: 'Willkommen bei Sentrovo! Wie können wir Ihnen helfen?',
      next: 'name'
    },
    name: {
      message: 'Wie dürfen wir Sie nennen?',
      next: 'email'
    },
    email: {
      message: 'Unter welcher E-Mail-Adresse können wir Sie erreichen?',
      next: 'phone'
    },
    phone: {
      message: 'Und Ihre Telefonnummer für eine persönliche Beratung?',
      next: 'service'
    },
    service: {
      message: 'Welcher Service interessiert Sie?',
      next: 'message'
    },
    message: {
      message: 'Beschreiben Sie kurz Ihr Anliegen:',
      next: 'complete'
    },
    complete: {
      message: 'Vielen Dank für Ihre Anfrage! Wir melden uns schnellstmöglich bei Ihnen.',
      next: null
    }
  };

  const handleContinue = () => {
    const nextStep = steps[step].next;
    if (nextStep) {
      setCurrentStep(nextStep as Step);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-4"
    >
      <div className="bg-white/5 rounded-2xl p-4 max-w-[85%]">
        <p className="text-white/90">{steps[step].message}</p>
      </div>

      {step === 'service' ? (
        <ServiceSelect
          value={formData.service}
          onChange={(value) => {
            updateFormData('service', value);
            handleContinue();
          }}
        />
      ) : step === 'message' ? (
        <MessageInput
          value={formData.message}
          onChange={(value) => updateFormData('message', value)}
          onSubmit={handleContinue}
        />
      ) : step !== 'complete' && (
        <input
          type="text"
          className="bg-[#4500F9]/10 border border-[#4500F9]/30 rounded-xl px-4 py-2 text-white/90 placeholder-white/40 focus:outline-none focus:border-[#4500F9]/50 w-full max-w-[85%] transition-colors"
          value={formData[step] || ''}
          onChange={(e) => updateFormData(step, e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleContinue()}
          placeholder="Ihre Antwort..."
        />
      )}
    </motion.div>
  );
};

export default ContactFormStep;