import React, { useState } from "react";
import { players } from "../../utils/data";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineHome } from 'react-icons/ai'

import {
  FaArrowTrendUp,
  FaBell,
  FaBolt,
  FaCalendarDays,
  FaChartLine,
  FaCheck,
  FaCircleCheck,
  FaGear,
  FaHouse,
  FaLocationDot,
  FaMedal,
  FaMessage,
  FaPeopleGroup,
  FaRightFromBracket,
  FaShirt,
  FaShieldHalved,
  FaStar,
  FaTrophy,
  FaUser,
  FaUsers,
  FaBars,
  FaXmark,
  FaArrowRight,
  FaClock,
  FaCircle,
  FaFire,
} from "react-icons/fa6";


/* ============================================================= */
/* SIDEBAR ITEMS */
/* ============================================================= */

const sidebarItems = [
  {
    label: "Dashboard",
    icon: <FaHouse />,
    key: "dashboard",
  },
  {
    label: "My Profile",
    icon: <FaUser />,
    key: "profile",
  },
  {
    label: "Performance",
    icon: <FaChartLine />,
    key: "performance",
  },
  {
    label: "My Teams",
    icon: <FaPeopleGroup />,
    key: "teams",
  },
  {
    label: "Matches",
    icon: <FaCalendarDays />,
    key: "matches",
  },
  {
    label: "Achievements",
    icon: <FaTrophy />,
    key: "achievements",
  },
  {
    label: "Messages",
    icon: <FaMessage />,
    key: "messages",
  },
  {
    label: "Notifications",
    icon: <FaBell />,
    key: "notifications",
  },
];

/* ============================================================= */
/* MAIN COMPONENT */
/* ============================================================= */

