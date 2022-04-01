import { useQuery, UseQueryResult } from 'react-query';

import api from 'services/api';
import type { IItem } from 'types';


interface IData {
  list: Array<IItem>
}

const getList = async (): Promise<IData> => {
  const { data: result } = await api.get('/goods0.json');
  return result.data;
};

const useList = (): UseQueryResult<IData> => {
  return useQuery('List', getList);
};

export { useList };


 