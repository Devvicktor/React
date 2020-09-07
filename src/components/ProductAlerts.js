import React from 'react';


const ProductAlerts = ({ product:{price}, notify }) => {
  let productAlerts;

  if (price > 700) {
    productAlerts = <p>
      <button onClick={notify}>Notify Me</button>
    </p>;
  }

  return <div className="product-alerts">{productAlerts}</div>
};

export default ProductAlerts;
