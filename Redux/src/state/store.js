import { createStore, applyMiddleware } from "redux";  // Correct import for redux
import reducers from "./reducers/index.js";           // Adjust the path to match your folder structure
import {thunk} from "redux-thunk";                       // Correct import for redux-thunk

// Creating the Redux store
export const store = createStore(reducers, {}, applyMiddleware(thunk));
