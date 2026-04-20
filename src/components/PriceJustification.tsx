'use client';

import { motion, Variants } from 'framer-motion';
import {
	Calculator,
	TrendingUp,
	AlertTriangle,
	ArrowRight,
} from 'lucide-react';

export default function PriceJustification() {
	const itemVariants: Variants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
		},
	};

	return (
		<section className="py-32 px-6 bg-zinc-950">
			<div className="max-w-5xl mx-auto">
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					transition={{ staggerChildren: 0.1 }}
					className="text-center mb-20"
				>
					<motion.h2
						variants={itemVariants}
						className="text-sm font-black text-orange-500 uppercase tracking-[0.3em] mb-6"
					>
						The Economics of Authority
					</motion.h2>
					<motion.h3
						variants={itemVariants}
						className="text-4xl md:text-6xl font-black text-white tracking-tight uppercase leading-[0.9] mb-8"
					>
						Why This is Not a <br />
						<span className="text-zinc-700 font-outline">$500 Website</span>
					</motion.h3>
				</motion.div>

				<div className="grid md:grid-cols-3 gap-8">
					{/* THE $500 TRAP */}
					<motion.div
						variants={itemVariants}
						className="p-8 rounded-3xl bg-zinc-900/30 border border-zinc-900 group hover:border-red-900/50 transition-colors"
					>
						<div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500 mb-6">
							<AlertTriangle size={24} />
						</div>
						<h4 className="text-xl font-bold text-white mb-4 italic">
							The $500 &ldquo;Trap&rdquo;
						</h4>
						<p className="text-zinc-500 leading-relaxed mb-6">
							Standard builders give you a template. It looks like everyone
							else. It signals &ldquo;Average&rdquo;. It forces you to compete
							on price because you look like a commodity.
						</p>
						<div className="text-xs font-black text-red-900 uppercase tracking-widest">
							Result: Pricing Wars
						</div>
					</motion.div>

					{/* THE BUILDRAIL INVESTMENT */}
					<motion.div
						variants={itemVariants}
						className="p-8 rounded-3xl bg-zinc-900 border-2 border-orange-500/20 relative shadow-2xl"
					>
						<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
							The Leverage
						</div>
						<div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500 mb-6">
							<Calculator size={24} />
						</div>
						<h4 className="text-xl font-bold text-white mb-4 italic">
							The BuildRail Asset
						</h4>
						<p className="text-zinc-400 leading-relaxed mb-6">
							An engineered perception upgrade. Designed to anchor your value
							higher. It signals &ldquo;Expert&rdquo;. It allows you to charge
							20-40% more for the exact same work.
						</p>
						<div className="text-xs font-black text-orange-500 uppercase tracking-widest">
							Result: Premium Margin
						</div>
					</motion.div>

					{/* THE ROI LOOP */}
					<motion.div
						variants={itemVariants}
						className="p-8 rounded-3xl bg-zinc-900/30 border border-zinc-900 group hover:border-emerald-900/50 transition-colors"
					>
						<div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-6">
							<TrendingUp size={24} />
						</div>
						<h4 className="text-xl font-bold text-white mb-4 italic">
							The ROI Equation
						</h4>
						<p className="text-zinc-500 leading-relaxed mb-6">
							One extra $10,000 job pays for this site 5 times over. If you win
							just one &ldquo;Elite&rdquo; project you previously would have
							lost—this asset is essentially free.
						</p>
						<div className="text-xs font-black text-emerald-900 uppercase tracking-widest">
							Result: Infinite Return
						</div>
					</motion.div>
				</div>

				{/* The Mathematical Closer */}
				<motion.div
					variants={itemVariants}
					className="mt-16 bg-zinc-900/80 border border-zinc-800 p-8 md:p-12 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl"
				>
					<div className="max-w-md">
						<p className="text-2xl md:text-3xl font-black text-white leading-tight uppercase tracking-tight">
							This isn&quot;t a <span className="text-zinc-600">Website.</span>{' '}
							<br />
							It&quot;s <span className="text-orange-500">Leverage.</span>
						</p>
					</div>
					<div className="flex flex-col items-end text-right">
						<p className="text-sm font-bold text-zinc-500 uppercase tracking-[0.2em] mb-2">
							Opportunity Cost
						</p>
						<p className="text-3xl md:text-5xl font-black text-red-500 tracking-tighter">
							-$120,000{' '}
							<span className="text-lg font-medium text-zinc-700">/yr</span>
						</p>
						<p className="text-xs text-zinc-600 mt-2 italic">
							Estimated loss from &ldquo;cheap&rdquo; perception
						</p>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
