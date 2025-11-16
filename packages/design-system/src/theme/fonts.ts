import { Theme } from '@react-navigation/native';
import { Platform } from 'react-native';

export type PrimaryFontVariant =
  | 'Poppins_300Light'
  | 'Poppins_400Regular'
  | 'Poppins_500Medium'
  | 'Poppins_600SemiBold'
  | 'Poppins_700Bold'
  | 'Poppins_800ExtraBold'
  | 'Poppins_300Light_Italic'
  | 'Poppins_400Regular_Italic'
  | 'Poppins_500Medium_Italic'
  | 'Poppins_600SemiBold_Italic'
  | 'Poppins_700Bold_Italic'
  | 'Poppins_800ExtraBold_Italic';

const WEB_FONT_STACK = (primaryFont: PrimaryFontVariant) =>
  `"${primaryFont}", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`;

export const fonts = Platform.select({
  web: {
    regular: {
      fontFamily: WEB_FONT_STACK('Poppins_400Regular'),
      fontWeight: '400',
    },
    medium: {
      fontFamily: WEB_FONT_STACK('Poppins_500Medium'),
      fontWeight: '500',
    },
    bold: {
      fontFamily: WEB_FONT_STACK('Poppins_600SemiBold'),
      fontWeight: '600',
    },
    heavy: {
      fontFamily: WEB_FONT_STACK('Poppins_700Bold'),
      fontWeight: '700',
    },
  },
  ios: {
    regular: {
      fontFamily: 'Poppins_400Regular',
      fontWeight: '400',
    },
    medium: {
      fontFamily: 'Poppins_500Medium',
      fontWeight: '500',
    },
    bold: {
      fontFamily: 'Poppins_600SemiBold',
      fontWeight: '600',
    },
    heavy: {
      fontFamily: 'Poppins_700Bold',
      fontWeight: '700',
    },
  },
  default: {
    regular: {
      fontFamily: 'Poppins_400Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Poppins_500Medium',
      fontWeight: 'normal',
    },
    bold: {
      fontFamily: 'Poppins_600SemiBold',
      fontWeight: '600',
    },
    heavy: {
      fontFamily: 'Poppins_700Bold',
      fontWeight: '700',
    },
  },
} as const satisfies Record<string, Theme['fonts']>);