const PlayerDashboard = () => {
  const navigate = useNavigate();
  const { playerId } = useParams();

  const [activePage, setActivePage] = useState("dashboard");
  const [mobileOpen, setMobileOpen] = useState(false);

  const player = players.find(
    (player) => player.id === playerId
  );

  /* =========================================================== */
  /* LOGOUT */
  /* =========================================================== */

  const handleLogout = () => {
    localStorage.setItem("user","");
    localStorage.setItem("LoggedInUser","");
    navigate("/login");
  };

  const goHome=()=>{
    navigate("/")
  }

  /* =========================================================== */
  /* PLAYER NOT FOUND */
  /* =========================================================== */

  if (!player) {
    return (
    
      <div className="flex min-h-screen items-center justify-center bg-slate-50 px-5">

        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
            <FaUsers className="text-2xl" />
          </div>

          <h1 className="mt-5 text-2xl font-black text-slate-900">
            Player Not Found
          </h1>

          <p className="mt-2 text-slate-500">
            The player you're looking for doesn't exist.
          </p>

          <button
            onClick={() => navigate("/")}
            className="mt-6 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  const sport = player.sport?.toLowerCase();
  const sportStats = getSportStats(player);

  return (
    <div className="min-h-screen bg-slate-50">

      {/* ===================================================== */}
      {/* SIDEBAR */}
      {/* ===================================================== */}

      <PlayerSidebar
        player={player}
        activePage={activePage}
        setActivePage={setActivePage}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        onLogout={handleLogout}
        onHome={goHome}
      />

      {/* ===================================================== */}
      {/* MAIN AREA */}
      {/* ===================================================== */}

      <div className="lg:pl-72">

        {/* =================================================== */}
        {/* MOBILE HEADER */}
        {/* =================================================== */}

        <header className="sticky top-0 z-30 flex h-16 items-center border-b border-slate-200 bg-white/95 px-4 backdrop-blur lg:hidden">

          <button
            onClick={() => setMobileOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600"
          >
            <FaBars />
          </button>

          <div className="ml-3">
            <h1 className="text-lg font-black tracking-tight text-slate-900">
                Play<span className="text-blue-600">Nexa</span>
              </h1>

            <p className="text-[7px] font-bold tracking-[0.22em] uppercase  text-slate-400">
              PLAY • CONNECT • COMPETE
            </p>
          </div>

          <div className="ml-auto">
            <div className="h-9 w-9 overflow-hidden rounded-xl bg-blue-100">
              {player.profileImage ? (
                <img
                  src={player.profileImage}
                  alt={player.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center font-black text-blue-600">
                  {player.name?.charAt(0)}
                </div>
              )}
            </div>
          </div>

        </header>

        {/* =================================================== */}
        {/* PAGE */}
        {/* =================================================== */}

        <main className="min-h-screen px-4 py-6 sm:px-6 lg:px-8 lg:py-8">

          <div className="mx-auto max-w-7xl">

            {/* ================================================= */}
            {/* DASHBOARD */}
            {/* ================================================= */}

            {activePage === "dashboard" && (
              <DashboardHome
                player={player}
                sportStats={sportStats}
                setActivePage={setActivePage}
              />
            )}

            {/* ================================================= */}
            {/* PROFILE */}
            {/* ================================================= */}

            {activePage === "profile" && (
              <ProfilePage player={player} />
            )}

            {/* ================================================= */}
            {/* PERFORMANCE */}
            {/* ================================================= */}

            {activePage === "performance" && (
              <PerformancePage
                player={player}
                sportStats={sportStats}
              />
            )}

            {/* ================================================= */}
            {/* TEAMS */}
            {/* ================================================= */}

            {activePage === "teams" && (
              <TeamsPage player={player} />
            )}

            {/* ================================================= */}
            {/* MATCHES */}
            {/* ================================================= */}

            {activePage === "matches" && (
              <MatchesPage player={player} />
            )}

            {/* ================================================= */}
            {/* ACHIEVEMENTS */}
            {/* ================================================= */}

            {activePage === "achievements" && (
              <AchievementsPage player={player} />
            )}

            {/* ================================================= */}
            {/* MESSAGES */}
            {/* ================================================= */}

            {activePage === "messages" && (
              <MessagesPage player={player} />
            )}

            {/* ================================================= */}
            {/* NOTIFICATIONS */}
            {/* ================================================= */}

            {activePage === "notifications" && (
              <NotificationsPage />
            )}

            {/* ================================================= */}
            {/* SETTINGS */}
            {/* ================================================= */}

            {activePage === "settings" && (
              <SettingsPage player={player} />
            )}

          </div>

        </main>
      </div>
    </div>
  );
};

/* ============================================================= */
/* SIDEBAR */
/* ============================================================= */

const PlayerSidebar = ({
  player,
  activePage,
  setActivePage,
  mobileOpen,
  setMobileOpen,
  onLogout,
  onHome
}) => {
  return (
    <>
      {/* Mobile Overlay */}

      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-950/40 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={`
          fixed
          inset-y-0
          left-0
          z-50
          flex
          w-72
          flex-col
          border-r
          border-slate-200
          bg-white
          shadow-xl
          transition-transform
          duration-300
          lg:translate-x-0
          lg:shadow-none
          ${
            mobileOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >

        {/* =================================================== */}
        {/* LOGO */}
        {/* =================================================== */}

        <div className="flex h-20 items-center justify-between border-b border-slate-100 px-6">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-200">
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
            </div>

            <div>
              <h1 className="text-lg font-black tracking-tight text-slate-900">
                Play<span className="text-blue-600">Nexa</span>
              </h1>

              <p className="text-[7px] font-bold tracking-[0.22em] uppercase text-slate-400">
                PLAY • CONNECT • COMPETE
              </p>
            </div>

          </div>

          <button
            onClick={() => setMobileOpen(false)}
            className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 lg:hidden"
          >
            <FaXmark />
          </button>

        </div>

        {/* =================================================== */}
        {/* PLAYER MINI PROFILE */}
        {/* =================================================== */}

        <div className="border-b border-slate-100 p-5">

          <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">

            <div className="h-11 w-11 shrink-0 overflow-hidden rounded-xl bg-blue-100">

              {player.profileImage ? (
                <img
                  src={player.profileImage}
                  alt={player.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-lg font-black text-blue-600">
                  {player.name?.charAt(0)}
                </div>
              )}

            </div>

            <div className="min-w-0">

              <p className="truncate text-sm font-black text-slate-900">
                {player.name}
              </p>

              <p className="truncate text-xs font-medium text-slate-500">
                {player.position || player.sport}
              </p>

            </div>

            {player.verified && (
              <div className="ml-auto flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600 text-[9px] text-white">
                <FaCheck />
              </div>
            )}

          </div>

        </div>

        {/* =================================================== */}
        {/* NAVIGATION */}
        {/* =================================================== */}

        <nav className="flex-1 overflow-y-auto px-4 py-5">

          <p className="mb-3 px-3 text-[10px] font-black uppercase tracking-widest text-slate-400">
            Main Menu
          </p>

          <div className="space-y-1">

            {sidebarItems.map((item) => {

              const active = activePage === item.key;

              return (
                <button
                  key={item.key}
                  onClick={() => {
                    setActivePage(item.key);
                    setMobileOpen(false);
                  }}
                  className={`
                    group
                    flex
                    w-full
                    items-center
                    gap-3
                    rounded-xl
                    px-3
                    py-3
                    text-left
                    text-sm
                    font-bold
                    transition
                    ${
                      active
                        ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    }
                  `}
                >

                  <span
                    className={`
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-lg
                      text-sm
                      ${
                        active
                          ? "bg-white/15 text-white"
                          : "bg-slate-100 text-slate-500 group-hover:text-blue-600"
                      }
                    `}
                  >
                    {item.icon}
                  </span>

                  <span>
                    {item.label}
                  </span>

                  {item.key === "notifications" && (
                    <span className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1.5 text-[10px] text-white">
                      3
                    </span>
                  )}

                </button>
              );
            })}

          </div>

          {/* Account */}

          <p className="mb-3 mt-8 px-3 text-[10px] font-black uppercase tracking-widest text-slate-400">
            Account
          </p>

          <button
            onClick={() => {
              setActivePage("settings");
              setMobileOpen(false);
            }}
            className={`
              group
              flex
              w-full
              items-center
              gap-3
              rounded-xl
              px-3
              py-3
              text-left
              text-sm
              font-bold
              transition
              ${
                activePage === "settings"
                  ? "bg-blue-600 text-white"
                  : "text-slate-600 hover:bg-slate-100"
              }
            `}
          >

            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-500 group-hover:text-blue-600">
              <FaGear />
            </span>

            Settings

          </button>

        </nav>

        {/* =================================================== */}
        {/* LOGOUT */}
        {/* =================================================== */}

        <div className="border-t border-slate-100 p-4">

          <button
            onClick={onHome}
            className="
              flex
              w-full
              items-center
              gap-3
              rounded-xl
              px-3
              py-3
              text-sm
              font-bold
              text-black
              transition
              hover:bg-gray-50
            "
          >

            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-50">
              <AiOutlineHome className="text-[18px]" />
            </span>

            Home

          </button>
          <button
            onClick={onLogout}
            className="
              flex
              w-full
              items-center
              gap-3
              rounded-xl
              px-3
              py-3
              text-sm
              font-bold
              text-red-500
              transition
              hover:bg-red-50
            "
          >

            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-50">
              <FaRightFromBracket />
            </span>

            Logout

          </button>

        </div>

      </aside>
    </>
  );
};

/* ============================================================= */
/* DASHBOARD HOME */
/* ============================================================= */

const DashboardHome = ({
  player,
  sportStats,
  setActivePage,
}) => {
  return (
    <div className="space-y-6">

      {/* ===================================================== */}
      {/* WELCOME */}
      {/* ===================================================== */}

      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 p-6 text-white shadow-lg shadow-blue-100 sm:p-8">

        <div className="relative z-10 max-w-2xl">

          <p className="text-sm font-semibold text-blue-100">
            Welcome back 👋
          </p>

          <h1 className="mt-1 text-3xl font-black tracking-tight sm:text-4xl">
            {player.name}
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-6 text-blue-100 sm:text-base">
            Keep improving your performance and stay connected
            with your sports community.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">

            <button
              onClick={() => setActivePage("performance")}
              className="rounded-xl bg-white px-4 py-2.5 text-sm font-bold text-blue-700 transition hover:bg-blue-50"
            >
              View Performance
            </button>

            <button
              onClick={() => setActivePage("profile")}
              className="rounded-xl border border-white/30 bg-white/10 px-4 py-2.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20"
            >
              View Profile
            </button>

          </div>

        </div>

        {/* Decorative circles */}

        <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-white/10" />

        <div className="absolute -bottom-28 right-1/4 h-64 w-64 rounded-full bg-white/10" />

        <FaTrophy className="absolute bottom-8 right-12 hidden text-7xl text-white/10 sm:block" />

      </section>

      {/* ===================================================== */}
      {/* QUICK STATS */}
      {/* ===================================================== */}

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">

        <DashboardStat
          icon={<FaStar />}
          label="Player Rating"
          value={player.rating ?? "-"}
          color="amber"
        />

        <DashboardStat
          icon={<FaCalendarDays />}
          label="Matches"
          value={getStatValue(player, [
            "matches",
            "games",
          ])}
          color="blue"
        />

        <DashboardStat
          icon={<FaTrophy />}
          label="Wins"
          value={getStatValue(player, ["wins"])}
          color="emerald"
        />

        <DashboardStat
          icon={<FaFire />}
          label="Experience"
          value={
            player.experienceYears != null
              ? `${player.experienceYears}y`
              : "-"
          }
          color="violet"
        />

      </div>

      {/* ===================================================== */}
      {/* MAIN GRID */}
      {/* ===================================================== */}

      <div className="grid gap-6 lg:grid-cols-3">

        {/* Performance */}

        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:col-span-2 sm:p-6">

          <div className="flex items-center justify-between">

            <div>
              <h2 className="text-lg font-black text-slate-900">
                Performance Overview
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Your latest {player.sport} statistics
              </p>
            </div>

            <button
              onClick={() => setActivePage("performance")}
              className="flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-700"
            >
              View All
              <FaArrowRight />
            </button>

          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">

            {sportStats.slice(0, 8).map((stat, index) => (
              <StatCard
                key={`${stat.label}-${index}`}
                label={stat.label}
                value={stat.value}
                icon={stat.icon}
              />
            ))}

          </div>

        </section>

        {/* Profile completion */}

        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

          <h2 className="text-lg font-black text-slate-900">
            Profile Overview
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Your player information
          </p>

          <div className="mt-5 flex items-center gap-4">

            <div className="h-16 w-16 overflow-hidden rounded-2xl bg-blue-100">

              {player.profileImage ? (
                <img
                  src={player.profileImage}
                  alt={player.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-xl font-black text-blue-600">
                  {player.name?.charAt(0)}
                </div>
              )}

            </div>

            <div className="min-w-0">

              <h3 className="truncate font-black text-slate-900">
                {player.name}
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                {player.position || "Athlete"}
              </p>

            </div>

          </div>

          <div className="mt-6 space-y-3">

            <InfoLine
              icon={<FaTrophy />}
              label="Sport"
              value={player.sport}
            />

            <InfoLine
              icon={<FaLocationDot />}
              label="Location"
              value={
                player.city && player.country
                  ? `${player.city}, ${player.country}`
                  : "-"
              }
            />

            <InfoLine
              icon={<FaPeopleGroup />}
              label="Team"
              value={player.team || "Free Agent"}
            />

          </div>

          <button
            onClick={() => setActivePage("profile")}
            className="mt-6 w-full rounded-xl bg-slate-100 py-3 text-sm font-bold text-slate-700 transition hover:bg-blue-50 hover:text-blue-600"
          >
            View Full Profile
          </button>

        </section>

      </div>

      {/* ===================================================== */}
      {/* LOWER GRID */}
      {/* ===================================================== */}

      <div className="grid gap-6 lg:grid-cols-3">

        {/* Upcoming match */}

        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

          <div className="flex items-center justify-between">

            <div>
              <h2 className="text-lg font-black text-slate-900">
                Next Match
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Upcoming fixture
              </p>
            </div>

            <FaCalendarDays className="text-xl text-blue-500" />

          </div>

          <div className="mt-5 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 p-5">

            <div className="flex items-center justify-between text-xs font-bold text-slate-500">
              <span>Tomorrow</span>
              <span>6:30 PM</span>
            </div>

            <div className="mt-5 flex items-center justify-between">

              <div className="text-center">

                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 font-black text-white">
                  {player.team?.charAt(0) || "A"}
                </div>

                <p className="mt-2 text-xs font-bold text-slate-700">
                  {player.team || "Your Team"}
                </p>

              </div>

              <div className="text-sm font-black text-slate-400">
                VS
              </div>

              <div className="text-center">

                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-slate-700 font-black text-white">
                  OP
                </div>

                <p className="mt-2 text-xs font-bold text-slate-700">
                  Opponent
                </p>

              </div>

            </div>

          </div>

          <button
            onClick={() => setActivePage("matches")}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-100 py-3 text-sm font-bold text-slate-700 hover:bg-blue-50 hover:text-blue-600"
          >
            View Matches
            <FaArrowRight />
          </button>

        </section>

        {/* Recent activity */}

        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:col-span-2 sm:p-6">

          <div className="flex items-center justify-between">

            <div>
              <h2 className="text-lg font-black text-slate-900">
                Recent Activity
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Your latest sports activities
              </p>
            </div>

            <FaBolt className="text-xl text-amber-500" />

          </div>

          <div className="mt-5 space-y-3">

            <ActivityItem
              icon={<FaTrophy />}
              title="Performance updated"
              description={`${player.sport} statistics have been updated`}
              time="Today"
              color="blue"
            />

            <ActivityItem
              icon={<FaCircleCheck />}
              title="Profile verified"
              description="Your player profile is verified"
              time="2 days ago"
              color="emerald"
            />

            <ActivityItem
              icon={<FaPeopleGroup />}
              title="Team activity"
              description={
                player.team
                  ? `You are currently part of ${player.team}`
                  : "You are currently looking for a team"
              }
              time="5 days ago"
              color="violet"
            />

          </div>

        </section>

      </div>

    </div>
  );
};

/* ============================================================= */
/* PROFILE PAGE */
/* ============================================================= */

const ProfilePage = ({ player }) => {
  const sport = player.sport?.toLowerCase();

  return (
    <div className="space-y-6">

      <PageHeader
        title="My Profile"
        description="Manage and view your player profile"
        icon={<FaUser />}
      />

      {/* Profile Header */}

      <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

        <div
          className={`relative h-36 ${getSportGradient(sport)}`}
        >

          <div className="absolute -right-10 -top-20 h-56 w-56 rounded-full bg-white/10" />

          <div className="absolute bottom-4 right-5 rounded-full bg-black/10 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-sm">
            {player.sport}
          </div>

        </div>

        <div className="px-5 pb-6 sm:px-8">

          <div className="flex flex-col gap-5 sm:flex-row sm:items-end">

            <div className="-mt-16 shrink-0 z-20">

              <div className="h-32 w-32 overflow-hidden rounded-2xl border-4 border-white bg-slate-100 shadow-lg z-20">

                {player.profileImage ? (
                  <img
                    src={player.profileImage}
                    alt={player.name}
                    className="h-full w-full object-cover z-10 relative"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-4xl font-black text-slate-400">
                    {player.name?.charAt(0)}
                  </div>
                )}

              </div>

            </div>

            <div className="min-w-0 flex-1">

              <div className="flex flex-wrap items-center gap-2">

                <h1 className="text-2xl font-black text-slate-900 sm:text-3xl">
                  {player.name}
                </h1>

                {player.verified && (
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs text-white">
                    <FaCheck />
                  </span>
                )}

              </div>

              <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-500">

                {player.position && (
                  <span className="font-semibold text-blue-600">
                    {player.position}
                  </span>
                )}

                {player.team && (
                  <span>{player.team}</span>
                )}

                {player.city && player.country && (
                  <span className="flex items-center gap-1">
                    <FaLocationDot className="text-xs" />
                    {player.city}, {player.country}
                  </span>
                )}

              </div>

            </div>

            <div className="flex items-center gap-3 rounded-xl border border-amber-100 bg-amber-50 px-4 py-3 mt-1">

              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-500">
                <FaStar />
              </div>

              <div>
                <p className="text-xl font-black text-slate-900">
                  {player.rating ?? "-"}
                </p>

                <p className="text-[11px] font-semibold text-slate-500">
                  PLAYER RATING
                </p>
              </div>

            </div>

          </div>

          <div className="mt-5 flex flex-wrap gap-2">

            {player.availability && (
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-600">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                {player.availability}
              </span>
            )}

            {player.verified && (
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-600">
                <FaShieldHalved />
                Verified Player
              </span>
            )}

            <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-600">
              {player.sport}
            </span>

          </div>

        </div>

      </section>

      <div className="grid gap-6 lg:grid-cols-3">

        {/* About */}

        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:col-span-2 sm:p-6">

          <h2 className="text-lg font-black text-slate-900">
            About {player.firstName || player.name}
          </h2>

          <p className="mt-3 leading-7 text-slate-600">
            {player.bio ||
              "No player biography has been added yet."}
          </p>

          {player.experienceYears != null && (
            <div className="mt-5 flex items-center gap-3 rounded-xl bg-slate-50 p-4">

              <FaMedal className="text-xl text-blue-500" />

              <div>
                <p className="text-sm font-bold text-slate-900">
                  {player.experienceYears} Years Experience
                </p>

                <p className="text-xs text-slate-500">
                  Competitive {player.sport} experience
                </p>
              </div>

            </div>
          )}

        </section>

        {/* Details */}

        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

          <h2 className="text-lg font-black text-slate-900">
            Player Details
          </h2>

          <div className="mt-5 space-y-4">

            <DetailRow
              icon={<FaTrophy />}
              label="Sport"
              value={player.sport}
            />

            {player.position && (
              <DetailRow
                icon={<FaUsers />}
                label="Position"
                value={player.position}
              />
            )}

            {player.jerseyNumber != null && (
              <DetailRow
                icon={<FaShirt />}
                label="Jersey Number"
                value={`#${player.jerseyNumber}`}
              />
            )}

            {player.age != null && (
              <DetailRow
                icon={<FaCalendarDays />}
                label="Age"
                value={`${player.age} years`}
              />
            )}

            {player.city && player.country && (
              <DetailRow
                icon={<FaLocationDot />}
                label="Location"
                value={`${player.city}, ${player.country}`}
              />
            )}

            {player.experienceYears != null && (
              <DetailRow
                icon={<FaMedal />}
                label="Experience"
                value={`${player.experienceYears} years`}
              />
            )}

          </div>

        </section>

      </div>

      {/* Skills */}

      {player.skills && (
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

          <h2 className="text-lg font-black text-slate-900">
            Skills
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Player abilities and strengths
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">

            {Object.entries(player.skills).map(
              ([skill, value], index) => (
                <SkillBar
                  key={skill}
                  label={formatLabel(skill)}
                  value={value}
                  color={getSkillColor(index)}
                />
              )
            )}

          </div>

        </section>
      )}

    </div>
  );
};

/* ============================================================= */
/* PERFORMANCE PAGE */
/* ============================================================= */

const PerformancePage = ({
  player,
  sportStats,
}) => {
  return (
    <div className="space-y-6">

      <PageHeader
        title="Performance"
        description={`${player.sport} statistics and performance metrics`}
        icon={<FaChartLine />}
      />

      {/* Performance Cards */}

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">

          {sportStats.map((stat, index) => (
            <StatCard
              key={`${stat.label}-${index}`}
              label={stat.label}
              value={stat.value}
              icon={stat.icon}
            />
          ))}

        </div>

      </section>

      {/* Skills */}

      {player.skills && (
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

          <div className="mb-6">

            <h2 className="text-lg font-black text-slate-900">
              Skill Analysis
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Current skill levels
            </p>

          </div>

          <div className="grid gap-5 md:grid-cols-2">

            {Object.entries(player.skills).map(
              ([skill, value], index) => (
                <SkillBar
                  key={skill}
                  label={formatLabel(skill)}
                  value={value}
                  color={getSkillColor(index)}
                />
              )
            )}

          </div>

        </section>
      )}

      {/* Performance Summary */}

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            <FaArrowTrendUp />
          </div>

          <div>
            <h2 className="font-black text-slate-900">
              Performance Summary
            </h2>

            <p className="text-sm text-slate-500">
              Current player statistics
            </p>
          </div>

        </div>

        <div className="mt-5 rounded-xl bg-slate-50 p-5">

          <p className="text-sm leading-7 text-slate-600">
            {player.name} currently plays{" "}
            <strong>{player.sport}</strong>
            {player.position
              ? ` as ${player.position}.`
              : "."}{" "}
            Use the performance metrics above to track progress
            and identify areas for improvement.
          </p>

        </div>

      </section>

    </div>
  );
};

/* ============================================================= */
/* TEAMS PAGE */
/* ============================================================= */

const TeamsPage = ({ player }) => {
  return (
    <div className="space-y-6">

      <PageHeader
        title="My Teams"
        description="Teams and organizations you're connected with"
        icon={<FaPeopleGroup />}
      />

      {player.team ? (
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-xl font-black text-white shadow-lg shadow-blue-100">
              {player.team.charAt(0)}
            </div>

            <div className="flex-1">

              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Current Team
              </p>

              <h2 className="mt-1 text-2xl font-black text-slate-900">
                {player.team}
              </h2>

              <div className="mt-2 flex flex-wrap gap-3 text-sm text-slate-500">

                {player.position && (
                  <span className="font-semibold text-blue-600">
                    {player.position}
                  </span>
                )}

                {player.jerseyNumber != null && (
                  <span>
                    Jersey #{player.jerseyNumber}
                  </span>
                )}

              </div>

            </div>

            <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-600">
              Active Member
            </span>

          </div>

        </section>
      ) : (
        <EmptyState
          icon={<FaPeopleGroup />}
          title="No Team Yet"
          description="You are currently not associated with a team."
        />
      )}

    </div>
  );
};

/* ============================================================= */
/* MATCHES PAGE */
/* ============================================================= */

const MatchesPage = ({ player }) => {
  return (
    <div className="space-y-6">

      <PageHeader
        title="Matches"
        description="Upcoming and recent matches"
        icon={<FaCalendarDays />}
      />

      {/* Upcoming */}

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            <FaCalendarDays />
          </div>

          <div>
            <h2 className="font-black text-slate-900">
              Upcoming Match
            </h2>

            <p className="text-sm text-slate-500">
              Tomorrow at 6:30 PM
            </p>
          </div>

        </div>

        <div className="mt-6 rounded-2xl bg-slate-50 p-5">

          <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">

            <TeamBox
              name={player.team || "Your Team"}
              color="blue"
            />

            <div className="text-center">

              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Tomorrow
              </p>

              <p className="mt-1 text-2xl font-black text-slate-900">
                6:30 PM
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Friendly Match
              </p>

            </div>

            <TeamBox
              name="Opponent"
              color="slate"
            />

          </div>

        </div>

      </section>

      {/* Recent */}

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

        <h2 className="text-lg font-black text-slate-900">
          Recent Matches
        </h2>

        <div className="mt-5 space-y-3">

          <MatchRow
            opponent="City Sports Club"
            result="Won"
            score="3 - 1"
          />

          <MatchRow
            opponent="United Athletic"
            result="Won"
            score="2 - 0"
          />

          <MatchRow
            opponent="Champions FC"
            result="Lost"
            score="1 - 2"
          />

        </div>

      </section>

    </div>
  );
};

/* ============================================================= */
/* ACHIEVEMENTS */
/* ============================================================= */

const AchievementsPage = ({ player }) => {
  return (
    <div className="space-y-6">

      <PageHeader
        title="Achievements"
        description="Your trophies, awards and milestones"
        icon={<FaTrophy />}
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

        <AchievementCard
          icon={<FaTrophy />}
          title="Player Achievement"
          description={`Strong performance in ${player.sport}`}
          color="amber"
        />

        <AchievementCard
          icon={<FaMedal />}
          title="Experienced Athlete"
          description={`${player.experienceYears || 0} years of experience`}
          color="blue"
        />

        <AchievementCard
          icon={<FaStar />}
          title="Player Rating"
          description={`Current rating: ${player.rating ?? "-"}`}
          color="violet"
        />

      </div>

    </div>
  );
};

/* ============================================================= */
/* MESSAGES */
/* ============================================================= */

const MessagesPage = ({ player }) => {
  return (
    <div className="space-y-6">

      <PageHeader
        title="Messages"
        description="Communicate with teams, coaches and players"
        icon={<FaMessage />}
      />

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

        <MessageRow
          name="Team Manager"
          message={`Welcome to ${player.team || "SportConnect"}!`}
          time="10:30 AM"
        />

        <MessageRow
          name="Coach"
          message="Great performance in the last match."
          time="Yesterday"
        />

        <MessageRow
          name="SportConnect"
          message="Your player profile has been updated."
          time="2 days ago"
        />

      </section>

    </div>
  );
};

/* ============================================================= */
/* NOTIFICATIONS */
/* ============================================================= */

const NotificationsPage = () => {
  return (
    <div className="space-y-6">

      <PageHeader
        title="Notifications"
        description="Stay updated with your sports activities"
        icon={<FaBell />}
      />

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

        <NotificationRow
          title="New team invitation"
          description="You received a new team invitation."
          time="10 minutes ago"
          color="blue"
        />

        <NotificationRow
          title="Match reminder"
          description="Your match is scheduled for tomorrow."
          time="2 hours ago"
          color="amber"
        />

        <NotificationRow
          title="Profile verified"
          description="Your player profile is now verified."
          time="Yesterday"
          color="emerald"
        />

      </section>

    </div>
  );
};

/* ============================================================= */
/* SETTINGS */
/* ============================================================= */

const SettingsPage = ({ player }) => {
  return (
    <div className="space-y-6">

      <PageHeader
        title="Settings"
        description="Manage your account and preferences"
        icon={<FaGear />}
      />

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

        <h2 className="text-lg font-black text-slate-900">
          Account Settings
        </h2>

        <div className="mt-6 space-y-5">

          <SettingRow
            label="Player Name"
            value={player.name}
          />

          <SettingRow
            label="Sport"
            value={player.sport}
          />

          <SettingRow
            label="Email Notifications"
            value="Enabled"
          />

          <SettingRow
            label="Profile Visibility"
            value="Public"
          />

        </div>

      </section>

    </div>
  );
};

/* ============================================================= */
/* PAGE HEADER */
/* ============================================================= */

const PageHeader = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

      <div className="flex items-center gap-4">

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-100">
          {icon}
        </div>

        <div>

          <h1 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
            {title}
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            {description}
          </p>

        </div>

      </div>

    </div>
  );
};

/* ============================================================= */
/* DASHBOARD STAT */
/* ============================================================= */

const DashboardStat = ({
  icon,
  label,
  value,
  color,
}) => {

  const colors = {
    blue: "bg-blue-50 text-blue-600",
    amber: "bg-amber-50 text-amber-500",
    emerald: "bg-emerald-50 text-emerald-500",
    violet: "bg-violet-50 text-violet-500",
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">

      <div className="flex items-center gap-3">

        <div
          className={`flex h-10 w-10 items-center justify-center rounded-xl ${colors[color]}`}
        >
          {icon}
        </div>

        <div className="min-w-0">

          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
            {label}
          </p>

          <p className="mt-1 text-xl font-black text-slate-900">
            {value}
          </p>

        </div>

      </div>

    </div>
  );
};

/* ============================================================= */
/* STAT CARD */
/* ============================================================= */

const StatCard = ({
  label,
  value,
  icon,
}) => {
  return (
    <div className="relative rounded-xl border border-slate-100 bg-slate-50 p-4 text-center">

      {icon && (
        <div className="absolute right-3 top-3 text-xs text-amber-400">
          {icon}
        </div>
      )}

      <p className="break-words text-xl font-black text-slate-900">
        {value}
      </p>

      <p className="mt-1 text-[10px] font-bold uppercase tracking-wide text-slate-400">
        {label}
      </p>

    </div>
  );
};

/* ============================================================= */
/* SKILL BAR */
/* ============================================================= */

const SkillBar = ({
  label,
  value,
  color,
}) => {

  const numericValue = Number(value) || 0;

  return (
    <div>

      <div className="mb-2 flex items-center justify-between">

        <span className="text-sm font-semibold text-slate-700">
          {label}
        </span>

        <span className="text-sm font-black text-slate-900">
          {numericValue}%
        </span>

      </div>

      <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">

        <div
          className={`h-full rounded-full ${color} transition-all duration-700`}
          style={{
            width: `${Math.min(
              Math.max(numericValue, 0),
              100
            )}%`,
          }}
        />

      </div>

    </div>
  );
};

/* ============================================================= */
/* DETAIL ROW */
/* ============================================================= */

const DetailRow = ({
  icon,
  label,
  value,
}) => {
  return (
    <div className="flex items-center gap-3">

      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-sm text-blue-600">
        {icon}
      </div>

      <div className="min-w-0">

        <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400">
          {label}
        </p>

        <p className="truncate text-sm font-semibold text-slate-800">
          {value}
        </p>

      </div>

    </div>
  );
};

/* ============================================================= */
/* INFO LINE */
/* ============================================================= */

const InfoLine = ({
  icon,
  label,
  value,
}) => {
  return (
    <div className="flex items-center gap-3">

      <div className="text-sm text-blue-500">
        {icon}
      </div>

      <div className="min-w-0 flex-1">

        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
          {label}
        </p>

        <p className="truncate text-sm font-semibold text-slate-700">
          {value}
        </p>

      </div>

    </div>
  );
};

/* ============================================================= */
/* ACTIVITY ITEM */
/* ============================================================= */

const ActivityItem = ({
  icon,
  title,
  description,
  time,
  color,
}) => {

  const colors = {
    blue: "bg-blue-50 text-blue-600",
    emerald: "bg-emerald-50 text-emerald-600",
    violet: "bg-violet-50 text-violet-600",
  };

  return (
    <div className="flex items-center gap-3 rounded-xl p-3 transition hover:bg-slate-50">

      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${colors[color]}`}
      >
        {icon}
      </div>

      <div className="min-w-0 flex-1">

        <p className="text-sm font-bold text-slate-800">
          {title}
        </p>

        <p className="mt-0.5 truncate text-xs text-slate-500">
          {description}
        </p>

      </div>

      <span className="shrink-0 text-[10px] font-semibold text-slate-400">
        {time}
      </span>

    </div>
  );
};

/* ============================================================= */
/* TEAM BOX */
/* ============================================================= */

const TeamBox = ({
  name,
  color,
}) => {

  const bg =
    color === "blue"
      ? "bg-blue-600"
      : "bg-slate-700";

  return (
    <div className="text-center">

      <div
        className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl ${bg} text-lg font-black text-white`}
      >
        {name?.charAt(0)}
      </div>

      <p className="mt-2 max-w-28 truncate text-xs font-bold text-slate-700">
        {name}
      </p>

    </div>
  );
};

