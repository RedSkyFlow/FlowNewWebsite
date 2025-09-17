/**
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { genkit, z } from 'genkit';
import { googleAI } from '@genkit-ai/google-genai';

const ai = genkit({
  plugins: [googleAI()],
});

export const TextToSpeechInputSchema = z.object({
  text: z.string(),
});

export const TextToSpeechOutputSchema = z.object({
  media: z.string(),
});

export const textToSpeechFlow = ai.defineFlow(
  {
    name: 'textToSpeechFlow',
    inputSchema: TextToSpeechInputSchema,
    outputSchema: TextToSpeechOutputSchema,
  },
  async (input: z.infer<typeof TextToSpeechInputSchema>) => {
    const { media } = await ai.generate({
      model: googleAI.model('gemini-1.5-flash-preview-tts'),
      prompt: input.text,
      config: {
        voice: 'gemini-1.5-flash-preview-tts-sweetie',
      },
    });

    if (!media?.url) {
      throw new Error("Text-to-speech generation failed to produce media.");
    }

    return { media: media.url };
  }
);