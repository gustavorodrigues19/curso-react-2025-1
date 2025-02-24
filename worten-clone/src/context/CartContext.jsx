import { createContext, useState, useContext } from "react";

// Cria o context com os seus valores
const CartContext = createContext({
  cart: null,
  addCart: () => {},
  removeCart: () => {},
});

// Declara os valores no provider do context
export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState({
    items: [],
    quantity: 0,
    total: 0, // preço
  });

  const addCart = (input) => {
    setCart({
      ...cart,
      items: [input, ...cart.items],
    });
  };

  const removeCart = (id) => {
    console.log(id);
  };

  return (
    <CartContext.Provider value={{ cart, addCart, removeCart }}>
      {children}
    </CartContext.Provider>
  );
}

// Lê os valores do context
export const useCartContext = () => useContext(CartContext);
