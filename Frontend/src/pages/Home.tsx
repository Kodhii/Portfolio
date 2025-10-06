import "./Home.scss";
import Typing from "../components/effects/Typing";
import AnimatedBackground from "../components/effects/AnimatedBackground";

export default function Home() {
  return (
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
            <img src="./src/assets/Photo.png" alt="Ma photo de profil" />
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
    </section>
  );
}
