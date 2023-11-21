import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { useNavigate } from 'react-router-dom'


const CartWidget = () => {
    const  { totalQuantity } = useContext(CartContext)
    const navigate = useNavigate()
    return (
        <button onClick={() => navigate('/cart')}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABGElEQVR4nO2UP04CQRTGfzaY2MsFSAxngMbSG5B4gu1okX75k3gErbmANY2xsuEQLNYKBY0u2eQj2ZhdmH2zKMX8kpdsZt57883MtwOBQODMeANSxRcwcKjZ59fCa65hFj9A6y8F5JmpccQ/CYjUeHZg0bL4zVDjT1UEtFX0AVx4CphrvEdFEhVmYqxXcAVsgW/g+hQ+SI8IuNP8OzX7wFXAo+ZjDLQP+MCVhXrcGutx8UEZTb0lG+Dy1O9BEfeqfcGDyMEHZTyrtu8joKVjTI2R1d7gyQD4NCy+Bh6oiQYwBVYy5lhjVXPMTAp2ODLk4Ps7doCuvhNDjreAbq750pBjZlxwvLEhx0xDCyTaVVxiwmM5gcB5sQNKLZu6GRpwpAAAAABJRU5ErkJggg=="></img>
            {totalQuantity}
        </button>
    )
}

export default CartWidget