import React, { useState } from "react";
import CardContainer from "../components/CardContainer";
import "../styles/ProductList.css";
import { popularProducts } from "../Data";

const ProductList = () => {
  console.log("popular products", popularProducts)
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = popularProducts.filter((val) => {
    if (searchTerm === "") {
      return val;
    } else if (
      val.description.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return val;
    } else {
      return console.log("There was a problem");
    }
  });

  return (
    <div>
      <h1 className="title"> Bouquets</h1>
      <div className="search-product-list">
        <p className="search-product-list-text">Search</p>
        <input
          className="search-product-list-text-input"
          type="text"
          name="Search"
          aria-label="Search Field to enter text"
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>
      <CardContainer filteredData={filteredData} />
    </div>
  );
};

export default ProductList;

// description
