import { useCart } from "../../context/CartContext"
import { Link } from "react-router-dom"
import './Cart.css'
const Cart = () => {

    const {cart,total,clearCart} = useCart()

    const vaciar = () =>{
        clearCart()
    }

    return (
        <div>
            <h1>Detalle de la Compra</h1>
            <div>
               {
                cart.map(prod => {
                    return (
                        <div className="carrito" key={prod.id}>

                            <h5>Producto</h5>
                            <h3>{prod.name}</h3>
                            <h5>Cantidad</h5>
                            <h4>{prod.quantity}</h4>
                            <h5>precio</h5>
                            <h4>${prod.price}</h4>
                            <h5>Precio total:</h5>
                            <h4>${prod.price * prod.quantity}</h4>
                           
                        </div>
                    )
                })
               }
               <h3 className="total">Total: ${total}</h3>
            </div>
            <Link to='/checkout' className="comprar">Comprar</Link>
            <button className="vaciar" onClick={vaciar}>Vaciar Carrito</button>
        </div>
    )
}

export default Cart