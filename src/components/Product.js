import { useState, useContext } from "react";

import { CartContext } from "../context/CartContext";

import "./Product.scss";

export const Product = ({ product }) => {
  const [productItem, setProductItem] = useState(product);

  const { addToCart, removeFromCart } = useContext(CartContext);

  const addProductToCart = () => {
    if (!productItem.isAdded) {
      setProductItem({ ...productItem, isAdded: true });
      addToCart(productItem);
    }
  };

  const removeProductFromCart = () => {
    setProductItem({ ...productItem, isAdded: false });
    removeFromCart(productItem.id);
  };

  return (
    <div className="product">
      <div className="details">
        <h1 className="title">{productItem.title}</h1>
        <div className="rating">
          <img src="/assets/images/star.png" alt="Star" /> {productItem.rating}
        </div>
      </div>
      <div className="price-actions">
        <div className="price">BDT {productItem.price}</div>
        <div>
          <button
            onClick={addProductToCart}
            className={productItem.isAdded ? "added" : "default"}
          >
            {productItem.isAdded ? "Added" : "Add to cart"}{" "}
          </button>
          {productItem.isAdded && (
            <button onClick={removeProductFromCart} className="remove">
              Remove from cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
