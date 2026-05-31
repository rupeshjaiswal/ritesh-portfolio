import profile from "../assets/ritesh.jpg";
import { FaMapMarkerAlt } from "react-icons/fa";


import {
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
       className="min-h-screen flex items-center pt-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div className="text-center lg:text-left">

          <span className="inline-block px-5 py-2 border border-purple-500 rounded-full text-purple-400 text-sm">
            ⭐ Social Media Manager & Canva Designer
          </span>

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

          <p className="text-gray-400 mt-6 text-lg max-w-xl">
            I help businesses build their brand, engage their audience,
            and grow faster through social media management,
            Canva design and result-driven marketing strategies.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">

            <div>
              <FaStar className="text-yellow-400 text-3xl mx-auto lg:mx-0" />
              <h3 className="text-2xl font-bold mt-2">4.9</h3>
              <p className="text-gray-400 text-sm">Fiverr Rating</p>
            </div>

            <div>
              <FaTrophy className="text-yellow-400 text-3xl mx-auto lg:mx-0" />
              <h3 className="text-2xl font-bold mt-2">Level 2</h3>
              <p className="text-gray-400 text-sm">Seller</p>
            </div>

            <div>
              <FaCommentDots className="text-yellow-400 text-3xl mx-auto lg:mx-0" />
              <h3 className="text-2xl font-bold mt-2">569+</h3>
              <p className="text-gray-400 text-sm">Reviews</p>
            </div>

            <div>
              <FaClock className="text-yellow-400 text-3xl mx-auto lg:mx-0" />
              <h3 className="text-2xl font-bold mt-2">1 Hour</h3>
              <p className="text-gray-400 text-sm">Response Time</p>
            </div>

          </div>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start">

  <a href="#portfolio">
    <button className="bg-gradient-to-r from-purple-600 to-blue-500 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300">
      View My Portfolio →
    </button>
  </a>

  <a
    href="https://www.fiverr.com/riteshjaiswa858"
    target="_blank"
    rel="noreferrer"
  >
    <button className="border border-purple-500 px-8 py-4 rounded-xl font-semibold hover:bg-purple-500/10 hover:scale-105 transition-all duration-300">
      Hire Me on Fiverr
    </button>
  </a>

</div>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center">
          <div className="relative">

            {/* Main Glow */}
            <div className="absolute inset-0 bg-purple-500 blur-[150px] opacity-30 rounded-full"></div>

            {/* Orbit Line */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[540px] h-[260px] border border-blue-500/30 rounded-full rotate-12"></div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
  <div className="w-[520px] h-[240px] border border-purple-500/20 rounded-full -rotate-12"></div>
</div>
            </div>

            {/* Decorative Dots */}
            <div className="absolute top-0 left-10 w-3 h-3 bg-purple-500 rounded-full"></div>

            <div className="absolute bottom-10 right-10 w-4 h-4 bg-blue-500 rounded-full"></div>

            <div className="absolute top-20 right-0 w-2 h-2 bg-purple-400 rounded-full"></div>

            <div className="absolute bottom-0 left-0 w-5 h-5 bg-blue-500/60 rounded-full"></div>

            <div className="absolute top-10 right-10 w-12 h-12 border border-purple-500/30 rounded-full"></div>

            <div className="absolute bottom-16 left-16 w-8 h-8 border border-blue-500/30 rounded-full"></div>

            {/* Glowing Circle Border */}
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 blur-xl opacity-25"></div>

              <div className="p-2 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 shadow-[0_0_50px_rgba(168,85,247,0.6)]">
                <img
                  src={profile}
                  alt="Ritesh"
                  className="w-72 h-72 sm:w-96 sm:h-96 lg:w-[460px] lg:h-[460px] object-cover rounded-full"
                />
              </div>
            </div>

            {/* Instagram */}
            <div className="absolute top-14 -left-8 bg-black p-4 rounded-2xl shadow-xl border border-purple-500/30">
              <FaInstagram className="text-pink-500 text-3xl" />
            </div>

            {/* Facebook */}
            <div className="absolute top-20 -right-8 bg-black p-4 rounded-2xl shadow-xl border border-purple-500/30">
              <FaFacebook className="text-blue-500 text-3xl" />
            </div>

            {/* TikTok */}
            <div className="absolute bottom-24 -left-8 bg-black p-4 rounded-2xl shadow-xl border border-purple-500/30">
              <span className="text-3xl">🎵</span>
            </div>

            {/* YouTube */}
            <div className="absolute bottom-16 -right-8 bg-black p-4 rounded-2xl shadow-xl border border-purple-500/30">
              <FaYoutube className="text-red-500 text-3xl" />
            </div>

            {/* Nepal Badge */}
           <div className="flex justify-center mt-8">
           <div className="flex items-center gap-3 bg-[#0b1020] border border-white/10 px-6 py-3 rounded-xl shadow-[0_0_20px_rgba(168,85,247,0.15)]">

             <span className="text-purple-400">
           <FaMapMarkerAlt className="text-purple-400" />
            </span>

              <span className="text-white font-semibold">
              From Nepal
             </span>

           <span>
            🇳🇵
          </span>

          </div>
           </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;