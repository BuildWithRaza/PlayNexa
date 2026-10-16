import React from "react";
import { FaStar, FaLocationDot, FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { players } from "../../utils/data";

const FeaturedPlayers = () => {
  const navigate =useNavigate()
  const handleView=()=>{
    navigate("/players")
  }
  const handleViewProfile=(e)=>{
    navigate(`/players/${e}`)
  }
  let featuredPlayers;
  if(players.length>4){  
    featuredPlayers=players.slice(0,4);
  }
  else{
    featuredPlayers=players;
  }


  const sportStyles = {
    Football: {
      badge: "border-blue-200 bg-blue-50 text-blue-600",
      dot: "bg-blue-500",
    },
    Cricket: {
      badge: "border-green-200 bg-green-50 text-green-600",
      dot: "bg-green-500",
    },
    Basketball: {
      badge: "border-orange-200 bg-orange-50 text-orange-600",
      dot: "bg-orange-500",
    },
    Tennis: {
      badge: "border-purple-200 bg-purple-50 text-purple-600",
      dot: "bg-purple-500",
    },
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-14">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        {/* Header */}
        <div className="flex items-end justify-between border-b border-slate-100 pb-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              Community
            </p>

            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900">
              Featured Players
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Meet players from different sports and communities.
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

        {/* Players */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {featuredPlayers.map((player) => {
            const sport = sportStyles[player.sport] || {
              badge: "border-slate-200 bg-slate-50 text-slate-600",
              dot: "bg-slate-500",
            };

            return (
              <div
                key={player.name}
                className="
                  group
                  rounded-xl
                  border border-slate-200
                  bg-white
                  p-4
                  transition-all duration-200
                  hover:-translate-y-1
                  hover:border-blue-200
                  hover:shadow-md
                  hover:shadow-blue-100/40
                "
              >

                {/* Player Main Info */}
                <div className="flex items-center gap-4">

                  {/* Photo */}
                  <div
                    className="
                      shrink-0
                      rounded-full
                      border-2 border-blue-100
                      bg-blue-50
                      p-1
                      transition-transform duration-300
                      group-hover:scale-105
                    "
                  >
                    <img
                      src={player.image}
                      alt={player.name}
                      className="
                        h-20 w-20
                        rounded-full
                        object-cover
                      "
                    />
                  </div>

                  {/* Details */}
                  <div className="min-w-0 flex-1">

                    {/* Name */}
                    <h3 className="truncate text-base font-bold text-slate-900">
                      {player.name}
                    </h3>

                    {/* Position */}
                    <p className="mt-1 text-xs font-medium text-slate-500">
                      {player.position}
                    </p>

                    {/* Sport Badge */}
                    <div className="mt-2">
                      <span
                        className={`
                          inline-flex items-center gap-1.5
                          rounded-md
                          border
                          px-2 py-1
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-wide
                          ${sport.badge}
                        `}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${sport.dot}`}
                        />

                        {player.sport}
                      </span>
                    </div>

                    {/* Rating + Location */}
                    <div className="mt-2 flex items-center gap-3">

                      <div className="flex items-center gap-1">
                        <FaStar className="text-[10px] text-amber-500" />

                        <span className="text-xs font-bold text-slate-600">
                          {player.rating}
                        </span>
                      </div>

                      <div className="flex items-center gap-1 text-xs text-slate-400">
                        <FaLocationDot className="text-[10px] text-blue-500" />
                        {player.location}
                      </div>

                    </div>

                  </div>

                </div>

                {/* Divider */}
                <div className="my-4 border-t border-slate-100" />

                {/* Button */}
                <button
                onClick={()=>{
                  handleViewProfile(player.id)
                }}
                  className="

                    w-full
                    rounded-lg
                    border border-blue-200
                    bg-white
                    py-2
                    text-sm font-semibold
                    text-blue-600
                    transition-all duration-200
                    hover:border-blue-600
                    hover:bg-blue-600
                    hover:text-white
                  "
                >
                  View Profile
                </button>

              </div>
            );
          })}

        </div>

        {/* Mobile View All */}
        <div className="mt-6 flex justify-center sm:hidden">
          <button
            className="
              flex items-center gap-2
              rounded-lg
              border border-blue-200
              px-5 py-2.5
              text-sm font-semibold
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

export default FeaturedPlayers;
