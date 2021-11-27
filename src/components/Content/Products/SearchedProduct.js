import React from "react";
import { useSelector } from "react-redux";
import ProductItems from "./ProductItems";

export default function SearchedProduct(props) {
  const fetchedProducts = props.fetchedProducts;
  const searchedProduct = useSelector(
    (state) => state.searchBar.searchBarValue
  );
  let filteredProductArrayBySearchValue = [];

  function filterProducts(item) {
    if (
      item.productName.toLowerCase().includes(searchedProduct.toLowerCase()) ||
      item.productCategory.toLowerCase().includes(searchedProduct.toLowerCase())
    ) {
      return true;
    }
  }
  filteredProductArrayBySearchValue = fetchedProducts.filter(filterProducts);
  return (
    <React.Fragment>
      {filteredProductArrayBySearchValue.length > 0 ? (
        filteredProductArrayBySearchValue.map((item) => {
          return <ProductItems products={item} />;
        })
      ) : (
        <div id="no-product-div">
          <p>Uhhh No!! We don't have this product right now :(</p>
        </div>
      )}
    </React.Fragment>
  );
}
