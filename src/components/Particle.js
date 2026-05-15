import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 72,
            density: {
              enable: true,
              value_area: 1400,
            },
          },
          color: {
            value: "#4ea1f0",
          },
          line_linked: {
            enable: false,
            opacity: 0.03,
          },
          move: {
            direction: "right",
            speed: 0.04,
          },
          size: {
            value: 1,
          },
          opacity: {
            value: 0.28,
            anim: {
              enable: true,
              speed: 0.8,
              opacity_min: 0.06,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: false,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
