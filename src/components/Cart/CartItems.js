import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

export default function CartItems(props) {
  let [itemCount, setItemCount] = useState(1);
  const dispatch = useDispatch();
  const cartProductList = props.cartProducts;
  const imagePath =
    "../../../../assets/images/products/" + cartProductList.image;

  let showSize = true,
    showColor = true;
  if (cartProductList.size === "N/A") {
    showSize = false;
  }
  if (cartProductList.color === "N/A") {
    showColor = false;
  }

  function deleteHandler() {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you really wish to delete this item ?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        props.deleteItem(cartProductList, itemCount);
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }
  function incrementItemCount() {
    console.log("Executed +");
    if (itemCount > 2) {
      Swal.fire(
        "Item Count Restriction",
        "Quantity is limited to 3 per item",
        "info"
      );
    } else {
      itemCount = itemCount + 1;
      setItemCount(itemCount);
      dispatch({ type: "add amount", amount: cartProductList.amount });
    }
  }
  function decrementItemCount() {
    console.log("Executed -");
    if (itemCount <= 1) {
      Swal.fire(
        "Use delete rather",
        "Click on delete button to delete the product",
        "info"
      );
    } else {
      itemCount = itemCount - 1;
      setItemCount(itemCount);
      dispatch({ type: "remove amount", amount: cartProductList.amount });
    }
  }
  return (
    <div id="cart-item-card">
      <div id="cart-item-image">
        <img src={imagePath} alt="product image" />
      </div>
      <div id="cart-item-details">
        <h1 id="cart-product-name">{cartProductList.name}</h1>
        <div id="price-size-color">
          <h2 id="cart-product-price">&#8377; {cartProductList.amount}</h2>
          {showSize ? (
            <h4 id="cart-product-size">Size: {cartProductList.size}</h4>
          ) : (
            ""
          )}
          {showColor ? (
            <h4 id="cart-product-color">Color: {cartProductList.color}</h4>
          ) : (
            ""
          )}
        </div>
        <div id="cart-item-btns">
          <button id="delete-item-btn" onClick={deleteHandler}>
            <i class="far fa-trash-alt"></i>
          </button>
          <div id="item-counter">
            <button onClick={incrementItemCount}>
              <i class="fa fa-plus"></i>
            </button>
            <input id="item-count" name="item-count" value={itemCount}></input>
            <button onClick={decrementItemCount}>
              <i class="fa fa-minus"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
