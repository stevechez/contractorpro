// app/actions/contact.ts
"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(formData: FormData) {
  // 1. Extract data from the form
  const data = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    subject: formData.get("subject") as string,
    message: formData.get("message") as string,
  };

  // 2. Basic Validation
  if (!data.name || !data.email || !data.subject || !data.message) {
    return { error: "Please fill in all required fields." };
  }

  // 3. Send the Email via Resend
  try {
    await resend.emails.send({
      from: "ContractorPro Support <onboarding@resend.dev>",
      // Replace with your verified email
      to: "stevechez@gmail.com", 
      subject: `Support Inquiry: ${data.subject} from ${data.name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #2563EB; margin-top: 0;">New Support Message</h2>
          <p>You have received a new message from the ContractorPro Contact Form.</p>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0 0 10px 0;"><strong>From:</strong> ${data.name} (${data.email})</p>
            <p style="margin: 0 0 10px 0;"><strong>Subject:</strong> ${data.subject}</p>
            <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 15px 0;" />
            <p style="margin: 0; line-height: 1.6; color: #334155;">${data.message}</p>
          </div>
          
          <div style="text-align: center; margin-top: 30px;">
            <a href="mailto:${data.email}?subject=Re: ${data.subject}" 
               style="background: #2563EB; color: white; padding: 12px 25px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">
               Reply to Message
            </a>
          </div>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Resend Support Error:", error);
    return { error: "Failed to send message. Please try again later." };
  }
}