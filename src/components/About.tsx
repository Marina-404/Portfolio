import "../../src/styles/about.css";
import html from "../images/html5.svg";
import css from "../images/css3.svg";
import express from "../images/express.svg";
import git from "../images/git.svg";
import github from "../images/github.svg";
import javascript from "../images/javascript.svg";
import mysql from "../images/mysql.svg";
import node from "../images/nodedotjs.svg";
import postman from "../images/postman.svg";
import react from "../images/react.svg";
import typescript from "../images/typescript.svg";
function About() {
    
    return(
      <>
      <section id="about" aria-labelledby="about-title">
        <div className="about-section">
          <div className="about-conteneur">
            <h2 className="about-title">
              A propos de moi
            </h2>
            <p className="about-description">
              Actuellement en fin de formation en développement web, je me reconvertis dans un domaine qui m’inspire profondément.
              J’ai découvert un réel attrait pour le design, la conception d’interfaces et la logique de développement.
              J’aime structurer, coder, corriger des bugs et donner vie à des maquettes.
              Curieuse et impliquée, je me sens à l’aise côté front-end, tout en explorant aussi les aspects back-end.
              J’ai réalisé plusieurs projets personnels et collaboratifs, dont un projet plus complet en cours de finalisation.
              Je suis aujourd’hui à la recherche d’opportunités pour continuer à apprendre, progresser et contribuer à des projets concrets.
            </p>
          </div>
            <div className="about-skills">
              <h2 className="skills">
                Skills
              </h2>
              <ul className="skills-icons">
                <li><img src={html} alt="logo HTML5" loading="lazy" /></li>
                <li><img src={css} alt="Logo CSS3" loading="lazy" /></li>
                <li><img src={javascript} alt="Logo JavaScript" loading="lazy" /></li>
                <li><img src={react} alt="Logo React" loading="lazy" /></li>
                <li><img src={express} alt="Logo Express" loading="lazy" /></li>
                <li><img src={git} alt="Logo Git" loading="lazy" /></li>
                <li><img src={github} alt="Logo GitHub" loading="lazy" /></li>
                <li><img src={postman} alt="Logo Postman" loading="lazy" /></li>
                <li><img src={mysql} alt="Logo MySQL" loading="lazy" /></li>
                <li><img src={node} alt="Logo Node.js" loading="lazy" /></li>
                <li><img src={typescript} alt="Logo TypeScript" loading="lazy" /></li>
              </ul>
          </div>
        </div>
        <div className="divid"/>
      </section>
    </>
    );
}

export default About;