import React, { useRef, useState } from 'react';
import { Search, RefreshCw } from 'react-feather';
import styled from 'styled-components';
import { px, py } from 'styled-components-spacing';

import Align from 'components/Align';
import Chip from 'components/Chip';
import EmptyState from 'components/EmptyState';
import Img from 'components/Img';
import ItemCard from 'components/ItemCard';
import Page from 'components/Page';
import Partition from 'components/Partition';
import Spinner from 'components/Spinner';
import Stack from 'components/Stack';
import Tag from 'components/Tag';
import TextField from 'components/TextField';
import useDebounce from 'hooks/useDebounce';
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

const FilterWrapper = styled.div`
  ${px(1)}
  ${py(1.75)}
`;

const SearchWrapper = styled.div<{ hidden: boolean }>`
  ${px(2)}
  ${py(2.5)}
  ${({ hidden }) => hidden ? 'display: none;' : ''};
  background-color: ${({ theme }) => theme.colors.gray1};
  display: flex;
  justify-content: center;
`;

const TagWrapper = styled.div<{ hidden: boolean }>`
  ${px(2)}
  ${py(1.5)}
  ${({ hidden }) => hidden ? 'display: none;' : ''};
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
  height: 10px;
`;

const filters = [
  {
    id: 'isSaleOnly',
    name: '세일상품',
  },
  {
    id: 'isExclusiveOnly',
    name: '단독상품',
  },
  {
    id: 'isSoldOutIncluded',
    name: '품절포함',
  },
] as const;

const Main = () => {
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useItemList();
  const { pages = [] } = data || {};

  const loadMoreRef = useRef<HTMLDivElement>(null);
  useIntersectionObservser({
    target: loadMoreRef,
    onIntersect: fetchNextPage,
    enabled: !!hasNextPage,
  });

  const [
    selectedFilterIds,
    setSelectedFilterIds,
  ] = useState<Array<typeof filters[number]['id']>>([]);
  const [searchEnabled, setSearchEnabled] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');
  const debouncedSearchKeyword = useDebounce(searchKeyword, 500);

  const filteredPages = pages.map(({ list }) => ({
    list: list.filter((item) => {
      return (
        (selectedFilterIds.includes('isSaleOnly') ? !!item.isSale : true)
          && (selectedFilterIds.includes('isExclusiveOnly') ? !!item.isExclusive : true)
          && (!selectedFilterIds.includes('isSoldOutIncluded') ? !item.isSoldOut : true)
          && (
            searchEnabled 
              ? item.goodsName.toLowerCase().includes(
                debouncedSearchKeyword.toLowerCase(),
              )
              : true
          ) 
      );
    }),
  }));
  const isEmpty = filteredPages.every((page) => !page.list.length);

  return (
    <Page>
      <Page.Topbar>
        <LogoWrapper>
          <Img
            src={Logo}
            alt="musinsa-logo"
          />
        </LogoWrapper>
        <FilterWrapper>
          <Stack spacing={0.5} valign="center">
            <Chip
              active={searchEnabled}
              onClick={() => {
                setSearchEnabled(!searchEnabled);
                setSearchKeyword('');
              }}
              suffix={(
                <Search
                  color={searchEnabled ? 'white' : '#979797'}
                  size={12}
                />
              )}
            >
              검색
            </Chip>
            {
              filters.map((filter) => (
                <Chip
                  key={filter.id}
                  selected={selectedFilterIds.includes(filter.id)}
                  onClick={() => {
                    if (selectedFilterIds.includes(filter.id)) {
                      setSelectedFilterIds(selectedFilterIds.filter(
                        (selectedFilterId) => selectedFilterId !== filter.id,
                      ));
                    } else {
                      setSelectedFilterIds([
                        ...selectedFilterIds,
                        filter.id,
                      ]);
                    }
                  }}
                >
                  {filter.name}
                </Chip>
              ))
            }
          </Stack>
        </FilterWrapper>
        <SearchWrapper hidden={!searchEnabled}>
          <TextField
            name="search"
            placeholder="상품명 검색"
            value={searchKeyword}
            onChange={(e) => {
              setSearchKeyword(e.target.value);
            }}
            prefix={(
              <Search
                color="#979797"
                size={20}
              />
            )}
          />
        </SearchWrapper>
        <TagWrapper
          hidden={
            !(searchEnabled && debouncedSearchKeyword)
              && !selectedFilterIds.length
          }
        >
          <Partition spacing={1} valign="center">
            <Partition.Main>
              <Stack spacing={0.5} valign="center">
                {
                  (searchEnabled && debouncedSearchKeyword) && (
                    <Tag
                      onRemove={() => {
                        setSearchKeyword('');
                      }}
                    >
                      {debouncedSearchKeyword}
                    </Tag>
                  )
                }
                {
                  selectedFilterIds.map((selectedFilterId) => (
                    <Tag
                      key={selectedFilterId}
                      onRemove={() => {
                        setSelectedFilterIds(selectedFilterIds.filter(
                          (id) => id !== selectedFilterId,
                        ));
                      }}
                    >
                      {filters.find(
                        (filter) => filter.id === selectedFilterId,
                      )?.name}
                    </Tag>
                  ))
                }
              </Stack>
            </Partition.Main>
            <Partition.Side>
              <RefreshCw
                color="#979797"
                size={20}
                onClick={() => {
                  setSelectedFilterIds([]);
                  setSearchKeyword('');
                  setSearchEnabled(false);
                }}
              />
            </Partition.Side>
          </Partition>
        </TagWrapper>
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
                  isEmpty
                    ? (
                      <Align horizontal="center" vertical="center">
                        <EmptyState />
                      </Align>
                    )
                    : (
                      <ItemList>
                        {
                          filteredPages?.map((page, index) => (
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
                              : null
                          }
                        </LoadMoreSection>
                      </ItemList>
                    )
                )
            )
        }
      </Page.Body>
    </Page>
  );
};

export default Main;
