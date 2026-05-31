function FiverrSection() {
return ( <section id="fiverr" className="py-24 px-6"> <div className="max-w-7xl mx-auto">


    <div className="text-center mb-12">
      <p className="text-purple-400 uppercase font-semibold tracking-wider">
        My Freelancer Profiles
      </p>

      <h2 className="text-4xl font-bold mt-2">
        You Can Find Me On
      </h2>
    </div>

    <div className="grid lg:grid-cols-2 gap-8">

      {/* Fiverr */}
      <div className="bg-[#0b1020] border border-purple-500/20 rounded-3xl p-6 hover:border-green-500 hover:-translate-y-3 hover:shadow-[0_0_35px_rgba(34,197,94,0.35)] transition-all duration-500">

        <div className="grid md:grid-cols-2 gap-6 items-center">

          <div>
            <h2 className="text-5xl font-bold text-green-500 mb-6">
              fiverr.
            </h2>

            <div className="space-y-4 text-lg">
              <p>⭐ 4.9 (569 Reviews)</p>
              <p>✅ 569+ Happy Clients</p>
              <p>✅ 1 Hour Avg. Response Time</p>
              <p>✅ 98% Client Satisfaction</p>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="/fiverr-profile.png"
              alt="Fiverr Profile"
              className="w-[260px] rounded-xl border border-white/10 transition-all duration-500 hover:scale-105"
            />
          </div>

        </div>

        <div className="flex justify-center mt-8">

          <a
            href="https://www.fiverr.com/riteshjaiswa858"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="w-64 py-3 border border-white/10 rounded-xl hover:border-green-500 hover:bg-green-500 hover:text-black hover:shadow-[0_0_25px_rgba(34,197,94,0.5)] transition-all duration-300">
              View on Fiverr
            </button>
          </a>
        </div>

      </div>

      {/* Upwork */}
      <div className="bg-[#0b1020] border border-purple-500/20 rounded-3xl p-6 hover:border-green-500 hover:-translate-y-3 hover:shadow-[0_0_35px_rgba(34,197,94,0.35)] transition-all duration-500">

        <div className="grid md:grid-cols-2 gap-6 items-center">

          <div>
            <h2 className="text-5xl font-bold text-green-500 mb-6">
              upwork
            </h2>

            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span>Job Success</span>
                <span className="text-yellow-400 font-bold">
                  100%
                </span>
              </div>

              <div className="h-3 bg-gray-800 rounded-full">
                <div className="h-3 w-full bg-yellow-400 rounded-full"></div>
              </div>
            </div>

            <div className="space-y-4 text-lg">
              <p>✅ Top Rated Freelancer</p>
              <p>✅ 100% Job Success</p>
              <p>✅ Completed Projects</p>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="/upwork-profile.png"
              alt="Upwork Profile"
              className="w-[260px] rounded-xl border border-white/10 transition-all duration-500 hover:scale-105"
            />
          </div>

        </div>

        <div className="flex justify-center mt-8">
          <a
            href="https://www.upwork.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="w-64 py-3 border border-white/10 rounded-xl hover:border-green-500 hover:bg-green-500 hover:text-black hover:shadow-[0_0_25px_rgba(34,197,94,0.5)] transition-all duration-300">
              View on Upwork
            </button>
          </a>
        </div>

      </div>

    </div>

  </div>
</section>

);
}

export default FiverrSection;
