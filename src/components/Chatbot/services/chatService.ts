import { Message } from '../types/ChatTypes';
import { WebhookError, ValidationError } from './errors';
import { validateWebhookResponse } from './validators';
import { WebhookPayload } from './types';
import { WebhookClient } from './webhookClient';

const formatChatHistory = (messages: Message[]): string => {
  return messages
    .map(msg => `${msg.sender}: ${msg.content}`)
    .join('\n');
};

export const sendMessageToWebhook = async (
  messages: Message[], 
  lastMessage: string
): Promise<string> => {
  try {
    const chatHistory = formatChatHistory(messages);
    const payload: WebhookPayload = { chatHistory, lastMessage };
    
    const data = await WebhookClient.send(payload);
    
    if (!validateWebhookResponse(data)) {
      throw new ValidationError('Invalid response format');
    }

    return data.response;
  } catch (error) {
    if (error instanceof ValidationError || error instanceof WebhookError) {
      throw error;
    }
    
    throw new WebhookError(
      'Failed to communicate with the chat service',
      500
    );
  }
};