// app/actions/intake.ts
"use server";

import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

// Initialize Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitIntakeForm(formData: FormData) {
  // 1. Extract data
  const data = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    company: formData.get("company") as string,
    service: formData.get("service") as string,
    website: formData.get("website") as string,
    goals: formData.get("goals") as string,
  };

  // 2. Validate
  if (!data.name || !data.email || !data.company || !data.service || !data.goals) {
    return { error: "Missing required fields" };
  }

  // 3. Insert into Supabase AND return the newly created row so we get the ID
  const { data: newLead, error } = await supabase
    .from("leads")
    .insert([data])
    .select()
    .single();

  if (error || !newLead) {
    console.error("Supabase Error:", error);
    return { error: "Failed to submit application. Please try again." };
  }

  // 4. Generate the custom Lemon Squeezy checkout URL 
  // It attaches the exact Supabase ID to the transaction so your webhook can catch it later
  const storeUrl = process.env.LEMON_SQUEEZY_STORE_URL;
  const checkoutUrl = `${storeUrl}?checkout[email]=${encodeURIComponent(data.email)}&checkout[custom][lead_id]=${newLead.id}`;

  // 5. Send the Email Notification via Resend
  try {
    await resend.emails.send({
      from: "ContractorPro Leads <onboarding@sitealerts.online>",
      // IMPORTANT: Put YOUR actual email address here to receive the alerts
      to: "stevechez@gmail.com", 
      subject: `🚨 New $2.5k Lead: ${data.company}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #2563EB; margin-top: 0;">New Project Request</h2>
          <p>A new lead just filled out the intake form for ContractorPro.</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Name:</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #eee;">${data.name}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Email:</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #eee;">
              <a href="mailto:${data.email}">${data.email}</a>
            </td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Company:</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #eee;">${data.company}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Focus Area:</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #eee;">${data.service}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Website:</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #eee;">${data.website || 'None'}</td></tr>
          </table>
          
          <h3 style="margin-top: 24px; margin-bottom: 8px;">Project Goals:</h3>
          <div style="background: #f8fafc; padding: 16px; border-radius: 6px; color: #334155; line-height: 1.5;">
            ${data.goals}
          </div>
          
          <div style="margin-top: 32px; text-align: center; display: flex; gap: 12px; justify-content: center;">
            <a href="mailto:${data.email}?subject=Your ContractorPro Website Build" style="background: #475569; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">Reply to Lead</a>
            
            <a href="${checkoutUrl}" style="background: #2563EB; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">Copy Checkout Link</a>
          </div>

          <p style="margin-top: 24px; font-size: 12px; color: #64748b; text-align: center; word-break: break-all;">
            <strong>Raw Checkout URL:</strong><br/>
            ${checkoutUrl}
          </p>
        </div>
      `,
    });
  } catch (emailError) {
    console.error("Resend Error:", emailError);
  }

  return { success: true };
}