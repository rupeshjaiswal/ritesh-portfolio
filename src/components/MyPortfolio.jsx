import { useState } from "react";

function Portfolio() {
  const categories = [
    "All",
    "Social Media Posts",
    "Banners",
    "Canva Designs",
    "WordPress Websites",
    "Branding",
  ];

 const projects = [
  {
    image: "/portfolio1.png",
    category: "Social Media Posts",
  },
  {
    image: "/portfolio2.png",
    category: "Banners",
  },
  {
    image: "/portfolio3.png",
    category: "Canva Designs",
  },
  {
    image: "/portfolio4.png",
    category: "WordPress Websites",
  },
  {
    image: "/portfolio5.png",
    category: "Branding",
  },
];

  const [active, setActive] = useState("All");

  const filteredProjects =
  active === "All"
    ? projects
    : projects.filter(
        (project) => project.category === active
      );

  return (
    <section 
      id="portfolio"
      className="py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-10">
          <p className="text-purple-400 font-semibold uppercase">
            Recent Work & Portfolio
          </p>

          <h2 className="text-4xl font-bold mt-3">
            My Creative Projects
          </h2>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">

          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                active === item
                  ? "bg-gradient-to-r from-purple-600 to-blue-500 shadow-[0_0_20px_rgba(168,85,247,0.5)]"
                  : "bg-[#0b1020] border border-white/10"
              }`}
            >
              {item}
            </button>
          ))}

        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5 transition-all duration-500">

          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-white/10 hover:border-purple-500 hover:-translate-y-2 transition-all duration-500 group"
            >
              <img
                src={project.image}
                alt=""
                className="w-full h-64 object-cover group-hover:scale-110 transition-all duration-500"
              />
            </div>
          ))}

        </div>

        {/* Button */}
        <div className="flex justify-center mt-10">
          <button className="px-10 py-4 rounded-xl bg-[#111827] border border-white/10 hover:border-purple-500 transition-all duration-300">
            View More Work →
          </button>
        </div>

      </div>
    </section>
  );
}

export default Portfolio;