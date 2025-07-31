import { createGlobalStyle, type DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  themeName: 'light',
  colors: {
    background: '#ffffff',
    primary: '#ffffff',
    secondary:'#cacaca',
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
    contrast: '#fff',
    text: '#f5f5f5',
  },
};

export const GlobalStyles = createGlobalStyle<{ theme: DefaultTheme }>`
  #root {
    margin: 0 auto;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
  }
  
  body {
    transition: all 0.4s ease;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    display: flex;
    flex-direction: column;
    align-items: center;
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
    z-index: 1;
    background: ${({ theme }) => theme.colors.contrast};
    transform-origin: 0%;
}

`;
