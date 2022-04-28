import React, { useState } from "react";
import CardContainer from "../components/CardContainer";
import "../styles/ProductList.css";
import popularProducts from "../Data.js";

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredData = popularProducts.filter((val) => {
    if (searchTerm === "") {
      return val;
    } else if (
      val.id.includes(searchTerm) ||
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
      Search
      <input
        className="search_input"
        type="text"
        name="Search"
        aria-label="Search Field to enter text"
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      {console.log(popularProducts)}
      <CardContainer filteredData={filteredData} />
    </div>
  );
};

export default ProductList;

// description
