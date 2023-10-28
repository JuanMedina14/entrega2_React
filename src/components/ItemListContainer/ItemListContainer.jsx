import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../itemList/itemList"
import { useParams } from "react-router-dom"



const ItemListContainer = ({ welcome }) => {
    const [products, SetProducts] = useState([])

    const { categoryId } = useParams()

    
    useEffect (() => {
        const asyncFunction = categoryId ? getProductsByCategory :  getProducts
        asyncFunction(categoryId)
            .then(response => {
                SetProducts(response)
            })
    },[categoryId])
   
    
    return (
        <div>
            <h1>{welcome}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer