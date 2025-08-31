import { config } from 'dotenv';
config();

// This pattern prevents Genkit flows from being re-defined during Next.js hot reloads in development.
// It ensures that the same instances are used across the application's lifecycle in a dev environment.
let flowsDefined = false;
if (process.env.NODE_ENV === 'development') {
  if ((global as any).__genkit_flows_defined) {
    flowsDefined = true;
  } else {
    (global as any).__genkit_flows_defined = true;
  }
}

if (!flowsDefined) {
  require('@/ai/flows/ai-chatbot.ts');
  require('@/ai/flows/text-to-speech.ts');
}
