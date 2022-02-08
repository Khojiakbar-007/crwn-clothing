import { createSelector, createSelectorCreator } from "reselect";

const selectCartItems = (state) => state.cart.cartItems;

const countItems = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
);

const countTotalPrice = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((acc, cartItem) => acc + cartItem.quantity * cartItem.price, 0)
);

export { countItems, countTotalPrice };
