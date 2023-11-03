import ItemCount from "../ItemCount/ItemCount"
import { useState,useContext } from "react";

import { CartContext } from "../../context/CartContext";

const ItemDetail = ({id, name, category, img, price, stock, description}) => {

    const { addItem, isInCart } = useContext(CartContext)



    const handleOnAdd = (quantity) =>{
      console.log(`se agregaron ${quantity} ${name}`)
      
      const productToAdd = {
        id, name, price, quantity
      }

      addItem(productToAdd)
    }

    

    return (
      <div>
        <p>{name}</p>
        <img src={img} style={{ width: 120 }} />
        <p>${price}</p>
        <p>Descripcion: {description}</p>
        

        {isInCart(id) ? (
          <button>Finalizar compra</button>
        ) : (
          <ItemCount stock={stock} onAdd={handleOnAdd} />
        )
      }
      </div>
    )
  }
  
  export default ItemDetail
   