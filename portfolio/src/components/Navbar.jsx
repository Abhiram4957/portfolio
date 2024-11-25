/*import React from 'react';
import "./Navbar.css"

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>


const Navbar = () => {
    return (
        <>
        <h1 className="name">Abhiram</h1>
        
        </>
    );
};

export default Navbar;

import React, { useState } from "react";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";


const App = () => {
    const [activeSection, setActiveSection] = useState("home");

    const renderSection = () => {
        switch (activeSection) {
            case "Sk":
                return <Skills />;
            case "about":
                return <About />;
            case "con":
                return <Contact />;
            case "projects":
                return <Projects/>
            default:
                return <Home />;
        }
    };

    return (
        <div>
            <nav style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <button onClick={() => setActiveSection("about")}>About</button>
                <button onClick={() => setActiveSection("con")}>Contact</button>
                <button onClick={() => setActiveSection("Sk")}>Skills</button>
                <button onClick={() => setActiveSection("projects")}>Projects</button>
            </nav>
            <main style={{ padding: "1rem" }}>
                {renderSection()}
            </main>
        </div>
    );
};

export default App;

*/

import React from "react";
import "./Navbar.css"; // Include the styles here

const Header = () => {
  return (
    <header className="header">
      <section className="name">
        <h1>Abhiram</h1>
      </section>
      <div className="nav">
        <a href="#Home" className="nav-item">Home</a>
        <a href="#About" className="nav-item">About</a>
        <a href="#Skills" className="nav-item">Skills</a>
        <a href="#Projects" className="nav-item">Projects</a>
        <a href="#Contact" className="nav-item">Contact</a>
      </div>
    </header>
  );
};

export default Header;
