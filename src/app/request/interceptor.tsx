import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import Constant from "../../constant";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_HOST,
});

const isHandlerEnabled = (config: AxiosRequestConfig) => config.headers.handlerEnabled;

const requestHandler = (request: AxiosRequestConfig) => {
  if (isHandlerEnabled(request)) {
    /**
     * Need to inject JWT from store
     * Go back to index if no JWT found
     */
    request.headers[Constant.AUTHORIZATION] = "";
  }
  return request;
};

const errorHandler = (error: any) => {
  if (isHandlerEnabled(error.config)) {
    // Handle responses
  }
  return Promise.reject({ ...error });
};

const successHandler = (response: AxiosResponse) => {
  if (isHandlerEnabled(response.config)) {
    // Handle responses
  }
  return response;
};

axiosInstance.interceptors.request.use(
  (request) => requestHandler(request),
);

axiosInstance.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorHandler(error),
);
