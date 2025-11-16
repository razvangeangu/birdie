import { DefaultTheme, Theme } from '@react-navigation/native';
import { blue, gray, green, indigo, orange, red, white } from './colors.css';
import { fonts } from './fonts';

export const DEFAULT_THEME: Theme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    primary: indigo[9],
    background: white.default,
    card: gray[1],
    text: gray[12],
    border: gray[6],
    notification: blue[9],
  },
  palette: {
    primary: {
      main: indigo[9],
      light: indigo[3],
      dark: indigo[10],
      contrastText: white.default,
    },
    secondary: {
      main: blue[9],
      light: blue[3],
      dark: blue[10],
      contrastText: white.default,
    },
    error: {
      main: red[9],
      light: red[3],
      dark: red[10],
      contrastText: white.default,
    },
    warning: {
      main: orange[9],
      light: orange[3],
      dark: orange[10],
      contrastText: white.default,
    },
    info: {
      main: gray[9],
      light: gray[3],
      dark: gray[10],
      contrastText: white.default,
    },
    success: {
      main: green[9],
      light: green[3],
      dark: green[10],
      contrastText: white.default,
    },
    background: {
      default: white.default,
      paper: gray[1],
    },
    divider: gray[6],
    textPrimary: gray[12],
    textSecondary: gray[11],
    textDisabled: gray[9],
  },
  fonts,
};
