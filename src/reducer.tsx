import axios from "axios";
import { applyMiddleware, combineReducers, createStore } from "redux";
import axiosMiddleware from "redux-axios-middleware";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { PostReducer, SystemReducer, UserReducer } from "./store";

const client = axios.create({
  baseURL: process.env.REACT_APP_HOST,
  responseType: "json",
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["system", "user"], // only navigation will be persisted
};

const rootReducer = combineReducers({
  post: PostReducer,
  system: SystemReducer,
  user: UserReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(axiosMiddleware(client)));
export const persistor = persistStore(store);
