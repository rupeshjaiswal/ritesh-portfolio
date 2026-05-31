import {
FaEnvelope,
FaWhatsapp,
FaInstagram,
FaFacebook,
FaYoutube,
FaWordpress,
FaTiktok,
} from "react-icons/fa";

import { SiCanva } from "react-icons/si";

function Contact() {
return ( <section id="contact" className="py-24 px-6"> <div className="max-w-7xl mx-auto">


    {/* CTA Banner */}
    <div className="bg-gradient-to-r from-purple-900/70 via-[#14182f] to-[#0b1020] border border-purple-500/30 rounded-3xl px-8 py-6 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-lg mb-12">

      {/* Icons */}
      <div className="flex gap-4 flex-wrap justify-center">
        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-2xl text-pink-500">
          <FaInstagram />
        </div>

        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-2xl text-red-500">
          <FaYoutube />
        </div>

        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-2xl text-white">
          <FaWordpress />
        </div>

        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-2xl">
          <FaTiktok />
        </div>

        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-2xl text-cyan-400">
          <SiCanva />
        </div>
      </div>

      {/* Text */}
      <div className="flex-1 text-center lg:text-left">
        <h2 className="text-4xl font-bold mb-2">
          Ready to Grow Your Brand?
        </h2>

        <p className="text-gray-300 text-base">
          Let's work together to take your brand to the next level
          with stunning designs and powerful strategies.
        </p>
      </div>

      {/* Button */}
      <a href="mailto:yourmail@gmail.com">
        <button className="bg-gradient-to-r from-purple-600 to-blue-500 px-8 py-3 rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300">
          Start a Project →
        </button>
      </a>

      {/* Target */}
      <div className="hidden lg:flex items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-purple-500/20 flex items-center justify-center text-5xl">
          🎯
        </div>
      </div>

    </div>

    {/* Contact Cards */}
    <div className="grid md:grid-cols-2 gap-6">

      {/* Email */}
      <a
        href="mailto:yourmail@gmail.com"
        className="bg-[#0b1020] border border-purple-500/20 rounded-2xl p-6 flex items-center gap-4 hover:border-purple-500 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300"
      >
        <FaEnvelope className="text-purple-500 text-3xl" />
        <div>
          <h3 className="font-bold">Email</h3>
          <p className="text-gray-400">yourmail@gmail.com</p>
        </div>
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/977XXXXXXXXX"
        target="_blank"
        rel="noreferrer"
        className="bg-[#0b1020] border border-purple-500/20 rounded-2xl p-6 flex items-center gap-4 hover:border-green-500 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all duration-300"
      >
        <FaWhatsapp className="text-green-500 text-3xl" />
        <div>
          <h3 className="font-bold">WhatsApp</h3>
          <p className="text-gray-400">+977 XXXXXXXX</p>
        </div>
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com/yourusername"
        target="_blank"
        rel="noreferrer"
        className="bg-[#0b1020] border border-purple-500/20 rounded-2xl p-6 flex items-center gap-4 hover:border-pink-500 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] transition-all duration-300"
      >
        <FaInstagram className="text-pink-500 text-3xl" />
        <div>
          <h3 className="font-bold">Instagram</h3>
          <p className="text-gray-400">@yourusername</p>
        </div>
      </a>

      {/* Facebook */}
      <a
        href="https://facebook.com/yourprofile"
        target="_blank"
        rel="noreferrer"
        className="bg-[#0b1020] border border-purple-500/20 rounded-2xl p-6 flex items-center gap-4 hover:border-blue-500 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300"
      >
        <FaFacebook className="text-blue-500 text-3xl" />
        <div>
          <h3 className="font-bold">Facebook</h3>
          <p className="text-gray-400">Ritesh Jaiswal</p>
        </div>
      </a>

    </div>

  </div>
</section>


);
}

export default Contact;
