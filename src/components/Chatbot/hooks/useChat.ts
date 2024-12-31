import { useState, useCallback } from 'react';
import { Message } from '../types/ChatTypes';
import { sendMessageToWebhook } from '../services/chatService';
import { WebhookError, ValidationError } from '../services/errors';

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Wie können wir dir weiterhelfen?',
      sender: 'bot',
      timestamp: Date.now()
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: 'user',
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const botResponse = await sendMessageToWebhook(messages, content);
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: botResponse,
        sender: 'bot',
        timestamp: Date.now()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      
      let errorMessage = 'Entschuldigung, es gab einen Fehler bei der Verarbeitung Ihrer Nachricht.';
      
      if (error instanceof WebhookError) {
        errorMessage = 'Der Chat-Service ist momentan nicht erreichbar. Bitte versuchen Sie es später erneut.';
      } else if (error instanceof ValidationError) {
        errorMessage = 'Es gab ein Problem bei der Verarbeitung der Antwort. Unser Team wurde benachrichtigt.';
      }

      const errorBotMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: errorMessage,
        sender: 'bot',
        timestamp: Date.now()
      };
      
      setMessages(prev => [...prev, errorBotMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [messages]);

  return {
    messages,
    isLoading,
    sendMessage
  };
};