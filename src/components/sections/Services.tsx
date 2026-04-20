'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ServiceItem } from '@/lib/nicheData';
import {
	Home,
	Bath,
	Utensils,
	Hammer,
	Paintbrush,
	TreePine,
	Wrench,
} from 'lucide-react';

// Use React.ReactElement to satisfy strict TypeScript rules in Next.js 15+
const IconMapper = ({ name }: { name: string }) => {
	const icons: Record<string, React.ReactElement> = {
		home: <Home size={32} />,
		bath: <Bath size={32} />,
		kitchen: <Utensils size={32} />,
		hammer: <Hammer size={32} />,
		paint: <Paintbrush size={32} />,
		tree: <TreePine size={32} />,
		wrench: <Wrench size={32} />,
	};
	return icons[name] || <Hammer size={32} />;
};

export function Services({ services }: { services: ServiceItem[] }) {
	const containerVariants: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.1, delayChildren: 0.2 },
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
		<section className="py-32 px-6 bg-zinc-950 overflow-hidden" id="services">
			<div className="max-w-7xl mx-auto">
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: '-100px' }}
					variants={containerVariants}
					className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-900 border border-zinc-900 rounded-[2rem] overflow-hidden shadow-2xl"
				>
					{/* Section Brand Card */}
					<motion.div
						variants={itemVariants}
						className="md:col-span-2 lg:col-span-1 p-12 bg-zinc-950 flex flex-col justify-between relative overflow-hidden group"
					>
						<div className="relative z-10">
							<h2 className="text-sm font-black text-orange-500 uppercase tracking-[0.3em] mb-6">
								The Deliverables
							</h2>
							<h3 className="text-4xl md:text-5xl font-black text-white tracking-tight uppercase leading-[0.9] mb-8">
								The <br /> Contractor <br />{' '}
								<span className="text-zinc-800 group-hover:text-zinc-700 transition-colors">
									Growth System
								</span>
							</h3>
						</div>

						<div className="relative z-10 pt-8 border-t border-zinc-900">
							<p className="text-zinc-500 font-medium italic leading-relaxed">
								&ldquo;We don&apos;t just build pages. We build authority assets
								engineered to win high-ticket jobs.&rdquo;
							</p>
						</div>

						{/* Industrial background element */}
						<div className="absolute -bottom-10 -right-10 opacity-[0.02] pointer-events-none">
							<Hammer size={300} strokeWidth={1} />
						</div>
					</motion.div>

					{/* Dynamic Service Cards */}
					{services.map((service, i) => (
						<motion.div
							key={i}
							variants={itemVariants}
							className="p-12 bg-zinc-950 hover:bg-zinc-900/40 transition-all duration-500 group relative flex flex-col"
						>
							<div className="mb-10 text-zinc-800 group-hover:text-orange-500 transition-colors duration-500 transform group-hover:scale-110 origin-left">
								<IconMapper name={service.iconName} />
							</div>

							<div className="flex-grow">
								<h4 className="text-2xl font-bold text-white mb-4 tracking-tight uppercase group-hover:text-orange-50 transition-colors">
									{service.title}
								</h4>
								<p className="text-zinc-500 group-hover:text-zinc-400 leading-relaxed transition-colors">
									{service.description}
								</p>
							</div>

							{/* Technical Indicator */}
							<div className="mt-12 flex items-end justify-between">
								<div className="text-6xl font-black text-zinc-900/50 group-hover:text-orange-500/5 transition-colors pointer-events-none">
									0{i + 1}
								</div>
								<div className="w-10 h-px bg-zinc-900 group-hover:bg-orange-500/20 transition-colors" />
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
