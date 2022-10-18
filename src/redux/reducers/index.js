import { combineReducers } from "redux";
import { prodReducer, selprod } from "./Prodreducer";
export const prodRed = combineReducers({
  all: prodReducer,
  product: selprod,
});
