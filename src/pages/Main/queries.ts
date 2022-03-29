import { useQuery, UseQueryResult } from 'react-query';

import api from 'services/api';

interface IItem {
  goodsNo: number;
  goodsName: string;
  price: number;
  brandName: string;
  imageUrl: string;
  linkUrl: string;
  brandLinkUrl: string;
  normalPrice: number;
  isSale: boolean;
  saleRate: number;
  isSoldOut: boolean;
  isExclusive: boolean;
}

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


 