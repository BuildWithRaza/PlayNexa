import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaTrophy,
  FaStar,
  FaArrowRight,
  FaChartLine,
  FaFutbol,
} from "react-icons/fa6";

const TrackPerformance = () => {

  const navigate=useNavigate();

  let User = localStorage.getItem('user')
  const role=localStorage.getItem('LoggedInUser')||""
  if (User != "") {
    User = JSON.parse(User);
  }

  let width;
  let isUser = false;
  if (User != "" && User) {
    isUser = true;
    width = `${User.stats.winRate}%`
  }

  const handleviewprofile=()=>{
    if(role=="teamdash"){
      navigate(`/teamdash/${User.id}`)
    }
    else if(role=="playerdash"){
      navigate(`/playerdash/${User.id}`)
    }
    else{
      alert("LogIN First")
    }
  }



  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50  py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        {/* Header */}
        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
            Performance
          </p>

          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900">
            Track Your Performance
          </h2>

          <p className="mt-2 max-w-2xl text-sm text-slate-500">
            Keep an eye on your progress, measure your performance, and
            continue improving every time you play.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">

          {/* Left Stats Card */}
          <div
            className="
              rounded-2xl
              border border-blue-100
              bg-white
              p-5
              shadow-sm
              shadow-blue-100/40
              sm:p-6
            "
          >

            {/* Stats Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-5">

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Your Stats
                </p>

                <h3 className="mt-1 text-lg font-bold text-slate-900">
                  Performance Overview
                </h3>
              </div>

              <span
                className="
                  rounded-full
                  border border-green-200
                  bg-green-50
                  px-3 py-1
                  text-[10px]
                  font-bold
                  text-green-600
                "
              >
                Active
              </span>

            </div>

            {/* Stats Grid */}
            <div className="mt-5 grid grid-cols-2 gap-3">

              {/* Matches Played */}
              <div
                className="
                  group
                  rounded-xl
                  border border-blue-100
                  bg-gradient-to-br from-blue-50 to-white
                  p-4
                  transition-all duration-200
                  hover:-translate-y-0.5
                  hover:border-blue-200
                  hover:shadow-sm
                  hover:shadow-blue-100
                "
              >
                <div className="flex items-start justify-between">

                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                    <FaFutbol className="text-sm" />
                  </div>

                  <span className="text-[10px] font-bold text-blue-400">
                    +12%
                  </span>

                </div>

                <h4 className="mt-4 text-2xl font-black text-slate-900">
                  {isUser ? User.stats.matches : 48}
                </h4>

                <p className="mt-1 text-xs font-semibold text-slate-500">
                  Matches Played
                </p>
              </div>

              {/* Wins */}
              <div
                className="
                  group
                  rounded-xl
                  border border-amber-100
                  bg-gradient-to-br from-amber-50 to-white
                  p-4
                  transition-all duration-200
                  hover:-translate-y-0.5
                  hover:border-amber-200
                  hover:shadow-sm
                  hover:shadow-amber-100
                "
              >
                <div className="flex items-start justify-between">

                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-500">
                    <FaTrophy className="text-sm" />
                  </div>

                  <span className="text-[10px] font-bold text-amber-500">
                    +8%
                  </span>

                </div>

                <h4 className="mt-4 text-2xl font-black text-slate-900">
                  {isUser ? User.stats.wins : 32}
                </h4>

                <p className="mt-1 text-xs font-semibold text-slate-500">
                  Wins
                </p>
              </div>

              {/* Points */}
              <div
                className="
                  group
                  rounded-xl
                  border border-emerald-100
                  bg-gradient-to-br from-emerald-50 to-white
                  p-4
                  transition-all duration-200
                  hover:-translate-y-0.5
                  hover:border-emerald-200
                  hover:shadow-sm
                  hover:shadow-emerald-100
                "
              >
                <div className="flex items-start justify-between">

                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
                    <FaStar className="text-sm" />
                  </div>

                  <span className="text-[10px] font-bold text-emerald-500">
                    +18%
                  </span>

                </div>

                <h4 className="mt-4 text-2xl font-black text-slate-900">
                  {isUser&&User.rating&&User.stats.winRate ? Math.ceil((User.rating) * 500 + User.stats.winRate) : 1284}
                </h4>

                <p className="mt-1 text-xs font-semibold text-slate-500">
                  Points
                </p>
              </div>

              {/* Rating */}
              <div
                className="
                  group
                  rounded-xl
                  border border-purple-100
                  bg-gradient-to-br from-purple-50 to-white
                  p-4
                  transition-all duration-200
                  hover:-translate-y-0.5
                  hover:border-purple-200
                  hover:shadow-sm
                  hover:shadow-purple-100
                "
              >
                <div className="flex items-start justify-between">

                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                    <FaChartLine className="text-sm" />

                  </div>

                  <span className="text-[10px] font-bold text-purple-500">
                    Top Rated
                  </span>

                </div>

                <h4 className="mt-4 text-2xl font-black text-slate-900">
                  {isUser ? User.rating : 4.8}
                </h4>

                <p className="mt-1 text-xs font-semibold text-slate-500">
                  Rating
                </p>
              </div>

            </div>

            {/* Overall Performance */}
            <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50/60 p-4">

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-xs font-bold text-slate-800">
                    Overall Performance
                  </p>

                  <p className="mt-1 text-[11px] text-slate-500">
                    Keep playing to improve your rating
                  </p>
                </div>

                <span className="text-sm font-bold text-blue-600">
                  {isUser ? User.stats.winRate + "%" : "84%"}
                </span>

              </div>

              {/* Progress Bar */}
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-blue-100">
                <div className="h-full w-[84%] rounded-full bg-blue-600"
                  style={{
                    width: `${isUser ? User.stats.winRate : 84}%`,
                  }} />
              </div>

            </div>

          </div>

          {/* Tracking Banner */}
          <div
            className="
              relative
              min-h-[360px]
              overflow-hidden
              rounded-2xl
              border border-blue-100
              bg-slate-900
              shadow-sm
            "
          >

            {/* Background Image */}
            <img
              src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=1200"
              alt="Athlete tracking performance"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
              "
            />

            {/* Overlay */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[#07152f]
                via-[#07152f]/75
                to-[#07152f]/20
              "
            />

            {/* Content */}
            <div className="relative z-10 flex h-full min-h-[360px] flex-col justify-between p-6 sm:p-7">

              <div className="flex justify-end">
                <span
                  className="
                    rounded-full
                    border border-white/20
                    bg-white/10
                    px-3 py-1
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-wider
                    text-white
                    backdrop-blur-sm
                  "
                >
                  Player Progress
                </span>
              </div>

              <div>

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
                  Track. Improve. Achieve.
                </p>

                <h3 className="mt-2 max-w-sm text-3xl font-black leading-tight text-white">
                  Your performance matters.
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-6 text-slate-300">
                  Track every match, celebrate your wins, and see how your
                  performance grows over time.
                </p>

                <button
                onClick={handleviewprofile}
                  className="
                  
                    mt-6
                    flex
                    items-center
                    gap-2
                    rounded-lg
                    bg-white
                    px-5
                    py-2.5
                    text-sm
                    font-bold
                    text-blue-600
                    transition-all
                    hover:bg-blue-50
                  "
                >
                  View Profile
                  <FaArrowRight className="text-xs" />
                </button>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrackPerformance;
