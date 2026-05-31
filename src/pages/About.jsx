import { useState } from "react";

const faqs = [
  {
    question: "Ce face CapeGo diferit?",
    answer:
      "CapeGo oferă experiențe autentice ghidate de localnici din Cape Town, nu tururi standard și grăbite.",
  },
  {
    question: "Pot fi personalizate tururile?",
    answer:
      "Da! Fiecare tur poate fi adaptat în funcție de preferințele tale, ritmul dorit și interesele grupului.",
  },
  {
    question: "Sunt tururile potrivite pentru începători?",
    answer:
      "Absolut. Avem opțiuni pentru toate nivelurile, de la drumeții ușoare până la aventuri mai solicitante.",
  },
  {
    question: "Cum pot călătorii să rezerve un tur?",
    answer:
      "Poți rezerva direct de pe pagina Tours sau ne poți contacta prin formularul de Contact.",
  },
];

function About() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="bg-[#fdf5f0] dark:bg-gray-950 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      {/* ── HERO ── */}
      <div
        className="relative h-64 flex flex-col items-center justify-center text-white text-center px-4"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=1400')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold font-serif-custom text-green-400">Despre CapeGo</h1>
          <p className="mt-2 max-w-xl text-sm">
            Descoperă povestea din spatele CapeGo — o experiență de călătorie
            creată de localnici, construită pe conexiuni autentice și inspirată
            de frumusețea orașului Cape Town.
          </p>
        </div>
      </div>

      {/* ── POVESTEA NOASTRĂ ── */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-2 text-green-400">Povestea noastră</h2>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-10 max-w-xl mx-auto text-sm">
          Creat de localnici din Cape Town, CapeGo conectează călătorii cu locuri
          autentice, povești pline de sens și aventuri de coastă de neuitat.
        </p>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex flex-col gap-4 md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700"
              alt="Prieteni la plajă"
              className="rounded-xl object-cover w-full h-52"
            />
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=700"
              alt="Grup de prieteni"
              className="rounded-xl object-cover w-full h-52"
            />
          </div>

          <div className="md:w-1/2 bg-white dark:bg-gray-800 rounded-2xl shadow p-8 text-center text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300">
            <p className="mb-4 font-serif-custom">
              CapeGo a fost fondat în 2018 de un grup de localnici din Cape Town
              care au crezut că cele mai frumoase experiențe de călătorie se nasc
              din conexiuni autentice. Obosiți de tururile standard, grăbite prin
              obiective turistice, ne-am propus să creăm experiențe captivante
              care dezvăluie sufletul Orașului-Mamă.
            </p>
            <p className="font-serif-custom">
              De la prima noastră drumeție la apus pe Lion's Head până la miile
              de călători pe care i-am ghidat de atunci, pasiunea noastră pentru
              Cape Town a devenit tot mai puternică. Astăzi, CapeGo este ales de
              vizitatori din peste 40 de țări, care vin în căutare de aventură,
              cultură și amintiri de neuitat.
            </p>
          </div>
        </div>
      </section>

      {/* ── STATISTICI ── */}
      <section className="bg-[#f0ebe5] dark:bg-gray-900 py-14 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-6 flex flex-wrap justify-center gap-10">
          {[
            { value: "2018", label: "Founded" },
            { value: "40+", label: "Countries" },
            { value: "5000+", label: "Happy Travellers" },
            { value: "240+", label: "Curated Tours" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center w-32 h-32 rounded-full border-4 border-teal-500 text-teal-600 dark:text-teal-400"
            >
              <span className="text-2xl font-bold">{stat.value}</span>
              <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10 text-green-400">
          Întrebări frecvente
        </h2>
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-gray-200 dark:border-gray-700 pb-3">
              <button
                className="w-full flex justify-between items-center text-left text-sm font-medium py-2"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-mono-custom">
                  {faq.question}
                </span>
                <span className="text-xl text-gray-400">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>
              {openIndex === i && (
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 pb-2">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;