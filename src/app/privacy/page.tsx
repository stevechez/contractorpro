// src/app/privacy/page.tsx
export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-950 pt-32 pb-24 px-6 text-slate-300">
      <div className="container mx-auto max-w-3xl prose prose-invert">
        <h1 className="text-4xl font-extrabold text-white mb-8">Privacy Policy</h1>
        <p>Last Updated: March 2, 2026</p>
        
        <h3>1. Information We Collect</h3>
        <p>We collect information you provide directly to us via our intake and contact forms, including your name, email address, company name, and project details.</p>
        
        <h3>2. How We Use Your Information</h3>
        <p>We use this information to provide our services, process payments via Lemon Squeezy, and communicate with you regarding your project build.</p>
        
        <h3>3. Data Storage & Security</h3>
        <p>Your data is securely stored using Supabase infrastructure. We implement industry-standard security measures to protect your personal information.</p>
        
        <h3>4. Third-Party Services</h3>
        <p>We utilize Lemon Squeezy as a Merchant of Record for payment processing. They handle your payment information securely; we do not store credit card details on our servers.</p>
      </div>
    </div>
  );
}
