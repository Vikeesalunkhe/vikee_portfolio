import React, { useState } from "react";

export default function Contact(){
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");

  // update this with your real phone number in international format (no plus)
  const whatsNumber = "918767682984"; // example: 91 country + phone

  const whatsappLink = `https://wa.me/${whatsNumber}?text=${encodeURIComponent(
    "Hello Vikee! I saw your portfolio and would like to connect."
  )}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    // For a static portfolio we won't send to backend — show a message
    alert("Thanks! Message captured locally. You can wire this to an email/API later.");
    setName("");
    setMsg("");
  };

  return (
    <section id="contact" className="container">
      <h3 className="section-title">Contact</h3>

      <div className="contact-grid">
        <div className="card contact-card">
          <p className="muted">Want to discuss a project or job? Send a message or contact via WhatsApp.</p>

          <form onSubmit={handleSubmit} style={{marginTop:12, display:"flex", flexDirection:"column", gap:10}}>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" style={{padding:10, borderRadius:8, border:"1px solid #e6eefb"}} required />
            <textarea value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Message" rows="4" style={{padding:10, borderRadius:8, border:"1px solid #e6eefb"}} required />
            <div style={{display:"flex", gap:10, alignItems:"center"}}>
              <button className="btn" type="submit">Send (demo)</button>
              <a className="btn" href={`mailto:vikeesalunkhe2002@gmail.com`} style={{background:"#10b981"}}>Email</a>
              <a className="btn" href={whatsappLink} target="_blank" rel="noreferrer" style={{background:"#25D366"}}>WhatsApp</a>
            </div>
          </form>

          <div style={{marginTop:12}}>
            <div className="muted">Social</div>
            <div className="socials" style={{marginTop:8}}>
              <a href="https://www.linkedin.com/in/vikee-salunkhe-071245240/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://github.com/Vikeesalunkhe" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://www.instagram.com/vikee_salunkhe_/" target="_blank" rel="noreferrer">Instagram</a>
            </div>
          </div>
        </div>

        <div>
          <div className="card">
            <h4>Contact details</h4>
            <p className="muted">Email: <a href="mailto:vikeesalunkhe2002@gmail.com">vikeesalunkhe2002@gmail.com</a></p>
            <p class="muted">Phone: <a href="tel:+918767682984">+91 8767682984</a></p>
            <p className="muted">Location: Pune, India</p>

            <div style={{marginTop:12}}>
              <div className="muted">Quick message</div>
              <a className="btn" href={whatsappLink} target="_blank" rel="noreferrer" style={{marginTop:8, display:"inline-block", background:"#25D366"}}>Message on WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
