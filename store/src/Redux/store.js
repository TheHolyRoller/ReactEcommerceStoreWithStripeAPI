


import { configureStore, createSlice } from "@reduxjs/toolkit";
const store = configureStore({
  reducer: {
    // Define a slice for the refs state
    refs: createSlice({
      name: "refs",
      initialState: [],
      reducers: {
        // Define a reducer for setting the refs
        setRefs(state, action) {
          return action.payload;
        },
      },
    }).reducer,
  },
});