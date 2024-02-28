import { createSlice } from "@reduxjs/toolkit";


export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
    state.todos = [...state.todos, {title:action.payload.title}]
    alert("Task added successfully");
    },
    updateTodo: (state, action) => {
      let todosList= state.todos
      for (let i = 0; i < todosList.length; i++) {
       if (todosList[i].title==action.payload.prevTitle) {
         todosList[i].title = action.payload.afterTitle;
       }
        
      }
      state.todos=todosList;
      alert("Task updated successfully");
    },
    deleteTodo: (state, action) => {
      let todosList= state.todos
      for (let i = 0; i < todosList.length; i++) {
       if (todosList[i].title==action.payload.title) {
        todosList.splice(i, 1);
        break;
       }
      }
      state.todos=todosList;
      alert("Task deleted successfully");
    },
    fetchTodos: () => {
    },
    setTodo: (state, action) => {
      state.todos = action.payload;
      console.log(state.todos);    },
  },
});

export const { reducer: todosReducer, actions: todosActions } = todoSlice;