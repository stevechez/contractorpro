// src/app/dashboard/page.tsx
import { createClient } from '@/utils/supabase/server';
import LeadStats from '@/components/dashboard/LeadStats';
import { Mail, Phone, Calendar, Clock, User } from 'lucide-react';
import LogoutButton from '@/components/dashboard/LogoutButton';

export default async function DashboardPage() {
  const supabase = await createClient();

  // Fetch leads sorted by newest first
  const { data: leads, error } = await supabase
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 p-6 md:p-12">
      <div className="container mx-auto max-w-7xl">
        
        {/* Unified Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <div className="flex items-center gap-4 mb-2">
               <h1 className="text-4xl font-extrabold text-white tracking-tighter">
                 Project <span className="text-accent">Pipeline</span>
               </h1>
               <LogoutButton />
            </div>
            <p className="text-slate-400 font-light">
              Real-time lead tracking for your high-ticket builds.
            </p>
          </div>
          <LeadStats />
        </div>

        {/* Leads Table Section */}
        <div className="bg-slate-900/50 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-md shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/5 bg-white/5">
                  <th className="px-6 py-5 text-xs font-bold uppercase tracking-widest text-slate-500">Date</th>
                  <th className="px-6 py-5 text-xs font-bold uppercase tracking-widest text-slate-500">Prospect</th>
                  <th className="px-6 py-5 text-xs font-bold uppercase tracking-widest text-slate-500">Service</th>
                  <th className="px-6 py-5 text-xs font-bold uppercase tracking-widest text-slate-500">Contact Info</th>
                  <th className="px-6 py-5 text-xs font-bold uppercase tracking-widest text-slate-500 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {leads && leads.length > 0 ? (
                  leads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-white/[0.02] transition-colors group">
                      <td className="px-6 py-6 whitespace-nowrap">
                        <div className="flex items-center gap-2 text-sm text-slate-400">
                          <Clock className="w-3 h-3 text-accent" />
                          {new Date(lead.created_at).toLocaleDateString()}
                        </div>
                      </td>
                      <td className="px-6 py-6">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                            <User className="w-4 h-4" />
                          </div>
                          <span className="font-bold text-white text-base">{lead.full_name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-6">
                        <span className="px-3 py-1 rounded-full bg-slate-800 border border-white/10 text-[11px] font-bold uppercase tracking-tight text-slate-300">
                          {lead.service_requested || 'General Inquiry'}
                        </span>
                      </td>
                      <td className="px-6 py-6">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-sm text-slate-400 group-hover:text-white transition-colors">
                            <Mail className="w-3 h-3 text-accent" /> {lead.email}
                          </div>
                          {lead.phone && (
                            <div className="flex items-center gap-2 text-sm text-slate-400 group-hover:text-white transition-colors">
                              <Phone className="w-3 h-3 text-accent" /> {lead.phone}
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-6 text-right">
                         <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-[10px] font-black uppercase border ${
                           lead.status === 'New' 
                           ? 'bg-accent/10 border-accent/20 text-accent' 
                           : 'bg-slate-800 border-white/10 text-slate-400'
                         }`}>
                           <span className={`w-1 h-1 rounded-full ${lead.status === 'New' ? 'bg-accent animate-pulse' : 'bg-slate-400'}`} />
                           {lead.status}
                         </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="px-6 py-20 text-center">
                      <div className="flex flex-col items-center gap-3">
                        <Calendar className="w-12 h-12 text-slate-700" />
                        <p className="text-slate-500 font-light">No leads captured yet. Ready for launch.</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}