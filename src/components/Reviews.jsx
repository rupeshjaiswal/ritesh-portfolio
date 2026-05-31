import { useRef } from "react";

function Reviews() {
  const reviews = [
    {
      name: "rob659930",
      country: "United States",
      flag: "🇺🇸",
      review:
        "Ritesh is always a pleasure to work with. He is very detail-oriented and follows instruction well.",
    },
    {
      name: "thomaswerzinger",
      country: "Germany",
      flag: "🇩🇪",
      review:
        "I received a perfect webinar handout for my training. The result was perfect.",
    },
    {
      name: "francescogua425",
      country: "Italy",
      flag: "🇮🇹",
      review:
        "One of the best Canva Expert in Fiverr.",
    },
    {
      name: "mimshackengine",
      country: "South Africa",
      flag: "🇿🇦",
      review:
        "GENIUS THIS ONE.",
    },
    {
      name: "najharashell",
      country: "United States",
      flag: "🇺🇸",
      review:
        "Thank you. Excellent work and very fast delivery.",
    },
    {
      name: "vhbrid",
      country: "United States",
      flag: "🇺🇸",
      review:
        "The quality of work is exceptional. I am very pleased and will definitely call upon Ritesh again.",
    },
  ];

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -420,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 420,
      behavior: "smooth",
    });
  };

  return (
    <section id="reviews" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">

  <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-full mb-4">
    <span className="text-green-500">★</span>
    <span>4.9 Fiverr Rating</span>
  </div>

  <p className="text-purple-400 uppercase font-semibold">
    569+ VERIFIED CLIENT REVIEWS
  </p>

  <h2 className="text-5xl font-bold mt-2">
    What My Clients Say
  </h2>

</div>

        <div className="relative">

          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-purple-500 bg-[#0b1020] hover:bg-purple-600 transition-all duration-300"
          >
            ←
          </button>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-purple-500 bg-[#0b1020] hover:bg-purple-600 transition-all duration-300"
          >
            →
          </button>

          {/* Reviews */}
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto px-16 pb-4 scrollbar-hide"
          >
            {reviews.map((review, index) => (
              <div
                key={index}
                className="min-w-[380px] bg-[#0b1020] border border-purple-500/20 rounded-3xl p-8 hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:-translate-y-2 transition-all duration-300"
              >
                <div className="text-yellow-400 text-2xl mb-4">
                  ⭐⭐⭐⭐⭐
                </div>

                <p className="text-gray-300 mb-8 text-lg">
                  "{review.review}"
                </p>

                <div>
                  <h4 className="font-bold text-xl">
                    {review.name}
                  </h4>

                  <p className="text-gray-400">
                    {review.flag} {review.country}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default Reviews;