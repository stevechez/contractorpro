export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Featured Projects</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {["proj1.jpg", "proj2.jpg", "proj3.jpg"].map((img, i) => (
            <div
              key={i}
              className="h-48 bg-gray-200 rounded-lg bg-cover bg-center"
              style={{ backgroundImage: `url(/${img})` }}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}