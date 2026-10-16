import React from "react";
import { Link, useParams } from "react-router-dom";
import { tournaments } from "../utils/data";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaCalendarDays,
  FaUsers,
  FaTrophy,
  FaLocationDot,
  FaMoneyBillWave,
  FaCircleCheck,
} from "react-icons/fa6";

export default function TournamentDetails() {
  const { id } = useParams();

  const navigate=useNavigate()

  const tournament = tournaments.find(
    (item) => item.id === id
  );

  if (!tournament) {
    return (
      <div className="min-h-screen bg-slate-50 p-10 text-center">
        <h1 className="text-3xl font-bold text-red-600">
          Tournament Not Found
        </h1>

        <button
          onClick={()=>{navigate(-1)}}
          className="mt-6 inline-block rounded-lg bg-blue-600 px-5 py-3 text-white"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 py-10">
      <div className="mx-auto max-w-6xl px-5">

        <button
           onClick={()=>{navigate(-1)}}
          className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600"
        >
          <FaArrowLeft />
          Go Back
        </button>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="relative h-64 sm:h-96">
            <img
              src={tournament.image}
              alt={tournament.name}
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6">
              <span className="rounded-full bg-blue-600 px-3 py-1 text-sm font-semibold text-white">
                {tournament.sport}
              </span>

              <h1 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
                {tournament.name}
              </h1>

              <p className="mt-2 text-sm text-white">
                <FaLocationDot className="mr-2 inline" />
                {tournament.location}
              </p>
            </div>
          </div>

          <div className="grid gap-8 p-6 lg:grid-cols-3">
            <div className="space-y-8 lg:col-span-2">

              <section>
                <h2 className="text-xl font-bold text-slate-900">
                  About Tournament
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  {tournament.description}
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900">
                  Tournament Information
                </h2>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <Info
                    icon={<FaCalendarDays />}
                    label="Start Date"
                    value={tournament.startDate}
                  />

                  <Info
                    icon={<FaCalendarDays />}
                    label="End Date"
                    value={tournament.endDate}
                  />

                  <Info
                    icon={<FaUsers />}
                    label="Teams / Entries"
                    value={tournament.teams}
                  />

                  <Info
                    icon={<FaLocationDot />}
                    label="Venue"
                    value={tournament.venue}
                  />

                  <Info
                    icon={<FaTrophy />}
                    label="Format"
                    value={tournament.format}
                  />

                  <Info
                    icon={<FaMoneyBillWave />}
                    label="Entry Fee"
                    value={tournament.entryFee}
                  />
                </div>
              </section>

               <section>
                <h2 className="text-xl font-bold text-slate-900">
                  Schedule
                </h2>

                <div className="mt-4 space-y-3">
                  {tournament.schedule.map((item) => (
                    <div
                      key={`${item.date}-${item.event}`}
                      className="rounded-xl border border-slate-200 p-4"
                    >
                      <p className="text-sm font-bold text-blue-600">
                        {item.date}
                      </p>

                      <p className="mt-1 font-semibold text-slate-800">
                        {item.event}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900">
                  Prizes & Awards
                </h2>

                <div className="mt-4 space-y-3">
                  {tournament.prizes.map((prize) => (
                    <div
                      key={prize.position}
                      className="flex items-center justify-between gap-4 rounded-xl bg-amber-50 p-4"
                    >
                      <span className="font-semibold text-slate-800">
                        {prize.position}
                      </span>

                      <span className="text-right font-bold text-amber-700">
                        {prize.amount}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900">
                  Rules & Regulations
                </h2>

                <div className="mt-4 space-y-3">
                  {tournament.rules.map((rule) => (
                    <p
                      key={rule}
                      className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                    >
                      <FaCircleCheck className="mt-1 shrink-0 text-green-500" />
                      {rule}
                    </p>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900">
                  Participation Requirements
                </h2>

                <div className="mt-4 space-y-3">
                  {tournament.requirements.map((requirement) => (
                    <p
                      key={requirement}
                      className="text-sm leading-6 text-slate-600"
                    >
                      • {requirement}
                    </p>
                  ))}
                </div>
              </section>

            </div>

            <aside>
              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
                <h2 className="text-xl font-bold text-slate-900">
                  Tournament Details
                </h2>

                <p className="mt-5 text-sm text-slate-500">
                  Total Prize Pool
                </p>

                <p className="mt-1 text-3xl font-extrabold text-blue-700">
                  {tournament.prizePool}
                </p>

                <div className="mt-5 border-t border-blue-100 pt-5">
                  <p className="text-sm text-slate-500">
                    Registration Deadline
                  </p>

                  <p className="mt-1 font-bold text-slate-900">
                    {tournament.registrationDeadline}
                  </p>
                </div>

                <div className="mt-5">
                  <p className="text-sm text-slate-500">
                    Organized By
                  </p>

                  <p className="mt-1 font-bold text-slate-900">
                    {tournament.organizer}
                  </p>
                </div>

                <Link
                  to={`/tournaments/${tournament.id}/register`}
                  className="mt-6 block rounded-xl bg-blue-600 px-5 py-3 text-center font-bold text-white hover:bg-blue-700"
                >
                  Register Now
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}

function Info({ icon, label, value }) {
  return (
    <div className="rounded-xl border border-slate-200 p-4">
      <div className="flex items-center gap-2 text-blue-600">
        {icon}
        <span className="text-xs font-semibold">{label}</span>
      </div>

      <p className="mt-2 break-words font-bold text-slate-800">
        {value ?? "Not specified"}
      </p>
    </div>
  );
}