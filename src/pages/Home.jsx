import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchFromStrapi } from "../services/strapi";
import heroImage from "../assets/hero.png";

function Home() {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    async function loadTours() {
      try {
        const data = await fetchFromStrapi("articles");

        const formattedTours = data.data.slice(0, 3).map((item) => ({
          id: item.id,
          title: item.title,
          slug: item.slug,
          description: item.description,
          image: item.cover?.url,
          category: item.category?.name,
        }));

        setTours(formattedTours);
      } catch (error) {
        console.error("Eroare la încărcarea articolelor:", error);
      }
    }

    loadTours();
  }, []);

  return (
    <main className="font-body bg-white text-black transition-colors duration-300 dark:bg-black dark:text-white">
      <section className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
        <div>
          <p className="mb-5 font-special text-sm uppercase tracking-[0.35em] text-primary">
            Explore Cape Town
          </p>

          <h1 className="mb-6 font-heading text-5xl font-bold leading-tight text-black dark:text-white md:text-7xl">
            Discover Cape Town through authentic local tours
          </h1>

          <p className="mb-10 max-w-2xl font-body text-lg text-zinc-600 dark:text-zinc-400 md:text-xl">
            CapeGo is a travel platform dedicated to curated experiences in Cape
            Town: cultural tours, natural landscapes, ocean adventures and
            memorable local stories.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/tours"
              className="rounded-custom bg-primary px-8 py-4 font-special font-bold text-white transition hover:opacity-80"
            >
              Explore Tours
            </Link>

            <Link
              to="/about"
              className="rounded-custom border border-primary px-8 py-4 font-special font-bold text-primary transition hover:bg-primary hover:text-white"
            >
              About CapeGo
            </Link>
          </div>
        </div>

        <div className="relative">
          <img
            src={heroImage}
            alt="Cape Town travel experience"
            className="h-[520px] w-full rounded-custom object-cover shadow-2xl"
          />

          <div className="absolute bottom-6 left-6 right-6 rounded-custom border border-white/40 bg-white/85 p-5 backdrop-blur-md dark:border-zinc-800 dark:bg-black/80">
            <p className="font-heading text-2xl font-bold text-primary">
              Curated travel experiences
            </p>

            <p className="font-body text-zinc-600 dark:text-zinc-400">
              Culture, nature and adventure in one destination.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-accent px-6 py-20 dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 font-special text-sm uppercase tracking-[0.25em] text-secondary">
            Categories
          </p>

          <h2 className="mb-10 font-heading text-4xl font-bold text-black dark:text-white md:text-5xl">
            Choose your type of experience
          </h2>

          <div className="grid gap-6 md:grid-cols-4">
            {["Culture", "Nature", "Adventure", "Ocean"].map((category) => (
              <div
                key={category}
                className="rounded-custom border border-zinc-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl dark:border-zinc-800 dark:bg-black"
              >
                <h3 className="mb-3 font-heading text-2xl font-bold text-primary">
                  {category}
                </h3>

                <p className="font-body text-zinc-600 dark:text-zinc-400">
                  Discover selected Cape Town experiences based on your travel
                  style.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mb-3 font-special text-sm uppercase tracking-[0.25em] text-secondary">
                Featured tours
              </p>

              <h2 className="font-heading text-4xl font-bold text-black dark:text-white md:text-5xl">
                Popular experiences
              </h2>
            </div>

            <Link
              to="/tours"
              className="font-special font-bold text-primary underline underline-offset-8"
            >
              View all tours
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {tours.map((tour) => (
              <Link
                to={`/tours/${tour.slug}`}
                key={tour.id}
                className="group overflow-hidden rounded-custom border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900"
              >
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="p-6">
                  {tour.category && (
                    <p className="mb-3 font-special text-sm uppercase tracking-[0.2em] text-secondary">
                      {tour.category}
                    </p>
                  )}

                  <h3 className="mb-3 font-heading text-2xl font-bold text-black dark:text-white">
                    {tour.title}
                  </h3>

                  <p className="font-body text-zinc-600 dark:text-zinc-400">
                    {tour.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {tours.length === 0 && (
            <div className="mt-10 rounded-custom border border-zinc-200 bg-zinc-100 p-8 text-center dark:border-zinc-800 dark:bg-zinc-900">
              <p className="font-body text-zinc-600 dark:text-zinc-400">
                Tours are loading from Strapi. If nothing appears, check that
                the articles collection has published entries with title, slug,
                description and cover image.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl rounded-custom bg-darkbg p-10 text-center text-white md:p-16">
          <p className="mb-3 font-special text-sm uppercase tracking-[0.25em] text-primary">
            Start your journey
          </p>

          <h2 className="mb-5 font-heading text-4xl font-bold md:text-5xl">
            Ready to explore Cape Town?
          </h2>

          <p className="mx-auto mb-8 max-w-2xl font-body text-lg text-zinc-300">
            Browse our tours and choose the experience that matches your next
            adventure.
          </p>

          <Link
            to="/contact"
            className="inline-block rounded-custom bg-primary px-8 py-4 font-special font-bold text-white transition hover:opacity-80"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;