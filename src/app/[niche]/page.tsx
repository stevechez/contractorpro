import { notFound } from 'next/navigation';
import { nicheData, NicheKey } from '@/lib/nicheData';

// FIXED: Removed braces for components exported as 'export default'
import Hero from '@/components/Hero';
import TrustedBy from '@/components/sections/TrustedBy';
import ProcessTimeline from '@/components/sections/ProcessTimeline';

// KEEP: Braces for components exported as 'export function'
// (Ensure these match your actual exports in these files)
import { Services } from '@/components/sections/Services';
import { Testimonials } from '@/components/sections/Testimonials';
import { Pricing } from '@/components/sections/Pricing';
import { CTA } from '@/components/sections/CTA';

export function generateStaticParams() {
	return Object.keys(nicheData).map(niche => ({
		niche: niche,
	}));
}

export default async function NicheLandingPage({
	params,
}: {
	params: Promise<{ niche: string }>;
}) {
	const resolvedParams = await params;
	const currentNiche = nicheData[resolvedParams.niche as NicheKey];

	if (!currentNiche) {
		notFound();
	}

	return (
		<main className="flex min-h-screen flex-col bg-zinc-950">
			<Hero
				title={currentNiche.heroTitle}
				subtitle={currentNiche.heroSubtitle}
			/>

			<TrustedBy label={currentNiche.trustedText} />

			{/* Ensure Services component is updated to match the new dark theme */}
			<Services services={currentNiche.services || []} />

			<Testimonials />

			{/* These now match the high-end components we just wrote */}
			<ProcessTimeline />
			<Pricing />
			<CTA />
		</main>
	);
}
