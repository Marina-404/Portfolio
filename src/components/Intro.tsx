import "../App.css";
import photo from "../Marina_Saraiva.png";

function Intro() {

    return(
      <>
      <div className="bloc-intro">
        <div>
          <p className="hello">Bonjour, je suis </p>
          <p className="hello">Marina Saraiva </p>
          <p className="color-dev">Développeuse Web.</p>
          <p className="description">Passionnée par la conception, motivée à apprendre.</p>
          <button className="button-projet">Voir mes projets</button>
        </div>  
        <div className="picture-intro">
          <img src={photo} alt="photo profil" />
        </div>
      </div>
      <div className="separateur"/>
    </>
    );
}

export default Intro;