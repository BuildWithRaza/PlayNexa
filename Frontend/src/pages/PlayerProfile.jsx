import React from "react";


import { useNavigate } from "react-router-dom";

import { useParams, Link } from "react-router-dom";

import {
  FaArrowLeft,
  FaCheck,
  FaLocationDot,
  FaTrophy,
  FaMedal,
  FaStar,
  FaShieldHalved,
  FaCalendarDays,
  FaShirt,
  FaUsers,
  FaChartLine,
  FaBolt,
  FaDumbbell,
} from "react-icons/fa6";
import { getPlayers } from "../utils/localStorage";

const PlayerProfile = () => {
  const { playerId } = useParams();
  const navigate=useNavigate();

  const user=localStorage.getItem('LoggedInUser')|| ""
  const players=getPlayers();
 

  const player = players.find(
    (player) => player.id === playerId
  );

  if (!player) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center px-5">
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
          onClick={() => navigate(-1)}
            className="
              mt-5
              inline-flex
              items-center
              gap-2
              rounded-lg
              bg-blue-600
              px-5
              py-2.5
              text-sm
              font-bold
              text-white
              transition
              hover:bg-blue-700
            "
          >
            <FaArrowLeft />
            Go Back
          </button>



        </div>
      </div>
    );
  }

  const sport = player.sport?.toLowerCase();

  const sportStats = getSportStats(player);

  return (
    <main className="min-h-screen bg-slate-50 px-5 py-8 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* ===================================================== */}
        {/* BACK */}
        {/* ===================================================== */}

        <div className="flex justify-between pb-6">
          <button
        onClick={() => navigate(-1)}
         
          className="
            inline-flex
            items-center
            gap-2
            text-sm
            font-semibold
            text-slate-500
            transition
            hover:text-blue-600
          "
        >
          <FaArrowLeft className="text-xs" />
          Go Back
        </button>
        {user=='teamdash' && <button
          onClick={() => navigate(-1)}
            className="
              inline-flex
              items-center
              gap-2
              rounded-lg
              bg-blue-600
              px-5
              py-2.5
              text-sm
              font-bold
              text-white
              transition
              hover:bg-blue-700
            "
          >
            Acquire
          </button>}
        </div>

        {/* ===================================================== */}
        {/* PROFILE HEADER */}
        {/* ===================================================== */}

        <section
          className="
            overflow-hidden
            rounded-2xl
            border
            border-slate-200
            bg-white
            shadow-sm
          "
        >

          {/* Cover */}
          <div
            className={`
              relative
              h-32
              sm:h-40
              ${getSportGradient(sport)}
            `}
          >
            {/* Decorative circles */}
            <div className="absolute -right-12 -top-20 h-56 w-56 rounded-full bg-white/10" />

            <div className="absolute -bottom-20 left-1/3 h-48 w-48 rounded-full bg-white/10" />

            {/* Sport */}
            <div className="absolute bottom-4 right-5 rounded-full bg-black/10 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-sm">
              {player.sport}
            </div>
          </div>

          <div className="px-5 pb-6 sm:px-8">

            <div className="flex flex-col gap-5 sm:flex-row sm:items-end">

              {/* Profile Image */}
              <div className="-mt-16 shrink-0 z-50">

                <div
                  className="
                    h-32
                    w-32
                    overflow-hidden
                    rounded-2xl
                    border-4
                    border-white
                    bg-slate-100
                    shadow-lg
                  "
                >
                  {player.profileImage ? (
                    <img
                      src={player.profileImage}
                      alt={player.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-slate-100 text-4xl font-black text-slate-400">
                      {player.name?.charAt(0)}
                    </div>
                  )}
                </div>

              </div>

              {/* Main Information */}
              <div className="min-w-0 flex-1">

                <div className="flex flex-wrap items-center gap-2">

                  <h1 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                    {player.name}
                  </h1>

                  {player.verified && (
                    <span
                      className="
                        flex
                        h-6
                        w-6
                        items-center
                        justify-center
                        rounded-full
                        bg-blue-600
                        text-xs
                        text-white
                      "
                      title="Verified Player"
                    >
                      <FaCheck />
                    </span>
                  )}

                </div>

                <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500">

                  {player.position && (
                    <>
                      <span className="font-semibold text-blue-600">
                        {player.position}
                      </span>

                      <span className="text-slate-300">
                        •
                      </span>
                    </>
                  )}

                  {player.team && (
                    <>
                      <span>
                        {player.team}
                      </span>

                      <span className="text-slate-300">
                        •
                      </span>
                    </>
                  )}

                  {player.city && player.country && (
                    <span className="flex items-center gap-1">
                      <FaLocationDot className="text-xs" />
                      {player.city}, {player.country}
                    </span>
                  )}

                </div>

              </div>

              {/* Rating */}
              <div
                className="
                  flex
                  shrink-0
                  items-center
                  gap-3
                  rounded-xl
                  border
                  border-amber-100
                  bg-amber-50
                  px-4
                  py-3
                "
              >

                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-lg
                    bg-amber-100
                    text-amber-500
                  "
                >
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

            {/* Status */}
            <div className="mt-5 flex flex-wrap gap-2">

              {player.availability && (
                <span
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-emerald-50
                    px-3
                    py-1.5
                    text-xs
                    font-bold
                    text-emerald-600
                  "
                >
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  {player.availability}
                </span>
              )}

              {player.verified && (
                <span
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-blue-50
                    px-3
                    py-1.5
                    text-xs
                    font-bold
                    text-blue-600
                  "
                >
                  <FaShieldHalved />
                  Verified Player
                </span>
              )}

              <span
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-slate-100
                  px-3
                  py-1.5
                  text-xs
                  font-bold
                  text-slate-600
                "
              >
                {player.sport}
              </span>

            </div>

          </div>
        </section>

        {/* ===================================================== */}
        {/* MAIN CONTENT */}
        {/* ===================================================== */}

        <div className="mt-6 grid gap-6 lg:grid-cols-3">

          {/* =================================================== */}
          {/* LEFT COLUMN */}
          {/* =================================================== */}

          <div className="space-y-6 lg:col-span-2">

            {/* ================================================= */}
            {/* SPORT PERFORMANCE */}
            {/* ================================================= */}

            <section
              className="
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-5
                shadow-sm
                sm:p-6
              "
            >

              <div className="mb-5 flex items-center justify-between">

                <div>
                  <h2 className="text-lg font-black text-slate-900">
                    Performance
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    {player.sport} statistics
                  </p>
                </div>

                <FaChartLine className="text-xl text-blue-500" />

              </div>

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

            {/* ================================================= */}
            {/* SKILLS */}
            {/* ================================================= */}

            {player.skills && (
              <section
                className="
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-5
                  shadow-sm
                  sm:p-6
                "
              >

                <div className="mb-6">

                  <h2 className="text-lg font-black text-slate-900">
                    Skills
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Player abilities and strengths
                  </p>

                </div>

                <div className="space-y-5">

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

            {/* ================================================= */}
            {/* ABOUT */}
            {/* ================================================= */}

            {player.bio && (
              <section
                className="
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-5
                  shadow-sm
                  sm:p-6
                "
              >

                <h2 className="text-lg font-black text-slate-900">
                  About {player.firstName || player.name}
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  {player.bio}
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
            )}

          </div>

          {/* =================================================== */}
          {/* RIGHT COLUMN */}
          {/* =================================================== */}

          <div className="space-y-6">

            {/* ================================================= */}
            {/* PLAYER DETAILS */}
            {/* ================================================= */}

            <section
              className="
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-5
                shadow-sm
              "
            >

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

            {/* ================================================= */}
            {/* CURRENT TEAM */}
            {/* ================================================= */}

            {player.team && (
              <section
                className="
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-5
                  shadow-sm
                "
              >

                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Current Team
                </p>

                <h3 className="mt-2 text-xl font-black text-slate-900">
                  {player.team}
                </h3>

                <div className="mt-4 flex items-center gap-3 rounded-xl bg-blue-50 p-4">

                  <div
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      bg-blue-600
                      font-black
                      text-white
                    "
                  >
                    {player.jerseyNumber ?? "—"}
                  </div>

                  <div>

                    {player.position && (
                      <p className="text-sm font-bold text-blue-900">
                        {player.position}
                      </p>
                    )}

                    {player.jerseyNumber != null && (
                      <p className="text-xs text-blue-600">
                        Jersey #{player.jerseyNumber}
                      </p>
                    )}

                  </div>

                </div>

              </section>
            )}

            {/* ================================================= */}
            {/* SPORT SUMMARY */}
            {/* ================================================= */}

            <section
              className="
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-5
                shadow-sm
              "
            >

              <div className="flex items-center gap-3">

                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-blue-50
                    text-blue-600
                  "
                >
                  <FaBolt />
                </div>

                <div>

                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Sport
                  </p>

                  <p className="text-lg font-black text-slate-900">
                    {player.sport}
                  </p>

                </div>

              </div>

              <div className="mt-5 rounded-xl bg-slate-50 p-4">

                <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                  Primary Role
                </p>

                <p className="mt-1 text-sm font-bold text-slate-800">
                  {player.position || "Professional Athlete"}
                </p>

              </div>

            </section>

          </div>

        </div>
      </div>
    </main>
  );
};

/* ============================================================= */
/* SPORT STAT CONFIGURATION */
/* ============================================================= */

const getSportStats = (player) => {
  const stats = player.stats || {};
  const sport = player.sport?.toLowerCase();

  switch (sport) {
    /* --------------------------------------------------------- */
    /* CRICKET */
    /* --------------------------------------------------------- */

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

    /* --------------------------------------------------------- */
    /* FOOTBALL */
    /* --------------------------------------------------------- */

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

    /* --------------------------------------------------------- */
    /* BASKETBALL */
    /* --------------------------------------------------------- */

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
          value: formatPercent(stats.threePointPercentage),
        },
        {
          label: "FG %",
          value: formatPercent(stats.fieldGoalPercentage),
        },
      ];

    /* --------------------------------------------------------- */
    /* BADMINTON */
    /* --------------------------------------------------------- */

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

    /* --------------------------------------------------------- */
    /* TENNIS */
    /* --------------------------------------------------------- */

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

    /* --------------------------------------------------------- */
    /* VOLLEYBALL */
    /* --------------------------------------------------------- */

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

    /* --------------------------------------------------------- */
    /* DEFAULT */
    /* --------------------------------------------------------- */

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

const formatPercent = (value) => {
  if (value === undefined || value === null) {
    return "-";
  }

  return `${value}%`;
};

const formatLabel = (value) => {
  return value
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase());
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
/* COMPONENTS */
/* ============================================================= */

const StatCard = ({ label, value, icon }) => {
  return (
    <div
      className="
        relative
        rounded-xl
        border
        border-slate-100
        bg-slate-50
        p-4
        text-center
      "
    >

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

const SkillBar = ({ label, value, color }) => {
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
          className={`
            h-full
            rounded-full
            ${color}
            transition-all
            duration-700
          `}
          style={{
            width: `${Math.min(Math.max(numericValue, 0), 100)}%`,
          }}
        />

      </div>

    </div>
  );
};

const DetailRow = ({ icon, label, value }) => {
  return (
    <div className="flex items-center gap-3">

      <div
        className="
          flex
          h-9
          w-9
          shrink-0
          items-center
          justify-center
          rounded-lg
          bg-blue-50
          text-sm
          text-blue-600
        "
      >
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

export default PlayerProfile;
