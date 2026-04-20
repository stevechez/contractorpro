'use client';

import { motion, Variants } from 'framer-motion';
import {
	MonitorOff,
	ShieldAlert,
	BadgeMinus,
	CircleDollarSign,
} from 'lucide-react';

export default function PainSection() {
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

	const highlightVariants: Variants = {
		hidden: { opacity: 0, scale: 0.95 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: { duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] },
		},
	};

	const painPoints = [
		{
			icon: <MonitorOff className="text-red-400" size={24} />,
			text: 'Your website looks outdated—or doesn’t exist',
		},
		{
			icon: <ShieldAlert className="text-red-400" size={24} />,
			text: 'High-end clients don’t trust your brand',
		},
		{
			icon: <BadgeMinus className="text-red-400" size={24} />,
			text: 'Competitors look more expensive → so they win',
		},
		{
			icon: <CircleDollarSign className="text-red-400" size={24} />,
			text: 'You’re stuck competing on price',
		},
	];

	return (
		<section className="relative py-32 px-6 bg-zinc-950 border-y border-zinc-900 overflow-hidden">
			{/* Subtle red/warning background glow */}
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-red-900/10 blur-[120px] rounded-full pointer-events-none" />

			<motion.div
				className="relative z-10 max-w-4xl mx-auto text-center"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: '-100px' }}
				variants={containerVariants}
			>
				<motion.h2
					variants={cardVariants}
					className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 tracking-tight text-white"
				>
					Why You’re Losing Jobs{' '}
					<span className="text-zinc-500">Right Now</span>
				</motion.h2>

				<div className="grid md:grid-cols-2 gap-6 text-left mb-20">
					{painPoints.map((pain, i) => (
						<motion.div
							key={i}
							variants={cardVariants}
							className="group flex items-start gap-5 bg-zinc-900/40 backdrop-blur-sm p-6 lg:p-8 rounded-3xl border border-zinc-800 hover:bg-zinc-900/80 hover:border-zinc-700 transition-all duration-300"
						>
							<div className="p-3 bg-zinc-950 rounded-2xl border border-zinc-800 shadow-inner shrink-0 group-hover:scale-110 transition-transform duration-300 ease-out">
								{pain.icon}
							</div>
							<p className="text-lg md:text-xl font-medium text-zinc-300 leading-snug mt-1">
								{pain.text}
							</p>
						</motion.div>
					))}
				</div>

				<motion.div
					variants={highlightVariants}
					className="relative inline-block group"
				>
					{/* Animated glow behind the punchline */}
					<div className="absolute inset-0 bg-orange-500/20 rounded-2xl blur-xl group-hover:bg-orange-500/30 transition-colors duration-500" />

					<div className="relative px-8 py-5 bg-gradient-to-br from-zinc-900 to-zinc-950 border border-orange-500/30 rounded-2xl shadow-[0_0_40px_rgba(249,115,22,0.1)]">
						<p className="text-2xl md:text-3xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
							In construction, perception = price.
						</p>
					</div>
				</motion.div>
			</motion.div>
		</section>
	);
}
