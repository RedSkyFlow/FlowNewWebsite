// This is an AI-powered chatbot that can answer user queries.
'use server';
/**
 * @fileOverview An AI chatbot for answering user queries about AI Gateways.
 *
 * - aiChatbot - A function that handles the chatbot process.
 * - AIChatbotInput - The input type for the aiChatbot function.
 * - AIChatbotOutput - The return type for the aiChatbot function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIChatbotInputSchema = z.object({
  query: z.string().describe('The user query about AI Gateways.'),
});
export type AIChatbotInput = z.infer<typeof AIChatbotInputSchema>;

const AIChatbotOutputSchema = z.object({
  answer: z.string().describe('The answer to the user query.'),
});
export type AIChatbotOutput = z.infer<typeof AIChatbotOutputSchema>;

export async function aiChatbot(input: AIChatbotInput): Promise<AIChatbotOutput> {
  return aiChatbotFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiChatbotPrompt',
  input: {schema: AIChatbotInputSchema},
  output: {schema: AIChatbotOutputSchema},
  prompt: `You are an AI chatbot expert on AI Gateways. Use your knowledge to answer the following user query. Provide a clear and concise answer.\n\nUser Query: {{{query}}}`,
});

const aiChatbotFlow = ai.defineFlow(
  {
    name: 'aiChatbotFlow',
    inputSchema: AIChatbotInputSchema,
    outputSchema: AIChatbotOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
