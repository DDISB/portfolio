// import { useEffect, useMemo, useState } from 'react';
// import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { type Container, type ISourceOptions } from "@tsparticles/engine";
// import { loadSlim } from "@tsparticles/slim";
// import { useTheme } from 'styled-components';

// export default function ParticlesBackground() {
//   const theme = useTheme();

//   const [init, setInit] = useState(false);

//   const options: ISourceOptions = useMemo(() => ({
//     autoPlay: true,
//     background: {
//       color: {
//         value: '#0000000'
//       },
//     },
//     fullScreen: {
//       enable: true,
//       zIndex: 0
//     },
//     detectRetina: true,
//     fpsLimit: 120,
//     interactivity: {
//       detectsOn: "window",
//       modes: {
//         bubble: {
//           distance: 250,
//           duration: 2,
//           opacity: 0,
//           size: 0
//         },
//         repulse: {
//           distance: 400,
//           duration: 0.4,
//           factor: 100,
//           speed: 1,
//           maxSpeed: 50
//         }
//       }
//     },
//     particles: {
//       color: {
//         value: theme.colors.text
//       },
//       move: {
//         enable: true,
//         speed: { min: 0.1, max: 1 },
//         outModes: {
//           default: "out"
//         }
//       },
//       number: {
//         value: 160,
//         density: {
//           enable: true,
//           width: 1920,
//           height: 1080
//         }
//       },
//       opacity: {
//         value: { min: 0.1, max: 1 },
//         animation: {
//           enable: true,
//           speed: 1,
//           sync: false
//         }
//       },
//       shape: {
//         type: "circle"
//       },
//       size: {
//         value: { min: 1, max: 3 }
//       }
//     },
//     pauseOnBlur: true,
//     motion: {
//       reduce: {
//         factor: 4,
//         value: true
//       }
//     }
//   }), [theme]);

//     useEffect(() => {
//       initParticlesEngine(async (engine) => {
//         await loadSlim(engine);
//       }).then(() => {
//         setInit(true);
//       });
//     }, []);

//   const particlesLoaded = async (container?: Container): Promise<void> => {
//     // console.log(container);
//   };

//   return (
//     <div 
//       id="tsparticlesContainer"
//       style={{
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         width: '100%',
//         height: '100%',
//         zIndex: 0,
//         transition: 'background-color 0.4s ease'
//       }}
//     >
//       <Particles
//         id="tsparticles"
//         particlesLoaded={particlesLoaded}
//         options={options}      
//       />
//     </div>
//   );
// }

"use client";
import React from "react";
import { SparklesCore } from "../ui/sparkles";
 
export default function SparklesPreview() {
  return (
    <div className="h-[40rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
        Build great products
      </h1>
    </div>
  );
}