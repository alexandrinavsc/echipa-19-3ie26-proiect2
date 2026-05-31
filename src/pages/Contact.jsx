import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const SERVICE_ID = "SERVICE_ID";
  const TEMPLATE_ID = "TEMPLATE_ID";
  const PUBLIC_KEY = "PUBLIC_KEY";

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (status.message) {
      setStatus({ type: "", message: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setStatus({
        type: "error",
        message: "Please fill in all required fields.",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || "New message from CapeGo contact form",
          message: formData.message,
        },
        PUBLIC_KEY
      );

      setStatus({
        type: "success",
        message: "Thanks! Your message has been sent successfully.",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);

      setStatus({
        type: "error",
        message: "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-7xl px-6 pb-10 pt-16 md:pb-14 md:pt-24">
        <h1 className="mb-4 text-4xl font-bold md:text-6xl">Contact</h1>

        <p className="max-w-2xl text-lg text-gray-400">
          Got a question about a tour, a custom trip, or anything else? Drop us
          a line and we'll get back to you within 24 hours.
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 pb-20 lg:grid-cols-3">
        <div className="space-y-8 lg:col-span-1">
          <div>
            <h2 className="mb-6 text-2xl font-bold">Get in touch</h2>

            <p className="leading-relaxed text-gray-400">
              Whether you're planning your first trip with us or you're a
              returning traveler, we're here to help every step of the way.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-gray-800 bg-gray-900">
                <svg
                  className="h-5 w-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>

              <div>
                <p className="mb-1 text-sm uppercase tracking-wider text-gray-500">
                  Email
                </p>

                <a
                  href="mailto:hello@capego.com"
                  className="text-white transition-colors hover:text-gray-300"
                >
                  hello@capego.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-gray-800 bg-gray-900">
                <svg
                  className="h-5 w-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.5 4.5a1 1 0 01-.5 1.21l-2.26 1.13a11 11 0 005.52 5.52l1.13-2.26a1 1 0 011.21-.5l4.5 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.72 21 3 14.28 3 6V5z"
                  />
                </svg>
              </div>

              <div>
                <p className="mb-1 text-sm uppercase tracking-wider text-gray-500">
                  Phone
                </p>

                <a
                  href="tel:+40256123456"
                  className="text-white transition-colors hover:text-gray-300"
                >
                  +40 256 123 456
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-gray-800 bg-gray-900">
                <svg
                  className="h-5 w-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>

              <div>
                <p className="mb-1 text-sm uppercase tracking-wider text-gray-500">
                  Address
                </p>

                <p className="text-white">
                  Piața Victoriei 2
                  <br />
                  Timișoara, România
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-gray-800 bg-gray-900">
                <svg
                  className="h-5 w-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              <div>
                <p className="mb-1 text-sm uppercase tracking-wider text-gray-500">
                  Hours
                </p>

                <p className="text-white">
                  Mon – Fri: 9:00 – 18:00
                  <br />
                  Sat: 10:00 – 14:00
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-gray-800 bg-gray-950 p-6 md:p-10"
          >
            <h2 className="mb-6 text-2xl font-bold">Send us a message</h2>

            <div className="space-y-5">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Name <span className="text-red-400">*</span>
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full rounded-lg border border-gray-800 bg-black px-4 py-3 text-white placeholder-gray-600 transition-colors focus:border-white focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Email <span className="text-red-400">*</span>
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-gray-800 bg-black px-4 py-3 text-white placeholder-gray-600 transition-colors focus:border-white focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Subject
                </label>

                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className="w-full rounded-lg border border-gray-800 bg-black px-4 py-3 text-white placeholder-gray-600 transition-colors focus:border-white focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Message <span className="text-red-400">*</span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  placeholder="Tell us a bit about your trip..."
                  className="w-full resize-none rounded-lg border border-gray-800 bg-black px-4 py-3 text-white placeholder-gray-600 transition-colors focus:border-white focus:outline-none"
                />
              </div>

              {status.message && (
                <div
                  className={`rounded-lg border p-4 text-sm ${
                    status.type === "success"
                      ? "border-green-800 bg-green-950/40 text-green-300"
                      : "border-red-800 bg-red-950/40 text-red-300"
                  }`}
                >
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-lg bg-white px-8 py-3 font-semibold text-black transition-colors hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-60 md:w-auto"
              >
                {isSubmitting ? "Sending..." : "Send message"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;