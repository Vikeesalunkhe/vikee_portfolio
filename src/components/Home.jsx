import React from "react";
import profile from "../assets/profile.jpg";

export default function Home(){
  return (
    <section id="home" className="home">
      <div className="container home-inner">
        <div>
          <h1>Hello, I’m <span style={{color:"#0b69ff"}}>Vikee</span></h1>
          <div className="tagline muted">Python Developer • Embedded Systeam Learner</div>
          <p className="muted" style={{maxWidth:680}}>
            I build tools for embedded systems and industrial projects. I like solving hardware-software problems and automating workflows.
            This portfolio highlights my projects, skills and contact details — feel free to reach out!
          </p>

          <div style={{marginTop:18, display:"flex", gap:12}}>
            <a className="btn" href="#projects">See Projects</a>
            <a className="btn" href="#contact" style={{background:"#06b6d4"}}>Contact Me</a>
          </div>
        </div>

        <div style={{display:"flex", justifyContent:"center"}}>
          <div className="profile-photo card">
            <img src={profile} alt="Profile" style={{width:"100%", display:"block"}}/>
          </div>
        </div>
      </div>
    </section>
  );
}
