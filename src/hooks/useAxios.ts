import { useState, useCallback } from 'react';
import axios, { AxiosRequestConfig, AxiosResponse, Method } from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://32ljmwsu27.execute-api.us-east-1.amazonaws.com',
});

// List of endpoints that DO NOT need auth
const noAuthRoutes = ['/login', '/register', '/forgot-password'];

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');

    const isNoAuth = noAuthRoutes.some((route) => config.url?.includes(route));

    if (!isNoAuth && token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

interface UseAxiosResponse<T> {
  data: T | null;
  error: string | null;
  loading: boolean;
  callAPI: (config?: AxiosRequestConfig) => Promise<void>;
}

const useAxios = <T>(
  url: string,
  method: Method = 'GET',
  requestData?: any,
  config: AxiosRequestConfig = {},
): UseAxiosResponse<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const callAPI = useCallback(
    async (overrideConfig?: AxiosRequestConfig) => {
      setLoading(true);
      setError(null);

      try {
        const response: AxiosResponse<T> = await axiosInstance({
          url,
          method,
          data: requestData,
          ...config,
          ...overrideConfig,
        });
        setData(response.data);
      } catch (err: any) {
        setError(err?.response?.data?.message || err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    },
    [url, method, requestData, config],
  );

  return { data, error, loading, callAPI };
};

export default useAxios;
