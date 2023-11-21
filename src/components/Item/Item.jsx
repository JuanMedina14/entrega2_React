import { Link } from "react-router-dom"
import './Item.css'
const Item = ({ id, name, img, price}) => {

  return (
    <div className="item">
      <p>{name}</p>
      <img src={img} style={{ width: 120 }} />
      <h3>${price}</h3>
      <Link className="ver" to={`/item/${id}`}> Ver +</Link>
    </div>
  )
}

export default Item
