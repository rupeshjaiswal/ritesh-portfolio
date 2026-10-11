
import {
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaWordpress,
  FaTiktok,
  FaArrowRight,
  FaExternalLinkAlt,
} from "react-icons/fa";

import { SiCanva } from "react-icons/si";

// Social icons displayed in the call-to-action banner.
const socialPlatforms = [
  { name: "Instagram", Icon: FaInstagram, color: "text-pink-400" },
  { name: "YouTube", Icon: FaYoutube, color: "text-red-400" },
  { name: "WordPress", Icon: FaWordpress, color: "text-blue-300" },
  { name: "TikTok", Icon: FaTiktok, color: "text-white" },
  { name: "Canva", Icon: SiCanva, color: "text-cyan-300" },
];

// Contact details and links. Replace placeholders with your real details.
const contactItems = [
  {
    title: "Email",
    value: "yourmail@gmail.com",
    href: "mailto:yourmail@gmail.com",
    Icon: FaEnvelope,
    iconColor: "text-purple-400",
    iconBg: "from-purple-500/20 to-fuchsia-500/10",
    hoverColor: "hover:border-purple-400/50",
    isExternal: false,
  },
  {
    title: "WhatsApp",
    value: "+977 XXXXXXXX",
    href: "https://wa.me/977XXXXXXXXX",
    Icon: FaWhatsapp,
    iconColor: "text-emerald-400",
    iconBg: "from-emerald-500/20 to-green-500/10",
    hoverColor: "hover:border-emerald-400/50",
    isExternal: true,
  },
  {
    title: "Instagram",
    value: "@yourusername",
    href: "https://instagram.com/yourusername",
    Icon: FaInstagram,
    iconColor: "text-pink-400",
    iconBg: "from-pink-500/20 to-purple-500/10",
    hoverColor: "hover:border-pink-400/50",
    isExternal: true,
  },
  {
    title: "Facebook",
    value: "Ritesh Jaiswal",
    href: "https://facebook.com/yourprofile",
    Icon: FaFacebook,
    iconColor: "text-blue-400",
    iconBg: "from-blue-500/20 to-cyan-500/10",
    hoverColor: "hover:border-blue-400/50",
    isExternal: true,
  },
];

function Contact() {
  return (
    <section
      id="contact"
      className="relative isolate scroll-mt-24 overflow-hidden bg-[#050816] px-6 pt-4 pb-12 sm:pt-6 sm:pb-16 lg:pt-8 lg:pb-20"
    >
      {/* Soft background glows match the portfolio theme. */}
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
        <div className="contact-banner group/banner relative mb-8 overflow-hidden rounded-3xl border border-purple-500/25 bg-gradient-to-br from-[#261442] via-[#11152a] to-[#0b1020] p-6 shadow-xl shadow-purple-950/10 transition-all duration-500 hover:border-purple-400/40 sm:p-8 lg:p-9">

          {/* Decorative banner glow */}
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

            {/* Call-to-action text */}
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

            {/* Email project inquiry button */}
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

            {/* Decorative target */}
            <div
              className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-full border border-purple-400/15 bg-purple-500/10 text-4xl transition-transform duration-500 group-hover/banner:rotate-6 sm:flex"
              aria-hidden="true"
            >
              🎯
            </div>
          </div>
        </div>

        {/* ================= CONTACT INFORMATION ================= */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          {contactItems.map((contact, index) => {
            const Icon = contact.Icon;

            return (
              <a
                key={contact.title}
                href={contact.href}
                target={contact.isExternal ? "_blank" : undefined}
                rel={contact.isExternal ? "noopener noreferrer" : undefined}
                className={`contact-card group/card relative flex min-w-0 items-center gap-4 overflow-hidden rounded-2xl border border-white/[0.09] bg-gradient-to-br from-[#111525] to-[#0b1020] p-5 shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-6 ${contact.hoverColor}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Subtle hover glow */}
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-purple-500/[0.04] blur-3xl transition-all duration-500 group-hover/card:bg-purple-500/[0.13]"
                  aria-hidden="true"
                />

                {/* Contact method icon */}
                <div
                  className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-gradient-to-br ${contact.iconBg} transition-transform duration-300 group-hover/card:scale-110`}
                >
                  <Icon
                    className={`text-2xl ${contact.iconColor}`}
                    aria-hidden="true"
                  />
                </div>

                {/* Contact label and detail */}
                <div className="relative z-10 min-w-0 flex-1">
                  <h3 className="font-bold text-white transition-colors duration-300 group-hover/card:text-purple-200">
                    {contact.title}
                  </h3>

                  <p className="mt-1 break-words text-sm text-slate-400 sm:text-base">
                    {contact.value}
                  </p>
                </div>

                {/* External-link indicator */}
                <FaExternalLinkAlt
                  className="relative z-10 shrink-0 text-xs text-slate-600 transition-all duration-300 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5 group-hover/card:text-purple-300"
                  aria-hidden="true"
                />

                {/* Gradient underline */}
                <div
                  className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-500 group-hover/card:w-full"
                  aria-hidden="true"
                />
              </a>
            );
          })}
        </div>

      </div>

      {/* Entrance animations and accessibility support */}
      <style>{`
        .contact-banner {
          animation: contactBannerReveal 650ms ease-out both;
        }

        .contact-card {
          opacity: 0;
          animation: contactCardReveal 600ms
            cubic-bezier(0.22, 1, 0.36, 1) both;
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

        @keyframes contactCardReveal {
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

        @media (prefers-reduced-motion: reduce) {
          .contact-banner,
          .contact-card,
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
