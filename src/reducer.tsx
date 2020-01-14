import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { PostReducer, SystemReducer, UserReducer } from "./store";

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

export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware()));
export const persistor = persistStore(store);
