export type Step = 'name' | 'email' | 'phone' | 'service' | 'message' | 'complete';

export interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export interface ChatMessage {
  type: 'bot' | 'user';
  content: string;
}