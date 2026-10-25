
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineHome } from 'react-icons/ai'
import {
  FiActivity,
  FiAward,
  FiBell,
  FiCalendar,
  FiCheckCircle,
  FiClock,
  FiFlag,
  FiGrid,
  FiLogOut,
  FiMenu,
  FiSearch,
  FiShield,
  FiTarget,
  FiTrendingUp,
  FiUsers,
  FiX,
  FiXCircle,
} from "react-icons/fi";

/* --------------------------------------------------
   PLAYNEXA ADMIN DASHBOARD
   Existing storage:
   - key-players
   - key-teams
   -------------------------------------------------- */

// // Read existing localStorage data safely.
// function readLocalData(key) {
//   try {
//     const parsed = JSON.parse(localStorage.getItem(key) || "[]");
//     return Array.isArray(parsed) ? parsed : [];
//   } catch (error) {
//     console.error(`Unable to read ${key}:`, error);
//     return [];
//   }
// }

// Supports different name fields in your records.
function getRecordName(item) {
  return (
    item.name ||
    [item.firstName, item.lastName].filter(Boolean).join(" ") ||
    item.teamName ||
    "Unnamed"
  );
}

// Your existing boolean verification field is the source of truth.
function getVerificationStatus(item) {
  return item.verified === true ? "Verified" : "Pending";
}

function getId(item, prefix) {
  return item.id || item._id || item.playerId || item.teamId || prefix;
}

const initialSports = [
  { id: "SP001", name: "Cricket", players: 0, status: "Active" },
  { id: "SP002", name: "Football", players: 0, status: "Active" },
  { id: "SP003", name: "Badminton", players: 0, status: "Active" },
  { id: "SP004", name: "Tennis", players: 0, status: "Active" },
];

const initialTournaments = [
  {
    id: "TRN001",
    name: "PlayNexa Cricket Cup",
    sport: "Cricket",
    date: "2026-11-10",
    participants: 16,
    status: "Upcoming",
  },
  {
    id: "TRN002",
    name: "National Football Series",
    sport: "Football",
    date: "2026-11-18",
    participants: 12,
    status: "Upcoming",
  },
];

const initialMatches = [
  {
    id: "MAT001",
    name: "Mumbai Strikers vs Pune Royals",
    sport: "Cricket",
    date: "2026-11-12",
    status: "Scheduled",
  },
  {
    id: "MAT002",
    name: "Delhi Warriors vs Jaipur FC",
    sport: "Football",
    date: "2026-11-14",
    status: "Scheduled",
  },
];

const navigation = [
  { label: "Overview", icon: FiGrid },
  { label: "Players", icon: FiUsers },
  { label: "Teams", icon: FiShield },
  { label: "Verifications", icon: FiCheckCircle },
  { label: "Sports", icon: FiTarget },
  { label: "Tournaments", icon: FiAward },
  { label: "Matches", icon: FiActivity },
  { label: "Reports", icon: FiFlag },
];

const badgeStyles = {
  Verified: "bg-emerald-50 text-emerald-700",
  Approved: "bg-emerald-50 text-emerald-700",
  Active: "bg-emerald-50 text-emerald-700",
  Pending: "bg-amber-50 text-amber-700",
  Unverified: "bg-amber-50 text-amber-700",
  Inactive: "bg-slate-100 text-slate-600",
  Completed: "bg-slate-100 text-slate-600",
  Upcoming: "bg-blue-50 text-blue-700",
  Scheduled: "bg-violet-50 text-violet-700",
  Rejected: "bg-rose-50 text-rose-700",
};

