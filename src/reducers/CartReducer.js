import { ADD_TO_CART, REMOVE_ITEM, CLEAR_CART } from "../utils/strings";
const getLocalCartData = () => {
  let localCartData = localStorage.getItem("snapCart");
  if (localCartData === []) {
    return [];
  } else {
    return JSON.parse(localCartData);
  }
};
const initialState = {
  cart: getLocalCartData(),
  total_item: "",
  total_price: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { id, title, price, amount } = action.payload;
      let existingProduct = state.cart.find((elem) => elem.id == id);
      if (existingProduct) {
        let updateProduct = state.cart.map((curElem) => {
          if (curElem.id == id) {
            let newAmount = curElem.amount + amount;
            return {
              ...curElem,
              amount: newAmount,
            };
          } else {
            return {
              ...curElem,
            };
          }
        });
        return {
          ...state,
          cart: updateProduct,
        };
      } else {
        let cartProduct = {
          id,
          title,
          amount,
          price,
        };
        return {
          ...state,
          cart: [...state.cart, cartProduct],
        };
      }

    case REMOVE_ITEM:
      const updateCart = state.cart.filter(
        (curElm) => curElm.id !== action.payload
      );
      return {
        ...state,
        cart: updateCart,
      };
    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };
    // case SET_DECREMENT:
    //   let updatedProduct = state.cart.map((elem) => {
    //     if (elem.id == action.payload) {
    //       console.log(elem);
    //     }
    //   });

    default:
      state;
  }
};
export { initialState, reducer };
