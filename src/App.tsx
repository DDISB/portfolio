import { useState, useMemo } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, GlobalStyles, lightTheme } from './globalStyle';
import Header from '@lib/Header/Header';
import PageContent from '@lib/PageContent/PageContent';
import ParticlesBackground from '@lib/ParticlesBackground/ParticlesBackground';
import { motion, useScroll, useSpring } from "framer-motion";

function App() {
  const [themeName, setThemeName] = useState<'light' | 'dark'>('light');

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 60,
    restDelta: 0.001
  });
  
  const theme = useMemo(() => 
    themeName === 'dark' ? lightTheme : darkTheme, [themeName]);
  
  const toggleTheme = () => {
    setThemeName(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <ThemeProvider theme={theme}>
        <GlobalStyles theme={theme}/>
        <ParticlesBackground/>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <button className='theme-button' onClick={toggleTheme}>
            {theme.themeName === 'light' ? 'dark' : 'light'}
          </button>
          <Header />
          <PageContent />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
    </ThemeProvider>
    </>
  );
}

export default App;
