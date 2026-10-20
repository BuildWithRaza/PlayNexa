
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    UserRound,
    Trophy,
    Activity,
    Dumbbell,
    Save,
    RotateCcw,
    CheckCircle2,
    LoaderCircle,
} from "lucide-react";



const SPORTS = {
    Cricket: {
        positions: ["Batsman", "Bowler", "All-Rounder", "Wicket-Keeper"],
        stats: [
            ["matches", "Matches"],
            ["wins", "Wins"],
            ["runs", "Runs"],
            ["average", "Batting Average"],
            ["strikeRate", "Strike Rate"],
            ["wickets", "Wickets"],
        ],
        skills: [
            ["speed", "Speed"],
            ["strength", "Strength"],
            ["stamina", "Stamina"],
            ["technique", "Technique"],
            ["teamwork", "Teamwork"],
            ["fielding", "Fielding"],
            ["bowling", "Bowling"],
        ],
    },

    Badminton: {
        positions: ["Singles Player", "Doubles Player", "Mixed Doubles Player"],
        stats: [
            ["matches", "Matches"],
            ["wins", "Wins"],
            ["winRate", "Win Rate (%)"],
            ["tournaments", "Tournaments"],
            ["titles", "Titles"],
        ],
        skills: [
            ["speed", "Speed"],
            ["strength", "Strength"],
            ["stamina", "Stamina"],
            ["technique", "Technique"],
            ["teamwork", "Teamwork"],
            ["footwork", "Footwork"],
            ["smashPower", "Smash Power"],
            ["agility", "Agility"],
        ],
    },

    Football: {
        positions: ["Goalkeeper", "Defender", "Midfielder", "Forward"],
        stats: [
            ["matches", "Matches"],
            ["wins", "Wins"],
            ["goals", "Goals"],
            ["assists", "Assists"],
            ["cleanSheets", "Clean Sheets"],
            ["yellowCards", "Yellow Cards"],
            ["redCards", "Red Cards"],
        ],
        skills: [
            ["speed", "Speed"],
            ["strength", "Strength"],
            ["stamina", "Stamina"],
            ["passing", "Passing"],
            ["dribbling", "Dribbling"],
            ["shooting", "Shooting"],
            ["defending", "Defending"],
            ["teamwork", "Teamwork"],
        ],
    },

    Basketball: {
        positions: [
            "Point Guard",
            "Shooting Guard",
            "Small Forward",
            "Power Forward",
            "Center",
        ],
        stats: [
            ["matches", "Matches"],
            ["wins", "Wins"],
            ["points", "Points Scored"],
            ["assists", "Assists"],
            ["rebounds", "Rebounds"],
            ["steals", "Steals"],
            ["blocks", "Blocks"],
        ],
        skills: [
            ["speed", "Speed"],
            ["strength", "Strength"],
            ["stamina", "Stamina"],
            ["shooting", "Shooting"],
            ["dribbling", "Dribbling"],
            ["passing", "Passing"],
            ["defense", "Defense"],
            ["teamwork", "Teamwork"],
        ],
    },
};

const API_URL =
    import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const makeStats = (sport) =>
    Object.fromEntries(SPORTS[sport].stats.map(([key]) => [key, 0]));

const makeSkills = (sport) =>
    Object.fromEntries(SPORTS[sport].skills.map(([key]) => [key, 50]));

let playerCount = localStorage.getItem('players') || []

if(playerCount!==""){
    playerCount=JSON.parse(playerCount).length;
    console.log(playerCount)
}

const initialForm = () => ({
    id: `PLY${playerCount+1}`,
    firstName: "",
    lastName: "",
    age: "",
    gender: "Male",
    sport: "Cricket",
    position: "Batsman",
    team: "",
    jerseyNumber: "",
    country: "India",
    city: "",
    profileImage: "",
    bio: "",
    rating: 0,
    experienceYears: 0,
    stats: makeStats("Cricket"),
    skills: makeSkills("Cricket"),
    points: { total: 0 },
    availability: "Available",
    verified: false,
});

const inputClass =
    "w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100";

function Section({ icon: Icon, title, subtitle, children }) {
    return (
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
            <div className="mb-5 flex items-center gap-3">
                <div className="rounded-xl bg-indigo-50 p-3 text-indigo-600">
                    <Icon size={21} />
                </div>
                <div>
                    <h2 className="font-semibold text-slate-900">{title}</h2>
                    <p className="text-xs text-slate-500">{subtitle}</p>
                </div>
            </div>
            {children}
        </section>
    );
}

