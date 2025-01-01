import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = { input: "", lastIn: null };

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState: INITIAL_STATE,
  reducers: {
    addNum: (state, action) => {
      state.input += action.payload;
      state.lastIn = action.payload;
    },
    addOp: (state, action) => {
      state.input += " " + action.payload + " ";
      state.lastIn = action.payload;
    },
    clearInput: (state, action) => {
      state.input = "";
      state.lastIn = null;
    },
    equalsOutput: (state, action) => {
      state.input = action.payload;
      state.lastIn = action.payload;
    },
  },
});

export const calculatorReducer = calculatorSlice.reducer;
export const { addNum, addOp, clearInput, equalsOutput } =
  calculatorSlice.actions;
export const calculatorSelector = (state) => state.calculatorReducer;
