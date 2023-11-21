import { useState, createContext, useContext, useEffect } from 'react'
export const CartContext = createContext()
export const CartProvider = ({ children }) => {

  

  const [cart, setCart] = useState([])
    console.log(cart)


  const addItem = (productToAdd) => {
    if(!isInCart (productToAdd.id)){
      setCart(prev=> [...prev, productToAdd])
    }else{
      console.log(`el producto ya esta agregado`);
    }
  }

  const isInCart = (id) =>{
    return cart.some(prod => prod.id ===id)
  }
    

  const removeItem = (id) =>{
    const cartUpdated = cart.filter(prod => prod.id !== id)
    setCart(cartUpdated)
  }

  const getTotalQuantity = () =>{
    let totalQuantity = 0
    
    cart.forEach(prod => {
      totalQuantity += prod.quantity
    })

    return totalQuantity
  }

  const totalQuantity = getTotalQuantity()
    

  const clearCart = () =>{
    setCart([])
  }

  const getTotal = () =>{
    let total = 0
    cart.forEach(prod => {
      total += prod.price * prod.quantity
    })
    return total
  }

  const total = getTotal()


  useEffect (() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  return (
        <CartContext.Provider value= {{cart, addItem, removeItem, totalQuantity, isInCart, clearCart, total}}>
            {children}
        </CartContext.Provider>
    )
}




export const useCart = () => {
  return useContext(CartContext)
}
