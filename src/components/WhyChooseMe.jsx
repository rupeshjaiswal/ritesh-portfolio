import {
  FaStar,
  FaClock,
  FaUsers,
  FaHandshake,
} from "react-icons/fa";

function WhyChooseMe() {
  const reasons = [
    {
      icon: <FaStar size={30} />,
      title: "4.9 Fiverr Rating",
      desc: "Trusted by hundreds of satisfied clients worldwide.",
    },
    {
      icon: <FaUsers size={30} />,
      title: "569+ Reviews",
      desc: "A proven track record of delivering quality work.",
    },
    {
      icon: <FaClock size={30} />,
      title: "Fast Response",
      desc: "Usually responds within 1 hour.",
    },
    {
      icon: <FaHandshake size={30} />,
      title: "Long-Term Support",
      desc: "Focused on building long-term client relationships.",
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Why Choose Me
        </h2>

        <p className="text-center text-gray-400 mb-12">
          Helping businesses grow through creativity, strategy and consistency.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {reasons.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:border-purple-500 transition"
            >
              <div className="text-purple-500 flex justify-center mb-4">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseMe;