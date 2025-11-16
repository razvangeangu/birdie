import { css } from 'react-strict-dom';
import { black, blue, gray, green, indigo, orange, red, white } from './colors.css';

const DARK = '@media (prefers-color-scheme: dark)';

export const palette = css.defineVars({
  'primary.main': { default: indigo[9], [DARK]: indigo[9] },
  'primary.light': { default: indigo[3], [DARK]: indigo[3] },
  'primary.dark': { default: indigo[10], [DARK]: indigo[10] },
  'primary.contrastText': { default: white.default, [DARK]: white.default },

  'secondary.main': { default: blue[9], [DARK]: blue[9] },
  'secondary.light': { default: blue[3], [DARK]: blue[3] },
  'secondary.dark': { default: blue[10], [DARK]: blue[10] },
  'secondary.contrastText': { default: white.default, [DARK]: white.default },

  'error.main': { default: red[9], [DARK]: red[9] },
  'error.light': { default: red[3], [DARK]: red[3] },
  'error.dark': { default: red[10], [DARK]: red[10] },
  'error.contrastText': { default: white.default, [DARK]: white.default },

  'warning.main': { default: orange[9], [DARK]: orange[9] },
  'warning.light': { default: orange[3], [DARK]: orange[3] },
  'warning.dark': { default: orange[10], [DARK]: orange[10] },
  'warning.contrastText': { default: white.default, [DARK]: white.default },

  'info.main': { default: gray[9], [DARK]: gray[9] },
  'info.light': { default: gray[3], [DARK]: gray[3] },
  'info.dark': { default: gray[10], [DARK]: gray[10] },
  'info.contrastText': { default: white.default, [DARK]: white.default },

  'success.main': { default: green[9], [DARK]: green[9] },
  'success.light': { default: green[3], [DARK]: green[3] },
  'success.dark': { default: green[10], [DARK]: green[10] },
  'success.contrastText': { default: white.default, [DARK]: white.default },

  'background.default': { default: white.default, [DARK]: black.default },
  'background.paper': { default: gray[1], [DARK]: gray[2] },

  divider: { default: gray[6], [DARK]: gray[6] },

  textPrimary: { default: gray[12], [DARK]: gray[12] },
  textSecondary: { default: gray[11], [DARK]: gray[11] },
  textDisabled: { default: gray[9], [DARK]: gray[9] },
});

export const spacing = css.defineConsts({
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '24px',
  6: '32px',
  7: '40px',
  8: '48px',
  9: '64px',

  small: '8px',
  medium: '12px',
  large: '16px',
});

export const radius = css.defineConsts({
  1: '3px',
  2: '4px',
  3: '6px',
  4: '8px',
  5: '12px',
  6: '16px',

  default: '8px',

  small: '4px',
  medium: '8px',
  large: '16px',
  full: '9999px',
});
