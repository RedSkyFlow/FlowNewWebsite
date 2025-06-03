'use server';

import * as z from 'zod';

// Define the schema for contact form data, matching the client-side schema
const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  message: z.string().min(10),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export async function submitContactForm(
  data: ContactFormData
): Promise<{ success: boolean; error?: string; data?: ContactFormData }> {
  try {
    // Validate data against the schema
    const validatedData = contactFormSchema.parse(data);

    // In a real application, you would process the data here:
    // - Send an email
    // - Save to a database
    // - Integrate with a CRM
    console.log('Contact form submitted:', validatedData);

    // Simulate a delay for API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simulate a potential error for demonstration
    // if (validatedData.name.toLowerCase() === 'error') {
    //   return { success: false, error: 'Simulated server error processing your request.' };
    // }

    return { success: true, data: validatedData };
  } catch (error) {
    if (error instanceof z.ZodError) {
      // Handle validation errors
      console.error('Validation error:', error.errors);
      return { success: false, error: 'Invalid form data. Please check your input.' };
    }
    // Handle other errors
    console.error('Error submitting contact form:', error);
    return { success: false, error: 'An unexpected error occurred. Please try again later.' };
  }
}
