import React, { useState } from "react";
import { Link } from "react-router-dom";
import OrderSummary from "./OrderSummary";
import ShippingForm from "./ShippingForm";

export default function ShippingDetails() {
  
  const [showNext, setshowNext] = useState(false);
  const shippingFormHandler = (status) => {
    if (status) {
      setshowNext(true);
    } else {
      setshowNext(false);
    }
  };

  return (
    <div id="cart-page-container">
      <div id="cart-steps-container">
        <div id="cart-steps">
          <p>1. Shopping Cart</p>
          <p class="active">2. Shipping Details</p>
          <p>3. Payment Options</p>
        </div>
        <div>
          <div id="specified-container">
            <ShippingForm formHandler={shippingFormHandler} />
          </div>
          <div id="navigator-btn-container">
            <Link to="/my-cart" class="navigator-btn" id="prev-btn">
              Previous
            </Link>
            {showNext ? (
              <Link to="/payment" class="navigator-btn" id="next-btn">
                Next
              </Link>
            ) : (
              <p></p>
            )}
          </div>
        </div>
      </div>
      <div id="order-summary-container">
        <OrderSummary hideVoucher={true} />
      </div>
    </div>
  );
}
