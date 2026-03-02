export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold">About Us</h2>
          <p className="mt-4 text-gray-700">
            We are a team of highly skilled professionals dedicated to building
            exceptional spaces. Our expertise spans commercial and residential
            contracting with safety, quality, and communication at the forefront.
          </p>
        </div>
        <img
          src="/about-img.jpg"
          alt="Contracting team"
          className="rounded-lg object-cover w-full h-64"
        />
      </div>
    </section>
  );
}