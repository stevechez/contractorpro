// app/api/webhooks/lemonsqueezy/route.ts

import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { createClient } from '@supabase/supabase-js';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function POST(req: Request) {
	try {
		const rawBody = await req.text();
		const signature = req.headers.get('x-signature');
		const secret = process.env.LEMON_SQUEEZY_WEBHOOK_SECRET;

		if (!signature || !secret) {
			return NextResponse.json(
				{ error: 'Missing signature or secret' },
				{ status: 400 },
			);
		}

		const hmac = crypto.createHmac('sha256', secret);
		const digest = hmac.update(rawBody).digest('hex');

		if (digest !== signature) {
			console.error('Invalid Lemon Squeezy webhook signature.');
			return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
		}

		const payload = JSON.parse(rawBody);
		const eventName = payload.meta?.event_name;

		// ✅ Create Supabase client INSIDE handler
		const supabaseAdmin = createClient(
			process.env.NEXT_PUBLIC_SUPABASE_URL!,
			process.env.SUPABASE_SERVICE_ROLE_KEY!,
		);

		if (eventName === 'order_created') {
			const orderData = payload.data.attributes;
			const leadId = payload.meta?.custom_data?.lead_id;

			if (!leadId) {
				console.error('No lead_id found in custom_data.');
				return NextResponse.json({ success: true });
			}

			const { error } = await supabaseAdmin
				.from('leads')
				.update({
					status: 'paid',
					order_id: payload.data.id,
					amount_paid: orderData.total,
					paid_at: new Date().toISOString(),
				})
				.eq('id', leadId);

			if (error) {
				console.error('Supabase update failed:', error);
				return NextResponse.json(
					{ error: 'DB update failed' },
					{ status: 500 },
				);
			}

			console.log(`Processed payment for lead: ${leadId}`);
		}

		return NextResponse.json({ success: true });
	} catch (error: any) {
		console.error('Webhook processing error:', error);
		return NextResponse.json(
			{ error: 'Internal Server Error' },
			{ status: 500 },
		);
	}
}
