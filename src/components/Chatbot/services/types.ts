export interface WebhookResponse {
  response: string;
}

export interface WebhookPayload {
  chatHistory: string;
  lastMessage: string;
}