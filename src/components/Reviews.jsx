
import { useRef } from "react";
import {
  FaStar,
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight,
  FaCheckCircle,
} from "react-icons/fa";

// Keep review data separate from the UI for easy maintenance.
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
    review: "One of the best Canva Expert in Fiverr.",
  },
  {
    name: "mimshackengine",
    country: "South Africa",
    flag: "🇿🇦",
    review: "GENIUS THIS ONE.",
  },
  {
    name: "najharashell",
    country: "United States",
    flag: "🇺🇸",
    review: "Thank you. Excellent work and very fast delivery.",
  },
  {
    name: "vhbrid",
    country: "United States",
    flag: "🇺🇸",
    review:
      "The quality of work is exceptional. I am very pleased and will definitely call upon Ritesh again.",
  },
];

function Reviews() {
  const scrollRef = useRef(null);

  // Move the carousel by approximately one card per click.
  const scrollReviews = (direction) => {
    const container = scrollRef.current;

    if (!container) return;

    const firstCard = container.querySelector(".review-card");

    if (!firstCard) return;

    const cardWidth = firstCard.getBoundingClientRect().width;
    const gap = 20;

    container.scrollBy({
      left: direction * (cardWidth + gap),
      behavior: "smooth",
    });
  };

  return (
    <section
      id="reviews"
      className="relative isolate scroll-mt-24 overflow-hidden bg-[#050816] px-6 pt-6 pb-16 sm:pt-8 sm:pb-20"
    >
      {/* Soft ambient glows complement the dark portfolio theme. */}
      <div
        className="pointer-events-none absolute -left-40 top-20 -z-10 h-80 w-80 rounded-full bg-purple-600/[0.08] blur-[110px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-80 w-80 rounded-full bg-blue-600/[0.08] blur-[110px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl">
        {/* Section heading and rating */}
        <header className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          {/* Rating badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-4 py-2 text-sm font-medium text-white shadow-sm shadow-emerald-500/5">
            <FaStar
              className="text-emerald-400"
              aria-hidden="true"
            />
            <span>4.9 Fiverr Rating</span>
          </div>

          {/* Eyebrow text */}
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-purple-300 sm:text-sm">
            569+ Verified Client Reviews
          </p>

          {/* Main title */}
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            What My{" "}
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-400">
            Real feedback from clients about working together and
            bringing creative ideas to life.
          </p>

          {/* Decorative gradient divider */}
          <div
            className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
            aria-hidden="true"
          />
        </header>

        {/* Carousel controls */}
        <div className="mb-4 flex items-center justify-between gap-4">
          <p className="text-xs text-slate-500 sm:text-sm">
            Client feedback
          </p>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollReviews(-1)}
              aria-label="Previous reviews"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-purple-400/30 bg-[#0b1020] text-purple-300 transition-all duration-300 hover:border-purple-400 hover:bg-purple-500 hover:text-white hover:shadow-lg hover:shadow-purple-500/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-400 focus-visible:outline-offset-2"
            >
              <FaChevronLeft aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={() => scrollReviews(1)}
              aria-label="Next reviews"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-purple-400/30 bg-[#0b1020] text-purple-300 transition-all duration-300 hover:border-purple-400 hover:bg-purple-500 hover:text-white hover:shadow-lg hover:shadow-purple-500/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-400 focus-visible:outline-offset-2"
            >
              <FaChevronRight aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Horizontally scrollable review carousel */}
        <div
          ref={scrollRef}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-1 pb-5 pt-3 scrollbar-hide"
          aria-label="Client reviews"
        >
          {reviews.map((review, index) => (
            <article
              key={review.name}
              className="review-card group relative flex w-[min(86vw,380px)] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-purple-500/15 bg-gradient-to-br from-[#141725] to-[#0b1020] p-6 shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1.5 hover:border-purple-400/40 hover:shadow-xl hover:shadow-purple-500/10 sm:p-7"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Large decorative quotation mark */}
              <FaQuoteLeft
                className="absolute right-5 top-5 text-4xl text-purple-400/[0.09] transition-colors duration-300 group-hover:text-purple-400/20"
                aria-hidden="true"
              />

              {/* Five-star rating */}
              <div
                className="relative z-10 mb-5 flex items-center gap-1"
                aria-label="5 out of 5 stars"
              >
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    className="text-lg text-amber-400 drop-shadow-[0_0_5px_rgba(251,191,36,0.15)]"
                    aria-hidden="true"
                  />
                ))}
              </div>

              {/* Client's review */}
              <blockquote className="relative z-10 flex-1 text-[15px] leading-7 text-slate-300 transition-colors duration-300 group-hover:text-slate-200">
                “{review.review}”
              </blockquote>

              {/* Reviewer identity */}
              <div className="relative z-10 mt-7 flex items-center gap-3 border-t border-white/[0.07] pt-5">
                {/* Initials avatar */}
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-purple-400/20 bg-gradient-to-br from-purple-500/25 to-blue-500/20 text-sm font-bold text-purple-200"
                  aria-hidden="true"
                >
                  {review.name.slice(0, 2).toUpperCase()}
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-sm font-bold text-white sm:text-base">
                    {review.name}
                  </h3>

                  <p className="mt-1 flex items-center gap-1.5 text-xs text-slate-400 sm:text-sm">
                    <span aria-hidden="true">{review.flag}</span>
                    {review.country}
                  </p>
                </div>

                <FaCheckCircle
                  className="shrink-0 text-emerald-400/70"
                  aria-label="Client feedback"
                  title="Client feedback"
                />
              </div>

              {/* Bottom gradient accent */}
              <div
                className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-purple-500 via-fuchsia-400 to-blue-500 transition-all duration-500 group-hover:w-full"
                aria-hidden="true"
              />
            </article>
          ))}
        </div>

        {/* Small helper text below the carousel */}
        <p className="mt-2 text-center text-xs text-slate-500">
          Use the arrows to explore more client feedback.
        </p>
      </div>

      {/* Stagger the card entrance and respect reduced-motion settings. */}
      <style>{`
        .review-card {
          opacity: 0;
          animation: reviewCardReveal 600ms
            cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        @keyframes reviewCardReveal {
          from {
            opacity: 0;
            translate: 0 18px;
          }
          to {
            opacity: 1;
            translate: 0 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .review-card {
            opacity: 1;
            animation: none !important;
            transition: none !important;
          }

          .review-card * {
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Reviews;
