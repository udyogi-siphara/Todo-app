import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { todosReducer } from "./todoSlice";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export const useAppDispatch = () => useDispatch();

export default store;