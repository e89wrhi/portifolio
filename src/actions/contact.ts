'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactFormAction(data: {
  email: string;
  message: string;
}) {
  try {
    const { data: resData, error } = await resend.emails.send({
      from: process.env.CONTACT_EMAIL_FROM || 'Contact <onboarding@resend.dev>', // Prefer verified domain in prod
      to: [process.env.CONTACT_EMAIL_TO || 'hello@example.com'], // The email where inquiries should go
      subject: `New Business Inquiry from ${data.email}`,
      text: data.message,
      replyTo: data.email, // Convenient way to reply to the applicant
    });

    if (error) {
      console.error('Resend error:', error);
      return {
        success: false,
        error: 'Failed to send message. Please try again later.',
      };
    }

    return { success: true, data: resData };
  } catch (error) {
    console.error('Contact action error:', error);
    return { success: false, error: 'An unexpected error occurred.' };
  }
}
