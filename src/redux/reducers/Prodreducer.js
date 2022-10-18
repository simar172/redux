import { actionTypes } from "../constants/actionTypes";
const initialstate = {
  products: [],
};
export const prodReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case actionTypes.set_prods:
      return { ...state, products: payload };

    default:
      return state;
  }
};
export const selprod = (state = initialstate, { type, payload }) => {
  switch (type) {
    case actionTypes.set_selprods:
      return { ...state, ...payload };

    default:
      return state;
  }
};
