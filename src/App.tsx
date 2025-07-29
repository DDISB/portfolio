import { useState } from 'react';
import { ThemeProvider, type DefaultTheme } from 'styled-components';
import { PageProvider } from './context/PageContext';
import { darkTheme, GlobalStyles, lightTheme } from './globalStyle';
import Header from '@lib/Header/Header';

function App() {
  const [theme, setTheme] = useState<DefaultTheme>(lightTheme);
  
  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles theme={theme}/>
      <PageProvider>
        <button className='theme-button' onClick={toggleTheme}>
          {theme.themeName === 'light' ? 'dark' : 'light'}
        </button>
        <Header />
      </PageProvider>
    </ThemeProvider>
  );
}

export default App;