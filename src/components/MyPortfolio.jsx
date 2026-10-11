
import { useState } from "react";
import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";

// Available project filters.
const categories = [
  "All",
  "Social Media Posts",
  "Banners",
  "Canva Designs",
  "WordPress Websites",
  "Branding",
];

// Project data: keep image paths and categories easy to maintain.
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

function Portfolio() {
  const [active, setActive] = useState("All");

  // Only display projects matching the selected category.
  const filteredProjects =
    active === "All"
      ? projects
      : projects.filter((project) => project.category === active);

  return (
    <section
      id="portfolio"
      className="relative isolate scroll-mt-24 overflow-hidden bg-[#050816] px-6 py-16 sm:py-20 lg:py-24"
    >
      {/* Soft background lighting for visual depth. */}
      <div
        className="pointer-events-none absolute -left-40 top-20 -z-10 h-80 w-80 rounded-full bg-purple-600/[0.08] blur-[110px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-40 bottom-10 -z-10 h-80 w-80 rounded-full bg-blue-600/[0.08] blur-[110px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl">
        {/* Portfolio heading */}
        <header className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/[0.08] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-purple-300">
            <span
              className="h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_12px_rgba(192,132,252,0.8)]"
              aria-hidden="true"
            />
            Recent Work & Portfolio
          </span>

          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            My{" "}
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
              Creative Projects
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-400">
            Explore my creative work in social media, graphic design,
            branding and website design.
          </p>

          {/* Decorative heading accent */}
          <div
            className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
            aria-hidden="true"
          />
        </header>

        {/* Filter buttons */}
        <div
          className="mb-10 flex flex-wrap justify-center gap-2.5 sm:gap-3"
          aria-label="Filter portfolio projects"
        >
          {categories.map((category) => {
            const isActive = active === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                aria-pressed={isActive}
                className={`rounded-xl border px-4 py-2.5 text-sm font-medium transition-all duration-300 sm:px-5 sm:py-3 ${
                  isActive
                    ? "border-transparent bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg shadow-purple-500/25"
                    : "border-white/10 bg-[#0b1020] text-slate-300 hover:border-purple-400/50 hover:bg-purple-500/10 hover:text-white"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Project cards: larger previews on desktop, responsive on mobile. */}
        <div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
          aria-live="polite"
        >
          {filteredProjects.map((project, index) => (
            <article
              key={project.image}
              className="portfolio-card group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#141725] to-[#0b1020] shadow-lg shadow-black/10 transition-all duration-500 hover:-translate-y-2 hover:border-purple-400/50 hover:shadow-2xl hover:shadow-purple-500/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Open the complete project image in a new tab. */}
              <a
                href={project.image}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View full image for ${project.category}`}
                className="relative block overflow-hidden bg-[#0b1020] focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-400 focus-visible:outline-offset-[-3px]"
              >
                {/* Consistent landscape frame without cropping the artwork. */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={`Portfolio project: ${project.category}`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                  />

                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 flex items-center justify-center bg-[#050816]/0 transition-colors duration-500 group-hover:bg-[#050816]/35">
                    <span className="flex translate-y-3 items-center gap-2 rounded-full border border-white/20 bg-[#0b1020]/90 px-4 py-2 text-sm font-semibold text-white opacity-0 shadow-xl transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      View Project
                      <FaExternalLinkAlt className="text-xs" />
                    </span>
                  </div>
                </div>
              </a>

              {/* Project category and sequence number */}
              <div className="relative flex items-center justify-between gap-3 border-t border-white/[0.07] px-5 py-4">
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-purple-300/80">
                    Project {String(projects.indexOf(project) + 1).padStart(2, "0")}
                  </p>

                  <h3 className="mt-1 text-base font-semibold text-white transition-colors duration-300 group-hover:text-purple-200">
                    {project.category}
                  </h3>
                </div>

                <span
                  className="shrink-0 text-purple-400/60 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-purple-300"
                  aria-hidden="true"
                >
                  <FaArrowRight />
                </span>
              </div>

              {/* Animated accent at the bottom of each card */}
              <div
                className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-purple-500 via-fuchsia-400 to-blue-500 transition-all duration-500 group-hover:w-full"
                aria-hidden="true"
              />
            </article>
          ))}
        </div>

        {/* Friendly empty state if a category has no projects */}
        {filteredProjects.length === 0 && (
          <p className="py-12 text-center text-slate-400">
            No projects available in this category yet.
          </p>
        )}

        {/* Explore more work on the freelancer profile */}
        <div className="mt-10 flex justify-center sm:mt-12">
          <a
            href="https://www.fiverr.com/riteshjaiswa858"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-[#111827] px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/50 hover:bg-purple-500/10 hover:shadow-lg hover:shadow-purple-500/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-400 focus-visible:outline-offset-4"
          >
            View More Work
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* Staggered entrance animation with accessibility support */}
      <style>{`
        .portfolio-card {
          opacity: 0;
          animation: portfolioReveal 600ms
            cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        @keyframes portfolioReveal {
          from {
            opacity: 0;
            translate: 0 18px;
          }
          to {
            opacity: 1;
            translate: 0 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .portfolio-card {
            opacity: 1;
            animation: none !important;
            transition: none !important;
          }

          .portfolio-card img,
          .portfolio-card a,
          .portfolio-card span {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Portfolio;
