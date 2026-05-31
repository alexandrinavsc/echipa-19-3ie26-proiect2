import { useState } from "react";

const categories = ["Toate", "Coastă", "Munți", "Oraș", "Cultură"];

const photos = [
  {
    src: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800",
    title: "Table Mountain la apus",
    location: "Table Mountain, Cape Town",
    category: "Munți",
  },
  {
    src: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=600",
    title: "Plaja Camps Bay",
    location: "Camps Bay, Cape Town",
    category: "Coastă",
  },
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600",
    title: "Țărmul Atlanticului",
    location: "Atlantic Seaboard",
    category: "Coastă",
  },
  {
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
    title: "Creste montane",
    location: "Twelve Apostles, Cape Town",
    category: "Munți",
  },
  {
    src: "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=600",
    title: "Bo-Kaap",
    location: "Bo-Kaap, Cape Town",
    category: "Cultură",
  },
  {
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600",
    title: "Prieteni la aventură",
    location: "Lion's Head Trail",
    category: "Munți",
  },
  {
    src: "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=600",
    title: "Apus ocean",
    location: "Signal Hill",
    category: "Coastă",
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600",
    title: "Centrul vechi",
    location: "City Bowl, Cape Town",
    category: "Oraș",
  },
  {
    src: "https://images.unsplash.com/photo-1580575436351-e8966d0b4a87?w=800",
    title: "Cape Point",
    location: "Cape Point Nature Reserve",
    category: "Coastă",
  },
];

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("Toate");
  const [lightbox, setLightbox] = useState(null);

  const filtered =
    activeCategory === "Toate"
      ? photos
      : photos.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-10 md:pt-24">
        <p className="font-mono-custom text-emerald-400 uppercase tracking-[0.25em] text-xs mb-4">
          Vizual
        </p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h1 className="text-6xl md:text-8xl font-black font-serif-custom leading-none">
            Galerie
          </h1>
          <p className="text-zinc-400 max-w-sm leading-relaxed md:text-right">
            Momente surprinse în Cape Town — de la creste montane la țărmuri atlantice și culori urbane.
          </p>
        </div>
        <div className="h-px bg-zinc-800 mt-10" />
      </section>

      {/* FILTRE */}
      <section className="max-w-7xl mx-auto px-6 pb-8">
        <div className="flex flex-wrap gap-2 items-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all font-mono-custom ${
                activeCategory === cat
                  ? "bg-emerald-500 text-black"
                  : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:border-zinc-600 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
          <span className="ml-auto text-zinc-600 text-sm font-mono-custom">
            {filtered.length} foto
          </span>
        </div>
      </section>

      {/* GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((photo, i) => (
            <div
              key={i}
              className="break-inside-avoid group relative overflow-hidden rounded-2xl cursor-pointer bg-zinc-900"
              onClick={() => setLightbox(photo)}
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <span className="font-mono-custom text-emerald-400 text-xs uppercase tracking-widest mb-1">
                  {photo.category}
                </span>
                <h3 className="font-bold text-lg leading-tight">{photo.title}</h3>
                <p className="text-zinc-400 text-sm mt-1">{photo.location}</p>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-zinc-600 py-20 font-mono-custom">
            Nicio fotografie în această categorie.
          </p>
        )}
      </section>

      {/* LIGHTBOX */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white text-4xl leading-none hover:text-zinc-400 transition-colors font-light"
            onClick={() => setLightbox(null)}
            aria-label="Închide"
          >
            ×
          </button>
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightbox.src.replace("w=600", "w=1200").replace("w=800", "w=1200")}
              alt={lightbox.title}
              className="w-full rounded-2xl object-cover max-h-[75vh]"
            />
            <div className="mt-4 flex items-start justify-between gap-4">
              <div>
                <h3 className="font-bold text-xl font-serif-custom">{lightbox.title}</h3>
                <p className="text-zinc-400 text-sm mt-1">{lightbox.location}</p>
              </div>
              <span className="font-mono-custom text-emerald-400 text-xs uppercase tracking-widest bg-zinc-900 px-3 py-1 rounded-full shrink-0">
                {lightbox.category}
              </span>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default Gallery;