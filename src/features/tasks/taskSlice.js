import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "taskManager",
  initialState: {
    tasks: JSON.parse(localStorage.getItem("tasks")),
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    removeTask: (state, action) => {
      console.log("delete task", action.payload);
      state.tasks.splice(action.payload, 1);
    },
  },
});

export const { addTask, removeTask } = taskSlice.actions;

export default taskSlice.reducer;
