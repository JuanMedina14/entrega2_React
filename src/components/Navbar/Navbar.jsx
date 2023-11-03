
import CartWidget from "../CartWidget/CartWidget"
import { Link, redirect } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="nav">
            <Link to='/' className='logo'>TiendaOnline</Link>
            <section>
                <Link to='/category/celular'>Celulares</Link>
                <Link to='/category/tablet'>Tablets</Link>
                <Link to='/category/notebook'>Notebooks</Link>
            </section>
            <CartWidget />
        </nav>
    )
}

export default Navbar