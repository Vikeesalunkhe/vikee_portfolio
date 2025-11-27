import React from "react";

export default function Footer(){
  return (
    <footer>
      <div className="container">
        <div>© {new Date().getFullYear()} Vikee Salunkhe • Built with React</div>
      </div>
    </footer>
  );
}
