import React, { useRef } from "react";

export default function AddProducts() {
  const captureId = useRef();
  const captureReview = useRef();
  const captureUserName = useRef();

  async function addProductSubmitHandler(event) {
    event.preventDefault();
    const productId = captureId.current.value;
    const productReview = captureReview.current.value;
    const userName = captureUserName.current.value;

    const reviewData = {
      id: productId,
      review: productReview,
      user: userName,
    };

    try {
      const response = await fetch(
        "https://oodles-b3996-default-rtdb.firebaseio.com/reviews.json",
        {
          method: "POST",
          body: JSON.stringify(reviewData),
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
      <p>Add Review on Firebase</p>
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
          <label htmlFor="userName">User</label>
          <input
            type="text"
            name="user"
            id="user"
            placeholder="user name"
            ref={captureUserName}
          />
        </div>
        <div>
          <label htmlFor="reviews">Review</label>
          <input
            id="reviews"
            name="reviews"
            type="text"
            placeholder="Enter Review"
            ref={captureReview}
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
