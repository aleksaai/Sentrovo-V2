import React from 'react';
import { useContactChat } from './hooks/useContactChat';
import ChatHeader from './ChatHeader';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';
import ContactHeader from './ContactHeader';

const ContactForm = () => {
  const { 
    messages, 
    currentStep, 
    formData, 
    handleInput, 
    handleServiceSelect,
    isLoading,
    currentInputValue 
  } = useContactChat();

  return (
    <section className="relative pt-44 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <ContactHeader />
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-b from-[#4500F9]/20 via-[#4500F9]/10 to-transparent blur-xl" />
          
          <div className="relative bg-black/40 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden h-[600px] flex flex-col">
            <ChatHeader />
            <ChatMessages 
              messages={messages}
              currentStep={currentStep}
              formData={formData}
              onServiceSelect={handleServiceSelect}
            />
            <ChatInput 
              currentValue={currentInputValue}
              onSendMessage={handleInput}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;