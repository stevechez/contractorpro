// components/sections/ServicesGrid.tsx
"use client";

import { motion, Variants } from "framer-motion";
import { Home, Bath, ChefHat, Hammer, Paintbrush, Wrench, TreePine, ArrowUpRight } from "lucide-react";

// 1. Map string keys to Lucide components
const iconMap: Record<string, React.ElementType> = {
  home: Home,
  bath: Bath,
  kitchen: ChefHat,
  hammer: Hammer,
  paint: Paintbrush,
  wrench: Wrench,
  tree: TreePine,
};

export interface ServiceItem {
  title: string;
  description: string;
  iconName: string;
}

interface ServicesGridProps {
  services?: ServiceItem[];
}

const defaultServices: ServiceItem[] = [
  { title: "Custom Home Builds", description: "We build dream homes from the ground up with uncompromising quality and architectural precision.", iconName: "home" },
  { title: "Bathroom Remodels", description: "Custom tile work to high-end plumbing fixtures.", iconName: "bath" },
  { title: "Kitchen Renovations", description: "Custom cabinetry and professional-grade appliances.", iconName: "kitchen" },
  { title: "Commercial Build-Outs", description: "Fast, reliable commercial tenant improvements that get your doors open on time and perfectly to spec.", iconName: "hammer" },
];

// 2. High-end Spring Animations
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.15 } 
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  },
};

export function Services({ services = defaultServices }: ServicesGridProps) {
  return (
<section id="services" className="relative bg-slate-50 dark:bg-slate-950 py-32 overflow-hidden">      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl font-extrabold tracking-tighter text-slate-900 dark:text-white"
          >
            Capabilities that scale with your vision.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-2xl"
          >
            We don't just build websites. We engineer high-performance digital assets designed to convert traffic into high-ticket jobs.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          // 3. The Bento Grid CSS
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]"
        >
          {services.map((service, index) => {
            const Icon = iconMap[service.iconName] || Hammer; 
            
            // Bento Box sizing logic based on index
            // Item 0 & 3 span 2 columns, Item 1 & 2 span 1 column. 
            // This creates the asymmetrical mosaic look.
            const isWide = index === 0 || index === 3;
            
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className={`group relative overflow-hidden rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/40 p-8 md:p-10 shadow-sm backdrop-blur-md transition-all hover:shadow-xl hover:border-accent/40 ${
                  isWide ? "md:col-span-2" : "md:col-span-1"
                }`}
              >
                {/* 4. The Hover Inner Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                
                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-8">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 transition-transform duration-500 group-hover:scale-110 group-hover:bg-accent group-hover:text-white group-hover:border-accent">
                      <Icon className="h-7 w-7" />
                    </div>
                    
                    {/* Tiny detail: Arrow appears and slides in on hover to imply action */}
                    <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center opacity-0 -translate-y-2 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0">
                       <ArrowUpRight className="w-5 h-5 text-accent" />
                    </div>
                  </div>

                  <div className="mt-auto">
                    <h3 className="mb-3 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}