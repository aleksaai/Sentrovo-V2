import { useState, useCallback } from 'react';
import { Message, FormData, Step } from '../types/ContactTypes';
import { getNextStep, getStepMessage, validateInput } from '../utils/chatFlow';

export const useContactChat = () => {
  const [messages, setMessages] = useState<Message[]>([{
    id: '1',
    content: 'Willkommen bei Sentrovo! Wie dürfen wir Sie nennen?',
    sender: 'bot',
    timestamp: Date.now()
  }]);
  
  const [currentStep, setCurrentStep] = useState<Step>('name');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [currentInputValue, setCurrentInputValue] = useState('');

  const submitFormData = async (data: FormData): Promise<boolean> => {
    try {
      const response = await fetch('https://hook.eu2.make.com/12jl1evymufm1wt2q9gjogyz4onfthdq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          service: data.service,
          message: data.message,
          timestamp: new Date().toISOString()
        })
      });

      if (!response.ok) {
        console.error('Submission failed:', await response.text());
        return false;
      }

      return true;
    } catch (error) {
      console.error('Submission error:', error);
      return false;
    }
  };

  const handleServiceSelect = useCallback((service: string) => {
    setFormData(prev => ({ ...prev, service }));
    setCurrentInputValue(service);
    
    const userMessage: Message = {
      id: Date.now().toString(),
      content: service,
      sender: 'user',
      timestamp: Date.now()
    };
    
    setMessages(prev => [...prev, userMessage]);
    
    const nextStep = getNextStep(currentStep);
    if (nextStep) {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: getStepMessage(nextStep),
        sender: 'bot',
        timestamp: Date.now()
      };
      setMessages(prev => [...prev, botMessage]);
      setCurrentStep(nextStep);
      setCurrentInputValue('');
    }
  }, [currentStep]);

  const handleInput = useCallback(async (value: string) => {
    if (!value.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: value,
      sender: 'user',
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    const validationError = validateInput(currentStep, value);
    if (validationError) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: validationError,
        sender: 'bot',
        timestamp: Date.now()
      };
      setMessages(prev => [...prev, errorMessage]);
      setIsLoading(false);
      return;
    }

    const updatedFormData = { ...formData, [currentStep]: value };
    setFormData(updatedFormData);

    await new Promise(resolve => setTimeout(resolve, 1000));

    if (currentStep === 'message') {
      const success = await submitFormData(updatedFormData);
      
      const responseMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: success 
          ? 'Vielen Dank für Ihre Nachricht! Wir werden uns schnellstmöglich bei Ihnen melden.'
          : 'Entschuldigung, es gab einen Fehler bei der Übermittlung. Bitte versuchen Sie es später erneut.',
        sender: 'bot',
        timestamp: Date.now()
      };
      setMessages(prev => [...prev, responseMessage]);
      setCurrentStep('complete');
    } else {
      const nextStep = getNextStep(currentStep);
      if (nextStep) {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: getStepMessage(nextStep),
          sender: 'bot',
          timestamp: Date.now()
        };
        setMessages(prev => [...prev, botMessage]);
        setCurrentStep(nextStep);
      }
    }
    
    setIsLoading(false);
  }, [currentStep, formData]);

  return {
    messages,
    currentStep,
    formData,
    handleInput,
    handleServiceSelect,
    isLoading,
    currentInputValue
  };
};