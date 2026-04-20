'use client';

import { motion, Variants } from 'framer-motion';
import { ArrowRight, PlayCircle } from 'lucide-react';

interface HeroProps {
	title?: string;
	subtitle?: string;
	bgImage?: string;
}

export default function Hero({ title, subtitle, bgImage }: HeroProps) {
	// Explicitly typing as Variants fixes the 'ease' array inference error
	const containerVariants: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.15, delayChildren: 0.2 },
		},
	};

	const itemVariants: Variants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
		},
	};

	return (
		<section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden bg-zinc-950">
			{/* Ultra-premium background glows */}
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 pointer-events-none">
				<div className="absolute inset-0 bg-gradient-to-b from-orange-500/30 to-transparent blur-[100px] rounded-full mix-blend-screen" />
			</div>

			<motion.div
				className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center"
				variants={containerVariants}
				initial="hidden"
				animate="visible"
			>
				{/* Subtle top badge */}
				<motion.div variants={itemVariants} className="mb-8">
					<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-sm font-medium text-zinc-300">
						<span className="flex h-2 w-2 rounded-full bg-orange-500 animate-pulse"></span>
						BuildRail Sites is now live
					</span>
				</motion.div>

				{/* Main Headline */}
				<motion.h1
					variants={itemVariants}
					className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-8 leading-[1.05]"
				>
					Stop Losing $10K+ Jobs to <br className="hidden md:block" />
					<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
						Contractors With Better Websites
					</span>
				</motion.h1>

				{/* Subheadline */}
				<motion.p
					variants={itemVariants}
					className="text-lg md:text-2xl text-zinc-400 max-w-3xl mb-12 leading-relaxed"
				>
					We build your entire contractor website in 48 hours—so you look
					premium, rank on Google, and win higher-paying clients.
				</motion.p>

				{/* CTAs */}
				<motion.div
					variants={itemVariants}
					className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-16"
				>
					<button className="group h-14 px-8 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-all shadow-[0_0_40px_rgba(249,115,22,0.2)] hover:shadow-[0_0_60px_rgba(249,115,22,0.4)] flex items-center justify-center gap-2 text-lg">
						Get My Site Built in 48 Hours
						<ArrowRight
							size={20}
							className="group-hover:translate-x-1 transition-transform"
						/>
					</button>

					<button className="h-14 px-8 bg-zinc-900 hover:bg-zinc-800 text-white font-medium rounded-xl border border-zinc-800 transition-all flex items-center justify-center gap-2 text-lg">
						<PlayCircle size={20} className="text-zinc-400" />
						View Example Sites
					</button>
				</motion.div>

				{/* Trust Bar */}
				<motion.div
					variants={itemVariants}
					className="flex flex-col items-center gap-4"
				>
					<p className="text-xs font-semibold text-zinc-500 uppercase tracking-[0.2em]">
						Built specifically for
					</p>
					<div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm md:text-base font-medium text-zinc-400">
						<span>Roofers</span>
						<span className="w-1 h-1 rounded-full bg-zinc-700"></span>
						<span>Remodelers</span>
						<span className="w-1 h-1 rounded-full bg-zinc-700"></span>
						<span>HVAC</span>
						<span className="w-1 h-1 rounded-full bg-zinc-700"></span>
						<span>General Contractors</span>
					</div>
				</motion.div>
			</motion.div>

			{/* Bottom fade out to next section */}
			<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none"></div>
		</section>
	);
}
