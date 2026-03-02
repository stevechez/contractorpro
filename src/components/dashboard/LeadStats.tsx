// components/dashboard/LeadStats.tsx
import { createClient } from '@/utils/supabase/server';

export default async function LeadStats() {
  // 1. Await the client creation (required for Server Components)
  const supabase = await createClient(); 

  // 2. Run the count query
  const { count, error } = await supabase
    .from('leads')
    .select('*', { count: 'exact', head: true });

  if (error) {
    console.error("Supabase Error:", error.message);
    return <div>Error loading stats</div>;
  }

  return (
    <div className="p-6 rounded-2xl bg-slate-900 border border-white/10 shadow-2xl">
      <h4 className="text-slate-500 text-xs font-bold uppercase tracking-widest">
        Total Leads Captured
      </h4>
      <p className="text-5xl font-extrabold text-white mt-4 tracking-tighter">
        {count || 0}
      </p>
      <div className="mt-6 flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
        </span>
        <span className="text-[10px] text-slate-500 font-medium uppercase tracking-tight">
          Live Database Feed
        </span>
      </div>
    </div>
  );
}