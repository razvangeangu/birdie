import { ComponentProps, ReactNode } from 'react';
import { css, html } from 'react-strict-dom';
import { palette, radius, spacing } from '../../theme/tokens.css';
import { Spinner } from '../Spinner/Spinner';
import { Typography } from '../Typography/Typography';

export interface ButtonProps extends ComponentProps<typeof html.button> {
  /** @default 'primary' */
  color?: 'error' | 'info' | 'primary' | 'secondary' | 'success' | 'warning';

  /** @default contained */
  variant?: 'contained' | 'outlined' | 'text';

  /** @default false */
  loading?: boolean;

  onPress?: (event?: unknown) => void;

  /** @default false */
  fullWidth?: boolean;

  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

export function Button({
  children,
  variant = 'contained',
  color = 'primary',
  startIcon,
  endIcon,
  loading,
  fullWidth,
  onPress,
  onClick,
  style,
  ...rest
}: ButtonProps) {
  return (
    <html.button
      style={[styles.root, styles[variant](color), fullWidth ? styles.fullWidth : {}, style]}
      onClick={onPress || onClick}
      {...rest}
    >
      {!loading && startIcon && (
        <Typography variant="button" style={styles.typography}>
          {startIcon}
        </Typography>
      )}
      <Typography variant="button" style={styles.typography}>
        {loading ? (
          <Spinner color={color} colorVariant={variant === 'contained' ? 'contrastText' : undefined} />
        ) : (
          children
        )}
      </Typography>
      {!loading && endIcon && (
        <Typography variant="button" style={styles.typography}>
          {endIcon}
        </Typography>
      )}
    </html.button>
  );
}

const styles = css.create({
  root: {
    alignItems: 'center',
    borderRadius: radius.default,
    borderWidth: 0,
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'row',
    gap: spacing.small,
    justifyContent: 'center',
  },
  contained: (color: NonNullable<ButtonProps['color']>) => ({
    backgroundColor: palette[`${color}.main`],
    color: palette[`${color}.contrastText`],
    ':hover': {
      backgroundColor: palette[`${color}.dark`],
    },
  }),
  outlined: (color: NonNullable<ButtonProps['color']>) => ({
    borderWidth: 1,
    borderColor: palette[`${color}.main`],
    backgroundColor: 'transparent',
    color: palette[`${color}.main`],
    ':hover': {
      backgroundColor: palette[`${color}.light`],
      borderColor: palette[`${color}.dark`],
      color: palette[`${color}.dark`],
    },
  }),
  text: (color: NonNullable<ButtonProps['color']>) => ({
    backgroundColor: 'transparent',
    color: palette[`${color}.main`],
    ':hover': {
      backgroundColor: palette[`${color}.light`],
      color: palette[`${color}.dark`],
    },
  }),
  fullWidth: {
    width: '100%',
  },
  typography: {
    color: 'inherit',
    display: 'flex',
    paddingBottom: spacing.small,
    paddingLeft: spacing.medium,
    paddingRight: spacing.medium,
    paddingTop: spacing.small,
  },
});
