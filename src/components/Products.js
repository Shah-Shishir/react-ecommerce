import { Product } from "./Product";

import "./Products.scss";

export const Products = () => {
  const products = [
    {
      id: 1,
      title: "HD Monitor",
      rating: 4.5,
      price: 9000,
      isAdded: false,
    },
    {
      id: 2,
      title: "Ultra Keyboard",
      rating: 4.7,
      price: 2000,
      isAdded: false,
    },
    {
      id: 3,
      title: "Bluetooth Mouse",
      rating: 4.2,
      price: 1000,
      isAdded: false,
    },
    {
      id: 4,
      title: "16 GB RAM",
      rating: 4.3,
      price: 8000,
      isAdded: false,
    },
    {
      id: 5,
      title: "256 GB SSD",
      rating: 4.6,
      price: 6000,
      isAdded: false,
    },
  ];

  return (
    <div className="product-list">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};
