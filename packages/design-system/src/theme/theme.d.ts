import '@react-navigation/native';

declare module '@react-navigation/native' {
  export type FontStyle = {
    fontFamily: string;
    fontWeight: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
  };

  export interface PaletteColor {
    main: string;
    light: string;
    dark: string;
    contrastText: string;
  }

  export interface Theme {
    dark: boolean;
    colors: {
      primary: string;
      background: string;
      card: string;
      text: string;
      border: string;
      notification: string;
    };
    fonts: {
      regular: FontStyle;
      medium: FontStyle;
      bold: FontStyle;
      heavy: FontStyle;
    };
    palette: {
      primary: PaletteColor;
      secondary: PaletteColor;
      error: PaletteColor;
      warning: PaletteColor;
      info: PaletteColor;
      success: PaletteColor;

      background: {
        default: string;
        paper: string;
      };

      divider: string;

      textPrimary: string;
      textSecondary: string;
      textDisabled: string;
    };
  }
}
