import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import Swal from "sweetalert2";
import "../../../assets/styles/productDescription.css";
import ProductReviews from "../Products/ProductReviews";
export default function ProductDescription() {
  const dispatch = useDispatch();
  const [product, setProduct] = useState([]);
  const param = useParams();
  const requiredProductId = param.productId.toString();
  const fetchedProducts = [];
  let requiredProduct,
    imagePath = "";

  const captureSize = useRef();
  const captureColor = useRef();

  useEffect(function () {
    async function fetchProductsFunction() {
      try {
        const response = await fetch(
          "https://oodles-b3996-default-rtdb.firebaseio.com/products.json"
        );
        if (!response.ok) {
          throw new Error("Something went wrong while fetching data");
        }
        const data = await response.json();

        for (let key in data) {
          fetchedProducts.push({
            productId: data[key].id,
            productName: data[key].name,
            productPrice: data[key].price,
            productImage: data[key].image,
            productSeller: data[key].seller,
            productStockStatus: data[key].stockStatus,
            productLongDescription: data[key].descriptionLong,
            productShortDescription: data[key].descriptionShort,
            productSize: data[key].size,
            productColor: data[key].color,
            productColorValue: data[key].colorValue,
            productVariant: data[key].variant,
            productCategory: data[key].category,
          });
        }
      } catch (err) {
        console.log(err);
      }

      function filterByProductId(item) {
        if (item.productId === requiredProductId) {
          return true;
        }
      }
      requiredProduct = fetchedProducts.filter(filterByProductId);
      setProduct(requiredProduct);
    }
    fetchProductsFunction();
  }, []);

  let productId,
    productName,
    productImage,
    sellerName,
    price,
    stockStatus,
    description,
    size,
    color,
    colorValue;
  let showSizeFlag = true;
  let showColorFlag = true;

  if (product.length > 0) {
    productId = product[0].productId;
    productName = product[0].productName;
    productImage = product[0].productImage;
    sellerName = product[0].productSeller;
    price = product[0].productPrice;
    stockStatus = product[0].productStockStatus;
    description = product[0].productLongDescription;
    size = product[0].productSize;
    color = product[0].productColor;
    colorValue = product[0].productColorValue;

    if (size !== undefined && size.length > 0) {
      if (size[0] === "") {
        showSizeFlag = false;
      } else {
        showSizeFlag = true;
      }
    }
    if (color !== undefined && color.length > 0) {
      if (color[0] === "") {
        showColorFlag = false;
      } else {
        showColorFlag = true;
      }
    }

    imagePath = "../../../../assets/images/products/" + productImage;
  }

  function addProductHandler() {
    let selectedSize, selectedColor;
    const selectedId = productId;
    if (size !== undefined && size.length > 0) {
      if (showSizeFlag) {
        selectedSize = captureSize.current.value;
      } else {
        selectedSize = "N/A";
      }
    }
    if (color !== undefined && color.length > 0) {
      if (showColorFlag) {
        selectedColor = captureColor.current.value;
      } else {
        selectedColor = "N/A";
      }
    }

    const order = {
      id: selectedId,
      size: selectedSize,
      color: selectedColor,
      amount: price,
      name: productName,
      image: productImage,
    };

    dispatch({ type: "increment cart count", addedProducts: order });
    dispatch({ type: "add amount", amount: price });

    Swal.fire(
      "Product Added",
      `${productName} has been added to your cart`,
      "success"
    );
  }
  return (
    <React.Fragment>
      {product.length > 0 ? (
        <React.Fragment>
          <div id="product-description-container">
            <div id="product-image-container">
              <img src={imagePath} alt="image" />
            </div>
            <div id="product-complete-description">
              <h1 id="product-name">{productName}</h1>
              <h5 id="product-seller-name">Sold By: {sellerName}</h5>
              {stockStatus ? (
                <h5 class="product-stock-status" id="product-status-in-stock">
                  In Stock
                </h5>
              ) : (
                <h5
                  class="product-stock-status"
                  id="product-status-out-of-stock"
                >
                  Out of Stock
                </h5>
              )}
              <h1 id="product-price">&#8377; {price}</h1>
              <p id="product-long-description">{description}</p>
              <div id="product-variant-div">
                {size !== undefined || size.length > 0 ? (
                  showSizeFlag ? (
                    <div class="variant-selector" id="size-selector">
                      <p>Size: </p>
                      <select ref={captureSize}>
                        {size.map((item) => {
                          return (
                            <option value={item.trim()}>{item.trim()}</option>
                          );
                        })}
                      </select>
                    </div>
                  ) : (
                    ""
                  )
                ) : (
                  <p></p>
                )}
                {color !== undefined || color.length > 0 ? (
                  showColorFlag ? (
                    <div class="variant-selector" id="color-selector">
                      <p>Color: </p>
                      <select ref={captureColor}>
                        {color.map((item) => {
                          let index = color.indexOf(item);
                          let bgColor = colorValue[index];
                          return (
                            <option
                              value={item.trim()}
                              style={{ background: bgColor }}
                            >
                              {item.trim()}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  ) : (
                    ""
                  )
                ) : (
                  ""
                )}
              </div>
              {stockStatus ? (
                <button id="add-to-cart-btn" onClick={addProductHandler}>
                  Add to Cart
                </button>
              ) : (
                <p
                  class="product-stock-status"
                  id="product-status-out-of-stock"
                >
                  This Product is Currently out of Stock
                </p>
              )}
            </div>
          </div>
          <div id="product-review-container">
            <ProductReviews id={productId} />
          </div>
        </React.Fragment>
      ) : (
        ""
      )}
    </React.Fragment>
  );
}
