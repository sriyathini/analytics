import * as types from '../action/cartActionTypes';

const initialState = {
  cartItems: [],
};

const cart = (state = initialState, action) => {
  switch (action.type) {
   case types.ADD_ITEM:
      const newItemId = action.payload.id;
      const existingItemIndex = state.cartItems.findIndex((item) => item.id === newItemId);
    
      if (existingItemIndex !== -1) {
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[existingItemIndex].quantity++;
        return {
          ...state,
          cartItems: updatedCartItems,
        };
      } else {
        console.log(state)
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };

  }
 

    case types.REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };

    case types.INCREMENT_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          if (item.id === action.payload) {
            item.quantity++;
          }
          return item;
        }),
      };

    case types.DECREMENT_ITEM:
      return {
        ...state,
        cartItems: state.cartItems
          .map((item) => {
            if (item.id === action.payload) {
              item.quantity--;
            }
            return item;
          })
          .filter((item) => item.quantity !== 0),
      };

    default:
      return state;
  }
};

export default cart;