/* ============================================================= */
/* MATCH ROW */
/* ============================================================= */

const MatchRow = ({
  opponent,
  result,
  score,
}) => {

  const won = result === "Won";

  return (
    <div className="flex items-center gap-4 rounded-xl bg-slate-50 p-4">

      <div
        className={`flex h-10 w-10 items-center justify-center rounded-xl ${
          won
            ? "bg-emerald-50 text-emerald-600"
            : "bg-red-50 text-red-500"
        }`}
      >
        {won ? <FaCircleCheck /> : <FaCircle />}
      </div>

      <div className="min-w-0 flex-1">

        <p className="font-bold text-slate-800">
          vs {opponent}
        </p>

        <p className="mt-1 text-xs text-slate-500">
          Match completed
        </p>

      </div>

      <div className="text-right">

        <p className="font-black text-slate-900">
          {score}
        </p>

        <p
          className={`text-xs font-bold ${
            won
              ? "text-emerald-600"
              : "text-red-500"
          }`}
        >
          {result}
        </p>

      </div>

    </div>
  );
};

/* ============================================================= */
/* ACHIEVEMENT CARD */
/* ============================================================= */

const AchievementCard = ({
  icon,
  title,
  description,
  color,
}) => {

  const colors = {
    amber: "bg-amber-50 text-amber-500",
    blue: "bg-blue-50 text-blue-600",
    violet: "bg-violet-50 text-violet-600",
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

      <div
        className={`flex h-12 w-12 items-center justify-center rounded-xl ${colors[color]}`}
      >
        {icon}
      </div>

      <h3 className="mt-5 font-black text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {description}
      </p>

    </div>
  );
};

