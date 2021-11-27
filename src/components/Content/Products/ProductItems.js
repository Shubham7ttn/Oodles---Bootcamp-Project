import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function ProductItems(props) {
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    const productId = props.products.productId;
    const productSize = "N/A";
    const productColor = "N/A";
    const productPrice = props.products.productPrice;
    const productName = props.products.productName;
    const productImage = props.products.productImage;

    const order = {
      id: productId,
      size: productSize,
      color: productColor,
      amount: productPrice,
      name: productName,
      image: productImage,
    };

    dispatch({ type: "increment cart count", addedProducts: order });
    dispatch({ type: "add amount", amount: productPrice });
    
    Swal.fire(
      "Product Added",
      `${productName} has been added to your cart`,
      "success"
    );
  };
  const productImage = props.products.productImage.trim();
  const path = "../../../../assets/images/products/" + productImage;

  const productName = props.products.productName;
  const productPrice = props.products.productPrice;
  const productDescription = props.products.productShortDescription;
  const productId = props.products.productId;
  const productStockStatus = props.products.productStockStatus;

  const dynamicLink = "/products/" + productId;
  let displayAddCartBtn;
  if (productStockStatus) {
    displayAddCartBtn = "";
  } else {
    displayAddCartBtn = "none";
  }
  const addToCartStyleObject = {
    display: displayAddCartBtn,
  };
  return (
    <div id="product-item-card">
      <div id="product-item-card-overlay">
        <div id="product-item-card-overlay-buttons">
          <a
            id="add-to-cart"
            style={addToCartStyleObject}
            onClick={addToCartHandler}
          >
            Add To Cart
          </a>
          <Link id="know-more" to={dynamicLink}>
            Know More
          </Link>
        </div>
      </div>
      <div id="product-image">
        <img src={path} alt="not found" />
      </div>
      <div id="product-item-desc">
        <h3 id="product-name">{productName}</h3>
        <h5 id="product-price">
          <span id="rs-sign">&#8377;</span> {productPrice}
        </h5>
        <p id="product-description">{productDescription}</p>
        {productStockStatus ? (
          <h3 id="in-stock">In stock</h3>
        ) : (
          <h3 id="out-of-stock">Out of Stock</h3>
        )}
        <div id="product-card-button-container">
          <a
            id="add-to-cart"
            style={addToCartStyleObject}
            onClick={addToCartHandler}
          >
            Add To Cart
          </a>
          <Link id="know-more" to={dynamicLink}>
            Know More
          </Link>
        </div>
      </div>
    </div>
  );
}
