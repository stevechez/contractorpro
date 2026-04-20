'use client';

import { motion, Variants } from 'framer-motion';
import {
	LayoutTemplate,
	Smartphone,
	TrendingUp,
	ShieldCheck,
	Zap,
} from 'lucide-react';

export default function FeaturesGrid() {
	const containerVariants: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.15 },
		},
	};

	const cardVariants: Variants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
		},
	};

	const features = [
		{
			icon: <Smartphone className="text-orange-400" size={32} />,
			title: 'Mobile-First Design',
			desc: 'Optimized for homeowners browsing your site on-the-go.',
		},
		{
			icon: <LayoutTemplate className="text-orange-400" size={32} />,
			title: '5-Page Structure',
			desc: '(Home, About, Services, Gallery, Quote)',
		},
		{
			icon: <ShieldCheck className="text-orange-400" size={32} />,
			title: 'Local SEO-Ready',
			desc: 'Built so your business shows up in local Google search results.',
		},
		{
			icon: <TrendingUp className="text-orange-400" size={32} />,
			title: 'Conversion-Focused',
			desc: 'Native call, text, and quote capture forms on every page.',
		},
		{
			icon: <Zap className="text-orange-400" size={32} />,
			title: 'Guaranteed 48-Hr Launch',
			desc: 'Your site is live and capturing leads in 48 hours, or you don’t pay.',
		},
	];

	return (
		<section className="relative py-32 px-6 bg-zinc-950 border-t border-zinc-900 overflow-hidden">
			{/* Subtle ambient background glow */}
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-zinc-900/10 to-transparent pointer-events-none" />

			<motion.div
				className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: '-100px' }}
				variants={containerVariants}
			>
				{/* Headline */}
				<motion.h2
					variants={cardVariants}
					className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight leading-tight text-white"
				>
					Everything You Need to <br />
					<span className="text-zinc-400">Win Higher-Paying Jobs</span>
				</motion.h2>

				<motion.p
					variants={cardVariants}
					className="text-xl md:text-2xl text-zinc-400 max-w-3xl mb-16 leading-relaxed"
				>
					No fluff. No complex integrations. Just the essential features
					designed to build immediate credibility and capture leads from
					high-end clients.
				</motion.p>

				{/* Features Grid */}
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
					{features.map((feature, i) => (
						<motion.div
							key={i}
							variants={cardVariants}
							className={`group flex flex-col items-start gap-6 bg-zinc-900/50 backdrop-blur-xl p-8 rounded-3xl border border-zinc-800 hover:bg-zinc-900 hover:border-zinc-700 transition-all duration-300 ${i === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
						>
							<div className="flex items-center gap-4">
								<div className="p-3 bg-zinc-950 rounded-2xl border border-zinc-800 shadow-inner shrink-0 transition-transform group-hover:scale-110 duration-300">
									{feature.icon}
								</div>
								<h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
									{feature.title}
								</h3>
							</div>
							<p className="text-lg text-zinc-400 leading-relaxed text-left flex-grow">
								{feature.desc}
							</p>
						</motion.div>
					))}
				</div>

				{/* Final CTA-like conclusion */}
				<motion.p
					variants={cardVariants}
					className="text-center text-xl font-medium text-zinc-300 bg-zinc-900 border border-zinc-800 px-8 py-4 rounded-2xl w-fit"
				>
					Bottom line:{' '}
					<span className="text-white font-semibold">
						No meetings. No confusion. No delays.
					</span>
				</motion.p>
			</motion.div>
		</section>
	);
}
