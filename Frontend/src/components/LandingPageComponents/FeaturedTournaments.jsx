import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { tournaments } from "../../utils/data";
import {
  FaCalendarDays,
  FaUsers,
  FaArrowRight,
  FaTrophy,
} from "react-icons/fa6";

const FeaturedTournaments = () => {

  const [featuredTournaments, setFeaturedTournaments] = useState(tournaments.slice(0,3))
  const navigate =useNavigate()
  const handleView=()=>{
    navigate("/tournaments")
  }

  const handleViewDetails=(e)=>{
    navigate(`/tournaments/${e}`)
  }

 

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        {/* Header */}
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              Tournaments
            </p>

            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900">
              Featured Tournaments
            </h2>

            <p className="mt-2 max-w-xl text-sm text-slate-500">
              Discover exciting tournaments, compete with top teams, and
              showcase your skills.
            </p>
          </div>

          <button
          onClick={handleView}
            className="
              hidden sm:flex
              items-center gap-2
              text-sm font-semibold
              text-blue-600
              transition
              hover:text-blue-700
            "
          >
            View All
            <FaArrowRight className="text-xs" />
          </button>
        </div>

        {/* Main Tournament Section */}
        <div
          className="
            relative
            overflow-hidden
            rounded-2xl
            border
            border-blue-100
            bg-white
            p-4
            shadow-sm
            shadow-blue-100/50
          "
        >

          {/* Trophy Background */}
          <div
            className="
              pointer-events-none
              absolute
              inset-y-0
              right-0
              hidden
              w-[42%]
              md:w-[35%]
              lg:block
            "
          >
            <img
              src="https://th.bing.com/th/id/R.d0ca6765dc4a004f266d6ab5fd4fbbd4?rik=f%2bIEhSQRup%2fNmQ&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2ftrophy-clipart-transparent%2ftrophy-clipart-transparent-24.png&ehk=m2ma2m9QhXgBU6gZ30X6yHL3fiaAkWgG1RUj%2bkbxoVg%3d&risl=&pid=ImgRaw&r=0"
              alt="Trophy"
              className="
                h-full
                w-full
                object-contain
                object-center
              "
            />

            {/* Soft White / Blue Gradient */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-white
                via-white/80
                to-white/20
              "
            />

            {/* Blue Tint */}
            <div className="absolute inset-0 bg-blue-50/20" />
          </div>

          {/* Left Content */}
          <div className="relative z-10 w-full lg:w-[68%]">

            {/* Section Mini Header */}
            <div className="mb-5 flex items-center justify-between">

              <div className="flex items-center gap-3">

                <div
                  className="
                    flex
                    h-9 w-9
                    items-center justify-center
                    rounded-lg
                    bg-blue-50
                    text-blue-600
                  "
                >
                  <FaTrophy className="text-sm" />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-500">
                    Don't Miss Out
                  </p>

                  <h3 className="mt-0.5 text-xl font-bold text-slate-900">
                    Join a Tournament
                  </h3>
                </div>

              </div>

              <span
                className="
                  rounded-full
                  border border-blue-100
                  bg-blue-50
                  px-3 py-1
                  text-[10px]
                  font-semibold
                  text-blue-600
                "
              >
                Upcoming
              </span>

            </div>

            {/* Tournament Cards */}
            <div className="space-y-3">

              {featuredTournaments.map((tournament) => (
                <div
                  key={tournament.name}
                  className="
                    group
                    rounded-xl
                    border border-slate-200
                    bg-white
                    p-3
                    shadow-sm
                    transition-all duration-200
                    hover:-translate-y-0.5
                    hover:border-blue-200
                    hover:shadow-md
                    hover:shadow-blue-100/50
                  "
                >

                  {/* Main Card Row */}
                  <div className="flex items-center gap-3 sm:gap-4">

                    {/* Tournament Image */}
                    <div
                      className="
                        h-16 w-16
                        shrink-0
                        overflow-hidden
                        rounded-lg
                        border border-slate-100
                        bg-slate-50
                        sm:h-20 sm:w-20
                      "
                    >
                      <img
                        src={tournament.image}
                        alt={tournament.name}
                        className="
                          h-full
                          w-full
                          object-cover
                          transition-transform
                          duration-300
                          group-hover:scale-105
                        "
                      />
                    </div>

                    {/* Tournament Information */}
                    <div className="min-w-0 flex-1">

                      {/* Tournament Name */}
                      <h4
                        className="
                          truncate
                          text-sm
                          font-bold
                          text-slate-900
                          sm:text-base
                        "
                      >
                        {tournament.name}
                      </h4>

                      {/* Sport Badge */}
                      <div className="mt-1.5">
                        <span
                          className={`
                            inline-flex
                            items-center
                            gap-1.5
                            rounded-md
                            border
                            px-2 py-1
                            text-[9px]
                            font-bold
                            uppercase
                            tracking-wide
                            ${tournament.badge}
                          `}
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${tournament.dot}`}
                          />

                          {tournament.sport}
                        </span>
                      </div>

                      {/* Teams */}
                      <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-500">
                        <FaUsers className="text-[10px] text-blue-500" />

                        <span>{tournament.teams} Teams</span>
                      </div>

                    </div>

                    {/* Desktop Duration */}
                    <div
                      className="
                        hidden
                        shrink-0
                        border-l
                        border-slate-100
                        pl-4
                        sm:block
                      "
                    >
                      

                      <div className="flex items-start gap-1.5">

                        <FaCalendarDays className="mt-0.5 text-[10px] text-blue-500" />

                        <div className="text-xs font-semibold text-slate-700">
                          <p>{tournament.startDate}</p>

                          <p className="text-[10px] font-medium text-slate-400">
                            to
                          </p>

                          <p>{tournament.endDate}</p>
                        </div>

                      </div>
                    </div>

                    {/* Arrow */}
                    <button
                    onClick={()=>{handleViewDetails(tournament.id)}}
                      className="
                        flex
                        h-8 w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        border
                        border-slate-200
                        bg-white
                        text-slate-400
                        transition
                        hover:border-blue-500
                        hover:bg-blue-600
                        hover:text-white
                      "
                    >
                      <FaArrowRight className="text-[10px]" />
                    </button>

                  </div>

                  {/* Mobile Duration */}
                  <div
                    className="
                      mt-3
                      flex
                      items-start
                      gap-2
                      border-t
                      border-slate-100
                      pt-3
                      sm:hidden
                    "
                  >

                    <div
                      className="
                        flex
                        h-7 w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-md
                        bg-blue-50
                        text-blue-500
                      "
                    >
                      <FaCalendarDays className="text-[10px]" />
                    </div>

                    <div>
                     

                      <div
                        className="
                          mt-0.5
                          flex
                          flex-col
                          text-xs
                          font-semibold
                          text-slate-700
                        "
                      >
                        <span>{tournament.startDate}</span>

                        <span
                          className="
                            text-[9px]
                            font-medium
                            text-slate-400
                          "
                        >
                          to
                        </span>

                        <span>{tournament.endDate}</span>
                      </div>
                    </div>

                  </div>

                </div>
              ))}

            </div>

          </div>
        </div>

        {/* Mobile View All */}
        <div className="mt-6 flex justify-center sm:hidden">
          <button
          onClick={handleView}
            className="
              flex
              items-center
              gap-2
              rounded-lg
              border
              border-blue-200
              bg-white
              px-5
              py-2.5
              text-sm
              font-semibold
              text-blue-600
              transition
              hover:bg-blue-50
            "
          >
            View All
            <FaArrowRight className="text-xs" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default FeaturedTournaments;
