import { ComponentProps } from 'react';
import { css, html } from 'react-strict-dom';

export interface ViewProps extends ComponentProps<typeof html.div> {}

export function View({ children, style, ...rest }: ViewProps) {
  return (
    <html.div style={[styles.root, style]} {...rest}>
      {children}
    </html.div>
  );
}

const styles = css.create({
  root: {
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
  },
});
