import React from "react";
import { useSelector } from "react-redux";
import style from "./style.module.css";
import { Link } from "react-router-dom";
export default function ProductComponent() {
  const sel = useSelector((state) => state.all.products);
  console.log(sel);

  // console.log(image)
  const li = sel.map((product) => {
    const { id, title, image, price, category } = product;
    console.log(image);

    return (
      <div className={style.crd}>
        <Link to={`product/${id}`}>
          <img src={image} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">{category}</p>
            <span href="#" class="badge text-bg-dark">
              ${price}
            </span>
          </div>
        </Link>
      </div>
    );
  });
  return <div className="row">{li}</div>;
}
