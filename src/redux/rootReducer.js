import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer/counterReducer";
import { postsReducer } from "./postsReducer/postsReducer";

export const rootReducer = combineReducers({
  counterReducer,
  postsReducer,
});
