import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { px } from 'styled-components-spacing';

import BasePartition from 'components/Partition';

interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'prefix'> {
  className?: string;
  prefix?: React.ReactNode;
}

const Root = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.gray5};
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  ${px(2)}
`;

const Partition = styled(BasePartition)`
  width: 100%;
`;

const PartitionMain = styled(BasePartition.Main)`
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  outline: none;
  border: none;
  min-height: ${({ theme }) => theme.heights.inputField};
  font-size: ${({ theme }) => theme.fontStyles.m.fontSize};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray6};
  }
`;

const TextField = ({
  className = '',
  prefix = null,
  ...props
}: TextFieldProps) => {
  return (
    <Root className={className}>
      <Partition spacing={0.5} valign="center">
        <Partition.Side>
          {prefix}
        </Partition.Side>
        <PartitionMain>
          <Input 
            type="text"
            {...props} 
          />
        </PartitionMain>
      </Partition>
    </Root>
  );
};

export default TextField;
export type {
  TextFieldProps,
};
