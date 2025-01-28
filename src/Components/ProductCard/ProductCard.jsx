import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

function ProductCard(info) {
  return (
    <>
      <Link to={`/product-details/${info?.info?.id}`}>
        <div
          className="border shadow-xl rounded-xl overflow-hidden animated-card"
          style={{
            cursor: "pointer",
            width: "300px",
          }}
        >
          <div className="">
            <div className="p-5">
              <img src={info?.info?.image} className="rounded-xl shadow-xl" alt="" />
            </div>
          </div>
          <div>
            <h3 className=" text-lg  mt-5 ml-3">{info?.info?.name}</h3>
            <p className="mb-3 ml-3">
              {" "}
              <span className="font-bold">TK {info?.info?.price}</span>
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default ProductCard;
