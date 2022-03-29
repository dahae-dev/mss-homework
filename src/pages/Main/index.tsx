import styled from 'styled-components';

import Align from 'components/Align';
import Spinner from 'components/Spinner';
import Topbar from 'components/Topbar';

import { useList } from './queries';

const Root = styled.div`
  flex: 1;
  max-width: 100%;
  min-width: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Divider = styled.div`
  height: ${({ theme }) => theme.heights.divider};
  background-color: ${({ theme }) => theme.colors.gray3};
`;

const Body = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: scroll;
`;

const ItemWrapper = styled.div``;

const Main = () => {
  const { data, isLoading } = useList();
  const { list } = data || {};
  return (
    <Root>
      <Topbar />
      <Divider />
      <Body>
        {
          isLoading
            ? (
              <Align horizontal="center" vertical="center">
                <Spinner
                  loading={isLoading}
                  size={60}
                  css=""
                  speedMultiplier={1}
                />
              </Align>
            )
            : (
              list?.map((item) => (
                <ItemWrapper key={item.goodsNo}>
                  {item.goodsNo}
                </ItemWrapper>
              ))
            )
        }
      </Body>
    </Root>
  );
};

export default Main;
