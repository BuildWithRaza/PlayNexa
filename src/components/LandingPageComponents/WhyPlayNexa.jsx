import React from "react";
import { HiUserGroup } from "react-icons/hi2";
import { MdGroups, MdOutlineTrackChanges } from "react-icons/md";
import { FaPeopleGroup, FaRegNewspaper } from "react-icons/fa6";

const WhyPlayNexa = () => {
  const mainfeatures = [
    {
      title: "Connect with Players",
      description: "Find teammates from your city and beyond.",
      icon: <HiUserGroup />,
      iconColor: "text-blue-600",
      iconBg: "bg-blue-50",
      borderColor: "border-blue-100",
    },
    {
      title: "Build Strong Teams",
      description: "Create and join teams and grow together.",
      icon: <MdGroups />,
      iconColor: "text-emerald-600",
      iconBg: "bg-emerald-50",
      borderColor: "border-emerald-100",
    },
    {
      title: "Track Performance",
      description: "Monitor your growth and achievements.",
      icon: <MdOutlineTrackChanges />,
      iconColor: "text-purple-600",
      iconBg: "bg-purple-50",
      borderColor: "border-purple-100",
    },
    {
      title: "Discover Communities",
      description: "Be part of a growing sports network.",
      icon: <FaPeopleGroup />,
      iconColor: "text-orange-600",
      iconBg: "bg-orange-50",
      borderColor: "border-orange-100",
    },
    {
      title: "Stay Updated",
      description: "Get the latest matches, events and news.",
      icon: <FaRegNewspaper />,
      iconColor: "text-amber-600",
      iconBg: "bg-amber-50",
      borderColor: "border-amber-100",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50  py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        {/* Header */}
        <div className="mb-9 ">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
            Why PlayNexa
          </p>

          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900">
            Why Choose <span className="text-blue-600">PlayNexa?</span>
          </h2>

          <p className="mt-2 text-sm font-medium text-slate-500">
            Because sports are better together.
          </p>
        </div>

        {/* Features */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">

          {mainfeatures.map((feature) => (
            <div
              key={feature.title}
              className={`
                group
                rounded-2xl
                border
                ${feature.borderColor}
                bg-white
                p-5
                shadow-sm
                shadow-blue-100/30
                transition-all
                duration-200
                hover:-translate-y-1
                hover:shadow-md
              `}
            >

              {/* Icon */}
              <div
                className={`
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  ${feature.iconBg}
                  ${feature.iconColor}
                  transition-transform
                  duration-200
                  group-hover:scale-105
                `}
              >
                <span className="text-2xl">
                  {feature.icon}
                </span>
              </div>

              {/* Content */}
              <div className="mt-5">

                <h3 className="text-sm font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-2 text-xs font-medium leading-5 text-slate-500">
                  {feature.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default WhyPlayNexa;
