import React from "react";
import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { countTotalPrice } from "../../redux/cart/cart.selectors";

import "./checkout.styles.scss";

const CheckoutPage = ({ cartItems, totalPrice }) => (
  <div className="checkout-page">
    <ul className="checkout-header">
      <li className="header-block">
        <span>Product</span>
      </li>
      <li className="header-block">
        <span>Description</span>
      </li>
      <li className="header-block">
        <span>Quantity</span>
      </li>
      <li className="header-block">
        <span>Price</span>
      </li>
      <li className="header-block">
        <span>Remove</span>
      </li>
    </ul>

    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}

    <div className="total">
      <span>TOTAL: ${totalPrice}</span>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
  totalPrice: countTotalPrice(state),
});

export default connect(mapStateToProps)(CheckoutPage);

// const CheckoutPage = (state) => {
//   console.log(state);
//   return (
//     <div className="checkout-page">
//       <ul className="checkout-header">
//         <li className="header-block">
//           <span>Product</span>
//         </li>
//         <li className="header-block">
//           <span>Description</span>
//         </li>
//         <li className="header-block">
//           <span>Quantity</span>
//         </li>
//         <li className="header-block">
//           <span>Price</span>
//         </li>
//         <li className="header-block">
//           <span>Remove</span>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default connect((state) => {
//   console.log("Man ishlavomman!")
//   return {
//     cartItems: state.cart.cartItems,
//     totalPrice: state.cart.cartItems.reduce(
//       (acc, cartItem) => acc + cartItem.quantity * cartItem.price,
//       0
//     ),
//   };
// })(CheckoutPage);
