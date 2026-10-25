import React from "react";
import {
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaArrowRight,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white">

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.7fr_0.7fr_1.4fr]">

          {/* Brand */}
          <div>

            <div className="flex items-center gap-2">

              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  bg-gradient-to-br
                  from-blue-600
                  to-cyan-500
                  text-sm
                  font-black
                  text-white
                  shadow-sm
                  shadow-blue-200
                "
              >
                PN
              </div>

              <span className="text-xl font-black tracking-tight text-slate-900">
                Play<span className="text-blue-600">Nexa</span>
              </span>

            </div>

            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-500">
              Play • Connect • Compete.
              <br />
              A community built for sports lovers.
            </p>

            {/* Small Brand Badge */}
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />

              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
                Built for athletes
              </span>
            </div>

          </div>


          {/* Platform */}
          <div>

            <h3 className="text-sm font-bold text-slate-900">
              Platform
            </h3>

            <div className="mt-5 flex flex-col space-y-3 text-sm text-slate-500">

              <Link to="/home" className="cursor-pointer transition hover:text-blue-600">
                Home
              </Link>

              <Link to="/players" className="cursor-pointer transition hover:text-blue-600">
                Players
              </Link>

              <Link to="/teams" className="cursor-pointer transition hover:text-blue-600">
                Teams
              </Link>

              <Link to="/matches" className="cursor-pointer transition hover:text-blue-600">
                Matches
              </Link>

              <Link to="tournaments" className="cursor-pointer transition hover:text-blue-600">
                Tournaments
              </Link>

              <Link to="/leaderboard" className="cursor-pointer transition hover:text-blue-600">
                Leaderboard
              </Link>

            </div>

          </div>


          {/* Company */}
          <div>

            <h3 className="text-sm font-bold text-slate-900">
              Company
            </h3>

            <div className="mt-5 space-y-3 text-sm text-slate-500 flex flex-col">

              <Link to={'/about'} className="cursor-pointer transition hover:text-blue-600">
                About
              </Link>

              <Link to={"/contact"} className="cursor-pointer transition hover:text-blue-600">
                Contact
              </Link>

              <Link to={"/privacypolicy"} className="cursor-pointer transition hover:text-blue-600">
                Privacy Policy
              </Link>

              <Link to={"/termscondition"} className="cursor-pointer transition hover:text-blue-600">
                Terms & Conditions
              </Link>

            </div>

          </div>


          {/* Newsletter */}
          <div>

            <div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-5">

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                Stay Connected
              </p>

              <h3 className="mt-2 text-xl font-extrabold text-slate-900">
                Stay in the loop
              </h3>

              <p className="mt-2 text-sm leading-5 text-slate-500">
                Get the latest updates, matches, tournaments and events
                delivered to your inbox.
              </p>

              {/* Email Input */}
              <div className="mt-5 flex flex-col gap-2 sm:flex-row">

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="
                    min-w-0
                    flex-1
                    rounded-lg
                    border
                    border-blue-100
                    bg-white
                    px-4
                    py-2.5
                    text-sm
                    text-slate-700
                    outline-none
                    placeholder:text-slate-400
                    focus:border-blue-400
                    focus:ring-2
                    focus:ring-blue-100
                  "
                />

                <button
                  className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    rounded-lg
                    bg-blue-600
                    px-4
                    py-2.5
                    text-sm
                    font-bold
                    text-white
                    shadow-sm
                    shadow-blue-200
                    transition-all
                    hover:bg-blue-700
                  "
                >
                  Subscribe
                  <FaArrowRight className="text-xs" />
                </button>

              </div>

              <p className="mt-3 text-[10px] text-slate-400">
                No spam. Only sports updates and useful information.
              </p>

            </div>

          </div>

        </div>


        {/* Social Section */}
        <div className="mt-12 flex flex-col gap-5 border-t border-slate-100 pt-7 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <h3 className="text-sm font-bold text-slate-900">
              Follow Us
            </h3>

            <p className="mt-1 text-xs text-slate-400">
              Join the PlayNexa community.
            </p>
          </div>


          {/* Social Icons */}
          <div className="flex gap-2">

            <button
              aria-label="Instagram"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-lg
                border
                border-slate-200
                bg-white
                text-slate-500
                transition-all
                hover:border-pink-200
                hover:bg-pink-50
                hover:text-pink-500
              "
            >
              <FaInstagram />
            </button>

            <button
              aria-label="X"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-lg
                border
                border-slate-200
                bg-white
                text-slate-500
                transition-all
                hover:border-slate-300
                hover:bg-slate-900
                hover:text-white
              "
            >
              <FaXTwitter />
            </button>

            <button
              aria-label="LinkedIn"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-lg
                border
                border-slate-200
                bg-white
                text-slate-500
                transition-all
                hover:border-blue-200
                hover:bg-blue-50
                hover:text-blue-600
              "
            >
              <FaLinkedinIn />
            </button>

            <button
              aria-label="YouTube"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-lg
                border
                border-slate-200
                bg-white
                text-slate-500
                transition-all
                hover:border-red-200
                hover:bg-red-50
                hover:text-red-500
              "
            >
              <FaYoutube />
            </button>

          </div>

        </div>

      </div>


      {/* Bottom Bar */}
      <div className="border-t border-slate-200 bg-slate-50/70">

        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs sm:flex-row sm:items-center sm:justify-between lg:px-8">

          <p className="text-slate-400">
            © 2026 PlayNexa. All rights reserved.
          </p>

          {/* Bottom Right Text */}
          <p className="font-semibold text-slate-500">
            Made for sport lovers{" "}
            <span className="text-red-500">♥</span>
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
