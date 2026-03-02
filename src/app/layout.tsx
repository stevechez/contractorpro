import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Providers } from "./providers";
import { ThemeProvider } from "next-themes";
import StickyCTA from "@/components/layout/StickyCTA";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Elite General Contractors | Commercial & Residential",
  description: "Premium general co  ntracting services for commercial and residential construction projects.",
  openGraph: {
    title: "Elite General Contractors",
    description: "Professional construction services",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white text-primary`}>
        <Navbar />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
        <Providers>{children}</Providers>
        <StickyCTA />
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}