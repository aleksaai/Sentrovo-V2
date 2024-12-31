import React, { useState } from 'react';
import ModernChatInterface from './ModernChatInterface';
import ChatbotFeature from './ChatbotFeature';
import FeatureInfo from './FeatureInfo';
import { chatbotFeatures } from './features';
import { MessageSquare } from 'lucide-react';

const ChatbotSection = () => {
  const [selectedFeature, setSelectedFeature] = useState('default');

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center space-x-2 mb-4 bg-[#1F103B]/30 backdrop-blur-sm rounded-full px-4 py-1.5 border border-[#ffffff0f]">
            <MessageSquare className="w-4 h-4 text-[#4500F9]" />
            <span className="text-sm text-[#CCAFFF]">AI Chatbot</span>
          </div>
          
          <h2 className="text-6xl font-bold bg-gradient-to-r from-[#CCAFFF] to-[#4500F9] bg-clip-text text-transparent">
            Effiziente Prozesse mit KI-Chatbots
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-16">
          {/* Left side - Chat Interface */}
          <div className="w-full lg:w-1/2">
            <ModernChatInterface />
          </div>

          {/* Right side - Info and Features */}
          <div className="w-full lg:w-1/2">
            {/* Info Box */}
            <FeatureInfo 
              selectedFeature={selectedFeature} 
              features={chatbotFeatures}
            />

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {chatbotFeatures.map((feature) => (
                <ChatbotFeature
                  key={feature.id}
                  icon={feature.icon}
                  text={feature.text}
                  isActive={selectedFeature === feature.id}
                  onClick={() => setSelectedFeature(feature.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatbotSection;