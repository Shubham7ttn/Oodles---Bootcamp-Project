import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../../assets/styles/orderConfirmation.css";
export default function OrderConfirmation() {
  const shippingAddress = useSelector((state) => state.shippingDetails.address);
  const order = useSelector((state) => state.cartCount.cartProducts);

  return (
    <div id="order-confirmation-container">
      <div id="greetings">
        <h1>
          <i class="fa fa-check-circle"></i>Wohhooo! Order Placed
        </h1>
        <h3>Thanks for Shopping with us</h3>

        <a href="/home" id="continue-shopping">
          Continue Shopping
        </a>
      </div>
      {order !== undefined && order.length > 0 ? (
        <div id="invoice">
          <div id="invoice-heading">
            <h4>Oodles - One stop for all your needs</h4>
          </div>
          <div id="invoice-shipping">
            <h5 id = "invoice-shipping-heading">Shipping Address</h5>
            <h5>{shippingAddress.customerName}</h5>
            <h5>{shippingAddress.customerAddress}</h5>
            <h5>
              {shippingAddress.customerCity}, {shippingAddress.customerCountry}
            </h5>
            <h5>{shippingAddress.customerZip}</h5>
            <h5>{shippingAddress.customerPhone}</h5>
          </div>
          <div id="invoice-order-details">
            <h5 id = "invoice-order-details-heading">Order Details</h5>
            {order.map((item) => {
              return (
                <div id = "invoice-order-details-content">
                  <h5>{item.name}</h5>
                  <h5>&#8377; {item.amount}</h5>
                  {item.size === undefined || item.size === "N/A" ? (
                    <p></p>
                  ) : (
                    <h5>Size: {item.size}</h5>
                  )}
                  {item.color === undefined || item.color === "N/A" ? (
                    <p></p>
                  ) : (
                    <h5>Color: {item.color}</h5>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
