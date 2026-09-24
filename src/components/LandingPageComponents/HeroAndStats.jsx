import React from "react";
import { FaArrowRight, FaPlay } from "react-icons/fa6";
import { GoPersonFill } from "react-icons/go";
import { HiUserGroup } from "react-icons/hi2";
import { FaCalendarAlt } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { BsTrophyFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const HeroAndStats = () => {
  const navigate =useNavigate()
  const handleGetStarted=()=>{
    navigate("/signup")
  }
  return (
    <div>
    <section className="relative overflow-hidden bg-blue-50">

      {/* Background Image */}
      <div
        className="
          absolute
          inset-0
          bg-cover
          bg-center
          bg-no-repeat
        "
        style={{
          backgroundImage: "url('/heroImage2.png')",
        }}
      />

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/40 lg:to-transparent" />

      {/* Blue Decorative Blur */}
      <div
        className="
          absolute
          -left-24
          top-20
          h-72
          w-72
          rounded-full
          bg-blue-400/10
          blur-3xl
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-0
          h-72
          w-72
          rounded-full
          bg-cyan-400/10
          blur-3xl
        "
      />

      {/* Hero Container */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[720px]
          max-w-7xl
          items-center
          px-5
          py-16
          sm:px-8
          lg:min-h-[calc(100vh-72px)]
          lg:px-8
          lg:py-20
        "
      >

        {/* Hero Content */}
        <div className="w-full max-w-2xl">

          {/* Eyebrow */}
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-blue-100
              bg-white/80
              px-3
              py-1.5
              shadow-sm
              backdrop-blur-sm
            "
          >
            <span className="h-2 w-2 rounded-full bg-green-500" />

            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-600 sm:text-xs">
              Play • Connect • Compete
            </span>
          </div>

          {/* Heading */}
          <h1
            className="
              mt-5
              max-w-2xl
              text-4xl
              font-black
              leading-[1.05]
              tracking-tight
              text-slate-900
              sm:text-5xl
              lg:text-6xl
              xl:text-7xl
            "
          >
            More than a game.

            <span
              className="
                mt-1
                block
                bg-gradient-to-r
                from-blue-600
                via-blue-500
                to-cyan-500
                bg-clip-text
                text-transparent
              "
            >
              It's a Community.
            </span>
          </h1>

          {/* Description */}
          <p
            className="
              mt-5
              max-w-xl
              text-sm
              leading-6
              text-slate-600
              sm:text-base
              sm:leading-7
            "
          >
            PlayNexa helps you find players, create teams, join matches,
            and participate in tournaments around you.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">

            <button
            onClick={handleGetStarted}
              className="
                group
                flex
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-blue-600
                px-6
                py-3
                text-sm
                font-bold
                text-white
                shadow-lg
                shadow-blue-200
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:bg-blue-700
                hover:shadow-xl
                hover:shadow-blue-200
                sm:px-7
              "
            >
              Get Started

              <FaArrowRight
                className="
                  text-xs
                  transition-transform
                  duration-200
                  group-hover:translate-x-1
                "
              />
            </button>

            <button
              className="
                flex
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-blue-200
                bg-white/80
                px-6
                py-3
                text-sm
                font-bold
                text-blue-600
                backdrop-blur-sm
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:border-blue-300
                hover:bg-white
                sm:px-7
              "
            >
              <FaPlay className="text-[10px]" />
              Explore Sports
            </button>

          </div>

          {/* Community */}
          <div
            className="
              mt-8
              flex
              flex-col
              sm:flex-row
              items-center
              gap-4
              rounded-2xl
              border
              border-white/70
              bg-white/60
              p-3
              shadow-sm
              backdrop-blur-sm
              sm:w-fit
              sm:pr-5
            "
          >

            {/* Avatars */}
            <div className="flex items-center">

              <img
                src="person.png"
                alt="Player"
                className="
                  h-9
                  w-9
                  rounded-full
                  border-2
                  border-white
                  object-cover
                  shadow-sm
                "
              />

              <img
                src="person.png"
                alt="Player"
                className="
                  -ml-3
                  h-9
                  w-9
                  rounded-full
                  border-2
                  border-white
                  object-cover
                  shadow-sm
                "
              />

              <img
                src="person.png"
                alt="Player"
                className="
                  -ml-3
                  h-9
                  w-9
                  rounded-full
                  border-2
                  border-white
                  object-cover
                  shadow-sm
                "
              />

              <img
                src="person.png"
                alt="Player"
                className="
                  -ml-3
                  h-9
                  w-9
                  rounded-full
                  border-2
                  border-white
                  object-cover
                  shadow-sm
                "
              />

              <div
                className="
                  -ml-3
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border-2
                  border-white
                  bg-blue-600
                  text-[10px]
                  font-bold
                  text-white
                  shadow-sm
                "
              >
                +1K
              </div>

            </div>

            {/* Community Text */}
            <div>
              <p className="text-xs font-bold text-slate-800 sm:text-sm">
                Join{" "}
                <span className="text-blue-600">
                  1200+
                </span>{" "}
                Active Players
              </p>

              <p className="mt-0.5 text-[10px] font-medium text-slate-500 sm:text-xs">
                Be part of something bigger
              </p>
            </div>

          </div>

        </div>


  

      </div>
    </section>


    
     
      <section className="relative z-10 w-[90%] max-w-7xl mx-auto -mt-10">
  <div className="overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-xl shadow-blue-100/40">
    <div className="grid grid-cols-2 lg:grid-cols-4">

      {/* Active Players */}
      <div className="group relative flex flex-col items-center justify-center px-5 py-8 md:py-10
        border-b border-r border-blue-100 lg:border-b-0
        transition-all duration-300 hover:bg-blue-50/50">

        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl
          bg-blue-100 text-blue-600
          transition-all duration-300
          group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
          <GoPersonFill className="text-3xl" />
        </div>

        <h3 className="text-2xl md:text-3xl font-black text-slate-900">
          12K<span className="text-blue-600">+</span>
        </h3>

        <p className="mt-1 text-sm font-semibold text-slate-500">
          Active Players
        </p>

        <span className="mt-3 h-1 w-8 rounded-full bg-blue-500
          transition-all duration-300 group-hover:w-14" />
      </div>

      {/* Teams Created */}
      <div className="group relative flex flex-col items-center justify-center px-5 py-8 md:py-10
        border-b border-blue-100 lg:border-b-0 lg:border-r
        transition-all duration-300 hover:bg-indigo-50/50">

        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl
          bg-indigo-100 text-indigo-600
          transition-all duration-300
          group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white">
          <HiUserGroup className="text-3xl" />
        </div>

        <h3 className="text-2xl md:text-3xl font-black text-slate-900">
          850<span className="text-indigo-600">+</span>
        </h3>

        <p className="mt-1 text-sm font-semibold text-slate-500">
          Teams Created
        </p>

        <span className="mt-3 h-1 w-8 rounded-full bg-indigo-500
          transition-all duration-300 group-hover:w-14" />
      </div>

      {/* Matches Played */}
      <div className="group relative flex flex-col items-center justify-center px-5 py-8 md:py-10
        border-r border-blue-100
        transition-all duration-300 hover:bg-cyan-50/50">

        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl
          bg-cyan-100 text-cyan-600
          transition-all duration-300
          group-hover:scale-110 group-hover:bg-cyan-600 group-hover:text-white">
          <FaCalendarDays className="text-3xl" />
        </div>

        <h3 className="text-2xl md:text-3xl font-black text-slate-900">
          1.2K<span className="text-cyan-600">+</span>
        </h3>

        <p className="mt-1 text-sm font-semibold text-slate-500">
          Matches Played
        </p>

        <span className="mt-3 h-1 w-8 rounded-full bg-cyan-500
          transition-all duration-300 group-hover:w-14" />
      </div>

      {/* Tournaments */}
      <div className="group relative flex flex-col items-center justify-center px-5 py-8 md:py-10
        transition-all duration-300 hover:bg-amber-50/50">

        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl
          bg-amber-100 text-amber-600
          transition-all duration-300
          group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white">
          <BsTrophyFill className="text-3xl" />
        </div>

        <h3 className="text-2xl md:text-3xl font-black text-slate-900">
          150<span className="text-amber-500">+</span>
        </h3>

        <p className="mt-1 text-sm font-semibold text-slate-500">
          Tournaments
        </p>

        <span className="mt-3 h-1 w-8 rounded-full bg-amber-500
          transition-all duration-300 group-hover:w-14" />
      </div>

    </div>
  </div>
</section>

    </div>
  )
}

export default HeroAndStats
