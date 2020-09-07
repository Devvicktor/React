 /* eslint-disable */

import React from 'react';
import { Link } from 'react-router-dom';
import ProductAlerts from '../components/ProductAlerts';



import {products} from '../Utils/products';


const ProductList = ({ name }) => {
  const Buy = () => {
    window.alert('Added to cart');
  }

  const onNotify = () => {
    window.alert('You will be notified when the product goes on sale');
  }

  return (
    <div className="product-list">
      <h2>My Groceries</h2>

      {products.map(product => {
        return (
          <div className="products" key={product.id}>
            <h3>
              <a title={`${product.type1} details`} href="#">
                { product.type1 }
              </a>
            </h3>
  <Link to={`/post/${product.id}`}><img src={product.images} /></Link>

            <h3>
              <a title={`${product.quantity} details`} href="#">
               Quantity { product.quantity }
              </a>
            </h3>
            <h3>
              <a title={`${product.price} details`} href="#">
                Ksh.{ product.price }
              </a>
            </h3>
            {product.veges && <p>{`Type: ${product.veges}`}</p>}
            {product.fruits && <p>{`Type: ${product.fruits}`}</p>}

            <button onClick={Buy} style={{float:'right'}}>
              Add to cart
            </button>
            <ProductAlerts product={product} notify={onNotify} />

          </div>
        )
      })}
    </div>
  )
};

export default ProductList;

