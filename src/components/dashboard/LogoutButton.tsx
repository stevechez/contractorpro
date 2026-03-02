// src/components/dashboard/LogoutButton.tsx
"use client";

import { logout } from '@/app/login/logout-action';
import { LogOut } from 'lucide-react';

export default function LogoutButton() {
  return (
    <button
      onClick={() => logout()}
      className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-slate-400 hover:text-white hover:bg-white/5 transition-all group"
    >
      <span>Sign Out</span>
      <LogOut className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </button>
  );
}