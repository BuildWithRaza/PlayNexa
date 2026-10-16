import React from 'react'
import { FaStar, FaLocationDot, FaArrowRight } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { teams } from '../utils/data';

const Teams = ({page}) => {
  const navigate = useNavigate()

  let featuredTeams = teams;
  
  const handleView=()=>{
    navigate('/teams')
  }
  const handleClick = (e) => {
    console.log(e)
    navigate(`/teams/${e.id}`)
  }

  if(page==="Landing" && featuredTeams.length>4){
    featuredTeams=featuredTeams.slice(0,4)
  }

  //   const teams = [
  //   {
  //     name: "Delhi Capitals",
  //     sport: "Football",
  //     members: "15 Members",
  //     location: "Delhi",
  //     rating: "4.8",
  //     image:
  //       "https://static.vecteezy.com/system/resources/previews/059/494/378/non_2x/delhi-capitals-original-ipl-team-official-logo-premium-design-for-digital-download-free-vector.jpg",
  //   },
  //   {
  //     name: "Royal Challengers Bengaluru",
  //     sport: "Cricket",
  //     members: "15 Members",
  //     location: "Bangalore",
  //     rating: "4.7",
  //     image:
  //       "https://1000logos.net/wp-content/uploads/2024/03/Royal-Challengers-Bengaluru-Logo-2020.png",
  //   },
  //   {
  //     name: "UP Warriors",
  //     sport: "Cricket",
  //     members: "15 Members",
  //     location: "Lucknow",
  //     rating: "4.6",
  //     image:
  //       "https://www.deccanchronicle.com/h-upload/2025/11/28/1983729-up-warriorz.webp",
  //   },
  //   {
  //     name: "Mumbai Strikers",
  //     sport: "Basketball",
  //     members: "15 Members",
  //     location: "Mumbai",
  //     rating: "4.5",
  //     image:
  //       "https://i.pinimg.com/originals/3a/54/40/3a544070d9c5e75d6795f39dfa295db5.jpg",
  //   },
  // ];

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
    <section className="bg-white py-14">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        {/* Header */}
        <div className="flex items-end justify-between border-b border-slate-100 pb-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              Teams
            </p>

            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900">
              Popular Teams
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Join teams from different sports and communities.
            </p>
          </div>

          {
            page === "Landing" && <button
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
          }


        </div>

        {/* Team Cards */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {featuredTeams.map((team) => {
            const sport = sportStyles[team.sport] || {
              badge: "border-slate-200 bg-slate-50 text-slate-600",
              dot: "bg-slate-500",
            };

            return (
              <div
                key={team.name}
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

                {/* Main Team Info */}
                <div className="flex items-center gap-4">

                  {/* Team Logo */}
                  <div
                    className="
                          flex h-20 w-20
                          shrink-0
                          items-center justify-center
                          rounded-xl
                          border border-slate-100
                          bg-slate-50
                          p-2
                          transition-transform duration-300
                          group-hover:scale-105
                        "
                  >
                    <img
                      src={team.image}
                      alt={team.name}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  {/* Details */}
                  <div className="min-w-0 flex-1">

                    {/* Team Name */}
                    <h3 className="text-base font-bold leading-5 text-slate-900">
                      {team.name}
                    </h3>

                    {/* Members */}
                    <p className="mt-1 text-xs font-medium text-slate-500">
                      {team.members}
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

                        {team.sport}
                      </span>
                    </div>

                    {/* Rating + Location */}
                    <div className="mt-2 flex items-center gap-3">

                      {/* Rating */}
                      <div className="flex items-center gap-1">
                        <FaStar className="text-[10px] text-amber-500" />

                        <span className="text-xs font-bold text-slate-600">
                          {team.rating}
                        </span>
                      </div>

                      {/* Location */}
                      <div className="flex items-center gap-1 text-xs text-slate-400">
                        <FaLocationDot className="text-[10px] text-blue-500" />

                        <span>{team.city}</span>
                      </div>

                    </div>

                  </div>

                </div>

                {/* Divider */}
                <div className="my-4 border-t border-slate-100" />

                {/* Join Button */}
                <button
                  onClick={() => { handleClick(team) }}
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
                  View Details
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
  )
}

export default Teams
