// src/app/terms/page.tsx
export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-950 pt-32 pb-24 px-6 text-slate-300">
      <div className="container mx-auto max-w-3xl prose prose-invert">
        <h1 className="text-4xl font-extrabold text-white mb-8">Terms of Service</h1>
        <p>Last Updated: March 2, 2026</p>

        <h3>1. Service Delivery</h3>
        <p>ContractorPro provides a productized web development service. Our "48-Hour Build" begins once the intake form is approved and full payment is confirmed via Lemon Squeezy.</p>

        <h3>2. Fees and Payment</h3>
        <p>All services are provided for a one-time flat fee of $2,499. Payments are non-refundable once the build process has commenced due to the rapid nature of our delivery model.</p>

        <h3>3. Ownership</h3>
        <p>Upon final delivery and launch, you retain 100% ownership of the digital asset and your domain. ContractorPro retains the right to display the completed work in our portfolio.</p>

        <h3>4. Limitation of Liability</h3>
        <p>ContractorPro is not liable for any indirect or consequential damages arising from the use of our services or any third-party hosting platforms (Vercel, Supabase).</p>
      </div>
    </div>
  );
}