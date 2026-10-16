import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  FaArrowLeft,
  FaCalendarDays,
  FaClock,
  FaLocationDot,
  FaTrophy,
  FaUserTie,
} from "react-icons/fa6";

import { matches } from "../utils/data";

const MatchDetails = () => {
  const { matchId } = useParams();
  const navigate = useNavigate();

  const match = matches.find(
    (match) => match.id === Number(matchId)
  );

  if (!match) {
    return (
      <section className="min-h-screen bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-2xl font-bold text-slate-900">
            Match Not Found
          </h1>

          <button
            onClick={() => navigate("/matches")}
            className="mt-6 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Back to Matches
          </button>
        </div>
      </section>
    );
  }

  const isPlayerMatch = match.type === "player";

  const participant1 = isPlayerMatch
    ? match.player1
    : match.team1;

  const participant2 = isPlayerMatch
    ? match.player2
    : match.team2;

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-10">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">

        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-blue-600"
        >
          <FaArrowLeft className="text-xs" />
          Back to Matches
        </button>

        {/* Header */}
        <div className="rounded-2xl border border-blue-100 bg-white shadow-sm">

          {/* Top Information */}
          <div className="border-b border-slate-100 px-6 py-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

              <div>
                <span className="inline-flex items-center gap-2 rounded-md border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-blue-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                  {match.sport}
                </span>

                <h1 className="mt-3 text-2xl font-extrabold text-slate-900">
                  {match.tournament}
                </h1>

                <p className="mt-1 text-sm text-slate-500">
                  {match.round} • {match.season}
                </p>
              </div>

              <span className="w-fit rounded-full bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-wide text-blue-600">
                {match.status}
              </span>

            </div>
          </div>

          {/* Main Score Area */}
          <div className="px-6 py-10">

            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">

              {/* Participant 1 */}
              <div className="flex flex-col items-center text-center">

                <div
                  className={`flex h-28 w-28 items-center justify-center border border-slate-100 bg-slate-50 ${
                    isPlayerMatch
                      ? "rounded-full p-1"
                      : "rounded-2xl p-5"
                  }`}
                >
                  <img
                    src={
                      isPlayerMatch
                        ? participant1.image
                        : participant1.logo
                    }
                    alt={participant1.name}
                    className={`h-full w-full object-contain ${
                      isPlayerMatch
                        ? "rounded-full object-cover"
                        : ""
                    }`}
                  />
                </div>

                <h2 className="mt-4 text-lg font-bold text-slate-900">
                  {participant1.name}
                </h2>

                {isPlayerMatch && (
                  <p className="mt-1 text-xs text-slate-400">
                    Rank #{participant1.ranking}
                  </p>
                )}

              </div>

              {/* VS */}
              <div className="flex flex-col items-center">

                {match.status === "Completed" ? (
                  <div className="text-3xl font-extrabold text-slate-900">
                    {match.score.team1} - {match.score.team2}
                  </div>
                ) : (
                  <div className="text-sm font-bold text-slate-300">
                    VS
                  </div>
                )}

                {match.status === "Upcoming" && (
                  <p className="mt-2 text-xs font-semibold text-slate-400">
                    {match.time}
                  </p>
                )}

              </div>

              {/* Participant 2 */}
              <div className="flex flex-col items-center text-center">

                <div
                  className={`flex h-28 w-28 items-center justify-center border border-slate-100 bg-slate-50 ${
                    isPlayerMatch
                      ? "rounded-full p-1"
                      : "rounded-2xl p-5"
                  }`}
                >
                  <img
                    src={
                      isPlayerMatch
                        ? participant2.image
                        : participant2.logo
                    }
                    alt={participant2.name}
                    className={`h-full w-full object-contain ${
                      isPlayerMatch
                        ? "rounded-full object-cover"
                        : ""
                    }`}
                  />
                </div>

                <h2 className="mt-4 text-lg font-bold text-slate-900">
                  {participant2.name}
                </h2>

                {isPlayerMatch && (
                  <p className="mt-1 text-xs text-slate-400">
                    Rank #{participant2.ranking}
                  </p>
                )}

              </div>

            </div>
          </div>

          {/* Match Information */}
          <div className="grid border-t border-slate-100 sm:grid-cols-3">

            <div className="flex items-center gap-3 border-b border-slate-100 p-5 sm:border-b-0 sm:border-r">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <FaCalendarDays />
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
                  Date
                </p>

                <p className="mt-1 text-sm font-semibold text-slate-800">
                  {match.date}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 border-b border-slate-100 p-5 sm:border-b-0 sm:border-r">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <FaClock />
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
                  Time
                </p>

                <p className="mt-1 text-sm font-semibold text-slate-800">
                  {match.time}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <FaLocationDot />
              </div>

              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
                  Venue
                </p>

                <p className="mt-1 truncate text-sm font-semibold text-slate-800">
                  {match.venue.name}
                </p>

                <p className="text-xs text-slate-400">
                  {match.venue.city}, {match.venue.country}
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">

          {/* Tournament */}
          <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <FaTrophy />
              </div>

              <div>
                <h2 className="font-bold text-slate-900">
                  Competition
                </h2>

                <p className="text-xs text-slate-400">
                  Tournament information
                </p>
              </div>
            </div>

            <div className="mt-5 space-y-3">

              <div className="flex justify-between border-b border-slate-100 pb-3">
                <span className="text-sm text-slate-500">
                  Tournament
                </span>

                <span className="text-sm font-semibold text-slate-800">
                  {match.tournament}
                </span>
              </div>

              <div className="flex justify-between border-b border-slate-100 pb-3">
                <span className="text-sm text-slate-500">
                  Season
                </span>

                <span className="text-sm font-semibold text-slate-800">
                  {match.season}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-sm text-slate-500">
                  Round
                </span>

                <span className="text-sm font-semibold text-slate-800">
                  {match.round}
                </span>
              </div>

            </div>
          </div>

          {/* Officials */}
          <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <FaUserTie />
              </div>

              <div>
                <h2 className="font-bold text-slate-900">
                  Match Officials
                </h2>

                <p className="text-xs text-slate-400">
                  Officials assigned to this match
                </p>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-400">
                  Referee
                </p>

                <p className="mt-1 text-sm font-bold text-slate-800">
                  {match.referee.name}
                </p>
              </div>

              <p className="text-xs text-slate-400">
                {match.referee.country}
              </p>
            </div>

          </div>

        </div>

        {/* Venue */}
        <div className="mt-6 rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">

          <div className="flex items-center gap-3">
            <FaLocationDot className="text-blue-500" />

            <h2 className="font-bold text-slate-900">
              Venue
            </h2>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-3">

            <div>
              <p className="text-xs text-slate-400">
                Stadium
              </p>

              <p className="mt-1 text-sm font-semibold text-slate-800">
                {match.venue.name}
              </p>
            </div>

            <div>
              <p className="text-xs text-slate-400">
                Location
              </p>

              <p className="mt-1 text-sm font-semibold text-slate-800">
                {match.venue.city}, {match.venue.country}
              </p>
            </div>

            <div>
              <p className="text-xs text-slate-400">
                Capacity
              </p>

              <p className="mt-1 text-sm font-semibold text-slate-800">
                {match.venue.capacity?.toLocaleString() || "N/A"}
              </p>
            </div>

          </div>
        </div>

        {/* Events */}
        {match.events?.length > 0 && (
          <div className="mt-6 rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">

            <h2 className="font-bold text-slate-900">
              Match Timeline
            </h2>

            <div className="mt-5 space-y-4">

              {match.events.map((event, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 border-b border-slate-100 pb-4 last:border-0"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-blue-600">
                    {event.minute}'
                  </div>

                  <div>
                    <p className="text-sm font-bold text-slate-800">
                      {event.type.replaceAll("_", " ")}
                    </p>

                    {event.playerName && (
                      <p className="text-xs text-slate-400">
                        {event.playerName}
                      </p>
                    )}

                    {event.description && (
                      <p className="mt-1 text-xs text-slate-500">
                        {event.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}

            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default MatchDetails;
