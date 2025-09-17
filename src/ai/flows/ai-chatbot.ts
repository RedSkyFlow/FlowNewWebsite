import { z } from 'genkit';
import { googleAI } from '@genkit-ai/google-genai';
import { Part } from '@genkit-ai/ai';
import { ai } from '../genkit';

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
export const aiChatbotFlow = ai.defineFlow(
  {
    name: 'aiChatbotFlow',
    inputSchema: AIChatbotInputSchema,
    outputSchema: AIChatbotOutputSchema,
  },
  async (input: z.infer<typeof AIChatbotInputSchema>) => {
    const model = googleAI.model('gemini-1.5-flash');

    const messages = input.history.map((msg) => ({
      role: msg.role as 'user' | 'model',
      content: [{ text: msg.content } as Part],
    }));

    const response = await ai.generate({
      model,
      messages,
      prompt: input.prompt,
    });

    const message = response.message;
    if (!message) {
      throw new Error("Failed to generate a response from the model.");
    }

    return { role: message.role, content: response.text };
  }
);