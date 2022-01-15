import React from "react";
import { withRouter } from "react-router-dom";
// import { Link } from "react-router-dom";
import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
  return (
    <div
      onClick={() => history.push(match.url + linkUrl)}
      className={`${size ? size : ""} menu-item`}
    >
      <div
        className="background-image"
        style={{
          background: `url(${imageUrl})`,
        }}
      />

      <div className="content">
        <h2>{title}</h2>
        <span>SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
