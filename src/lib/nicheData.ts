// lib/nicheData.ts

export interface ReviewItem {
  name: string;
  role: string;
  image: string;
  quote: string;
}

export const nicheData = {
  "general-contractor": {
    heroTitle: "Premium Websites for General Contractors",
    heroSubtitle: "Launch a conversion-optimized, professional website in 48 hours. Built for contractors who want more calls — not complexity.",
    // heroImage: "/hero-bg.jpg",
    trustedText: "TRUSTED BY ELITE CONTRACTORS ACROSS NORTH AMERICA",
    services: [
      { title: "Custom Home Builds", description: "From architectural planning to the final coat of paint, we build dream homes from the ground up.", iconName: "home" },
      { title: "Bathroom Remodels", description: "Transform your space into a relaxing, beach-inspired retreat or a modern spa.", iconName: "bath" },
      { title: "Kitchen Renovations", description: "The heart of the home, elevated with custom cabinetry and premium countertops.", iconName: "kitchen" },
      { title: "Commercial Build-Outs", description: "Fast, reliable commercial tenant improvements that get your doors open on time.", iconName: "hammer" },
    ],
    reviews: [
      { name: "Mark & Lisa T.", role: "Custom Home Build", image: "https://i.pravatar.cc/150?u=mark", quote: "The easiest construction process we've ever experienced. They showed up on time, kept the site clean, and delivered exactly what they promised." },
      { name: "David H.", role: "Bathroom Renovation", image: "https://i.pravatar.cc/150?u=david", quote: "Our bathroom remodel was finished a week ahead of schedule. The tile work is absolutely flawless. Worth every single penny." },
      { name: "Elena R.", role: "Full House Remodel", image: "https://i.pravatar.cc/150?u=elena", quote: "Professional, transparent pricing, and incredible craftsmanship. It's hard to find contractors you can actually trust, but these guys are the real deal." },
      { name: "James W.", role: "Commercial Build-out", image: "https://i.pravatar.cc/150?u=james", quote: "Got our retail space open 2 weeks early. The project management was night and day compared to other GC's we've worked with." },
      { name: "Sarah M.", role: "Kitchen Renovation", image: "https://i.pravatar.cc/150?u=sarah", quote: "They completely transformed our kitchen. The custom cabinetry and attention to detail blew us away. Highly recommend." },
      { name: "Tom C.", role: "Deck & Hardscaping", image: "https://i.pravatar.cc/150?u=tom", quote: "Transformed our backyard into a total oasis. The crew was respectful, fast, and the final product is stunning." }
    ]
  },
  
  "painter": {
    heroTitle: "Premium Websites for Professional Painters",
    heroSubtitle: "Stop competing on price. Get a high-converting digital asset that showcases your portfolio and attracts high-ticket residential and commercial jobs.",
    heroImage: "/hero-painter.jpg",
    trustedText: "TRUSTED BY ELITE PAINTING CREWS ACROSS NORTH AMERICA",
    services: [
      { title: "Interior Painting", description: "Target high-margin residential jobs with a site that highlights flawless prep work and premium finishes.", iconName: "paint" },
      { title: "Exterior Painting", description: "Showcase stunning before-and-afters of weather-resistant, long-lasting exterior transformations.", iconName: "home" },
      { title: "Cabinet Refinishing", description: "Capture homeowners looking for a highly profitable, cost-effective way to modernize their kitchens.", iconName: "kitchen" },
      { title: "Commercial Painting", description: "Attract property managers with a professional digital presence that promises minimal business disruption.", iconName: "hammer" },
    ],
    reviews: [
      { name: "Jessica L.", role: "Interior Repaint", image: "https://i.pravatar.cc/150?u=jess", quote: "The crew was meticulously clean. Crisp lines, perfect coverage, and they finished our entire downstairs in just two days." },
      { name: "Robert K.", role: "Exterior Stucco", image: "https://i.pravatar.cc/150?u=rob", quote: "Our house looks brand new. They took the time to repair all the stucco cracks before painting, which shows they actually care about quality." },
      { name: "Amanda P.", role: "Cabinet Refinishing", image: "https://i.pravatar.cc/150?u=amanda", quote: "Saved us thousands on a kitchen remodel. The cabinets look factory-finished, not painted. Absolutely incredible work." },
      { name: "Michael B.", role: "Commercial Office", image: "https://i.pravatar.cc/150?u=mike", quote: "Painted our 10,000 sq ft office over the weekend. We came in Monday to a perfect paint job and zero mess. True professionals." },
      { name: "The Harrison Family", role: "Full Exterior", image: "https://i.pravatar.cc/150?u=harrison", quote: "We received three quotes and went with them because of their professionalism. The final result exceeded our expectations." },
      { name: "Daniel S.", role: "Deck Staining", image: "https://i.pravatar.cc/150?u=dan", quote: "Brought our weathered, 10-year-old deck back to life. The color recommendation was spot on and it looks fantastic." }
    ]
  },
  // Add this inside the nicheData object in lib/nicheData.ts

  "landscaper": {
    heroTitle: "Premium Websites for Landscaping & Hardscaping",
    heroSubtitle: "Turn seasonal one-offs into year-round retainers. Get a high-converting digital asset that captures high-ticket outdoor living projects.",
    heroImage: "/hero-landscaper.jpg",
    trustedText: "TRUSTED BY ELITE LANDSCAPING COMPANIES ACROSS NORTH AMERICA",
    services: [
      { 
        title: "Custom Hardscaping", 
        description: "Patios, fire pits, and outdoor kitchens that expand living spaces and command premium project pricing.", 
        iconName: "hammer" 
      },
      { 
        title: "Landscape Design", 
        description: "Showcase lush transformations and 3D renderings that sell the dream before the digging even starts.", 
        iconName: "tree" 
      },
      { 
        title: "Recurring Maintenance", 
        description: "Build a predictable revenue engine with a site optimized to capture commercial and residential route contracts.", 
        iconName: "home" 
      },
      { 
        title: "Irrigation & Drainage", 
        description: "Highlight your technical expertise in water management to attract high-value, problem-solving jobs.", 
        iconName: "wrench" 
      },
    ],
    reviews: [
      { name: "John D.", role: "Paver Patio & Firepit", image: "https://i.pravatar.cc/150?u=john", quote: "They completely transformed our unusable backyard into an incredible entertainment space. The stonework is flawless." },
      { name: "The Miller Family", role: "Full Backyard Oasis", image: "https://i.pravatar.cc/150?u=miller", quote: "From the initial 3D design to the final plant going into the ground, the communication and execution were world-class." },
      { name: "Sarah T.", role: "Commercial Maintenance", image: "https://i.pravatar.cc/150?u=sarah", quote: "We switched our HOA maintenance to them last year. The property has never looked better and their crews are always professional." },
      { name: "Mike R.", role: "Retaining Wall", image: "https://i.pravatar.cc/150?u=mike", quote: "We had a complex drainage and erosion issue. They engineered a beautiful retaining wall that solved the problem perfectly." },
      { name: "Emily & Josh", role: "Landscape Lighting", image: "https://i.pravatar.cc/150?u=emily", quote: "The architectural lighting they installed makes our house look like a luxury resort at night. Highly recommend." },
      { name: "David L.", role: "Sod & Irrigation", image: "https://i.pravatar.cc/150?u=david", quote: "Ripped out our dead lawn, fixed the broken sprinkler zones, and laid perfect sod in just two days. Great team." }
    ]
  },
  // Add this inside the nicheData object in lib/nicheData.ts

  "handyman": {
    heroTitle: "Premium Websites for Handyman Professionals",
    heroSubtitle: "Stop relying on shared lead boards. Get a conversion-optimized digital asset that attracts profitable, high-trust local repair jobs.",
    heroImage: "/hero-handyman.jpg",
    trustedText: "TRUSTED BY TOP-RATED HANDYMAN SERVICES ACROSS NORTH AMERICA",
    services: [
      { 
        title: "General Home Repairs", 
        description: "Showcase your versatility in fixing drywall, doors, and everyday household wear-and-tear to become the go-to local pro.", 
        iconName: "hammer" 
      },
      { 
        title: "Fixture Installations", 
        description: "Highlight your expertise in mounting TVs, installing ceiling fans, and upgrading lighting fixtures.", 
        iconName: "wrench" 
      },
      { 
        title: "Minor Plumbing & Electrical", 
        description: "Attract quick, high-margin jobs like swapping faucets, replacing garbage disposals, or changing outlets.", 
        iconName: "bath" 
      },
      { 
        title: "The 'Honey-Do' List", 
        description: "Market highly profitable half-day and full-day booking packages to knock out a homeowner's entire punch list in one go.", 
        iconName: "home" 
      },
    ],
    reviews: [
      { name: "Jessica W.", role: "TV Mounting & Repairs", image: "https://i.pravatar.cc/150?u=jessw", quote: "Knocked out my entire punch list in 4 hours. Hung the 75-inch TV perfectly level and fixed a leaky sink." },
      { name: "Robert & Ann", role: "Door & Trim Repair", image: "https://i.pravatar.cc/150?u=roba", quote: "Showed up right on time, super professional, and finally got our front door to close properly without sticking." },
      { name: "Mark C.", role: "Fixture Installation", image: "https://i.pravatar.cc/150?u=markc", quote: "Installed three new ceiling fans and swapped out our dining room chandelier. Clean, fast, and great pricing." },
      { name: "Linda S.", role: "Drywall Patching", image: "https://i.pravatar.cc/150?u=lindas", quote: "Patched a massive hole in my drywall where a doorknob went through. You literally can't even tell it was ever there." },
      { name: "The Owens Family", role: "Seasonal Maintenance", image: "https://i.pravatar.cc/150?u=owens", quote: "We hire them twice a year for seasonal maintenance and gutter cleaning. Completely trustworthy and does great work." },
      { name: "David K.", role: "Furniture Assembly", image: "https://i.pravatar.cc/150?u=davidk", quote: "Assembled a massive, complicated wardrobe system and hauled away all the boxes. Saved my weekend and my sanity!" }
    ]
  },
};

export type NicheKey = keyof typeof nicheData;