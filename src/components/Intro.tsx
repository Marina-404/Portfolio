import "../App.css";
import "../styles/intro.css";
import photo from "../ms-removebg-preview-removebg-preview.png";
import github from "../images/github-white-icon.svg";
import linkedin from "../images/linkedin-white-icon.svg";

function Intro() {
  
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
          }
      };

    return (
      <>
      <div className="bloc-intro">
        <div>
          <p className="hello">Bonjour, je suis </p>
          <h1 className="hello">Marina Saraiva </h1>
          <h2 className="color-dev">Future Administratrice</h2>
          <h2 className="color-dev">Systèmes, Réseaux & Cloud</h2>
          <p className="description">Curieuse et motivée, je développe mes compétences IT.</p>
          <button className="button-projet" onClick={() => scrollToSection("projets")} aria-label="Aller à la section projets">Voir mes projets</button>
        </div>  
        <div>
          <div className="picture-intro">
            <img src={photo} alt="Photo de profil" fetchPriority="high" 
            srcSet={`
                ${photo}?w=300 300w,
                ${photo}?w=600 600w,
                ${photo}?w=1000 1000w`}
            sizes="(max-width: 600px) 300px, (max-width: 1024px) 600px, 1000px" />
          </div>
            <div className="icons-intro">
              <a href="https://github.com/Marina-404" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="Voir mon profil GitHub" loading="lazy"/>
              </a>
              <a href="https://www.linkedin.com/in/marina-saraiva-9a593b341/" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="Voir mon profil Linkedin" loading="lazy"/>
              </a>
            </div>
        </div>      
      </div>
      <div className="divider"/>
    </>
    );
}

export default Intro;