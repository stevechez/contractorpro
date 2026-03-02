// src/app/login/page.tsx
import Link from 'next/link';
import { login } from './actions';
import { ArrowLeft, Lock, ShieldCheck } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col justify-center py-12 px-6 lg:px-8 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/10 blur-[120px] rounded-full" />
      
      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white mb-8 transition-colors group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to site
        </Link>
        
        <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 py-10 px-8 shadow-2xl rounded-3xl">
          <div className="mb-8">
            <div className="bg-accent/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4 border border-accent/20">
              <Lock className="w-6 h-6 text-accent" />
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">Contractor Portal</h2>
            <p className="mt-2 text-sm text-slate-400 font-light">
              Secure access to your project leads and analytics.
            </p>
          </div>

          <form action={login} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 block w-full bg-slate-950 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                placeholder="steve@contractorpro.net"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-300">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="mt-1 block w-full bg-slate-950 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-4 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-slate-950 bg-white hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent active:scale-[0.98] transition-all"
            >
              Sign In
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-2 justify-center text-[10px] text-slate-500 uppercase tracking-widest font-bold">
            <ShieldCheck className="w-3 h-3 text-accent" /> Encrypted Endpoint
          </div>
        </div>
      </div>
    </div>
  );
}