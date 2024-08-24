import React, { useEffect, useState } from "react";
import "./ListingPage.css";
import ProductCard from "../../ProductCards/ProductCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ListingPage = () => {
  //state to filter products

  const [searchProd, setSearchProd] = useState("");
  //state to store the productData
  const [products, setProducts] = useState([]);
  const [afterFilter, setAfterFilter] = useState([]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  //function for making api call
  const apiProducts = async () => {
    const productData = await fetch("https://dummyjson.com/products");
    const data = await productData.json();
    console.log("data", data.products);
    setProducts(data?.products);
    setAfterFilter(data?.products);
  };
  console.log("products", products);

  const handleFilterProd = () => {
    console.log("searchProd", searchProd);
    // const filtered = products.filter((ele) => ele?.title.includes(searchProd));
    // setSearchProd(filtered);
    const filter = products.filter((ele) => ele.rating > 4.8);
    setProducts(filter);
  };

  const handleSearchProd = () => {
    const search = products.filter((ele) =>
      ele?.title?.toLowerCase().includes(searchProd.toLowerCase())
    );
    setAfterFilter(search);
    setSearchProd("");
  };

  useEffect(() => {
    apiProducts();
  }, []);

  return products.length === 0 ? (
    <h1>Loading Products...</h1>
  ) : (
    <div>
      <h1>Listing page</h1>
      <div>
        <input
          value={searchProd}
          placeholder="Enter Product name"
          onChange={(e) => setSearchProd(e.target.value)}
        />
        <button onClick={handleSearchProd}>Search Product</button>
      </div>
      <button onClick={handleFilterProd}>Filter Products</button>

      {/* {products.map((ele) => {
        return (
          <div style={{ border: "1px solid #000" }}>
            <div>{ele?.title}</div>
            <img src={ele?.thumbnail} />
          </div>
        );
      })} */}
      {/* <Slider {...settings}> */}
      {afterFilter.map((ele, i) => {
        return <ProductCard productDetails={ele} key={i + 1} />;
      })}
      {/* </Slider> */}
    </div>
  );
};

export default ListingPage;
