import { ShoppingCart } from "phosphor-react"
import { Link } from "react-router-dom"
import "../css/NavBar.css"
import { useSelector } from "react-redux"

function Navbar () {
    const cartItemCount = useSelector((state) => state.cartItemCount)
    return(
        <>
        <div className="navbar-container">
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/product">Product Gallery</Link>
                <Link to="/cart" className="cart">
                    <ShoppingCart size={35} />
                    <div className="cart-items">
                        <p>{cartItemCount}</p>
                    </div>
                </Link>
            </div>
        </div>
        </>
    )
}

export default Navbar