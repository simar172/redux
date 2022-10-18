import { actionTypes } from "../constants/actionTypes";

export const set_Prods = (products) => {
  return {
    type: actionTypes.set_prods,
    payload: products,
  };
};
export const set_Selprods = (product) => {
  return {
    type: actionTypes.set_selprods,
    payload: product,
  };
};
