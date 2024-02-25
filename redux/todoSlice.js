import { createSlice } from "@reduxjs/toolkit";
import {
  createTodo,
  deleteTodo,
  updateTodo,
  readTodo,
} from "../repository/todoRepository";


export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
    createTodo({
        title: action.payload.title,
      });
      state.todos = readTodo();
      alert("Task added successfully");
    },
    updateTodo: (state, action) => {
      updateTodo({
        title: action.payload.title,
      });
      state.todos = readTodo();
      alert("Task updated successfully");
    },
    deleteTodo: (state, action) => {
      deleteTodo(action.payload);
      state.todos = readTodo();
      alert("Task deleted successfully");
    },
    fetchTodos: () => {
      readTodo();
    },
    setTodo: (state, action) => {
      state.todos = action.payload;
      console.log(state.todos);    },
  },
});

export const { reducer: todosReducer, actions: todosActions } = todoSlice;