import { createContext, useState } from "react";


export const CartContext = createContext (null)

export const ShoppingCartProvider = ({
    children}) => {
  const [cart,setCart] = useState ([])


 const mostrarProduct = []



  return(
    <CartContext.Provider value={{cart,setCart, mostrarProduct}}>
        {children}
    </CartContext.Provider>

)

}
export default ShoppingCartProvider