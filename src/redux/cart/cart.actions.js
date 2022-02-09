import CartActionTypes from "./cart.types";

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
  payload: null,
});

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export const removeOneItem = (item) => ({
  type: CartActionTypes.REMOVE_ONE_ITEM,
  payload: item,
})


export const removeItemFromCart = (item) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item,
});