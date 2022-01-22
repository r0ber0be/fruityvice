import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
export const CartContext = createContext({});

export const CartProvider = ({children}) => {
  //onde estão os dados vindos da api
  const [fruitsDb, setFruitsDb] = useState([]);
  useEffect(() => {
    axios.get("/all").then(({data}) => {
      setFruitsDb(data);
      console.log(data)
    }).catch((error) => {
      alert(error);
    });
  }, []);
  console.log(fruitsDb)
  //onde vão ser guardados os itens do carrinho
  const [fruitsCart, setFruitsCart] = useState([]);
  //verificando se há itens salvos no localstorage ao atualizar a página
  useEffect(() => {
    const cartLocal = window.localStorage.getItem("cart");
    if(cartLocal) {
      setFruitsCart(JSON.parse(cartLocal));
    }
  }, []);

  function addItemToCart(fruit) {
    let name = fruit.name;
    let id = fruit.id;
    let genus = fruit.genus;
    
    const fruitObject = { name, id, genus };
    setFruitsCart([...fruitsCart, fruitObject]);
    
    window.localStorage.setItem("cart", JSON.stringify(fruitsCart));
  }
  
  function removeItemFromCart(index) {
    const fAux = fruitsCart;
    
    const fruitsFilter = fruitsCart.filter((fruit, i) => {
      if(fAux[index] !== fAux[i]) {
        return fruit;
      } 
      return false;
    });

    window.localStorage.setItem("cart", JSON.stringify(fruitsFilter));
    setFruitsCart(fruitsFilter);
  }

  function clearCart() {
    window.localStorage.removeItem("cart", JSON.stringify(fruitsCart));
    setFruitsCart([]);
  }

  return (
    <CartContext.Provider
      value={{fruitsDb ,fruitsCart, addItemToCart, removeItemFromCart, clearCart}}> 
        {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const cart = useContext(CartContext);
  return cart;
}