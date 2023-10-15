import httpClient from 'utils/request';
import * as IndexModel from './model/index.model'
import { PageResult } from './model/base.model'
import { handleLoading, handleResponse } from 'utils/request/handleResponse';
import { useGlobalStore } from 'store/index';

/**
 * auth
 * @param 
 * @returns 
 */
export const auth = (data: IndexModel.AuthReqData) => 
  handleLoading(httpClient.post<IndexModel.AuthResData>('/api/dsz-api/auth', data))
    .then(handleResponse)
    .then(res => {
      if(res.token) {
        const store = useGlobalStore()
        store.setToken(res.token)
      }
    });

/**
 * auth
 * @param 
 * @returns 
 */
export const getProducts = (data: IndexModel.ProductReqData) => 
  handleLoading(httpClient.get<PageResult<IndexModel.Product[]>>('/api/dsz-api/products', data))
    .then(handleResponse);

