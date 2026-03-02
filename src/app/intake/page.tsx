// app/intake/page.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ChevronRight, Loader2, ShieldCheck, Clock, Star } from "lucide-react";
import { submitIntakeForm } from "@/app/actions/intake";

export default function IntakePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    const formData = new FormData(e.currentTarget);
    const response = await submitIntakeForm(formData);
    
    setIsSubmitting(false);

    if (response?.error) {
      setError(response.error);
    } else {
      setIsSubmitted(true);
    }
  };

  // The World-Class Success State
  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 p-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 blur-[150px] rounded-full pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-md w-full relative z-10"
        >
          <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-b from-green-500/50 to-transparent opacity-50 blur-sm" />
          <div className="relative bg-slate-900/80 backdrop-blur-2xl rounded-3xl p-10 text-center shadow-2xl border border-white/10">
            <div className="mx-auto w-20 h-20 bg-green-500/10 border border-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-8 shadow-[inset_0_0_20px_rgba(74,222,128,0.2)]">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white mb-4">Application Received.</h2>
            <p className="text-slate-400 mb-8 font-light leading-relaxed">
              We are reviewing your project details. Keep an eye on your inbox—we will send your secure checkout link within 24 hours to kick off your build.
            </p>
            <Link 
              href="/"
              className="inline-flex items-center justify-center w-full rounded-xl bg-white px-6 py-4 text-sm font-bold text-slate-950 transition-all hover:bg-slate-200 hover:scale-[0.98]"
            >
              Return to Homepage
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 py-12 md:py-24 px-6 relative overflow-hidden flex flex-col justify-center">
      {/* Cinematic Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-accent/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white mb-12 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Back to home
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Left Column: Value Prop & Trust */}
          <motion.div 
            initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-8 sticky top-24"
          >
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-400 mb-6 shadow-inner">
                Project Intake
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white leading-[1.1]">
                Let's build your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-accent">digital asset.</span>
              </h1>
              <p className="mt-6 text-lg text-slate-400 font-light leading-relaxed">
                Fill out the details below to apply for the Contractor Pro package. We only take on a limited number of builds per month to ensure absolute quality.
              </p>
            </div>

            <div className="space-y-6 pt-8 border-t border-white/10">
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-white/5 border border-white/10 p-2 rounded-lg text-accent">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">No upfront commitment</h4>
                  <p className="text-sm text-slate-400 font-light mt-1">Review our proposal before paying a dime.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-white/5 border border-white/10 p-2 rounded-lg text-accent">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">48-Hour Turnaround</h4>
                  <p className="text-sm text-slate-400 font-light mt-1">Once approved, your site is live in two days.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-white/5 border border-white/10 p-2 rounded-lg text-accent">
                  <Star className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">5-Star Support</h4>
                  <p className="text-sm text-slate-400 font-light mt-1">Direct access to our US-based design team.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: The Glassmorphism Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative group"
          >
            {/* Ambient border glow */}
            <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-b from-white/15 to-transparent opacity-50 blur-sm" />
            
            <form 
              onSubmit={handleSubmit}
              className="relative bg-slate-900/60 backdrop-blur-2xl p-8 md:p-10 rounded-3xl shadow-2xl border border-white/10 space-y-8"
            >
              {error && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl text-sm font-medium flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                  {error}
                </div>
              )}

              {/* Section 1 */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 text-xs font-bold text-white">1</span>
                  <h3 className="text-lg font-bold text-white tracking-tight">Your Details</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-300">Full Name</label>
                    <input required type="text" id="name" name="name" className="w-full rounded-xl border border-white/10 bg-slate-950/50 px-4 py-3 text-white placeholder:text-slate-600 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-300">Work Email</label>
                    <input required type="email" id="email" name="email" className="w-full rounded-xl border border-white/10 bg-slate-950/50 px-4 py-3 text-white placeholder:text-slate-600 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" placeholder="john@apexbuilders.com" />
                  </div>
                </div>
              </div>

              {/* Section 2 */}
              <div className="space-y-6 pt-2">
                <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 text-xs font-bold text-white">2</span>
                  <h3 className="text-lg font-bold text-white tracking-tight">Business Profile</h3>
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-slate-300">Company Name</label>
                  <input required type="text" id="company" name="company" className="w-full rounded-xl border border-white/10 bg-slate-950/50 px-4 py-3 text-white placeholder:text-slate-600 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" placeholder="Apex Builders LLC" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium text-slate-300">Primary Focus Area</label>
                  <select required id="service" name="service" defaultValue="" className="w-full rounded-xl border border-white/10 bg-slate-950/50 px-4 py-3 text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all appearance-none [&>option]:bg-slate-900">
                    <option value="" disabled>Select your main specialty...</option>
                    <option value="general-contractor">General Contracting</option>
                    <option value="painter">Professional Painting</option>
                    <option value="landscaper">Landscaping & Hardscaping</option>
                    <option value="handyman">Handyman Services</option>
                    <option value="flooring">Flooring Installation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="website" className="text-sm font-medium text-slate-300">Current Website (Optional)</label>
                  <input type="url" id="website" name="website" className="w-full rounded-xl border border-white/10 bg-slate-950/50 px-4 py-3 text-white placeholder:text-slate-600 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" placeholder="https://www.yourdomain.com" />
                </div>
              </div>

              {/* Section 3 */}
              <div className="space-y-6 pt-2">
                <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 text-xs font-bold text-white">3</span>
                  <h3 className="text-lg font-bold text-white tracking-tight">Project Goals</h3>
                </div>
                <div className="space-y-2">
                  <label htmlFor="goals" className="text-sm font-medium text-slate-300">What is the main goal for your new site?</label>
                  <textarea required id="goals" name="goals" rows={4} className="w-full rounded-xl border border-white/10 bg-slate-950/50 px-4 py-3 text-white placeholder:text-slate-600 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all resize-none" placeholder="e.g., We want to stop relying on HomeAdvisor and generate our own high-ticket leads..." />
                </div>
              </div>

              <div className="pt-6 relative">
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-600 to-accent opacity-50 blur transition duration-500 group-hover:opacity-80" />
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="relative w-full flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-bold text-slate-950 transition-all hover:bg-slate-100 active:scale-[0.98] disabled:opacity-80 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin text-accent" />
                      Processing...
                    </>
                  ) : (
                    <>Submit Application <ChevronRight className="w-5 h-5" /></>
                  )}
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}