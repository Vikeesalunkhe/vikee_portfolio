import React from "react";

const PROJECTS = [
  {
    id:1,
    title: "BMS Activation & Battery Testing Validation (EOL)",
    desc: "Develop Desktop Based Application using Python PyQt5 for BMS Activation. Uses CAN and Python.",
    link: "#"
  },
  {
    id:2,
    title: "Web Application for PLC Data Monitoring and Control",
    desc: "Python-based web Application to monitor and control PLC data over Modbus TCP.",
    link: "#"
  },
  {
    id:3,
    title: "Soon",
    desc: "Full-stack example: Flask backend (pyodbc) + React frontend.",
    link: "#"
  }
];

export default function Projects(){
  return (
    <section id="projects" className="container">
      <h3 className="section-title">Projects</h3>
      <div className="grid grid-3">
        {PROJECTS.map(p => (
          <div key={p.id} className="card project-item">
            <div className="project-thumb">{p.title}</div>
            <div>
              <div style={{fontWeight:700}}>{p.title}</div>
              <div className="muted" style={{fontSize:14}}>{p.desc}</div>
            </div>
            {/* <div style={{marginTop:10}}>
              <a className="btn" href={p.link} target="_blank" rel="noreferrer">View</a>
            </div> */}
          </div>
        ))}
      </div>
    </section>
  );
}
