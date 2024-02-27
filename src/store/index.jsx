
import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./slices/sideBarSlice";

export default configureStore({
  reducer: {
    sidebar: sidebarReducer,
  },
});
