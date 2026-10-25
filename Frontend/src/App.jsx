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

let players=localStorage.getItem('players')
if(!players){
  localStorage.setItem('players',JSON.stringify(players))
}
let teams=localStorage.getItem('teams')
if(!teams){
  localStorage.setItem('teams',JSON.stringify(teams))
}
  return(
    <>
    <ScrollToTop/>
    <Navbar/>
    <Outlet/>
    
    </>
  );
}
export default App;