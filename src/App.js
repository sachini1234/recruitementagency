import React, { Component }  from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SignoutHome } from './components/SignoutHome';
import { SigninHome } from './components/SigninHome';
import { Signup } from './components/Signup';
import { Login } from "./components/Login";
import { Resetpw } from './components/Resetpw';
import { Footer } from "./components/Footer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
            <Route exact path="/" element={<SignoutHome/>} />
            <Route path="/SigninHome" element={<SigninHome/>} />
            <Route path="/Signup" element={<Signup/>} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/Resetpw" element={<Resetpw/>} />
        </Routes>
        <Footer/> 
      </div>
    </Router>
  );
}

export default App;
