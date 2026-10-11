
import profile from "../assets/ritesh.jpg";

import {
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaStar,
  FaClock,
  FaCommentDots,
  FaTrophy,
} from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="hero-section min-h-screen flex items-center pt-24 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center w-full">

        {/* ================= LEFT: INTRODUCTION ================= */}
        <div className="text-center lg:text-left">
          {/* Professional title badge */}
          <span className="inline-block px-5 py-2 border border-purple-500 rounded-full text-purple-400 text-sm">
            ⭐ Social Media Manager & Canva Designer
          </span>

          {/* Main heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-6 leading-snug">
            Helping Brands Grow
            <br />
            Through
            <span className="text-purple-500">
              {" "}Creative Content
            </span>
            <br />
            & Social Media Marketing
          </h1>

          {/* Short professional introduction */}
          <p className="text-gray-400 mt-6 text-lg max-w-xl">
            I help businesses build their brand, engage their audience,
            and grow faster through social media management,
            Canva design and result-driven marketing strategies.
          </p>

          {/* ================= ANIMATED STATISTICS ================= */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">

            {/* Fiverr rating */}
            <div className="stat-item">
              <FaStar className="stat-icon text-yellow-400 text-3xl mx-auto lg:mx-0" />
              <h3 className="text-2xl font-bold mt-2">4.9</h3>
              <p className="text-gray-400 text-sm">Fiverr Rating</p>
            </div>

            {/* Seller level */}
            <div className="stat-item">
              <FaTrophy className="stat-icon text-yellow-400 text-3xl mx-auto lg:mx-0" />
              <h3 className="text-2xl font-bold mt-2">Level 2</h3>
              <p className="text-gray-400 text-sm">Seller</p>
            </div>

            {/* Customer reviews */}
            <div className="stat-item">
              <FaCommentDots className="stat-icon text-yellow-400 text-3xl mx-auto lg:mx-0" />
              <h3 className="text-2xl font-bold mt-2">569+</h3>
              <p className="text-gray-400 text-sm">Reviews</p>
            </div>

            {/* Response time */}
            <div className="stat-item">
              <FaClock className="stat-icon text-yellow-400 text-3xl mx-auto lg:mx-0" />
              <h3 className="text-2xl font-bold mt-2">1 Hour</h3>
              <p className="text-gray-400 text-sm">Response Time</p>
            </div>

          </div>

          {/* ================= ANIMATED CTA BUTTONS ================= */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start">

            {/* Primary button: gradient + shimmer */}
            <a
              href="#portfolio"
              className="hero-button hero-button-primary"
            >
              <span className="button-shimmer">
                <span>View My Portfolio</span>
                <span className="button-arrow" aria-hidden="true">
                  →
                </span>
              </span>
            </a>

            {/* Secondary button: glowing outline */}
            <a
              href="https://www.fiverr.com/riteshjaiswa858"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-button hero-button-secondary"
            >
              Hire Me on Fiverr
            </a>

          </div>
        </div>

        {/* ================= RIGHT: ANIMATED PROFILE ================= */}
        <div className="flex justify-center">
          <div className="relative isolate">

            {/* Ambient purple background glow */}
            <div className="absolute inset-[-15%] -z-10 rounded-full bg-purple-600/20 blur-[100px] animate-pulse" />

            {/* Rotating decorative orbit rings */}
            <div className="absolute inset-[-6%] pointer-events-none">
              <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-purple-400 border-r-blue-500/70 animate-spin [animation-duration:12s]" />

              <div className="absolute inset-[5%] rounded-full border border-transparent border-b-blue-400 border-l-purple-500/80 animate-spin [animation-duration:9s] [animation-direction:reverse]" />

              <div className="absolute inset-[-5%] rounded-full border border-purple-500/20 animate-[orbitPulse_4s_ease-in-out_infinite]" />
            </div>

            {/* Orbiting particles */}
            <div className="absolute inset-[-8%] pointer-events-none animate-spin [animation-duration:14s]">
              <span className="absolute top-[8%] left-[48%] h-3 w-3 rounded-full bg-purple-400 shadow-[0_0_18px_5px_rgba(168,85,247,0.8)]" />

              <span className="absolute top-[48%] right-0 h-3 w-3 rounded-full bg-blue-400 shadow-[0_0_18px_5px_rgba(59,130,246,0.8)]" />

              <span className="absolute bottom-[5%] left-[35%] h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_18px_5px_rgba(34,211,238,0.8)]" />

              <span className="absolute top-[35%] left-0 h-2 w-2 rounded-full bg-purple-300 shadow-[0_0_16px_4px_rgba(192,132,252,0.8)]" />
            </div>

            {/* Extra floating decorative particles */}
            <span className="absolute -top-5 left-[15%] h-3 w-3 rounded-full bg-purple-500 animate-[floatParticle_3s_ease-in-out_infinite] shadow-[0_0_18px_rgba(168,85,247,0.9)]" />

            <span className="absolute top-[25%] -right-8 h-4 w-4 rounded-full bg-blue-500 animate-[floatParticle_4s_ease-in-out_infinite] shadow-[0_0_18px_rgba(59,130,246,0.9)]" />

            <span className="absolute bottom-[25%] -left-7 h-3 w-3 rounded-full bg-cyan-400 animate-[floatParticle_3.5s_ease-in-out_infinite] shadow-[0_0_18px_rgba(34,211,238,0.9)]" />

            {/* Profile picture with animated gradient border */}
            <div className="relative animate-[profileFloat_5s_ease-in-out_infinite]">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 blur-xl opacity-50 animate-pulse" />

              <div className="relative rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-blue-400 p-2 shadow-[0_0_45px_rgba(168,85,247,0.45)]">
                <img
                  src={profile}
                  alt="Ritesh - Social Media Manager and Canva Designer"
                  className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[380px] lg:h-[380px] object-cover rounded-full"
                />
              </div>
            </div>

            {/* Floating Instagram icon */}
            <div
              className="absolute top-[12%] -left-6 sm:-left-8 z-10 bg-black/95 p-2.5 rounded-xl border border-purple-500/40 shadow-[0_0_20px_rgba(168,85,247,0.2)] animate-[socialFloat_4s_ease-in-out_infinite] hover:scale-110 transition-transform"
              aria-label="Instagram"
            >
              <FaInstagram className="text-pink-500 text-xl" />
            </div>

            {/* Floating Facebook icon */}
            <div
              className="absolute top-[18%] -right-6 sm:-right-8 z-10 bg-black/95 p-2.5 rounded-xl border border-blue-500/40 shadow-[0_0_20px_rgba(59,130,246,0.2)] animate-[socialFloat_4.5s_ease-in-out_infinite] [animation-delay:0.5s] hover:scale-110 transition-transform"
              aria-label="Facebook"
            >
              <FaFacebook className="text-blue-500 text-xl" />
            </div>

            {/* Floating music icon */}
            <div
              className="absolute bottom-[24%] -left-6 sm:-left-8 z-10 bg-black/95 p-2.5 rounded-xl border border-purple-500/40 shadow-[0_0_20px_rgba(168,85,247,0.2)] animate-[socialFloat_3.8s_ease-in-out_infinite] [animation-delay:0.8s] hover:scale-110 transition-transform"
              aria-label="Music"
            >
              <span className="text-xl" aria-hidden="true">🎵</span>
            </div>

            {/* Floating YouTube icon */}
            <div
              className="absolute bottom-[18%] -right-6 sm:-right-8 z-10 bg-black/95 p-2.5 rounded-xl border border-red-500/30 shadow-[0_0_20px_rgba(239,68,68,0.2)] animate-[socialFloat_4.2s_ease-in-out_infinite] [animation-delay:0.3s] hover:scale-110 transition-transform"
              aria-label="YouTube"
            >
              <FaYoutube className="text-red-500 text-xl" />
            </div>

            {/* Compact location badge */}
            <div className="flex justify-center mt-6 relative z-10">
              <div className="flex items-center gap-2 bg-[#0b1020]/90 border border-purple-500/20 px-4 py-2 rounded-lg shadow-[0_0_20px_rgba(168,85,247,0.15)] animate-[badgeFloat_4s_ease-in-out_infinite]">
                <FaMapMarkerAlt
                  className="text-purple-400 text-sm"
                  aria-hidden="true"
                />

                <span className="text-white text-sm font-semibold">
                  From Nepal
                </span>

                <span className="text-sm" aria-hidden="true">🇳🇵</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ================= ANIMATION STYLES ================= */}
      <style>{`
        /* Keep animations smooth and reusable. */

        /* Profile gently floats vertically. */
        @keyframes profileFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        /* Social icons float with a slight rotation. */
        @keyframes socialFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(3deg); }
        }

        /* Small decorative particles float and glow. */
        @keyframes floatParticle {
          0%, 100% {
            transform: translateY(0) scale(1);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-16px) scale(1.25);
            opacity: 1;
          }
        }

        /* Orbit rings gently pulse. */
        @keyframes orbitPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.35;
          }
          50% {
            transform: scale(1.035);
            opacity: 0.8;
          }
        }

        /* Location badge gently floats. */
        @keyframes badgeFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }

        /* Statistics appear from below in sequence. */
        .stat-item {
          opacity: 0;
          animation: statReveal 0.7s ease-out forwards;
          transition: transform 0.3s ease;
        }

        .stat-item:nth-child(1) { animation-delay: 0.1s; }
        .stat-item:nth-child(2) { animation-delay: 0.25s; }
        .stat-item:nth-child(3) { animation-delay: 0.4s; }
        .stat-item:nth-child(4) { animation-delay: 0.55s; }

        @keyframes statReveal {
          from {
            opacity: 0;
            translate: 0 20px;
          }
          to {
            opacity: 1;
            translate: 0 0;
          }
        }

        /* Hovering over a statistic raises it slightly. */
        .stat-item:hover {
          transform: translateY(-6px);
        }

        /* Yellow icons float independently of the cards. */
        .stat-icon {
          animation: iconFloat 3s ease-in-out infinite;
          transition: filter 0.3s ease;
        }

        .stat-item:hover .stat-icon {
          filter: drop-shadow(0 0 10px rgba(250, 204, 21, 0.7));
        }

        @keyframes iconFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        /* Shared button layout and hover transitions. */
        .hero-button {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 15px;
          font-weight: 700;
          text-decoration: none;
          overflow: hidden;
          isolation: isolate;
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            border-color 0.3s ease;
          animation: buttonEntrance 0.8s ease-out both;
        }

        /* Keyboard users can see which button has focus. */
        .hero-button:focus-visible {
          outline: 2px solid #c084fc;
          outline-offset: 5px;
        }

        /* Stagger the entrance of the two buttons. */
        .hero-button-primary {
          color: white;
          background: linear-gradient(
            110deg,
            #a020f0,
            #7952ff,
            #3478ff,
            #a020f0
          );
          background-size: 250% 100%;
          animation:
            buttonEntrance 0.8s ease-out 0.65s both,
            gradientFlow 5s ease 1.45s infinite;
        }

        .hero-button-secondary {
          color: white;
          background: #070816;
          border: 1px solid #a020f0;
          padding: 19px 32px;
          animation-delay: 0.85s;
        }

        /* Button text spacing and shimmer layer. */
        .button-shimmer {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 20px 32px;
          overflow: hidden;
          border-radius: inherit;
          white-space: nowrap;
        }

        .button-shimmer::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -1;
          background: linear-gradient(
            110deg,
            transparent 25%,
            rgba(255, 255, 255, 0.3) 50%,
            transparent 75%
          );
          transform: translateX(-120%);
          animation: buttonShimmer 4s ease-in-out infinite;
          pointer-events: none;
        }

        /* Arrow moves right on hover. */
        .button-arrow {
          display: inline-block;
          transition: transform 0.3s ease;
        }

        .hero-button-primary:hover .button-arrow {
          transform: translateX(6px);
        }

        /* Primary button glow and lift. */
        .hero-button-primary:hover {
          transform: translateY(-5px) scale(1.025);
          box-shadow:
            0 10px 35px rgba(139, 92, 246, 0.4),
            0 0 18px rgba(59, 130, 246, 0.2);
        }

        /* Secondary button gets a brighter border. */
        .hero-button-secondary:hover {
          transform: translateY(-5px) scale(1.025);
          border-color: #6485ff;
          box-shadow:
            0 10px 30px rgba(139, 92, 246, 0.22),
            inset 0 0 18px rgba(139, 92, 246, 0.08);
        }

        /* Both buttons respond to clicking. */
        .hero-button:active {
          transform: scale(0.97);
        }

        /* Buttons slide into view on page load. */
        @keyframes buttonEntrance {
          from {
            opacity: 0;
            translate: 0 16px;
          }
          to {
            opacity: 1;
            translate: 0 0;
          }
        }

        /* Light sweeps across the portfolio button. */
        @keyframes buttonShimmer {
          0%, 65%, 100% { transform: translateX(-120%); }
          85% { transform: translateX(120%); }
        }

        /* Slowly shifts the portfolio gradient. */
        @keyframes gradientFlow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        /* Respect system settings that reduce motion. */
        @media (prefers-reduced-motion: reduce) {
          .hero-section *,
          .hero-section *::before,
          .hero-section *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
          }

          .stat-item {
            opacity: 1;
            translate: none;
          }

          .hero-button {
            animation: none !important;
            opacity: 1;
            translate: none;
            transition: none;
          }

          .button-shimmer::before {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Hero;
