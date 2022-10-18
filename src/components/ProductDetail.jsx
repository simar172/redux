import axios from "axios";
import style from "./style.module.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { set_Selprods } from "../redux/actions/Productactions";
export default function ProductDetail() {
  const sel = useSelector((state) => state.product);
  const { id, title, image, price, category } = sel;
  const { idx } = useParams();
  console.log(sel);
  const dispatch = useDispatch();
  const dt = async () => {
    const d = await axios.get(`https://fakestoreapi.com/products/${idx}`);
    dispatch(set_Selprods(d.data));
  };

  useEffect(() => {
    dt();
  }, [idx]);

  return (
    <div className={style.crt} align="center">
      <img src={image} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{category}</p>
        <span href="#" class={`badge text-bg-dark `}>
          ${price}
        </span>
      </div>
      <br />
      <button type="button" class={`btn btn-success ${style.btn}`}>
        Buy Now
      </button>
    </div>
  );
}
