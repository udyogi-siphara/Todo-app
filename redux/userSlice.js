import { createSlice } from "@reduxjs/toolkit";
import {
    createUser,
    readUser,
  } from "../repository/userRepository";

  export const userSlice = createSlice({
    name: 'user',
    initialState: {
      users:[],
      username:"",
      password:""
    },
    reducers: {
      addUser: (state, action) => {
        createUser({
            username: action.payload.username,
            password: action.payload.password,
        });
        state.users = readUser();
        alert("Registration success");
      },
      fetchUsers: () => {
        readUser();
      },
      setUser: (state, action) => {
        state.users = action.payload;
        console.log(state.users);
    },
    },
  });
  
  export const { reducer: userReducer, actions: userActions } = userSlice;