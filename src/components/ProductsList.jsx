import React from "react";
import { useEffect } from "react";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { set_Prods } from "../redux/actions/Productactions";

export default function ProductsList() {
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();
  const alld = async () => {
    const link = "https://fakestoreapi.com/products";
    const d = await axios.get(link);
    dispatch(set_Prods(d.data));
    // console.log(d);
  };
  // console.log(selector)
  useEffect(() => {
    alld();
  }, []);

  return (
    <div align="center">
      <ProductComponent />
    </div>
  );
}
