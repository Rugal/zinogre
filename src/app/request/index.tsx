import { PostApi, TorrentApi, UserApi } from "../../generated/openapi";
import { axiosInstance } from "./interceptor";

// openapi client connection
export const userApi = new UserApi(undefined, undefined, axiosInstance);
export const torrentApi = new TorrentApi(undefined, undefined, axiosInstance);
export const postApi = new PostApi(undefined, undefined, axiosInstance);
