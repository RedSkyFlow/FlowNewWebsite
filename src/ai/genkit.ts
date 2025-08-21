
import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';
import type { Genkit } from 'genkit';

// Augment the NodeJS global type with our Genkit instance
declare global {
  var __genkit_ai_instance: Genkit<any> | undefined;
}

let aiInstance: Genkit<any>;

// This pattern prevents Genkit from being re-initialized during Next.js hot reloads in development.
// It ensures that the same instance is used across the application's lifecycle in a dev environment.
if (process.env.NODE_ENV === 'production') {
  aiInstance = genkit({
    plugins: [googleAI()],
  });
} else {
  if (!global.__genkit_ai_instance) {
    global.__genkit_ai_instance = genkit({
      plugins: [googleAI()],
    });
  }
  aiInstance = global.__genkit_ai_instance;
}

export const ai = aiInstance;
