import { createGlobalStyle, type DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  themeName: 'light',
  colors: {
    background: '#f7f7fa',
    surface: '#ffffff',
    surfaceElevated: '#f0eff8',
    border: '#dedde8',
    primary: '#6d5ce7',
    secondary: '#eeecf8',
    headerBackground: 'rgba(247, 247, 250, 0.88)',
    contrast: '#17161c',
    additional: '#6d5ce7',
    accentSoft: '#ebe8ff',
    text: '#17161c',
    muted: '#686672',
  },
};

export const darkTheme: DefaultTheme = {
  themeName: 'dark',
  colors: {
    background: '#0d0d10',
    surface: '#151519',
    surfaceElevated: '#1c1b22',
    border: '#2b2a32',
    primary: '#9585ff',
    secondary: '#211f2d',
    headerBackground: 'rgba(13, 13, 16, 0.86)',
    contrast: '#f5f4f8',
    additional: '#9585ff',
    accentSoft: '#25213b',
    text: '#f5f4f8',
    muted: '#aaa7b3',
  },
};

export const GlobalStyles = createGlobalStyle<{ theme: DefaultTheme }>`
  html {
    scroll-behavior: smooth;
    scroll-padding-top: 6rem;
  }

  body {
    margin: 0;
    min-width: 320px;
    min-height: 100vh;
    overflow-x: hidden;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: Inter, "Nata Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    font-size: 16px;
    line-height: 1.65;
    transition: background-color 0.25s ease, color 0.25s ease;
  }

  #root {
    width: 100%;
    min-height: 100vh;
  }

  ::selection {
    color: ${({ theme }) => theme.colors.contrast};
    background: ${({ theme }) => theme.colors.accentSoft};
  }

  h1, h2, h3 {
    color: ${({ theme }) => theme.colors.text};
    letter-spacing: -0.04em;
    text-wrap: balance;
  }

  h1 {
    font-size: clamp(2.75rem, 8vw, 6.5rem);
    line-height: 0.98;
    font-weight: 750;
  }

  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    font-size: clamp(2rem, 5vw, 3.5rem);
    line-height: 1.1;
    font-weight: 720;
  }

  h3 {
    font-size: clamp(1.5rem, 3vw, 2.25rem);
    line-height: 1.2;
    font-weight: 700;
  }

  p {
    color: ${({ theme }) => theme.colors.muted};
  }

  a {
    color: inherit;
  }

  :focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 3px;
  }

  .app-shell {
    position: relative;
    z-index: 1;
    width: 100%;
  }

  .theme-button {
    position: fixed;
    z-index: 200;
    top: 0.75rem;
    right: max(1rem, calc((100vw - 1120px) / 2));
    min-width: 6.5rem;
    padding: 0.65rem 1rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 999px;
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.surface};
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    font-size: 0.82rem;
    font-weight: 700;
    transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;
  }

  .theme-button:hover {
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.accentSoft};
  }

  .progress-bar {
    position: fixed;
    z-index: 300;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${({ theme }) => theme.colors.primary};
    transform-origin: 0%;
  }

  @media (max-width: 600px) {
    body { font-size: 15px; }
    .theme-button {
      top: 0.75rem;
      right: 1rem;
      min-width: auto;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    *, *::before, *::after {
      scroll-behavior: auto !important;
      transition-duration: 0.01ms !important;
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
    }
  }
`;
