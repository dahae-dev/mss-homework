import { PropsWithChildren } from 'react';
import styled, { CSSProperties, DefaultTheme } from 'styled-components';
import { px, mx } from 'styled-components-spacing';

interface PartitionProps {
  valign?: CSSProperties['alignItems'];
  halign?: CSSProperties['justifyContent'];
  spacing?: keyof DefaultTheme['spacing'];
}

interface PartitionSectioinProps {
  minWidth?: CSSProperties['width'];
  textAlign?: CSSProperties['textAlign'];
}

// ====

const Root = styled.div<PartitionProps>`
  display: flex;
  align-items: ${({ valign }) => valign};
  justify-content: ${({ halign }) => halign};
  & > * {
    ${({ spacing }) => (spacing ? px(spacing) : '')};
  }
  ${({ spacing }) => (spacing ? mx(-spacing) : '')};
`;

const Main = styled.div<PartitionSectioinProps>`
  flex-grow: 1;
  flex-basis: auto;
  width: auto;
  max-width: none;
  ${({ minWidth }) => minWidth && `min-width: ${typeof minWidth === 'number' ? `${minWidth}px` : minWidth};`}
  ${({ textAlign }) => textAlign && `text-align: ${textAlign}`}
`;

const Side = styled.div<PartitionSectioinProps>`
  flex-grow: 0;
  flex-basis: auto;
  width: auto;
  max-width: none;
  ${({ minWidth }) => `min-width: ${typeof minWidth === 'number' ? `${minWidth}px` : minWidth};`}
  ${({ textAlign }) => textAlign && `text-align: ${textAlign}`}
`;

const Partition = ({
  valign = 'baseline',
  halign = 'flex-start',
  spacing = 1,
  children,
}: PropsWithChildren<PartitionProps>) => (
  <Root
    valign={valign}
    halign={halign}
    spacing={spacing}
  >
    {children}
  </Root>
);

Partition.Main = Main;
Partition.Side = Side;

export default Partition;
export type {
  PartitionProps,
};
