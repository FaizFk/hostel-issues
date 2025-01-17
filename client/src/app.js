import React, { useState } from "react";
import Navbar from "./components/navbar.js";
import Home from "./components/home.js";
import Status from "./components/status.js";
import Complain from "./components/complain.js";
import Help from "./components/help.js";
import Login from "./components/login.js";
import Profile from "./components/profile.js";
import Signup from "./components/signup.js";
import AdminStatus from "./components/adminStatus.js";


import { BrowserRouter,Routes,Route} from "react-router-dom";

function App(){

    
    return <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/status" element = {<Status/>}/>
        <Route path = "/complain" element = {<Complain/>}/>
        <Route path = "/help" element = {<Help/>}/>
        <Route path = "/login" element = {<Login/>}/>
        <Route path = "/signup" element = {<Signup/>}/>
        <Route path = "/profile" element = {<Profile/>}/>
        <Route path = "/adminStatus" element = {<AdminStatus/>}/>
    </Routes>
    </BrowserRouter>

}

export default App;