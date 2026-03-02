export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Let’s Talk</h2>
        <p className="mt-2 text-gray-600">
          Ready to start your next project? Contact us today.
        </p>
        <a
          href="mailto:hello@gencontractors.com"
          className="mt-4 inline-block px-8 py-3 bg-accent text-white font-semibold rounded-lg"
        >
          Email Us
        </a>
      </div>
    </section>
  );
}