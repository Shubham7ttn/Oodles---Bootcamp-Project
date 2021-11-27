import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "../../../assets/styles/cart.css";

export default function Cart() {
  const dispatch = useDispatch();
  const cardItemCount = useSelector((state) => state.cartCount.itemCount);
  if (cardItemCount === 0) {
    dispatch({ type: "reset amount", amount: 0 });
  }
  console.log("Cart Count --> ", cardItemCount);
  return (
    <div id="cart-container">
      {cardItemCount > 0 ? (
        <span id="cart-item-count">{cardItemCount}</span>
      ) : (
        <span></span>
      )}
      <Link to="/my-cart">
        {/* <i id="cart-icon" class="fa fa-shopping-cart"></i> */}
        <i id="cart-icon" class="fab fa-opencart"></i>
      </Link>
    </div>
  );
}
