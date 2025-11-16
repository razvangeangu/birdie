import { ThemeProvider as RNThemeProvider } from '@react-navigation/native';
import { DARK_THEME } from './dark-theme';
import { DEFAULT_THEME } from './default-theme';
import { useColorScheme } from './use-color-scheme';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const colorScheme = useColorScheme();

  return <RNThemeProvider value={colorScheme === 'dark' ? DARK_THEME : DEFAULT_THEME}>{children}</RNThemeProvider>;
}
