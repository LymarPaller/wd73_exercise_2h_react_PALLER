import { ShoppingCart } from "phosphor-react"
import { Link } from "react-router-dom"
import "./NavBar.css"

function Navbar () {
    return(
        <>
        <div className="navbar">
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/product">Product Gallery</Link>
                <Link to="/cart">
                    <ShoppingCart size={35} />
                </Link>
            </div>
        </div>
        </>
    )
}

export default Navbar