import Product1 from '../images/product1.png';
const initialState = {
    products: [
      { id: 1, name: 'monitor', price: 39000, quantity: 0, image: Product1 },
      { id: 2, name: 'CPU', price: 39999, quantity: 0, image: 'https://pluspng.com/img-png/png-cpu-cpu-png-1000.png' },
      { id: 3, name: 'Mouse', price: 49999, quantity: 0, image: 'https://th.bing.com/th/id/OIP.3B0iQRjX9YQums9Jm4aQCQHaHa?w=176&h=180&c=7&r=0&o=5&pid=1.7' }
    ],
    cart: []
  }
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        const existingItem = state.cart.find(item => item.id === action.payload.id);
  
        if (existingItem) {
          return {
            ...state,
            cart: state.cart.map(item =>
              item.id === action.payload.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          };
        }
  
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }]
        };
        
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          products: state.products.map(product =>
            product.id === action.payload
              ? { ...product, quantity: 0 }
              : product
          ),
          cart: state.cart.filter(item => item.id !== action.payload)
        }
      case 'INCREMENT_QUANTITY':
        const updatedCartIncrement = state.cart.map(item =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
  
        return {
          ...state,
          products: state.products.map(product =>
            product.id === action.payload
              ? { ...product, quantity: product.quantity + 1 }
              : product
          ),
          cart: updatedCartIncrement
        }
  
      case 'DECREMENT_QUANTITY':
        const updatedCartDecrement = state.cart.map(item =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ).filter(item => item.quantity > 0);
  
        return {
          ...state,
          products: state.products.map(product =>
            product.id === action.payload
              ? { ...product, quantity: product.quantity - 1 }
              : product
          ),
          cart: updatedCartDecrement
        }
  
      default:
        return state
    }
  }
  
  export default cartReducer;