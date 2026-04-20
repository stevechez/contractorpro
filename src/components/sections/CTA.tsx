'use client';

import { motion, Variants } from 'framer-motion';
import { ArrowRight, ShieldCheck, Zap, Lock } from 'lucide-react';

export default function CTA() {
	const itemVariants: Variants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
		},
	};

	return (
		<section className="relative py-32 px-6 bg-zinc-950 overflow-hidden">
			{/* Intense orange glow behind the card */}
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none" />

			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				transition={{ staggerChildren: 0.1 }}
				className="relative z-10 max-w-5xl mx-auto"
			>
				<div className="bg-zinc-900 border border-zinc-800 rounded-[3rem] p-8 md:p-20 text-center shadow-2xl overflow-hidden relative">
					{/* Subtle Industrial Grid Background */}
					<div
						className="absolute inset-0 opacity-[0.03] pointer-events-none"
						style={{
							backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
							backgroundSize: '40px 40px',
						}}
					/>

					<motion.div variants={itemVariants} className="mb-8">
						<span className="px-5 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-black uppercase tracking-[0.3em] text-orange-500">
							Limited Availability
						</span>
					</motion.div>

					<motion.h2
						variants={itemVariants}
						className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] uppercase mb-8"
					>
						STOP LOSING JOBS TO <br />
						<span className="text-zinc-700">AVERAGE COMPETITORS</span>
					</motion.h2>

					<motion.p
						variants={itemVariants}
						className="text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed"
					>
						We are only accepting{' '}
						<span className="text-white font-bold">3 new builds this week</span>{' '}
						to ensure every site hits our 48-hour &ldquot;Authority
						Standard.&rdquot; Secure your slot before your local competitor
						does.
					</motion.p>

					<motion.div
						variants={itemVariants}
						className="flex flex-col items-center gap-6"
					>
						<button className="group relative w-full md:w-auto h-20 px-12 bg-orange-500 hover:bg-orange-600 text-white font-black rounded-2xl transition-all shadow-[0_0_50px_rgba(249,115,22,0.3)] text-xl flex items-center justify-center gap-3 transform hover:-translate-y-1">
							UPGRADE MY BUSINESS NOW
							<ArrowRight
								size={24}
								className="group-hover:translate-x-1 transition-transform"
							/>
						</button>

						<div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 mt-4">
							<div className="flex items-center gap-2 text-zinc-500 text-sm font-bold uppercase tracking-widest">
								<ShieldCheck size={18} className="text-orange-500" />
								48-Hour Guarantee
							</div>
							<div className="flex items-center gap-2 text-zinc-500 text-sm font-bold uppercase tracking-widest">
								<Lock size={18} className="text-orange-500" />
								Secure Checkout
							</div>
							<div className="flex items-center gap-2 text-zinc-500 text-sm font-bold uppercase tracking-widest">
								<Zap size={18} className="text-orange-500 fill-orange-500" />
								Instant Access
							</div>
						</div>
					</motion.div>
				</div>

				{/* Final Risk Reversal "Micro-Copy" */}
				<motion.p
					variants={itemVariants}
					className="mt-12 text-center text-zinc-600 text-sm font-medium italic"
				>
					By clicking above, you are initiating a 48-hour high-velocity build.{' '}
					<br />
					If we don&quot;t deliver your live site in exactly 48 hours, you pay
					nothing. No fine print.
				</motion.p>
			</motion.div>
		</section>
	);
}
