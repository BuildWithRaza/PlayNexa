
import React from "react";
import { GoPersonFill } from "react-icons/go";
import { HiUserGroup } from "react-icons/hi2";
import { BsTrophyFill } from "react-icons/bs";
import { MdGroups } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";

const PlayNexaWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Create your Profile",
      description:
        "Show your sport, position, skill level and achievements.",
      icon: <GoPersonFill />,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      numberBg: "bg-blue-600",
    },
    {
      number: "02",
      title: "Find Players",
      description:
        "Discover players based on sport, location and skill level.",
      icon: <HiUserGroup />,
      iconBg: "bg-cyan-100",
      iconColor: "text-cyan-600",
      numberBg: "bg-cyan-600",
    },
    {
      number: "03",
      title: "Build Your Team",
      description:
        "Create a team or join an existing one.",
      icon: <MdGroups />,
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600",
      numberBg: "bg-indigo-600",
    },
    {
      number: "04",
      title: "Play & Compete",
      description:
        "Join matches and tournaments and track your performance.",
      icon: <BsTrophyFill />,
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
      numberBg: "bg-amber-500",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-5 py-12">
      <div className="w-full max-w-6xl mx-auto rounded-3xl border border-blue-100 bg-white p-6 md:p-10 shadow-sm">

        {/* Header */}
        <div className="max-w-2xl mb-12">
          <p className="mb-2 text-sm font-bold uppercase tracking-wider text-blue-600">
            How PlayNexa Works
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-slate-900">
            Everything you need to{" "}
            <span className="text-blue-600">Play Better</span>
          </h2>

          <p className="mt-3 text-sm md:text-base font-medium leading-6 text-slate-500">
            Simple steps to connect, compete and grow in your sport journey.
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col lg:flex-row items-center gap-5">

          {steps.map((step, index) => (
            <div
              key={step.number}
              className="flex w-full lg:flex-2 items-center gap-5"
            >

              {/* Card */}
              <div
                className="
                  group relative w-full
                  rounded-2xl
                  border border-slate-100
                  bg-slate-50
                  p-6
                  transition-all duration-300
                  hover:-translate-y-2
                  hover:bg-white
                  hover:border-blue-200
                  hover:shadow-xl
                  hover:shadow-blue-100/50
                "
              >
                {/* Number */}
                <div
                  className={`
                    absolute -top-4 -left-3
                    flex h-9 w-9 items-center justify-center
                    rounded-full
                    ${step.numberBg}
                    text-xs font-bold text-white
                    shadow-md ring-4 ring-white
                  `}
                >
                  {step.number}
                </div>

                {/* Icon */}
                <div
                  className={`
                    mb-5 flex h-16 w-16
                    items-center justify-center
                    rounded-2xl
                    ${step.iconBg}
                    ${step.iconColor}
                    text-3xl
                    transition-all duration-300
                    group-hover:scale-110
                  `}
                >
                  {step.icon}
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="text-sm font-medium leading-6 text-slate-500">
                    {step.description}
                  </p>
                </div>

                {/* Bottom accent */}
                <div
                  className={`
                    absolute bottom-0 left-6 right-6
                    h-1 rounded-full
                    ${step.iconBg}
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity duration-300
                  `}
                />
              </div>

              {/* Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex shrink-0 items-center justify-center">
                  <div
                    className="
                      flex h-9 w-9
                      items-center justify-center
                      rounded-full
                      border border-blue-100
                      bg-white
                      text-blue-500
                      shadow-sm
                    "
                  >
                    <FaArrowRight className="text-sm" />
                  </div>
                </div>
              )}

            </div>
          ))}

        </div>

        {/* Mobile Flow */}
        {/* <div className="mt-8 flex justify-center lg:hidden">
          <div className="flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2">

            <span className="text-xs font-bold text-blue-600">
              01
            </span>

            <FaArrowRight className="text-xs text-blue-400" />

            <span className="text-xs font-bold text-blue-600">
              02
            </span>

            <FaArrowRight className="text-xs text-blue-400" />

            <span className="text-xs font-bold text-blue-600">
              03
            </span>

            <FaArrowRight className="text-xs text-blue-400" />

            <span className="text-xs font-bold text-blue-600">
              04
            </span>

          </div>
        </div> */}

      </div>
    </section>
  );
};

export default PlayNexaWorks;
