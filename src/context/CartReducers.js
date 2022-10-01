
export const CartReducer =(state,action)=>{

  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload
      }
      case "GET_ALL_FROM_CART_DATABASE":
        return{
          ...state,
        cart: action.payload
        }
    case "ADD_TO_CART": 
    //...state,cart:[...state.cart,{...action.payload}]
    //const data=state.cart.filter(c=>c.id !== action.payload.id);
      return {
      ...state,
       cart: action.payload
        
      }
     
    case "REMOVE_FROM_CART":
      //const dataCart=state.cart.filter(c=>c.id !== action.payload.id)
      return {
         ...state,
        cart: action.payload
       //...state,
       //cart:state.cart.filter(c=>c.id !== action.payload.id) 
      };

    default:
     return state;
  }
}