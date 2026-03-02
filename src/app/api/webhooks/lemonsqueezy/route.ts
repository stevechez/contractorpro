// app/api/webhooks/lemonsqueezy/route.ts
import { NextResponse } from "next/server";
import crypto from "crypto";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase with the Service Role key to bypass RLS for background updates
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    // 1. Get the raw body for signature verification
    const rawBody = await req.text();
    const signature = req.headers.get("x-signature") as string;
    const secret = process.env.LEMON_SQUEEZY_WEBHOOK_SECRET!;

    // 2. Cryptographically verify the request actually came from Lemon Squeezy
    const hmac = crypto.createHmac("sha256", secret);
    const digest = Buffer.from(hmac.update(rawBody).digest("hex"), "utf8");
    const signatureBuffer = Buffer.from(signature, "utf8");

    if (!crypto.timingSafeEqual(digest, signatureBuffer)) {
      console.error("Invalid Lemon Squeezy webhook signature.");
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }

    // 3. Parse the validated payload
    const payload = JSON.parse(rawBody);
    const eventName = payload.meta.event_name;

    // 4. Handle the specific event
    if (eventName === "order_created") {
      const orderData = payload.data.attributes;
      
      // Extract the custom lead_id we passed in the URL
      const leadId = payload.meta.custom_data?.lead_id;

      if (!leadId) {
        console.error("Order created, but no lead_id was found in custom_data.");
        return NextResponse.json({ success: true }); // Still return 200 to acknowledge receipt
      }

      // 5. Update the Lead in Supabase
      const { error } = await supabaseAdmin
        .from("leads")
        .update({ 
          status: "paid", 
          order_id: payload.data.id,
          amount_paid: orderData.total,
          paid_at: new Date().toISOString() 
        })
        .eq("id", leadId);

      if (error) {
        console.error("Supabase update failed:", error);
        throw new Error("Failed to update lead status");
      }

      console.log(`Successfully processed payment for lead: ${leadId}`);
    }

    return NextResponse.json({ success: true });
    
  } catch (error: any) {
    console.error("Webhook processing error:", error.message);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}