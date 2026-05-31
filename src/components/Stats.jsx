function Stats() {
  return (
    <section className="py-10">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">

        <div className="p-6 border border-gray-700 rounded-xl text-center">
          <h2 className="text-3xl font-bold">4.9★</h2>
          <p>Fiverr Rating</p>
        </div>

        <div className="p-6 border border-gray-700 rounded-xl text-center">
          <h2 className="text-3xl font-bold">569+</h2>
          <p>Reviews</p>
        </div>

        <div className="p-6 border border-gray-700 rounded-xl text-center">
          <h2 className="text-3xl font-bold">Level 2</h2>
          <p>Seller</p>
        </div>

        <div className="p-6 border border-gray-700 rounded-xl text-center">
          <h2 className="text-3xl font-bold">1 Hour</h2>
          <p>Response Time</p>
        </div>

      </div>
    </section>
  );
}

export default Stats;