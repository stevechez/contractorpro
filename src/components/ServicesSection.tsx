import { motion } from "framer-motion";
import { BriefcaseIcon, WrenchScrewdriverIcon, HomeIcon } from "@heroicons/react/24/outline";

const services = [
  {
    icon: <BriefcaseIcon className="h-10 w-10 text-accent" />,
    title: "Commercial Contracting",
    desc: "From office build-outs to retail spaces — professional & on schedule.",
  },
  {
    icon: <HomeIcon className="h-10 w-10 text-accent" />,
    title: "Residential Builds",
    desc: "Custom homes built with care and quality craftsmanship.",
  },
  {
    icon: <WrenchScrewdriverIcon className="h-10 w-10 text-accent" />,
    title: "Renovations & Remodels",
    desc: "Transforming your space with precision and style.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto text-center space-y-8">
        <h2 className="text-3xl font-bold">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="p-6 border rounded-lg shadow-sm"
            >
              {s.icon}
              <h3 className="mt-4 font-semibold text-xl">{s.title}</h3>
              <p className="mt-2 text-gray-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}