import { configureStore } from "@reduxjs/toolkit";
import popup from "./slices/popup-slice";

const store = configureStore({
  reducer: {
    popup,
  },
});

export default store;
