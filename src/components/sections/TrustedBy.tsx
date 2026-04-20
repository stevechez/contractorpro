'use client';

import { motion, Variants } from 'framer-motion';

// 1. Define the Interface for the props
interface TrustedByProps {
	label?: string;
}

// 2. Accept the props in the function
export default function TrustedBy({
	label = 'The Preferred Choice for High-End Pros',
}: TrustedByProps) {
	const itemVariants: Variants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1, transition: { duration: 1, delay: 0.8 } },
	};

	return (
		<motion.div
			variants={itemVariants}
			initial="hidden"
			animate="visible"
			className="w-full py-12 border-y border-zinc-900 bg-zinc-950/50"
		>
			<div className="max-w-7xl mx-auto px-6">
				{/* 3. Use the label prop here */}
				<p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-zinc-500 mb-8">
					{label}
				</p>
				<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-40 grayscale contrast-125">
					<LogoPlaceholder label="GENERAL CONTRACTORS" />
					<LogoPlaceholder label="ROOFING ASSOC." />
					<LogoPlaceholder label="HVAC PREMIER" />
					<LogoPlaceholder label="REMODELING MAG" />
					<LogoPlaceholder label="LANDSCAPE PRO" />
				</div>
			</div>
		</motion.div>
	);
}

function LogoPlaceholder({ label }: { label: string }) {
	return (
		<span className="text-lg md:text-xl font-black italic tracking-tighter text-zinc-300">
			{label}
		</span>
	);
}
