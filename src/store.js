import { configureStore } from "@reduxjs/toolkit";
import { calculatorReducer } from "./redux/reducers/calculator.reducer";
const store = configureStore({
  reducer: { calculatorReducer },
});
export default store;
