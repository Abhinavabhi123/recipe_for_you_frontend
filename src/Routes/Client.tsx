import React from 'react'
import { Routes, Route  } from "react-router-dom";
import Navbar from '../Components/Navbar/Navbar';
import Home from '../Pages/Home';

export default function Client() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} >

        </Route>
      </Routes>
    </div>
  )
}
