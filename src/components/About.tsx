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
import cisco from "../images/Cisco_logo_blue_2016.svg.png";
import azure from "../images/Microsoft_Azure_Logo.svg.png";

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
             Après avoir commencé dans le développement web, j’ai découvert que ce qui m’intéressait vraiment, 
             c’était comprendre et gérer les systèmes et réseaux qui font tourner les applications. 
             Curieuse et motivée, j’explore aujourd’hui Azure, TCP/IP et Cisco Packet Tracer. 
             J’aime apprendre comment architecturer et automatiser des environnements IT.
            </p>
          </div>
            <div className="about-skills">
              <h2 className="skills">
                Skills
              </h2>
              <ul className="skills-icons">
                <li><img src={azure} alt="logo Microsoft Azure" loading="lazy" /></li>
                <li><img src={cisco} alt="logo Cisco Packet Tracer" loading="lazy" /></li>
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