import React, { useEffect, useState } from "react";
import "../../../assets/styles/products.css";
import { useSelector } from "react-redux";
import ProductItems from "./ProductItems";
import SearchedProduct from "./SearchedProduct";

export default function Products(props) {
  const category = props.category;
  const [loadedProducts, setLoadedProducts] = useState([]);

  const fetchedProducts = [];
  let filteredProductsByCategory = [];
  useEffect(function () {
    async function fetchProducts() {
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
            productVariant: data[key].variant,
            productCategory: data[key].category,
          });
        }
        if (category === undefined) {
          setLoadedProducts(fetchedProducts);
        } else {
          //Filtering Array on the basis of Category
          function filterArrayByCategory(item) {
            if (item.productCategory === category) {
              return true;
            }
          }
          filteredProductsByCategory = fetchedProducts.filter(
            filterArrayByCategory
          );
          setLoadedProducts(filteredProductsByCategory);
        }
      } catch (err) {
        console.log(err);
      }
    }
    fetchProducts();
  }, []);

  const searchBarEmpty = useSelector(
    (state) => state.searchBar.searchBarIsEmpty
  );
  const searchBarValue = useSelector((state) => state.searchBar.searchBarValue);

  //This shuffles the array
  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  shuffle(loadedProducts);
  return (
    <div id="product-container">
      {searchBarEmpty ? (
        loadedProducts.length > 0 ? (
          loadedProducts.map((item) => {
            return <ProductItems products={item} />;
          })
        ) : (
          <div id="no-product-div">
            <p>We will add products in this category very soon :)</p>
          </div>
        )
      ) : (
        <React.Fragment>
          <p id="searched-for">
            You Searched For: <span id="searched-item">{searchBarValue}</span>
          </p>
          <SearchedProduct fetchedProducts={loadedProducts} />
        </React.Fragment>
      )}
    </div>
  );
}
