import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Landing from './pages/Landing.jsx'
import Players from './pages/Players.jsx'
import Login from './components/Auth/Login.jsx'
import Register from './components/Auth/Register.jsx'
import Teams from './pages/Teams.jsx'
import Matches from './pages/Matches.jsx'
import Tournaments from './pages/Tournaments.jsx'
import Leaderboard from './pages/Leaderboard.jsx'
import Sports from './pages/Sports.jsx'
import PlayerProfile from './pages/PlayerProfile.jsx'
import TeamDetails from './pages/TeamDetails.jsx'
import PlayerDashboard from './components/Dashboard/PlayerDashboard.jsx'
import TeamDashboard from './components/Dashboard/TeamDashboard.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Landing />
      },
      {
        path: "/home",
        element: <Landing />
      },
      {
        path: "/players",
        element: <Players />
      },
      {
        path: "players/:playerId",
        element: <PlayerProfile />,
      },
      {
        path: "/teams",
        element: <Teams />
      },
      {
        path: "/teams/:teamId",
        element: <TeamDetails />
      },
      {
        path: "/sports",
        element: <Sports />
      },
      {
        path: "/matches",
        element: <Matches />
      },
      {
        path: "/tournaments",
        element: <Tournaments />
      },
      {
        path: "/leaderboard",
        element: <Leaderboard />
      },


    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Register />
  },
  {
    path: "/playerdash/:playerId",
    element: <PlayerDashboard />
  },
  {
    path: "/teamdash/:teamId",
    element: <TeamDashboard />
  },



])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
