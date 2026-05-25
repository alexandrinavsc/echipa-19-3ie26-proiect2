import { Link } from "react-router-dom";

function TourCard({ tour }) {
  return (
    <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800">
      <img
        src={tour.image}
        alt={tour.title}
        className="h-60 w-full object-cover"
      />

      <div className="p-6">
        <h2 className="text-2xl font-bold mb-3">{tour.title}</h2>

        <p className="text-zinc-400 mb-5">{tour.description}</p>

        <Link
          to={`/tours/${tour.slug}`}
          className="inline-block bg-white text-black px-5 py-2 rounded-full font-semibold"
        >
          View Tour
        </Link>
      </div>
    </div>
  );
}

export default TourCard;