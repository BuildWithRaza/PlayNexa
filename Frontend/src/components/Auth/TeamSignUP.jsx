
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    FiAward,
    FiCheckCircle,
    FiChevronDown,
    FiChevronUp,
    FiImage,
    FiMapPin,
    FiShield,
    FiUsers,
    FiX,
} from "react-icons/fi";

const teamsCount = JSON.parse(localStorage.getItem("teams") || "[]");
let count = teamsCount.length;
let teamId=`TEAM${String(count + 1).padStart(3, "0")}`;

const initialForm = {
    id:teamId,
    name: "",
    shortName: "",
    sport: "Cricket",
    league: "",
    leagueShortName: "",
    country: "India",
    city: "",
    state: "",
    foundedYear: "",
    teamType: "Amateur",
    gender: "Men",
    logo: "",
    bannerImage: "",
    primaryColor: "#004BA0",
    secondaryColor: "#FFFFFF",
    accentColor: "#FFD700",
    homeVenue: "",
    venueCapacity: "",
    captain: "",
    captainId: "",
    coach: "",
    coachExperienceYears: "",
    assistantCoach: "",
    teamManager: "",
    owner: "",
    website: "",
    email: "",
    phone: "",
    description: "",
    bio: "",
    players: "",
    foreignPlayers: "0",
    localPlayers: "0",
    instagram: "",
    twitter: "",
    facebook: "",
    youtube: "",
};

const inputClass =
    "w-full rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

const labelClass = "mb-1.5 block text-sm font-medium text-slate-700";

function Field({
    label,
    name,
    value,
    onChange,
    placeholder,
    type = "text",
    required = false,
    min,
    max,
    hint,
}) {
    return (
        <div>
            <label className={labelClass} htmlFor={name}>
                {label}
                {required && <span className="ml-1 text-rose-500">*</span>}
            </label>
            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                min={min}
                max={max}
                className={inputClass}
            />
            {hint && <p className="mt-1 text-xs text-slate-500">{hint}</p>}
        </div>
    );
}

function SelectField({
    label,
    name,
    value,
    onChange,
    options,
    required = false,
}) {
    return (
        <div>
            <label className={labelClass} htmlFor={name}>
                {label}
                {required && <span className="ml-1 text-rose-500">*</span>}
            </label>
            <select
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                required={required}
                className={inputClass}
            >
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}

function TextAreaField({
    label,
    name,
    value,
    onChange,
    placeholder,
    required = false,
    rows = 3,
}) {
    return (
        <div>
            <label className={labelClass} htmlFor={name}>
                {label}
                {required && <span className="ml-1 text-rose-500">*</span>}
            </label>
            <textarea
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                rows={rows}
                className={`${inputClass} resize-y`}
            />
        </div>
    );
}

function Section({
    title,
    subtitle,
    icon: Icon,
    children,
    defaultOpen = true,
}) {
    const [open, setOpen] = useState(defaultOpen);

    return (
        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <button
                type="button"
                onClick={() => setOpen(!open)}
                className="flex w-full items-center justify-between gap-4 border-b border-slate-100 px-5 py-4 text-left sm:px-6"
            >
                <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-blue-50 p-2.5 text-blue-600">
                        <Icon size={20} />
                    </div>
                    <div>
                        <h2 className="font-bold text-slate-900">{title}</h2>
                        <p className="mt-1 text-xs text-slate-500">{subtitle}</p>
                    </div>
                </div>
                {open ? (
                    <FiChevronUp className="shrink-0 text-slate-400" />
                ) : (
                    <FiChevronDown className="shrink-0 text-slate-400" />
                )}
            </button>

            {open && (
                <div className="grid gap-5 p-5 sm:grid-cols-2 sm:p-6">
                    {children}
                </div>
            )}
        </section>
    );
}

function generateTeamId(teams) {
    const usedIds = new Set(
        teams.map((team) => String(team.id || ""))
    );

    let id;
    do {
        id = `TEAM${Date.now().toString().slice(-8)}`;
    } while (usedIds.has(id));

    return id;
}

function getExistingTeams() {
    try {
        const parsed = JSON.parse(localStorage.getItem("teams") || "[]");
        return Array.isArray(parsed) ? parsed : [];
    } catch {
        return [];
    }
}

export default function TeamSignup() {

    const navigate=useNavigate();
    const [form, setForm] = useState(initialForm);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [createdTeam, setCreatedTeam] = useState(null);

    function handleChange(event) {
        const { name, value } = event.target;
        setForm((current) => ({
            ...current,
            [name]: value,
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        setError("");
        setSuccess("");
        setCreatedTeam(null);

        const name = form.name.trim();
        const shortName = form.shortName.trim().toUpperCase();
        const email = form.email.trim().toLowerCase();

        if (!name || !shortName || !form.sport || !form.city || !email) {
            setError("Please complete all required fields.");
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        if (
            form.foundedYear &&
            (Number(form.foundedYear) < 1800 ||
                Number(form.foundedYear) > new Date().getFullYear())
        ) {
            setError("Please enter a valid founded year.");
            return;
        }

        if (
            form.venueCapacity &&
            (!Number.isFinite(Number(form.venueCapacity)) ||
                Number(form.venueCapacity) < 0)
        ) {
            setError("Venue capacity must be a non-negative number.");
            return;
        }

        if (
            form.coachExperienceYears &&
            (!Number.isFinite(Number(form.coachExperienceYears)) ||
                Number(form.coachExperienceYears) < 0)
        ) {
            setError("Coach experience must be a non-negative number.");
            return;
        }

        setSubmitting(true);

        try {
            const teams = getExistingTeams();

            const duplicate = teams.some(
                (team) =>
                    String(team.name || team.teamName || "")
                        .trim()
                        .toLowerCase() === name.toLowerCase()
            );

            if (duplicate) {
                setError(
                    "A team with this name already exists. Please check before registering."
                );
                setSubmitting(false);
                return;
            }

            const playerIds = [
                ...new Set(
                    form.players
                        .split(",")
                        .map((id) => id.trim())
                        .filter(Boolean)
                ),
            ];

            const foundedYear = form.foundedYear
                ? Number(form.foundedYear)
                : null;

           

            const team = {
                id: form.id,
                name,
                shortName,
                sport: form.sport,
                league: form.league.trim(),
                leagueShortName: form.leagueShortName.trim().toUpperCase(),
                country: form.country.trim(),
                city: form.city.trim(),
                state: form.state.trim(),
                foundedYear,
                teamType: form.teamType,
                gender: form.gender,
                logo: form.logo.trim(),
                bannerImage: form.bannerImage.trim(),
                primaryColor: form.primaryColor,
                secondaryColor: form.secondaryColor,
                accentColor: form.accentColor,
                homeVenue: form.homeVenue.trim(),
                venueCapacity: form.venueCapacity
                    ? Number(form.venueCapacity)
                    : 0,
                captain: form.captain.trim(),
                captainId: form.captainId.trim(),
                coach: form.coach.trim(),
                coachExperienceYears: form.coachExperienceYears
                    ? Number(form.coachExperienceYears)
                    : 0,
                assistantCoach: form.assistantCoach.trim(),
                teamManager: form.teamManager.trim(),
                owner: form.owner.trim(),
                website: form.website.trim(),
                email,
                phone: form.phone.trim(),
                description: form.description.trim(),
                bio: form.bio.trim(),

                // Team signup must not self-approve verification.
                verified: false,
                status: "Active",
                established: foundedYear !== null,

                // Player IDs entered by the team, if applicable.
                players: playerIds,
                squadSize: playerIds.length,
                foreignPlayers: Number(form.foreignPlayers || 0),
                localPlayers: Number(form.localPlayers || 0),

                // These are system-managed fields, not signup inputs.
                rating: 0,
                teamValue: 0,
                stats: {
                    matches: 0,
                    wins: 0,
                    losses: 0,
                    draws: 0,
                    noResults: 0,
                    winRate: 0,
                    points: 0,
                    leaguePosition: null,
                    championships: 0,
                    runnerUpFinishes: 0,
                    currentStreak: 0,
                    highestScore: 0,
                    lowestScore: 0,
                },
                recentForm: [],
                teamStats: {
                    totalRuns: 0,
                    averageRunsPerMatch: 0,
                    totalWickets: 0,
                    averageWicketsPerMatch: 0,
                    highestPartnership: 0,
                    bestBowlingFigures: "",
                    averageStrikeRate: 0,
                    averageEconomyRate: 0,
                },
                homeRecord: {
                    matches: 0,
                    wins: 0,
                    losses: 0,
                    winRate: 0,
                },
                awayRecord: {
                    matches: 0,
                    wins: 0,
                    losses: 0,
                    noResults: 0,
                    winRate: 0,
                },
                achievements: [],
                facilities: [],
                sponsors: [],
                socialMedia: {
                    instagram: form.instagram.trim(),
                    twitter: form.twitter.trim(),
                    facebook: form.facebook.trim(),
                    youtube: form.youtube.trim(),
                },
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            };

            localStorage.setItem(
                "teams",
                JSON.stringify([...teams, team])
            );

            localStorage.setItem("user",JSON.stringify(team));
            localStorage.setItem("LoggedInUser","teamdash");

            setCreatedTeam(team);
            setSuccess("Team profile created and saved successfully.");
            setForm(initialForm);

            navigate(`/teamdash/${team.id}`)

        
        } catch (err) {
            console.error("Team signup failed:", err);
            setError(
                "Unable to save the team. Check browser storage and try again."
            );
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <div className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
                {/* Page heading */}
                <div className="mb-8">
                    <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700">
                        <FiShield />
                        PLAYNEXA TEAM REGISTRATION
                    </div>

                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        Create your team profile
                    </h1>

                    <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
                        Register your team on PlayNexa. Add your team details, location,
                        representatives, and branding to create your public profile.
                    </p>
                </div>

                {/* Verification note */}
                <div className="mb-6 flex items-start gap-3 rounded-2xl border border-blue-200 bg-blue-50 p-4">
                    <FiShield className="mt-0.5 shrink-0 text-blue-600" size={20} />
                    <div>
                        <p className="text-sm font-semibold text-blue-900">
                            Verification is handled separately
                        </p>
                        <p className="mt-1 text-sm leading-5 text-blue-800">
                            Your team will be created as unverified. A platform administrator
                            can review the application and set verified to true after checking
                            the submitted information.
                        </p>
                    </div>
                </div>

                {error && (
                    <div
                        role="alert"
                        className="mb-5 flex items-start gap-2 rounded-xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-700"
                    >
                        <FiX className="mt-0.5 shrink-0" />
                        {error}
                    </div>
                )}

                {success && createdTeam && (
                    <div
                        role="status"
                        className="mb-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-5"
                    >
                        <div className="flex items-center gap-2 font-semibold text-emerald-800">
                            <FiCheckCircle size={20} />
                            {success}
                        </div>
                        <p className="mt-2 text-sm text-emerald-800">
                            Team ID: <strong>{createdTeam.id}</strong>
                        </p>
                        <p className="mt-1 text-sm text-emerald-800">
                            Verification: <strong>Pending</strong>
                        </p>
                        <button
                            type="button"
                            onClick={() => {
                                setSuccess("");
                                setCreatedTeam(null);
                            }}
                            className="mt-3 text-sm font-semibold text-emerald-800 underline"
                        >
                            Register another team
                        </button>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* 1. Basic details */}
                    <Section
                        title="Basic team information"
                        subtitle="Your team's identity and competition details"
                        icon={FiShield}
                    >

                        <Field
                            label="Team ID"
                            name="id"
                            value={form.id}
                            placeholder="e.g. TEAM001"
                            required
                        />
                        <Field
                            label="Team name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="e.g. Mumbai Strikers"
                            required
                        />

                        <Field
                            label="Short name"
                            name="shortName"
                            value={form.shortName}
                            onChange={handleChange}
                            placeholder="e.g. MS"
                            required
                        />

                        <SelectField
                            label="Sport"
                            name="sport"
                            value={form.sport}
                            onChange={handleChange}
                            options={[
                                "Cricket",
                                "Football",
                                "Badminton",
                                "Tennis",
                                "Basketball",
                                "Volleyball",
                                "Hockey",
                                "Other",
                            ]}
                            required
                        />

                        <SelectField
                            label="Team type"
                            name="teamType"
                            value={form.teamType}
                            onChange={handleChange}
                            options={[
                                "Amateur",
                                "Professional",
                                "Semi-Professional",
                                "School",
                                "College",
                                "Academy",
                                "Community",
                            ]}
                            required
                        />

                        <SelectField
                            label="Team gender"
                            name="gender"
                            value={form.gender}
                            onChange={handleChange}
                            options={["Men", "Women", "Mixed", "Open"]}
                            required
                        />

                        <Field
                            label="Founded year"
                            name="foundedYear"
                            type="number"
                            value={form.foundedYear}
                            onChange={handleChange}
                            placeholder="e.g. 2012"
                            min="1800"
                            max={new Date().getFullYear()}
                        />

                        <Field
                            label="League name"
                            name="league"
                            value={form.league}
                            onChange={handleChange}
                            placeholder="e.g. Indian Premier League"
                        />

                        <Field
                            label="League short name"
                            name="leagueShortName"
                            value={form.leagueShortName}
                            onChange={handleChange}
                            placeholder="e.g. IPL"
                        />
                    </Section>

                    {/* 2. Location */}
                    <Section
                        title="Location and home venue"
                        subtitle="Where your team is based and plays"
                        icon={FiMapPin}
                    >
                        <Field
                            label="Country"
                            name="country"
                            value={form.country}
                            onChange={handleChange}
                            placeholder="India"
                            required
                        />

                        <Field
                            label="State"
                            name="state"
                            value={form.state}
                            onChange={handleChange}
                            placeholder="e.g. Maharashtra"
                        />

                        <Field
                            label="City"
                            name="city"
                            value={form.city}
                            onChange={handleChange}
                            placeholder="e.g. Mumbai"
                            required
                        />

                        <Field
                            label="Home venue"
                            name="homeVenue"
                            value={form.homeVenue}
                            onChange={handleChange}
                            placeholder="Stadium or sports ground"
                        />

                        <Field
                            label="Venue capacity"
                            name="venueCapacity"
                            type="number"
                            value={form.venueCapacity}
                            onChange={handleChange}
                            placeholder="e.g. 45000"
                            min="0"
                        />
                    </Section>

                    {/* 3. Representatives */}
                    <Section
                        title="Team representatives"
                        subtitle="People responsible for managing the team"
                        icon={FiUsers}
                    >
                        <Field
                            label="Team owner"
                            name="owner"
                            value={form.owner}
                            onChange={handleChange}
                            placeholder="Owner or organization name"
                        />

                        <Field
                            label="Captain name"
                            name="captain"
                            value={form.captain}
                            onChange={handleChange}
                            placeholder="e.g. Arjun Mehta"
                        />

                        <Field
                            label="Captain player ID"
                            name="captainId"
                            value={form.captainId}
                            onChange={handleChange}
                            placeholder="e.g. PLY001"
                            hint="Use an existing player ID if the captain is registered."
                        />

                        <Field
                            label="Head coach"
                            name="coach"
                            value={form.coach}
                            onChange={handleChange}
                            placeholder="Head coach name"
                        />

                        <Field
                            label="Coach experience (years)"
                            name="coachExperienceYears"
                            type="number"
                            value={form.coachExperienceYears}
                            onChange={handleChange}
                            placeholder="e.g. 14"
                            min="0"
                        />

                        <Field
                            label="Assistant coach"
                            name="assistantCoach"
                            value={form.assistantCoach}
                            onChange={handleChange}
                            placeholder="Assistant coach name"
                        />

                        <Field
                            label="Team manager"
                            name="teamManager"
                            value={form.teamManager}
                            onChange={handleChange}
                            placeholder="Manager name"
                        />
                    </Section>

                    {/* 4. Contact */}
                    <Section
                        title="Contact information"
                        subtitle="How the team can be contacted"
                        icon={FiCheckCircle}
                    >
                        <Field
                            label="Contact email"
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="team@example.com"
                            required
                        />

                        <Field
                            label="Phone number"
                            name="phone"
                            type="tel"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="+91 90000 00000"
                        />

                        <Field
                            label="Official website"
                            name="website"
                            type="url"
                            value={form.website}
                            onChange={handleChange}
                            placeholder="https://example.com"
                        />
                    </Section>

                    {/* 5. Branding */}
                    <Section
                        title="Team branding"
                        subtitle="Logo, cover image, and brand colors"
                        icon={FiImage}
                    >
                        <Field
                            label="Logo image URL"
                            name="logo"
                            type="url"
                            value={form.logo}
                            onChange={handleChange}
                            placeholder="https://example.com/logo.png"
                        />

                        <Field
                            label="Banner image URL"
                            name="bannerImage"
                            type="url"
                            value={form.bannerImage}
                            onChange={handleChange}
                            placeholder="https://example.com/banner.jpg"
                        />

                        <div>
                            <label className={labelClass}>Primary color</label>
                            <div className="flex items-center gap-3">
                                <input
                                    type="color"
                                    name="primaryColor"
                                    value={form.primaryColor}
                                    onChange={handleChange}
                                    className="h-11 w-14 cursor-pointer rounded-lg border border-slate-200 bg-white p-1"
                                />
                                <span className="text-sm text-slate-500">
                                    {form.primaryColor}
                                </span>
                            </div>
                        </div>

                        <div>
                            <label className={labelClass}>Secondary color</label>
                            <div className="flex items-center gap-3">
                                <input
                                    type="color"
                                    name="secondaryColor"
                                    value={form.secondaryColor}
                                    onChange={handleChange}
                                    className="h-11 w-14 cursor-pointer rounded-lg border border-slate-200 bg-white p-1"
                                />
                                <span className="text-sm text-slate-500">
                                    {form.secondaryColor}
                                </span>
                            </div>
                        </div>

                        <div>
                            <label className={labelClass}>Accent color</label>
                            <div className="flex items-center gap-3">
                                <input
                                    type="color"
                                    name="accentColor"
                                    value={form.accentColor}
                                    onChange={handleChange}
                                    className="h-11 w-14 cursor-pointer rounded-lg border border-slate-200 bg-white p-1"
                                />
                                <span className="text-sm text-slate-500">
                                    {form.accentColor}
                                </span>
                            </div>
                        </div>
                    </Section>

                    {/* 6. Squad */}
                    <Section
                        title="Squad information"
                        subtitle="Optional player IDs and squad composition"
                        icon={FiUsers}
                    >
                        <div className="sm:col-span-2">
                            <Field
                                label="Player IDs"
                                name="players"
                                value={form.players}
                                onChange={handleChange}
                                placeholder="PLY001, PLY002, PLY013"
                                hint="Enter existing player IDs separated by commas. These IDs are not validated against key-players in this form."
                            />
                        </div>

                        <Field
                            label="Local players"
                            name="localPlayers"
                            type="number"
                            value={form.localPlayers}
                            onChange={handleChange}
                            min="0"
                            placeholder="e.g. 9"
                        />

                        <Field
                            label="Foreign players"
                            name="foreignPlayers"
                            type="number"
                            value={form.foreignPlayers}
                            onChange={handleChange}
                            min="0"
                            placeholder="e.g. 2"
                        />
                    </Section>

                    {/* 7. Public profile */}
                    <Section
                        title="Team profile and social media"
                        subtitle="Information displayed on your public team page"
                        icon={FiAward}
                    >
                        <div className="sm:col-span-2">
                            <TextAreaField
                                label="Short description"
                                name="description"
                                value={form.description}
                                onChange={handleChange}
                                placeholder="Describe your team's style, strengths, and identity..."
                                rows={3}
                            />
                        </div>

                        <div className="sm:col-span-2">
                            <TextAreaField
                                label="Team biography"
                                name="bio"
                                value={form.bio}
                                onChange={handleChange}
                                placeholder="Tell fans about your team's history and goals..."
                                rows={4}
                            />
                        </div>

                        <Field
                            label="Instagram username"
                            name="instagram"
                            value={form.instagram}
                            onChange={handleChange}
                            placeholder="@yourteam"
                        />

                        <Field
                            label="X / Twitter username"
                            name="twitter"
                            value={form.twitter}
                            onChange={handleChange}
                            placeholder="@yourteam"
                        />

                        <Field
                            label="Facebook page"
                            name="facebook"
                            value={form.facebook}
                            onChange={handleChange}
                            placeholder="Your team page name or URL"
                        />

                        <Field
                            label="YouTube channel"
                            name="youtube"
                            value={form.youtube}
                            onChange={handleChange}
                            placeholder="Your official channel"
                        />
                    </Section>

                    {/* Submit */}
                    <div className="flex flex-col-reverse gap-3 rounded-2xl border border-slate-200 bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
                        <p className="max-w-md text-xs leading-5 text-slate-500">
                            By registering, you confirm that the supplied team information is
                            accurate. Your profile will remain unverified until reviewed.
                        </p>

                        <button
                            type="submit"
                            disabled={submitting}
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            <FiCheckCircle size={18} />
                            {submitting ? "Creating profile..." : "Create team profile"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
