import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    themeName: string;
    colors: {
      background: string;
      surface: string;
      surfaceElevated: string;
      border: string;
      contrast: string;
      primary: string;
      secondary: string;
      headerBackground: string;
      additional: string;
      accentSoft: string;
      text: string;
      muted: string;
    };
  }
}
