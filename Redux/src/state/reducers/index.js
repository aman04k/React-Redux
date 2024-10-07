 // reducers/index.js

import { combineReducers } from "redux";
import amountReducer from "./amountReducers";  // Make sure you're importing the correct reducer

// Combine the reducers
const reducers = combineReducers({
  amount: amountReducer, // This maps `amount` state to the `amountReducer`
});

export default reducers;
