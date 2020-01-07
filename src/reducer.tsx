import axios from "axios";
import { applyMiddleware, combineReducers, createStore } from "redux";
import axiosMiddleware from "redux-axios-middleware";

import PostReducer from "./store/post";

const client = axios.create({
  baseURL: process.env.REACT_APP_HOST,
  responseType: "json",
});

export const rootReducer = combineReducers({
  post: PostReducer,
});

const store = createStore(rootReducer, applyMiddleware(axiosMiddleware(client)));

export default store;
