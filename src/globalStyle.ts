import { createGlobalStyle, type DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  themeName: 'light',
  colors: {
    background: '#f0f4f8',
    primary: '#ffffff',
    secondary:'#ffffffff',
    headerBackground:'#ffffff7c',
    contrast:'#000',
    text: '#333333',
  },
};

export const darkTheme: DefaultTheme = {
  themeName: 'dark',
  colors: {
    background: '#121212',
    primary: '#121212',
    secondary: '#333333',
    headerBackground: '#1212127c',
    contrast: '#fff',
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
    font-size: 2rem;
    line-height: 1.1;
    font-weight: 700;
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
