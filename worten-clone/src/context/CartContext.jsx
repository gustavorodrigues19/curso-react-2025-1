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
    cartQuantity: 0,
    total: 0, // preço
  });

  const addCart = (input) => {
    const cartItem = cart.items.find((item) => item.id === input.id);

    if (cartItem) {
      const newCartItems = cart.items.map((item) => {
        const quantity =
          item.id === input.id ? item.quantity + 1 : item.quantity;
        return {
          ...item,
          quantity,
        };
      });
      setCart({
        cartQuantity: cart.cartQuantity + 1,
        items: newCartItems,
        total: cart.total + input.price,
      });
    } else {
      setCart({
        cartQuantity: cart.cartQuantity + 1,
        items: [{ ...input, quantity: 1 }, ...cart.items],
        total: cart.total + input.price,
      });
    }
  };

  const removeCart = (id) => {
    const filteredList = cart.items.filter((item) => item.id !== id);
    const selectedItem = cart.items.find((item) => item.id === id);
    setCart({
      items: filteredList,
      cartQuantity: cart.cartQuantity - selectedItem.quantity,
      total: cart.total - selectedItem.quantity * selectedItem.price,
    });
  };

  return (
    <CartContext.Provider value={{ cart, addCart, removeCart }}>
      {children}
    </CartContext.Provider>
  );
}

// Lê os valores do context
export const useCartContext = () => useContext(CartContext);
