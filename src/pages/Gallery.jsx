import { useState } from "react";

const slides = [
  { title: "Coastal Joy", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600" },
  { title: "Travel Stories", img: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=600" },
  { title: "Beach Friends", img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600" },
  { title: "Mountain Views", img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600" },
  { title: "City Lights", img: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=600" },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=500",
  "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=500",
  "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=500",
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500",
  "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=500",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500",
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500",
];

function Gallery() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));

  const visible = [
    slides[(current - 1 + slides.length) % slides.length],
    slides[current],
    slides[(current + 1) % slides.length],
  ];

  return (
    <div className="bg-[#fdf5f0] dark:bg-gray-950 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      {/* ── HERO ── */}
      <div
        className="relative h-64 flex flex-col items-center justify-center text-white text-center px-4"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1400')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10">
          <h1 className="text-4xl font-bold font-serif">Galeria Cape Town</h1>
          <p className="mt-2 text-sm max-w-xl">
            Descoperă culorile, tărmurile și momentele de neuitat care fac din
            Cape Town una dintre cele mai inspiraționale destinații din lume.
          </p>
        </div>
      </div>

      {/* ── SLIDER ── */}
      <section className="max-w-4xl mx-auto px-6 py-14">
        <h2 className="text-2xl font-bold text-center mb-1">
          Momente împărtășite din Cape Town
        </h2>
        <p className="text-center text-gray-400 dark:text-gray-500 text-sm mb-8">
          O colecție de amintiri calde, priveliști de coastă și momente colorate
          de călătorie surprinse în Cape Town.
        </p>

        <div className="relative flex items-center gap-3">
          <button
            onClick={prev}
            className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-2xl px-2"
          >
            ‹
          </button>

          <div className="flex gap-3 flex-1 overflow-hidden">
            {visible.map((slide, i) => (
              <div
                key={i}
                className={`relative rounded-xl overflow-hidden flex-1 h-40 transition-all ${
                  i === 1 ? "opacity-100 scale-105" : "opacity-60"
                }`}
              >
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">
                    {slide.title}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={next}
            className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-2xl px-2"
          >
            ›
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === current ? "bg-orange-400 w-4" : "bg-gray-300 dark:bg-gray-600"
              }`}
            />
          ))}
        </div>
      </section>

      {/* ── GRID GALERIE ── */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold text-center mb-1">Galerie</h2>
        <p className="text-center text-gray-400 dark:text-gray-500 text-sm mb-8">
          Explorează câteva dintre cele mai memorabile priveliști din Cape Town.
        </p>

        <div className="grid grid-cols-3 gap-3">
          {galleryImages.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Foto ${i + 1}`}
              className={`rounded-xl object-cover w-full ${
                i === galleryImages.length - 1 && galleryImages.length % 3 !== 0
                  ? "col-span-3 h-52"
                  : "h-36"
              }`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Gallery;