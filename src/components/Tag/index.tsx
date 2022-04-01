import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { px, py } from 'styled-components-spacing';

import Stack from 'components/Stack';
import Text from 'components/Text';

interface TagProps extends HTMLAttributes<HTMLDivElement> {
  onRemove?: () => void;
  disabled?: boolean;
  className?: string;
}

// ====

const DeleteButton = styled.div`
  display: inline-block;
`;

const Root = styled.div<Pick<TagProps, 'disabled'>>`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  cursor: pointer;
  ${({ theme, disabled }) => (
    disabled
      ? `
      background-color: ${theme.colors.gray2};
      color: ${theme.colors.gray4};
      cursor: not-allowed;
    ` : ''
  )}
  ${px(1.25)}
  ${py(0.5)}
`;

const Tag = ({
  onRemove = (() => {}),
  disabled = false,
  className = '',
  children,
  ...props
}: React.PropsWithChildren<TagProps>) => (
  <Root
    className={className}
    disabled={disabled}
    {...props}
  >
    <Stack spacing={0.75} valign="center">
      <Text size="s">
        {children}
      </Text>
      {
        !disabled && (
          <DeleteButton
            onClick={onRemove}
          >
            x
          </DeleteButton>
        )
      }
    </Stack>
  </Root>
);

  
export default Tag;
export type {
  TagProps,
};
