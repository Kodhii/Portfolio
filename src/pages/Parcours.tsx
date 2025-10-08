import { useEffect } from "react";
import "./Parcours.scss";

export default function Parcours() {

    useEffect(() => {
        const elements = document.querySelectorAll(".fade-in-section");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            },
            { threshold: 0.2 }
        );

        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="main">
            <h2>Mon parcours</h2>

            <div className="LBI fade-in-section">
                <span className="img">
                    <img src="./project/LBI.webp" alt="Photo de l'entreprise LBI" />
                </span>

                <div className="text">
                    <p>
                        Ma première expérience professionnelle, et dernière en date, a été au sein de
                        l’entreprise <strong>Les Bronzes d’Industries</strong>, une société de métallurgie
                        regroupant de nombreux métiers (fondeur, tourneur, manutentionnaire, contrôleur, etc.).
                        J’y ai occupé le poste de <strong>technicien d’usinage</strong> sur un tour à commandes
                        numériques, après l’obtention de mon <strong>BAC Pro Technicien d’Usinage</strong> à
                        l’issue de trois années d’apprentissage.
                    </p>
                    <p>
                        Mon travail consistait à mettre en œuvre un tour vertical numérique, de la préparation à
                        la réalisation des pièces destinées à divers équipements de précision (notamment des
                        scanners hospitaliers et aéroportuaires).
                    </p>
                </div>
            </div>

            <div className="OpenClassrooms fade-in-section">
                <span className="img">
                    <img src="./project/OpenClassrooms.png" alt="Logo OpenClassrooms" />
                </span>

                <div className="text">
                    <p>
                        Après huit années dans l’usinage, j’ai choisi de me réorienter vers le{" "}
                        <strong>développement web</strong>, un domaine qui m’a toujours passionné. J’ai suivi
                        une formation intensive de six mois chez <strong>OpenClassrooms</strong>, axée sur
                        JavaScript, React et Node.js.
                    </p>
                    <p>
                        Fort de cette expérience, je souhaite aujourd’hui rejoindre une entreprise dans laquelle
                        je pourrai continuer à apprendre et à progresser. Cette reconversion a confirmé mon
                        attrait pour la création, la logique et la polyvalence qu’offre le développement web.
                    </p>
                </div>
            </div>
        </section>
    );
}