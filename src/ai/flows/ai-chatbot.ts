// src/ai/flows/ai-chatbot.ts (Corrected)

// --- FIX START ---
// Corrected imports to use the main 'genkit' package and the official Google GenAI plugin.
import { onFlow, prompt } from 'genkit';
import { geminiPro } from '@genkit-ai/google-genai';
// --- FIX END ---

import { z } from 'zod';

// Define the input schema for our chatbot flow
export const AIChatbotInputSchema = z.object({
  history: z.array(z.object({
    role: z.string(),
    content: z.string(),
  })),
  prompt: z.string(),
});

// Define the output schema for our chatbot flow
export const AIChatbotOutputSchema = z.object({
  role: z.string(),
  content: z.string(),
});

// Define the Genkit flow for the chatbot
export const aiChatbotFlow = onFlow(
  {
    name: 'aiChatbotFlow',
    inputSchema: AIChatbotInputSchema,
    outputSchema: AIChatbotOutputSchema,
  },
  async (input: z.infer<typeof AIChatbotInputSchema>) => {
    // This will now correctly use the prompt and model from the correct packages.
    const { output } = await prompt(input);
    return output!;
  }
);