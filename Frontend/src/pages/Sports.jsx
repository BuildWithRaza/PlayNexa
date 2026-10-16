import React from "react";

import { BiFootball } from "react-icons/bi";
import {
    MdSportsHockey,
    MdSportsVolleyball,
    MdSportsCricket,
    MdSportsGolf,
    MdSportsTennis,
    MdSportsBaseball,
    MdSportsMma,
    MdSportsMotorsports,
    MdSportsHandball,
    MdSportsKabaddi,
    MdDirectionsBike,
    MdPool,
    MdOutlineSportsGymnastics,
 
} from "react-icons/md";

import {
    TbCricket,
    TbSoccerField,
    TbGolf,
    TbKarate,
    TbRun,
    TbSkateboard,
} from "react-icons/tb";

import { TfiBasketball } from "react-icons/tfi";
import { PiTennisBall, PiBoxingGlove } from "react-icons/pi";
import { GiBoxingGlove, GiBowlingStrike } from "react-icons/gi";
import { FaTableTennis } from "react-icons/fa";
import { GrAnchor } from "react-icons/gr";
import { Link } from "react-router-dom";

const BilliardsIcon = () => (
    <svg
        viewBox="0 0 64 64"
        className="w-16 h-16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        {/* Table */}
        <rect
            x="7"
            y="14"
            width="50"
            height="36"
            rx="5"
            fill="#166534"
            stroke="currentColor"
            strokeWidth="3"
        />

        {/* Playing surface */}
        <rect
            x="12"
            y="19"
            width="40"
            height="26"
            rx="2"
            fill="#22C55E"
        />

        {/* Pockets */}
        <circle cx="13" cy="20" r="3" fill="#111827" />
        <circle cx="51" cy="20" r="3" fill="#111827" />
        <circle cx="13" cy="44" r="3" fill="#111827" />
        <circle cx="51" cy="44" r="3" fill="#111827" />

        {/* Balls */}
        <circle cx="27" cy="30" r="4" fill="#FFFFFF" />
        <circle cx="37" cy="27" r="4" fill="#EF4444" />
        <circle cx="42" cy="35" r="4" fill="#FACC15" />
        <circle cx="32" cy="38" r="4" fill="#3B82F6" />

        {/* Cue stick */}
        <line
            x1="19"
            y1="42"
            x2="47"
            y2="23"
            stroke="#D6A15D"
            strokeWidth="2.5"
            strokeLinecap="round"
        />
    </svg>
);

const ArcheryIcon = () => (
    <svg
        viewBox="0 0 64 64"
        className="w-16 h-16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        {/* Bow */}
        <path
            d="M18 10 C5 20, 5 44, 18 54"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
        />

        {/* Bow string */}
        <line
            x1="18"
            y1="10"
            x2="18"
            y2="54"
            stroke="currentColor"
            strokeWidth="1.5"
        />

        {/* Arrow */}
        <line
            x1="15"
            y1="32"
            x2="53"
            y2="32"
            stroke="#92400E"
            strokeWidth="2.5"
            strokeLinecap="round"
        />

        {/* Arrow head */}
        <path
            d="M53 32 L47 28 L47 36 Z"
            fill="#374151"
        />

        {/* Arrow feathers */}
        <path
            d="M17 32 L12 28 L13 32 L12 36 Z"
            fill="#EF4444"
        />

        {/* Target outer circle */}
        <circle
            cx="45"
            cy="32"
            r="13"
            fill="#FFFFFF"
            stroke="#DC2626"
            strokeWidth="2"
        />

        {/* Target rings */}
        <circle
            cx="45"
            cy="32"
            r="9"
            fill="#EF4444"
        />

        <circle
            cx="45"
            cy="32"
            r="5"
            fill="#FFFFFF"
        />

        <circle
            cx="45"
            cy="32"
            r="2.5"
            fill="#2563EB"
        />
    </svg>
);



