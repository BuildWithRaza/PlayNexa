import React, { useState } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import {
  FaBars,
  FaXmark,
  FaArrowRight,
} from "react-icons/fa6";
import { getPlayers, getTeams } from "../../utils/localStorage";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

console.log(getPlayers())
console.log(getTeams())

  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Players", path: "/players" },
    { name: "Teams", path: "/teams" },
    { name: "Sports", path: "/sports" },
    { name: "Matches", path: "/matches" },
    { name: "Tournaments", path: "/tournaments" },
    { name: "Leaderboard", path: "/leaderboard" },
    
  ];

  const handleLoginClick = () => {
    setIsOpen(false);
    navigate("/login");
  };

  const handleSignUpClick = () => {
    setIsOpen(false);
    navigate("/signup");
  };
  let User=localStorage.getItem('user')
  if(User!=""){
    User=JSON.parse(User);
  }

  
  const LoggedInUser=localStorage.getItem('LoggedInUser');
  console.log(LoggedInUser)

  let isUser=false;
  if(User!=""&& User){
    isUser=true;
  }

  // "/" and "/home" should both activate Home
  const isHomeActive =
    location.pathname === "/" || location.pathname === "/home";

  return (
    <header
      className="
        sticky
        top-0
        z-[9999]
        w-full
        border-b
        border-slate-200
        bg-white/95
        shadow-sm
        shadow-slate-200/50
        backdrop-blur-xl
      "
    >
      <nav>
        <div
          className="
            mx-auto
            flex
            h-[72px]
            max-w-7xl
            items-center
            justify-between
            px-5
            lg:px-8
          "
        >
          {/* Logo */}
          <Link
            to="/"
            className="flex shrink-0 items-center gap-2.5"
          >
            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                bg-gradient-to-br
                from-blue-600
                to-cyan-500
                text-sm
                font-black
                text-white
                shadow-sm
                shadow-blue-200
              "
            >
              PN
            </div>

            <div className="hidden sm:block">
              <h1 className="text-xl font-black leading-none tracking-tight">
                <span className="text-slate-900">Play</span>

                <span
                  className="
                    bg-gradient-to-r
                    from-blue-600
                    to-cyan-500
                    bg-clip-text
                    text-transparent
                  "
                >
                  Nexa
                </span>
              </h1>

              <p className="mt-1 text-[7px] font-bold tracking-[0.22em] text-slate-400">
                PLAY • CONNECT • COMPETE
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              // Special handling for Home
              const isActive =
                item.name === "Home"
                  ? isHomeActive
                  : location.pathname === item.path;

              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={`
                    relative
                    rounded-lg
                    px-3.5
                    py-2.5
                    text-sm
                    font-semibold
                    transition-all
                    duration-200
                    ${
                      isActive
                        ? "text-blue-600"
                        : "text-slate-500 hover:bg-blue-50 hover:text-blue-600"
                    }
                  `}
                >
                  {item.name}

                  {/* Active underline */}
                  {isActive && (
                    <span
                      className="
                        absolute
                        bottom-0
                        left-1/2
                        h-0.5
                        w-5
                        -translate-x-1/2
                        rounded-full
                        bg-blue-600
                      "
                    />
                  )}
                </NavLink>
              );
            })}
          </div>

          {/* Desktop Auth */}
          <div className="hidden items-center gap-2 lg:flex">
          {isUser?<Link to={`/${LoggedInUser}/${User.id}`}><div className="h-9 w-9 overflow-hidden rounded-xl bg-blue-100">
              {User.profileImage ? (
                <img
                  src={User.profileImage}
                  alt={User.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center font-black text-blue-600">
                  {User.name?.charAt(0)}
                </div>
              )}
            </div></Link>:(<><button
              onClick={handleLoginClick}
              className="
                rounded-lg
                px-4
                py-2.5
                text-sm
                font-bold
                text-blue-600
                transition
                hover:bg-blue-50
              "
            >
              Login
            </button>

            <button
              onClick={handleSignUpClick}
              className="
                group
                flex
                items-center
                gap-2
                rounded-lg
                bg-blue-600
                px-5
                py-2.5
                text-sm
                font-bold
                text-white
                shadow-sm
                shadow-blue-200
                transition-all
                duration-200
                hover:bg-blue-700
                hover:shadow-md
              "
            >
              Sign Up

              <FaArrowRight
                className="
                  text-[10px]
                  transition-transform
                  duration-200
                  group-hover:translate-x-0.5
                "
              />
            </button></>)}
            
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-lg
              border
              border-slate-200
              bg-white
              text-slate-700
              transition
              hover:border-blue-200
              hover:bg-blue-50
              hover:text-blue-600
              lg:hidden
            "
          >
            {isOpen ? (
              <FaXmark className="text-lg" />
            ) : (
              <FaBars className="text-lg" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className="
              border-t
              border-slate-100
              bg-white
              px-5
              pb-5
              pt-3
              shadow-lg
              shadow-slate-200/40
              lg:hidden
            "
          >
            <div className="space-y-1">
              {navItems.map((item) => {
                const isActive =
                  item.name === "Home"
                    ? isHomeActive
                    : location.pathname === item.path;

                return (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`
                      block
                      rounded-lg
                      px-4
                      py-3
                      text-sm
                      font-semibold
                      transition
                      ${
                        isActive
                          ? "bg-blue-50 text-blue-600"
                          : "text-slate-600 hover:bg-slate-50 hover:text-blue-600"
                      }
                    `}
                  >
                    {item.name}
                  </NavLink>
                );
              })}
            </div>

            {/* Mobile Auth */}
            <div className="mt-4 grid grid-cols-2 gap-2 border-t border-slate-100 pt-4">
              {isUser?<Link className="col-span-2 flex items-center gap-1" to={`/${LoggedInUser}/${User.id}`}><div className="h-9 w-9 overflow-hidden rounded-xl bg-blue-100">
              {User.profileImage ? (
                <img
                  src={User.profileImage}
                  alt={User.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center font-black text-blue-600">
                  {User.name?.charAt(0)}
                </div>
              )}
            </div>{User.name}</Link>:<>              <button
                onClick={handleLoginClick}
                className="
                  rounded-lg
                  border
                  border-blue-100
                  bg-white
                  px-4
                  py-2.5
                  text-sm
                  font-bold
                  text-blue-600
                  transition
                  hover:bg-blue-50
                "
              >
                Login
              </button>

              <button
                onClick={handleSignUpClick}
                className="
                  rounded-lg
                  bg-blue-600
                  px-4
                  py-2.5
                  text-sm
                  font-bold
                  text-white
                  shadow-sm
                  shadow-blue-200
                  transition
                  hover:bg-blue-700
                "
              >
                Sign Up
              </button></>}

            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
