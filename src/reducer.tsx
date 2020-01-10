import axios from "axios";
import { applyMiddleware, combineReducers, createStore } from "redux";
import axiosMiddleware from "redux-axios-middleware";

import { PostReducer, SystemReducer } from "./store";

const client = axios.create({
  baseURL: process.env.REACT_APP_HOST,
  responseType: "json",
});

export const rootReducer = combineReducers({
  post: PostReducer,
  system: SystemReducer,
});

const store = createStore(rootReducer, applyMiddleware(axiosMiddleware(client)));

export default store;
