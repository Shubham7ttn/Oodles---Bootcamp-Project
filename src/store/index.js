import { createStore } from "redux";
import { combineReducers } from "redux";

//Reducer will check if the search bar is empty or not
const searchBarValueReducer = (
  state = { searchBarIsEmpty: true, searchBarValue: "" },
  action
) => {
  if (action.type === "check search bar" && action.value.trim() !== "") {
    return {
      searchBarIsEmpty: false,
      searchBarValue: action.value.trim(),
    };
  }

  if (action.type === "check search bar" && action.value.trim() === "") {
    return {
      searchBarIsEmpty: true,
      searchBarValue: "",
    };
  }

  return state;
};

//Reducer will change the item count in cart
const changeCartItemCountReducer = (
  state = { itemCount: 0, cartProducts: [] },
  action
) => {
  if (action.type === "increment cart count") {
    state.cartProducts.push(action.addedProducts);
    return {
      itemCount: state.itemCount + 1,
      cartProducts: state.cartProducts,
    };
  }
  if (action.type === "decrement cart count") {
    if (state.itemCount > 0) {
      return {
        itemCount: state.itemCount - 1,
        cartProducts: action.updatedProducts,
      };
    }
  }

  if (action.type === "reset cart count") {
    return {
      itemCount: 0,
      cartProducts: state.cartProducts,
    };
  }

  if (action.type === "reste products list") {
    return {
      itemCount: 0,
      cartProducts: [],
    };
  }
  return state;
};

//Reducer will manage amount
const amountHandleReducer = (state = { totalAmount: 0 }, action) => {
  if (action.type === "add amount") {
    return {
      totalAmount: parseInt(state.totalAmount) + parseInt(action.amount),
    };
  }

  if (action.type === "remove amount") {
    return {
      totalAmount: parseInt(state.totalAmount) - parseInt(action.amount),
    };
  }

  if (action.type === "reset amount") {
    return {
      totalAmount: 0,
    };
  }
  return state;
};

//This will store customer's shipping details
const shippingHandleReducer = (state = { address: {} }, action) => {
  if (action.type === "save address") {
    return {
      address: action.customerAddress,
    };
  }

  return state;
};
// Multiple Reducers combined together
const rootReducer = combineReducers({
  searchBar: searchBarValueReducer,
  cartCount: changeCartItemCountReducer,
  amountHandler: amountHandleReducer,
  shippingDetails: shippingHandleReducer,
});

//Store is created
const store = createStore(rootReducer);

export default store;
