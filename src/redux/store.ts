import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};
const ignoreRegisterMiddleware =
  () => (next: any) => (action: any) => {
    if (action.type !== "REGISTER") {
      return next(action);
    }
  };

export const store = configureStore({
  reducer: persistReducer(persistConfig, todoReducer),
  middleware: [ignoreRegisterMiddleware],
});

export const persister = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
