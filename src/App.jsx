import React from "react";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Landing from "./pages/Landing";
import Player from "./pages/Players";
import Navbar from "./components/Other/Navbar";
import { Outlet } from "react-router-dom";



const App = () => {
  return(
    <>
    <Navbar/>
    <Outlet/>
    
    </>
  );
}
export default App;