function StatusBadge({ status }) {
  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${badgeStyles[status] || "bg-slate-100 text-slate-600"
        }`}
    >
      {status}
    </span>
  );
}

function StatCard({ title, value, description, icon: Icon, color }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-slate-500">{title}</p>
          <h3 className="mt-3 text-3xl font-bold text-slate-900">{value}</h3>
          <p className="mt-2 text-xs text-slate-500">{description}</p>
        </div>
        <div className={`rounded-xl p-3 ${color}`}>
          <Icon size={22} />
        </div>
      </div>
    </div>
  );
}

function ApprovalActions({ item, onVerify, onUnverify }) {
  if (item.verified === true) {
    return (
      <div className="flex items-center gap-2">
        {/* <StatusBadge status="Verified" /> */}
        <button
          onClick={() => onUnverify(item)}
          title="Remove verification"
          aria-label={`Remove verification for ${getRecordName(item)}`}
          className="rounded-lg border border-slate-200 px-2.5 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100"
        >
          Revoke
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => onVerify(item)}
      className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3 py-2 text-xs font-semibold text-white hover:bg-emerald-700"
    >
      <FiCheckCircle size={15} />
      Verify
    </button>
  );
}

function EmptyState({ title }) {
  return (
    <div className="px-6 py-14 text-center">
      <FiSearch className="mx-auto text-3xl text-slate-300" />
      <p className="mt-3 font-semibold text-slate-700">
        No {title.toLowerCase()} found
      </p>
      <p className="mt-1 text-sm text-slate-500">
        Try changing your search or status filter.
      </p>
    </div>
  );
}

export default function AdminDashboard() {
  // Load your existing players and teams.
  const [players, setPlayers] = useState(() =>
    readLocalData("players")
  );

  const [teams, setTeams] = useState(() =>
    readLocalData("teams")
  );

  const navigate = useNavigate();

  // These three sections are demonstration data for now.
  const [sports, setSports] = useState(initialSports);
  const [tournaments] = useState(initialTournaments);
  const [matches] = useState(initialMatches);

  const [activePage, setActivePage] = useState("Overview");
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notice, setNotice] = useState("");
  const [confirmAction, setConfirmAction] = useState(null);

  const pendingPlayers = players.filter(
    (player) => player.verified !== true
  ).length;

  const pendingTeams = teams.filter(
    (team) => team.verified !== true
  ).length;

  const verifiedPlayers = players.filter(
    (player) => player.verified === true
  ).length;

  const verifiedTeams = teams.filter(
    (team) => team.verified === true
  ).length;

  function showNotice(message) {
    setNotice(message);
  }

  // Persist updates to the original storage key.
  function updateVerification(recordType, item, verified) {
    const storageKey =
      recordType === "Player" ? "players" : "teams";

    const records = recordType === "Player" ? players : teams;
    const setRecords = recordType === "Player" ? setPlayers : setTeams;

    const itemId = getId(item, "");

    const updatedRecords = records.map((record) => {
      const recordId = getId(record, "");

      if (recordId === itemId) {
        return { ...record, verified };
      }

      return record;
    });

    try {
      localStorage.setItem(storageKey, JSON.stringify(updatedRecords));
      setRecords(updatedRecords);

      showNotice(
        verified
          ? `${getRecordName(item)} has been verified successfully.`
          : `Verification removed for ${getRecordName(item)}.`
      );
    } catch (error) {
      console.error(`Unable to save ${storageKey}:`, error);
      showNotice("Unable to save changes. Check browser storage.");
    }

    setConfirmAction(null);
  }

  function handleVerify(recordType, item) {
    updateVerification(recordType, item, true);
  }

  function handleUnverify(recordType, item) {
    setConfirmAction({ recordType, item });
  }

  // Build the selected page's records.
  const filteredData = useMemo(() => {
    let data = [];

    switch (activePage) {
      case "Players":
        data = players.map((item) => ({
          ...item,
          displayName: getRecordName(item),
          recordType: "Player",
          status: getVerificationStatus(item),
        }));
        break;

      case "Teams":
        data = teams.map((item) => ({
          ...item,
          displayName: getRecordName(item),
          recordType: "Team",
          status: getVerificationStatus(item),
        }));
        break;

      case "Verifications":
        data = [
          ...players.map((item) => ({
            ...item,
            displayName: getRecordName(item),
            recordType: "Player",
            status: getVerificationStatus(item),
          })),
          ...teams.map((item) => ({
            ...item,
            displayName: getRecordName(item),
            recordType: "Team",
            status: getVerificationStatus(item),
          })),
        ].filter((item) => item.verified !== true);
        break;

      case "Sports":
        data = sports;
        break;

      case "Tournaments":
        data = tournaments;
        break;

      case "Matches":
        data = matches;
        break;

      default:
        data = [];
    }

    return data.filter((item) => {
      const searchableText = [
        item.displayName,
        item.name,
        item.id,
        item.sport,
        item.team,
        item.city,
        item.country,
        item.position,
        item.status,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      const matchesSearch = searchableText.includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "All" || item.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [
    activePage,
    players,
    teams,
    sports,
    tournaments,
    matches,
    search,
    statusFilter,
  ]);

  function navigateTo(page) {
    setActivePage(page);
    setSearch("");
    setStatusFilter("All");
    setSidebarOpen(false);
  }

  function toggleSport(id) {
    setSports((current) =>
      current.map((sport) =>
        sport.id === id
          ? {
            ...sport,
            status: sport.status === "Active" ? "Inactive" : "Active",
          }
          : sport
      )
    );
  }

  const filterOptions =
    activePage === "Sports"
      ? ["Active", "Inactive"]
      : activePage === "Tournaments"
        ? ["Upcoming", "Completed"]
        : activePage === "Matches"
          ? ["Scheduled", "Completed"]
          : ["Pending", "Verified"];

  function renderTable() {
    return (
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500">
            <tr>
              {activePage === "Players" && (
                <>
                  <th className="px-5 py-4">Player</th>
                  <th className="px-5 py-4">Sport</th>
                  <th className="px-5 py-4">Team</th>
                  <th className="px-5 py-4">Location</th>
                  <th className="px-5 py-4">Verification</th>
                  <th className="px-5 py-4">Actions</th>
                </>
              )}

              {activePage === "Teams" && (
                <>
                  <th className="px-5 py-4">Team</th>
                  <th className="px-5 py-4">Sport</th>
                  <th className="px-5 py-4">Members</th>
                  <th className="px-5 py-4">Location</th>
                  <th className="px-5 py-4">Verification</th>
                  <th className="px-5 py-4">Actions</th>
                </>
              )}

              {activePage === "Verifications" && (
                <>
                  <th className="px-5 py-4">Applicant</th>
                  <th className="px-5 py-4">Type</th>
                  <th className="px-5 py-4">Sport</th>
                  <th className="px-5 py-4">Location</th>
                  <th className="px-5 py-4">Status</th>
                  <th className="px-5 py-4">Actions</th>
                </>
              )}

              {activePage === "Sports" && (
                <>
                  <th className="px-5 py-4">Sport</th>
                  <th className="px-5 py-4">Sport ID</th>
                  <th className="px-5 py-4">Players</th>
                  <th className="px-5 py-4">Status</th>
                  <th className="px-5 py-4">Actions</th>
                </>
              )}

              {activePage === "Tournaments" && (
                <>
                  <th className="px-5 py-4">Tournament</th>
                  <th className="px-5 py-4">Sport</th>
                  <th className="px-5 py-4">Date</th>
                  <th className="px-5 py-4">Participants</th>
                  <th className="px-5 py-4">Status</th>
                </>
              )}

              {activePage === "Matches" && (
                <>
                  <th className="px-5 py-4">Match</th>
                  <th className="px-5 py-4">Sport</th>
                  <th className="px-5 py-4">Date</th>
                  <th className="px-5 py-4">Status</th>
                </>
              )}
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {filteredData.map((item, index) => {
              const itemKey = getId(item, `${activePage}-${index}`);
              const displayName = item.displayName || item.name || "Unnamed";
              const recordType = item.recordType;

              return (
                <tr
                  key={`${recordType || activePage}-${itemKey}`}
                  className="transition hover:bg-slate-50"
                >
                  {(activePage === "Players" ||
                    activePage === "Verifications") && (
                      <>
                        <td className="px-5 py-4">
                          <div  className="flex items-center gap-3">
                            <div onClick={()=>{navigate(`/${item.id.includes("TEAM")?"teams":"players"}/${item.id}`)}} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 font-bold text-blue-700 cursor-pointer">
                              {displayName
                                .split(" ")
                                .map((part) => part[0])
                                .join("")
                                .slice(0, 2)}
                            </div>
                            <div >
                              <p className="font-semibold text-slate-800">
                                {displayName}
                              </p>
                              <p className="mt-1 text-xs text-slate-500">
                                {item.id || item._id || "No ID"}
                                {item.position ? ` · ${item.position}` : ""}
                              </p>
                            </div>
                          </div>
                        </td>

                        {activePage === "Verifications" && (
                          <td className="px-5 py-4">{recordType}</td>
                        )}

                        <td className="px-5 py-4 text-slate-600">
                          {item.sport || "—"}
                        </td>
                       {activePage==="Players" &&(  <td className="px-5 py-4">
                        {item.team ? item.team : "—"}
                      </td>)}

                        <td className="px-5 py-4 text-slate-600">
                          {item.city || item.country || "—"}
                        </td>

                        <td className="px-5 py-4">
                          <StatusBadge status={getVerificationStatus(item)} />
                        </td>

                        <td className="px-5 py-4">
                          <ApprovalActions
                            item={item}
                            onVerify={(record) =>
                              handleVerify(recordType || "Player", record)
                            }
                            onUnverify={(record) =>
                              handleUnverify(recordType || "Player", record)
                            }
                          />
                        </td>
                      </>
                    )}

                  {activePage === "Teams" && (
                    <>
                      <td className="px-5 py-4">
                        <div  className="flex items-center gap-3">
                            <div onClick={()=>{navigate(`/teams/${item.id}`)}} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 font-bold text-blue-700 cursor-pointer">
                              {displayName
                                .split(" ")
                                .map((part) => part[0])
                                .join("")
                                .slice(0, 2)}
                            </div>
                            <div >
                              <p className="font-semibold text-slate-800">
                                {displayName}
                              </p>
                              <p className="mt-1 text-xs text-slate-500">
                                {item.id || item._id || "No ID"}
                                {item.position ? ` · ${item.position}` : ""}
                              </p>
                            </div>
                          </div>
                      </td>
                      <td className="px-5 py-4">{item.sport || "—"}</td>
                      <td className="px-5 py-4">
                        {item.members ?? item.players?.length ?? "—"}
                      </td>
                      <td className="px-5 py-4">
                        {item.city || item.country || "—"}
                      </td>
                      <td className="px-5 py-4">
                        <StatusBadge status={getVerificationStatus(item)} />
                      </td>
                      <td className="px-5 py-4">
                        <ApprovalActions
                          item={item}
                          onVerify={(record) => handleVerify("Team", record)}
                          onUnverify={(record) => handleUnverify("Team", record)}
                        />
                      </td>
                    </>
                  )}

                  {activePage === "Sports" && (
                    <>
                      <td className="px-5 py-4 font-semibold">{item.name}</td>
                      <td className="px-5 py-4">{item.id}</td>
                      <td className="px-5 py-4">{item.players}</td>
                      <td className="px-5 py-4">
                        <StatusBadge status={item.status} />
                      </td>
                      <td className="px-5 py-4">
                        <button
                          onClick={() => toggleSport(item.id)}
                          className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold hover:bg-slate-100"
                        >
                          {item.status === "Active" ? "Deactivate" : "Activate"}
                        </button>
                      </td>
                    </>
                  )}

                  {activePage === "Tournaments" && (
                    <>
                      <td className="px-5 py-4 font-semibold">{item.name}</td>
                      <td className="px-5 py-4">{item.sport}</td>
                      <td className="px-5 py-4">{item.date}</td>
                      <td className="px-5 py-4">{item.participants}</td>
                      <td className="px-5 py-4">
                        <StatusBadge status={item.status} />
                      </td>
                    </>
                  )}

                  {activePage === "Matches" && (
                    <>
                      <td className="px-5 py-4 font-semibold">{item.name}</td>
                      <td className="px-5 py-4">{item.sport}</td>
                      <td className="px-5 py-4">{item.date}</td>
                      <td className="px-5 py-4">
                        <StatusBadge status={item.status} />
                      </td>
                    </>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>

        {filteredData.length === 0 && <EmptyState title={activePage} />}

        {filteredData.length > 0 && (
          <div className="border-t border-slate-100 px-5 py-4 text-xs text-slate-500">
            Showing {filteredData.length} records
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <button
          aria-label="Close navigation"
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-30 bg-slate-950/40 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-64 flex-col bg-slate-950 text-white transition-transform duration-200 lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex h-20 items-center justify-between border-b border-white/10 px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-xl font-black">
              PN
            </div>
            <div>
              <p className="text-lg font-bold">PlayNexa</p>
              <p className="text-xs text-slate-400">Admin Console</p>
            </div>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden"
            aria-label="Close sidebar"
          >
            <FiX size={20} />
          </button>
        </div>

        <div className="px-4 py-6">
          <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
            Workspace
          </p>

          <nav className="space-y-1">
            {navigation.map(({ label, icon: Icon }) => (
              <button
                key={label}
                onClick={() => navigateTo(label)}
                className={`flex w-full items-center justify-between rounded-xl px-3 py-3 text-sm font-medium transition ${activePage === label
                    ? "bg-blue-600 text-white"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                  }`}
              >
                <span className="flex items-center gap-3">
                  <Icon size={18} />
                  {label}
                </span>

                {label === "Verifications" &&
                  pendingPlayers + pendingTeams > 0 && (
                    <span className="rounded-md bg-amber-400 px-2 py-0.5 text-xs font-bold text-slate-950">
                      {pendingPlayers + pendingTeams}
                    </span>
                  )}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-auto p-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <FiShield className="text-emerald-400" />
              Admin workspace
            </div>
            <p className="mt-2 text-xs leading-5 text-slate-400">
              Manage your players, teams, and sports community.
            </p>
          </div>

          <button
            onClick={() => {navigate('/') }}
            className="
                       mt-4 flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm text-slate-400 hover:bg-white/5 hover:text-white"

          >

            <AiOutlineHome size={18} />
            Home

          </button>

          <button
            onClick={() => {
              localStorage.setItem("user", "")
              localStorage.setItem("LoggedInUser", "")
              navigate('/login')
            }
            }
            className="mt-4 flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm text-red-400 hover:bg-white/5"
          >
            <FiLogOut size={18} />
            Sign out
          </button>
        </div>
      </aside>

      {/* Main area */}
      <div className="min-h-screen lg:pl-64">
        <header className="sticky top-0 z-20 flex h-20 items-center justify-between border-b border-slate-200 bg-white/95 px-4 backdrop-blur sm:px-7">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="rounded-lg p-2 hover:bg-slate-100 lg:hidden"
              aria-label="Open sidebar"
            >
              <FiMenu size={22} />
            </button>
            <div>
              <h1 className="text-lg font-bold text-slate-900 sm:text-xl">
                {activePage === "Overview"
                  ? "Dashboard Overview"
                  : activePage}
              </h1>
              <p className="hidden text-xs text-slate-500 sm:block">
                Monitor your sports platform from one place.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-5">
            <button
              onClick={() => navigateTo("Verifications")}
              className="relative rounded-xl border border-slate-200 p-2.5 text-slate-600 hover:bg-slate-50"
              aria-label="View verifications"
            >
              <FiBell size={19} />
              {pendingPlayers + pendingTeams > 0 && (
                <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-rose-500 px-1 text-[10px] font-bold text-white">
                  {pendingPlayers + pendingTeams}
                </span>
              )}
            </button>

            <div className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">
                AD
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-semibold text-slate-800">
                  Admin User
                </p>
                <p className="text-xs text-slate-500">Administrator</p>
              </div>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-[1600px] space-y-7 p-4 sm:p-7">
          {notice && (
            <div
              role="status"
              className="flex items-center justify-between rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800"
            >
              <span>{notice}</span>
              <button
                onClick={() => setNotice("")}
                aria-label="Dismiss notice"
              >
                <FiX />
              </button>
            </div>
          )}

          {/* Overview page */}
          {activePage === "Overview" ? (
            <>
              <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 p-6 text-white shadow-lg sm:p-8">
                <div className="relative z-10 max-w-2xl">
                  <p className="text-sm font-medium text-blue-100">
                    PLAYNEXA CONTROL CENTER
                  </p>
                  <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                    Your sports community, under control.
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-blue-50">
                    Verify players and teams, monitor sports activity, and
                    manage your platform from one dashboard.
                  </p>
                  <button
                    onClick={() => navigateTo("Verifications")}
                    className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-bold text-blue-700 hover:bg-blue-50"
                  >
                    Review verifications <FiCheckCircle />
                  </button>
                </div>
                <FiActivity
                  className="absolute -bottom-10 -right-4 hidden text-white/10 sm:block"
                  size={220}
                />
              </section>

              <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <StatCard
                  title="Total Players"
                  value={players.length.toLocaleString()}
                  description="Loaded from players"
                  icon={FiUsers}
                  color="bg-blue-50 text-blue-600"
                />
                <StatCard
                  title="Total Teams"
                  value={teams.length.toLocaleString()}
                  description="Loaded from teams"
                  icon={FiShield}
                  color="bg-violet-50 text-violet-600"
                />
                <StatCard
                  title="Pending Verification"
                  value={(pendingPlayers + pendingTeams).toLocaleString()}
                  description="Players and teams not verified"
                  icon={FiClock}
                  color="bg-amber-50 text-amber-600"
                />
                <StatCard
                  title="Verified Records"
                  value={(verifiedPlayers + verifiedTeams).toLocaleString()}
                  description="Verified players and teams"
                  icon={FiCheckCircle}
                  color="bg-emerald-50 text-emerald-600"
                />
              </section>

              <section className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <div className="flex items-center justify-between border-b border-slate-100 p-5">
                    <div>
                      <h3 className="font-bold text-slate-900">
                        Verification Queue
                      </h3>
                      <p className="mt-1 text-xs text-slate-500">
                        Records that have not been verified yet.
                      </p>
                    </div>
                    <button
                      onClick={() => navigateTo("Verifications")}
                      className="text-sm font-semibold text-blue-600 hover:text-blue-800"
                    >
                      View all
                    </button>
                  </div>

                  <div className="divide-y divide-slate-100">
                    {[
                      ...players
                        .filter((item) => item.verified !== true)
                        .map((item) => ({
                          ...item,
                          recordType: "Player",
                        })),
                      ...teams
                        .filter((item) => item.verified !== true)
                        .map((item) => ({
                          ...item,
                          recordType: "Team",
                        })),
                    ]
                      .slice(0, 5)
                      .map((item, index) => (
                        <div
                          key={`${item.recordType}-${getId(item, index)}`}
                          className="flex flex-wrap items-center justify-between gap-3 p-5"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                              {item.recordType === "Team" ? (
                                <FiShield size={19} />
                              ) : (
                                <FiUsers size={19} />
                              )}
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-slate-800">
                                {getRecordName(item)}
                              </p>
                              <p className="mt-1 text-xs text-slate-500">
                                {item.recordType} · {item.sport || "Sport not set"}
                              </p>
                            </div>
                          </div>
                          <StatusBadge status="Pending" />
                        </div>
                      ))}

                    {pendingPlayers + pendingTeams === 0 && (
                      <p className="p-8 text-center text-sm text-slate-500">
                        All player and team records are verified.
                      </p>
                    )}
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="font-bold text-slate-900">Quick Actions</h3>
                  <p className="mt-1 text-xs text-slate-500">
                    Open a management section.
                  </p>

                  <div className="mt-5 space-y-3">
                    {[
                      {
                        label: "Manage players",
                        description: "Review player records",
                        icon: FiUsers,
                        page: "Players",
                      },
                      {
                        label: "Manage teams",
                        description: "Review team records",
                        icon: FiShield,
                        page: "Teams",
                      },
                      {
                        label: "Manage tournaments",
                        description: "View competition records",
                        icon: FiAward,
                        page: "Tournaments",
                      },
                      {
                        label: "Manage matches",
                        description: "View scheduled matches",
                        icon: FiCalendar,
                        page: "Matches",
                      },
                    ].map(({ label, description, icon: Icon, page }) => (
                      <button
                        key={page}
                        onClick={() => navigateTo(page)}
                        className="flex w-full items-center gap-3 rounded-xl border border-slate-100 p-3 text-left hover:border-blue-200 hover:bg-blue-50/50"
                      >
                        <div className="rounded-lg bg-slate-100 p-2.5 text-slate-600">
                          <Icon size={19} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-semibold text-slate-800">
                            {label}
                          </p>
                          <p className="mt-1 text-xs text-slate-500">
                            {description}
                          </p>
                        </div>
                        <FiTrendingUp className="text-slate-400" />
                      </button>
                    ))}
                  </div>
                </div>
              </section>

              <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="font-bold text-slate-900">
                  Sports Activity Snapshot
                </h3>
                <p className="mt-1 text-xs text-slate-500">
                  Sample tournament and match information.
                </p>

                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-xl bg-blue-50 p-4">
                    <FiAward className="text-blue-600" size={22} />
                    <p className="mt-3 text-2xl font-bold">
                      {tournaments.length}
                    </p>
                    <p className="mt-1 text-sm text-slate-600">Tournaments</p>
                  </div>
                  <div className="rounded-xl bg-violet-50 p-4">
                    <FiCalendar className="text-violet-600" size={22} />
                    <p className="mt-3 text-2xl font-bold">
                      {matches.length}
                    </p>
                    <p className="mt-1 text-sm text-slate-600">Matches</p>
                  </div>
                  <div className="rounded-xl bg-emerald-50 p-4">
                    <FiTarget className="text-emerald-600" size={22} />
                    <p className="mt-3 text-2xl font-bold">
                      {sports.filter((sport) => sport.status === "Active").length}
                    </p>
                    <p className="mt-1 text-sm text-slate-600">
                      Active sports categories
                    </p>
                  </div>
                </div>
              </section>
            </>
          ) : (
            <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex flex-col gap-4 border-b border-slate-100 p-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="font-bold text-slate-900">
                    {activePage === "Verifications"
                      ? "Pending Verifications"
                      : `${activePage} Management`}
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    {activePage === "Verifications"
                      ? "Verify player and team records using their verified field."
                      : `Search and review ${activePage.toLowerCase()} records.`}
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <div className="relative">
                    <FiSearch
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                      size={17}
                    />
                    <input
                      value={search}
                      onChange={(event) => setSearch(event.target.value)}
                      placeholder="Search records..."
                      className="w-full rounded-xl border border-slate-200 py-2.5 pl-9 pr-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 sm:w-56"
                    />
                  </div>

                  <select
                    value={statusFilter}
                    onChange={(event) => setStatusFilter(event.target.value)}
                    className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-blue-500"
                  >
                    <option value="All">All statuses</option>
                    {filterOptions.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {activePage === "Reports" ? (
                <div className="px-6 py-14 text-center">
                  <FiFlag className="mx-auto text-4xl text-slate-300" />
                  <h3 className="mt-4 font-semibold text-slate-800">
                    Reports management
                  </h3>
                  <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                    Connect this section to your reports and moderation data
                    when those records are available in your application.
                  </p>
                </div>
              ) : (
                renderTable()
              )}
            </section>
          )}

          <footer className="flex flex-wrap items-center justify-between gap-2 pb-2 text-xs text-slate-400">
            <span>© 2026 PlayNexa Admin Console</span>
            <span>Players and teams loaded from localStorage</span>
          </footer>
        </main>
      </div>

      {/* Confirmation dialog for removing verification */}
      {confirmAction && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4"
          onClick={() => setConfirmAction(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="confirm-title"
            className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
              <FiXCircle size={24} />
            </div>

            <h3
              id="confirm-title"
              className="mt-4 text-lg font-bold text-slate-900"
            >
              Remove verification?
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              This will set <strong>verified</strong> to false for{" "}
              <strong className="text-slate-800">
                {getRecordName(confirmAction.item)}
              </strong>
              . The record will appear as pending/unverified because your data
              uses a boolean verification field.
            </p>

            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => setConfirmAction(null)}
                className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-50"
              >
                Cancel
              </button>
              <button
                onClick={() =>
                  updateVerification(
                    confirmAction.recordType,
                    confirmAction.item,
                    false
                  )
                }
                className="rounded-xl bg-rose-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-rose-700"
              >
                Remove verification
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
