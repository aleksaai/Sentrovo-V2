import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Feature {
  id: string;
  icon: string;
  text: string;
  description: string;
}

interface FeatureInfoProps {
  selectedFeature: string;
  features: Feature[];
}

const FeatureInfo = ({ selectedFeature, features }: FeatureInfoProps) => {
  const getFeatureContent = () => {
    if (selectedFeature === 'default') {
      return {
        icon: '🤖',
        title: 'Wählen Sie eine Funktion',
        description: 'Entdecken Sie die vielfältigen Möglichkeiten unserer KI-Chatbots. Klicken Sie auf die verschiedenen Funktionen, um mehr zu erfahren.'
      };
    }

    const feature = features.find(f => f.id === selectedFeature);
    return {
      icon: feature?.icon || '🤖',
      title: feature?.text || '',
      description: feature?.description || ''
    };
  };

  const content = getFeatureContent();

  return (
    <div className="bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 p-6 mb-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedFeature}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-3">
            <span className="text-3xl">{content.icon}</span>
            <h3 className="text-xl font-semibold text-white/90">{content.title}</h3>
          </div>
          <p className="text-[#CCAFFF] leading-relaxed">
            {content.description}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default FeatureInfo;