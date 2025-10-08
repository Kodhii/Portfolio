import { useParams, Link } from "react-router-dom";
import data from "../assets/json/cardsData.json";
import type { CardData } from "../assets/data/CardData";
import "./ProjectDetails.scss";

export default function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const project: CardData | undefined = data.find(
    (p: CardData) => p.id === Number(id)
  );

  if (!project) {
    return (
      <div className="projectNotFound">
        <h2>Projet introuvable 😢</h2>
        <Link to="/" className="backButton">
          Retour à l’accueil
        </Link>
      </div>
    );
  }

  const imagePath = project.image;

  return (
    <section className="projectDetails lightTheme">
      <div className="projectHeader">
        <img src={imagePath} alt={project.title} />
        <div className="overlay">
          <h1>{project.title}</h1>
        </div>
      </div>

      <div className="projectContainer">

        {Array.isArray(project.points) && project.points.length > 0 && (
          <div className="pointsSection">
            <h3>{project.pointsTitle}</h3>
            <ul>
              {project.points.map((point: string, index: number) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        )}

        {Array.isArray(project.skills) && project.skills.length > 0 && (
          <div className="skillsSection">
            <h3>{project.skillsTitle}</h3>
            <ul>
              {project.skills.map((skill: string, index: number) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="links">
          <a
            href={project.URL}
            target="_blank"
            rel="noopener noreferrer"
            className="linkButton"
          >
            Voir sur {project.location}
          </a>

          <Link to="/" className="linkButton secondary">
            Retour
          </Link>
        </div>
      </div>
    </section>
  );
}

