'use client';

import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle2, ArrowRightLeft } from 'lucide-react';

export default function PerceptionGap() {
	return (
		<section className="py-32 px-6 bg-zinc-950 border-y border-zinc-900">
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-20">
					<h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6 uppercase">
						The Real Reason You&quot;re <br />{' '}
						<span className="text-orange-500">Not Winning Better Jobs</span>
					</h2>
					<p className="text-xl text-zinc-500 font-medium">
						You don&quot;t have a lead problem. You have a perception problem.
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-px bg-zinc-800 border border-zinc-800 rounded-[2.5rem] overflow-hidden shadow-2xl">
					{/* Column 1: The Trap */}
					<div className="bg-zinc-950 p-10 md:p-16">
						<h3 className="text-sm font-black text-zinc-500 uppercase tracking-[0.3em] mb-10 flex items-center gap-2">
							<AlertCircle size={16} /> What You Think is Happening
						</h3>
						<ul className="space-y-8">
							<li className="flex gap-4 text-xl font-bold text-zinc-400">
								<span className="text-zinc-700">01</span> &ldquo;I just need
								more leads from Google&rdquo;
							</li>
							<li className="flex gap-4 text-xl font-bold text-zinc-400">
								<span className="text-zinc-700">02</span> &ldquo;My quality work
								should speak for itself&rdquo;
							</li>
							<li className="flex gap-4 text-xl font-bold text-zinc-400">
								<span className="text-zinc-700">03</span> &ldquo;I&quot;m losing
								jobs because I&quot;m too expensive&rdquo;
							</li>
						</ul>
					</div>

					{/* Column 2: The Reality */}
					<div className="bg-zinc-900 p-10 md:p-16 relative overflow-hidden">
						<div className="absolute top-0 right-0 p-8 opacity-5">
							<ArrowRightLeft size={200} />
						</div>
						<h3 className="text-sm font-black text-orange-500 uppercase tracking-[0.3em] mb-10 flex items-center gap-2">
							<CheckCircle2 size={16} /> What is Actually Happening
						</h3>
						<ul className="space-y-8 relative z-10">
							<li className="flex gap-4 text-xl font-bold text-white">
								<CheckCircle2
									className="text-orange-500 shrink-0 mt-1"
									size={20}
								/>
								Homeowners judge your price in 5 seconds
							</li>
							<li className="flex gap-4 text-xl font-bold text-white">
								<CheckCircle2
									className="text-orange-500 shrink-0 mt-1"
									size={20}
								/>
								Your site silently signals &ldquo;cheap or risky&rdquo;
							</li>
							<li className="flex gap-4 text-xl font-bold text-white">
								<CheckCircle2
									className="text-orange-500 shrink-0 mt-1"
									size={20}
								/>
								Competitors win before the first meeting
							</li>
						</ul>
					</div>
				</div>

				<div className="mt-16 text-center">
					<div className="inline-block p-1 bg-gradient-to-r from-orange-500 to-orange-800 rounded-2xl">
						<div className="bg-zinc-950 px-8 py-6 rounded-xl">
							<p className="text-2xl md:text-4xl font-black tracking-tight text-white italic">
								&ldquo;If your competitor has a better website, they don’t need
								better work than you to win the job.&rdquo;
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
