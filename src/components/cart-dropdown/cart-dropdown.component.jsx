import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems, dispatch }) => {
  const navigate = useNavigate();
  // console.log("history", history);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty.</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          // history.push("/checkout");
          navigate("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

// export default withRouter(connect(mapStateToProps)(CartDropdown));
export default connect(mapStateToProps)(CartDropdown);
