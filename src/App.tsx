import { useState, useMemo, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, GlobalStyles, lightTheme } from './globalStyle';
import { motion, useScroll, useSpring } from "framer-motion";
import Header from '@/lib/Nav/Header';
import PageContent from '@lib/PageContent/PageContent';
import useWindowWidth from '@lib/hooks/useWindowWidth';
import Footer from './lib/Footer/Footer';

export default function App() {
  // Инициализируем тему из localStorage или используем 'light' по умолчанию
  const [themeName, setThemeName] = useState<'light' | 'dark'>(() => {
    const savedTheme = localStorage.getItem('theme');
    return (savedTheme === 'light' || savedTheme === 'dark') ? savedTheme : 'light';
  });
  
  const width = useWindowWidth();
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 60,
    restDelta: 0.001
  });
  
  const theme = useMemo(() => 
    themeName === 'dark' ? darkTheme : lightTheme, [themeName]);

  const toggleTheme = () => {
    const newTheme = themeName === 'light' ? 'dark' : 'light';
    setThemeName(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Синхронизация темы при первом рендере
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', themeName);
  }, [themeName]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles theme={theme}/>
        <motion.div className="progress-bar" style={{ scaleX }} />
        <div style={{ position: 'relative', zIndex: 1, width: '100%' }}>
          {width > 600 && <Header/>}
          <button className='theme-button' onClick={toggleTheme}>
            {themeName === 'light' ? 'dark' : 'light'}
          </button>
          <PageContent />
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}