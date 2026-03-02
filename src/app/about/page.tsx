// src/app/about/page.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Code2, Shield, Zap, CheckCircle2, XCircle } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950 pt-32 pb-24 px-6 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] bg-accent/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white mb-12 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Back to home
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: The Narrative */}
          <motion.div 
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-16"
          >
            {/* 1. The Big Declaration */}
            <div>
              <span className="text-accent font-mono text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
                The ContractorPro Standard
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white leading-[0.9] mb-8">
                The <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-accent">Manifesto.</span>
              </h1>
              <p className="text-xl text-slate-400 font-light leading-relaxed max-w-xl">
                We didn't set out to build another marketing agency. We set out to engineer a better way for elite tradesmen to dominate their local markets.
              </p>
            </div>

            {/* 2. The Problem & Philosophy */}
            <div className="space-y-8 text-slate-300 leading-relaxed font-light text-lg">
              <p>
                After three decades of engineering high-performance software, we saw a massive disconnect. Elite contractors—who obsess over perfectly plumb walls and flawless finishes—were being represented by digital storefronts that looked like they were built in 2004.
              </p>
              <p>
                Worse, they didn't even own them. Agencies lock contractors into proprietary platforms to justify a $1,500/month "maintenance" fee. <strong>We are here to kill that model.</strong>
              </p>
              
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-4">
                <h3 className="text-2xl font-bold text-white tracking-tight">The Philosophy</h3>
                <p className="text-slate-400">
                  We build digital assets, not digital liabilities. When you hire us, you are hiring veteran software developers, not outsourced template-flippers. We utilize the same web infrastructure used by billion-dollar tech companies and deploy it for your local business.
                </p>
              </div>
            </div>

            {/* 3. The Difference Comparison Table */}
            <div className="pt-8 space-y-8">
              <h3 className="text-2xl font-bold text-white tracking-tight">The Difference</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/10">
                  <h4 className="text-red-400 font-bold mb-4 uppercase text-xs tracking-widest">Typical Agencies</h4>
                  <ul className="space-y-3 text-sm text-slate-500">
                    <li className="flex items-center gap-2"><XCircle className="w-4 h-4" /> Expensive Monthly Retainers</li>
                    <li className="flex items-center gap-2"><XCircle className="w-4 h-4" /> They Own Your Domain/Data</li>
                    <li className="flex items-center gap-2"><XCircle className="w-4 h-4" /> Slow WordPress Templates</li>
                    <li className="flex items-center gap-2"><XCircle className="w-4 h-4" /> 3-Month Project Timelines</li>
                  </ul>
                </div>
                <div className="p-6 rounded-2xl bg-blue-500/5 border border-blue-500/20">
                  <h4 className="text-blue-400 font-bold mb-4 uppercase text-xs tracking-widest">ContractorPro</h4>
                  <ul className="space-y-3 text-sm text-slate-300">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> One-Time Flat Fee</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> You Own 100% of the Asset</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Next.js Edge Performance</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Guaranteed 48-Hour Launch</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 4. Core Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-12 border-t border-white/10">
              <div className="group">
                <Code2 className="w-8 h-8 text-accent mb-4 transition-transform group-hover:scale-110" />
                <h4 className="text-white font-bold mb-2">Clean Architecture</h4>
                <p className="text-sm text-slate-400 leading-relaxed">No bloated plugins. Just pure, compiled code delivered globally in milliseconds.</p>
              </div>
              <div className="group">
                <Shield className="w-8 h-8 text-accent mb-4 transition-transform group-hover:scale-110" />
                <h4 className="text-white font-bold mb-2">Absolute Ownership</h4>
                <p className="text-sm text-slate-400 leading-relaxed">It's your business and your domain. When the project is done, we hand over the keys.</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Sticky Founder Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative lg:sticky top-32"
          >
            <div className="absolute -inset-[1px] rounded-[2.5rem] bg-gradient-to-b from-blue-500/30 via-accent/10 to-transparent opacity-50 blur-sm" />
            <div className="relative bg-slate-900/60 backdrop-blur-2xl p-8 md:p-10 rounded-3xl shadow-2xl border border-white/10">
              <div className="flex items-center gap-4 mb-8 pb-8 border-b border-white/10">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-slate-700">
                  <Image src="https://i.pravatar.cc/150?u=founder" alt="Founder" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">Built by Engineers</h3>
                  <p className="text-sm text-slate-400 font-medium">US-Based Development</p>
                </div>
              </div>
              <div className="space-y-4 mb-10">
                {[
                  "30 Years Engineering Experience",
                  "Zero Monthly Retainers",
                  "Conversion-Rate Optimized",
                  "48-Hour Turnaround Times"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-slate-300 font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="relative">
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-600 to-accent opacity-50 blur transition duration-500 hover:opacity-100" />
                <Link
                  href="/intake"
                  className="relative flex w-full items-center justify-center rounded-xl bg-slate-950 px-8 py-4 text-base font-bold text-white transition-all hover:bg-slate-900 ring-1 ring-white/20"
                >
                  Start Your Build
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}