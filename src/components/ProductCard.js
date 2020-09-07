import React from "react";
import ProductAlerts from "./ProductAlerts";

const Buy = () => {
  window.alert("Added to cart");
};

const onNotify = () => {
  window.alert("You will be notified when the product goes on sale");
};
export default function Product({
  product: {type1, images, quantity, price, veges, fruits },
}) {
  return (
    <div className="products" >
      <h3>
        <a title={`${type1} details`} href="#">
          {type1}
        </a>
      </h3>

      <img src={images}></img>
      <h3>
        <a title={`${quantity} details`} href="#">
          Quantity::{quantity}
        </a>
      </h3>
      <h3>
        <a title={`${price} details`} href="#">
          Ksh.{price}
        </a>
      </h3>
      {veges && <p>{`Type: ${veges}`}</p>}
      {fruits && <p>{`Type: ${fruits}`}</p>}

      <button onClick={Buy} style={{ float: "right" }}>
        Add to cart
      </button>
      <ProductAlerts product={price} notify={onNotify} />
    </div>
  );
}
