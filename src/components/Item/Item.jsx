import { Link } from "react-router-dom"

const Item = ({ id, name, img, price}) => {
  return (
    <div className="item">
      <p>{name}</p>
      <img src={img} style={{ width: 120 }} />
      <p>${price}</p>
      <Link to={`/item/${id}`}> Ver +</Link>
    </div>
  )
}

export default Item
