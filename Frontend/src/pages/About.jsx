
import React from "react";
import { Link } from "react-router-dom";
import {
  Target,
  Users,
  Trophy,
  ShieldCheck,
  Zap,
  Globe,
  ArrowRight,
  Heart,
} from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Users,
      title: "Connect Players & Teams",
      description:
        "Discover players, connect with teams, and build meaningful sports connections.",
    },
    {
      icon: Trophy,
      title: "Showcase Your Talent",
      description:
        "Create your sports profile and highlight your skills, achievements, and performance.",
    },
    {
      icon: ShieldCheck,
      title: "Trusted Profiles",
      description:
        "Our verification feature helps users identify profiles that have been reviewed.",
    },
    {
      icon: Zap,
      title: "Made for Sports",
      description:
        "Enjoy a dedicated platform designed to bring sports profiles and communities together.",
    },
    {
      icon: Globe,
      title: "Grow Your Network",
      description:
        "Expand your reach and discover new opportunities in the sports community.",
    },
    {
      icon: Heart,
      title: "Built for Passion",
      description:
        "Whether you play, coach, or manage a team, your passion for sports belongs here.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-blue-950 via-blue-800 to-cyan-600 px-5 py-24 text-white sm:py-32">
        <div className="absolute -right-20 -top-20 -z-10 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-20 -z-10 h-80 w-80 rounded-full bg-blue-400/20 blur-3xl" />

        <div className="mx-auto max-w-5xl text-center">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur">
            PlayNexa • Play. Connect. Compete.
          </span>

          <h1 className="mt-7 text-4xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Where Sports
            <span className="block text-cyan-300">
              Meet Opportunity
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-blue-100 sm:text-lg">
            PlayNexa brings players and teams together in one place.
            Create your profile, showcase your talent, discover teams,
            and become part of a growing sports community.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/signup"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 font-bold text-blue-800 shadow-lg transition hover:-translate-y-1 hover:bg-cyan-50"
            >
              Join PlayNexa <ArrowRight size={19} />
            </Link>

            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 font-semibold text-white transition hover:bg-white/20"
            >
              Explore Platform
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-5 py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              About PlayNexa
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
              One platform.
              <span className="block text-blue-600">
                Endless possibilities.
              </span>
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              PlayNexa is a sports networking platform built to help
              players and teams create their digital presence and
              discover each other more easily.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              We believe that talent deserves to be seen and that
              connecting the right people can open new doors in sports.
              Our goal is to make discovering talent, managing sports
              profiles, and building connections simpler.
            </p>

            <div className="mt-8 flex items-start gap-4 rounded-2xl border border-blue-100 bg-blue-50 p-5">
              <div className="rounded-xl bg-blue-600 p-3 text-white">
                <Target size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">
                  Our Mission
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  To make sports connections more accessible and help
                  players and teams showcase their potential.
                </p>
              </div>
            </div>
          </div>

          {/* Brand Visual */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-blue-200 to-cyan-100 blur-xl opacity-70" />

            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 p-8 text-white shadow-xl sm:p-12">
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white text-3xl font-black text-blue-700 shadow-xl">
                PN
              </div>

              <p className="mt-10 text-sm font-bold uppercase tracking-[0.2em] text-cyan-200">
                Our Philosophy
              </p>

              <h3 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">
                Play with passion.
                <br />
                Connect with purpose.
                <br />
                Compete with confidence.
              </h3>

              <div className="mt-8 h-1.5 w-24 rounded-full bg-cyan-300" />

              <p className="mt-6 max-w-sm leading-7 text-blue-100">
                Every player has a story. Every team has a vision.
                PlayNexa helps bring them into the same community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              What We Offer
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Everything starts with a connection
            </h2>

            <p className="mt-4 leading-7 text-slate-500">
              Tools and features designed to help you build your
              presence and connect with the sports community.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className="group rounded-2xl border border-slate-100 bg-slate-50 p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-blue-100/60"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-200 transition group-hover:scale-110">
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-slate-900">
                    {feature.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 p-8 text-center sm:p-14">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-200">
            <Trophy size={30} />
          </div>

          <h2 className="mt-6 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Our Vision for the Future
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600">
            We envision a connected sports ecosystem where talent can
            be discovered, teams can build stronger communities, and
            opportunities are easier to find. We want PlayNexa to be
            a place where your next sporting connection begins.
          </p>

          <Link
            to="/signup"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-700 px-7 py-3.5 font-bold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-800"
          >
            Become Part of PlayNexa <ArrowRight size={19} />
          </Link>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-slate-950 px-5 py-14 text-center text-white">
        <h2 className="text-2xl font-extrabold sm:text-3xl">
          Your game. Your team. Your community.
        </h2>

        <p className="mt-3 text-slate-400">
          Start your PlayNexa journey today.
        </p>

        <Link
          to="/signup"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-3.5 font-bold text-white transition hover:brightness-110"
        >
          Get Started <ArrowRight size={18} />
        </Link>
      </section>
    </main>
  );
};

export default About;
