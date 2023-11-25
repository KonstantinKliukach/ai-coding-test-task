/* eslint-disable no-param-reassign */
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

import { API_HOST } from '../utils/constants';

export class ApiClient {
  private axiosInstance: AxiosInstance;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(baseURL: string, headers: any = {}) {
    this.axiosInstance = axios.create({
      // creating and keeping an instance with all default headers we need
      baseURL,
      headers: {
        ...headers,
        'Content-Type': 'application/json',
      },
    });
  }

  // private method with logic to check auth on every request or something
  private fetchWithToken = async <T>(url: string, options: AxiosRequestConfig) => {
    try {
      const { data } = await this.axiosInstance.request({ url, ...options });
      return data as T;
    } catch (error) {
      throw new Error();
    }
  };

  get = <T>(url: string, options?: AxiosRequestConfig): Promise<T> =>
    this.fetchWithToken<T>(url, {
      ...options,
      method: 'GET',
    });

  post = <T, K>(url: string, data: T, options?: AxiosRequestConfig): Promise<K> =>
    this.fetchWithToken(url, {
      ...options,
      data,
      method: 'POST',
    });
}

const client = new ApiClient(`${API_HOST}/api/`, {
  'Access-Control-Allow-Origin': '*',
});

export default client;
