import React from 'react';
import SectionTitle from './SectionTitle';
import VoiceInterface from './VoiceInterface';

const VoiceAgentsSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle />
        <VoiceInterface />
      </div>
    </section>
  );
};

export default VoiceAgentsSection;