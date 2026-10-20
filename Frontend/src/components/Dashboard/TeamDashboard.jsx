import React, { useMemo, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineHome } from 'react-icons/ai'

import {
  FaArrowRight,
  FaArrowTrendUp,
  FaBars,
  FaBell,
  FaBolt,
  FaCalendarDays,
  FaChartLine,
  FaCheck,
  FaCircle,
  FaCircleCheck,
  FaFire,
  FaGear,
  FaHouse,
  FaLocationDot,
  FaMedal,
  FaMessage,
  FaPeopleGroup,
  FaRightFromBracket,
  FaShieldHalved,
  FaShirt,
  FaStar,
  FaTrophy,
  FaUser,
  FaUsers,
  FaXmark,
} from "react-icons/fa6";
import { getPlayers, getTeams } from "../../utils/localStorage";

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
    label: "Team Profile",
    icon: <FaUsers />,
    key: "profile",
  },
  {
    label: "My Squad",
    icon: <FaPeopleGroup />,
    key: "squad",
  },
  {
    label: "Performance",
    icon: <FaChartLine />,
    key: "performance",
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

const TeamDashboard = () => {

  const teams=getTeams();
  const players=getPlayers();
  const navigate = useNavigate();
  const { teamId } = useParams();

  const [activePage, setActivePage] = useState("dashboard");
  const [mobileOpen, setMobileOpen] = useState(false);

  /* =========================================================== */
  /* FIND TEAM */
  /* =========================================================== */

  const team = teams?.find(
    (team) => String(team.id) === String(teamId)
  );

  /* =========================================================== */
  /* GET FULL PLAYER PROFILES FROM PLAYER IDS */
  /* =========================================================== */

  const squadPlayers = useMemo(() => {
    if (!team) return [];

    /*
      IMPORTANT:

      team.squad contains player IDs only.

      Example:
      squad: ["p1", "p2", "p3"]

      We find the COMPLETE player object from players/utils/data.
    */

    const squadIds =
      team.squad ||
      team.players ||
      team.playerIds ||
      [];

    return squadIds
      .map((playerId) => {
        const id =
          typeof playerId === "object"
            ? playerId.id
            : playerId;

        return players?.find(
          (player) =>
            String(player.id) === String(id)
        );
      })
      .filter(Boolean);
  }, [team]);

  /* =========================================================== */
  /* LOGOUT */
  /* =========================================================== */

  const handleLogout = () => {
        localStorage.setItem("user","");
    localStorage.setItem("LoggedInUser","");

    navigate("/login");
  };

  const goHome=()=>{
    navigate("/");
  }

  /* =========================================================== */
  /* TEAM NOT FOUND */
  /* =========================================================== */

  if (!team) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 px-5">
        <div className="text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
            <FaUsers className="text-2xl" />
          </div>

          <h1 className="mt-5 text-2xl font-black text-slate-900">
            Team Not Found
          </h1>

          <p className="mt-2 text-slate-500">
            The team you're looking for doesn't exist.
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

  return (
    <div className="min-h-screen bg-slate-50">

      {/* ===================================================== */}
      {/* SIDEBAR */}
      {/* ===================================================== */}

      <TeamSidebar
        team={team}
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

          <div className="ml-3 min-w-0">

            <h1 className="text-lg font-black tracking-tight text-slate-900">
                Play<span className="text-blue-600">Nexa</span>
              </h1>

            <p className="text-[7px] font-bold tracking-[0.22em] uppercase  text-slate-400">
              PLAY • CONNECT • COMPETE
            </p>

          </div>

          <div className="ml-auto">

            <TeamAvatar team={team} size="small" />

          </div>

        </header>

        {/* =================================================== */}
        {/* PAGE CONTENT */}
        {/* =================================================== */}

        <main className="min-h-screen px-4 py-6 sm:px-6 lg:px-8 lg:py-8">

          <div className="mx-auto max-w-7xl">

            {activePage === "dashboard" && (
              <TeamDashboardHome
                team={team}
                squadPlayers={squadPlayers}
                setActivePage={setActivePage}
              />
            )}

            {activePage === "profile" && (
              <TeamProfilePage
                team={team}
                squadPlayers={squadPlayers}
              />
            )}

            {activePage === "squad" && (
              <SquadPage
                team={team}
                squadPlayers={squadPlayers}
              />
            )}

            {activePage === "performance" && (
              <TeamPerformancePage
                team={team}
                squadPlayers={squadPlayers}
              />
            )}

            {activePage === "matches" && (
              <TeamMatchesPage team={team} />
            )}

            {activePage === "achievements" && (
              <TeamAchievementsPage team={team} />
            )}

            {activePage === "messages" && (
              <TeamMessagesPage team={team} />
            )}

            {activePage === "notifications" && (
              <TeamNotificationsPage />
            )}

            {activePage === "settings" && (
              <TeamSettingsPage team={team} />
            )}

          </div>

        </main>

      </div>

    </div>
  );
};

/* ============================================================= */
/* TEAM SIDEBAR */
/* ============================================================= */

const TeamSidebar = ({
  team,
  activePage,
  setActivePage,
  mobileOpen,
  setMobileOpen,
  onLogout,
  onHome,
}) => {
  return (
    <>
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

              <p className="text-[7px] font-bold tracking-[0.22em] uppercase  text-slate-400">
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
        {/* TEAM MINI PROFILE */}
        {/* =================================================== */}

        <div className="border-b border-slate-100 p-5">

          <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">

            <TeamAvatar
              team={team}
              size="medium"
            />

            <div className="min-w-0">

              <p className="truncate text-sm font-black text-slate-900">
                {team.name}
              </p>

              <p className="truncate text-xs font-medium text-slate-500">
                {team.sport || "Sports Team"}
              </p>

            </div>

            {team.verified && (
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

              const active =
                activePage === item.key;

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

          {/* ================================================= */}
          {/* ACCOUNT */}
          {/* ================================================= */}

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

            <span
              className={`
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-lg
                ${
                  activePage === "settings"
                    ? "bg-white/15 text-white"
                    : "bg-slate-100 text-slate-500 group-hover:text-blue-600"
                }
              `}
            >
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

const TeamDashboardHome = ({
  team,
  squadPlayers,
  setActivePage,
}) => {
  const stats = getTeamStats(team, squadPlayers);

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
            {team.name}
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-6 text-blue-100 sm:text-base">
            Manage your squad, monitor team performance and
            stay connected with your sports community.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">

            <button
              onClick={() => setActivePage("squad")}
              className="rounded-xl bg-white px-4 py-2.5 text-sm font-bold text-blue-700 transition hover:bg-blue-50"
            >
              View Squad
            </button>

            <button
              onClick={() => setActivePage("performance")}
              className="rounded-xl border border-white/30 bg-white/10 px-4 py-2.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20"
            >
              Performance
            </button>

          </div>

        </div>

        <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-white/10" />

        <div className="absolute -bottom-28 right-1/4 h-64 w-64 rounded-full bg-white/10" />

        <FaUsers className="absolute bottom-8 right-12 hidden text-7xl text-white/10 sm:block" />

      </section>

      {/* ===================================================== */}
      {/* QUICK STATS */}
      {/* ===================================================== */}

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">

        <DashboardStat
          icon={<FaUsers />}
          label="Squad Size"
          value={squadPlayers.length}
          color="blue"
        />

        <DashboardStat
          icon={<FaCalendarDays />}
          label="Matches"
          value={stats.matches}
          color="amber"
        />

        <DashboardStat
          icon={<FaTrophy />}
          label="Wins"
          value={stats.wins}
          color="emerald"
        />

        <DashboardStat
          icon={<FaFire />}
          label="Win Rate"
          value={`${stats.winRate}%`}
          color="violet"
        />

      </div>

      {/* ===================================================== */}
      {/* MAIN GRID */}
      {/* ===================================================== */}

      <div className="grid gap-6 lg:grid-cols-3">

        {/* Team overview */}

        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:col-span-2 sm:p-6">

          <div className="flex items-center justify-between">

            <div>

              <h2 className="text-lg font-black text-slate-900">
                Team Overview
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Current team statistics
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

            <StatCard
              label="Matches"
              value={stats.matches}
              icon={<FaCalendarDays />}
            />

            <StatCard
              label="Wins"
              value={stats.wins}
              icon={<FaTrophy />}
            />

            <StatCard
              label="Losses"
              value={stats.losses}
              icon={<FaCircle />}
            />

            <StatCard
              label="Win Rate"
              value={`${stats.winRate}%`}
              icon={<FaArrowTrendUp />}
            />

          </div>

        </section>

        {/* Team profile */}

        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

          <h2 className="text-lg font-black text-slate-900">
            Team Profile
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Team information
          </p>

          <div className="mt-5 flex items-center gap-4">

            <TeamAvatar
              team={team}
              size="large"
            />

            <div className="min-w-0">

              <h3 className="truncate font-black text-slate-900">
                {team.name}
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                {team.sport || "Sports Team"}
              </p>

            </div>

          </div>

          <div className="mt-6 space-y-3">

            <InfoLine
              icon={<FaTrophy />}
              label="Sport"
              value={team.sport || "-"}
            />

            <InfoLine
              icon={<FaLocationDot />}
              label="Location"
              value={getTeamLocation(team)}
            />

            <InfoLine
              icon={<FaPeopleGroup />}
              label="Players"
              value={squadPlayers.length}
            />

          </div>

          <button
            onClick={() => setActivePage("profile")}
            className="mt-6 w-full rounded-xl bg-slate-100 py-3 text-sm font-bold text-slate-700 transition hover:bg-blue-50 hover:text-blue-600"
          >
            View Team Profile
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

              <TeamBox
                name={team.name}
                color="blue"
              />

              <div className="text-sm font-black text-slate-400">
                VS
              </div>

              <TeamBox
                name="Opponent"
                color="slate"
              />

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

        {/* Squad preview */}

        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:col-span-2 sm:p-6">

          <div className="flex items-center justify-between">

            <div>

              <h2 className="text-lg font-black text-slate-900">
                Squad Players
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Your current team members
              </p>

            </div>

            <button
              onClick={() => setActivePage("squad")}
              className="flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-700"
            >
              View Squad
              <FaArrowRight />
            </button>

          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">

            {squadPlayers
              .slice(0, 4)
              .map((player) => (
                <PlayerMiniCard
                  key={player.id}
                  player={player}
                />
              ))}

            {squadPlayers.length === 0 && (
              <div className="sm:col-span-2">
                <EmptyState
                  icon={<FaUsers />}
                  title="No Players"
                  description="No squad players are currently assigned to this team."
                />
              </div>
            )}

          </div>

        </section>

      </div>

    </div>
  );
};

/* ============================================================= */
/* TEAM PROFILE */
/* ============================================================= */

const TeamProfilePage = ({
  team,
  squadPlayers,
}) => {
  const sport = team.sport?.toLowerCase();

  return (
    <div className="space-y-6">

      <PageHeader
        title="Team Profile"
        description="Manage and view your team profile"
        icon={<FaUsers />}
      />

      <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

        <div
          className={`relative h-36 ${getSportGradient(sport)}`}
        >

          <div className="absolute -right-10 -top-20 h-56 w-56 rounded-full bg-white/10" />

          <div className="absolute bottom-4 right-5 rounded-full bg-black/10 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-sm">
            {team.sport || "Sports"}
          </div>

        </div>

        <div className="px-5 pb-6 sm:px-8">

          <div className="flex flex-col gap-5 sm:flex-row sm:items-end">

            <div className="-mt-16 shrink-0">

              <TeamAvatar
                team={team}
                size="profile"
              />

            </div>

            <div className="min-w-0 flex-1">

              <div className="flex flex-wrap items-center gap-2">

                <h1 className="text-2xl font-black text-slate-900 sm:text-3xl">
                  {team.name}
                </h1>

                {team.verified && (
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs text-white">
                    <FaCheck />
                  </span>
                )}

              </div>

              <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-500">

                {team.sport && (
                  <span className="font-semibold text-blue-600">
                    {team.sport}
                  </span>
                )}

                {getTeamLocation(team) !== "-" && (
                  <span className="flex items-center gap-1">
                    <FaLocationDot className="text-xs" />
                    {getTeamLocation(team)}
                  </span>
                )}

              </div>

            </div>

            <div className="flex items-center gap-3 rounded-xl border border-blue-100 bg-blue-50 px-4 py-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                <FaPeopleGroup />
              </div>

              <div>

                <p className="text-xl font-black text-slate-900">
                  {squadPlayers.length}
                </p>

                <p className="text-[11px] font-semibold text-slate-500">
                  SQUAD PLAYERS
                </p>

              </div>

            </div>

          </div>

          <div className="mt-5 flex flex-wrap gap-2">

            {team.verified && (
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-600">
                <FaShieldHalved />
                Verified Team
              </span>
            )}

            <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-600">
              {team.sport || "Sports"}
            </span>

            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-600">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Active Team
            </span>

          </div>

        </div>

      </section>

      <div className="grid gap-6 lg:grid-cols-3">

        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:col-span-2 sm:p-6">

          <h2 className="text-lg font-black text-slate-900">
            About {team.name}
          </h2>

          <p className="mt-3 leading-7 text-slate-600">
            {team.bio ||
              `Welcome to ${team.name}. This team profile contains information about the team, squad and sporting activities.`}
          </p>

        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

          <h2 className="text-lg font-black text-slate-900">
            Team Details
          </h2>

          <div className="mt-5 space-y-4">

            <DetailRow
              icon={<FaTrophy />}
              label="Sport"
              value={team.sport || "-"}
            />

            <DetailRow
              icon={<FaPeopleGroup />}
              label="Squad Size"
              value={squadPlayers.length}
            />

            <DetailRow
              icon={<FaLocationDot />}
              label="Location"
              value={getTeamLocation(team)}
            />

            {team.founded && (
              <DetailRow
                icon={<FaCalendarDays />}
                label="Founded"
                value={team.founded}
              />
            )}

          </div>

        </section>

      </div>

    </div>
  );
};

/* ============================================================= */
/* SQUAD PAGE */
/* ============================================================= */

const SquadPage = ({
  team,
  squadPlayers,
}) => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">

      <PageHeader
        title="My Squad"
        description={`${squadPlayers.length} players in ${team.name}`}
        icon={<FaPeopleGroup />}
      />

      {/* Squad header */}

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex items-center gap-4">

            <TeamAvatar
              team={team}
              size="large"
            />

            <div>

              <h2 className="text-xl font-black text-slate-900">
                {team.name}
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                {team.sport || "Sports"} • {squadPlayers.length} players
              </p>

            </div>

          </div>

          <div className="rounded-xl bg-blue-50 px-4 py-3 text-center">

            <p className="text-xl font-black text-blue-600">
              {squadPlayers.length}
            </p>

            <p className="text-[10px] font-bold uppercase tracking-wider text-blue-400">
              Squad Size
            </p>

          </div>

        </div>

      </section>

      {/* Players */}

      {squadPlayers.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">

          {squadPlayers.map((player) => (
            <SquadPlayerCard
              key={player.id}
              player={player}
              onViewProfile={() =>
                navigate(`/players/${player.id}`)
              }
            />
          ))}

        </div>
      ) : (
        <EmptyState
          icon={<FaUsers />}
          title="No Squad Players"
          description="This team does not have any players assigned yet."
        />
      )}

    </div>
  );
};

/* ============================================================= */
/* SQUAD PLAYER CARD */
/* ============================================================= */

const SquadPlayerCard = ({
  player,
  onViewProfile,
}) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

      <div className="relative h-24 bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500">

        <div className="absolute -right-8 -top-10 h-32 w-32 rounded-full bg-white/10" />

        {player.verified && (
          <div className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded-full bg-white text-xs text-blue-600 shadow">
            <FaCheck />
          </div>
        )}

      </div>

      <div className="px-5 pb-5">

        <div className="-mt-12 relative z-10">

          <PlayerAvatar
            player={player}
            size="profile"
          />

        </div>

        <div className="mt-4">

          <div className="flex items-center gap-2">

            <h3 className="truncate text-lg font-black text-slate-900">
              {player.name}
            </h3>

            {player.verified && (
              <FaCircleCheck className="shrink-0 text-sm text-blue-600" />
            )}

          </div>

          <p className="mt-1 text-sm font-semibold text-blue-600">
            {player.position || player.sport || "Player"}
          </p>

        </div>

        <div className="mt-4 grid grid-cols-2 gap-2">

          <SmallPlayerInfo
            label="Rating"
            value={player.rating ?? "-"}
          />

          <SmallPlayerInfo
            label="Jersey"
            value={
              player.jerseyNumber != null
                ? `#${player.jerseyNumber}`
                : "-"
            }
          />

        </div>

        <div className="mt-4 space-y-2">

          {player.city && player.country && (
            <InfoLine
              icon={<FaLocationDot />}
              label="Location"
              value={`${player.city}, ${player.country}`}
            />
          )}

          <InfoLine
            icon={<FaTrophy />}
            label="Sport"
            value={player.sport || teamSport(player)}
          />

        </div>

        <button
          onClick={onViewProfile}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
        >
          View Full Profile
          <FaArrowRight />
        </button>

      </div>

    </div>
  );
};

