import { PropsWithChildren } from 'react';
import styled  from 'styled-components';

interface PageProps {
  className?: string;
}

// ====

const Root = styled.div`
  flex: 1;
  max-width: 100%;
  min-width: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Topbar = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
`;

const Body = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: scroll;
`;

const Page = ({
  className,
  children,
}: PropsWithChildren<PageProps>) => (
  <Root
    className={`page${className ? ` ${className}` : ''}`}
  >
    {children}
  </Root>
);

Page.Topbar = Topbar;
Page.Body = Body;

export {
  Topbar,
  Body,
};
export default Page;
