import React from 'react';
import { Step } from './types/ContactTypes';
import ServiceSelect from './ServiceSelect';

interface StepInputProps {
  step: Step;
  value: string;
  onChange: (value: string) => void;
}

const StepInput = ({ step, value, onChange }: StepInputProps) => {
  if (step === 'service') {
    return <ServiceSelect value={value} onChange={onChange} />;
  }

  return (
    <input
      type={step === 'email' ? 'email' : 'text'}
      className="w-full max-w-[85%] bg-[#4500F9]/10 border border-[#4500F9]/30 rounded-xl px-4 py-2 text-white/90 placeholder-white/40 focus:outline-none focus:border-[#4500F9]/50 transition-colors"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Ihre Antwort..."
    />
  );
};

export default StepInput;