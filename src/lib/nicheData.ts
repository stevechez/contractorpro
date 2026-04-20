import { JSX } from 'react';

// 1. Define the Review structure
export interface Review {
	name: string;
	role: string;
	image: string;
	quote: string;
}

// 2. Updated ServiceItem to match your data (description/iconName)
export interface ServiceItem {
	title: string;
	description: string; // Changed from 'desc'
	iconName: string; // Changed from 'icon: JSX.Element'
}

// 3. Updated NicheContent to include reviews and match your data fields
export interface NicheContent {
	heroTitle: string | JSX.Element; // Allow both strings and JSX
	heroSubtitle: string;
	heroImage?: string;
	trustedText: string;
	services: ServiceItem[];
	reviews: Review[]; // Added this field
	painPoints?: string[]; // Optional since some niches don't have them yet
	beforeImage?: string;
	afterImage?: string;
}

// 4. Your existing data object
export const nicheData: Record<string, NicheContent> = {
	'general-contractor': {
		heroTitle: 'Premium Websites for General Contractors',
		heroSubtitle:
			'Launch a conversion-optimized, professional website in 48 hours. Built for contractors who want more calls — not complexity.',
		trustedText: 'TRUSTED BY ELITE CONTRACTORS ACROSS NORTH AMERICA',
		services: [
			{
				title: 'Custom Home Builds',
				description:
					'From architectural planning to the final coat of paint, we build dream homes from the ground up.',
				iconName: 'home',
			},
			{
				title: 'Bathroom Remodels',
				description:
					'Transform your space into a relaxing, beach-inspired retreat or a modern spa.',
				iconName: 'bath',
			},
			{
				title: 'Kitchen Renovations',
				description:
					'The heart of the home, elevated with custom cabinetry and premium countertops.',
				iconName: 'kitchen',
			},
			{
				title: 'Commercial Build-Outs',
				description:
					'Fast, reliable commercial tenant improvements that get your doors open on time.',
				iconName: 'hammer',
			},
		],
		reviews: [
			{
				name: 'Mark & Lisa T.',
				role: 'Custom Home Build',
				image: 'https://i.pravatar.cc/150?u=mark',
				quote:
					"The easiest construction process we've ever experienced. They showed up on time, kept the site clean, and delivered exactly what they promised.",
			},
			// ... keep your other reviews
		],
	},
	painter: {
		heroTitle: 'Premium Websites for Professional Painters',
		heroSubtitle:
			'Stop competing on price. Get a high-converting digital asset that showcases your portfolio and attracts high-ticket residential and commercial jobs.',
		heroImage: '/hero-painter.jpg',
		trustedText: 'TRUSTED BY ELITE PAINTING CREWS ACROSS NORTH AMERICA',
		services: [
			{
				title: 'Interior Painting',
				description:
					'Target high-margin residential jobs with a site that highlights flawless prep work and premium finishes.',
				iconName: 'paint',
			},
			// ... keep your other services
		],
		reviews: [
			// ... keep your other reviews
		],
	},
	// ... and so on for landscaper and handyman
};

export type NicheKey = keyof typeof nicheData;
