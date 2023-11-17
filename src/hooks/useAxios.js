import { useState, useEffect, useRef } from "react";

export function useAxios(configRequest) {
  const { axiosInstance, method, url, otherConfig = {} } = configRequest;

  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const effectRun = useRef(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(
    () => {
      const controller = new AbortController();

      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await axiosInstance[method](url, {
            ...otherConfig,
            signal: controller.signal,
          });
          console.log(response.data);
          setData(response.data);
        } catch (error) {
          console.log(error.message);
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };

      if (effectRun.current) {
        fetchData();
      }

      return () => {
        controller.abort();
        effectRun.current = true;
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return [data, error, loading];
}
