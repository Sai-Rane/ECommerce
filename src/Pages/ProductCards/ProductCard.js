import React from "react";
import "./ProductCard.css";

const ProductCard = ({ productDetails }) => {
  console.log("productDetails", productDetails);

  return (
    <div className="cards-cnt">
      <img src={productDetails?.thumbnail}></img>
      <div>{productDetails?.title}</div>
    </div>
  );
};

export default ProductCard;
