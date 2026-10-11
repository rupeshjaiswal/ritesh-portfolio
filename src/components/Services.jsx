
import {
  FaInstagram,
  FaWordpress,
  FaFacebook,
  FaBullhorn,
  FaImages,
  FaArrowRight,
} from "react-icons/fa";
import { SiCanva } from "react-icons/si";

// Service content kept separate for easier maintenance.
const services = [
  {
    number: "01",
    category: "SOCIAL MEDIA",
    title: "Social Media Management",
    desc: "Manage Instagram, Facebook, TikTok and grow your online presence.",
    Icon: FaInstagram,
    iconColor: "text-pink-400",
    iconBg: "from-pink-500/20 to-purple-500/20",
  },
  {
    number: "02",
    category: "CREATIVE DESIGN",
    title: "Canva Design",
    desc: "Professional posts, banners, flyers and creative designs.",
    Icon: SiCanva,
    iconColor: "text-cyan-300",
    iconBg: "from-cyan-500/20 to-blue-500/20",
  },
  {
    number: "03",
    category: "WEB DEVELOPMENT",
    title: "WordPress Websites",
    desc: "Modern responsive websites optimized for business growth.",
    Icon: FaWordpress,
    iconColor: "text-blue-300",
    iconBg: "from-blue-500/20 to-purple-500/20",
  },
  {
    number: "04",
    category: "PAID ADVERTISING",
    title: "Facebook Marketing",
    desc: "Targeted campaigns to increase engagement and reach.",
    Icon: FaFacebook,
    iconColor: "text-blue-300",
    iconBg: "from-blue-500/20 to-indigo-500/20",
  },
  {
    number: "05",
    category: "BRAND GROWTH",
    title: "Digital Marketing",
    desc: "Complete digital marketing strategies for your brand.",
    Icon: FaBullhorn,
    iconColor: "text-violet-300",
    iconBg: "from-violet-500/20 to-fuchsia-500/20",
  },
  {
    number: "06",
    category: "VISUAL CONTENT",
    title: "Posts & Banners",
    desc: "Eye-catching social media graphics and promotional banners.",
    Icon: FaImages,
    iconColor: "text-fuchsia-300",
    iconBg: "from-fuchsia-500/20 to-pink-500/20",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="relative isolate scroll-mt-24 overflow-hidden bg-[#050816] px-6 pt-16 pb-6 sm:pt-20 sm:pb-8"
    >
      {/* Subtle background lighting */}
      <div
        className="pointer-events-none absolute -left-40 top-20 -z-10 h-80 w-80 rounded-full bg-purple-600/10 blur-[110px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-40 bottom-10 -z-10 h-80 w-80 rounded-full bg-blue-600/10 blur-[110px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <header className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/[0.08] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-purple-300">
            <span
              className="h-2 w-2 rounded-full bg-purple-400"
              aria-hidden="true"
            />
            What I Do
          </span>

          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Services{" "}
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
              I Provide
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-400">
            Helping brands grow through design, content and marketing.
          </p>

          <div
            className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
            aria-hidden="true"
          />
        </header>

        {/* Compact, responsive service cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.Icon;

            return (
              <article
                key={service.number}
                className="service-card group relative flex min-h-[245px] flex-col overflow-hidden rounded-2xl border border-white/[0.09] bg-gradient-to-br from-[#141725] to-[#0d1020] p-5 shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1.5 hover:border-purple-400/40 hover:shadow-xl hover:shadow-purple-500/10 sm:p-6"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Hover glow */}
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-purple-500/[0.05] blur-3xl transition-all duration-500 group-hover:scale-150 group-hover:bg-purple-500/[0.15]"
                  aria-hidden="true"
                />

                {/* Bottom gradient accent */}
                <div
                  className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-purple-500 via-fuchsia-400 to-blue-500 transition-all duration-500 group-hover:w-full"
                  aria-hidden="true"
                />

                {/* Icon and service number */}
                <div className="relative z-10 flex items-center justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] bg-gradient-to-br ${service.iconBg} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                  >
                    <Icon
                      className={`text-xl ${service.iconColor}`}
                      aria-hidden="true"
                    />
                  </div>

                  <span className="font-mono text-xs tracking-widest text-white/25 transition-colors duration-300 group-hover:text-purple-300/80">
                    {service.number}
                  </span>
                </div>

                {/* Category label */}
                <p className="relative z-10 mt-5 text-[10px] font-bold tracking-[0.16em] text-purple-300/80">
                  {service.category}
                </p>

                {/* Service title */}
                <h3 className="relative z-10 mt-2 text-lg font-bold leading-snug text-white transition-colors duration-300 group-hover:text-purple-200">
                  {service.title}
                </h3>

                {/* Service description */}
                <p className="relative z-10 mt-2 text-sm leading-6 text-slate-400 transition-colors duration-300 group-hover:text-slate-300">
                  {service.desc}
                </p>

                {/* Decorative arrow */}
                <div
                  className="relative z-10 mt-auto flex justify-end pt-3 text-sm text-purple-400/50 transition-all duration-300 group-hover:translate-x-1 group-hover:text-purple-300"
                  aria-hidden="true"
                >
                  <FaArrowRight />
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Staggered card entrance animation */}
      <style>{`
        .service-card {
          opacity: 0;
          animation: serviceCardReveal 600ms
            cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        @keyframes serviceCardReveal {
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
          .service-card {
            opacity: 1;
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Services;
