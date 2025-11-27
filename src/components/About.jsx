import React from "react";

export default function About(){
  return (
    <section id="about" className="container about">
      <h3 className="section-title">About</h3>
      <div className="card">
        <div style={{display:"flex", gap:20, alignItems:"flex-start", flexWrap:"wrap"}}>
          <div className="left" style={{minWidth:220}}>
            <h4 style={{marginBottom:8}}>Vikee Salunkhe</h4>
            <div className="muted">Assistant Python Software Enginner </div>
            <div style={{height:12}} />
            <div className="muted">Location: Pune, India</div>
            <div className="muted">Email: <a href="mailto:vikeesalunkhe2002@gmail.com">vikeesalunkhe2002@gmail.com</a></div>
          </div>

          <div style={{flex:1}}>
            <p>
              I working as Python Developer, automation and testing tools. I have experience with Python, CAN, BMS testing and automation.
              I enjoy learning modern frontend tools like React and connecting them to robust Python backends.
            </p>

            <p className="muted">
              My focus areas: Embedded Systeams, industrial automation, data collection, and building internal tools to improve production.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
