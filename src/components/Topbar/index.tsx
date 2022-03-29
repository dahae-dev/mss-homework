import styled  from 'styled-components';
import { px } from 'styled-components-spacing';

import Img from 'components/Img';
import Logo from 'statics/images/logo.svg';

// ====

const Root = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ theme })=> theme.heights.topbar};
  min-height: ${({ theme })=> theme.heights.topbar};
  color: ${({ theme }) => theme.colors.white};
  z-index: ${({ theme }) => theme.zIndexes[1]};
  ${px(1.5)}
`;

const Topbar = () => (
  <Root>
    <Img
      src={Logo}
      alt="musinsa-logo"
    />
  </Root>
);

export default Topbar;
