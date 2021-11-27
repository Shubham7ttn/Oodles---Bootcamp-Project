import React, { useRef } from "react";

export default function AddProducts() {
  const captureId = useRef();
  const captureName = useRef();
  const capturePrice = useRef();
  const captureImage = useRef();
  const captureSeller = useRef();
  const captureStockStatus = useRef();
  const captureDescLong = useRef();
  const captureDescShort = useRef();
  const captureSize = useRef();
  const captureColor = useRef();
  const captureColorValue = useRef();
  const captureVariant = useRef();
  const captureCategory = useRef();

  async function addProductSubmitHandler(event) {
    event.preventDefault();
    let productId = captureId.current.value;
    let productName = captureName.current.value;
    let productPrice = capturePrice.current.value;
    let productImage = captureImage.current.value;
    let productSeller = captureSeller.current.value;
    let productStockStatus = !!captureStockStatus.current.value;
    let productDescLong = captureDescLong.current.value;
    let productDescShort = captureDescShort.current.value;
    let productSize = captureSize.current.value;
    let productSizeArray = productSize.toString().split(",");
    let productColor = captureColor.current.value;
    let productColorArray = productColor.toString().split(",");
    let productColorValue = captureColorValue.current.value;
    let productColorValueArray = productColorValue.toString().split(",");
    let productVariant = captureVariant.current.value;
    let productVariantArray = productVariant.toString().split(",");
    let productCategory = captureCategory.current.value;

    const productData = {
      id: productId,
      name: productName,
      price: productPrice,
      image: productImage,
      seller: productSeller,
      stockStatus: productStockStatus,
      descriptionLong: productDescLong,
      descriptionShort: productDescShort,
      size: productSizeArray,
      color: productColorArray,
      colorValue: productColorValueArray,
      variant: productVariantArray,
      category: productCategory,
    };
    try {
      const response = await fetch(
        "https://oodles-b3996-default-rtdb.firebaseio.com/products.json",
        {
          method: "POST",
          body: JSON.stringify(productData),
          header: {
            "Content-Type": "Application/JSON",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      console.log("Data submitted successfully");
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div id="add-products-container">
      <p>Post products on Firebase</p>
      <form onSubmit={addProductSubmitHandler}>
        <div>
          <label htmlFor="productId">Product Id: </label>
          <input
            id="productId"
            name="productId"
            type="number"
            placeholder="Enter unique product id here"
            ref={captureId}
          />
        </div>
        <div>
          <label htmlFor="name">Product Name: </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter product name"
            ref={captureName}
          />
        </div>
        <div>
          <label htmlFor="price">Product Price: </label>
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter product price"
            ref={capturePrice}
          />
        </div>
        <div>
          <label htmlFor="productImage">Product Image: </label>
          <input
            id="productImage"
            name="productImage"
            type="file"
            placeholder="Upload product image"
            ref={captureImage}
          />
        </div>
        <div>
          <label htmlFor="productSeller">Product Seller: </label>
          <input
            id="productSeller"
            name="productSeller"
            type="text"
            placeholder="Enter seller name"
            ref={captureSeller}
          />
        </div>
        <div>
          <label htmlFor="stockStatus">Stock Status: </label>
          <select id="stockStatus" name="stockStatus" ref={captureStockStatus}>
            <option value="true">True</option>
            <option value="">False</option>
          </select>
        </div>
        <div>
          <label htmlFor="descLong">Long Description: </label>
          <input
            id="descLong"
            name="descLong"
            type="text"
            placeholder="Product Description"
            max="80"
            ref={captureDescLong}
          />
        </div>
        <div>
          <label htmlFor="descShort">Short Description: </label>
          <input
            id="descShort"
            name="descShort"
            type="text"
            placeholder="Product Description"
            max="20"
            ref={captureDescShort}
          />
        </div>
        <div>
          <label htmlFor="productSize">Product Size: </label>
          <input
            id="productSize"
            name="productSize"
            type="text"
            placeholder="Product Size"
            ref={captureSize}
          />
        </div>
        <div>
          <label htmlFor="productColor">Product Color: </label>
          <input
            id="productColor"
            name="productColor"
            type="text"
            placeholder="Product Color"
            ref={captureColor}
          />
        </div>
        <div>
          <label htmlFor="productColorValue">Product Color Value: </label>
          <input
            id="productColorValue"
            name="productColorValue"
            type="text"
            placeholder="Product Color Value"
            ref={captureColorValue}
          />
        </div>
        <div>
          <label htmlFor="productVariant">Product Variant: </label>
          <input
            id="productVariant"
            name="productVariant"
            type="text"
            placeholder="Product Variant"
            ref={captureVariant}
          />
        </div>
        <div>
          <label htmlFor="productCategory">Product Category: </label>
          <input
            id="productCategory"
            name="productCategory"
            type="text"
            placeholder="Product Category"
            ref={captureCategory}
          />
        </div>
        <div>
          <button type="submit" id="add-product-btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
