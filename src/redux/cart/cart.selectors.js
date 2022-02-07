import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

const countItems = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
);

export { countItems };
