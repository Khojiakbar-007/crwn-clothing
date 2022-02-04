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