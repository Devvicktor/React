import React, { Fragment }  from 'react';
import { Link } from 'react-router-dom';

const TopBar = () => {
  return (
  <div className="app-top-bar">
      <input type="text" placeholder="Search.." className='searchBar'/>
    <Link to="/">
      <h1 className="grocery"> Green Grocery</h1>
    </Link>
    <Link className="button fancy-button" to="/Login">
      <i className="material-icons"></i>Login
    </Link>
    <Link className="button fancy-button" to="/Register">
      <i className="material-icons"></i>Register
    </Link>
    <Link className="button fancy-button" to="/ShoppingCart">
      <i className="material-icons">shopping_cart</i>Checkout
    </Link>
  </div>
  )
};

export default TopBar;