const Sports = () => {
    const sports = [
        {
            name: "Football",
            icon: <BiFootball />,
            color: "bg-sky-50 border-sky-200 text-sky-500",
        },
        {
            name: "Cricket",
            icon: <TbCricket />,
            color: "bg-amber-50 border-amber-200 text-amber-600",
        },
        {
            name: "Basketball",
            icon: <TfiBasketball />,
            color: "bg-orange-50 border-orange-200 text-orange-500",
        },
        {
            name: "Tennis",
            icon: <PiTennisBall />,
            color: "bg-lime-50 border-lime-200 text-lime-500",
        },
        {
            name: "Hockey",
            icon: <MdSportsHockey />,
            color: "bg-indigo-50 border-indigo-200 text-indigo-500",
        },
        {
            name: "Volleyball",
            icon: <MdSportsVolleyball />,
            color: "bg-cyan-50 border-cyan-200 text-cyan-500",
        },
        {
            name: "Baseball",
            icon: <MdSportsBaseball />,
            color: "bg-red-50 border-red-200 text-red-500",
        },
        {
            name: "Golf",
            icon: <MdSportsGolf />,
            color: "bg-emerald-50 border-emerald-200 text-emerald-500",
        },
        {
            name: "Boxing",
            icon: <PiBoxingGlove />,
            color: "bg-rose-50 border-rose-200 text-rose-500",
        },
        {
            name: "MMA",
            icon: <MdSportsMma />,
            color: "bg-red-50 border-red-200 text-red-600",
        },
        {
            name: "Badminton",
            icon: <MdSportsTennis />,
            color: "bg-green-50 border-green-200 text-green-500",
        },
        {
            name: "Table Tennis",
            icon:<FaTableTennis />,
            color: "bg-teal-50 border-teal-200 text-teal-500",
        },
        {
            name: "Kabaddi",
            icon: <MdSportsKabaddi />,
            color: "bg-purple-50 border-purple-200 text-purple-500",
        },
        {
            name: "Handball",
            icon: <MdSportsHandball />,
            color: "bg-violet-50 border-violet-200 text-violet-500",
        },
        {
            name: "Swimming",
            icon: <MdPool />,
            color: "bg-blue-50 border-blue-200 text-blue-500",
        },
        {
            name: "Cycling",
            icon: <MdDirectionsBike />,
            color: "bg-yellow-50 border-yellow-200 text-yellow-600",
        },
        {
            name: "Athletics",
            icon: <TbRun />,
            color: "bg-pink-50 border-pink-200 text-pink-500",
        },
        {
            name: "Gymnastics",
            icon: <MdOutlineSportsGymnastics />,
            color: "bg-fuchsia-50 border-fuchsia-200 text-fuchsia-500",
        },
        {
            name: "Archery",
            icon: <ArcheryIcon />,
            color: "bg-stone-50 border-stone-200 text-stone-600",
        },
        {
            name: "Karate",
            icon: <TbKarate />,
            color: "bg-slate-50 border-slate-200 text-slate-600",
        },
        {
            name: "Bowling",
            icon: <GiBowlingStrike />,
            color: "bg-blue-50 border-blue-200 text-blue-600",
        },
        {
            name: "Billiards",
            icon: <BilliardsIcon />,
            color: "bg-green-50 border-green-200 text-green-600",
        },
        {
            name: "Skateboarding",
            icon: <TbSkateboard />,
            color: "bg-purple-50 border-purple-200 text-purple-600",
        },
        {
            name: "Motorsport",
            icon: <MdSportsMotorsports />,
            color: "bg-gray-50 border-gray-200 text-gray-600",
        },
    ];

    return (
        <section className="w-full px-5 sm:px-8 lg:px-12 py-16">
            <div className="max-w-6xl mx-auto">

                {/* Section heading */}
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-8">
                    <div>
                        <p className="text-blue-600 font-bold text-sm uppercase tracking-wide">
                            Popular Sports
                        </p>

                        <h2 className="mt-1 text-2xl sm:text-3xl font-bold">
                            Choose Your Sport
                        </h2>

                        <p className="mt-1 text-sm sm:text-base text-gray-500">
                            Find your passion. Play your game.
                        </p>
                    </div>
                </div>

                {/* Sports cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {sports.map((sport) => (
                        <Link to={`/sports/${sport.name}`}>
                        <div
                            key={sport.name}
                            className={`group flex flex-col items-center justify-center min-h-[150px] p-5 rounded-2xl border ${sport.color} shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer`}
                        >
                            <div className="text-6xl flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
                                {sport.icon}
                            </div>

                            <h3 className="mt-3 font-semibold text-gray-800 text-center">
                                {sport.name}
                            </h3>
                        </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Sports;
