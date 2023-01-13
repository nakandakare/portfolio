import { FunctionComponent, useCallback, useMemo } from "react";
import Particles from 'react-tsparticles';
import { loadSlim } from "tsparticles-slim"; // loads tsparticles-slim
//import { loadFull } from "tsparticles"; // loads tsparticles
import { Engine } from "tsparticles-engine";

const Particle: FunctionComponent = () => {
    const options = useMemo(() => {
        return {
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
            links: {
              enable: true, // enabling this will make particles linked together
              distance: 200, // maximum distance for linking the particles
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
      }, []);
    
      // useCallback is not mandatory, but it's recommended since this callback can be memoized if static
      const particlesInit = useCallback((engine: Engine) => {
        return loadSlim(engine);
      }, []);
    
    return (
        <Particles id={"tsparticles"} init={particlesInit} options={options} />
    )
}

export default Particle;