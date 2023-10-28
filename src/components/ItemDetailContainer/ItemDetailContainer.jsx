import { useState, useEffect } from "react"
import { getProductsById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [product, SetProduct] = useState(null)

    const { itemId } = useParams()

    useEffect (() => {
        getProductsById(itemId)
            .then(response => {
                SetProduct(response)
            })
    },[itemId])
   
    
    return (
        <div>
            <h1>Detalle del producto</h1>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer