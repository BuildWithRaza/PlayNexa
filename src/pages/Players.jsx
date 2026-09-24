import React from 'react'
import { FaStar, FaLocationDot, FaArrowRight } from "react-icons/fa6";

const Player = () => {

    const players=[
    {
      "id": "PLY001",
      "name": "Arjun Mehta",
      "firstName": "Arjun",
      "lastName": "Mehta",
      "age": 24,
      "gender": "Male",
      "sport": "Cricket",
      "position": "Batsman",
      "team": "Mumbai Strikers",
      "jerseyNumber": 18,
      "country": "India",
      "city": "Mumbai",
      "profileImage": "https://example.com/images/players/ply001.jpg",
      "bio": "Right-handed top-order batsman known for aggressive stroke play.",
      "rating": 4.7,
      "experienceYears": 7,
      "stats": {
        "matches": 86,
        "wins": 54,
        "runs": 3240,
        "average": 42.8,
        "strikeRate": 138.4
      },
      "skills": {
        "speed": 78,
        "strength": 82,
        "stamina": 88,
        "technique": 91,
        "teamwork": 87
      },
      "availability": "Available",
      "verified": true
    },
    {
      "id": "PLY002",
      "name": "Riya Sharma",
      "firstName": "Riya",
      "lastName": "Sharma",
      "age": 22,
      "gender": "Female",
      "sport": "Badminton",
      "position": "Singles Player",
      "team": "Delhi Smashers",
      "jerseyNumber": 7,
      "country": "India",
      "city": "Delhi",
      "profileImage": "https://example.com/images/players/ply002.jpg",
      "bio": "Fast and technically strong badminton player specializing in singles.",
      "rating": 4.8,
      "experienceYears": 6,
      "stats": {
        "matches": 74,
        "wins": 58,
        "winRate": 78.4,
        "tournaments": 21,
        "titles": 8
      },
      "skills": {
        "speed": 94,
        "strength": 76,
        "stamina": 91,
        "technique": 93,
        "teamwork": 82
      },
      "availability": "Available",
      "verified": true
    },
    {
      "id": "PLY003",
      "name": "Kabir Singh",
      "firstName": "Kabir",
      "lastName": "Singh",
      "age": 26,
      "gender": "Male",
      "sport": "Football",
      "position": "Midfielder",
      "team": "Bangalore United",
      "jerseyNumber": 10,
      "country": "India",
      "city": "Bangalore",
      "profileImage": "https://example.com/images/players/ply003.jpg",
      "bio": "Creative midfielder with strong passing and playmaking abilities.",
      "rating": 4.6,
      "experienceYears": 9,
      "stats": {
        "matches": 112,
        "wins": 68,
        "goals": 31,
        "assists": 47,
        "passesCompleted": 2840
      },
      "skills": {
        "speed": 86,
        "strength": 84,
        "stamina": 92,
        "technique": 89,
        "teamwork": 95
      },
      "availability": "Busy",
      "verified": true
    },
    {
      "id": "PLY004",
      "name": "Neha Kapoor",
      "firstName": "Neha",
      "lastName": "Kapoor",
      "age": 25,
      "gender": "Female",
      "sport": "Tennis",
      "position": "Singles",
      "team": "Chennai Tennis Club",
      "jerseyNumber": null,
      "country": "India",
      "city": "Chennai",
      "profileImage": "https://example.com/images/players/ply004.jpg",
      "bio": "Competitive tennis player with a strong baseline game.",
      "rating": 4.5,
      "experienceYears": 8,
      "stats": {
        "matches": 96,
        "wins": 64,
        "winRate": 66.7,
        "aces": 312,
        "titles": 5
      },
      "skills": {
        "speed": 89,
        "strength": 80,
        "stamina": 90,
        "technique": 88,
        "teamwork": 75
      },
      "availability": "Available",
      "verified": true
    },
    {
      "id": "PLY005",
      "name": "Dev Patel",
      "firstName": "Dev",
      "lastName": "Patel",
      "age": 28,
      "gender": "Male",
      "sport": "Basketball",
      "position": "Point Guard",
      "team": "Ahmedabad Hoopers",
      "jerseyNumber": 3,
      "country": "India",
      "city": "Ahmedabad",
      "profileImage": "https://example.com/images/players/ply005.jpg",
      "bio": "Quick point guard with excellent court vision and ball handling.",
      "rating": 4.4,
      "experienceYears": 10,
      "stats": {
        "matches": 143,
        "wins": 91,
        "pointsPerGame": 18.7,
        "assistsPerGame": 7.4,
        "reboundsPerGame": 4.2
      },
      "skills": {
        "speed": 92,
        "strength": 79,
        "stamina": 89,
        "technique": 91,
        "teamwork": 94
      },
      "availability": "Available",
      "verified": true
    },
    {
      "id": "PLY006",
      "name": "Ananya Rao",
      "firstName": "Ananya",
      "lastName": "Rao",
      "age": 21,
      "gender": "Female",
      "sport": "Volleyball",
      "position": "Outside Hitter",
      "team": "Hyderabad Spikers",
      "jerseyNumber": 12,
      "country": "India",
      "city": "Hyderabad",
      "profileImage": "https://example.com/images/players/ply006.jpg",
      "bio": "Energetic volleyball player with powerful attacking ability.",
      "rating": 4.7,
      "experienceYears": 5,
      "stats": {
        "matches": 62,
        "wins": 44,
        "points": 684,
        "successfulSpikes": 421,
        "blocks": 97
      },
      "skills": {
        "speed": 87,
        "strength": 90,
        "stamina": 93,
        "technique": 86,
        "teamwork": 92
      },
      "availability": "Available",
      "verified": true
    },
    {
      "id": "PLY007",
      "name": "Rahul Verma",
      "firstName": "Rahul",
      "lastName": "Verma",
      "age": 27,
      "gender": "Male",
      "sport": "Cricket",
      "position": "Bowler",
      "team": "Pune Warriors",
      "jerseyNumber": 27,
      "country": "India",
      "city": "Pune",
      "profileImage": "https://example.com/images/players/ply007.jpg",
      "bio": "Right-arm fast bowler known for pace and accuracy.",
      "rating": 4.3,
      "experienceYears": 9,
      "stats": {
        "matches": 103,
        "wins": 61,
        "wickets": 174,
        "economy": 6.8,
        "bestFigures": "5/27"
      },
      "skills": {
        "speed": 94,
        "strength": 88,
        "stamina": 91,
        "technique": 90,
        "teamwork": 86
      },
      "availability": "Available",
      "verified": false
    },
    {
      "id": "PLY008",
      "name": "Sana Khan",
      "firstName": "Sana",
      "lastName": "Khan",
      "age": 23,
      "gender": "Female",
      "sport": "Football",
      "position": "Forward",
      "team": "Kolkata Queens",
      "jerseyNumber": 9,
      "country": "India",
      "city": "Kolkata",
      "profileImage": "https://example.com/images/players/ply008.jpg",
      "bio": "Fast attacking forward with strong finishing ability.",
      "rating": 4.6,
      "experienceYears": 6,
      "stats": {
        "matches": 81,
        "wins": 52,
        "goals": 46,
        "assists": 29,
        "shotsOnTarget": 138
      },
      "skills": {
        "speed": 96,
        "strength": 81,
        "stamina": 88,
        "technique": 90,
        "teamwork": 89
      },
      "availability": "Busy",
      "verified": true
    },
    {
      "id": "PLY009",
      "name": "Vikram Joshi",
      "firstName": "Vikram",
      "lastName": "Joshi",
      "age": 30,
      "gender": "Male",
      "sport": "Athletics",
      "position": "Sprinter",
      "team": "Jaipur Track Club",
      "jerseyNumber": 5,
      "country": "India",
      "city": "Jaipur",
      "profileImage": "https://example.com/images/players/ply009.jpg",
      "bio": "Competitive sprinter specializing in short-distance events.",
      "rating": 4.5,
      "experienceYears": 12,
      "stats": {
        "matches": 57,
        "wins": 38,
        "best100m": "10.72s",
        "best200m": "21.64s",
        "medals": 24
      },
      "skills": {
        "speed": 99,
        "strength": 86,
        "stamina": 84,
        "technique": 93,
        "teamwork": 72
      },
      "availability": "Available",
      "verified": true
    },
    {
      "id": "PLY010",
      "name": "Ishita Desai",
      "firstName": "Ishita",
      "lastName": "Desai",
      "age": 20,
      "gender": "Female",
      "sport": "Swimming",
      "position": "Freestyle",
      "team": "Goa Aquatics",
      "jerseyNumber": 4,
      "country": "India",
      "city": "Goa",
      "profileImage": "https://example.com/images/players/ply010.jpg",
      "bio": "Young competitive swimmer specializing in freestyle events.",
      "rating": 4.4,
      "experienceYears": 4,
      "stats": {
        "matches": 42,
        "wins": 29,
        "goldMedals": 11,
        "best50m": "27.82s",
        "best100m": "1:00.42"
      },
      "skills": {
        "speed": 95,
        "strength": 77,
        "stamina": 94,
        "technique": 91,
        "teamwork": 80
      },
      "availability": "Available",
      "verified": true
    }
 ]

 const sportStyles = {
    Football: {
      badge: "border-blue-200 bg-blue-50 text-blue-600",
      dot: "bg-blue-500",
    },
    Cricket: {
      badge: "border-green-200 bg-green-50 text-green-600",
      dot: "bg-green-500",
    },
    Basketball: {
      badge: "border-orange-200 bg-orange-50 text-orange-600",
      dot: "bg-orange-500",
    },
    Tennis: {
      badge: "border-purple-200 bg-purple-50 text-purple-600",
      dot: "bg-purple-500",
    },
  };

  const handleClick=(e)=>{
    console.log(e)
  }
  return (
   <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-14">
         <div className="mx-auto max-w-7xl px-5 lg:px-8">
   
           {/* Header */}
           <div className="flex items-end justify-between border-b border-slate-100 pb-6">
             <div>
               <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                 Community
               </p>
   
               <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900">
                 Featured Players
               </h2>
   
               <p className="mt-2 text-sm text-slate-500">
                 Meet players from different sports and communities.
               </p>
             </div>
   
             
           </div>
   
           {/* Players */}
           <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
   
             {players.map((player) => {
               const sport = sportStyles[player.sport] || {
                 badge: "border-slate-200 bg-slate-50 text-slate-600",
                 dot: "bg-slate-500",
               };
   
               return (
                 <div
                   key={player.name}
                   className="
                     group
                     rounded-xl
                     border border-slate-200
                     bg-white
                     p-4
                     transition-all duration-200
                     hover:-translate-y-1
                     hover:border-blue-200
                     hover:shadow-md
                     hover:shadow-blue-100/40
                   "
                 >
   
                   {/* Player Main Info */}
                   <div className="flex items-center gap-4">
   
                     {/* Photo */}
                     <div
                       className="
                         shrink-0
                         rounded-full
                         border-2 border-blue-100
                         bg-blue-50
                         p-1
                         transition-transform duration-300
                         group-hover:scale-105
                       "
                     >
                       <img
                         src={player.profileImage}
                         alt={player.name}
                         className="
                           h-20 w-20
                           rounded-full
                           object-cover
                         "
                       />
                     </div>
   
                     {/* Details */}
                     <div className="min-w-0 flex-1">
   
                       {/* Name */}
                       <h3 className="truncate text-base font-bold text-slate-900">
                         {player.name}
                       </h3>
   
                       {/* Position */}
                       <p className="mt-1 text-xs font-medium text-slate-500">
                         {player.position}
                       </p>
   
                       {/* Sport Badge */}
                       <div className="mt-2">
                         <span
                           className={`
                             inline-flex items-center gap-1.5
                             rounded-md
                             border
                             px-2 py-1
                             text-[10px]
                             font-bold
                             uppercase
                             tracking-wide
                             ${sport.badge}
                           `}
                         >
                           <span
                             className={`h-1.5 w-1.5 rounded-full ${sport.dot}`}
                           />
   
                           {player.sport}
                         </span>
                       </div>
   
                       {/* Rating + Location */}
                       <div className="mt-2 flex items-center gap-3">
   
                         <div className="flex items-center gap-1">
                           <FaStar className="text-[10px] text-amber-500" />
   
                           <span className="text-xs font-bold text-slate-600">
                             {player.rating}
                           </span>
                         </div>
   
                         <div className="flex items-center gap-1 text-xs text-slate-400">
                           <FaLocationDot className="text-[10px] text-blue-500" />
                           {player.city}
                         </div>
   
                       </div>
   
                     </div>
   
                   </div>
   
                   {/* Divider */}
                   <div className="my-4 border-t border-slate-100" />
   
                   {/* Button */}
                   <button  onClick={()=>{
                    handleClick(player)
                   }}
                     className="
                       w-full
                       rounded-lg
                       border border-blue-200
                       bg-white
                       py-2
                       text-sm font-semibold
                       text-blue-600
                       transition-all duration-200
                       hover:border-blue-600
                       hover:bg-blue-600
                       hover:text-white
                     "
                   >
                     View Profile
                   </button>
   
                 </div>
               );
             })}
   
           </div>
   
           {/* Mobile View All */}
           <div className="mt-6 flex justify-center sm:hidden">
             <button
               className="
                 flex items-center gap-2
                 rounded-lg
                 border border-blue-200
                 px-5 py-2.5
                 text-sm font-semibold
                 text-blue-600
                 transition
                 hover:bg-blue-50
               "
             >
               View All
               <FaArrowRight className="text-xs" />
             </button>
           </div>
   
         </div>
       </section>
  )
}

export default Player
