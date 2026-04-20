'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Zap } from 'lucide-react';

export default function Header() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	// Add subtle border/bg change on scroll
	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 20);
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const navLinks = [
		{ name: 'How it Works', href: '#process' },
		{ name: 'Features', href: '#features' },
		{ name: 'Pricing', href: '#pricing' },
		{ name: 'Examples', href: '#examples' },
	];

	return (
		<>
			<motion.header
				initial={{ y: -100 }}
				animate={{ y: 0 }}
				transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
				className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
					isScrolled
						? 'bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800 shadow-lg'
						: 'bg-transparent border-b border-transparent'
				}`}
			>
				<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
					{/* Logo */}
					<div className="flex items-center gap-2 group cursor-pointer">
						<div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(249,115,22,0.4)] group-hover:shadow-[0_0_25px_rgba(249,115,22,0.6)] transition-shadow">
							<Zap size={18} className="text-white fill-white" />
						</div>
						<span className="text-xl font-extrabold text-white tracking-tight">
							BuildRail <span className="text-zinc-500 font-medium">Sites</span>
						</span>
					</div>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex items-center gap-8">
						{navLinks.map(link => (
							<a
								key={link.name}
								href={link.href}
								className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
							>
								{link.name}
							</a>
						))}
					</nav>

					{/* Desktop CTA */}
					<div className="hidden md:flex items-center gap-4">
						<a
							href="#login"
							className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
						>
							Client Login
						</a>
						<button className="h-10 px-5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(249,115,22,0.2)] flex items-center gap-2 group">
							Start Build
							<ArrowRight
								size={16}
								className="group-hover:translate-x-1 transition-transform"
							/>
						</button>
					</div>

					{/* Mobile Menu Toggle */}
					<button
						className="md:hidden text-zinc-400 hover:text-white"
						onClick={() => setMobileMenuOpen(true)}
					>
						<Menu size={28} />
					</button>
				</div>
			</motion.header>

			{/* Mobile Menu Overlay */}
			<AnimatePresence>
				{mobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, x: '100%' }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: '100%' }}
						transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
						className="fixed inset-0 z-[60] bg-zinc-950 flex flex-col md:hidden"
					>
						<div className="flex items-center justify-between p-6 border-b border-zinc-900">
							<span className="text-xl font-extrabold text-white tracking-tight">
								BuildRail
							</span>
							<button
								onClick={() => setMobileMenuOpen(false)}
								className="p-2 bg-zinc-900 rounded-full text-zinc-400 hover:text-white border border-zinc-800"
							>
								<X size={20} />
							</button>
						</div>

						<div className="flex flex-col p-6 gap-6">
							{navLinks.map(link => (
								<a
									key={link.name}
									href={link.href}
									onClick={() => setMobileMenuOpen(false)}
									className="text-2xl font-bold text-zinc-300 hover:text-white border-b border-zinc-900 pb-4"
								>
									{link.name}
								</a>
							))}
						</div>

						<div className="mt-auto p-6 flex flex-col gap-4">
							<button className="w-full h-14 bg-zinc-900 text-white font-medium rounded-xl border border-zinc-800">
								Client Login
							</button>
							<button className="w-full h-14 bg-orange-500 text-white font-bold rounded-xl shadow-[0_0_30px_rgba(249,115,22,0.3)]">
								Get Site in 48 Hours
							</button>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
