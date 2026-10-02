import React from 'react'

import { BiFootball } from "react-icons/bi";
import { TbCricket } from "react-icons/tb";
import { TfiBasketball } from "react-icons/tfi";
import { PiTennisBall } from "react-icons/pi";
import {
    MdSportsVolleyball,
    MdSportsHockey
} from "react-icons/md";



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
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                    {sports.map((sport) => (
                        <div
                            key={sport.name}
                            className={` group flex flex-col items-center justify-center min-h-[150px] p-5 rounded-2xl border ${sport.color} shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer`}
                        > 
                            <div
                                className=" text-6xl flex items-center justify-center transition-transform duration-200 group-hover:scale-110 ">
                                {sport.icon}
                            </div>

                            <h3 className="mt-3 font-semibold text-gray-800">
                                {sport.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Sports
