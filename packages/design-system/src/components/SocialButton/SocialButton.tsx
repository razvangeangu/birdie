import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';
import { css } from 'react-strict-dom';
import { black, white } from '../../theme/colors.css';
import { Button, ButtonProps } from '../Button/Button';

export interface SocialButtonProps extends Omit<ButtonProps, 'variant'> {
  variant: 'google' | 'apple';
}

export function SocialButton({ variant, ...rest }: SocialButtonProps) {
  return (
    <Button variant="text" style={styles[variant]} {...rest}>
      {variant === 'google' && (
        <Svg width={24} height={24} viewBox="0 0 24 24">
          <G clipPath="url(#a)">
            <Path
              fill="#4285F4"
              d="M23.745 12.27c0-.79-.07-1.54-.19-2.27h-11.3v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82Z"
            />
            <Path
              fill="#34A853"
              d="M12.255 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96h-3.98v3.09C3.515 21.3 7.565 24 12.255 24Z"
            />
            <Path
              fill="#FBBC05"
              d="M5.525 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62h-3.98a11.86 11.86 0 0 0 0 10.76l3.98-3.09Z"
            />
            <Path
              fill="#EA4335"
              d="M12.255 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C18.205 1.19 15.495 0 12.255 0c-4.69 0-8.74 2.7-10.71 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96Z"
            />
          </G>
          <Defs>
            <ClipPath id="a">
              <Path fill="#fff" d="M0 0h24v24H0z" />
            </ClipPath>
          </Defs>
        </Svg>
      )}

      {variant === 'apple' && (
        <Svg width={24} height={24} viewBox="0 0 24 24">
          <Path
            fill="#fff"
            d="M20.914 8.182c-.139.108-2.596 1.492-2.596 4.572 0 3.561 3.127 4.821 3.22 4.852-.014.077-.496 1.726-1.648 3.406-1.028 1.478-2.1 2.954-3.732 2.954-1.632 0-2.052-.948-3.936-.948-1.836 0-2.49.98-3.982.98-1.493 0-2.534-1.368-3.732-3.048C3.121 18.977 2 15.912 2 13.003c0-4.665 3.034-7.14 6.02-7.14 1.586 0 2.908 1.042 3.904 1.042.948 0 2.426-1.104 4.231-1.104.684 0 3.142.062 4.76 2.38Zm-5.616-4.356c.747-.886 1.275-2.115 1.275-3.344 0-.17-.015-.343-.046-.482-1.214.046-2.659.809-3.53 1.82-.684.777-1.323 2.006-1.323 3.251 0 .187.032.375.046.435.077.014.202.03.326.03 1.09 0 2.46-.729 3.252-1.71Z"
          />
        </Svg>
      )}
    </Button>
  );
}

const styles = css.create({
  google: {
    backgroundColor: white.default,
  },
  apple: {
    backgroundColor: black.default,
  },
});
