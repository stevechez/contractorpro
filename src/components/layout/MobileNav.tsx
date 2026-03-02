// components/layout/MobileNav.tsx
"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="md:hidden border rounded-lg px-3 py-2"
        onClick={() => setOpen(true)}
      >
        Menu
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-background z-50 p-6"
          >
            <button onClick={() => setOpen(false)} className="mb-6">
              Close
            </button>

            <nav className="flex flex-col gap-6 text-lg font-semibold">
              <Link href="/">Home</Link>
              <Link href="/services">Services</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}