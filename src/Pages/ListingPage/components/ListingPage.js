import React, { useEffect, useState } from "react";
import "./ListingPage.css";

const ListingPage = () => {
  const [products, setProducts] = useState([]);
  const apiProducts = async () => {
    const productData = await fetch("https://dummyjson.com/products");
    const data = await productData.json();
    console.log("data", data.products);
    setProducts(data?.products);
  };
  console.log("products", products);
  useEffect(() => {
    apiProducts();
  }, []);
  return (
    <div>
      <h1>Listing page</h1>

      {products.map((ele) => {
        return (
          <div style={{ border: "1px solid #000" }}>
            <div>{ele?.title}</div>
            <img src={ele?.thumbnail} />
          </div>
        );
      })}
    </div>
  );
};

export default ListingPage;
