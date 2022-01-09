import React from "react";
import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size }) => (
  <div className={`${size ? size : ''} menu-item`}>
    <div className="background-image" style={{
      background: `url(${imageUrl})`
    }}/>

    <div className="content">
      <h2>{title}</h2>
      <span>SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;
