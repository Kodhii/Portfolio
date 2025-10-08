import { useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import "./AnimatedBackground.scss";

export default function AnimatedBackground() {
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }, []);

  return (
    <Particles
      id="tsparticles"
      style={{ position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none" }}
      options={{
        fullScreen: false,
        background: { color: "transparent" },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
          },
          modes: { push: { quantity: 3 }, repulse: { distance: 100, duration: 0.4 } },
        },
        particles: {
          number: { value: 60, density: { enable: true } },
          color: { value: "#60a5fa" },
          shape: { type: "circle" },
          opacity: { value: 0.5 },
          size: { value: { min: 1, max: 4 } },
          move: { enable: true, speed: 1.2, direction: "none", outModes: { default: "out" } },
          links: { enable: true, color: "#93c5fd", distance: 150, opacity: 0.4, width: 1 },
        },
        detectRetina: true,
      }}
    />
  );
}


