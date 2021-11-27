import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "../Header/Header";
import AddProducts from "../Admin/AddProducts";
import AddReview from "../Admin/AddReview";
import Cart from "../Cart/CartPage";
import Payment from "../Cart/Payment";
import ShippingDetails from "../Cart/ShippingDetails";
import Categories from "./Categories/Categories";
import CouponCode from "./CouponCode/CouponCode";
import OrderConfirmation from "./OrderConfirmation";
import ProductDescription from "./Products/ProductDescription";
import Products from "./Products/Products";

export default function MainContent() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <React.Fragment>
            <Header />
            <div id="categories">
              <Categories />
            </div>
            <CouponCode />
            <Products />
          </React.Fragment>
        </Route>
        <Route path="/smartphones" exact>
          <React.Fragment>
            <Header />
            <div id="categories">
              <Categories />
            </div>
            <Products category={"Smartphone"} />
          </React.Fragment>
        </Route>
        <Route path="/electronics" exact>
          <React.Fragment>
            <Header />
            <div id="categories">
              <Categories />
            </div>
            <Products category={"Electronics"} />
          </React.Fragment>
        </Route>
        <Route path="/appliances" exact>
          <React.Fragment>
            <Header />
            <div id="categories">
              <Categories />
            </div>
            <Products category={"Appliances"} />
          </React.Fragment>
        </Route>
        <Route path="/category-home" exact>
          <React.Fragment>
            <Header />
            <div id="categories">
              <Categories />
            </div>
            <Products category={"Home"} />
          </React.Fragment>
        </Route>
        <Route path="/grocery" exact>
          <React.Fragment>
            <Header />
            <div id="categories">
              <Categories />
            </div>
            <Products category={"Grocery"} />
          </React.Fragment>
        </Route>
        <Route path="/fashion" exact>
          <React.Fragment>
            <Header />
            <div id="categories">
              <Categories />
            </div>
            <Products category={"Fashion"} />
          </React.Fragment>
        </Route>
        <Route path="/stationary" exact>
          <React.Fragment>
            <Header />
            <div id="categories">
              <Categories />
            </div>
            <Products category={"Stationary"} />
          </React.Fragment>
        </Route>
        <Route path="/automobile" exact>
          <React.Fragment>
            <Header />
            <div id="categories">
              <Categories />
            </div>
            <Products category={"Automobile"} />
          </React.Fragment>
        </Route>
        <Route path="/toys" exact>
          <React.Fragment>
            <Header />
            <div id="categories">
              <Categories />
            </div>
            <Products category={"Toys"} />
          </React.Fragment>
        </Route>

        <Route path="/products/:productId" exact>
          <React.Fragment>
            <Header />
            <ProductDescription />
          </React.Fragment>
        </Route>

        <Route path="/my-cart" exact>
          <React.Fragment>
            <Header />
            <Cart/>
          </React.Fragment>
        </Route>
        <Route path="/shipping-details" exact>
          <React.Fragment>
            <Header />
            <ShippingDetails />
          </React.Fragment>
        </Route>
        <Route path="/payment" exact>
          <React.Fragment>
            <Header />
            <Payment />
          </React.Fragment>
        </Route>
        <Route path="/admin-shubham" exact>
          <React.Fragment>
            <Header />
            <AddProducts />
          </React.Fragment>
        </Route>
        <Route path="/admin-shubham-review" exact>
          <React.Fragment>
            <Header />
            <AddReview />
          </React.Fragment>
        </Route>
        <Route path="/confirmation" exact>
          <React.Fragment>
            <OrderConfirmation />
          </React.Fragment>
        </Route>
      </Switch>
    </React.Fragment>
  );
}
