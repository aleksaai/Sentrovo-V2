import React, { useState } from 'react';
import { Pencil, Image, Mic, Sparkles } from 'lucide-react';
import FeatureCard from './FeatureCard';

const features = [
  {
    icon: Pencil,
    title: 'Komplexe Fragen',
    description: 'Beantworten',
    hoverText: 'Stellen Sie komplexe Fragen und erhalten Sie präzise Antworten'
  },
  {
    icon: Image,
    title: 'Digitale Kunst',
    description: 'Erstellen',
    hoverText: 'Generieren Sie einzigartige digitale Kunstwerke mit KI'
  },
  {
    icon: Mic,
    title: 'Sprach-',
    description: 'befehle',
    hoverText: 'Steuern Sie Ihre Anwendungen durch Sprachbefehle'
  },
  {
    icon: Sparkles,
    title: 'KI Content',
    description: 'Generieren',
    hoverText: 'Erstellen Sie professionelle Inhalte mit KI-Unterstützung'
  }
];

const FeatureGrid = () => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-2 gap-4">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          {...feature}
          isActive={activeFeature === index}
          onMouseEnter={() => setActiveFeature(index)}
          onMouseLeave={() => setActiveFeature(null)}
        />
      ))}
    </div>
  );
};

export default FeatureGrid;