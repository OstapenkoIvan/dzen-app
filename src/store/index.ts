import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import { productsReducer } from "./products";
import { IInitialProductsState } from "../types";

const persistSession = {
  key: "session",
  storage,
  whitelist: ["orders", "products"],
};

const store = configureStore({
  reducer: {
    tracks: persistReducer<IInitialProductsState, any>(
      persistSession,
      productsReducer
    ),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === "development",
});

const persistedStore = persistStore(store);
export { store, persistedStore };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
