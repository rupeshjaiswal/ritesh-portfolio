
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  FaArrowRight,
  FaExternalLinkAlt,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaLayerGroup,
  FaTools,
} from "react-icons/fa";

// Portfolio categories used by the filter buttons.
const categories = [
  "All",
  "Social Media Posts",
  "Banners",
  "Canva Designs",
  "WordPress Websites",
  "Branding",
];

// Project information. Edit these details to match your actual work.
const projects = [
  {
    id: 1,
    image: "/portfolio1.png",
    category: "Social Media Posts",
    title: "Food Promotion Design",
    description:
      "A bold promotional design featuring product-focused imagery, strong headlines, and an attention-grabbing offer.",
    services: [
      "Social media post design",
      "Promotional graphics",
      "Visual content creation",
    ],
    tools: ["Canva", "Graphic Design"],
  },
  {
    id: 2,
    image: "/portfolio2.png",
    category: "Banners",
    title: "Digital Marketing Banner",
    description:
      "A professional marketing banner concept with clear messaging, strong typography, and a business-focused layout.",
    services: [
      "Banner design",
      "Marketing visuals",
      "Typography and layout",
    ],
    tools: ["Canva", "Banner Design"],
  },
  {
    id: 3,
    image: "/portfolio3.png",
    category: "Canva Designs",
    title: "Fashion Sale Creative",
    description:
      "A vibrant fashion promotion featuring bold headlines, an offer-focused layout, and a bright visual style.",
    services: [
      "Promotional design",
      "Campaign graphics",
      "Social media creative",
    ],
    tools: ["Canva", "Visual Design"],
  },
  {
    id: 4,
    image: "/portfolio4.png",
    category: "WordPress Websites",
    title: "WordPress Website Design",
    description:
      "A website design project focused on visual presentation, brand identity, and a modern user experience.",
    services: [
      "Website design",
      "Visual layout",
      "Brand presentation",
    ],
    tools: ["WordPress", "Web Design"],
  },
  {
    id: 5,
    image: "/portfolio5.png",
    category: "Branding",
    title: "Healthy Food Creative",
    description:
      "A fresh food promotional design featuring vibrant colors, product imagery, and clear marketing messages.",
    services: [
      "Brand visuals",
      "Promotional graphics",
      "Creative design",
    ],
    tools: ["Canva", "Brand Design"],
  },
];

// Find the previous or next project, wrapping at either end.
function getAdjacentProject(currentProject, direction) {
  const currentIndex = projects.findIndex(
    (project) => project.id === currentProject.id
  );

  const nextIndex =
    (currentIndex + direction + projects.length) % projects.length;

  return projects[nextIndex];
}

