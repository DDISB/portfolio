import { useState, useMemo, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, GlobalStyles, lightTheme } from './globalStyle';
import { motion, useScroll, useSpring } from 'framer-motion';
import Header from '@/lib/Nav/Header';
import PageContent from '@lib/PageContent/PageContent';
import useWindowWidth from '@lib/hooks/useWindowWidth';
import Footer from './lib/Footer/Footer';

export default function App() {
  const [themeName, setThemeName] = useState<'light' | 'dark'>(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : 'dark';
  });
  const width = useWindowWidth();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 400, damping: 60, restDelta: 0.001 });
  const theme = useMemo(() => themeName === 'dark' ? darkTheme : lightTheme, [themeName]);

  const toggleTheme = () => {
    const nextTheme = themeName === 'light' ? 'dark' : 'light';
    setThemeName(nextTheme);
    localStorage.setItem('theme', nextTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', themeName);
  }, [themeName]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles theme={theme} />
      <motion.div className="progress-bar" style={{ scaleX }} />
      <div className="app-shell">
        {width > 600 && <Header />}
        <button className="theme-button" onClick={toggleTheme} aria-label="Переключить цветовую тему">
          {themeName === 'light' ? 'Тёмная' : 'Светлая'}
        </button>
        <PageContent />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
