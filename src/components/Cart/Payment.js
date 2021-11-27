import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import OrderSummary from "./OrderSummary";
import "../../assets/styles/paymentPage.css";
import paypal from "../../assets/images/paypal.png";
import paypalSmall from "../../assets/images/paypal-small.jpg";

export default function Payment() {
  const dispatch = useDispatch();
  function makePaymentHandler() {
    dispatch({ type: "reset amount", amount: 0 });
    dispatch({ type: "reset cart count", updatedProducts: [] });
  }
  return (
    <div id="cart-page-container">
      <div id="cart-steps-container">
        <div id="cart-steps">
          <p>1. Shopping Cart</p>
          <p>2. Shipping Details</p>
          <p class="active">3. Payment Options</p>
        </div>
        <div>
          <div id="specified-container">
            <h1 id="payment-page-heading">Choose Your Payment Method</h1>
            <div id="credit-card-container">
              <div id="credit-card-header">
                <input type="radio" name="payment-method" />
                <h3>Credit Card</h3>
              </div>
              <div id="credit-card">
                <form>
                  <h3>Credit Card Details</h3>
                  <div id="card-details">
                    <input
                      id="cc-number"
                      name="cc-number"
                      type="number"
                      placeholder="16 DIGIT CREDIT CARD NUMBER"
                    />
                    <input
                      id="cc-expiry"
                      name="cc-expiry"
                      type="number"
                      placeholder="MM / YY"
                    />
                    <input
                      id="cc-cvv"
                      name="cc-cvv"
                      type="password"
                      placeholder="CVV"
                    />
                  </div>
                  <input
                    id="card-holder-name"
                    type="text"
                    name="card-holder-name"
                    placeholder="Card Holder's Name"
                  />
                </form>
              </div>
            </div>
            <div id="paypal-container">
              <div id="paypal-header">
                <input type="radio" name="payment-method" checked />
                <div id="about-paypal">
                  <h3>PayPal</h3>
                  <p>
                    Pay through PayPal and get a chance to win upto 20 cashback
                    point
                  </p>
                </div>
              </div>
              <div id="paypal-logo-container">
                <img src={paypal} alt="PayPal Logo" id="paypal-logo" />
                <img
                  src={paypalSmall}
                  alt="PayPal Small Logo"
                  id="paypal-logo-small"
                />
              </div>
            </div>
          </div>
          <div id="navigator-btn-container">
            <Link to="/shipping-details" class="navigator-btn" id="prev-btn">
              Previous
            </Link>
            <Link
              to="/confirmation"
              class="navigator-btn"
              id="payment-btn"
              onClick={makePaymentHandler}
            >
              Make Payment
            </Link>
          </div>
        </div>
      </div>
      <div id="order-summary-container">
        <OrderSummary hideVoucher={false} />
      </div>
    </div>
  );
}
