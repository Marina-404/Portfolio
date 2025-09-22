import "../App.css";
import "../styles/navbar.css";
import cv from "../CV_Marina_Saraiva_.pdf";
import { useState } from "react";
import { CgMenuGridR } from "react-icons/cg";

function Navbar() {
    const [open, setOpen] = useState(false);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
              if (id === "projets") {
                const offset = -150;
                const y = element.getBoundingClientRect().top + window.pageYOffset + offset;
                window.scrollTo({ top: y, behavior: "smooth" });
            } else {
                element.scrollIntoView({ behavior: "smooth" });
            }
            setOpen(false);
        }
    };

    return(
    <>
    {/* mobile */}
    <nav className="navbar mobile">
    <button
        className="burger"
        onClick={() => setOpen(!open)}
        aria-label="Ouvrir ou fermer le menu de navigation"
        aria-expanded={open}
      >
        <CgMenuGridR className="burger-icon"/>
    </button>
    <div className={`mobile-menu ${open ? "open" : ""}`}>
        <button onClick={() => scrollToSection("projets")} aria-label="Aller à la section Projets">
            Projets
        </button>
        <button onClick={() => scrollToSection("about")} aria-label="Aller à la section à propos / skills" >
            A Propos / Skills
        </button>
        <button onClick={() => scrollToSection("contact")} aria-label="Aller à la section Contact">
            Contact
        </button>
    </div>
    <a href={cv} target="_blank" rel="noopener noreferrer" className="cv">
        Télécharger le CV
    </a>
    </nav>
    {/* desktop */}
    <div className="background-fixed">
        <nav className="navbar">
            <button onClick={() => scrollToSection("projets")} aria-label="Aller à la section Projets" >
                Projets
            </button>
            <button onClick={() => scrollToSection("about")} aria-label="Aller à la section à propos / skills" >
                A Propos / Skills
            </button>
            <button onClick={() => scrollToSection("contact")} aria-label="Aller à la section Contact" >
                Contact
            </button>
            <a href={cv} target="_blank" rel="noopener noreferrer" className="cv">
                Télécharger le CV
            </a>
        </nav>
    </div>
    </>
    );
}

export default Navbar;