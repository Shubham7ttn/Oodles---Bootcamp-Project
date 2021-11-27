import React, { useEffect, useState } from "react";

export default function ProductReviews(props) {
  const requiredProductId = props.id;
  const fetchedReviews = [];
  let userReviews = [];
  let users = [];
  const [reviews, setReviews] = useState({});
  useEffect(function () {
    async function fetchReviews() {
      try {
        const response = await fetch(
          "https://oodles-b3996-default-rtdb.firebaseio.com/reviews.json"
        );
        if (!response.ok) {
          throw new Error("Something went wrong while fetching data");
        }
        const data = await response.json();

        for (var key in data) {
          fetchedReviews.push({
            productId: data[key].id,
            productReviews: data[key].reviews,
            users: data[key].users,
          });
        }

        function filterByProductId(item) {
          if (item.productId === requiredProductId) {
            return true;
          }
        }
        setReviews(fetchedReviews.filter(filterByProductId));
      } catch (err) {
        console.log(err);
      }
    }
    fetchReviews();
  }, []);

  console.log(reviews);
  if (reviews !== undefined && reviews.length > 0) {
    users = reviews[0].users;
    userReviews = reviews[0].productReviews;
    console.log(users);
    console.log(userReviews);
  }
  return (
    <React.Fragment>
      <h2 id="customer-review-heading">Customer Reviews</h2>
      <div id="review-container">
        {reviews === undefined || reviews.length <= 0 ? (
          <p id="no-reviews">No one has given review for this product yet</p>
        ) : (
          users.map((item) => {
            return (
              <div id="review-item">
                <h5 id="review-user">{item}</h5>
                <h5 id="review-content">{userReviews[users.indexOf(item)]}</h5>
              </div>
            );
          })
        )}
      </div>
    </React.Fragment>
  );
}
