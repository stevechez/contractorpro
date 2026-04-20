'use client';

import { motion, Variants } from 'framer-motion';
import { XCircle, CheckCircle2, TrendingUp, AlertCircle } from 'lucide-react';

export default function BeforeAfterSection() {
	// Explicitly typing as Variants fixes the 'ease' array inference error
	const containerVariants: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.2 },
		},
	};

	const itemVariants: Variants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
		},
	};

	return (
		<section className="relative py-32 px-6 bg-zinc-950 overflow-hidden">
			<motion.div
				className="relative z-10 max-w-6xl mx-auto"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: '-100px' }}
				variants={containerVariants}
			>
				{/* Headline */}
				<motion.div variants={itemVariants} className="text-center mb-20">
					<h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
						Look Like You Charge More—
						<span className="text-orange-500">So You Can</span>
					</h2>
					<p className="text-xl text-zinc-400 max-w-2xl mx-auto">
						We don&quot;t just change your design; we change how much a
						homeowner thinks your time is worth.
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
					{/* THE "BEFORE" CARD */}
					<motion.div
						variants={itemVariants}
						className="group relative rounded-[2.5rem] overflow-hidden border border-zinc-900 bg-zinc-900/20 transition-all duration-500 hover:border-zinc-800"
					>
						<div className="absolute top-6 left-6 z-20">
							<div className="flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full backdrop-blur-xl">
								<XCircle size={18} className="text-red-500" />
								<span className="text-sm font-bold text-red-500 uppercase tracking-wider">
									Generic & Outdated
								</span>
							</div>
						</div>

						{/* Image Placeholder */}
						<div className="aspect-[4/3] bg-zinc-900 flex flex-col items-center justify-center p-12 transition-transform duration-700 group-hover:scale-105">
							<div className="w-full h-full border-2 border-dashed border-zinc-800 rounded-xl flex flex-col items-center justify-center text-zinc-700">
								<AlertCircle size={48} className="mb-4 opacity-20" />
								<p className="text-sm font-mono tracking-tighter opacity-40 uppercase">
									Typical &ldquo;DIY&rdquo; Template
								</p>
							</div>
						</div>

						<div className="p-8 border-t border-zinc-900">
							<p className="text-zinc-500 font-medium mb-1">
								Customer Perception:
							</p>
							<p className="text-xl text-zinc-400">
								&ldquo;They&rsquo;re probably the cheapest option.&rdquo;
							</p>
						</div>
					</motion.div>

					{/* THE "AFTER" CARD */}
					<motion.div
						variants={itemVariants}
						className="group relative rounded-[2.5rem] overflow-hidden border-2 border-orange-500/30 bg-zinc-900/40 transition-all duration-500 shadow-[0_0_50px_rgba(249,115,22,0.1)] hover:border-orange-500/60"
					>
						<div className="absolute top-6 left-6 z-20">
							<div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full backdrop-blur-xl">
								<CheckCircle2 size={18} className="text-emerald-500" />
								<span className="text-sm font-bold text-emerald-500 uppercase tracking-wider">
									BuildRail Premium
								</span>
							</div>
						</div>

						<div className="absolute top-6 right-6 z-20">
							<div className="flex items-center gap-2 px-3 py-1 bg-orange-500 text-white rounded-lg text-xs font-black uppercase tracking-tighter shadow-lg">
								<TrendingUp size={14} /> +40% Pricing Power
							</div>
						</div>

						{/* Image Placeholder */}
						<div className="aspect-[4/3] bg-zinc-800 flex items-center justify-center p-12 transition-transform duration-700 group-hover:scale-105">
							<div className="w-full h-full bg-zinc-900 border border-zinc-700 rounded-xl shadow-2xl flex flex-col items-center justify-center text-orange-500/20">
								<div className="w-24 h-24 rounded-full border-4 border-orange-500/20 flex items-center justify-center animate-pulse">
									<TrendingUp size={48} className="text-orange-500" />
								</div>
							</div>
						</div>

						<div className="p-8 border-t border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950">
							<p className="text-orange-500/70 font-medium mb-1">
								Customer Perception:
							</p>
							<p className="text-xl text-white font-semibold">
								&ldquo;This is the expert. Price is secondary.&rdquo;
							</p>
						</div>
					</motion.div>
				</div>

				{/* The Closer */}
				<motion.div
					variants={itemVariants}
					className="text-center mt-12 py-8 border-t border-zinc-900"
				>
					<p className="text-2xl md:text-3xl text-zinc-300 font-medium tracking-tight">
						Same contractor.{' '}
						<span className="text-zinc-500 italic">Different perception.</span>
						<br />
						<span className="inline-block mt-4 px-6 py-2 bg-orange-500/10 text-orange-400 font-black rounded-xl border border-orange-500/20">
							DIFFERENT PRICING POWER.
						</span>
					</p>
				</motion.div>
			</motion.div>
		</section>
	);
}
