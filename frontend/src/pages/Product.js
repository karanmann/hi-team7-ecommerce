import React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { popularProducts } from "../Data";
import { useParams } from "react-router-dom";
import "../styles/Product.css";

const Product = () => {
  let params = useParams();
  let productId = params.productId - 1;
  console.log("pop prod", popularProducts);
  console.log(popularProducts[productId].img);
  return (
    <div className="product">
      <div className="product-wrapper">
        <div className="img-container">
          <img
            className="image"
            src={popularProducts[productId].img}
            alt="flower"
          />
        </div>
        <div className="info-container">
          <h1 className="title">{popularProducts[productId].title}</h1>
          <p className="desc">{popularProducts[productId].description}</p>
          <span className="price">1500 kr</span>
          <div className="add-container">
            <div className="amount-container">
              <RemoveIcon />
              <span className="amount">1</span>
              <AddIcon />
            </div>
            <button className="button">ADD TO CART</button>
          </div>
          <div className="product-info-container">
            <div className="product-details">
              <img
                className="image-box"
                src="https://artlefleur.com/skin/frontend/premiumsites/bloom/images/product/view/BN-PDP-PS.gif"
                alt="flower"
              />
              <p> Directly from store</p>
            </div>
            <div className="product-details">
              <img
                className="image-box"
                src="https://artlefleur.com/skin/frontend/premiumsites/bloom/images/product/view/BN-PDP-PS-arrangement.gif"
                alt="flower"
              />
              <p> Designed and Arranged</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
