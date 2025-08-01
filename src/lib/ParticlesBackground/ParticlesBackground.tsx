import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from 'styled-components';

export default function ParticlesBackground() {
  const theme = useTheme();

  const [init, setInit] = useState(false);

  const options: ISourceOptions = useMemo(() => ({
    autoPlay: true,
    background: {
      color: {
        value: theme.colors.background // Используем цвет из темы
      },
    },
    fullScreen: {
      enable: true,
      zIndex: 0
    },
    detectRetina: true,
    fpsLimit: 120,
    interactivity: {
      detectsOn: "window",
      modes: {
        bubble: {
          distance: 250,
          duration: 2,
          opacity: 0,
          size: 0
        },
        repulse: {
          distance: 400,
          duration: 0.4,
          factor: 100,
          speed: 1,
          maxSpeed: 50
        }
      }
    },
    particles: {
      color: {
        value: theme.colors.text // Цвет частиц из темы
      },
      move: {
        enable: true,
        speed: { min: 0.1, max: 1 },
        outModes: {
          default: "out"
        }
      },
      number: {
        value: 160,
        density: {
          enable: true,
          width: 1920,
          height: 1080
        }
      },
      opacity: {
        value: { min: 0.1, max: 1 },
        animation: {
          enable: true,
          speed: 1,
          sync: false
        }
      },
      shape: {
        type: "circle"
      },
      size: {
        value: { min: 1, max: 3 }
      }
    },
    pauseOnBlur: true,
    motion: {
      reduce: {
        factor: 4,
        value: true
      }
    }
  }), [theme]);


  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    // console.log(container);
  };

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        transition: 'background-color 0.4s ease' // Плавное изменение
      }}
    />
  );
}