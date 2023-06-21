import { ADD_TO_CART, REMOVE_ITEM, CLEAR_CART } from "../utils/strings";
const getLocalCartData = () => {
  let localCartData = localStorage.getItem("snapCart");
  const parsedData = JSON.parse(localCartData);
  if (!Array.isArray(parsedData)) return [];
  return parsedData;
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
      let existingProduct = state?.cart?.find((elem) => elem.id == id);
      if (existingProduct) {
        let updateProduct = state?.cart?.map((curElem) => {
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
          cart: [...state?.cart, cartProduct],
        };
      }
    case REMOVE_ITEM:
      const updateCart = state?.cart?.filter(
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
    case "SET_DECREMENT": {
      let updatedProducts = state?.cart?.map((curElem) => {
        if (curElem.id == action.payload) {
          let decAmount = curElem.amount - 1;
          if (decAmount <= 1) {
            decAmount = 1;
          }
          return {
            ...curElem,
            amount: decAmount,
          };
        } else {
          return curElem;
        }
      });
      return { ...state, cart: updatedProducts };
    }
    case "SET_INCREMENT": {
      let updatedProducts = state?.cart?.map((curElem) => {
        if (curElem.id == action.payload) {
          let decAmount = curElem.amount + 1;
          return {
            ...curElem,
            amount: decAmount,
          };
        } else {
          return curElem;
        }
      });
      return { ...state, cart: updatedProducts };
    }
    case "CART_TOTAL_PRICE": {
      let total_price = state?.cart?.reduce((initialVal, curElem) => {
        let { price, amount } = curElem;
        let realAmount = price.replace("$", "")?.replace(",", "");
        initialVal = initialVal + amount * realAmount;
        return initialVal;
      }, 0);
      return {
        ...state,
        total_price,
      };
    }
    default:
      state;
  }
};
export { initialState, reducer };
