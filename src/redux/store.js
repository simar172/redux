import { createStore } from "redux";
import { prodRed } from "./reducers/index";

const store = createStore(
  prodRed,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
