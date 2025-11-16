import { css, html } from 'react-strict-dom';
import { palette } from '../../theme/tokens.css';

export function Divider() {
  return <html.div style={styles.root} />;
}

const styles = css.create({
  root: {
    borderColor: palette['divider'],
    borderStyle: 'solid',
    borderWidth: 1,
    flex: 1,
  },
});
