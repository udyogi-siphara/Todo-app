import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { todosReducer } from "./todoSlice";
import { userReducer } from './userSlice'

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    user: userReducer
  },
});

export const useAppDispatch = () => useDispatch();

export default store;