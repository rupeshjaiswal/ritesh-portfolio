import {
  FaInstagram,
  FaWordpress,
  FaFacebook,
  FaBullhorn,
} from "react-icons/fa";
import { SiCanva } from "react-icons/si";

function Services() {
  const services = [
    {
      icon: <FaInstagram size={35} />,
      title: "Social Media Management",
      desc: "Manage Instagram, Facebook, TikTok and grow your online presence.",
    },
    {
      icon: <SiCanva size={35} />,
      title: "Canva Design",
      desc: "Professional posts, banners, flyers and creative designs.",
    },
    {
      icon: <FaWordpress size={35} />,
      title: "WordPress Websites",
      desc: "Modern responsive websites optimized for business growth.",
    },
    {
      icon: <FaFacebook size={35} />,
      title: "Facebook Marketing",
      desc: "Targeted campaigns to increase engagement and reach.",
    },
    {
      icon: <FaBullhorn size={35} />,
      title: "Digital Marketing",
      desc: "Complete digital marketing strategies for your brand.",
    },
    {
      icon: <FaInstagram size={35} />,
      title: "Posts & Banners",
      desc: "Eye-catching social media graphics and promotional banners.",
    },
  ];

  return (
    <section 
    id="services"
    className="py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-4">
          Services I Provide
        </h2>

        <p className="text-center text-gray-400 mb-12">
          Helping brands grow through design, content and marketing.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-purple-500 hover:-translate-y-2 transition duration-300"
            >
              <div className="text-purple-500 mb-5">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {service.title}
              </h3>

              <p className="text-gray-400">
                {service.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;