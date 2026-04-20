'use client';

import { motion, Variants } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function Hero() {
	const itemVariants: Variants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
		},
	};

	return (
		<section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 bg-zinc-950 overflow-hidden">
			{/* High-end industrial glow */}
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-orange-500/10 blur-[140px] rounded-full pointer-events-none" />

			<motion.div
				initial="hidden"
				animate="visible"
				transition={{ staggerChildren: 0.1 }}
				className="relative z-10 max-w-6xl mx-auto text-center"
			>
				<motion.div variants={itemVariants} className="mb-6">
					<span className="px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-bold uppercase tracking-[0.2em] text-orange-500 shadow-2xl">
						For Serious Contractors Only
					</span>
				</motion.div>

				<motion.h1
					variants={itemVariants}
					className="text-5xl md:text-8xl font-black tracking-tight leading-[0.9] text-white mb-8 text-balance"
				>
					YOU LOSE THE JOB <br />
					<span className="text-zinc-600">BEFORE YOU EVEN QUOTE IT</span>
				</motion.h1>

				<motion.p
					variants={itemVariants}
					className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-12 leading-relaxed"
				>
					High-end homeowners judge your price in 5 seconds. If your website
					looks &ldquo;budget,&rdquo; they&quot;ll never pay your premium rate.
					We rebuild your entire digital presence in 48 hours.
				</motion.p>

				<motion.div
					variants={itemVariants}
					className="flex flex-col items-center gap-6"
				>
					<button className="group relative h-16 px-10 bg-orange-500 hover:bg-orange-600 text-white font-black rounded-2xl transition-all shadow-[0_0_50px_rgba(249,115,22,0.4)] text-xl flex items-center gap-3">
						UPGRADE MY PERCEPTION IN 48 HOURS
						<ArrowRight
							size={24}
							className="group-hover:translate-x-1 transition-transform"
						/>
					</button>

					<div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm font-bold text-zinc-500 uppercase tracking-widest">
						<span>No Meetings</span>
						<span>No Tech Work</span>
						<span>No Delays</span>
					</div>
				</motion.div>
			</motion.div>
		</section>
	);
}
