import { faFileArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Product.css";

const Product = ({ product,handleEvent }) => {
  const { name, price, about } = product;
  return (
    <div className="cart">
      <h2 className="book-name">{name}</h2>
      <p>Price: {price}</p>
      <p>Details: {about}</p>
      <button onClick={()=>handleEvent(name)} className="cart-btn">
        <p className="btn-text">Add To Cart</p>
        <FontAwesomeIcon icon={faFileArrowUp}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
