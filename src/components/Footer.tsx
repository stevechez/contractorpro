// components/Footer.tsx
import Link from "next/link";
import { ArrowRight, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-950 pt-20 overflow-hidden">
      {/* 1. The Glow Bleed: Subtle gradient line across the top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-16">
          
          {/* Brand & Value Prop (Spans 2 columns on large screens) */}
          <div className="lg:col-span-2">
            <Link 
              href="/" 
              className="text-2xl font-extrabold tracking-tighter text-white mb-6 inline-block"
            >
              Contractor<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-accent">Pro</span>
            </Link>
            <p className="max-w-sm mb-8 text-slate-400 font-light leading-relaxed">
              Premium, conversion-optimized digital assets built specifically for elite home service professionals. Stop losing high-ticket leads to inferior competitors.
            </p>
            <Link 
              href="/intake" 
              className="group inline-flex items-center gap-2 text-white font-semibold text-sm hover:text-accent transition-colors"
            >
              Start your build 
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Quick Links */}
          <div className="lg:col-start-4">
            <h4 className="text-white font-bold mb-6 tracking-tight">Platform</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/#services" className="text-sm text-slate-400 hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/#reviews" className="text-sm text-slate-400 hover:text-white transition-colors">Testimonials</Link>
              </li>
              <li>
                <Link href="/#pricing" className="text-sm text-slate-400 hover:text-white transition-colors">Pricing</Link>
              </li>
              <li>
                <Link href="/intake" className="text-sm text-slate-400 hover:text-white transition-colors">Apply Now</Link>
              </li>
            </ul>
          </div>

          {/* Niches / Industries */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-tight">Industries</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/general-contractor" className="text-sm text-slate-400 hover:text-white transition-colors">General Contractors</Link>
              </li>
              <li>
                <Link href="/painter" className="text-sm text-slate-400 hover:text-white transition-colors">Painters</Link>
              </li>
              <li>
                <Link href="/landscaper" className="text-sm text-slate-400 hover:text-white transition-colors">Landscapers</Link>
              </li>
              <li>
                <Link href="/handyman" className="text-sm text-slate-400 hover:text-white transition-colors">Handyman Services</Link>
              </li>
            </ul>
          </div>

          {/* Company & Legal */}
          <div> {/* <-- THIS DIV WAS MISSING */}
            <h4 className="text-white font-bold mb-6 tracking-tight">Company</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/privacy" className="text-sm text-slate-400 hover:text-white transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-slate-400 hover:text-white transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Status, Copyright, Socials */}
        <div className="pt-8 pb-8 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/5 relative z-10">
          
          {/* 2. The "System Status" Flex */}
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-3 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-medium text-slate-300">All systems operational</span>
          </div>

          <p className="text-sm text-slate-500">
            © {currentYear} ContractorPro Digital. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-slate-500">
            <a href="#" className="hover:text-white transition-colors" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* 3. The Massive Typography Anchor */}
      <div className="w-full overflow-hidden flex justify-center pointer-events-none select-none pb-[-20px] translate-y-[25%]">
        <h1 className="text-[14vw] font-extrabold leading-none tracking-tighter text-white/[0.02] whitespace-nowrap">
          CONTRACTORPRO
        </h1>
      </div>
    </footer>
  );
}