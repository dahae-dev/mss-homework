import { PropsWithChildren } from 'react';
import styled, { CSSProperties, DefaultTheme } from 'styled-components';

interface TextProps {
  color?: keyof DefaultTheme['colors'];
  size?: keyof DefaultTheme['fontStyles'];
  weight?: keyof DefaultTheme['fontWeights'];
  align?: CSSProperties['textAlign'];
  decoration?: CSSProperties['textDecoration'];
  transform?: CSSProperties['textTransform'];
  block?: boolean;
  lineClamp?: number;
}

// ====

const Root = styled.span<TextProps>`
  color: ${({ color, theme }) => (
    color
      ? theme.colors[color] 
      : 'inherit'
  )};
  font-size: ${({ size, theme }) => (
    size
      ? theme.fontStyles[size].fontSize
      : 'inherit'
  )};
  line-height: ${({ size, theme }) => (
    size
      ? theme.fontStyles[size].lineHeight
      : 'inherit'
  )};
  font-weight: ${({ weight, theme }) => (
    weight
      ? theme.fontWeights[weight] 
      : 'inherit'
  )};
  text-align: ${({ align }) => align || 'inherit'};
  ${({ decoration }) => decoration ? `text-decoration: ${decoration};` : ''}
  ${({ transform }) => transform ? `text-transform: ${transform};` : ''}
  ${({ block }) => block ? 'display: block;' : ''}
  ${({ lineClamp }) => (
    (lineClamp && lineClamp > 0)
      ? `
        display: -webkit-box;
        overflow: hidden;
        -webkit-line-clamp: ${lineClamp};
        -webkit-box-orient: vertical;
      `
      : ''
  )}
`;

const Text = ({
  color,
  size,
  weight,
  align,
  decoration,
  transform,
  block = false,
  lineClamp = 1,
  children,
}: PropsWithChildren<TextProps>) => (
  <Root
    color={color}
    size={size}
    weight={weight}
    align={align}
    decoration={decoration}
    transform={transform}
    block={block}
    lineClamp={lineClamp}
  >
    {children}
  </Root>
);

export default Text;
export type {
  TextProps,
};
