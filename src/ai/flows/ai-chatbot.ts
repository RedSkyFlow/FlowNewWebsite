// src/ai/flows/ai-chatbot.ts (Corrected)
import { onFlow } from 'genkit/server';
import { z } from 'zod';
import { geminiPro } from 'genkitx-googleai';
import { prompt } from 'genkit/dotprompt';

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
  // --- FIX START ---
  // We must explicitly type the 'input' parameter to satisfy TypeScript's 'noImplicitAny' rule.
  // We can infer the type directly from our Zod input schema.
  async (input: z.infer<typeof AIChatbotInputSchema>) => {
  // --- FIX END ---
    const { output } = await prompt(input);
    return output!;
  }
);