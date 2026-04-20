'use client';

import { motion, Variants } from 'framer-motion';
import { UploadCloud, PenTool, Rocket } from 'lucide-react';

export default function ProcessTimeline() {
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
			transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
		},
	};

	const steps = [
		{
			num: '01',
			title: 'Submit Your Info',
			desc: 'Upload photos, your logo, and basic business details.',
			time: '10 Minutes',
			icon: <UploadCloud size={24} className="text-orange-500" />,
		},
		{
			num: '02',
			title: 'We Build Everything',
			desc: 'We map out the local SEO, structure the copy, and build the site.',
			time: '24–36 Hours',
			icon: <PenTool size={24} className="text-orange-500" />,
		},
		{
			num: '03',
			title: 'Launch & Profit',
			desc: 'Your premium site goes live and starts capturing high-end leads.',
			time: 'Hour 48',
			icon: <Rocket size={24} className="text-orange-500" />,
		},
	];

	return (
		<section className="relative py-32 px-6 bg-zinc-950 border-t border-zinc-900 overflow-hidden">
			{/* Background ambient glow */}
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />

			<motion.div
				className="relative z-10 max-w-6xl mx-auto"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: '-100px' }}
				variants={containerVariants}
			>
				<motion.div variants={itemVariants} className="text-center mb-24">
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
						The 48-Hour{' '}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
							Sprint
						</span>
					</h2>
					<p className="text-xl text-zinc-400 max-w-2xl mx-auto">
						From the moment you submit your photos, the clock starts. Here is
						exactly how we go from start to live.
					</p>
				</motion.div>

				<div className="relative">
					{/* DESKTOP Connecting Line Track */}
					<div className="hidden md:block absolute top-[3.25rem] left-[10%] right-[10%] h-1 bg-zinc-900 rounded-full z-0 overflow-hidden">
						<motion.div
							initial={{ x: '-100%' }}
							whileInView={{ x: '100%' }}
							viewport={{ once: true }}
							transition={{ duration: 2.5, ease: 'easeInOut', delay: 0.5 }}
							className="w-full h-full bg-gradient-to-r from-transparent via-orange-500 to-transparent"
						/>
					</div>

					{/* MOBILE Connecting Line Track */}
					<div className="block md:hidden absolute top-[10%] bottom-[10%] left-[2.25rem] w-1 bg-zinc-900 rounded-full z-0" />

					<div className="flex flex-col md:flex-row gap-12 md:gap-6 justify-between relative z-10">
						{steps.map((step, i) => (
							<motion.div
								key={i}
								variants={itemVariants}
								className="flex flex-row md:flex-col items-start md:items-center text-left md:text-center flex-1 group"
							>
								{/* Node / Icon Container */}
								<div className="relative w-20 h-20 md:w-28 md:h-28 shrink-0 flex items-center justify-center mb-0 md:mb-8 mr-6 md:mr-0">
									<div className="absolute inset-0 bg-orange-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
									<div className="relative w-16 h-16 md:w-24 md:h-24 bg-zinc-900/80 backdrop-blur-md border-2 border-zinc-800 group-hover:border-orange-500/50 rounded-3xl flex items-center justify-center flex-col gap-1 transition-colors duration-300 shadow-2xl">
										{step.icon}
										<span className="text-xs font-bold text-zinc-600 group-hover:text-orange-500/50 transition-colors">
											{step.num}
										</span>
									</div>
								</div>

								{/* Content Container */}
								<div className="flex-1 mt-1 md:mt-0">
									<div className="inline-flex items-center justify-center px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-md text-sm font-bold text-orange-400 uppercase tracking-widest mb-4">
										{step.time}
									</div>
									<h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
										{step.title}
									</h3>
									<p className="text-lg text-zinc-400 leading-relaxed max-w-sm mx-auto md:mx-0">
										{step.desc}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</motion.div>
		</section>
	);
}
