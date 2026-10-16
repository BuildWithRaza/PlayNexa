import React from "react";
import { FaStar, FaTrophy } from "react-icons/fa6";
import { players } from "../utils/data";
import { useNavigate } from "react-router-dom";


const Leaderboard = ({page}) => {
 
  const navigate = useNavigate()

  let sortedPlayers = [...players].sort(
  (a, b) => Number(b.rating) - Number(a.rating)
);

const handleView =()=>{
  navigate('/leaderboard')
}

if(page==="Landing"){
  sortedPlayers=sortedPlayers.slice(0,5)
}



  const sportStyles = {
    Football: "border-blue-200 bg-blue-50 text-blue-600",
    Cricket: "border-green-200 bg-green-50 text-green-600",
    Tennis: "border-purple-200 bg-purple-50 text-purple-600",
    Basketball: "border-orange-200 bg-orange-50 text-orange-600",
  };

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        {/* Header */}
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              Leaderboard
            </p>

            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900">
              Top Players
            </h2>

            <p className="mt-2 max-w-xl text-sm text-slate-500">
              See who's leading the community and making their mark across
              different sports.
            </p>
          </div>

          {page==="Landing" && <button onClick={handleView} className="hidden text-sm font-semibold text-blue-600 transition hover:text-blue-700 sm:block">
            View Full Leaderboard →
          </button>}

         
        </div>

        {/* Leaderboard */}
        <div className="overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm shadow-blue-100/40">

          {/* Table Header */}
          <div
            className="
              hidden
              grid-cols-[80px_1.5fr_1fr_1fr_120px]
              items-center
              gap-4
              border-b
              border-blue-100
              bg-blue-50/60
              px-6
              py-4
              text-[10px]
              font-bold
              uppercase
              tracking-wider
              text-slate-500
              sm:grid
            "
          >
            <span># Rank</span>
            <span>Player</span>
            <span>Sport</span>
            <span>Points</span>
            <span>Rating</span>
          </div>

          {/* Players */}
          <div>
            {sortedPlayers.map((player,index) => (
              <div
                key={player.name}
                className="
                  group
                  border-b
                  border-slate-100
                  px-4
                  py-4
                  transition
                  last:border-b-0
                  hover:bg-blue-50/40
                  sm:px-6
                "
              >

                {/* Desktop */}
                <div
                  className="
                    hidden
                    grid-cols-[80px_1.5fr_1fr_1fr_120px]
                    items-center
                    gap-4
                    sm:grid
                  "
                >

                  {/* Rank */}
                  <div>
                    {index+1 <= 3 ? (
                      <div
                        className={`
                          flex
                          h-9 w-9
                          items-center
                          justify-center
                          rounded-full
                          text-sm
                          font-black
                          ${
                            index+1 === 1
                              ? "bg-amber-100 text-amber-600"
                              : index+1 === 2
                              ? "bg-slate-100 text-slate-600"
                              : "bg-orange-100 text-orange-600"
                          }
                        `}
                      >
                        {index+1 === 1 ? (
                          <FaTrophy className="text-xs" />
                        ) : (
                          index+1
                        )}
                      </div>
                    ) : (
                      <span className="pl-2 text-sm font-bold text-slate-400">
                        #{index+1}
                      </span>
                    )}
                  </div>

                  {/* Player */}
                  <div className="flex items-center gap-3">

                    <img
                      src={player.profileImage}
                      alt={player.name}
                      className="
                        h-11
                        w-11
                        rounded-full
                        border-2
                        border-white
                        object-cover
                        shadow-sm
                      "
                    />

                    <h3 className="text-sm font-bold text-slate-900">
                      {player.name}
                    </h3>

                  </div>

                  {/* Sport */}
                  <div>
                    <span
                      className={`
                        inline-flex
                        rounded-md
                        border
                        px-2.5
                        py-1
                        text-[10px]
                        font-bold
                        ${sportStyles[player.sport]}
                      `}
                    >
                      {player.sport}
                    </span>
                  </div>

                  {/* Points */}
                  <div>
                    <span className="text-sm font-black text-slate-800">
                      {Math.ceil((player.rating)*500-2*index)}
                    </span>

                    <p className="mt-0.5 text-[10px] text-slate-400">
                      points
                    </p>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1.5">
                    <FaStar className="text-xs text-amber-400" />

                    <span className="text-sm font-bold text-slate-800">
                      {player.rating}
                    </span>
                  </div>

                </div>

                {/* Mobile */}
                <div className="flex items-center gap-3 sm:hidden">

                  {/* Rank */}
                  <div className="shrink-0">
                    {index+1 <= 3 ? (
                      <div
                        className={`
                          flex
                          h-8 w-8
                          items-center
                          justify-center
                          rounded-full
                          text-xs
                          font-black
                          ${
                            index+1 === 1
                              ? "bg-amber-100 text-amber-600"
                              : player.rank === 2
                              ? "bg-slate-100 text-slate-600"
                              : "bg-orange-100 text-orange-600"
                          }
                        `}
                      >
                        {index+1 === 1 ? (
                          <FaTrophy className="text-[10px]" />
                        ) : (
                          index+1
                        )}
                      </div>
                    ) : (
                      <span className="text-xs font-bold text-slate-400">
                        #{index+1}
                      </span>
                    )}
                  </div>

                  {/* Player Image */}
                  <img
                    src={player.profileImage}
                    alt={player.name}
                    className="
                      h-11
                      w-11
                      shrink-0
                      rounded-full
                      border-2
                      border-white
                      object-cover
                      shadow-sm
                    "
                  />

                  {/* Player Details */}
                  <div className="min-w-0 flex-1">

                    <h3 className="truncate text-sm font-bold text-slate-900">
                      {player.name}
                    </h3>

                    <div className="mt-1 flex items-center gap-2">

                      {/* Sport Badge */}
                      <span
                        className={`
                          rounded-md
                          border
                          px-2
                          py-0.5
                          text-[9px]
                          font-bold
                          ${sportStyles[player.sport]}
                        `}
                      >
                        {player.sport}
                      </span>

                      <span className="text-[10px] text-slate-400">
                        {Math.ceil((player.rating)*500-2*index)} pts
                      </span>

                    </div>

                  </div>

                  {/* Rating */}
                  <div className="flex shrink-0 items-center gap-1">
                    <FaStar className="text-[10px] text-amber-400" />

                    <span className="text-xs font-bold text-slate-700">
                      {player.rating}
                    </span>
                  </div>

                </div>
                        
              </div>

             
            ))}
          </div>

        </div>

        {/* Mobile Button */}
        <div className="mt-6 flex justify-center sm:hidden">
          <button
            className="
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
            View Full Leaderboard
          </button>
        </div>

      </div>
    </section>
  );
};

export default Leaderboard;
 