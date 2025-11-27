import React from "react";

const skillList = [
  "Python", "PyQt5", "C / Embedded C", "HTML & CSS", "JavaScript",
  "Flask", "SQL Server / pyodbc", "Git", "CAN Protocol", "MATLAB"
];

export default function Skills(){
  return (
    <section id="skills" className="container">
      <h3 className="section-title">Skills</h3>
      <div className="card">
        <div>
          {skillList.map(s => (
            <span key={s} className="skill-badge">{s}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
