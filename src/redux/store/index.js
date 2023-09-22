import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import { encryptTransform } from "redux-persist-transform-encrypt";
import queryReducer from "../reducers/queryReducer";
// import favoritesReducer from "../reducers/favoritesReducer";
import artistReducer from "../reducers/artistReducer";
const persistConfig = {
  key: "root",
  storage,
  // transforms: [
  //   encryptTransform({
  //     secretKey: "ABCDEF",
  //   }),
  // ],
};

const rootReducer = combineReducers({
  artist: artistReducer,
  //   favorites: favoritesReducer,
  query: queryReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
