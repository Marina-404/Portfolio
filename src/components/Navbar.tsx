import "../App.css";
import cv from "../CVMarinaSaraiva-nn.pdf";

function Navbar() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) element.scroll({behavior: "smooth"});
    }
    return(
        <nav className="navbar">
            <button onClick={() => scrollToSection("about")}>
                Projets
            </button>
            <button onClick={() => scrollToSection("about")}>
                A Propos / Skills
            </button>
            <button onClick={() => scrollToSection("Contact")}>
                Contact
            </button>
            <button className="cv">
                <a href={cv} target="_blank" rel="noopener noreferrer">
                Télécharger le CV
                </a>
            </button>
        </nav>
    );
}

export default Navbar;