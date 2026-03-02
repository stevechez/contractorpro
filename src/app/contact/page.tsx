// src/app/contact/page.tsx
"use client";

import { useState } from "react";
import { submitContactForm } from "@/app/actions/contact";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Send, Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleContact(formData: FormData) {
    setIsSubmitting(true);
    setError("");
    
    const result = await submitContactForm(formData);
    
    if (result.error) {
      setError(result.error);
      setIsSubmitting(false);
    } else {
      setIsSuccess(true);
    }
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
        <div className="text-center space-y-6">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/10 border border-green-500/20 mb-4"
          >
            <Send className="w-10 h-10 text-green-500" />
          </motion.div>
          <h2 className="text-3xl font-bold text-white tracking-tighter">Message Sent!</h2>
          <p className="text-slate-400 max-w-sm mx-auto">We've received your inquiry and will get back to you shortly.</p>
          <Link href="/" className="text-accent hover:underline inline-block font-medium">Back to Homepage</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 pt-32 pb-24 px-6 relative overflow-hidden flex flex-col">
      {/* Cinematic Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10 flex-grow">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white mb-12 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Back to home
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Left Column: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white leading-[1.1]">
                Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-accent">touch.</span>
              </h1>
              <p className="mt-6 text-lg text-slate-400 font-light leading-relaxed">
                Have a question about our Contractor Pro packages? Need technical support? Our US-based team is here to help you build and scale.
              </p>
            </div>

            <div className="space-y-6 pt-8 border-t border-white/10">
              <div className="flex items-center gap-4 group cursor-default">
                <div className="bg-white/5 border border-white/10 p-3 rounded-xl text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate-400">Email Us</h4>
                  <p className="text-white font-semibold">support@contractorpro.dev</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group cursor-default">
                <div className="bg-white/5 border border-white/10 p-3 rounded-xl text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate-400">Call Us</h4>
                  <p className="text-white font-semibold">1 (800) 555-0199</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group cursor-default">
                <div className="bg-white/5 border border-white/10 p-3 rounded-xl text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate-400">Headquarters</h4>
                  <p className="text-white font-semibold">San Francisco, CA</p>
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
            <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-b from-white/15 to-transparent opacity-50 blur-sm" />
            
            <form action={handleContact} className="relative bg-slate-900/60 backdrop-blur-2xl p-8 md:p-10 rounded-3xl shadow-2xl border border-white/10 space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-300">Full Name</label>
                  <input required name="name" type="text" id="name" className="w-full rounded-xl border border-white/10 bg-slate-950/50 px-4 py-3 text-white placeholder:text-slate-600 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-300">Email Address</label>
                  <input required name="email" type="email" id="email" className="w-full rounded-xl border border-white/10 bg-slate-950/50 px-4 py-3 text-white placeholder:text-slate-600 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" placeholder="john@example.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-slate-300">Subject</label>
                <select required name="subject" id="subject" defaultValue="" className="w-full rounded-xl border border-white/10 bg-slate-950/50 px-4 py-3 text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all appearance-none [&>option]:bg-slate-900">
                  <option value="" disabled>How can we help you?</option>
                  <option value="sales">Sales & Pricing Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="billing">Billing Question</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                <textarea required name="message" id="message" rows={5} className="w-full rounded-xl border border-white/10 bg-slate-950/50 px-4 py-3 text-white placeholder:text-slate-600 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all resize-none" placeholder="Type your message here..." />
              </div>

              {error && <p className="text-red-400 text-sm font-medium">{error}</p>}

              <div className="pt-4 relative">
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-600 to-accent opacity-50 blur transition duration-500 group-hover:opacity-80" />
                <button 
                  disabled={isSubmitting}
                  type="submit" 
                  className="relative w-full flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-bold text-slate-950 transition-all hover:bg-slate-100 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"} <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}