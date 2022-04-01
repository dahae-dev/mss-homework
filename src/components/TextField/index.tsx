import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { px } from 'styled-components-spacing';

type TextFieldProps = InputHTMLAttributes<HTMLInputElement>;

const Input = styled.input`
  width: 100%;
  min-height: ${({ theme }) => theme.heights.inputField};
  outline: none;
  font-size: ${({ theme }) => theme.fontStyles.m.fontSize};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray5};
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray6};
  }
  ${px(2)}
`;

const TextField = ({
  ...props
}: TextFieldProps) => {
  return (
    <Input 
      type="text"
      {...props} 
    />
  );
};

export default TextField;
export type {
  TextFieldProps,
};
