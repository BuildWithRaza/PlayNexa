import React from 'react'
import {
  FaCalendarDays,
  FaClock,
  FaLocationDot,
  FaArrowRight,
} from "react-icons/fa6";

const Matches = () => {
      const matches = [
    {
      id: 1,
      sport: "Football",
      type: "team",
      date: "24 Sep 2026",
      time: "6:30 PM",
      location: "Jawaharlal Nehru Stadium, Delhi",
      team1: {
        name: "Delhi Capitals",
        logo:
          "https://static.vecteezy.com/system/resources/previews/059/494/378/non_2x/delhi-capitals-original-ipl-team-official-logo-premium-design-for-digital-download-free-vector.jpg",
      },
      team2: {
        name: "Mumbai Strikers",
        logo:
          "https://i.pinimg.com/originals/3a/54/40/3a544070d9c5e75d6795f39dfa295db5.jpg",
      },
    },

    {
      id: 2,
      sport: "Cricket",
      type: "team",
      date: "26 Sep 2026",
      time: "4:00 PM",
      location: "Ekana Cricket Stadium, Lucknow",
      team1: {
        name: "UP Warriors",
        logo:
          "https://www.deccanchronicle.com/h-upload/2025/11/28/1983729-up-warriorz.webp",
      },
      team2: {
        name: "Royal Challengers Bengaluru",
        logo:
          "https://1000logos.net/wp-content/uploads/2024/03/Royal-Challengers-Bengaluru-Logo-2020.png",
      },
    },

    {
      id: 3,
      sport: "Tennis",
      type: "player",
      date: "28 Sep 2026",
      time: "5:30 PM",
      location: "DLTA Complex, Delhi",
      player1: {
        name: "Rahul Sharma",
        image:
          "https://img.freepik.com/premium-photo/handsome-soccer-player-with-ball-hand-isolated_118124-101041.jpg",
      },
      player2: {
        name: "Sneha Verma",
        image:
          "https://img.freepik.com/premium-photo/studioenhanced-precision-striking-young-tennis-player_997585-1.jpg?w=2000",
      },
    },

    {
      id: 4,
      sport: "Basketball",
      type: "team",
      date: "30 Sep 2026",
      time: "7:00 PM",
      location: "NSCI Dome, Mumbai",
      team1: {
        name: "Mumbai Strikers",
        logo:
          "https://i.pinimg.com/originals/3a/54/40/3a544070d9c5e75d6795f39dfa295db5.jpg",
      },
      team2: {
        name: "Delhi Hoopers",
        logo:
          "https://static.vecteezy.com/system/resources/previews/059/494/378/non_2x/delhi-capitals-original-ipl-team-official-logo-premium-design-for-digital-download-free-vector.jpg",
      },
    },
  ];

  const sportStyles = {
    Football: {
      badge: "border-blue-200 bg-blue-50 text-blue-600",
      dot: "bg-blue-500",
    },

    Cricket: {
      badge: "border-green-200 bg-green-50 text-green-600",
      dot: "bg-green-500",
    },

    Tennis: {
      badge: "border-purple-200 bg-purple-50 text-purple-600",
      dot: "bg-purple-500",
    },

    Basketball: {
      badge: "border-orange-200 bg-orange-50 text-orange-600",
      dot: "bg-orange-500",
    },
  };
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-14">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
    
            {/* Header */}
            <div className="flex items-end justify-between border-b border-blue-100 pb-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                  Matches
                </p>
    
                <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900">
                  Upcoming Matches
                </h2>
    
                <p className="mt-2 text-sm text-slate-500">
                  Check out upcoming games and see who is playing.
                </p>
              </div>
    
              
            </div>
    
            {/* Matches */}
            <div className="mt-8 grid gap-5 lg:grid-cols-2">
    
              {matches.map((match) => {
                const sport = sportStyles[match.sport];
    
                return (
                  <div
                    key={match.id}
                    className="
                      rounded-xl
                      border border-blue-100
                      bg-white
                      p-5
                      shadow-sm
                      transition-all duration-200
                      hover:-translate-y-1
                      hover:border-blue-200
                      hover:shadow-md
                      hover:shadow-blue-100/50
                    "
                  >
    
                    {/* Top */}
                    <div className="flex items-center justify-between">
    
                      {/* Sport Badge */}
                      <span
                        className={`
                          inline-flex items-center gap-1.5
                          rounded-md
                          border
                          px-2.5 py-1
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
    
                        {match.sport}
                      </span>
    
                      <span className="text-xs font-semibold text-slate-400">
                        Upcoming
                      </span>
    
                    </div>
    
                    {/* Participants */}
                    <div className="mt-7 flex items-center justify-center">
    
                      {/* Participant 1 */}
                      <div className="flex w-[40%] flex-col items-center text-center">
    
                        <div
                          className={`
                            flex items-center justify-center
                            border border-slate-100
                            bg-slate-50
                            ${
                              match.type === "player"
                                ? "h-20 w-20 rounded-full p-1"
                                : "h-20 w-20 rounded-xl p-3"
                            }
                          `}
                        >
                          <img
                            src={
                              match.type === "player"
                                ? match.player1.image
                                : match.team1.logo
                            }
                            alt={
                              match.type === "player"
                                ? match.player1.name
                                : match.team1.name
                            }
                            className={`
                              h-full w-full object-contain
                              ${
                                match.type === "player"
                                  ? "rounded-full object-cover"
                                  : ""
                              }
                            `}
                          />
                        </div>
    
                        <h3 className="mt-3 max-w-[140px] text-sm font-bold text-slate-900">
                          {match.type === "player"
                            ? match.player1.name
                            : match.team1.name}
                        </h3>
                      </div>
    
                      {/* VS */}
                      <div className="flex w-[20%] flex-col items-center">
                        <span className="text-xs font-bold text-slate-300">
                          VS
                        </span>
    
                        <div className="mt-2 h-px w-8 bg-slate-200" />
                      </div>
    
                      {/* Participant 2 */}
                      <div className="flex w-[40%] flex-col items-center text-center">
    
                        <div
                          className={`
                            flex items-center justify-center
                            border border-slate-100
                            bg-slate-50
                            ${
                              match.type === "player"
                                ? "h-20 w-20 rounded-full p-1"
                                : "h-20 w-20 rounded-xl p-3"
                            }
                          `}
                        >
                          <img
                            src={
                              match.type === "player"
                                ? match.player2.image
                                : match.team2.logo
                            }
                            alt={
                              match.type === "player"
                                ? match.player2.name
                                : match.team2.name
                            }
                            className={`
                              h-full w-full object-contain
                              ${
                                match.type === "player"
                                  ? "rounded-full object-cover"
                                  : ""
                              }
                            `}
                          />
                        </div>
    
                        <h3 className="mt-3 max-w-[140px] text-sm font-bold text-slate-900">
                          {match.type === "player"
                            ? match.player2.name
                            : match.team2.name}
                        </h3>
                      </div>
    
                    </div>
    
                    {/* Date & Time */}
                    <div className="mt-6 grid grid-cols-2 gap-3 border-t border-slate-100 pt-4">
    
                      {/* Date */}
                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                          <FaCalendarDays className="text-xs" />
                        </div>
    
                        <div>
                          <p className="text-[10px] font-medium uppercase tracking-wide text-slate-400">
                            Date
                          </p>
    
                          <p className="text-xs font-semibold text-slate-700">
                            {match.date}
                          </p>
                        </div>
                      </div>
    
                      {/* Time */}
                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                          <FaClock className="text-xs" />
                        </div>
    
                        <div>
                          <p className="text-[10px] font-medium uppercase tracking-wide text-slate-400">
                            Time
                          </p>
    
                          <p className="text-xs font-semibold text-slate-700">
                            {match.time}
                          </p>
                        </div>
                      </div>
    
                    </div>
    
                    {/* Location */}
                    <div className="mt-3 flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2.5">
                      <FaLocationDot className="shrink-0 text-xs text-blue-500" />
    
                      <p className="truncate text-xs font-medium text-slate-500">
                        {match.location}
                      </p>
                    </div>
    
                    {/* View Match Button */}
                    <button
                      className="
                        mt-4
                        flex w-full
                        items-center justify-center gap-2
                        rounded-lg
                        border border-blue-200
                        bg-white
                        py-2.5
                        text-sm font-semibold
                        text-blue-600
                        transition-all duration-200
                        hover:border-blue-600
                        hover:bg-blue-600
                        hover:text-white
                      "
                    >
                      View Match
                      <FaArrowRight className="text-xs" />
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
                  bg-white
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
  )
}

export default Matches
