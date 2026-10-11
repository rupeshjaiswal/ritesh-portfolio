
import {
  FaStar,
  FaClock,
  FaUsers,
  FaHandshake,
  FaArrowRight,
} from "react-icons/fa";

// Keep content separate from the UI for easier maintenance.
const reasons = [
  {
    number: "01",
    category: "QUALITY & TRUST",
    title: "4.9 Fiverr Rating",
    desc: "Trusted by hundreds of satisfied clients worldwide.",
    Icon: FaStar,
    iconColor: "text-amber-300",
    iconBg: "from-amber-500/20 to-orange-500/10",
  },
  {
    number: "02",
    category: "CLIENT SATISFACTION",
    title: "569+ Reviews",
    desc: "A proven track record of delivering quality work.",
    Icon: FaUsers,
    iconColor: "text-blue-300",
    iconBg: "from-blue-500/20 to-cyan-500/10",
  },
  {
    number: "03",
    category: "COMMUNICATION",
    title: "Fast Response",
    desc: "Usually responds within 1 hour.",
    Icon: FaClock,
    iconColor: "text-violet-300",
    iconBg: "from-violet-500/20 to-purple-500/10",
  },
  {
    number: "04",
    category: "PARTNERSHIP",
    title: "Long-Term Support",
    desc: "Focused on building long-term client relationships.",
    Icon: FaHandshake,
    iconColor: "text-emerald-300",
    iconBg: "from-emerald-500/20 to-teal-500/10",
  },
];

function WhyChooseMe() {
  return (
    <section
      id="why-choose-me"
      className="relative isolate overflow-hidden bg-[#050816] px-6 pt-6 pb-6 sm:pt-8"
    >
      {/* Soft ambient background glows */}
      <div
        className="pointer-events-none absolute -left-40 top-16 -z-10 h-80 w-80 rounded-full bg-purple-600/[0.08] blur-[110px]"
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
            <span
              className="h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_12px_rgba(192,132,252,0.8)]"
              aria-hidden="true"
            />
            The Difference
          </span>

          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
            Helping businesses grow through creativity, strategy and consistency.
          </p>

          {/* Decorative gradient divider */}
          <div
            className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
            aria-hidden="true"
          />
        </header>

        {/* Responsive grid: one, two or four cards per row */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {reasons.map((reason, index) => {
            const Icon = reason.Icon;

            return (
              <article
                key={reason.number}
                className="reason-card group relative flex min-h-[220px] flex-col overflow-hidden rounded-2xl border border-white/[0.09] bg-gradient-to-br from-[#151827] to-[#0c1020] p-5 shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-2 hover:border-purple-400/40 hover:shadow-xl hover:shadow-purple-500/10 sm:p-6"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                {/* Decorative glow appears on hover */}
                <div
                  className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-purple-500/[0.04] blur-3xl transition-all duration-500 group-hover:scale-150 group-hover:bg-purple-500/[0.15]"
                  aria-hidden="true"
                />

                {/* Icon and numbered label */}
                <div className="relative z-10 flex items-center justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] bg-gradient-to-br ${reason.iconBg} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                  >
                    <Icon
                      className={`text-xl ${reason.iconColor}`}
                      aria-hidden="true"
                    />
                  </div>

                  <span className="font-mono text-xs tracking-widest text-white/25 transition-colors duration-300 group-hover:text-purple-300/80">
                    {reason.number}
                  </span>
                </div>

                {/* Short category label */}
                <p className="relative z-10 mt-5 text-[10px] font-bold tracking-[0.14em] text-purple-300/80">
                  {reason.category}
                </p>

                {/* Main benefit */}
                <h3 className="relative z-10 mt-2 text-lg font-bold leading-snug text-white transition-colors duration-300 group-hover:text-purple-200">
                  {reason.title}
                </h3>

                {/* Supporting description */}
                <p className="relative z-10 mt-2 text-sm leading-6 text-slate-400 transition-colors duration-300 group-hover:text-slate-300">
                  {reason.desc}
                </p>

                {/* Small decorative arrow */}
                <div
                  className="relative z-10 mt-auto flex justify-end pt-3 text-sm text-purple-400/50 transition-all duration-300 group-hover:translate-x-1 group-hover:text-purple-300"
                  aria-hidden="true"
                >
                  <FaArrowRight />
                </div>

                {/* Bottom accent line animates on hover */}
                <div
                  className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-purple-500 via-fuchsia-400 to-blue-500 transition-all duration-500 group-hover:w-full"
                  aria-hidden="true"
                />
              </article>
            );
          })}
        </div>
      </div>

      {/* Staggered entrance animation */}
      <style>{`
        .reason-card {
          opacity: 0;
          animation: reasonCardReveal 600ms
            cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        @keyframes reasonCardReveal {
          from {
            opacity: 0;
            translate: 0 18px;
          }
          to {
            opacity: 1;
            translate: 0 0;
          }
        }

        /* Respect reduced-motion preferences */
        @media (prefers-reduced-motion: reduce) {
          .reason-card {
            opacity: 1;
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}

export default WhyChooseMe;
