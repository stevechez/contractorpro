// components/ThemeToggle.tsx
"use client";

import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-lg border px-3 py-1 text-sm hover:bg-muted/10 transition"
    >
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
}