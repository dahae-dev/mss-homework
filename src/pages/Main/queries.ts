import { useInfiniteQuery, UseInfiniteQueryResult } from 'react-query';

import api from 'services/api';
import type { IItem } from 'types';


interface IData {
  list: Array<IItem>
}

const getItemList = async ({ pageParam = 0 }): Promise<IData> => {
  const { data: result } = await api.get(`/goods${pageParam}.json`);
  return result.data;
};

const useItemList = (): UseInfiniteQueryResult<IData> => {
  return useInfiniteQuery('List', getItemList, {
    getNextPageParam: (lastPage, allPages) => {
      console.log('allPages: ', allPages);
      return (
        allPages.length <= 3
          ? allPages.length
          : null
      );
    },
  });
};

export { useItemList };


 