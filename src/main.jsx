import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Landing from './pages/Landing.jsx'
import Players from './pages/Players.jsx'
import Login from './components/Auth/Login.jsx'
import Register from './components/Auth/Register.jsx'
import Teams from './pages/Teams.jsx'
import Matches from './pages/Matches.jsx'
import Tournaments from './pages/Tournaments.jsx'
import Leaderboard from './pages/Leaderboard.jsx'

const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Landing/>
      },
      {
        path:"/home",
        element:<Landing/>
      },
      {
        path:"/players",
        element:<Players/>
      },
      {
        path:"/teams",
        element:<Teams/>
      },
      {
        path:"/matches",
        element:<Matches/>
      },
      {
        path:"/tournaments",
        element:<Tournaments/>
      },
      {
        path:"/leaderboard",
        element:<Leaderboard/>
      },
      
    ]
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/signup",
    element:<Register/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
