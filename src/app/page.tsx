// app/page.tsx
import Hero from "@/components/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import Stats from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <TrustedBy />
      <Stats />
      <Services />
      <Testimonials />
      <Pricing />
      <CTA />
    </main>
  );
}