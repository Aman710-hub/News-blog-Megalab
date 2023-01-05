import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "./features/news/newsSlice";
import userSlice from "./features/userSllice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    news: newsSlice,
  },
});
