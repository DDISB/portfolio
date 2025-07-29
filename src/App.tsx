import { useState, useMemo } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, GlobalStyles, lightTheme } from './globalStyle';
import Header from '@lib/Header/Header';
import PageContent from '@lib/PageContent/PageContent';
import ParticlesBackground from '@lib/ParticlesBackground/ParticlesBackground';

function App() {
  const [themeName, setThemeName] = useState<'light' | 'dark'>('light');
  
  const theme = useMemo(() => 
    themeName === 'light' ? lightTheme : darkTheme, [themeName]);
  
  const toggleTheme = () => {
    setThemeName(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles theme={theme}/>
      <ParticlesBackground/>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <button className='theme-button' onClick={toggleTheme}>
           {theme.themeName === 'light' ? 'dark' : 'light'}
         </button>
        <Header />
        <PageContent />
      </div>
    </ThemeProvider>
  );
}

export default App;