
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative mt-0 overflow-hidden border-t border-white/10 bg-[#050816] py-5">
      {/* Subtle glow behind the footer content */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-20 w-64 -translate-x-1/2 rounded-full bg-purple-500/[0.07] blur-3xl"
        aria-hidden="true"
      />

      {/* Responsive footer layout */}
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-4 px-6 text-center md:grid-cols-[1fr_auto_1fr] md:gap-5 md:text-left">

        {/* Portfolio owner's name */}
        <a
          href="#home"
          className="justify-self-center text-xl font-bold text-purple-500 transition-colors duration-300 hover:text-purple-300 md:justify-self-start"
        >
          Ritesh Jaiswal
        </a>

        {/* Compact, animated designer credit linking to Upwork */}
        <a
          href="https://www.upwork.com/freelancers/~018c6b2ed1c484e091"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Rupesh Jaiswal's Upwork profile"
          title="Visit Rupesh Jaiswal on Upwork"
          className="designer-credit group relative inline-flex max-w-full items-center justify-center gap-1.5 overflow-hidden justify-self-center rounded-full border border-purple-400/30 bg-gradient-to-r from-purple-500/10 via-[#11152a] to-blue-500/10 px-3 py-2 shadow-[0_0_16px_rgba(168,85,247,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-300/70 hover:shadow-[0_0_22px_rgba(168,85,247,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-300 focus-visible:outline-offset-4"
        >
          {/* Small design icon */}
          <span className="relative z-10 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple-500/15 text-purple-300 transition-transform duration-300 group-hover:rotate-6">
            <FaCode className="text-[10px]" aria-hidden="true" />
          </span>

          {/* Credit label */}
          <span className="relative z-10 whitespace-nowrap text-[11px] text-slate-400 sm:text-xs">
            Designed by
          </span>

          {/* Cursive designer name */}
          <span
            className="designer-signature relative z-10 whitespace-nowrap text-sm font-semibold italic sm:text-base"
            style={{
              fontFamily: "'Segoe Script', 'Brush Script MT', cursive",
            }}
          >
            Rupesh Jaiswal
          </span>

          {/* External profile indicator */}
          <FaExternalLinkAlt
            className="relative z-10 ml-0.5 shrink-0 text-[9px] text-purple-300/70 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-purple-200"
            aria-hidden="true"
          />
        </a>

        {/* Copyright notice */}
        <p className="text-xs text-gray-400 sm:text-sm md:justify-self-end md:text-right">
          © 2026 Ritesh Jaiswal. All Rights Reserved.
        </p>
      </div>

      {/* Animated signature gradient and shimmer */}
      <style>{`
        .designer-credit::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(
            110deg,
            transparent 20%,
            rgba(192, 132, 252, 0.13) 45%,
            rgba(255, 255, 255, 0.12) 50%,
            transparent 75%
          );
          transform: translateX(-120%);
          animation: creditShimmer 5s ease-in-out infinite;
        }

        .designer-signature {
          background: linear-gradient(
            100deg,
            #c084fc,
            #f0abfc,
            #818cf8,
            #c084fc
          );
          background-size: 250% auto;
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          -webkit-text-fill-color: transparent;
          animation:
            signatureGradient 5s linear infinite,
            signatureFloat 3.5s ease-in-out infinite;
          transition: filter 0.3s ease;
        }

        @keyframes creditShimmer {
          0%, 65%, 100% {
            transform: translateX(-120%);
          }
          85% {
            transform: translateX(120%);
          }
        }

        @keyframes signatureGradient {
          to {
            background-position: 250% center;
          }
        }

        @keyframes signatureFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-2px);
          }
        }

        .designer-credit:hover .designer-signature {
          filter: drop-shadow(0 0 6px rgba(192, 132, 252, 0.55));
        }

        @media (prefers-reduced-motion: reduce) {
          .designer-credit::before,
          .designer-signature {
            animation: none !important;
          }

          .designer-credit,
          .designer-signature {
            transition: none !important;
          }
        }
      `}</style>
    </footer>
  );
}

export default Footer;
