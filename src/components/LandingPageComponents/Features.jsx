
import React from "react";
import { HiUserGroup } from "react-icons/hi2";
import { FaCalendarDays } from "react-icons/fa6";
import { MdGroups } from "react-icons/md";
import { BsTrophyFill } from "react-icons/bs";

const Features = () => {
  const features = [
    {
      title: "Find Your Players",
      description:
        "Find athletes who match your sport, position and playing style.",
      icon: <HiUserGroup />,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      accent: "group-hover:border-blue-200",
    },
    {
      title: "Build Your Team",
      description:
        "Bring players together and build your own competitive team.",
      icon: <MdGroups />,
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600",
      accent: "group-hover:border-indigo-200",
    },
    {
      title: "Discover Matches",
      description:
        "Find upcoming games and connect with teams looking for players.",
      icon: <FaCalendarDays />,
      iconBg: "bg-cyan-100",
      iconColor: "text-cyan-600",
      accent: "group-hover:border-cyan-200",
    },
    {
      title: "Join Tournaments",
      description:
        "Explore tournaments and compete against teams from your community.",
      icon: <BsTrophyFill />,
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
      accent: "group-hover:border-amber-200",
    },
  ];

  return (
    <section className="w-full bg-white px-5 py-12">
      <div
        className="w-full max-w-6xl mx-auto
        bg-gradient-to-br from-blue-50 via-white to-indigo-50
        border border-blue-100
        rounded-3xl
        p-6 md:p-10
        shadow-sm"
      >
        {/* Header */}
        <div className="max-w-2xl mb-10">
          <p className="text-sm font-bold tracking-wider text-blue-600 uppercase mb-2">
            Platform Features
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
            Everything you need in{" "}
            <span className="text-blue-600">One Place</span>
          </h2>

          <p className="mt-3 text-sm md:text-base font-medium leading-6 text-slate-500">
            Find Players, Build Teams, Discover Matches, and Compete in
            Tournaments — All in One Place.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`group relative bg-white border border-slate-100
                rounded-2xl p-6
                hover:-translate-y-1
                hover:shadow-xl hover:shadow-blue-100/40
                ${feature.accent}
                transition-all duration-300`}
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-2xl
                  ${feature.iconBg} ${feature.iconColor}
                  flex items-center justify-center
                  text-3xl mb-5
                  group-hover:scale-105
                  transition-transform duration-300`}
              >
                {feature.icon}
              </div>

              {/* Content */}
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="text-sm leading-6 font-medium text-slate-500">
                  {feature.description}
                </p>
              </div>

              {/* Bottom accent */}
              <div
                className={`absolute bottom-0 left-6 right-6 h-1 rounded-full
                  ${feature.iconBg}
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
