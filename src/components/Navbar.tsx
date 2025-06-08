import "../App.css";
import "../styles/navbar.css";
import cv from "../CVMarinaSaraiva-nn.pdf";
import { useState } from "react";
import { CgMenuGridR } from "react-icons/cg";

function Navbar() {
    const [open, setOpen] = useState(false);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({behavior: "smooth"});
        setOpen(false);
    };

    return(
    <>
    {/* mobile */}
    <nav className="navbar mobile">
    <button
        className="burger"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <CgMenuGridR className="burger-icon"/>
    </button>
    <div className={`mobile-menu ${open ? "open" : ""}`}>
        <button onClick={() => scrollToSection("projets")}>Projets</button>
        <button onClick={() => scrollToSection("about")}>A Propos / Skills</button>
        <button onClick={() => scrollToSection("contact")}>Contact</button>
    </div>
    <a href={cv} target="_blank" rel="noopener noreferrer" className="cv">
        Télécharger le CV
    </a>
    </nav>
    {/* desktop */}
    <nav className="navbar">
        <button>
            Projets
        </button>
        <button onClick={() => scrollToSection("about")}>
            A Propos / Skills
        </button>
        <button onClick={() => scrollToSection("contact")}>
            Contact
        </button>
        <a href={cv} target="_blank" rel="noopener noreferrer" className="cv">
            Télécharger le CV
        </a>
    </nav>
    </>
    );
}

export default Navbar;