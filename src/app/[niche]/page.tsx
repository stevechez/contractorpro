// src/app/[niche]/page.tsx
import { notFound } from "next/navigation";
import { nicheData, NicheKey } from "@/lib/nicheData";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { CTA } from "@/components/sections/CTA";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";

export function generateStaticParams() {
  return Object.keys(nicheData).map((niche) => ({
    niche: niche,
  }));
}

// 1. Make the component async and type params as a Promise
export default async function NicheLandingPage({ 
  params 
}: { 
  params: Promise<{ niche: string }> 
}) {
  // 2. Await the params before trying to read them
  const resolvedParams = await params;
  
  // 3. Now we can safely read .niche
  const currentNiche = nicheData[resolvedParams.niche as NicheKey];

  if (!currentNiche) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col">
      <Hero 
        title={currentNiche.heroTitle} 
        subtitle={currentNiche.heroSubtitle} 
        // bgImage={currentNiche.heroImage} 
      />
      
      <TrustedBy label={currentNiche.trustedText} />
      
      {/* Fallback to an empty array if services are missing to prevent mapping errors */}
      <Services services={currentNiche.services || []} />
      
      <Testimonials />
      <ProcessTimeline />
      <Pricing />
      <CTA />
    </main>
  );
}