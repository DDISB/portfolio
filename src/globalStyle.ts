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
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    transition: all 0.2s ease;
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
`;