function Portfolio() {
  const [active, setActive] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  // Filter projects by the selected category.
  const filteredProjects =
    active === "All"
      ? projects
      : projects.filter((project) => project.category === active);

  // Open the selected project's details window.
  const openProject = (project) => {
    setSelectedProject(project);
  };

  // Close the details window.
  const closeProject = () => {
    setSelectedProject(null);
  };

  // Lock background scrolling and support keyboard navigation.
  useEffect(() => {
    if (!selectedProject) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }

      if (event.key === "ArrowLeft") {
        setSelectedProject((current) =>
          current ? getAdjacentProject(current, -1) : current
        );
      }

      if (event.key === "ArrowRight") {
        setSelectedProject((current) =>
          current ? getAdjacentProject(current, 1) : current
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  // Show three other projects as selectable gallery thumbnails.
  const galleryPreviews = selectedProject
    ? projects
        .filter((project) => project.id !== selectedProject.id)
        .slice(0, 3)
    : [];

  return (
    <section
      id="portfolio"
      className="relative isolate scroll-mt-24 overflow-hidden bg-[#050816] px-6 py-12 sm:py-16 lg:py-20"
    >
      {/* Subtle background lighting */}
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

          <div
            className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
            aria-hidden="true"
          />
        </header>

        {/* Interactive category filters */}
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

        {/* Responsive project cards */}
        <div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
          aria-live="polite"
        >
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className="portfolio-card group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#141725] to-[#0b1020] shadow-lg shadow-black/10 transition-all duration-500 hover:-translate-y-2 hover:border-purple-400/50 hover:shadow-2xl hover:shadow-purple-500/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Open project details by clicking the image. */}
              <button
                type="button"
                onClick={() => openProject(project)}
                aria-label={`View details for ${project.title}`}
                className="relative block aspect-[4/3] w-full overflow-hidden bg-[#0b1020] text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-400 focus-visible:outline-offset-[-3px]"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                />

                {/* View Project hover overlay */}
                <span className="absolute inset-0 flex items-center justify-center bg-[#050816]/0 transition-colors duration-300 group-hover:bg-[#050816]/45">
                  <span className="flex translate-y-3 items-center gap-2 rounded-full border border-white/20 bg-[#0b1020]/95 px-4 py-2.5 text-sm font-semibold text-white opacity-0 shadow-xl transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    View Project
                    <FaExternalLinkAlt className="text-xs" />
                  </span>
                </span>
              </button>

              {/* Project category and number */}
              <div className="relative flex items-center justify-between gap-3 border-t border-white/[0.07] px-5 py-4">
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-purple-300/80">
                    Project {String(project.id).padStart(2, "0")}
                  </p>

                  <h3 className="mt-1 text-base font-semibold text-white transition-colors duration-300 group-hover:text-purple-200">
                    {project.category}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => openProject(project)}
                  aria-label={`Open ${project.title}`}
                  className="shrink-0 rounded-lg p-2 text-purple-400 transition-all duration-300 hover:translate-x-1 hover:bg-purple-500/10 hover:text-purple-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-400"
                >
                  <FaArrowRight aria-hidden="true" />
                </button>
              </div>

              {/* Animated bottom accent */}
              <div
                className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-purple-500 via-fuchsia-400 to-blue-500 transition-all duration-500 group-hover:w-full"
                aria-hidden="true"
              />
            </article>
          ))}
        </div>

        {/* Empty state for a category with no projects */}
        {filteredProjects.length === 0 && (
          <p className="py-12 text-center text-slate-400">
            No projects available in this category yet.
          </p>
        )}

        {/* Link to the full Fiverr portfolio */}
        <div className="mt-10 flex justify-center sm:mt-12">
          <a
            href="https://www.fiverr.com/riteshjaiswa858"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-[#111827] px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/50 hover:bg-purple-500/10 hover:shadow-lg hover:shadow-purple-500/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-400 focus-visible:outline-offset-4"
          >
            View More Work
            <FaArrowRight
              className="transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>

      {/* ================= PROJECT DETAILS MODAL ================= */}
      {selectedProject &&
        createPortal(
          <div
            className="project-modal fixed inset-0 z-[9999] flex items-center justify-center bg-[#02030a]/90 p-3 backdrop-blur-md sm:p-6"
            onClick={(event) => {
              // Close the modal only when the backdrop is clicked.
              if (event.target === event.currentTarget) {
                closeProject();
              }
            }}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
              className="relative flex max-h-[94dvh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-purple-400/25 bg-[#0b1020] shadow-2xl shadow-purple-950/30 sm:rounded-3xl"
            >
              {/* Modal header */}
              <div className="flex shrink-0 items-center justify-between gap-4 border-b border-white/[0.08] px-4 py-3 sm:px-6 sm:py-4">
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-purple-300 sm:text-xs">
                    Portfolio / Project Details
                  </p>

                  <p className="mt-1 truncate text-sm font-semibold text-white sm:text-base">
                    {selectedProject.title}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={closeProject}
                  aria-label="Close project details"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition-all duration-300 hover:border-purple-400/40 hover:bg-purple-500/15 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-400"
                >
                  <FaTimes aria-hidden="true" />
                </button>
              </div>

              {/* Gallery on the left; details on the right */}
              <div className="grid min-h-0 flex-1 grid-cols-1 overflow-y-auto lg:grid-cols-[1.1fr_0.9fr] lg:overflow-hidden">
                {/* LEFT: Image gallery */}
                <div className="min-w-0 border-b border-white/[0.08] p-4 sm:p-6 lg:overflow-y-auto lg:border-b-0 lg:border-r">
                  {/* Main project image */}
                  <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#070a16]">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="h-full w-full object-contain"
                    />

                    {/* Previous project image */}
                    <button
                      type="button"
                      onClick={() =>
                        setSelectedProject((current) =>
                          current
                            ? getAdjacentProject(current, -1)
                            : current
                        )
                      }
                      aria-label="Previous project"
                      className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#050816]/85 text-white shadow-lg transition-all hover:border-purple-400 hover:bg-purple-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-400"
                    >
                      <FaChevronLeft aria-hidden="true" />
                    </button>

                    {/* Next project image */}
                    <button
                      type="button"
                      onClick={() =>
                        setSelectedProject((current) =>
                          current
                            ? getAdjacentProject(current, 1)
                            : current
                        )
                      }
                      aria-label="Next project"
                      className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#050816]/85 text-white shadow-lg transition-all hover:border-purple-400 hover:bg-purple-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-400"
                    >
                      <FaChevronRight aria-hidden="true" />
                    </button>
                  </div>

                  {/* Other portfolio projects as selectable thumbnails */}
                  <div className="mt-5">
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <h3 className="text-sm font-semibold text-white">
                        Explore Other Projects
                      </h3>

                      <span className="text-xs text-slate-500">
                        {projects.length} projects
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      {galleryPreviews.map((project) => (
                        <button
                          key={project.id}
                          type="button"
                          onClick={() => setSelectedProject(project)}
                          aria-label={`View ${project.title}`}
                          className="group/thumb overflow-hidden rounded-xl border border-white/10 bg-[#070a16] text-left transition-all duration-300 hover:border-purple-400/60 hover:shadow-lg hover:shadow-purple-500/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-400"
                        >
                          <div className="aspect-[4/3] overflow-hidden">
                            <img
                              src={project.image}
                              alt={project.title}
                              loading="lazy"
                              className="h-full w-full object-contain transition-transform duration-300 group-hover/thumb:scale-105"
                            />
                          </div>

                          <span className="block truncate px-2 py-2 text-[10px] text-slate-300 sm:text-xs">
                            {project.category}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <p className="mt-4 text-xs leading-5 text-slate-500">
                    Select another project preview to explore its details.
                  </p>
                </div>

                {/* RIGHT: Project information */}
                <div className="flex min-w-0 flex-col p-5 sm:p-7 lg:overflow-y-auto lg:p-8">
                  <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/[0.08] px-3 py-1.5 text-xs font-semibold text-purple-300">
                    <FaLayerGroup aria-hidden="true" />
                    {selectedProject.category}
                  </span>

                  <h2
                    id="project-modal-title"
                    className="text-2xl font-extrabold leading-tight text-white sm:text-3xl"
                  >
                    {selectedProject.title}
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
                    {selectedProject.description}
                  </p>

                  <div className="my-6 h-px w-full bg-white/[0.08]" />

                  {/* Project services */}
                  <div>
                    <h3 className="flex items-center gap-2 text-base font-bold text-white">
                      <FaLayerGroup
                        className="text-purple-400"
                        aria-hidden="true"
                      />
                      Project Focus
                    </h3>

                    <ul className="mt-4 space-y-3">
                      {selectedProject.services.map((service) => (
                        <li
                          key={service}
                          className="flex items-center gap-3 text-sm text-slate-300"
                        >
                          <span
                            className="h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400"
                            aria-hidden="true"
                          />
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tools and skills */}
                  <div className="mt-7">
                    <h3 className="flex items-center gap-2 text-base font-bold text-white">
                      <FaTools
                        className="text-purple-400"
                        aria-hidden="true"
                      />
                      Tools & Skills
                    </h3>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {selectedProject.tools.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-slate-300"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contact call to action */}
                  <div className="mt-8 border-t border-white/[0.08] pt-6 lg:mt-auto lg:pt-8">
                    <p className="mb-4 text-sm leading-6 text-slate-400">
                      Have a similar project in mind? Let's discuss your ideas.
                    </p>

                    <a
                      href="#contact"
                      onClick={closeProject}
                      className="group/cta flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 px-5 py-3.5 font-bold text-white shadow-lg shadow-purple-500/15 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-purple-500/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-300 focus-visible:outline-offset-4"
                    >
                      Discuss a Project
                      <FaArrowRight
                        className="transition-transform duration-300 group-hover/cta:translate-x-1"
                        aria-hidden="true"
                      />
                    </a>

                    {/* Previous/next navigation */}
                    <div className="mt-4 flex items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={() =>
                          setSelectedProject((current) =>
                            current
                              ? getAdjacentProject(current, -1)
                              : current
                          )
                        }
                        className="inline-flex items-center gap-2 rounded-lg px-2 py-2 text-xs font-medium text-slate-400 transition-colors hover:text-purple-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-400"
                      >
                        <FaChevronLeft aria-hidden="true" />
                        Previous
                      </button>

                      <span className="text-xs text-slate-500">
                        {String(selectedProject.id).padStart(2, "0")} /{" "}
                        {String(projects.length).padStart(2, "0")}
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          setSelectedProject((current) =>
                            current
                              ? getAdjacentProject(current, 1)
                              : current
                          )
                        }
                        className="inline-flex items-center gap-2 rounded-lg px-2 py-2 text-xs font-medium text-slate-400 transition-colors hover:text-purple-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-400"
                      >
                        Next
                        <FaChevronRight aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}

      {/* Card entrance animation and reduced-motion support */}
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
