import axios, { AxiosError, AxiosInstance, AxiosResponse, CreateAxiosDefaults, Method } from 'axios';
import handleError from './handleError';

export const getToken = () => localStorage.getItem('token') || '';
export const setToken = (val?: string) => val 
  ? localStorage.setItem('token', val)
  : localStorage.removeItem('token');

export class WebHttp {
  private httpClient: AxiosInstance;

  constructor(config?: CreateAxiosDefaults<any>) {
    const instance = axios.create(config);
    
    instance.interceptors.request.use(
      config => {
        const token = getToken();
        if(token)
          config.headers['Authorization'] = `Jwt ${token}`;
        return config;
      },
      error => {
        return Promise.reject(error);
      }
    );

    this.httpClient = instance;
  }
  
  public handleRequest<T>(url: string, method: Method, params?: any): Promise<AxiosResponse<T>> {
    const res = this.httpClient.request<T>({
      url,
      method,
      ...(params ?? {})
    }).catch((e: AxiosError) => {
      handleError(e);
      return Promise.reject(e)
    });
    
    return res;
  }

  public get<T>(url: string, params?: any): Promise<AxiosResponse<T>> {
    return this.handleRequest(url, 'GET', { params: params });
  }

  public post<T>(url: string, params?: any): Promise<AxiosResponse<T>> {
    return this.handleRequest(url, 'POST', { data: params });
  }
}

export default new WebHttp();
