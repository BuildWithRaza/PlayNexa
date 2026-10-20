import React from "react";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Landing from "./pages/Landing";
import Player from "./pages/Players";
import Navbar from "./components/Other/Navbar";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./components/Other/ScrollToTop";
import { players, teams } from "./utils/data";
import TeamSignup from "./components/Auth/TeamSignUP";





const App = () => {


// localStorage.setItem('players',JSON.stringify(players))
// localStorage.setItem('teams',JSON.stringify(teams))
  return(
    <>
    <ScrollToTop/>
    <Navbar/>
    <Outlet/>
    
    </>
  );
}
export default App;