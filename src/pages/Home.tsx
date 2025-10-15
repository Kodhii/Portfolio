import "./Home.scss";
import Typing from "../components/effects/Typing";
import AnimatedBackground from "../components/effects/AnimatedBackground";
import Cards from "../components/Cards";
import ContactForm from "../components/ContactForm";
import { useEffect, useState, useMemo } from "react";
import skillsData from "../assets/json/skillsData.json";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


export default function Home() {
  const [showSkills, setShowSkills] = useState(false);
  const [showPicture, setShowPicture] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setShowPicture(false);
      const totalTypingDuration =1200;
      const timer = setTimeout(() => setShowPicture(true), totalTypingDuration);
      return () => clearTimeout(timer);
    }
  }, [isMobile]);

  useEffect(() => {
    const totalTypingDuration =1800;
    const timer = setTimeout(() => setShowSkills(true), totalTypingDuration);
    return () => clearTimeout(timer);
  }, []);

  const scrollToNextSection = () => {
    const next = document.querySelector("#nextSection");
    if (next) next.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <section className="mainSection">
        {useMemo(() => <AnimatedBackground />, [])}

        <div className="contentWrapper">
          <div className="namePic">
            <div className="name">
              <h2>
                <Typing text="Bonjour !" speed={30} />
              </h2>
              <h2>
                <Typing text="Je suis Valentin Schwartz," speed={30} delay={600} />
              </h2>
              <h2>
                <Typing text="Développeur Web Junior." speed={30} delay={1500} />
              </h2>
            </div>

            {showPicture && (
              <div className="picture fadeInPicture">
                <img src="./project/Photo.png" alt="Ma photo de profil" />
                <div className="socials">
                  <a target="blank" href="https://github.com/Kodhii"><FaGithub size={40} color="#60a5fa"/></a>
                  <a target="blank" href="https://www.linkedin.com/in/valentin-schwartz57/"><FaLinkedin size={40} color="#60a5fa"/></a>
                </div>
              </div>
            )}
          </div>

          {showSkills && (
            <div className="skillsShowcase fadeInBlock">
              <div className="skillsBlock">
                <h3>Compétences Frontend</h3>
                <div className="skillsTags">
                  {skillsData.frontend.map((skill) => (
                    <span key={skill} className="tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="skillsBlock">
                <h3>Compétences Backend</h3>
                <div className="skillsTags">
                  {skillsData.backend.map((skill) => (
                    <span key={skill} className="tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="scrollIndicator" onClick={scrollToNextSection}>
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
        <ContactForm />
      </section>
    </main>
  );
}
