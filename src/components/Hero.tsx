// components/Hero.tsx
"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion"; // <-- 1. Import Variants
import Link from "next/link";

interface HeroProps {
  title?: string;
  subtitle?: string;
  bgImage?: string;
}

// 2. Explicitly type as Variants to fix the 'ease' array inference error
const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

export default function Hero({ 
  title = "Building Dreams With Precision & Trust",
  subtitle = "Expert general contracting services — from foundation to finish. We deliver on time, on budget, and beyond expectations.",
  bgImage = "/hero-bg.jpg" 
}: HeroProps) {
  
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-slate-950 pt-20">
      
      {/* The Lighting: Subtle top radial spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/20 blur-[120px] rounded-full pointer-events-none z-10" />

      {/* The Background Image with aggressive fade-out to black */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity">
        <Image
          src={bgImage}
          alt={title}
          fill
          priority
          className="object-cover object-center brightness-[1.3] contrast-[1.1]"
    style={{ 
      maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)', 
      WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)' 
    }}
        />
<div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/50 to-slate-950" />      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        // 3. Ensure the parent variants define both hidden and visible states
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
        }}
        className="relative z-20 container mx-auto px-6 text-center flex flex-col items-center"
      >
        {/* Kicker Badge */}
        <motion.div variants={fadeUpVariants} className="mb-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-slate-300 backdrop-blur-md shadow-inner">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Taking new projects for 2026
          </span>
        </motion.div>
        
        {/* Massive, tight-tracked Typography */}
        <motion.h1 
          variants={fadeUpVariants}
          className="mx-auto max-w-5xl text-5xl font-extrabold tracking-tighter text-white sm:text-7xl md:text-8xl leading-[1.1]"
        >
          {title.split(' ').map((word, i) => (
            word === 'Precision' || word === 'Trust' ? (
              <span key={i} className="text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500"> {word} </span>
            ) : (
              <span key={i}> {word} </span>
            )
          ))}
        </motion.h1>
        
        {/* Subtitle */}
        <motion.p 
          variants={fadeUpVariants}
          className="mx-auto mt-8 max-w-2xl text-lg text-slate-400 sm:text-xl font-light leading-relaxed"
        >
          {subtitle}
        </motion.p>

        {/* Buttons & Trust Cluster */}
        <motion.div variants={fadeUpVariants} className="mt-12 flex flex-col items-center w-full">
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            
            {/* The "World Class" Glowing Button */}
            <div className="relative group">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-600 to-accent opacity-50 blur transition duration-500 group-hover:opacity-100" />
              <Link
                href="/intake"
                className="relative flex w-full sm:w-auto items-center justify-center rounded-xl bg-slate-950 px-8 py-4 text-base font-bold text-white transition-all hover:bg-slate-900 ring-1 ring-white/20"
              >
                Start Your Build
              </Link>
            </div>

            <Link
              href="#projects"
              className="flex w-full sm:w-auto items-center justify-center rounded-xl px-8 py-4 text-base font-medium text-slate-300 transition-all hover:text-white hover:bg-white/5"
            >
              View Our Work
            </Link>
          </div>

          {/* Avatar Social Proof Cluster */}
          <div className="mt-10 flex flex-col items-center gap-3">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-950 bg-slate-800 flex items-center justify-center overflow-hidden">
                  <Image src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Client" width={40} height={40} />
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-400 font-medium">
              <div className="flex text-yellow-500 text-xs">★★★★★</div>
              <span>Trusted by 120+ contractors</span>
            </div>
          </div>

        </motion.div>
      </motion.div>
    </section>
  );
}