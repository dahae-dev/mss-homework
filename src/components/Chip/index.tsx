import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { px, py } from 'styled-components-spacing';

import Stack from 'components/Stack';
import Text from 'components/Text';

interface ChipProps extends HTMLAttributes<HTMLDivElement> {
  selected?: boolean;
  active?: boolean;
  disabled?: boolean;
  suffix?: React.ReactNode;
}

const Root = styled.div<ChipProps>`
  display: inline-block;
  ${({ active, theme }) => (
    active
      ? `
        background-color: ${theme.colors.accent};
        border: 1px solid ${theme.colors.accent};
      `
      : `
        background-color: ${theme.colors.white};
        border: 1px solid ${theme.colors.gray4};
      `
  )}
  box-sizing: border-box;
  border-radius: 18px;
  text-align: center;
  cursor: pointer;
  ${px(2)}
  ${py(0.75)}
`;

const Chip = ({
  selected = false,
  active = false,
  disabled = false,
  suffix = null,
  children,
  ...props
}: React.PropsWithChildren<ChipProps>) => {
  return (
    <Root
      selected={selected}
      active={active}
      disabled={disabled}
      {...props}
    >
      <Stack spacing={0.75} valign="center">
        <Text
          color={
            (selected && 'accent')
              || (active && 'white')
              || 'black'
          }
          size="m"
        >
          {children}
        </Text>
        {suffix}
      </Stack>
    </Root>
  );
};

export default Chip;
export type {
  ChipProps,
};
