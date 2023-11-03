import { useState } from "react";

const ItemCount = ({stock, onAdd, initial = 1}) => {
    const [count, setCount] = useState(initial)

    const decrement = () => {
        if(count > 1)
        setCount(prev => prev - 1)
    }

    const increment = () => {
        if(count < stock)
        setCount(prev => prev + 1)
    }

    return (
    <div>
        <h1>{count}</h1>
        <button onClick={decrement}>decrement</button>
        <button onClick={() => onAdd(count)}>Agregar carrito</button>
        <button onClick={increment}>increment</button>
    </div> 
    )
};

export default ItemCount