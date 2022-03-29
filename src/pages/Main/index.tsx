import styled from 'styled-components';

const Root = styled.div`
  background-color: ${({ theme })=> theme.colors.gray1};
`;

const Main = () => {
  return (
    <Root>App</Root>
  );
};

export default Main;
