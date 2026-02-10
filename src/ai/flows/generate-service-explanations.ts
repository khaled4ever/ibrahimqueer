'use server';

/**
 * @fileOverview Generates service explanations for the workshop website.
 *
 * - generateServiceExplanations - A function that generates service explanations.
 * - ServiceExplanationsInput - The input type for the generateServiceExplanations function.
 * - ServiceExplanationsOutput - The return type for the generateServiceExplanations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ServiceExplanationsInputSchema = z.object({
  serviceName: z.string().describe('The name of the service to explain.'),
  workshopSpecialties: z.array(z.string()).describe('A list of workshop specialties, e.g., German, European, and Chinese cars.'),
});
export type ServiceExplanationsInput = z.infer<typeof ServiceExplanationsInputSchema>;

const ServiceExplanationsOutputSchema = z.object({
  explanation: z.string().describe('A detailed explanation of the service.'),
});
export type ServiceExplanationsOutput = z.infer<typeof ServiceExplanationsOutputSchema>;

export async function generateServiceExplanations(input: ServiceExplanationsInput): Promise<ServiceExplanationsOutput> {
  return generateServiceExplanationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'serviceExplanationsPrompt',
  input: {schema: ServiceExplanationsInputSchema},
  output: {schema: ServiceExplanationsOutputSchema},
  prompt: `You are an expert in automotive services, skilled at explaining technical details in an easy-to-understand manner.

  Generate a detailed and informative explanation for the following service offered by "المركز الفني للسيارات", a workshop specializing in {{workshopSpecialties}}:

  Service: {{serviceName}}

  Explanation:`,
});

const generateServiceExplanationsFlow = ai.defineFlow(
  {
    name: 'generateServiceExplanationsFlow',
    inputSchema: ServiceExplanationsInputSchema,
    outputSchema: ServiceExplanationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
