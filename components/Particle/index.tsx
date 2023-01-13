import { FunctionComponent, useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // loads tsparticles-slim
//import { loadFull } from "tsparticles"; // loads tsparticles
import { Engine } from "tsparticles-engine";
import { useWindowSize } from "hook/useWindowSize";

const Particle: FunctionComponent = () => {
  const size = useWindowSize();

  const options = {
    background: {
      color: "#002", // this sets a background color for the canvas
    },
    fullScreen: {
      enable: true, // enabling this will make the canvas fill the entire screen, it's enabled by default
      zIndex: -1, // this is the z-index value used when the fullScreen is enabled, it's 0 by default
    },
    interactivity: {
      events: {
        onHover: {
          enable: true, // enables the hover event
          mode: "repulse", // make the particles run away from the cursor
        },
      },
      modes: {
        repulse: {
          distance: 100, // distance of the particles from the cursor
        },
      },
    },
    particles: {
      color: {
        value: "#888888",
      },
      links: {
        color: "#888888",
        enable: true, // enabling this will make particles linked together
        distance: size.width < 1000 ? 150 : size.width < 500 ? 100  : 200, // maximum distance for linking the particles
      },
      number: {
        limit: size.width < 1000 ? 50 : size.width < 500 ? 20  : 300,
      },
      move: {
        enable: true, // enabling this will make particles move in the canvas
        speed: { min: 1, max: 5 }, // using a range in speed value will make particles move in a random speed between min/max values, each particles have its own value, it won't change in time by default
      },
      opacity: {
        value: { min: 0.3, max: 0.7 }, // using a different opacity, to have some semitransparent effects
      },
      size: {
        value: { min: 1, max: 3 }, // let's randomize the particles size a bit
      },
    },
  };

  // useCallback is not mandatory, but it's recommended since this callback can be memoized if static
  const particlesInit = useCallback((engine: Engine) => {
    return loadSlim(engine);
  }, []);

  return (
    <Particles id={"tsparticles"} init={particlesInit} options={options} />
  );
};

export default Particle;
