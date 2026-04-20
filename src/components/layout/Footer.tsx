import { Zap, Twitter, Linkedin, Mail, ArrowRight } from 'lucide-react';

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-zinc-950 border-t border-zinc-900 pt-20 pb-24 md:pb-10 overflow-hidden relative">
			{/* Subtle top glow */}
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />

			<div className="max-w-7xl mx-auto px-6">
				{/* Top Section: Pre-Footer CTA */}
				<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-16 border-b border-zinc-900">
					<div>
						<h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">
							Stop building. Start winning.
						</h3>
						<p className="text-zinc-500 max-w-sm">
							Your competitors aren&quot;t waiting to upgrade their online
							presence. You shouldn&quot;t either.
						</p>
					</div>
					<button className="h-12 px-6 bg-zinc-900 hover:bg-zinc-800 text-white font-semibold rounded-xl border border-zinc-800 transition-all flex items-center gap-2 group">
						Start Your 48-Hour Build
						<ArrowRight
							size={18}
							className="group-hover:translate-x-1 transition-transform text-orange-500"
						/>
					</button>
				</div>

				{/* Middle Section: Links Grid */}
				<div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-16">
					{/* Brand Column */}
					<div className="col-span-2 md:col-span-1">
						<div className="flex items-center gap-2 mb-6">
							<div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
								<Zap size={14} className="text-white fill-white" />
							</div>
							<span className="text-lg font-bold text-white tracking-tight">
								BuildRail
							</span>
						</div>
						<p className="text-zinc-500 text-sm leading-relaxed mb-6">
							High-converting, premium websites built for elite contractors in
							exactly 48 hours. No fluff. Just leads.
						</p>
						<div className="flex items-center gap-4 text-zinc-500">
							<a href="#" className="hover:text-orange-400 transition-colors">
								<Twitter size={20} />
							</a>
							<a href="#" className="hover:text-orange-400 transition-colors">
								<Linkedin size={20} />
							</a>
							<a href="#" className="hover:text-orange-400 transition-colors">
								<Mail size={20} />
							</a>
						</div>
					</div>

					{/* Product Links */}
					<div>
						<h4 className="text-white font-bold mb-6">Product</h4>
						<ul className="space-y-4 text-sm text-zinc-500">
							<li>
								<a
									href="#how-it-works"
									className="hover:text-white transition-colors"
								>
									How it Works
								</a>
							</li>
							<li>
								<a
									href="#features"
									className="hover:text-white transition-colors"
								>
									Features
								</a>
							</li>
							<li>
								<a
									href="#pricing"
									className="hover:text-white transition-colors"
								>
									Pricing
								</a>
							</li>
							<li>
								<a
									href="#prompt-pack"
									className="hover:text-white transition-colors flex items-center gap-2"
								>
									Contractor Prompts{' '}
									<span className="px-1.5 py-0.5 rounded bg-orange-500/10 text-orange-500 text-[10px] font-bold uppercase tracking-wider">
										New
									</span>
								</a>
							</li>
						</ul>
					</div>

					{/* Company Links */}
					<div>
						<h4 className="text-white font-bold mb-6">Company</h4>
						<ul className="space-y-4 text-sm text-zinc-500">
							<li>
								<a href="#" className="hover:text-white transition-colors">
									About Us
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-white transition-colors">
									Contact Support
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-white transition-colors">
									Client Login
								</a>
							</li>
						</ul>
					</div>

					{/* Legal Links */}
					<div>
						<h4 className="text-white font-bold mb-6">Legal</h4>
						<ul className="space-y-4 text-sm text-zinc-500">
							<li>
								<a href="#" className="hover:text-white transition-colors">
									Terms of Service
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-white transition-colors">
									Privacy Policy
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-white transition-colors">
									Refund Policy
								</a>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom Section: Copyright */}
				<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-zinc-900 text-sm text-zinc-600">
					<p>© {currentYear} BuildRailHQ. All rights reserved.</p>
					<div className="flex items-center gap-2 mt-4 md:mt-0">
						<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
						<span>All systems operational</span>
					</div>
				</div>
			</div>
		</footer>
	);
}
