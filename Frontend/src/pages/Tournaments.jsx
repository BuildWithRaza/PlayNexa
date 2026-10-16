
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { tournaments } from "../utils/data";
import {
  FaCalendarDays,
  FaUsers,
  FaArrowRight,
  FaTrophy,
  FaLocationDot,
  FaMagnifyingGlass,
  FaFilter,
} from "react-icons/fa6";

const Tournaments = () => {
  const [search, setSearch] = useState("");
  const [selectedSport, setSelectedSport] = useState("All");

  const sports = [
    "All",
    ...new Set(tournaments.map((t) => t.sport)),
  ];

  const filteredTournaments = useMemo(() => {
    return tournaments.filter((tournament) => {
      const matchesSport =
        selectedSport === "All" ||
        tournament.sport === selectedSport;

      const query = search.toLowerCase();

      const matchesSearch =
        tournament.name.toLowerCase().includes(query) ||
        tournament.venue.toLowerCase().includes(query) ||
        tournament.location.toLowerCase().includes(query);

      return matchesSport && matchesSearch;
    });
  }, [search, selectedSport]);

  return (
    <section className="min-h-screen bg-slate-50 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        {/* Header */}
        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
            Play. Compete. Win.
          </p>

          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Explore Tournaments
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
            Discover upcoming sporting events, find your next
            challenge, and compete with talented players and teams.
          </p>
        </div>

        {/* Stats */}
        <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <FaTrophy />
            </div>
            <p className="mt-4 text-2xl font-extrabold text-slate-900">
              {tournaments.length}
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Tournaments
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-600">
              <FaUsers />
            </div>
            <p className="mt-4 text-2xl font-extrabold text-slate-900">
              {new Set(tournaments.map((t) => t.sport)).size}
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Sports
            </p>
          </div>

          <div className="col-span-2 rounded-2xl border border-slate-200 bg-white p-5 sm:col-span-1">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
              <FaCalendarDays />
            </div>
            <p className="mt-4 text-2xl font-extrabold text-slate-900">
              2026–27
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Tournament Season
            </p>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="relative flex-1">
              <FaMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-slate-400" />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search tournaments or venues..."
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50"
              />
            </div>

            <div className="relative md:w-64">
              <FaFilter className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-slate-400" />

              <select
                value={selectedSport}
                onChange={(e) => setSelectedSport(e.target.value)}
                className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
              >
                {sports.map((sport) => (
                  <option key={sport} value={sport}>
                    {sport === "All" ? "All Sports" : sport}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Header */}
        <div className="mb-5 flex items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Featured Events
            </h2>
            <p className="mt-1 text-xs text-slate-500">
              {filteredTournaments.length} tournaments found
            </p>
          </div>

          {(search || selectedSport !== "All") && (
            <button
              onClick={() => {
                setSearch("");
                setSelectedSport("All");
              }}
              className="text-xs font-semibold text-blue-600 hover:text-blue-800"
            >
              Clear filters
            </button>
          )}
        </div>

        {/* Tournament Grid */}
        {filteredTournaments.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredTournaments.map((tournament) => (
              <article
                key={tournament.id}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={tournament.image}
                    alt={tournament.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

                  <span
                    className={`absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-bold ${tournament.badge}`}
                  >
                    <span className={`h-2 w-2 rounded-full ${tournament.dot}`} />
                    {tournament.sport}
                  </span>

                  <span className="absolute bottom-4 left-4 rounded-lg bg-white/95 px-3 py-1.5 text-xs font-bold text-slate-800">
                    {tournament.status}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-extrabold leading-snug text-slate-900">
                      {tournament.name}
                    </h3>

                    <div className="shrink-0 rounded-xl bg-amber-50 p-2.5 text-amber-500">
                      <FaTrophy />
                    </div>
                  </div>

                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500">
                    {tournament.description}
                  </p>

                  <div className="mt-5 space-y-3 border-t border-slate-100 pt-4">
                    <div className="flex items-center gap-3 text-sm text-slate-600">
                      <FaCalendarDays className="shrink-0 text-blue-500" />
                      <span>
                        {tournament.startDate} – {tournament.endDate}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-sm text-slate-600">
                      <FaLocationDot className="shrink-0 text-blue-500" />
                      <span className="truncate">{tournament.venue}</span>
                    </div>

                    <div className="flex items-center gap-3 text-sm text-slate-600">
                      <FaUsers className="shrink-0 text-blue-500" />
                      <span>
                        {tournament.teams}{" "}
                        {tournament.sport === "Chess" ||
                        tournament.sport === "Badminton" ||
                        tournament.sport === "Table Tennis" ||
                        tournament.sport === "Athletics"
                          ? "entries"
                          : "teams"}
                      </span>
                    </div>
                  </div>

                  {/* Prize Pool */}
                  <div className="mt-5 flex items-center justify-between rounded-xl bg-blue-50/70 p-3">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                        Prize Pool
                      </p>
                      <p className="mt-1 text-lg font-extrabold text-blue-700">
                        {tournament.prizePool}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                        Entry Fee
                      </p>
                      <p className="mt-1 text-sm font-bold text-slate-800">
                        {tournament.entryFee}
                      </p>
                    </div>
                  </div>

                  {/* Details Link */}
                  <Link
                    to={`/tournaments/${tournament.id}`}
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
                  >
                    View Details
                    <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-5 py-16 text-center">
            <FaTrophy className="mx-auto text-3xl text-slate-300" />
            <h3 className="mt-4 text-lg font-bold text-slate-800">
              No tournaments found
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              Try another search term or choose a different sport.
            </p>
            <button
              onClick={() => {
                setSearch("");
                setSelectedSport("All");
              }}
              className="mt-5 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Show All Tournaments
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Tournaments;