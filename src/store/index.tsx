import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import PostReducer from "./post";
import SystemReducer from "./system";
import UserReducer from "./user";

export const USER_LOGOUT = "user/logout/POST";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["system", "user"], // only navigation will be persisted
};

const appReducer = combineReducers({
  post: PostReducer,
  system: SystemReducer,
  user: UserReducer,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === USER_LOGOUT) {
    state = undefined;
  }
  return appReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware()));
export const persistor = persistStore(store);
