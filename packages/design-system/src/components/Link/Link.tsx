import { Link as ERLink, LinkProps as ERLinkProps } from 'expo-router';
import { Platform } from 'react-native';
import { css, html } from 'react-strict-dom';
import { Typography } from '../Typography/Typography';

export interface LinkProps extends Pick<ERLinkProps, 'children' | 'target' | 'asChild'> {
  asExpoRouterLink?: boolean;
  href?: string;
}

export function Link({ children, asExpoRouterLink = true, href, ...rest }: LinkProps) {
  const VariantComponent = asExpoRouterLink ? ERLink : html.a;

  return (
    <VariantComponent href={href as never} {...rest}>
      <Typography variant="button" color="primary" style={Platform.select({ web: styles.typography })}>
        {children}
      </Typography>
    </VariantComponent>
  );
}

const styles = css.create({
  typography: {
    display: 'inline-block',
  },
});
