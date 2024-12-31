import React from 'react';
import { motion } from 'framer-motion';

interface ServiceSelectProps {
  value: string;
  onSelect: (service: string) => void;
}

const services = [
  'KI Chatbot',
  'Voice Agents',
  'Multi Agenten',
  'Consulting',
  'Karriere',
  'Anderes'
];

const ServiceSelect = ({ value, onSelect }: ServiceSelectProps) => {
  return (
    <div className="grid grid-cols-2 gap-3 max-w-[85%]">
      {services.map((service) => (
        <motion.button
          key={service}
          type="button"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelect(service)}
          className={`p-3 rounded-xl text-sm text-left transition-all ${
            value === service
              ? 'bg-[#4500F9] text-white'
              : 'bg-[#1F103B]/30 text-white/90 hover:bg-[#1F103B]/40'
          }`}
        >
          {service}
        </motion.button>
      ))}
    </div>
  );
};

export default ServiceSelect;