function Field({ label, children }) {
    return (
        <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">
                {label}
            </label>
            {children}
        </div>
    );
}

export default function PlayerForm() {
    const [form, setForm] = useState(initialForm);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState(false);
    const [savedPlayer, setSavedPlayer] = useState(null);
    const navigate = useNavigate()

    const config = SPORTS[form.sport];

    function changeField(event) {
        const { name, value, type, checked } = event.target;

        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    }

    function changeSport(event) {
        const sport = event.target.value;

        setForm((prev) => ({
            ...prev,
            sport,
            position: SPORTS[sport].positions[0],
            stats: makeStats(sport),
            skills: makeSkills(sport),
        }));
    }

    function changeStat(key, value) {
        setForm((prev) => ({
            ...prev,
            stats: {
                ...prev.stats,
                [key]: value === "" ? "" : Number(value),
            },
        }));
    }

    function changeSkill(key, value) {
        setForm((prev) => ({
            ...prev,
            skills: {
                ...prev.skills,
                [key]: Number(value),
            },
        }));
    }

    function resetForm() {
        setForm(initialForm());
        setMessage("");
        setError(false);
        setSavedPlayer(null);
    }

    // async function submitForm(event) {
    //     event.preventDefault();
    //     setLoading(true);
    //     setMessage("");
    //     setError(false);
    //     setSavedPlayer(null);

    //     try {
    //         const payload = {
    //             ...form,
    //             name: `${form.firstName.trim()} ${form.lastName.trim()}`,
    //             age: form.age === "" ? undefined : Number(form.age),
    //             jerseyNumber:
    //                 form.jerseyNumber === ""
    //                     ? undefined
    //                     : Number(form.jerseyNumber),
    //             rating: Number(form.rating),
    //             experienceYears: Number(form.experienceYears),
    //             stats: Object.fromEntries(
    //                 config.stats.map(([key]) => [
    //                     key,
    //                     Number(form.stats[key] ?? 0),
    //                 ])
    //             ),
    //             skills: Object.fromEntries(
    //                 config.skills.map(([key]) => [
    //                     key,
    //                     Number(form.skills[key] ?? 50),
    //                 ])
    //             ),
    //             points: { total: Number(form.points.total) || 0 },
    //         };

    //         const response = await fetch(`${API_URL}/players`, {
    //             method: "POST",
    //             headers: { "Content-Type": "application/json" },
    //             body: JSON.stringify(payload),
    //         });

    //         const result = await response.json();

    //         if (!response.ok) {
    //             throw new Error(result.message || "Failed to save player");
    //         }

    //         setMessage("Player registered successfully!");
    //         setSavedPlayer(result.data ?? payload);
    //         setForm(initialForm());
    //     } catch (err) {
    //         setError(true);
    //         setMessage(err.message || "Unable to connect to the server");
    //     } finally {
    //         setLoading(false);
    //     }
    // }

    function submitForm(event) {
  event.preventDefault();

  try {
    const payload = {
      ...form,
      name: `${form.firstName.trim()} ${form.lastName.trim()}`.trim(),
      profileImage:form.profileImage===""?(form.gender==="Male"?"https://cdn5.vectorstock.com/i/1000x1000/43/94/default-avatar-photo-placeholder-icon-grey-vector-38594394.jpg":"https://tse1.explicit.bing.net/th/id/OIP.oAA4WotsuCdNcrsV6gqz2AHaJR?r=0&w=803&h=1005&rs=1&pid=ImgDetMain&o=7&rm=3"):form.profileImage,
      age: form.age === "" ? undefined : Number(form.age),
      jerseyNumber:
        form.jerseyNumber === ""
          ? undefined
          : Number(form.jerseyNumber),
      rating: Number(form.rating),
      experienceYears: Number(form.experienceYears),

      stats: Object.fromEntries(
        SPORTS[form.sport].stats.map(([key]) => [
          key,
          Number(form.stats[key] ?? 0),
        ])
      ),

      skills: Object.fromEntries(
        SPORTS[form.sport].skills.map(([key]) => [
          key,
          Number(form.skills[key] ?? 50),
        ])
      ),

      points: {
        total: Number(form.points.total) || 0,
      },
      verified:false
    };

    // Get existing players from localStorage
    const existingPlayers = JSON.parse(
      localStorage.getItem("players") || "[]"
    );

    // Prevent duplicate player IDs
    const duplicate = existingPlayers.some(
      (player) => player.id === payload.id
    );

    if (duplicate) {
      setError(true);
      setMessage("A player with this ID already exists.");
      return;
    }

    // Save the new player
    const updatedPlayers = [...existingPlayers, payload];

    localStorage.setItem(
      "players",
      JSON.stringify(updatedPlayers)
    );
    localStorage.setItem(
      "user",
      JSON.stringify(payload)
    );
    localStorage.setItem("LoggedInUser","playerdash");
    



    setMessage("Player registered successfully!");
    setError(false);
    setSavedPlayer(payload);

    // Reset the form
    setForm(initialForm());
    playerCount+=1;
    navigate(`/playerdash/${payload.id}`)

  } catch (err) {
    setError(true);
    setMessage("Failed to save player data.");
  }
}

    return (
        <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
                <header className="mb-8">
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-700">
                        <Trophy size={15} /> PlayNexa
                    </div>

                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        Register a Player
                    </h1>
                    <p className="mt-2 text-sm text-slate-500">
                        Manage player profiles, sport-specific stats, and skill ratings.
                    </p>
                </header>

                {message && (
                    <div
                        role="status"
                        className={`mb-6 flex items-center gap-2 rounded-xl border p-4 text-sm ${error
                            ? "border-red-200 bg-red-50 text-red-700"
                            : "border-emerald-200 bg-emerald-50 text-emerald-700"
                            }`}
                    >
                        <CheckCircle2 size={19} />
                        {message}
                    </div>
                )}

                <form onSubmit={submitForm} className="space-y-6">
                    <Section
                        icon={UserRound}
                        title="Player Information"
                        subtitle="Basic identity and personal details"
                    >
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            <Field label="Player ID *">
                                <input className={inputClass} name="id" value={form.id}
                                     placeholder="PLY001" required />
                            </Field>

                            <Field label="First Name *">
                                <input className={inputClass} name="firstName"
                                    value={form.firstName} onChange={changeField} required />
                            </Field>

                            <Field label="Last Name *">
                                <input className={inputClass} name="lastName"
                                    value={form.lastName} onChange={changeField} required />
                            </Field>

                            <Field label="Age">
                                <input className={inputClass} type="number" name="age"
                                    min="0" max="120" value={form.age} onChange={changeField} />
                            </Field>

                            <Field label="Gender">
                                <select className={inputClass} name="gender"
                                    value={form.gender} onChange={changeField}>
                                    {["Male", "Female", "Other"].map((v) =>
                                        <option key={v}>{v}</option>
                                    )}
                                </select>
                            </Field>

                            <Field label="Country">
                                <input className={inputClass} name="country"
                                    value={form.country} onChange={changeField} />
                            </Field>

                            <Field label="City">
                                <input className={inputClass} name="city"
                                    value={form.city} onChange={changeField} />
                            </Field>

                            <Field label="Team">
                                <input className={inputClass} name="team"
                                    value={form.team} onChange={changeField} />
                            </Field>

                            <Field label="Jersey Number">
                                <input className={inputClass} type="number"
                                    name="jerseyNumber" min="0" value={form.jerseyNumber}
                                    onChange={changeField} />
                            </Field>

                            <Field label="Profile Image URL">
                                <input className={inputClass} type="url"
                                    name="profileImage" value={form.profileImage}
                                    onChange={changeField} placeholder="https://..." />
                            </Field>

                            <Field label="Experience (years)">
                                <input className={inputClass} type="number"
                                    name="experienceYears" min="0"
                                    value={form.experienceYears} onChange={changeField} />
                            </Field>

                            <Field label="Rating (0–5)">
                                <input className={inputClass} type="number"
                                    name="rating" min="0" max="5" step="0.1"
                                    value={form.rating} onChange={changeField} />
                            </Field>

                            <div className="sm:col-span-2 lg:col-span-3">
                                <Field label="Bio">
                                    <textarea className={inputClass} name="bio" rows="3"
                                        value={form.bio} onChange={changeField}
                                        placeholder="Describe the player..." />
                                </Field>
                            </div>
                        </div>
                    </Section>

                    <Section
                        icon={Trophy}
                        title="Sport & Position"
                        subtitle="Choose a sport to update the available fields"
                    >
                        <div className="grid gap-4 sm:grid-cols-2">
                            <Field label="Sport *">
                                <select className={inputClass} value={form.sport}
                                    onChange={changeSport}>
                                    {Object.keys(SPORTS).map((sport) =>
                                        <option key={sport}>{sport}</option>
                                    )}
                                </select>
                            </Field>

                            <Field label="Position *">
                                <select className={inputClass} name="position"
                                    value={form.position} onChange={changeField} required>
                                    {config.positions.map((position) =>
                                        <option key={position}>{position}</option>
                                    )}
                                </select>
                            </Field>

                            <Field label="Availability">
                                <select className={inputClass} name="availability"
                                    value={form.availability} onChange={changeField}>
                                    {["Available", "Unavailable", "Injured"].map((v) =>
                                        <option key={v}>{v}</option>
                                    )}
                                </select>
                            </Field>

                            <Field label="Total Points">
                                <input className={inputClass} type="number" min="0"
                                    value={form.points.total}
                                    onChange={(e) => setForm((prev) => ({
                                        ...prev,
                                        points: { total: Number(e.target.value) || 0 },
                                    }))} />
                            </Field>

                            <label className="flex items-center gap-3 rounded-xl border border-slate-200 p-4 sm:col-span-2">
                                <input type="checkbox" name="verified"
                                    checked={form.verified} onChange={changeField}
                                    className="h-4 w-4 accent-indigo-600" />
                                <span className="text-sm font-medium text-slate-700">
                                    Verified player
                                </span>
                            </label>
                        </div>
                    </Section>

                    <Section
                        icon={Activity}
                        title={`${form.sport} Statistics`}
                        subtitle="All statistics start at zero"
                    >
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {config.stats.map(([key, label]) => (
                                <Field key={key} label={label}>
                                    <input className={inputClass} type="number"
                                        min="0" step="any"
                                        value={form.stats[key] ?? 0}
                                        onChange={(e) => changeStat(key, e.target.value)} />
                                </Field>
                            ))}
                        </div>
                    </Section>

                    <Section
                        icon={Dumbbell}
                        title={`${form.sport} Skills`}
                        subtitle="Scores start at 50 and range from 0 to 100"
                    >
                        <div className="grid gap-5 sm:grid-cols-2">
                            {config.skills.map(([key, label]) => (
                                <div key={key} className="rounded-xl border border-slate-200 p-4">
                                    <div className="mb-3 flex items-center justify-between">
                                        <label className="text-sm font-medium text-slate-700">
                                            {label}
                                        </label>
                                        <span className="rounded-lg bg-indigo-50 px-2.5 py-1 text-sm font-bold text-indigo-700">
                                            {form.skills[key] ?? 50}/100
                                        </span>
                                    </div>

                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        step="1"
                                        value={form.skills[key] ?? 50}
                                        onChange={(e) => changeSkill(key, e.target.value)}
                                        className="w-full cursor-pointer accent-indigo-600"
                                    />

                                    <div className="mt-1 flex justify-between text-xs text-slate-400">
                                        <span>Beginner</span>
                                        <span>Elite</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button type="button"
                            onClick={() => setForm((prev) => ({
                                ...prev,
                                skills: makeSkills(prev.sport),
                            }))}
                            className="mt-5 inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm hover:bg-slate-50">
                            <RotateCcw size={15} /> Reset skills to 50
                        </button>
                    </Section>

                    <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                        <button type="button" onClick={resetForm}
                            disabled={loading}
                            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100 disabled:opacity-50"
                        >
                            <RotateCcw size={16} />
                            Reset Form
                        </button>

                        <button
                            type="submit"
                            disabled={loading}
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {loading ? (
                                <LoaderCircle size={17} className="animate-spin" />
                            ) : (
                                <Save size={17} />
                            )}
                            {loading ? "Saving Player..." : "Register Player"}
                        </button>
                    </div>
                </form>

                {savedPlayer && (
                    <section className="mt-6 rounded-2xl border border-emerald-200 bg-white p-5">
                        <h2 className="mb-3 font-semibold text-emerald-700">
                            Saved Player Response
                        </h2>

                        <pre className="overflow-x-auto whitespace-pre-wrap break-words text-xs">
                            {JSON.stringify(savedPlayer, null, 2)}
                        </pre>
                    </section>
                )}

            </div>
        </main>
    );
}



