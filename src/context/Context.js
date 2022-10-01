import React, { useContext, useEffect, useReducer, useState } from 'react'
import { createContext } from 'react'
import { myAxios } from '../services/helper';
import { CartReducer } from './CartReducers';


const Cart = createContext();

const Context = ({ children }) => {
  let Token = JSON.parse(localStorage.getItem("data"));

  const [state, dispatch] =  useReducer(CartReducer, {
    products: [],
    cart: []
  });

  return (
    <Cart.Provider value={{ state, dispatch }}>
      {children}
    </Cart.Provider>
  )
}

export default Context;

export const CartState = () => {
  return useContext(Cart);
};