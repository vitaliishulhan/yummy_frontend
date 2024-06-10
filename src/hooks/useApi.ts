/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { AxiosResponse } from "axios";
import { useEffect, useState, useCallback } from "react";

const FETCH_TRIES_LIMIT = 3;

// const sleep = async (time: number) => new Promise((res, rej) => setTimeout(res, time));

const useApi = <T extends (...args: any) => Promise<AxiosResponse<any, any>>>(apiCall: T, apiParams: Parameters<T>) => {
  const [tries, setTries] = useState(0);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Awaited<ReturnType<T>>['data'] | null>(null);
  const [error, setError] = useState<unknown>(null);
  const [oldApiParams, setOldApiParams] = useState<Parameters<T> | null>();

  const apiCallback = useCallback(async () => {
    const res = await apiCall(...apiParams);
    return res;
  }, [apiCall, apiParams]);

  useEffect(() => {
    if (JSON.stringify(oldApiParams) !== JSON.stringify(apiParams)) {
      apiCallback().then((res) => {
        setData(res?.data || null);
        setLoading(false);
      }).catch((e: Error) => {
        console.error(e);
        setError(e);
      });

      setOldApiParams(apiParams);
    }
  }, [apiCallback, apiParams, oldApiParams]);

  return {
    loading,
    data,
    error,
  };
};

export default useApi;