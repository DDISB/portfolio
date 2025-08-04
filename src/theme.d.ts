import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    themeName: string,
    colors: {
      background: string;
      contrast: string;
      primary: string;
      secondary: string;
      headerBackground: string;
      text: string;
    };
  }
}