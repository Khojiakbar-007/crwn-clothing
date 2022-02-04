import CartActionTypes from "./cart.types";

const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
    payload: null,
})

export default toggleCartHidden;