/* ============================================================= */
/* PERFORMANCE PAGE */
/* ============================================================= */

const TeamPerformancePage = ({
  team,
  squadPlayers,
}) => {
  const stats = getTeamStats(team, squadPlayers);

  return (
    <div className="space-y-6">

      <PageHeader
        title="Performance"
        description={`${team.name} performance and statistics`}
        icon={<FaChartLine />}
      />

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">

          <StatCard
            label="Matches"
            value={stats.matches}
            icon={<FaCalendarDays />}
          />

          <StatCard
            label="Wins"
            value={stats.wins}
            icon={<FaTrophy />}
          />

          <StatCard
            label="Losses"
            value={stats.losses}
            icon={<FaCircle />}
          />

          <StatCard
            label="Win Rate"
            value={`${stats.winRate}%`}
            icon={<FaArrowTrendUp />}
          />

        </div>

      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            <FaArrowTrendUp />
          </div>

          <div>

            <h2 className="font-black text-slate-900">
              Squad Performance
            </h2>

            <p className="text-sm text-slate-500">
              Current player ratings
            </p>

          </div>

        </div>

        <div className="mt-5 space-y-3">

          {squadPlayers.slice(0, 8).map((player) => (

            <div
              key={player.id}
              className="flex items-center gap-3 rounded-xl bg-slate-50 p-3"
            >

              <PlayerAvatar
                player={player}
                size="small"
              />

              <div className="min-w-0 flex-1">

                <p className="truncate text-sm font-bold text-slate-800">
                  {player.name}
                </p>

                <p className="text-xs text-slate-500">
                  {player.position || player.sport || "Player"}
                </p>

              </div>

              <div className="flex items-center gap-1 rounded-lg bg-amber-50 px-3 py-2 text-sm font-black text-amber-600">
                <FaStar />
                {player.rating ?? "-"}
              </div>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
};

/* ============================================================= */
/* MATCHES PAGE */
/* ============================================================= */

const TeamMatchesPage = ({ team }) => {
  return (
    <div className="space-y-6">

      <PageHeader
        title="Matches"
        description="Upcoming and recent team matches"
        icon={<FaCalendarDays />}
      />

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
              name={team.name}
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

const TeamAchievementsPage = ({ team }) => {
  return (
    <div className="space-y-6">

      <PageHeader
        title="Achievements"
        description="Team trophies, awards and milestones"
        icon={<FaTrophy />}
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

        <AchievementCard
          icon={<FaTrophy />}
          title="Team Achievement"
          description={`Strong performance from ${team.name}`}
          color="amber"
        />

        <AchievementCard
          icon={<FaMedal />}
          title="Active Team"
          description="The team is actively participating in competitions."
          color="blue"
        />

        <AchievementCard
          icon={<FaStar />}
          title="Growing Squad"
          description="Continue developing your squad and team performance."
          color="violet"
        />

      </div>

    </div>
  );
};

/* ============================================================= */
/* MESSAGES */
/* ============================================================= */

const TeamMessagesPage = ({ team }) => {
  return (
    <div className="space-y-6">

      <PageHeader
        title="Messages"
        description="Communicate with players, coaches and organizations"
        icon={<FaMessage />}
      />

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

        <MessageRow
          name="Team Manager"
          message={`Welcome to ${team.name}!`}
          time="10:30 AM"
        />

        <MessageRow
          name="Coach"
          message="Training schedule has been updated."
          time="Yesterday"
        />

        <MessageRow
          name="SportConnect"
          message="Your team profile has been updated."
          time="2 days ago"
        />

      </section>

    </div>
  );
};

/* ============================================================= */
/* NOTIFICATIONS */
/* ============================================================= */

const TeamNotificationsPage = () => {
  return (
    <div className="space-y-6">

      <PageHeader
        title="Notifications"
        description="Stay updated with your team's activities"
        icon={<FaBell />}
      />

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

        <NotificationRow
          title="New player activity"
          description="A squad player updated their profile."
          time="10 minutes ago"
          color="blue"
        />

        <NotificationRow
          title="Match reminder"
          description="Your team's next match is scheduled for tomorrow."
          time="2 hours ago"
          color="amber"
        />

        <NotificationRow
          title="Team verified"
          description="Your team profile is verified."
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

const TeamSettingsPage = ({ team }) => {
  return (
    <div className="space-y-6">

      <PageHeader
        title="Settings"
        description="Manage your team account and preferences"
        icon={<FaGear />}
      />

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

        <h2 className="text-lg font-black text-slate-900">
          Team Settings
        </h2>

        <div className="mt-6 space-y-5">

          <SettingRow
            label="Team Name"
            value={team.name}
          />

          <SettingRow
            label="Sport"
            value={team.sport || "-"}
          />

          <SettingRow
            label="Email Notifications"
            value="Enabled"
          />

          <SettingRow
            label="Team Visibility"
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
/* TEAM AVATAR */
/* ============================================================= */

const TeamAvatar = ({
  team,
  size = "medium",
}) => {

  const sizes = {
    small: "h-9 w-9 rounded-xl text-sm",
    medium: "h-11 w-11 rounded-xl text-lg",
    large: "h-16 w-16 rounded-2xl text-xl",
    profile:
      "h-32 w-32 rounded-2xl border-4 border-white text-4xl shadow-lg",
  };

  return (
    <div
      className={`
        
        flex
        shrink-0
        items-center
        justify-center
        overflow-hidden
        bg-blue-100
        font-black
        text-blue-600
        relative
        z-20
        ${sizes[size]}
      `}
    >

      {team.logo || team.image || team.profileImage ? (
        <img
          src={
            team.logo ||
            team.image ||
            team.profileImage
          }
          alt={team.name}
          className="h-full w-full object-cover"
        />
      ) : (
        team.name?.charAt(0)?.toUpperCase() || "T"
      )}

    </div>
  );
};

/* ============================================================= */
/* PLAYER AVATAR */
/* ============================================================= */

const PlayerAvatar = ({
  player,
  size = "medium",
}) => {

  const sizes = {
    small: "h-10 w-10 rounded-xl text-sm",
    medium: "h-12 w-12 rounded-xl text-lg",
    large: "h-16 w-16 rounded-2xl text-xl",
    profile:
      "h-24 w-24 rounded-2xl border-4 border-white text-3xl shadow-lg",
  };

  return (
    <div
      className={`
        flex
        shrink-0
        items-center
        justify-center
        overflow-hidden
        bg-blue-100
        font-black
        text-blue-600
        ${sizes[size]}
      `}
    >

      {player.profileImage || player.image ? (
        <img
          src={player.profileImage || player.image}
          alt={player.name}
          className="h-full w-full object-cover"
        />
      ) : (
        player.name?.charAt(0)?.toUpperCase() || "P"
      )}

    </div>
  );
};

/* ============================================================= */
/* PLAYER MINI CARD */
/* ============================================================= */

const PlayerMiniCard = ({
  player,
}) => {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">

      <PlayerAvatar
        player={player}
        size="medium"
      />

      <div className="min-w-0 flex-1">

        <p className="truncate text-sm font-black text-slate-800">
          {player.name}
        </p>

        <p className="mt-0.5 truncate text-xs text-slate-500">
          {player.position || player.sport || "Player"}
        </p>

      </div>

      {player.rating != null && (
        <div className="flex items-center gap-1 text-xs font-black text-amber-500">
          <FaStar />
          {player.rating}
        </div>
      )}

    </div>
  );
};

/* ============================================================= */
/* SMALL PLAYER INFO */
/* ============================================================= */

const SmallPlayerInfo = ({
  label,
  value,
}) => {
  return (
    <div className="rounded-xl bg-slate-50 p-3">

      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
        {label}
      </p>

      <p className="mt-1 text-sm font-black text-slate-800">
        {value}
      </p>

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
        {name?.charAt(0)?.toUpperCase()}
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
          Team preference
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
/* TEAM STATS */
/* ============================================================= */

const getTeamStats = (
  team,
  squadPlayers
) => {

  const stats = team.stats || {};

  const matches =
    stats.matches ??
    team.matches ??
    0;

  const wins =
    stats.wins ??
    team.wins ??
    0;

  const losses =
    stats.losses ??
    team.losses ??
    Math.max(matches - wins, 0);

  const winRate =
    stats.winRate != null
      ? Number(stats.winRate)
      : matches > 0
        ? Math.round((wins / matches) * 100)
        : 0;

  return {
    matches,
    wins,
    losses,
    winRate,
    squadSize: squadPlayers.length,
  };
};

/* ============================================================= */
/* LOCATION HELPER */
/* ============================================================= */

const getTeamLocation = (team) => {

  if (team.city && team.country) {
    return `${team.city}, ${team.country}`;
  }

  if (team.location) {
    return team.location;
  }

  if (team.address) {
    return team.address;
  }

  return "-";
};

/* ============================================================= */
/* PLAYER SPORT HELPER */
/* ============================================================= */

const teamSport = (player) => {
  return player?.sport || "Player";
};

/* ============================================================= */
/* SPORT GRADIENT */
/* ============================================================= */

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

export default TeamDashboard;
