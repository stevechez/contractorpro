import React from 'react';
import Hero from '@/components/Hero';
import TrustedBy from '@/components/sections/TrustedBy';
import PainSection from '@/components/sections/PainSection';
import OfferSection from '@/components/sections/OfferSection';
import FeaturesGrid from '@/components/sections/FeaturesGrid';
import BeforeAndAfter from '@/components/sections/BeforeAndAfter';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import { Pricing } from '@/components/sections/Pricing';
import { CTA } from '@/components/sections/CTA';

export default function BuildRailSitesPage() {
	return (
		<div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-orange-500/30 pb-24 md:pb-0">
			<Hero />
			<TrustedBy />
			<PainSection />
			<OfferSection />
			<FeaturesGrid />
			<BeforeAndAfter />
			<ProcessTimeline />
			<Pricing />
			<CTA />

			{/* Mobile Sticky CTA */}
			<div className="fixed bottom-0 left-0 right-0 p-4 bg-zinc-950/90 backdrop-blur-md border-t border-zinc-800 md:hidden z-50">
				<button className="w-full h-14 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(249,115,22,0.3)]">
					Get Site in 48 Hours
				</button>
			</div>
		</div>
	);
}
