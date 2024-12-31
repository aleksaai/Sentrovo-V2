import { WEBHOOK_CONFIG } from './config';
import { WebhookError } from './errors';
import { WebhookPayload, WebhookResponse } from './types';

export class WebhookClient {
  static async send(payload: WebhookPayload): Promise<WebhookResponse> {
    try {
      const response = await fetch(WEBHOOK_CONFIG.URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new WebhookError(
          `Request failed: ${response.statusText}`,
          response.status
        );
      }

      const text = await response.text();
      return { response: text };
    } catch (error: any) {
      console.error('Webhook error:', error);
      throw new WebhookError(
        'Failed to communicate with the chat service',
        500
      );
    }
  }
}