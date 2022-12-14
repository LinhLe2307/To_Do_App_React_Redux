import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    search: "",
  },
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Math.random(),
        ...action.payload,
      };
      state.todos.push(newTodo);
    },
    editTodo: (state, action) => {
      const newTodo = action.payload;
      const todoIndex = state.todos.findIndex((todo) => todo.id === newTodo.id);
      if (todoIndex >= 0) {
        // state = state.splice(todoIndex, 1, action.payload)
        state[todoIndex] = newTodo;
      }
    },
    removeTodo: (state, action) => {
      const removeTodoId = action.payload;
      state = state.todos.filter((todo) => removeTodoId !== todo.id); // we clone a new array
      return state; // have to return the new array
    },
    search: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { addTodo, editTodo, removeTodo, search } = todoSlice.actions;
export default todoSlice.reducer;
