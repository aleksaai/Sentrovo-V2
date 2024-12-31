import { WebhookResponse } from './types';

export const validateWebhookResponse = (data: unknown): data is WebhookResponse => {
  if (typeof data === 'string') {
    return true;
  }
  
  if (!data || typeof data !== 'object') {
    return false;
  }

  return 'response' in data && typeof (data as WebhookResponse).response === 'string';
};