// This file is machine-generated - edit at your own risk!

'use server';

/**
 * @fileOverview Generates images for the services offered by the workshop.
 *
 * - generateServiceImage - A function that generates an image for a given service description.
 * - GenerateServiceImageInput - The input type for the generateServiceImage function.
 * - GenerateServiceImageOutput - The return type for the generateServiceImage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateServiceImageInputSchema = z.object({
  serviceDescription: z
    .string()
    .describe('The description of the service for which to generate an image.'),
});

export type GenerateServiceImageInput = z.infer<typeof GenerateServiceImageInputSchema>;

const GenerateServiceImageOutputSchema = z.object({
  imageUrl: z
    .string()
    .describe('The data URI of the generated image in base64 format.'),
});

export type GenerateServiceImageOutput = z.infer<typeof GenerateServiceImageOutputSchema>;

export async function generateServiceImage(
  input: GenerateServiceImageInput
): Promise<GenerateServiceImageOutput> {
  return generateServiceImageFlow(input);
}

const generateServiceImagePrompt = ai.definePrompt({
  name: 'generateServiceImagePrompt',
  input: {schema: GenerateServiceImageInputSchema},
  output: {schema: GenerateServiceImageOutputSchema},
  prompt: `Generate a visually appealing image for the following service:

Service Description: {{{serviceDescription}}}

Please generate the image and return it as a data URI in base64 format in the imageUrl field.
`,
});

const generateServiceImageFlow = ai.defineFlow(
  {
    name: 'generateServiceImageFlow',
    inputSchema: GenerateServiceImageInputSchema,
    outputSchema: GenerateServiceImageOutputSchema,
  },
  async input => {
    const {media} = await ai.generate({
      model: 'googleai/imagen-4.0-fast-generate-001',
      prompt: input.serviceDescription,
    });

    return {imageUrl: media.url!};
  }
);
