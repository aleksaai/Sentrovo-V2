import { FormEvent } from 'react';

export const submitFormValue = (value: string) => {
  const chatInput = document.querySelector('input[type="text"]') as HTMLInputElement;
  if (!chatInput?.form) return;

  // Update input value
  chatInput.value = value;

  // Trigger change event
  const changeEvent = new Event('change', { bubbles: true });
  chatInput.dispatchEvent(changeEvent);

  // Trigger form submission
  const submitEvent = new Event('submit', { bubbles: true });
  chatInput.form.dispatchEvent(submitEvent);
};