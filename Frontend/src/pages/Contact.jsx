
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Headphones,
  ArrowRight,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setStatus("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Frontend demo: no message is sent to a server.
    console.log("Contact form data:", formData);
    setStatus(
      "Your message has been validated. Connect a backend or email service to deliver it."
    );

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const contactItems = [
    {
      icon: Mail,
      title: "Email Us",
      detail: "Send us your questions or feedback.",
      value: "support@playnexa.com",
      href: "mailto:support@playnexa.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      detail: "Have a question? Let's talk.",
      value: "Add your support number",
      href: null,
    },
    {
      icon: MapPin,
      title: "Our Location",
      detail: "We are building a connected sports community.",
      value: "Add your office address",
      href: null,
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-blue-950 via-blue-800 to-cyan-600 px-5 py-20 text-white sm:py-28">
        <div className="absolute -right-20 -top-16 -z-10 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-16 -z-10 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl" />

        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold">
            <MessageCircle size={17} />
            We'd Love to Hear From You
          </span>

          <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-6xl">
            Get in Touch
            <span className="block text-cyan-300">
              With PlayNexa
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-blue-100 sm:text-lg">
            Have a question, suggestion, or feedback? We're here to
            help you connect with the PlayNexa sports community.
          </p>

          <Link
            to="/"
            className="mt-7 inline-flex items-center gap-2 font-semibold text-white transition hover:text-cyan-200"
          >
            Back to Home <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="px-5 pt-12 sm:pt-16">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          {contactItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                  <Icon size={24} />
                </div>

                <h2 className="mt-4 text-lg font-bold text-slate-900">
                  {item.title}
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {item.detail}
                </p>

                {item.href ? (
                  <a
                    href={item.href}
                    className="mt-4 inline-block break-words font-semibold text-blue-700 hover:text-cyan-600"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-4 text-sm font-semibold text-slate-700">
                    {item.value}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Form + Support Info */}
      <section className="px-5 py-14 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-5">

          {/* Left information panel */}
          <div className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-blue-800 to-cyan-600 p-8 text-white sm:p-10 lg:col-span-2">
            <div className="absolute -right-14 -top-10 -z-10 h-48 w-48 rounded-full bg-white/10" />

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
              <Headphones size={29} />
            </div>

            <h2 className="mt-7 text-3xl font-extrabold">
              Let's talk sports!
            </h2>

            <p className="mt-4 leading-7 text-blue-100">
              Whether you're a player, a team manager, or a sports
              enthusiast, your feedback can help us make PlayNexa better.
            </p>

            <div className="mt-9 space-y-5">
              <div className="flex items-start gap-3">
                <Mail className="mt-1 shrink-0 text-cyan-200" size={21} />
                <div>
                  <p className="font-semibold">General Enquiries</p>
                  <p className="mt-1 text-sm text-blue-100">
                    Questions about the platform
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MessageCircle className="mt-1 shrink-0 text-cyan-200" size={21} />
                <div>
                  <p className="font-semibold">Feedback & Suggestions</p>
                  <p className="mt-1 text-sm text-blue-100">
                    Share your ideas with us
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="mt-1 shrink-0 text-cyan-200" size={21} />
                <div>
                  <p className="font-semibold">Support</p>
                  <p className="mt-1 text-sm text-blue-100">
                    Send us a message anytime
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-white/20 pt-6">
              <p className="text-sm text-blue-100">
                PlayNexa
              </p>
              <p className="mt-1 font-bold tracking-wide">
                PLAY • CONNECT • COMPETE
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-10 lg:col-span-3">
            <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
              Send Us a Message
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Fill out the form below and let us know how we can help.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    maxLength={100}
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    maxLength={254}
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-slate-700 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                >
                  <option value="" disabled>
                    Select a subject
                  </option>
                  <option value="General Enquiry">General Enquiry</option>
                  <option value="Account Support">Account Support</option>
                  <option value="Player or Team Profile">Player or Team Profile</option>
                  <option value="Verification">Profile Verification</option>
                  <option value="Feedback">Feedback & Suggestions</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  minLength={10}
                  maxLength={2000}
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help..."
                  className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                />
                <p className="mt-1 text-right text-xs text-slate-400">
                  {formData.message.length}/2000
                </p>
              </div>

              {status && (
                <div
                  role="status"
                  className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-800"
                >
                  {status}
                </div>
              )}

              <button
                type="submit"
                className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-700 to-cyan-500 font-bold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0"
              >
                Send Message <Send size={18} />
              </button>

              <p className="text-center text-xs leading-5 text-slate-400">
                Your message is handled according to your application's
                privacy and data-handling policies.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-slate-950 px-5 py-12 text-center text-white">
        <h2 className="text-2xl font-extrabold">
          Be part of the PlayNexa community
        </h2>
        <p className="mt-3 text-slate-400">
          Connect with players. Discover teams. Keep playing.
        </p>
        <Link
          to="/signup"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-blue-800 transition hover:bg-cyan-50"
        >
          Join PlayNexa <ArrowRight size={18} />
        </Link>
      </section>
    </main>
  );
};

export default Contact;
