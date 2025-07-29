import { useState } from 'react'
import './App.css'
import Header from './lib/Header/Header'
import { ThemeProvider } from 'styled-components';

const lightTheme = {
  colors: {
    background: '#ffffff',
    text: '#333333',
  },
};

const darkTheme = {
  colors: {
    background: '#121212',
    text: '#f5f5f5',
  },
};

function App() {
  const [theme, setTheme] = useState(lightTheme);
  
  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <button className='theme-button' onClick={toggleTheme}>Toggle Theme</button>
        <Header />
      </ThemeProvider>
    </>
  )
}

export default App
