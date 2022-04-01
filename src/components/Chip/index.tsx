import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { px, py } from 'styled-components-spacing';

import Text from 'components/Text';

interface ChipProps extends HTMLAttributes<HTMLDivElement> {
  selected?: boolean;
  disabled?: boolean;
}

const Root = styled.div<ChipProps>`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray4};
  box-sizing: border-box;
  border-radius: 18px;
  text-align: center;
  cursor: pointer;
  ${px(2)}
  ${py(0.75)}
`;

const Chip = ({
  selected = false,
  disabled = false,
  children,
  ...props
}: React.PropsWithChildren<ChipProps>) => {
  return (
    <Root
      selected={selected}
      disabled={disabled}
      {...props}
    >
      <Text
        color={selected ? 'accent' : 'black'}
        size="m"
      >
        {children}
      </Text>
    </Root>
  );
};

export default Chip;
export type {
  ChipProps,
};
