import React, { useRef } from 'react';
import styled from 'styled-components';
import { px } from 'styled-components-spacing';

import Align from 'components/Align';
import Img from 'components/Img';
import ItemCard from 'components/ItemCard';
import Page from 'components/Page';
import Spinner from 'components/Spinner';
import useIntersectionObservser from 'hooks/useIntersectionObserver';
import Logo from 'statics/images/logo.svg';

import { useItemList } from './queries';

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ theme })=> theme.heights.topbar};
  min-height: ${({ theme })=> theme.heights.topbar};
  color: ${({ theme }) => theme.colors.white};
  z-index: ${({ theme }) => theme.zIndexes[1]};
  ${px(1.5)}
`;

const Divider = styled.div`
  height: ${({ theme }) => theme.heights.divider};
  background-color: ${({ theme }) => theme.colors.gray3};
`;

const ItemList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const ItemCardWrapper = styled.div`
  flex-basis: 50%;
  max-width: 50%;
`;

const LoadMoreSection = styled.div`
  display: flex;
  justify-content: center;
`;

const Main = () => {
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useItemList();
  console.log(hasNextPage);
  const { pages = [] } = data || {};

  const loadMoreRef = useRef<HTMLDivElement>(null);
  useIntersectionObservser({
    target: loadMoreRef,
    onIntersect: fetchNextPage,
    enabled: !!hasNextPage,
  });

  return (
    <Page>
      <Page.Topbar>
        <LogoWrapper>
          <Img
            src={Logo}
            alt="musinsa-logo"
          />
        </LogoWrapper>
        filter box
        <Divider />
      </Page.Topbar>
      <Page.Body>
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
              isError 
                ? (
                  <Align horizontal="center" vertical="center">
                    Unexpected Error    
                  </Align>
                )
                : (
                  <ItemList>
                    {
                      pages?.map((page, index) => (
                        <React.Fragment key={index}>
                          {
                            page.list.map((item) => (
                              <ItemCardWrapper key={item.goodsNo}>
                                <ItemCard item={item} />
                              </ItemCardWrapper>
                            ))
                          }
                        </React.Fragment>
                      ))
                    }
                    <LoadMoreSection
                      ref={loadMoreRef}
                    >
                      {
                        isFetchingNextPage
                          ? (
                            <Spinner
                              loading={isFetchingNextPage}
                              size={20}
                              css=""
                              speedMultiplier={1}
                              color="gray7"
                            />
                          )
                          : hasNextPage
                            ? 'Load more'
                            : null
                      }
                    </LoadMoreSection>
                  </ItemList>
                )
            )
        }
      </Page.Body>
    </Page>
  );
};

export default Main;
