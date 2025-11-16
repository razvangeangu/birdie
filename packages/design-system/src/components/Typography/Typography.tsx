import { ComponentProps } from 'react';
import { css, html } from 'react-strict-dom';
import { palette } from '../../theme/tokens.css';

const variants = {
  h1: html.h1,
  h2: html.h2,
  h3: html.h3,
  h4: html.h4,
  h5: html.h5,
  h6: html.h6,
  subtitle1: html.h6,
  subtitle2: html.h6,
  body1: html.p,
  body2: html.p,
  button: html.span,
  caption: html.span,
  overline: html.span,
};

export type TypographyProps = ComponentProps<
  | typeof html.span
  | typeof html.p
  | typeof html.h1
  | typeof html.h2
  | typeof html.h3
  | typeof html.h4
  | typeof html.h5
  | typeof html.h6
> & {
  /**
   * The color of the component.
   */
  color?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning'
    | 'textPrimary'
    | 'textSecondary'
    | 'textDisabled';

  /**
   * The color variant to use from the theme colors.
   *
   * @default 'main'
   */
  colorVariant?: 'main' | 'light' | 'dark' | 'contrastText';

  /**
   * Applies the theme typography styles.
   *
   * @default 'body1'
   */
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'button'
    | 'caption'
    | 'overline';

  as?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export function Typography({
  children,
  color = 'textPrimary',
  variant = 'body1',
  colorVariant = 'main',
  style,
  as,
  ...rest
}: TypographyProps) {
  const VariantComponent = as ? html[as] : variants[variant];

  return (
    <VariantComponent style={[styles[variant], styles.root(color, colorVariant), style]} {...(rest as never[])}>
      {children}
    </VariantComponent>
  );
}

const styles = css.create({
  root: (color: NonNullable<TypographyProps['color']>, colorVariant: NonNullable<TypographyProps['colorVariant']>) => ({
    color: color.startsWith('text') ? palette[color as never] : palette[`${color}.${colorVariant}` as never],
  }),
  h1: {
    fontFamily: 'Poppins_300Light',
    fontSize: '3.5rem',
    fontWeight: 300,
  },
  h2: {
    fontFamily: 'Poppins_300Light',
    fontSize: '3rem',
    fontWeight: 300,
  },
  h3: {
    fontFamily: 'Poppins_400Regular',
    fontSize: '2.5rem',
    fontWeight: 400,
  },
  h4: {
    fontFamily: 'Poppins_400Regular',
    fontSize: '2.125rem',
    fontWeight: 400,
  },
  h5: {
    fontFamily: 'Poppins_400Regular',
    fontSize: '1.5rem',
    fontWeight: 400,
  },
  h6: {
    fontFamily: 'Poppins_500Medium',
    fontSize: '1.25rem',
    fontWeight: 500,
  },
  subtitle1: {
    fontFamily: 'Poppins_400Regular',
    fontSize: '1rem',
    fontWeight: 400,
  },
  subtitle2: {
    fontFamily: 'Poppins_500Medium',
    fontSize: '0.875rem',
    fontWeight: 500,
  },
  body1: {
    fontFamily: 'Poppins_400Regular',
    fontSize: '1rem',
    fontWeight: 400,
  },
  body2: {
    fontFamily: 'Poppins_400Regular',
    fontSize: '0.875rem',
    fontWeight: 400,
  },
  button: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: '1rem',
    fontWeight: 600,
  },
  caption: {
    fontFamily: 'Poppins_400Regular',
    fontSize: '0.75rem',
    fontWeight: 400,
  },
  overline: {
    fontFamily: 'Poppins_400Regular',
    fontSize: '0.75rem',
    fontWeight: 400,
  },
});
