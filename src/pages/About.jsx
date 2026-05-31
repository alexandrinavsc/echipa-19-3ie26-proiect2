import { useState } from "react";

const teamMembers = [
  {
    name: "Alexandrina VSC",
    role: "Lead Developer & Frontend",
    bio: "Pasionată de design modern și experiențe de utilizator fluide. Coordonează arhitectura React a proiectului.",
    initials: "AV",
    color: "bg-emerald-600",
  },
  {
    name: "Membru Echipă 2",
    role: "Backend & Strapi",
    bio: "Responsabil de configurarea CMS-ului Strapi, modelarea datelor și integrarea API-urilor.",
    initials: "M2",
    color: "bg-sky-600",
  },
  {
    name: "Membru Echipă 3",
    role: "UI/UX & Tailwind",
    bio: "Se ocupă de design responsiv, teme Tailwind și experiența vizuală a site-ului.",
    initials: "M3",
    color: "bg-violet-600",
  },
  {
    name: "Membru Echipă 4",
    role: "DevOps & Netlify",
    bio: "Gestionează deployment-ul pe Netlify, GitHub Actions și sincronizarea repository-ului.",
    initials: "M4",
    color: "bg-amber-600",
  },
];

const timeline = [
  { year: "2018", label: "Fondare", desc: "CapeGo ia naștere dintr-o pasiune comună pentru Cape Town și turismul autentic." },
  { year: "2020", label: "500+ turiști", desc: "Depășim pragul de 500 de vizitatori ghidați, extinzând oferta de trasee." },
  { year: "2022", label: "40 de țări", desc: "Clienți din peste 40 de țări aleg CapeGo pentru experiențele noastre unice." },
  { year: "2024", label: "240+ tururi", desc: "Lansăm catalogul complet de 240 de tururi curate, de la aventuri montane la tururi culturale." },
  { year: "2026", label: "Azi", desc: "Platforma digitală CapeGo — mai ușor ca niciodată să explorezi Cape Town." },
];

const faqs = [
  {
    question: "Ce face CapeGo diferit de alte agenții?",
    answer: "Fiecare tur este condus de localnici din Cape Town care cunosc locurile ascunse, poveștile și ritmul orașului — nu traseele standard din ghiduri.",
  },
  {
    question: "Pot fi personalizate tururile pentru grupul meu?",
    answer: "Da! Avem opțiuni flexibile pentru familii, cupluri, grupuri corporate sau solo-travellers. Contactați-ne și construim împreună itinerariul perfect.",
  },
  {
    question: "Tururile sunt potrivite pentru toate nivelurile fizice?",
    answer: "Absolut. Oferta noastră include tururi ușoare (plimbări urbane, vizite culturale) și aventuri solicitante (drumeții, coastă, surfing).",
  },
  {
    question: "Cum pot rezerva un tur?",
    answer: "Poți rezerva direct din pagina Tours sau ne poți scrie prin formularul de Contact. Răspundem în maximum 24 de ore.",
  },
];

