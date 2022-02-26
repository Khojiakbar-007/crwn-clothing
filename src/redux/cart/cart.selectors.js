import { createSelector, createSelectorCreator } from "reselect";

const selectCart = (state) => state.cart;

const selectCartItems = createSelector([selectCart], (cart) => cart.cartItems);
// .cartItems;

const countItems = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
);

const countTotalPrice = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (acc, cartItem) => acc + cartItem.quantity * cartItem.price,
    0
  )
);

export { countItems, countTotalPrice };
