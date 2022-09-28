import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [names, setName] = useState([]);
  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handleClick = (name) => {
    if (names.includes(name)) {
      alert("already exists");
      return;
    }
    const newName = [...names, name];
    setName(newName);
  };
  return (
    <div className="shop">
      <div className="products-container">
        {products.map((product) => (
          <Product
            handleEvent={handleClick}
            product={product}
            key={product.id}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <div className="carts">
          <h2 className="cart-title">Cart</h2>
          <div className="carts-info">
            {names.map((name) => {
              return (
                <div key={name}>
                  <p>{name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
