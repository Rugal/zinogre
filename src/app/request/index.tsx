import { PostApi, TorrentApi, UserApi } from "../../generated/openapi";
import { axiosInstance } from "./interceptor";

const host = process.env.REACT_APP_HOST;

export const userApi = new UserApi(undefined, host, axiosInstance);
export const torrentApi = new TorrentApi(undefined, host, axiosInstance);
export const postApi = new PostApi(undefined, host, axiosInstance);
