'use client';

import { motion, Variants } from 'framer-motion';
import {
	XCircle,
	CheckCircle2,
	ArrowRightLeft,
	TrendingUp,
	AlertTriangle,
} from 'lucide-react';

export default function BeforeAfterSection() {
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
				className="relative z-10 max-w-7xl mx-auto"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: '-100px' }}
				variants={containerVariants}
			>
				{/* Elite Headline Framing */}
				<motion.div variants={itemVariants} className="max-w-4xl mb-24">
					<h2 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-8 uppercase leading-[0.9]">
						The Difference Between <br />
						<span className="text-orange-500">
							&ldquo;Getting Quotes&rdquo;
						</span>{' '}
						and <br />
						<span className="text-zinc-700 font-outline">Winning Jobs</span>
					</h2>
					<p className="text-xl md:text-2xl text-zinc-400 font-medium">
						We don&quot;t just change your design; we change the
						homeowner&quot;s psychological ceiling on what they are willing to
						pay you.
					</p>
				</motion.div>

				<div className="grid lg:grid-cols-12 gap-8 items-center">
					{/* THE "LOW-LEVERAGE" STATE (Losing Money) */}
					<motion.div
						variants={itemVariants}
						className="lg:col-span-5 group relative rounded-3xl overflow-hidden border border-zinc-900 bg-zinc-900/10 transition-all duration-500 opacity-60 hover:opacity-100"
					>
						<div className="p-6 border-b border-zinc-900 flex justify-between items-center bg-zinc-950/50">
							<span className="text-xs font-bold uppercase tracking-widest text-zinc-500">
								Current Perception
							</span>
							<div className="px-2 py-1 rounded bg-red-500/10 text-red-500 text-[10px] font-black uppercase">
								Low Authority
							</div>
						</div>

						<div className="aspect-video bg-zinc-900/50 flex flex-col items-center justify-center p-12 grayscale opacity-50">
							<div className="w-full h-full border-2 border-dashed border-zinc-800 rounded-xl flex flex-col items-center justify-center text-zinc-700">
								<AlertTriangle size={48} className="mb-4" />
								<p className="text-xs font-mono uppercase tracking-tighter">
									Typical &ldquo;DIY&rdquo; Template
								</p>
							</div>
						</div>

						<div className="p-8 space-y-4">
							<div className="flex items-start gap-3">
								<XCircle size={18} className="text-red-900 mt-1" />
								<p className="text-zinc-400 font-medium italic leading-snug">
									&ldquo;They&quot;re probably the cheapest option. I&ldquo;ll
									get 3 more quotes to drive them down.&rdquo;
								</p>
							</div>
							<div className="pt-4 border-t border-zinc-900 flex justify-between items-center">
								<span className="text-xs font-bold text-zinc-600 uppercase tracking-widest">
									Average Project Value
								</span>
								<span className="text-xl font-bold text-zinc-500">
									$5,000 - $12,000
								</span>
							</div>
						</div>
					</motion.div>

					{/* THE TRANSITION ICON */}
					<div className="hidden lg:flex lg:col-span-2 justify-center">
						<div className="w-16 h-16 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 shadow-[0_0_30px_rgba(249,115,22,0.2)]">
							<ArrowRightLeft size={32} strokeWidth={1.5} />
						</div>
					</div>

					{/* THE "HIGH-LEVERAGE" STATE (Elite Pricing) */}
					<motion.div
						variants={itemVariants}
						className="lg:col-span-5 group relative rounded-3xl overflow-hidden border-2 border-orange-500/40 bg-zinc-900/40 shadow-[0_0_60px_rgba(249,115,22,0.15)]"
					>
						<div className="p-6 border-b border-zinc-800 flex justify-between items-center bg-zinc-900/50">
							<span className="text-xs font-bold uppercase tracking-widest text-orange-500">
								Premium Positioning
							</span>
							<div className="px-2 py-1 rounded bg-orange-500 text-white text-[10px] font-black uppercase shadow-lg shadow-orange-500/20">
								+40% Pricing Power
							</div>
						</div>

						<div className="aspect-video bg-zinc-800 flex items-center justify-center p-8 transition-transform duration-700 group-hover:scale-[1.02]">
							{/* This is where a high-quality mockup of your build goes */}
							<div className="w-full h-full bg-zinc-950 border border-zinc-700 rounded-xl shadow-2xl flex flex-col items-center justify-center relative overflow-hidden">
								<div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent" />
								<TrendingUp size={64} className="text-orange-500 opacity-20" />
								<p className="text-xs font-mono uppercase tracking-[0.3em] text-orange-500/50 mt-4">
									BuildRail Engineered Site
								</p>
							</div>
						</div>

						<div className="p-8 space-y-4 bg-gradient-to-br from-zinc-900 to-zinc-950">
							<div className="flex items-start gap-3">
								<CheckCircle2 size={18} className="text-orange-500 mt-1" />
								<p className="text-white font-bold italic leading-snug">
									&ldquo;This is the expert. I don&quot;t care if they are the
									most expensive, I want it done right.&rdquo;
								</p>
							</div>
							<div className="pt-4 border-t border-zinc-800 flex justify-between items-center">
								<span className="text-xs font-bold text-orange-500 uppercase tracking-widest">
									Average Project Value
								</span>
								<span className="text-xl font-black text-white tracking-tight">
									$25,000 - $75,000+
								</span>
							</div>
						</div>
					</motion.div>
				</div>

				{/* The Perception Punchline */}
				<motion.div variants={itemVariants} className="mt-20 text-center">
					<div className="inline-flex flex-col md:flex-row items-center gap-4 bg-zinc-900/50 p-4 rounded-2xl border border-zinc-800">
						<div className="px-4 py-2 bg-orange-500/10 text-orange-500 text-sm font-black uppercase tracking-tighter rounded-lg border border-orange-500/20">
							The BuildRail Strategy
						</div>
						<p className="text-lg md:text-xl text-zinc-300 font-medium">
							We make you look like the{' '}
							<span className="text-white font-bold">only logical choice</span>{' '}
							in your market.
						</p>
					</div>
				</motion.div>
			</motion.div>
		</section>
	);
}
