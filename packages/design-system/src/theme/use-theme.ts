import { DARK_THEME } from './dark-theme';
import { DEFAULT_THEME } from './default-theme';
import { useColorScheme } from './use-color-scheme';

export function useTheme() {
  const colorScheme = useColorScheme() ?? 'light';

  return colorScheme === 'dark' ? DARK_THEME : DEFAULT_THEME;
}
