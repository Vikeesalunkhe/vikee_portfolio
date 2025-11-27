import React from "react";
import profile from "../assets/profile.jpg";

export default function Navbar(){
  return (
    <header className="navbar">
      <div className="nav-inner">
        <div>
          <div className="brand">Vikee Salunkhe</div>
          <div className="sub-brand">Associate Software Enginner.</div>
        </div>

        <nav>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
