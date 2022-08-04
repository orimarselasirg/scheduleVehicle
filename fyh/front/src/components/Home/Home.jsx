import React from "react";
import CardsTimer from "../CardsTimer/CardsTimer";
import Nav from "../Nav/Nav"
import Register from '../Register/Register'
import Homepage from "../Homepage/Homepage";
import { NavLink, Routes, Route } from "react-router-dom";

function Home(props) {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/home' element={<Homepage/>} exact/> 
        <Route path='/register' element={<Register/>}/>
        <Route path='/pits' element={<CardsTimer/>}/> 
      </Routes>
    </div>
  );
}

export default Home;
