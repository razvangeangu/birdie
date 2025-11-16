import { ComponentProps } from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from '../../theme/use-theme';

export interface SpinnerProps extends Omit<ComponentProps<typeof ActivityIndicator>, 'color'> {
  /** @default 'primary' */
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';

  /** @default 'main' */
  colorVariant?: 'main' | 'light' | 'dark' | 'contrastText';
}

export function Spinner({ color = 'primary', colorVariant = 'main', ...rest }: SpinnerProps) {
  const theme = useTheme();

  return <ActivityIndicator color={theme.palette[color][colorVariant]} {...rest} />;
}
