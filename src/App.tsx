import { useState, useMemo } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, GlobalStyles, lightTheme } from './globalStyle';
import { motion, useScroll, useSpring } from "framer-motion";
import Header from '@/lib/Nav/Header';
import PageContent from '@lib/PageContent/PageContent';
import ParticlesBackground from '@lib/ParticlesBackground/ParticlesBackground';
import useWindowWidth from '@lib/hooks/useWindowWidth';

export default function App() {
  const [themeName, setThemeName] = useState<'light' | 'dark'>('light');
  const width = useWindowWidth();
  
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
      <ThemeProvider theme={theme}>
        <GlobalStyles theme={theme}/>
        <motion.div className="progress-bar" style={{ scaleX }} />
        <ParticlesBackground/>
        <div style={{ position: 'relative', zIndex: 1, width: '100%' }}>
          <button className='theme-button' onClick={toggleTheme}>
            {theme.themeName === 'light' ? 'dark' : 'light'}
          </button>
          {width > 600 && <Header />}
          <PageContent />
        </div>
    </ThemeProvider>
    </>
  );
}
