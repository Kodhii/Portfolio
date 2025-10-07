import "./Home.scss";
import Typing from "../components/effects/Typing";
import AnimatedBackground from "../components/effects/AnimatedBackground";
import Cards from "../components/Cards";

export default function Home() {

  const scrollToNextSection = () => {
    const next = document.querySelector("#nextSection");
    if (next) next.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <section className="mainSection">
        <AnimatedBackground />

        <div className="contentWrapper">
          <div className="namePic">
            <div className="name">
              <h2>
                <Typing text="Bonjour !" speed={40} />
              </h2>
              <h2>
                <Typing text="Je suis Valentin Schwartz," speed={40} delay={700} />
              </h2>
              <h2>
                <Typing text="Développeur Web Junior." speed={40} delay={1700} />
              </h2>
            </div>

            <div className="picture">
              <img src="./src/assets/pictures/Photo.png" alt="Ma photo de profil" />
            </div>
          </div>

          <div className="description">
            <p>
              <Typing
                text="Je conçois des interfaces modernes et intuitives avec React, JavaScript et SCSS."
                speed={15}
                delay={3000}
              />
            </p>
            <p>
              <Typing
                text="J’ai également une expérience avec Node.js et MongoDB, qui me permet de travailler sur des projets complets, du frontend au backend."
                speed={15}
                delay={4200}
              />
            </p>
          </div>
        </div>

        <div className="scrollIndicator" onClick={() => scrollToNextSection()}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#60a5fa"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="arrow"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </section>

      <section id="nextSection">
        <h3>Mes travaux</h3>
        <div className="travaux">
          <Cards />
        </div>
      </section>
    </main>
  );
}

