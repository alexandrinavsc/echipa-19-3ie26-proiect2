import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromStrapi } from "../services/strapi";

function TourDetail() {
  const { slug } = useParams();

  const [tour, setTour] = useState(null);

  useEffect(() => {
    async function loadTour() {
      try {
        const data = await fetchFromStrapi("articles");

        const foundTour = data.data.find(
          (item) => item.slug === slug
        );

        setTour(foundTour);
      } catch (error) {
        console.error(error);
      }
    }

    loadTour();
  }, [slug]);

  if (!tour) {
    return (
      <div className="text-white p-10">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen">

      <img
        src={tour.cover?.url}
        alt={tour.title}
        className="w-full h-[500px] object-cover"
      />

      <div className="max-w-5xl mx-auto px-6 py-16">

        <h1 className="text-5xl font-black mb-6">
          {tour.title}
        </h1>

        <p className="text-zinc-400 text-xl mb-10">
          {tour.description}
        </p>

        <div className="text-zinc-300 leading-8 text-lg">
          {tour.blocks?.[0]?.body}
        </div>

      </div>
    </div>
  );
}

export default TourDetail;