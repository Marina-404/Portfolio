import "../styles/projet.css";
import lePetitMacaron from "../images/lepetitmacaron.webp";
import devQuiz from "../images/devquiz.webp";
import lesPetitsBesoinsParisiens from "../images/lespetitsbesoinsparisiens.jpg";
import nextOne from "../images/nextOne.jpg";
import githubLogo from "../images/github-white-icon.svg";

function Projects() {
    const projects = [
        {
            title: "Le Petit Macaron",
            image: lePetitMacaron,
            description: "Site vitrine coloré pour une boutique de macaron",
            langages:"HTML / CSS",
            github:"https://github.com/Marina-404/lepetitmacaron"
        },
        {
            title:"Dev Quiz",
            image: devQuiz,
            description: "Un quiz interactif pour tester ses connaissances web.",
            langages:"HTML / CSS / JavaScript",
            github:"https://github.com/NabilY-5/project-one"
        },
        {
            title:"Les Petits Besoins Parisiens",
            image: lesPetitsBesoinsParisiens,
            description: "Localiser les essentiels à Paris : fontaines, toilettes, commerces, défibrillateurs.",
            langages:"React / TypeScript / CSS",
            github:"https://github.com/wildcodeschool-2025-03/JS-RemoteFR-Vert-ASquad-404-les-petits-besoins-parisiens-P2"
        },
        {
            title:"Next One",
            image: nextOne,
            description: "Site rétro gaming pour promouvoir une boutique.",
            langages:"React / TypeScript / Node.js / Express / MySQL",
            github:"https://github.com/wildcodeschool-2025-03/JS-RemoteFR-Vert-ASquad-pixel-punks-P3"
        },
        {
            title:"D'autres projets à venir ...",
            isPlaceholder: true
        },
    ]
    
    return(
    <div>
        <section id="projets">
            <h3 className="projet">Mes Projets</h3>
            <div className="project-grid">
                {projects.map((project) => (
                    <div className={`project-card ${project.isPlaceholder ? "placeholder-card": ""}`} key={project.title}>
                        {project.isPlaceholder ? (
                            <div className="placeholder-content">
                                <h4 className="project-title">{project.title}</h4>
                            </div>
                        ) : (
                        <>
                        <div className="project-content">
                            {project.image && (
                            <img src={project.image} 
                            alt={`Capture d'écran du projet ${project.title}`} 
                            className="project-image" 
                            loading="lazy"
                            srcSet={`${project.image}?w=300 300w, ${project.image}?w=600 600w, ${project.image}?w=1000 1000w`}
                            sizes="(max-width: 600px) 300px, (max-width: 1024px) 600px, 1000px"
                            />
                            )}
                            <h4 className="project-title">{project.title}</h4>
                            {project.description && (<p className="project-description">{project.description}</p>)}
                        </div>
                        <div className="langages-github">
                            {project.langages && (
                            <p className="project-langages">{project.langages}</p>)}
                            {project.github && (
                            <a href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label={`Voir le code source du projet ${project.title} sur GitHub`}>
                                <img src={githubLogo} alt={`Logo GitHub du projet ${project.title}`} className="logo-github" loading="lazy" />
                            </a>
                        )}
                        </div>
                        </>
                        )}
                    </div>
                    
            ))}
            </div>
        </section> 
        <div className="divid"/>
    </div>
    );
}

export default Projects;