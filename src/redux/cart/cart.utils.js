export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  // add new item to cart array
  if (!existingCartItem)
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];

  // increase quantity of an existing cart item
  return cartItems.map((cartItem) =>
    cartItem.id === existingCartItem.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
  );
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  return cartItems.filter((cartItem) => cartItem !== cartItemToRemove);
};

export const removeOneItem = (cartItems, cartItemToRemove) => {
  // if it is less than 1, remove from cart
  if (cartItemToRemove.quantity <= 1)
    return removeItemFromCart(cartItems, cartItemToRemove);

  // otherwise, decrease quantity
  return cartItems.map((cartItem) =>
    cartItem === cartItemToRemove
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
