import { useEffect, useState } from "react";
import TourCard from "../components/TourCard";
import { fetchFromStrapi } from "../services/strapi";

function Tours() {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    async function loadTours() {
      try {
        const data = await fetchFromStrapi("articles");

        console.log(data);

        const formattedTours = data.data.map((item) => ({
          id: item.id,
          title: item.title,
          slug: item.slug,
          description: item.description,
          image: item.cover?.url,
        }));

        setTours(formattedTours);
      } catch (error) {
        console.error(error);
      }
    }

    loadTours();
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300 p-10">
      <h1 className="text-5xl font-bold mb-10">
        Tours
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tours.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
    </div>
  );
}

export default Tours;