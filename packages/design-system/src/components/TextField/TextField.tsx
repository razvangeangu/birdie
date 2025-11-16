import { ComponentProps, ReactNode } from 'react';
import { css, html } from 'react-strict-dom';
import { palette, radius, spacing } from '../../theme/tokens.css';
import { Typography } from '../Typography/Typography';

export interface TextFieldProps extends ComponentProps<typeof html.input> {
  startIcon?: ReactNode;
}

export function TextField({ style, startIcon, ...rest }: TextFieldProps) {
  return (
    <html.div style={styles.root}>
      {startIcon && <Typography style={styles.startIcon}>{startIcon}</Typography>}
      <html.input style={[styles.input, startIcon ? styles.startIconPadding : {}, style]} {...rest} />
    </html.div>
  );
}

const styles = css.create({
  root: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    width: '100%',
  },
  input: {
    backgroundColor: palette['background.paper'],
    borderRadius: radius.default,
    borderColor: {
      default: palette.divider,
      ':focus': palette['primary.main'],
      ':active': palette['primary.main'],
    },
    borderWidth: 2,
    caretColor: palette['primary.main'],
    color: palette.textPrimary,
    flex: 1,
    fontSize: '1rem',
    minWidth: 200,
    /** NOTE: Works on web */
    outlineColor: palette['primary.main'],
    padding: spacing.medium,
    width: 'inherit',
  },
  startIconPadding: {
    paddingLeft: spacing[7],
  },
  startIcon: {
    alignSelf: 'center',
    display: 'flex',
    left: spacing.medium,
    pointerEvents: 'none',
    position: 'absolute',
  },
});