function About() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="bg-black text-white">

      {/* HERO */}
      <section
        className="relative h-[60vh] min-h-[420px] flex items-end pb-16 px-6"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=1600')",
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <p className="font-mono-custom text-emerald-400 uppercase tracking-[0.25em] text-xs mb-3">
            Cine suntem
          </p>
          <h1 className="text-5xl md:text-7xl font-black font-serif-custom leading-none">
            Despre CapeGo
          </h1>
          <p className="mt-4 text-zinc-300 text-lg max-w-xl leading-relaxed">
            O echipă de localnici din Cape Town care transformă fiecare călătorie într-o amintire de neșters.
          </p>
        </div>
      </section>

      {/* MISIUNE + STATS */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="font-mono-custom text-emerald-400 uppercase tracking-widest text-xs mb-4">
            Misiunea noastră
          </p>
          <h2 className="text-4xl font-bold font-serif-custom mb-6 leading-tight">
            Conectăm călătorii cu<br />
            <span className="text-emerald-400">sufletul Cape Town-ului</span>
          </h2>
          <p className="text-zinc-400 leading-8 mb-4">
            CapeGo a fost fondat în 2018 de un grup de prieteni din Cape Town care credeau că turismul
            autentic înseamnă mai mult decât poze la obiective celebre. Înseamnă povești, oameni și
            locuri care rămân cu tine.
          </p>
          <p className="text-zinc-400 leading-8">
            De la prima drumeție pe Lion's Head până la miile de vizitatori ghidați din peste 40 de țări,
            ne-am menținut filosofia simplă: fiecare tur trebuie să fie unic și profund uman.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { value: "2018", label: "An fondare" },
            { value: "40+", label: "Țări reprezentate" },
            { value: "5 000+", label: "Turiști fericiți" },
            { value: "240+", label: "Tururi curate" },
          ].map((stat) => (
            <div key={stat.label} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between">
              <span className="text-4xl font-black text-emerald-400 font-serif-custom">{stat.value}</span>
              <span className="text-zinc-400 text-sm mt-2 font-mono-custom uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-zinc-950 border-y border-zinc-800 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="font-mono-custom text-emerald-400 uppercase tracking-widest text-xs mb-2 text-center">
            Evoluție
          </p>
          <h2 className="text-4xl font-bold text-center font-serif-custom mb-14">
            Povestea noastră în timp
          </h2>

          <div className="relative">
            <div className="absolute left-[22px] md:left-1/2 top-0 bottom-0 w-px bg-zinc-800 -translate-x-1/2" />
            <div className="flex flex-col gap-10">
              {timeline.map((item, i) => (
                <div key={item.year} className={`relative flex items-start gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-black border-2 border-emerald-500 flex items-center justify-center z-10 shrink-0">
                    <span className="text-emerald-400 text-xs font-mono-custom font-bold">{item.year.slice(-2)}</span>
                  </div>
                  <div className={`ml-14 md:ml-0 md:w-[45%] bg-zinc-900 border border-zinc-800 rounded-xl p-5 ${i % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}>
                    <span className="font-mono-custom text-emerald-400 text-xs uppercase tracking-widest">{item.year}</span>
                    <h3 className="font-bold text-lg mt-1 mb-2">{item.label}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ECHIPA */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="font-mono-custom text-emerald-400 uppercase tracking-widest text-xs mb-2 text-center">
          Echipa
        </p>
        <h2 className="text-4xl font-bold text-center font-serif-custom mb-14">
          Oamenii din spatele CapeGo
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((m) => (
            <div key={m.name} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col gap-4 hover:border-emerald-700 transition-colors">
              <div className={`w-14 h-14 rounded-full ${m.color} flex items-center justify-center text-white font-black text-xl font-serif-custom`}>
                {m.initials}
              </div>
              <div>
                <h3 className="font-bold text-lg">{m.name}</h3>
                <p className="font-mono-custom text-emerald-400 text-xs uppercase tracking-wider mt-0.5">{m.role}</p>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">{m.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-zinc-950 border-t border-zinc-800 py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="font-mono-custom text-emerald-400 uppercase tracking-widest text-xs mb-2 text-center">
            Întrebări
          </p>
          <h2 className="text-4xl font-bold text-center font-serif-custom mb-12">
            Întrebări frecvente
          </h2>
          <div className="flex flex-col gap-2">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-zinc-800 rounded-xl overflow-hidden">
                <button
                  className="w-full flex justify-between items-center text-left px-6 py-5 hover:bg-zinc-900 transition-colors"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <span className="font-medium text-white pr-4">{faq.question}</span>
                  <span className={`text-emerald-400 text-2xl font-light transition-transform duration-200 shrink-0 ${openIndex === i ? "rotate-45" : ""}`}>
                    +
                  </span>
                </button>
                {openIndex === i && (
                  <div className="px-6 pb-5 bg-zinc-950">
                    <p className="text-zinc-400 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default About;