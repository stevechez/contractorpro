// app/(marketing)/page.tsx
import dynamic from "next/dynamic";

const Hero = dynamic(
  () => import("@/components/Hero"),
  { ssr: false }
);
const Services = dynamic(
  () => import("@/components/sections/Services").then((mod) => mod.Services),
  { ssr: false }
);
const Testimonials = dynamic(
  () => import("@/components/sections/Testimonials").then((mod) => mod.Testimonials),
  { ssr: false }
);
const CTA = dynamic(
  () => import("@/components/sections/CTA").then((mod) => mod.CTA),
  { ssr: false }
);

export default function MarketingPage() {
  return (
    <main>
      <Hero />
      <Services />
      <Testimonials />
      <CTA />
    </main>
  );
}