import React from "react";
import "../../../assets/styles/couponCode.css";
export default function CouponCode() {
  const tnc = "*T&C Apply";
  return (
    <div id="coupon-code-adv">
      <div id="coupon-code">
        <h3>BOOTCAMP2021</h3>
      </div>
      <div id="coupon-code-info">
        <h4>Flat 10% off</h4>
        <p>Apply at the time of checkout</p>
      </div>
      <div id="tnc">
        <p>{tnc}</p>
      </div>
    </div>
  );
}
