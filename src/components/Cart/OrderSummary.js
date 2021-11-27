import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

export default function OrderSummary(props) {
  const captureCouponCode = useRef();
  const totalAmount = useSelector((state) => state.amountHandler.totalAmount);
  const tax = 40;
  const orderTotal = totalAmount + tax;

  const [total, setTotal] = useState(orderTotal);
  const [couponValid, setCouponValid] = useState(true);
  function applyCouponHandler(event) {
    event.preventDefault();
    const coupon = captureCouponCode.current.value;
    if (coupon.toString().trim() === "BOOTCAMP2021") {
      const discountedPrice = totalAmount - totalAmount * (10 / 100);
      setTotal(discountedPrice);
      setCouponValid(true);
      Swal.fire("Yippee Coupon Applied", `You have saved ${totalAmount * (10 / 100)}`, "success");
    } else {
      setCouponValid(false);
    }
  }
  return (
    <React.Fragment>
      <div id="order-summary-heading">
        <h2 id="order-summary">Order Summary</h2>
      </div>
      <div id="order-summary-details">
        <h5 id="item-total">Item Total</h5>
        <h5 id="item-total-amount"> &#8377; {totalAmount}</h5>
      </div>
      <div id="tax-amount-container">
        <h5 id="tax">Tax and Charges</h5>
        <h5 id="tax-amount">&#8377; {tax}</h5>
      </div>
      <div id="order-total-container">
        <h5 id="order-total">Order Total</h5>
        <h5 id="order-total-amount">&#8377; {total}</h5>
      </div>
      {props.hideVoucher ? (
        ""
      ) : (
        <div id="voucher-code-container">
          <div id="voucher-code-heading">
            <h3>Have a Voucher Code ?</h3>
          </div>
          <div id="voucher-code-content">
            <form onSubmit={applyCouponHandler}>
              <input
                type="text"
                id="coupon"
                name="coupon"
                placeholder="VOUCHER CODE"
                ref={captureCouponCode}
              />
              <button type="submit" id="apply-btn">
                Apply
              </button>
              {couponValid ? (
                ""
              ) : (
                <div id="error">
                  <p>Coupon Code Invalid</p>
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
