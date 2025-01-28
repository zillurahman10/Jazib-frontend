import React, { useEffect, useState } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import "./Products.css";

function Products() {
  const [products, setProducts] = useState([]);

  const url = "http://127.0.0.1:8000/products/";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <h1 className="text-center text-2xl mt-5 custom">
        Try our new collections
      </h1>
      <div className="flex">
        <div style={{ margin: "30px", marginRight: '170px' }} className="m-5 ">
          <h1 className="text-xl m-5 cursor-pointer">Filter --------</h1>
          <h1 className="text-xl m-5 cursor-pointer">Filter --------</h1>
          <h1 className="text-xl m-5 cursor-pointer">Filter --------</h1>
          <h1 className="text-xl m-5 cursor-pointer">Filter --------</h1>
          <h1 className="text-xl m-5 cursor-pointer">Filter --------</h1>
        </div>

        <div className="flex justify-center">
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5 m-5">
            {products.map((product) => (
              <ProductCard info={product}></ProductCard>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
