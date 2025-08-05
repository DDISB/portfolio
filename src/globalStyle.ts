import { createGlobalStyle, type DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  themeName: 'light',
  colors: {
    background: '#dfe9ffff',
    primary: '#198cff',
    secondary: '#eff7ffff',
    headerBackground: '#ffffff',
    contrast: '#000000',
    additional: '#ff4c22',
    text: '#031a31',
  },
};

export const darkTheme: DefaultTheme = {
  themeName: 'dark',
  colors: {
    background: '#28344b',
    primary: '#031a31',
    secondary: '#2f4456',
    headerBackground: '#28344b',
    contrast: '#fff',
    additional: '#ff4c22',
    text: '#f5f5f5',
  },
};

export const GlobalStyles = createGlobalStyle<{ theme: DefaultTheme }>`
  #root {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    width: 100%;
    font-size: 16px;
  }
  
  body {
    margin: 0;
    min-width: 320px;
    min-height: 100vh;
    transition: all 0.4s ease;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 16px;
  }

  h1 {
    font-size: 3.2em;
    line-height: 1.1;
  }

  h2 {
    font-size: 3rem;
    line-height: 1.1;
    font-weight: 700;
  }

  h3 {
    font-size: 2rem;
    line-height: 1.1;
    font-weight: 700;
  }

  a {
    color: ${({ theme }) => theme.colors.text};
  }
  
  .theme-button {
    color: ${({ theme }) => theme.colors.contrast};
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1000;
  }

  .progress-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    z-index: 2;
    background: ${({ theme }) => theme.colors.contrast};
    transform-origin: 0%;
}

`;
