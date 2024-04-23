import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "taskManager",
  initialState: {
    tasks: JSON.parse(localStorage.getItem("tasks")) || [],
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({ name: action.payload, added_to_cart: false });
    },
    removeTask: (state, action) => {
      console.log("delete task", action.payload);
      state.tasks.splice(action.payload, 1);
    },
    toggleCart: (state, action) => {
      state.tasks[action.payload]["added_to_cart"] =
        !state.tasks[action.payload]["added_to_cart"];
    },
  },
});

export const { addTask, removeTask, toggleCart } = taskSlice.actions;

export default taskSlice.reducer;
