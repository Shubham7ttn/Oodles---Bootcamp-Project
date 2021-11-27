import React from "react";
import "../../../assets/styles/categories.css";
import smartphone from "../../../assets/images/categories/smartphone.png";
import electronics from "../../../assets/images/categories/electronics.jpg";
import appliances from "../../../assets/images/categories/appliances.jpg";
import home from "../../../assets/images/categories/home.png";
import grocery from "../../../assets/images/categories/grocery.jpg";
import fashion from "../../../assets/images/categories/fashion.jpg";
import stationary from "../../../assets/images/categories/stationary.jpg";
import automobile from "../../../assets/images/categories/automobile.jpeg";
import toys from "../../../assets/images/categories/toys.jpg";
import { Link } from "react-router-dom";
export default function Categories() {
  return (
    <div id="category-container">
      <a href="/smartphones">
        <div className="category-item" id="smartphone">
          <div className="category-item-image" id="smartphone-image">
            <img src={smartphone} alt="smartphone-image" />
          </div>
          <h4>Smartphones</h4>
        </div>
      </a>
      <a href="/electronics">
        <div className="category-item" id="electronics">
          <div className="category-item-image" id="electronics-image">
            <img src={electronics} alt="electronics-image" />
          </div>
          <h4>Electronics</h4>
        </div>
      </a>
      <a href="/appliances">
        <div className="category-item" id="appliances">
          <div className="category-item-image" id="appliances-image">
            <img src={appliances} alt="appliances-image" />
          </div>
          <h4>Appliances</h4>
        </div>
      </a>
      <a href="/category-home">
        <div className="category-item" id="home">
          <div className="category-item-image" id="home-image">
            <img src={home} alt="home-image" />
          </div>
          <h4>Home</h4>
        </div>
      </a>
      <a href="/grocery">
        <div className="category-item" id="grocery">
          <div className="category-item-image" id="grocery-image">
            <img src={grocery} alt="grocery-image" />
          </div>
          <h4>Grocery</h4>
        </div>
      </a>
      <a href="/fashion">
        <div className="category-item" id="fashion">
          <div className="category-item-image" id="fashion-image">
            <img src={fashion} alt="fashion-image" />
          </div>
          <h4>Fashion</h4>
        </div>
      </a>
      <a href="/stationary">
        <div className="category-item" id="stationary">
          <div className="category-item-image" id="stationary-image">
            <img src={stationary} alt="stationary-image" />
          </div>
          <h4>Stationary</h4>
        </div>
      </a>
      <a href="/automobile">
        <div className="category-item" id="automobile">
          <div className="category-item-image" id="automobile-image">
            <img src={automobile} alt="automobile-image" />
          </div>
          <h4>Automobile</h4>
        </div>
      </a>
      <a href="/toys">
        <div className="category-item" id="toys">
          <div className="category-item-image" id="toys-image">
            <img src={toys} alt="toys-image" />
          </div>
          <h4>Toys</h4>
        </div>
      </a>
    </div>
  );
}
