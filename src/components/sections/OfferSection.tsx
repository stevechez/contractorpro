'use client';

import { motion, Variants } from 'framer-motion';
import { X, ImagePlus, Zap } from 'lucide-react';

export default function OfferSection() {
	const containerVariants: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.15 },
		},
	};

	const itemVariants: Variants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
		},
	};

	const pillVariants: Variants = {
		hidden: { opacity: 0, scale: 0.9 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
		},
	};

	return (
		<section className="relative py-32 px-6 bg-zinc-950 overflow-hidden">
			{/* Subtle ambient background glow */}
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-gradient-to-b from-zinc-900/20 to-transparent pointer-events-none" />

			<motion.div
				className="relative z-10 max-w-4xl mx-auto text-center"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: '-100px' }}
				variants={containerVariants}
			>
				{/* Headline */}
				<motion.h2
					variants={itemVariants}
					className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 tracking-tight leading-tight"
				>
					<span className="text-zinc-400">You Send Photos.</span>
					<br />
					<span className="text-white">We Build Everything.</span>
				</motion.h2>

				{/* Frictionless Badges */}
				<motion.div
					variants={itemVariants}
					className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16"
				>
					{['No meetings', 'No tech headaches', 'No drawn-out timelines'].map(
						(text, i) => (
							<motion.div
								key={i}
								variants={pillVariants}
								className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-400 text-sm md:text-base font-medium"
							>
								<X size={16} className="text-zinc-500" />
								{text}
							</motion.div>
						),
					)}
				</motion.div>

				{/* The "Effort" Card */}
				<motion.div
					variants={itemVariants}
					className="relative max-w-2xl mx-auto"
				>
					{/* Card Glow */}
					<div className="absolute -inset-1 bg-gradient-to-b from-orange-500/20 to-transparent rounded-[2.5rem] blur-xl opacity-50" />

					<div className="relative bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 p-8 md:p-12 rounded-[2rem] shadow-2xl flex flex-col gap-8 text-left">
						{/* Step 1: Their Part */}
						<div className="flex items-start gap-6 group">
							<div className="flex items-center justify-center w-12 h-12 rounded-full bg-zinc-950 border border-zinc-800 text-zinc-400 shrink-0 group-hover:border-zinc-600 group-hover:text-white transition-colors">
								<ImagePlus size={24} />
							</div>
							<div>
								<p className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-1">
									Your Part
								</p>
								<p className="text-xl md:text-2xl font-medium text-zinc-200">
									You upload your logo and 10–20 photos.
								</p>
							</div>
						</div>

						{/* Visual Divider / Connector Line */}
						<div className="w-0.5 h-12 bg-gradient-to-b from-zinc-800 to-orange-500/30 ml-6 rounded-full" />

						{/* Step 2: Our Part */}
						<div className="flex items-start gap-6 group">
							<div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-500 shrink-0 shadow-[0_0_15px_rgba(249,115,22,0.2)]">
								<Zap size={24} className="fill-orange-500/20" />
							</div>
							<div>
								<p className="text-sm font-bold text-orange-500 uppercase tracking-wider mb-1">
									Our Part
								</p>
								<p className="text-xl md:text-2xl font-medium text-white">
									We turn it into a high-converting website in 48 hours.
								</p>
							</div>
						</div>

						{/* The Punchline */}
						<div className="pt-8 mt-2 border-t border-zinc-800/50 text-center">
							<p className="text-3xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 inline-block">
								That’s it.
							</p>
						</div>
					</div>
				</motion.div>
			</motion.div>
		</section>
	);
}
