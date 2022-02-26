import React from "react";
import { connect } from "react-redux";

import { removeOneItem, addItem } from "../../redux/cart/cart.actions";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem, removeCartItem, removeOneItem, addItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>

      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeOneItem(cartItem)}>&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={() => removeCartItem()}>
        ✕
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeOneItem: (itemToRemove) => dispatch(removeOneItem(itemToRemove)),
  addItem: (itemToAdd) => dispatch(addItem(itemToAdd)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
