import React from "react";

const EXPS = [
  {
    id:1,
    role: "Assistant Python Software Engineer",
    company: "Cybernetik Technologies Pvt Ltd",
    period: "06/2024 - Present",
    details: "Worked on Python, Flask, PyQt5, MATLAB/Simulink."
  },
  {
    id:2,
    role: "Robotics Intern",
    company: "Celestial Institute of Technology pune",
    period: "2023",
    details: "Design and Develop Autonoumous Mobile Robot using ROS and Jetson Nano."
  }
];

export default function Experience(){
  return (
    <section id="experience" className="container">
      <h3 className="section-title">Experience</h3>
      <div className="card">
        {EXPS.map(e => (
          <div key={e.id} className="exp-item">
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"baseline"}}>
              <div>
                <div style={{fontWeight:700}}>{e.role}</div>
                <div className="muted">{e.company}</div>
              </div>
              <div className="muted">{e.period}</div>
            </div>
            <p className="muted" style={{marginTop:6}}>{e.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
