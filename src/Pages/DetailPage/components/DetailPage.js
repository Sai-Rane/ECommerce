import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const { prodId } = useParams();
  // console.log("params", params);
  const [prod, setProd] = useState([]);
  const apiProd = async () => {
    const productData = await fetch(`https://dummyjson.com/products/${prodId}`);
    const data = await productData.json();
    console.log("datahdjsakd", data);
    setProd(data);
  };
  console.log("prod", prod);
  useEffect(() => {
    apiProd();
  }, [prodId]);
  return (
    <>
      <h1>DetailPage</h1>
      <div>
        <img src={prod?.thumbnail} />
      </div>
      <h1>{prod?.title}</h1>
      {prod?.brand && (
        <h3>
          Product Brand: <span>{prod?.brand}</span>
        </h3>
      )}
      <h3>Rating: {prod?.rating}</h3>
      <h3>Warranty: {prod?.warrantyInformation}</h3>
      <h3>Product Description: {prod?.description}</h3>
    </>
  );
};

export default DetailPage;
