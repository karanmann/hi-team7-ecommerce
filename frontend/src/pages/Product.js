import React from 'react';
import Navbar from '../components/Navbar';
// import { Add, Remove } from '@material-ui/icons';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import '../styles/Product.css';

const Product = () => {
  return (
    <div className="product">
      {/* <Navbar /> */}
      <div className="product-wrapper">
        <div className="img-container">
          <img
            className="image"
            src="https://images.unsplash.com/photo-1525096122400-e43fa92b933f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fHdlZGRpbmclMjBib3F1ZXR8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
            alt="flower"
          />
        </div>
        <div className="info-container">
          <h1 className="title"> White Harmony</h1>
          <p className="desc">
            This is a sweet tussie mussie(small hand-tied victorian style)
            bouquet of large white roses blooms, spray roses, accents of wax,
            hydrangea, greenery and any sort of cute bloom we might have at the
            moment. It is meant to express love and care. Please let us know
            your preference or leave it up to our expert designer.
          </p>
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
