import ItemCount from "../ItemCount/ItemCount"


const ItemDetail = ({ name, img, price, stock, description}) => {
    return (
      <div>
        <p>{name}</p>
        <img src={img} style={{ width: 120 }} />
        <p>${price}</p>
        <p>Descripcion: {description}</p>
        <ItemCount stock={stock} />
      </div>
    )
  }
  
  export default ItemDetail
   