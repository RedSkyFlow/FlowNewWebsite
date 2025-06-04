
import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';
import type { Genkit } from 'genkit';

// Augment the NodeJS global type with our Genkit instance
declare global {
  var __genkit_ai_instance: Genkit<any> | undefined;
}

let aiInstance: Genkit<any>;

if (process.env.NODE_ENV === 'production') {
  // In production, always create a new instance
  aiInstance = genkit({
    plugins: [googleAI()],
    model: 'googleai/gemini-2.0-flash',
  });
} else {
  // In development, use the existing global instance if it exists,
  // otherwise create a new one and store it globally.
  if (!global.__genkit_ai_instance) {
    global.__genkit_ai_instance = genkit({
      plugins: [googleAI()],
      model: 'googleai/gemini-2.0-flash',
    });
  }
  aiInstance = global.__genkit_ai_instance;
}

export const ai = aiInstance;
