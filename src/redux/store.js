import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./slices/dataSlice";
import modalReducer from "./slices/modalSlice";

export const store = configureStore({
  reducer: {
    data: dataReducer,
    modal: modalReducer,
  },
});
