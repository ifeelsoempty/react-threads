import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import threadReducer from "./threadSlice";
import storage from "redux-persist/lib/storage";

const STORAGE_NAME = "react-threads";

const reducers = combineReducers({
  threadSlice: threadReducer,
});

const persistedReducer = persistReducer(
  {
    key: STORAGE_NAME,
    storage,
  },
  reducers
);

export const store = configureStore({
  reducer: persistedReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
