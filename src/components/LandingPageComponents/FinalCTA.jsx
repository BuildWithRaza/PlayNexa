import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const FinalCTA = () => {
  const navigate=useNavigate()
  const handleCreateAccount=()=>{
    navigate("/signup")
  }
  return (
    <section className=" bg-white">
      <div
        className="
          relative
          overflow-hidden
          shadow-xl
          shadow-blue-100/50
        "
      >

        {/* Stadium Background */}
        <img
          src="https://media.collegetimes.com/uploads/2015/05/Leinster-Rugby-1024x711.jpg"
          alt="Stadium filled with sports fans"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-top
          "
        />

        {/* Dark Blue Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#07152f]/90
            via-[#0f3b78]/75
            to-[#07152f]/80
          "
        />

        {/* Subtle Blue Glow */}
        <div
          className="
            absolute
            -left-20
            top-1/2
            h-64
            w-64
            -translate-y-1/2
            rounded-full
            bg-blue-500/20
            blur-3xl
          "
        />

        <div
          className="
            relative
            z-10
            flex
            min-h-[430px]
            flex-col
            items-center
            justify-center
            px-6
            py-16
            text-center
            sm:px-10
          "
        >

          {/* Small Badge */}
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/20
              bg-white/10
              px-4
              py-2
              backdrop-blur-sm
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-100">
              Join the Community
            </span>
          </div>

          {/* Heading */}
          <h2
            className="
              mt-5
              max-w-3xl
              text-3xl
              font-black
              leading-tight
              tracking-tight
              text-white
              sm:text-4xl
              lg:text-5xl
            "
          >
            Ready to be part of{" "}
            <span className="text-cyan-300">
              something bigger?
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              mt-5
              max-w-2xl
              text-sm
              leading-6
              text-blue-100
              sm:text-base
            "
          >
            Join PlayNexa today and connect with players, teams, and
            sport lovers from around the world.
          </p>

          {/* CTA Button */}
          <button
          onClick={handleCreateAccount}
            className="
              mt-8
              flex
              items-center
              gap-2
              rounded-xl
              bg-white
              px-6
              py-3
              text-sm
              font-bold
              text-blue-600
              shadow-lg
              shadow-black/10
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:bg-blue-50
              hover:shadow-xl
            "
          >
            Create Account
            <FaArrowRight className="text-xs" />
          </button>

          {/* Small Supporting Text */}
          <p className="mt-4 text-[11px] font-medium text-blue-200">
            Play • Connect • Compete
          </p>

        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
