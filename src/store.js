import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/userSllice";

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});
