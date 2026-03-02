// src/app/layout.tsx
import { Metadata } from 'next';
import manifest from "@/config/project-manifest.json";
import "./globals.css"; // Ensure your Tailwind styles are imported

// IMPORTANT: Do NOT use "use client" in this file for Metadata to work
export async function generateMetadata(): Promise<Metadata> {
  const { metadata } = manifest;

  // Fallback logic in case identity or name is missing during a mock build
  const domainName = 'contractorpros';

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      images: [metadata.ogImage],
      type: 'website',
      siteName: metadata.title,
    },
    icons: {
      icon: metadata.favicon || "/favicon.ico",
    },
    alternates: {
      canonical: `https://${domainName}.net`, // Dynamically uses your .net preference
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* Applying bg-slate-950 here prevents "white flashes" on page transitions 
        and matches your Manifesto/Contact page styling.
      */}
      <body className="bg-slate-950 antialiased text-slate-200">
        {children}
      </body>
    </html>
  );
}