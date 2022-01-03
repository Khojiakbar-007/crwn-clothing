import React from "react";
import "./homepage-styles/homepage.styles.css";

const newFeature = function() {
  console.log('Welcome to the application!')
}

function customizeProduct(id, num) {
  console.log(`${num} of ${id} products are in your cart.`);
}

const HomePage = () => (
  <div className="homepage">
    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <h2>HATS</h2>
          <span>SHOP NOW</span>
        </div>
      </div>

      {/* <h3 className="">
        Something TO ChEcK Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Tenetur ad nobis praesentium id fuga, necessitatibus nihil veniam,
        natus ratione dignissimos officiis fugit doloribus omnis eum. A debitis
        necessitatibus et id!
      </h3> */}

      <div className="menu-item">
        <div className="content">
          <h2>JACKETS</h2>
          <span>SHOP NOW</span>
        </div>
      </div>

      <div className="menu-item">
        <div className="content">
          <h2>SNEAKERS</h2>
          <span>SHOP NOW</span>
        </div>
      </div>

      <div className="menu-item">
        <div className="content">
          <h2>WOMENS</h2>
          <span>SHOP NOW</span>
        </div>
      </div>

      <div className="menu-item">
        <div className="content">
          <h2>MANS</h2>
          <span>SHOP NOW</span>
        </div>
      </div>
    </div>
  </div>
);

customizeProduct()

export default HomePage;
