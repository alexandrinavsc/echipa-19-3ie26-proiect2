import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Reseteaza statusul cand userul incepe sa scrie din nou
    if (status.message) setStatus({ type: "", message: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validare simpla
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ type: "error", message: "Please fill in all required fields." });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({ type: "error", message: "Please enter a valid email address." });
      return;
    }

    setIsSubmitting(true);

    // Simulare trimitere (poti inlocui cu un fetch catre Strapi/backend)
    setTimeout(() => {
      setStatus({
        type: "success",
        message: "Thanks! Your message has been sent. We'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero / Header */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-10 md:pt-24 md:pb-14">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact</h1>
        <p className="text-gray-400 text-lg max-w-2xl">
          Got a question about a tour, a custom trip, or anything else? Drop us a line
          and we'll get back to you within 24 hours.
        </p>
      </section>

      {/* Grid: info + formular */}
      <section className="max-w-7xl mx-auto px-6 pb-20 grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* Info contact - 1 coloana */}
        <div className="lg:col-span-1 space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-6">Get in touch</h2>
            <p className="text-gray-400 leading-relaxed">
              Whether you're planning your first trip with us or you're a returning
              traveler, we're here to help every step of the way.
            </p>
          </div>

          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Email</p>
                <a href="mailto:hello@capego.com" className="text-white hover:text-gray-300 transition-colors">
                  hello@capego.com
                </a>
              </div>
            </div>

            {/* Telefon */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.5 4.5a1 1 0 01-.5 1.21l-2.26 1.13a11 11 0 005.52 5.52l1.13-2.26a1 1 0 011.21-.5l4.5 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.72 21 3 14.28 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Phone</p>
                <a href="tel:+40256123456" className="text-white hover:text-gray-300 transition-colors">
                  +40 256 123 456
                </a>
              </div>
            </div>

            {/* Adresa */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Address</p>
                <p className="text-white">
                  Piața Victoriei 2<br />
                  Timișoara, România
                </p>
              </div>
            </div>

            {/* Program */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Hours</p>
                <p className="text-white">
                  Mon – Fri: 9:00 – 18:00<br />
                  Sat: 10:00 – 14:00
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Formular - 2 coloane */}
        <div className="lg:col-span-2">
          <div className="bg-gray-950 border border-gray-800 rounded-2xl p-6 md:p-10">
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>

            <div className="space-y-5">
              {/* Name + Email row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-white transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  placeholder="Tell us a bit about your trip..."
                  className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-white transition-colors resize-none"
                />
              </div>

              {/* Mesaj de status */}
              {status.message && (
                <div
                  className={`p-4 rounded-lg border text-sm ${
                    status.type === "success"
                      ? "bg-green-950/40 border-green-800 text-green-300"
                      : "bg-red-950/40 border-red-800 text-red-300"
                  }`}
                >
                  {status.message}
                </div>
              )}

              {/* Buton submit */}
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full md:w-auto px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send message"}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
