import ItemCount from "../ItemCount/ItemCount"
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({id, name, img, price, stock, description}) => {

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
          <Link className="comprar"   to="/cart">Finalizar compra</Link>
        ) : (
          <ItemCount stock={stock} onAdd={handleOnAdd} />
        )
      }
      </div>
    )
  }
  
  export default ItemDetail
   