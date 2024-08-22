import React, { useEffect, useState } from "react";
import "./ListingPage.css";
import ProductCard from "../../ProductCards/ProductCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ListingPage = () => {
  //state to store the productData
  const [products, setProducts] = useState([]);
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
  };
  console.log("products", products);

  useEffect(() => {
    apiProducts();
  }, []);
  return (
    <div>
      <h1>Listing page</h1>

      {/* {products.map((ele) => {
        return (
          <div style={{ border: "1px solid #000" }}>
            <div>{ele?.title}</div>
            <img src={ele?.thumbnail} />
          </div>
        );
      })} */}
      <Slider {...settings}>
        {products.map((ele, i) => {
          return <ProductCard productDetails={ele} key={i + 1} />;
        })}
      </Slider>
    </div>
  );
};

export default ListingPage;
