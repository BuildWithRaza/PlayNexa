import React from "react";

import { getPlayers,getTeams } from "../utils/localStorage";
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
  FaBuilding,
  FaChartLine,
  FaDumbbell,
  FaGlobe,
  FaChevronRight,
} from "react-icons/fa6";

const TeamDetails = () => {
  const { teamId } = useParams();
  const navigate=useNavigate();

  const players=getPlayers();
  const teams=getTeams();



  let user=localStorage.getItem('LoggedInUser')


  const team = teams.find((team) => team.id === teamId);

  if (!team) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center px-5">
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

  /*
   * Resolve player IDs stored inside team.players
   * against the central players array.
   */
  const teamPlayers = team.players
    .map((playerId) =>
      players.find((player) => player.id === playerId)
    )
    .filter(Boolean);

  return (
    <main className="min-h-screen bg-slate-50 px-5 py-8 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Back */}
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

        {user=="playerdash" && <button
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
            Join Team
          </button>}
        </div>

        {/* ========================================================= */}
        {/* TEAM HEADER */}
        {/* ========================================================= */}

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
            className="relative h-36 sm:h-48"
            style={{
              background: `
                linear-gradient(
                  120deg,
                  ${team.primaryColor},
                  ${team.secondaryColor},
                  ${team.primaryColor}
                )
              `,
            }}
          >
            {/* Decorative circles */}
            <div className="absolute -right-10 -top-20 h-56 w-56 rounded-full bg-white/10" />

            <div className="absolute -bottom-20 left-1/3 h-48 w-48 rounded-full bg-white/10" />

            <div className="absolute bottom-4 right-5 rounded-full bg-black/10 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-sm">
              {team.leagueShortName}
            </div>
          </div>

          <div className="px-5 pb-6 sm:px-8">

            <div className="flex flex-col gap-5 sm:flex-row sm:items-end">

              {/* Team Logo */}
              <div className="-mt-16 shrink-0 z-50">
                <div
                  className="
                    flex
                    h-32
                    w-32
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-2xl
                    border-4
                    border-white
                    bg-white
                    shadow-lg
                  "
                >
                  <img
                    src={team.logo}
                    alt={`${team.name} logo`}
                    className="h-full w-full object-contain p-3"
                  />
                </div>
              </div>

              {/* Main Information */}
              <div className="min-w-0 flex-1">

                <div className="flex flex-wrap items-center gap-2">

                  <h1 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                    {team.name}
                  </h1>

                  {team.verified && (
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
                      title="Verified Team"
                    >
                      <FaCheck />
                    </span>
                  )}

                </div>

                <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500">

                  <span className="font-semibold text-blue-600">
                    {team.sport}
                  </span>

                  <span className="text-slate-300">•</span>

                  <span>{team.league}</span>

                  <span className="text-slate-300">•</span>

                  <span className="flex items-center gap-1">
                    <FaLocationDot className="text-xs" />
                    {team.city}, {team.state}
                  </span>

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
                    {team.rating}
                  </p>

                  <p className="text-[11px] font-semibold text-slate-500">
                    TEAM RATING
                  </p>
                </div>
              </div>

            </div>

            {/* Status */}
            <div className="mt-5 flex flex-wrap gap-2">

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
                {team.status}
              </span>

              {team.verified && (
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
                  Verified Team
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
                <FaUsers />
                {team.squadSize} Players
              </span>

            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* MAIN CONTENT */}
        {/* ========================================================= */}

        <div className="mt-6 grid gap-6 lg:grid-cols-3">

          {/* ======================================================= */}
          {/* LEFT COLUMN */}
          {/* ======================================================= */}

          <div className="space-y-6 lg:col-span-2">

            {/* Performance */}
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
                    Current season performance
                  </p>
                </div>

                <FaChartLine className="text-xl text-blue-500" />

              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">

                <StatCard
                  label="Matches"
                  value={team.stats.matches}
                />

                <StatCard
                  label="Wins"
                  value={team.stats.wins}
                  icon={<FaTrophy />}
                />

                <StatCard
                  label="Losses"
                  value={team.stats.losses}
                />

                <StatCard
                  label="Win Rate"
                  value={`${team.stats.winRate}%`}
                />

                <StatCard
                  label="Points"
                  value={team.stats.points}
                />

                <StatCard
                  label="League Position"
                  value={`#${team.stats.leaguePosition}`}
                />

                <StatCard
                  label="Championships"
                  value={team.stats.championships}
                  icon={<FaTrophy />}
                />

                <StatCard
                  label="Runner-up"
                  value={team.stats.runnerUpFinishes}
                  icon={<FaMedal />}
                />

              </div>
            </section>

            {/* Recent Form */}
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
              <div className="mb-5">
                <h2 className="text-lg font-black text-slate-900">
                  Recent Form
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Latest team results
                </p>
              </div>

              <div className="flex items-center gap-3">
                {team.recentForm.map((result, index) => (
                  <div
                    key={`${result}-${index}`}
                    className={`
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      text-sm
                      font-black
                      ${
                        result === "W"
                          ? "bg-emerald-50 text-emerald-600"
                          : result === "L"
                          ? "bg-red-50 text-red-600"
                          : "bg-amber-50 text-amber-600"
                      }
                    `}
                  >
                    {result}
                  </div>
                ))}

                <div className="ml-2">
                  <p className="text-sm font-bold text-slate-900">
                    {team.stats.currentStreak} match
                    {team.stats.currentStreak !== 1 ? "es" : ""} streak
                  </p>

                  <p className="text-xs text-slate-500">
                    Current winning / unbeaten run
                  </p>
                </div>
              </div>
            </section>

            {/* Team Description */}
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
                About {team.name}
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                {team.bio}
              </p>

              <div className="mt-5 rounded-xl bg-slate-50 p-4">
                <p className="text-sm leading-6 text-slate-600">
                  {team.description}
                </p>
              </div>
            </section>

            {/* Squad */}
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
                    Squad
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    {teamPlayers.length} players in the current squad
                  </p>
                </div>

                <FaUsers className="text-xl text-blue-500" />

              </div>

              <div className="grid gap-3 sm:grid-cols-2">

                {teamPlayers.map((player) => (
                  <Link
                    key={player.id}
                    to={`/players/${player.id}`}
                    className="
                      group
                      flex
                      items-center
                      gap-3
                      rounded-xl
                      border
                      border-slate-100
                      bg-slate-50
                      p-3
                      transition
                      hover:border-blue-100
                      hover:bg-blue-50
                    "
                  >
                    {/* Player Image */}
                    <div
                      className="
                        h-12
                        w-12
                        shrink-0
                        overflow-hidden
                        rounded-xl
                        bg-slate-200
                      "
                    >
                      {player.profileImage ? (
                        <img
                          src={player.profileImage}
                          alt={player.name}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center font-black text-slate-500">
                          {player.name?.charAt(0)}
                        </div>
                      )}
                    </div>

                    {/* Player Info */}
                    <div className="min-w-0 flex-1">

                      <div className="flex items-center gap-2">
                        <h3 className="truncate text-sm font-black text-slate-900">
                          {player.name}
                        </h3>

                        {player.verified && (
                          <span className="text-xs text-blue-600">
                            <FaCheck />
                          </span>
                        )}
                      </div>

                      <p className="mt-0.5 text-xs font-semibold text-blue-600">
                        {player.position}
                      </p>

                      <p className="mt-0.5 text-[11px] text-slate-400">
                        Jersey #{player.jerseyNumber}
                      </p>

                    </div>

                    {/* Arrow */}
                    <FaChevronRight
                      className="
                        shrink-0
                        text-xs
                        text-slate-300
                        transition
                        group-hover:translate-x-0.5
                        group-hover:text-blue-500
                      "
                    />
                  </Link>
                ))}

              </div>
            </section>

            {/* Achievements */}
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
              <div className="mb-5">
                <h2 className="text-lg font-black text-slate-900">
                  Achievements
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Major team accomplishments
                </p>
              </div>

              <div className="space-y-3">

                {team.achievements.map((achievement, index) => (
                  <div
                    key={`${achievement.year}-${index}`}
                    className="
                      flex
                      items-center
                      gap-4
                      rounded-xl
                      bg-slate-50
                      p-4
                    "
                  >
                    <div
                      className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-amber-50
                        text-amber-500
                      "
                    >
                      {achievement.type === "Championship" ? (
                        <FaTrophy />
                      ) : (
                        <FaMedal />
                      )}
                    </div>

                    <div className="min-w-0 flex-1">

                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-sm font-black text-slate-900">
                          {achievement.title}
                        </h3>

                        <span className="rounded-full bg-white px-2 py-1 text-[10px] font-bold text-slate-500">
                          {achievement.year}
                        </span>
                      </div>

                      <p className="mt-1 text-xs text-slate-500">
                        {achievement.type}
                      </p>

                    </div>
                  </div>
                ))}

              </div>
            </section>
          </div>

          {/* ======================================================= */}
          {/* RIGHT COLUMN */}
          {/* ======================================================= */}

          <div className="space-y-6">

            {/* Team Details */}
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
                Team Details
              </h2>

              <div className="mt-5 space-y-4">

                <DetailRow
                  icon={<FaTrophy />}
                  label="Sport"
                  value={team.sport}
                />

                <DetailRow
                  icon={<FaGlobe />}
                  label="League"
                  value={team.league}
                />

                <DetailRow
                  icon={<FaCalendarDays />}
                  label="Founded"
                  value={team.foundedYear}
                />

                <DetailRow
                  icon={<FaLocationDot />}
                  label="Location"
                  value={`${team.city}, ${team.state}`}
                />

                <DetailRow
                  icon={<FaBuilding />}
                  label="Home Venue"
                  value={team.homeVenue}
                />

                <DetailRow
                  icon={<FaUsers />}
                  label="Squad Size"
                  value={`${team.squadSize} players`}
                />

                <DetailRow
                  icon={<FaShirt />}
                  label="Gender"
                  value={team.gender}
                />

              </div>
            </section>

            {/* Leadership */}
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
                Leadership
              </h2>

              <div className="mt-5 space-y-4">

                <PersonRow
                  label="Captain"
                  name={team.captain}
                  image={null}
                />

                <PersonRow
                  label="Head Coach"
                  name={team.coach}
                  image={null}
                />

                <PersonRow
                  label="Assistant Coach"
                  name={team.assistantCoach}
                  image={null}
                />

                <PersonRow
                  label="Team Manager"
                  name={team.teamManager}
                  image={null}
                />

              </div>
            </section>

            {/* Home / Away */}
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
                Home & Away Record
              </h2>

              <div className="mt-5 space-y-4">

                <RecordCard
                  title="Home"
                  record={team.homeRecord}
                  color="blue"
                />

                <RecordCard
                  title="Away"
                  record={team.awayRecord}
                  color="violet"
                />

              </div>
            </section>

            {/* Facilities */}
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
              <div className="flex items-center justify-between">

                <div>
                  <h2 className="text-lg font-black text-slate-900">
                    Facilities
                  </h2>

                  <p className="mt-1 text-xs text-slate-500">
                    Team infrastructure
                  </p>
                </div>

                <FaDumbbell className="text-blue-500" />

              </div>

              <div className="mt-5 space-y-2">

                {team.facilities.map((facility, index) => (
                  <div
                    key={index}
                    className="
                      flex
                      items-center
                      gap-3
                      rounded-lg
                      bg-slate-50
                      px-3
                      py-2.5
                    "
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />

                    <span className="text-sm font-medium text-slate-600">
                      {facility}
                    </span>
                  </div>
                ))}

              </div>
            </section>

            {/* Sponsors */}
            {team.sponsors?.length > 0 && (
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
                  Sponsors
                </h2>

                <div className="mt-5 space-y-3">

                  {team.sponsors.map((sponsor, index) => (
                    <div
                      key={index}
                      className="
                        flex
                        items-center
                        gap-3
                        rounded-xl
                        bg-slate-50
                        p-3
                      "
                    >
                      <div
                        className="
                          flex
                          h-11
                          w-11
                          shrink-0
                          items-center
                          justify-center
                          overflow-hidden
                          rounded-lg
                          bg-white
                        "
                      >
                        {sponsor.logo ? (
                          <img
                            src={sponsor.logo}
                            alt={sponsor.name}
                            className="h-full w-full object-contain p-1"
                          />
                        ) : (
                          <span className="text-xs font-black text-slate-400">
                            {sponsor.name.charAt(0)}
                          </span>
                        )}
                      </div>

                      <div>
                        <p className="text-sm font-black text-slate-900">
                          {sponsor.name}
                        </p>

                        <p className="mt-0.5 text-xs text-slate-500">
                          {sponsor.type}
                        </p>
                      </div>
                    </div>
                  ))}

                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </main>
  );
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

      <p className="text-xl font-black text-slate-900">
        {value}
      </p>

      <p className="mt-1 text-[10px] font-bold uppercase tracking-wide text-slate-400">
        {label}
      </p>
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

const PersonRow = ({ label, name }) => {
  return (
    <div className="flex items-center gap-3">

      <div
        className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-xl
          bg-blue-50
          text-sm
          font-black
          text-blue-600
        "
      >
        {name?.charAt(0)}
      </div>

      <div>
        <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400">
          {label}
        </p>

        <p className="text-sm font-bold text-slate-800">
          {name}
        </p>
      </div>

    </div>
  );
};

const RecordCard = ({ title, record, color }) => {
  const isBlue = color === "blue";

  return (
    <div
      className={`
        rounded-xl
        border
        p-4
        ${
          isBlue
            ? "border-blue-100 bg-blue-50/60"
            : "border-violet-100 bg-violet-50/60"
        }
      `}
    >
      <div className="flex items-center justify-between">

        <span
          className={`
            text-sm
            font-black
            ${isBlue ? "text-blue-700" : "text-violet-700"}
          `}
        >
          {title}
        </span>

        <span className="text-sm font-black text-slate-900">
          {record.winRate}%
        </span>

      </div>

      <div className="mt-3 grid grid-cols-3 gap-2 text-center">

        <div className="rounded-lg bg-white p-2">
          <p className="text-sm font-black text-slate-900">
            {record.matches}
          </p>
          <p className="text-[9px] font-bold uppercase text-slate-400">
            Matches
          </p>
        </div>

        <div className="rounded-lg bg-white p-2">
          <p className="text-sm font-black text-emerald-600">
            {record.wins}
          </p>
          <p className="text-[9px] font-bold uppercase text-slate-400">
            Wins
          </p>
        </div>

        <div className="rounded-lg bg-white p-2">
          <p className="text-sm font-black text-red-500">
            {record.losses}
          </p>
          <p className="text-[9px] font-bold uppercase text-slate-400">
            Losses
          </p>
        </div>

      </div>
    </div>
  );
};

export default TeamDetails;
