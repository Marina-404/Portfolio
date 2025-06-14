import "../App.css";
import "../styles/intro.css";
import photo from "../Marina_Saraiva.png";
import github from "../images/github-white-icon.svg";
import linkedin from "../images/linkedin-white-icon.svg";

function Intro() {

    return(
      <>
      <div className="bloc-intro">
        <div>
          <p className="hello">Bonjour, je suis </p>
          <h1 className="hello">Marina Saraiva </h1>
          <h2 className="color-dev">Développeuse Web.</h2>
          <p className="description">Passionnée par la conception, motivée à apprendre.</p>
          <button className="button-projet">Voir mes projets</button>
        </div>  
        <div>
          <div className="picture-intro">
            <img src={photo} alt="photo profil" />
          </div>
            <div className="icons-intro">
              <a href="https://github.com/Marina-404" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="GitHub" />
              </a>
              <a href="https://www.linkedin.com/in/marina-saraiva-9a593b341/" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="linkedin" />
              </a>
            </div>
        </div>      
      </div>
      <div className="divider"/>
    </>
    );
}

export default Intro;