/* ============================================================= */
/* MESSAGE ROW */
/* ============================================================= */

const MessageRow = ({
  name,
  message,
  time,
}) => {
  return (
    <div className="flex items-center gap-4 border-b border-slate-100 py-4 last:border-0">

      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 font-black text-blue-600">
        {name.charAt(0)}
      </div>

      <div className="min-w-0 flex-1">

        <p className="font-bold text-slate-800">
          {name}
        </p>

        <p className="mt-1 truncate text-sm text-slate-500">
          {message}
        </p>

      </div>

      <span className="text-xs text-slate-400">
        {time}
      </span>

    </div>
  );
};

/* ============================================================= */
/* NOTIFICATION ROW */
/* ============================================================= */

const NotificationRow = ({
  title,
  description,
  time,
  color,
}) => {

  const colors = {
    blue: "bg-blue-50 text-blue-600",
    amber: "bg-amber-50 text-amber-600",
    emerald: "bg-emerald-50 text-emerald-600",
  };

  return (
    <div className="flex gap-4 border-b border-slate-100 py-5 last:border-0">

      <div
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${colors[color]}`}
      >
        <FaBell />
      </div>

      <div className="flex-1">

        <p className="font-bold text-slate-800">
          {title}
        </p>

        <p className="mt-1 text-sm text-slate-500">
          {description}
        </p>

        <p className="mt-2 text-xs font-semibold text-slate-400">
          {time}
        </p>

      </div>

    </div>
  );
};

/* ============================================================= */
/* SETTING ROW */
/* ============================================================= */

const SettingRow = ({
  label,
  value,
}) => {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-4 last:border-0">

      <div>
        <p className="text-sm font-bold text-slate-800">
          {label}
        </p>

        <p className="mt-1 text-xs text-slate-400">
          Account preference
        </p>
      </div>

      <span className="rounded-lg bg-slate-100 px-3 py-2 text-xs font-bold text-slate-600">
        {value}
      </span>

    </div>
  );
};

/* ============================================================= */
/* EMPTY STATE */
/* ============================================================= */

const EmptyState = ({
  icon,
  title,
  description,
}) => {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm">

      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-xl text-slate-400">
        {icon}
      </div>

      <h2 className="mt-5 text-lg font-black text-slate-900">
        {title}
      </h2>

      <p className="mt-2 text-sm text-slate-500">
        {description}
      </p>

    </section>
  );
};

/* ============================================================= */
/* SPORT STAT CONFIGURATION */
/* ============================================================= */

const getSportStats = (player) => {

  const stats = player.stats || {};
  const sport = player.sport?.toLowerCase();

  switch (sport) {

    case "cricket":

      return [
        {
          label: "Matches",
          value: stats.matches ?? "-",
        },
        {
          label: "Wins",
          value: stats.wins ?? "-",
          icon: <FaTrophy />,
        },
        {
          label: "Runs",
          value: stats.runs ?? "-",
        },
        {
          label: "Average",
          value: stats.average ?? "-",
        },
        {
          label: "Strike Rate",
          value: stats.strikeRate ?? "-",
        },
        {
          label: "Wickets",
          value: stats.wickets ?? "-",
        },
        {
          label: "Highest Score",
          value: stats.highestScore ?? "-",
        },
        {
          label: "Best Bowling",
          value: stats.bestBowling ?? "-",
        },
      ];

    case "football":

      return [
        {
          label: "Matches",
          value: stats.matches ?? "-",
        },
        {
          label: "Goals",
          value: stats.goals ?? "-",
          icon: <FaTrophy />,
        },
        {
          label: "Assists",
          value: stats.assists ?? "-",
        },
        {
          label: "Shots",
          value: stats.shots ?? "-",
        },
        {
          label: "Shots On Target",
          value: stats.shotsOnTarget ?? "-",
        },
        {
          label: "Pass Accuracy",
          value: formatPercent(stats.passAccuracy),
        },
        {
          label: "Clean Sheets",
          value: stats.cleanSheets ?? "-",
        },
        {
          label: "Minutes",
          value: stats.minutes ?? "-",
        },
      ];

    case "basketball":

      return [
        {
          label: "Games",
          value: stats.games ?? stats.matches ?? "-",
        },
        {
          label: "Points",
          value: stats.points ?? "-",
          icon: <FaTrophy />,
        },
        {
          label: "Rebounds",
          value: stats.rebounds ?? "-",
        },
        {
          label: "Assists",
          value: stats.assists ?? "-",
        },
        {
          label: "Steals",
          value: stats.steals ?? "-",
        },
        {
          label: "Blocks",
          value: stats.blocks ?? "-",
        },
        {
          label: "3PT %",
          value: formatPercent(
            stats.threePointPercentage
          ),
        },
        {
          label: "FG %",
          value: formatPercent(
            stats.fieldGoalPercentage
          ),
        },
      ];

    case "badminton":

      return [
        {
          label: "Matches",
          value: stats.matches ?? "-",
        },
        {
          label: "Wins",
          value: stats.wins ?? "-",
          icon: <FaTrophy />,
        },
        {
          label: "Games Won",
          value: stats.gamesWon ?? "-",
        },
        {
          label: "Games Lost",
          value: stats.gamesLost ?? "-",
        },
        {
          label: "Points Won",
          value: stats.pointsWon ?? "-",
        },
        {
          label: "Points Lost",
          value: stats.pointsLost ?? "-",
        },
        {
          label: "Win Rate",
          value: formatPercent(stats.winRate),
        },
        {
          label: "Titles",
          value: stats.titles ?? "-",
        },
      ];

    case "tennis":

      return [
        {
          label: "Matches",
          value: stats.matches ?? "-",
        },
        {
          label: "Wins",
          value: stats.wins ?? "-",
          icon: <FaTrophy />,
        },
        {
          label: "Sets Won",
          value: stats.setsWon ?? "-",
        },
        {
          label: "Sets Lost",
          value: stats.setsLost ?? "-",
        },
        {
          label: "Games Won",
          value: stats.gamesWon ?? "-",
        },
        {
          label: "Aces",
          value: stats.aces ?? "-",
        },
        {
          label: "Break Points",
          value: stats.breakPointsConverted ?? "-",
        },
        {
          label: "Titles",
          value: stats.titles ?? "-",
        },
      ];

    case "volleyball":

      return [
        {
          label: "Matches",
          value: stats.matches ?? "-",
        },
        {
          label: "Wins",
          value: stats.wins ?? "-",
          icon: <FaTrophy />,
        },
        {
          label: "Spikes",
          value: stats.successfulSpikes ?? "-",
        },
        {
          label: "Blocks",
          value: stats.blocks ?? "-",
        },
        {
          label: "Aces",
          value: stats.aces ?? "-",
        },
        {
          label: "Sets Won",
          value: stats.setsWon ?? "-",
        },
        {
          label: "Attack Success",
          value: formatPercent(stats.attackSuccess),
        },
        {
          label: "Points",
          value: stats.points ?? "-",
        },
      ];

    default:

      return Object.entries(stats)
        .slice(0, 8)
        .map(([key, value]) => ({
          label: formatLabel(key),
          value: value ?? "-",
        }));
  }
};

/* ============================================================= */
/* HELPERS */
/* ============================================================= */

const getStatValue = (player, keys) => {

  const stats = player.stats || {};

  for (const key of keys) {
    if (
      stats[key] !== undefined &&
      stats[key] !== null
    ) {
      return stats[key];
    }
  }

  return "-";
};

const formatPercent = (value) => {

  if (value === undefined || value === null) {
    return "-";
  }

  return `${value}%`;
};

const formatLabel = (value) => {

  return value
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) =>
      str.toUpperCase()
    );
};

const getSkillColor = (index) => {

  const colors = [
    "bg-blue-600",
    "bg-cyan-500",
    "bg-emerald-500",
    "bg-violet-500",
    "bg-amber-500",
    "bg-rose-500",
  ];

  return colors[index % colors.length];
};

const getSportGradient = (sport) => {

  switch (sport) {

    case "cricket":
      return "bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500";

    case "football":
      return "bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-500";

    case "basketball":
      return "bg-gradient-to-r from-orange-600 via-orange-500 to-amber-400";

    case "badminton":
      return "bg-gradient-to-r from-red-600 via-red-500 to-orange-400";

    case "tennis":
      return "bg-gradient-to-r from-green-700 via-green-600 to-lime-500";

    case "volleyball":
      return "bg-gradient-to-r from-violet-700 via-violet-600 to-purple-500";

    default:
      return "bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400";
  }
};

/* ============================================================= */
/* EXPORT */
/* ============================================================= */

export default PlayerDashboard;
