import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import '../styles/Cart.css'

const Cart = () => {
  return (

    <div className="cart-container">
    
    <div className="cart-wrapper">
      <h1 className="title">YOUR BAG</h1>
      <div className="top">
        <button className="top-button">CONTINUE SHOPPING</button>
        <div className="top-texts">
          <span className="top-text">Shopping Bag(2)</span>
          <span className="top-text">Your Wishlist (0)</span>
        </div>
        <button className="top-button" type="filled">CHECKOUT NOW</button>
      </div>
      <div className="bottom">
        <div className="info">
          <div className="product">
            <div className="product-detail">
              <img className="image" src="https://images.unsplash.com/photo-1572454591674-2739f30d8c40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt ="product"/>
              <div className="details">
                <span className="product-name">
                  <b>Product:</b> Duchess Dream
                </span>
                <span className="product-id">
                  <b>ID:</b> 93813718293
                </span>
              </div>
            </div>
            <div className="price-detail">
              <div className="product-amount-container">
                <AddIcon />
                <div className="product-amount">2</div>
                <RemoveIcon />
              </div>
              <div className="product-price">kr 400</div>
            </div>
          </div>
          <hr className='hr'/>
          <div className="product">
            <div className="product-detail">
              <img className='image' src="https://images.unsplash.com/photo-1563241527-3004b7be0ffd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="product detail"/>
              <div className="details">
                <span className="product-name">
                  <b>Product:</b> Sweet Serenity
                </span>
                <span className="product-id">
                  <b>ID:</b> 93813718293
                </span>
              </div>
            </div>
            <div className="price-detail">
              <div className="product-amount-container">
                <AddIcon />
                <div className="product-amount">1</div>
                <RemoveIcon />
              </div>
              <div className="product-price">kr 400</div>
            </div>
          </div>
        </div>
        <div className="summary">
          <h1 className='summary-title'>ORDER SUMMARY</h1>
          <div className="summary-item">
            <span>Subtotal</span>
            <span> kr 700</span>
          </div>
          <div className="summary-item">
            <span>Estimated Shipping</span>
            <span> kr 49 </span>
          </div>
          <div className="summary-item">
            <span>Shipping Discount</span>
            <span>kr 0</span>
          </div>
          <div className="summary-item" type="total">
            <span>Total</span>
            <span>749 kr</span>
          </div>
          <button className="button">CHECKOUT NOW</button>
        </div>
      </div>
    </div>
    
  </div>
  )
}

export default Cart