import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const todoToUpdate = state.find(todo => todo.id === id);
      if (todoToUpdate) {
        todoToUpdate.text = text;
      }
    },
    removeTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload);
    },
  },
});

export const { addTodo, updateTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
