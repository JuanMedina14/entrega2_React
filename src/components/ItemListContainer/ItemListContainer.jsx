
import { useState, useEffect } from "react"
import ItemList from "../itemList/itemList"
import { useParams } from "react-router-dom"
import { getProducts } from "../../services/firebase/firestore/products"


const ItemListContainer = ({ welcome }) => {
    const [products, SetProducts] = useState([])

    const { categoryId } = useParams()

    
    useEffect (() => {
        const asyncFunction = () => getProducts(categoryId)
        asyncFunction()
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