import React from "react";
import Card from "./Card";
import "../styles/CardContainer.css";
import { Link } from "react-router-dom";

const CardContainer = ({ filteredData }) => {
  return (
    <div className="cards-container">
      {filteredData.map((item) => (
        <Link to={`/products/${item.id}`} key={item.id}>
          <Card image={item.img} itemData={item} />
        </Link>
      ))}
    </div>
  );
};

export default CardContainer;
