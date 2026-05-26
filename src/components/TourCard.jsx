import { Link } from "react-router-dom";

function TourCard({ tour }) {
  return (
    <Link to={`/tours/${tour.slug}`}>
      <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:scale-[1.02] transition">

        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-64 object-cover"
        />

        <div className="p-6">

          <h2 className="text-2xl font-bold mb-3">
            {tour.title}
          </h2>

          <p className="text-zinc-400">
            {tour.description}
          </p>

        </div>
      </div>
    </Link>
  );
}

export default TourCard;