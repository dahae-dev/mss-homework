import { PropsWithChildren } from 'react';
import styled, { DefaultTheme, CSSProperties } from 'styled-components';
import { ml, mt } from 'styled-components-spacing';

interface StackProps {
  spacing?: keyof DefaultTheme['spacing'];
  valign?: CSSProperties['alignItems'];
  halign?: CSSProperties['justifyContent'];
  wrap?: boolean;
}

// ====

const Root = styled.div<Omit<StackProps, 'wrap'> & {
  $wrap: boolean
}>`
  display: flex;
  align-items: ${({ valign }) => valign};
  justify-content: ${({ halign }) => halign};
  ${({ $wrap }) => (
    $wrap 
      ? 'flex-wrap: wrap;'
      : 'flex-wrap: nowrap;'
  )}
  ${({ spacing, $wrap }) => ((spacing && $wrap) ? mt(-spacing) : '')}
  & > *:not(:first-child) {
    ${({ spacing }) => ml(spacing)}
    ${({ spacing, $wrap }) => $wrap && mt(spacing)}
  }
`;

const Stack = ({
  spacing = 1,
  valign = 'stretch',
  halign = 'flex-start',
  wrap = false,
  children,
}: PropsWithChildren<StackProps>) => (
  <Root
    spacing={spacing}
    valign={valign}
    halign={halign}
    $wrap={wrap}
  >
    {children}
  </Root>
);

export default Stack;
