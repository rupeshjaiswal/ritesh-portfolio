
import {
  FaInstagram,
  FaYoutube,
  FaWordpress,
  FaTiktok,
  FaArrowRight,
} from "react-icons/fa";

import { SiCanva } from "react-icons/si";

// Social platforms displayed in the project banner.
const socialPlatforms = [
  { name: "Instagram", Icon: FaInstagram, color: "text-pink-400" },
  { name: "YouTube", Icon: FaYoutube, color: "text-red-400" },
  { name: "WordPress", Icon: FaWordpress, color: "text-blue-300" },
  { name: "TikTok", Icon: FaTiktok, color: "text-white" },
  { name: "Canva", Icon: SiCanva, color: "text-cyan-300" },
];

function Contact() {
  return (
    <section
      id="contact"
      className="relative isolate scroll-mt-24 overflow-hidden bg-[#050816] px-6 pt-2 pb-8 sm:pt-2 sm:pb-10 lg:pt-4 lg:pb-12"
    >
      {/* Soft background lighting matches the portfolio theme. */}
      <div
        className="pointer-events-none absolute -left-40 top-16 -z-10 h-80 w-80 rounded-full bg-purple-600/[0.08] blur-[110px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-80 w-80 rounded-full bg-blue-600/[0.08] blur-[110px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl">

        {/* ================= PROJECT CTA BANNER ================= */}
        <div className="contact-banner group/banner relative overflow-hidden rounded-3xl border border-purple-500/25 bg-gradient-to-br from-[#261442] via-[#11152a] to-[#0b1020] p-6 shadow-xl shadow-purple-950/10 transition-all duration-500 hover:border-purple-400/40 sm:p-8 lg:p-9">

          {/* Decorative glow that brightens on hover. */}
          <div
            className="pointer-events-none absolute -right-12 -top-24 h-64 w-64 rounded-full bg-purple-500/15 blur-[80px] transition-colors duration-500 group-hover/banner:bg-purple-500/25"
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col items-center gap-7 lg:flex-row lg:justify-between lg:gap-8">

            {/* Social platform icons */}
            <div className="flex shrink-0 flex-wrap justify-center gap-2.5 sm:gap-3">
              {socialPlatforms.map(({ name, Icon, color }) => (
                <div
                  key={name}
                  title={name}
                  className="social-tile flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.06] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-purple-400/40 hover:bg-purple-500/15 sm:h-12 sm:w-12"
                >
                  <Icon
                    className={`text-xl ${color}`}
                    aria-hidden="true"
                  />
                </div>
              ))}
            </div>

            {/* Main call-to-action heading and description */}
            <div className="min-w-0 flex-1 text-center lg:text-left">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-purple-300">
                Let's Create Something Great
              </p>

              <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl">
                Ready to Grow Your{" "}
                <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
                  Brand?
                </span>
              </h2>

              <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-300 sm:text-base lg:mx-0">
                Let's work together to take your brand to the next
                level with stunning designs and powerful strategies.
              </p>
            </div>

            {/* Start a Project button */}
            <a
              href="mailto:yourmail@gmail.com?subject=Project%20Inquiry"
              className="group/cta inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 px-6 py-3.5 font-bold text-white shadow-lg shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-300 focus-visible:outline-offset-4 sm:px-7 sm:py-4"
            >
              Start a Project

              <FaArrowRight
                className="transition-transform duration-300 group-hover/cta:translate-x-1"
                aria-hidden="true"
              />
            </a>

            {/* Decorative target icon */}
            <div
              className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-full border border-purple-400/15 bg-purple-500/10 text-4xl transition-transform duration-500 group-hover/banner:rotate-6 sm:flex"
              aria-hidden="true"
            >
              🎯
            </div>

          </div>
        </div>
      </div>

      {/* Entrance animations and accessibility support */}
      <style>{`
        .contact-banner {
          animation: contactBannerReveal 650ms ease-out both;
        }

        .social-tile {
          animation: socialTileFloat 4s ease-in-out infinite;
        }

        .social-tile:nth-child(2) {
          animation-delay: 0.2s;
        }

        .social-tile:nth-child(3) {
          animation-delay: 0.4s;
        }

        .social-tile:nth-child(4) {
          animation-delay: 0.6s;
        }

        .social-tile:nth-child(5) {
          animation-delay: 0.8s;
        }

        @keyframes contactBannerReveal {
          from {
            opacity: 0;
            translate: 0 16px;
          }
          to {
            opacity: 1;
            translate: 0 0;
          }
        }

        @keyframes socialTileFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }

        /* Respect reduced-motion preferences. */
        @media (prefers-reduced-motion: reduce) {
          .contact-banner,
          .social-tile {
            opacity: 1;
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Contact;
