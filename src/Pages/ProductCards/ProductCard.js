import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({ productDetails }) => {
  console.log("productDetails", productDetails);

  return (
    <div className="cards-cnt">
      <Link to={"/detail/" + productDetails?.id}>
        <img src={productDetails?.thumbnail}></img>
        <span>{productDetails?.title}</span>
      </Link>
    </div>
  );
};

export default ProductCard;
