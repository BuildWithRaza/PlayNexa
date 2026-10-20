
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const navigate = useNavigate()

  let playerCount = localStorage.getItem('players') || []

  if (playerCount !== "") {
    playerCount = JSON.parse(playerCount).length;
    console.log(playerCount)
  }
  else {
    playerCount = 0;
  }
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState(`PLY${playerCount + 1}`);
  const [password, setPassword] = useState('player');
  const [cnfpassword, setCnfPassword] = useState('player');
  const [profileType, setProfileType] = useState("player");


  function handleProfileTypeChange(type) {
  setProfileType(type);

  let count = 0;

  if (type === "team") {
    const teams = JSON.parse(localStorage.getItem("teams") || "[]");
    count = teams.length;

    setEmail(`TEAM${String(count + 1).padStart(3, "0")}`);
    setPassword("team");
    setCnfPassword("team");
  } else {
    const players = JSON.parse(localStorage.getItem("players") || "[]");
    count = players.length;

    setEmail(`PLY${String(count + 1).padStart(3, "0")}`);
    setPassword("player");
    setCnfPassword("player");
  }
}



  function submitHandler(e) {
    e.preventDefault();
    console.log("email is", email);
    console.log("password is", password);
    // if (password === cnfpassword) {
    //   navigate("/playerdetailsform")
    //   // setFullname("");
    //   setEmail("");
    //   setPassword("");
    //   setCnfPassword("")
    // }
    if (password !== cnfpassword) {
      alert("Passwords do not match");
      return;
    }
    setEmail("");
      setPassword("");
      setCnfPassword("")

    navigate(
      profileType === "team"
        ? "/teamdetailsform"
        : "/playerdetailsform"
    );
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-100 via-blue-50 to-cyan-100 px-4 py-10 flex items-center justify-center">

      <div className="w-full max-w-lg overflow-hidden rounded-3xl border border-white bg-white shadow-2xl shadow-blue-200/50">

        {/* Header */}
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 px-6 py-8 text-white">
          <div className="absolute -right-10 -top-12 h-40 w-40 rounded-full bg-white/10" />
          <div className="absolute -bottom-16 right-20 h-36 w-36 rounded-full bg-white/10" />

          <div className="relative flex justify-center mb-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-lg font-black text-blue-700 shadow-lg">
                PN
              </div>

              <div>
                <h1 className="text-2xl font-black tracking-tight">
                  Play<span className="text-cyan-200">Nexa</span>
                </h1>
                <p className="text-[9px] font-bold tracking-[0.22em] text-blue-100">
                  PLAY • CONNECT • COMPETE
                </p>
              </div>
            </Link>
          </div>

          <h2 className="relative text-center text-3xl font-extrabold">
            Create Account
          </h2>
          <p className="relative mt-2 text-center text-sm text-blue-100">
            Join the community. Find your game. Make your mark.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={submitHandler}
          className="flex flex-col gap-5 px-6 py-8 sm:px-9"
        >

          {/* Team / Player Radio Cards */}
          <div>
            <h3 className="mb-1 text-sm font-bold text-slate-800">
              I want to register as
            </h3>
            <p className="mb-3 text-xs text-slate-500">
              Choose your account type to continue.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {[
                {
                  value: "player",
                  label: "Player",
                  desc: "Register yourself",
                  icon: "🏃",
                },
                {
                  value: "team",
                  label: "Team",
                  desc: "Register a team",
                  icon: "👥",
                },
              ].map((option) => {
                const active = profileType === option.value;

                return (
                  <label
                    key={option.value}
                    className={`relative flex cursor-pointer flex-col items-center rounded-2xl border-2 p-4 text-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${active
                        ? "border-blue-600 bg-blue-50 shadow-md shadow-blue-100"
                        : "border-slate-200 bg-white hover:border-blue-300"
                      }`}
                  >
                    <input
                      type="radio"
                      name="profileType"
                      value={option.value}
                      checked={active}
                      onChange={() => handleProfileTypeChange(option.value)}
                      className="sr-only"
                    />

                    <span className="text-3xl">{option.icon}</span>

                    <span className="mt-2 font-bold text-slate-800">
                      {option.label}
                    </span>

                    <span className="mt-1 text-xs text-slate-500">
                      {option.desc}
                    </span>

                    <span
                      className={`absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full border ${active
                          ? "border-blue-600 bg-blue-600 text-white"
                          : "border-slate-300 bg-white"
                        }`}
                    >
                      {active && (
                        <span className="text-xs font-bold">✓</span>
                      )}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* User ID */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              User ID
            </label>
            <input
              value={email}
              readOnly
              required
              type="text"
              placeholder="Your User ID"
              className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-slate-700 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />
            <p className="mt-1.5 text-xs text-slate-400">
              Your account ID is generated automatically.
            </p>
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              type="password"
              placeholder="Create a password"
              className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />
             <p className="mt-1.5 text-xs text-slate-400">
              Your password is "{password}"
            </p>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Confirm Password
            </label>
            <input
              value={cnfpassword}
              onChange={(e) => setCnfPassword(e.target.value)}
              required
              minLength={6}
              type="password"
              placeholder="Confirm your password"
              className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />
          </div>

          {/* Remember / Forgot */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
            <label className="flex cursor-pointer items-center gap-2 text-slate-600">
              <input
                type="checkbox"
                id="rememberme"
                className="h-4 w-4 rounded accent-blue-600"
              />
              Remember me
            </label>

            <Link
              to="/forgot-password"
              className="font-semibold text-blue-600 hover:text-blue-800"
            >
              Forgot password?
            </Link>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="h-12 w-full rounded-xl bg-gradient-to-r from-blue-700 to-cyan-500 font-bold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0"
          >
            Create Account →
          </button>

          <p className="text-center text-xs leading-5 text-slate-400">
            By creating an account, you agree to use PlayNexa responsibly.
          </p>
        </form>

        {/* Footer */}
        <div className="border-t border-slate-100 bg-slate-50 px-5 py-5 text-center text-sm text-slate-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-bold text-blue-600 hover:text-blue-800"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );

}

export default Register
