import React from 'react';
import CardContainer from '../components/CardContainer';
import Navbar from '../components/Navbar';
import '../styles/ProductList.css';

const ProductList = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <h1 className="title"> Bouquets</h1>
      <div className="filter-container">
        <div className="filter">
          <span className="filter-text">Filter Products:</span>
          <select className="select">
            <option disabled selected className="option" value="color">
              Color
            </option>
            <option value="white">White</option>
            <option value="black">Black</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
          </select>
        </div>
        <div className="filter">
          <span className="filter-text">Sort Products:</span>
          <select className="select">
            <option selected value="newest">
              Newest
            </option>
            <option value="priceup">Price (asc)</option>
            <option value="pricedown">Price (desc)</option>
          </select>
        </div>
      </div>
      <CardContainer />
    </div>
  );
};

export default ProductList;
