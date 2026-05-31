import { Link } from "react-router-dom";

function Home() {
  return (
    <div>

      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-5xl text-center">

          <p className="uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400 mb-4">
            Explore Cape Town
          </p>

          <h1 className="font-bold">
            Discover unforgettable South African experiences
          </h1>

          <p className="text-zinc-500 dark:text-zinc-400 text-lg md:text-xl max-w-3xl mx-auto mb-10">
            CapeGo helps travelers discover the beauty of Cape Town through
            guided tours, cultural experiences, landscapes and local adventures.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/tours"
              className="bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-full font-bold transition-colors duration-300"
            >
              Explore Tours
            </Link>

            <Link
              to="/about"
              className="border border-black dark:border-white px-8 py-4 rounded-full font-bold transition-colors duration-300"
            >
              About Us
            </Link>
          </div>

        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold mb-10">
            Why choose CapeGo?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-zinc-100 dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
              <h3 className="text-2xl font-bold mb-4">
                Authentic Experiences
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                Explore Cape Town with carefully selected travel experiences
                inspired by local culture and natural beauty.
              </p>
            </div>

            <div className="bg-zinc-100 dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
              <h3 className="text-2xl font-bold mb-4">
                Professional Guides
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                Discover destinations with experienced guides and curated
                tourism activities.
              </p>
            </div>

            <div className="bg-zinc-100 dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
              <h3 className="text-2xl font-bold mb-4">
                Beautiful Locations
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                Enjoy unforgettable landscapes, ocean views and cultural
                attractions across South Africa.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;