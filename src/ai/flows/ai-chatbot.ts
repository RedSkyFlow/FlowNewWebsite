// src/ai/flows/ai-chatbot.ts (Corrected)
// --- FIX START ---
// Consolidated imports to use the main 'genkit' entry point, which is the modern, correct way.
import { onFlow, prompt } from 'genkit';
// --- FIX END ---
import { z } from 'zod';
import { geminiPro } from 'genkitx-googleai';

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
    const { output } = await prompt(input);
    return output!;
  }
);