import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    list: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.list.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },
    removeTask: (state, action) => {
      state.list = state.list.filter(task => task.id !== action.payload);
    },
    toggleTask: (state, action) => {
      const task = state.list.find(task => task.id === action.payload);
      if (task) task.completed = !task.completed;
    },
  },
});

export const { addTask, removeTask, toggleTask } = taskSlice.actions;
export default taskSlice.reducer;
