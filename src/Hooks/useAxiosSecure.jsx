import { useEffect } from "react";
import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "http://http://localhost:5000/",
});

const useAxiosSecure = () => {
  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      (error) => {
        return Promise.reject(error);
      }
    );
  }, []);

  return [axiosSecure];
};

export default useAxiosSecure;
