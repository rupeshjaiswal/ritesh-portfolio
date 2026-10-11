
import {
  FaStar,
  FaCheckCircle,
  FaExternalLinkAlt,
  FaBolt,
} from "react-icons/fa";

// Keep profile content and styling in one place for easy maintenance.
const profiles = [
  {
    id: "fiverr",
    name: "fiverr.",
    label: "FREELANCE PROFILE",
    image: "/fiverr-profile.png",
    imageAlt: "Fiverr freelancer profile preview",
    href: "https://www.fiverr.com/riteshjaiswa858",
    buttonLabel: "View on Fiverr",
    logoColor: "text-green-400",
    accent: "green",
    hoverBorder: "hover:border-green-400/50",
    features: [
      { text: "4.9 (569 Reviews)", type: "rating" },
      { text: "569+ Happy Clients", type: "success" },
      { text: "1 Hour Avg. Response Time", type: "success" },
      { text: "98% Client Satisfaction", type: "success" },
    ],
  },
  {
    id: "upwork",
    name: "upwork",
    label: "FREELANCE PROFILE",
    image: "/upwork-profile.png",
    imageAlt: "Upwork freelancer profile preview",
    href: "https://www.upwork.com/",
    buttonLabel: "View on Upwork",
    logoColor: "text-green-400",
    accent: "green",
    hoverBorder: "hover:border-green-400/50",
    progress: {
      label: "Job Success",
      value: "100%",
    },
    features: [
      { text: "Top Rated Freelancer", type: "success" },
      { text: "100% Job Success", type: "success" },
      { text: "Completed Projects", type: "success" },
    ],
  },
];

function FiverrSection() {
  return (
    <section
      id="fiverr"
      className="relative isolate overflow-hidden bg-[#050816] px-6 pt-12 pb-6 sm:pt-16"
    >
      {/* Soft background glow matches the rest of the portfolio. */}
      <div
        className="pointer-events-none absolute -left-40 top-20 -z-10 h-80 w-80 rounded-full bg-purple-600/[0.08] blur-[110px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-80 w-80 rounded-full bg-blue-600/[0.08] blur-[110px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <header className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/[0.08] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-purple-300">
            <FaBolt aria-hidden="true" />
            My Freelancer Profiles
          </span>

          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            You Can Find{" "}
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
              Me On
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-400">
            Explore my freelance profiles, work and client-focused approach.
          </p>

          {/* Decorative gradient divider */}
          <div
            className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
            aria-hidden="true"
          />
        </header>

        {/* Responsive two-column profile layout */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
          {profiles.map((profile, index) => (
            <div
              key={profile.id}
              className="profile-entrance"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <article
                className={`profile-card group relative flex h-full flex-col overflow-hidden rounded-3xl border border-purple-500/20 bg-gradient-to-br from-[#111525] via-[#0b1020] to-[#090d1a] p-5 shadow-xl shadow-black/10 transition-all duration-500 hover:-translate-y-1.5 ${profile.hoverBorder} hover:shadow-2xl sm:p-7`}
              >
                {/* Decorative corner glow */}
                <div
                  className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-purple-500/[0.05] blur-[70px] transition-all duration-500 group-hover:bg-purple-500/[0.12]"
                  aria-hidden="true"
                />

                {/* Thin top accent appears on hover */}
                <div
                  className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-to-r from-purple-500 via-fuchsia-400 to-blue-500 transition-all duration-500 group-hover:w-full"
                  aria-hidden="true"
                />

                {/* Platform identity and status */}
                <div className="relative z-10 mb-6 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="mb-1 text-[10px] font-semibold tracking-[0.2em] text-slate-500">
                      {profile.label}
                    </p>

                    <h3
                      className={`text-4xl font-extrabold tracking-tight sm:text-5xl ${profile.logoColor}`}
                    >
                      {profile.name}
                    </h3>
                  </div>

                  <span className="inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/[0.08] px-3 py-1.5 text-xs font-medium text-green-300">
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-green-400"
                      aria-hidden="true"
                    />
                    Profile
                  </span>
                </div>

                {/* Profile details and image preview */}
                <div className="relative z-10 grid grid-cols-1 items-center gap-6 md:grid-cols-[1fr_0.95fr]">
                  {/* Profile highlights */}
                  <div className="min-w-0">
                    {/* Upwork success indicator */}
                    {profile.progress && (
                      <div className="mb-6 rounded-xl border border-white/[0.06] bg-white/[0.03] p-4">
                        <div className="mb-3 flex items-center justify-between gap-3">
                          <span className="text-sm text-slate-300">
                            {profile.progress.label}
                          </span>

                          <span className="text-lg font-bold text-amber-300">
                            {profile.progress.value}
                          </span>
                        </div>

                        {/* Animated progress bar */}
                        <div
                          className="h-2 overflow-hidden rounded-full bg-white/10"
                          role="progressbar"
                          aria-label={profile.progress.label}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          aria-valuenow={100}
                        >
                          <div className="progress-fill h-full w-full origin-left rounded-full bg-gradient-to-r from-amber-400 to-yellow-300" />
                        </div>
                      </div>
                    )}

                    <ul className="space-y-4">
                      {profile.features.map((feature) => (
                        <li
                          key={feature.text}
                          className="flex items-start gap-3 text-sm leading-6 text-slate-300 sm:text-base"
                        >
                          {feature.type === "rating" ? (
                            <FaStar
                              className="mt-1 shrink-0 text-lg text-amber-400"
                              aria-hidden="true"
                            />
                          ) : (
                            <FaCheckCircle
                              className="mt-1 shrink-0 text-lg text-emerald-400"
                              aria-hidden="true"
                            />
                          )}

                          <span>{feature.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Existing profile screenshot */}
                  <div className="flex justify-center">
                    <div className="profile-image-frame w-full max-w-[280px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-1.5 shadow-lg shadow-black/20 transition-all duration-500 group-hover:border-white/20 group-hover:shadow-purple-500/10">
                      <img
                        src={profile.image}
                        alt={profile.imageAlt}
                        loading="lazy"
                        className="h-auto w-full rounded-xl object-contain transition-transform duration-500 group-hover:scale-[1.025]"
                      />
                    </div>
                  </div>
                </div>

                {/* Full-width platform action */}
                <div className="relative z-10 mt-7 border-t border-white/[0.07] pt-5">
                  <a
                    href={profile.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="profile-action group/button flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.025] px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-green-400/50 hover:bg-green-400 hover:text-[#06110a] hover:shadow-lg hover:shadow-green-500/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-400 focus-visible:outline-offset-4 sm:text-base"
                  >
                    {profile.buttonLabel}

                    <FaExternalLinkAlt
                      className="text-xs transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      {/* Staggered entrance and subtle progress animation */}
      <style>{`
        .profile-entrance {
          opacity: 0;
          animation: profileReveal 650ms
            cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        @keyframes profileReveal {
          from {
            opacity: 0;
            translate: 0 20px;
          }
          to {
            opacity: 1;
            translate: 0 0;
          }
        }

        .progress-fill {
          animation: progressReveal 1.2s ease-out both;
        }

        @keyframes progressReveal {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .profile-entrance {
            opacity: 1;
            animation: none !important;
          }

          .progress-fill {
            animation: none !important;
          }

          .profile-card,
          .profile-image-frame,
          .profile-action {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}

export default FiverrSection;
