import { WEBHOOK_CONFIG } from './config';

export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const shouldRetry = (error: any, retryCount: number): boolean => {
  if (retryCount >= WEBHOOK_CONFIG.MAX_RETRIES) return false;
  
  // Retry on network errors or 5xx server errors
  if (!error.status) return true; // Network error
  return error.status >= 500;
};

export const getRetryDelay = (retryCount: number): number => {
  // Exponential backoff
  return WEBHOOK_CONFIG.RETRY_DELAY * Math.pow(2, retryCount);
};