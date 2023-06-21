import { createContext, useEffect, useReducer } from "react";
import { initialState, reducer } from "../reducers/CartReducer";
import { ADD_TO_CART, REMOVE_ITEM, CLEAR_CART } from "../utils/strings";
const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addToCart = (id, title, price, amount) => {
    console.log(id, title, price, amount);
    dispatch({ type: ADD_TO_CART, payload: { id, title, price, amount } });
  };
  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  // const setDecrease = (id) => {
  //   dispatch({ type: SET_DECREMENT, payload: id });
  // };

  // const setIncrease = (id) => {
  //   dispatch({ type: SET_INCREMENT, payload: id });
  // };

  useEffect(() => {
    localStorage.setItem("snapCart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
