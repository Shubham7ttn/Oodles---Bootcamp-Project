import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "../../assets/styles/cartPage.css";
import OrderSummary from "./OrderSummary";
import CartItems from "./CartItems";

export default function CartPage() {
  const dispatch = useDispatch();
  const pendingOrder = useSelector((state) => state.cartCount.cartProducts);

  let updatedOrder = [];

  //Function will be executed when the delete button inside <CartItem /> will be clicked and this will remove an item from the cart.
  function deleteCartItem(cartItem) {
    updatedOrder = pendingOrder.filter((item) => item != cartItem);
    dispatch({ type: "decrement cart count", updatedProducts: updatedOrder });
    dispatch({ type: "remove amount", amount: cartItem.amount });
  }

  return (
    <React.Fragment>
      {pendingOrder.length > 0 ? (
        <div id="cart-page-container">
          <div id="cart-steps-container">
            <div id="cart-steps">
                <p class="active">1. Shopping Cart</p>
                <p>2. Shipping Details</p>
                <p>3. Payment Options</p>
            </div>
            <div id="cart-product-container">
              <div id="specified-container">
                {pendingOrder.map((item) => {
                  return (
                    <CartItems
                      cartProducts={item}
                      deleteItem={deleteCartItem}
                    />
                  );
                })}
              </div>
              <div id="navigator-btn-container">
                <Link
                  to="/shipping-details"
                  class="navigator-btn"
                  id="next-btn"
                >
                  Next
                </Link>
              </div>
            </div>
          </div>
          <div id="order-summary-container">
            <OrderSummary hideVoucher={true} />
          </div>
        </div>
      ) : (
        <div id="no-item-info-container">
          <p>Uhh No!! Your cart is empty</p>
        </div>
      )}
    </React.Fragment>
  );
}
