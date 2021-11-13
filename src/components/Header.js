import { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../context/CartContext";

import "./Header.scss";

export const Header = () => {
  const { cart } = useContext(CartContext);

  return (
    <header className="header shadow">
      <div className="brand">
        <Link to="/">React Ecommerce</Link>
      </div>
      <div className="actions">
        <img
          className="cart-icon"
          src="/assets/images/shopping-cart.png"
          alt="Cart"
        />
        <span className="cart-info"> {cart.length} </span>
      </div>
    </header>
  );
};
