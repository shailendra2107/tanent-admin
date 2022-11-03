import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth";
import ValidationSlice from "./ValidationSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    validation: ValidationSlice.reducer,
  },
});

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
