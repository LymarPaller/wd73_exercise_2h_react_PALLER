import { useDispatch } from "react-redux"
import "../css/ProductItem.css"
import { addToCart, addToCart10 } from "../store/cartItemCountReducer"
import { addProductToCart, addProductToCart10 } from "../store/cartReducer"

function ProductItem (props) {
    const { name, description, thumbnail, price, id } = props
    const dispatch = useDispatch()

    function handleClick(count) {
        dispatch(addToCart(count))
        dispatch(addProductToCart({
            id,
            name,
            price,
            count
        }))
    }

    return (
        <>
        <div className="card-div">
            <div className="card bg-dark">
                <img src={thumbnail} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text card-description">{description}</p>
                    <div className="card-price-btn">
                        <p className="card-text">${price}</p>
                        <button className="btn btn-primary" onClick={() => handleClick(1)}>Add to Cart</button>
                        <button className="btn btn-primary" onClick={() => handleClick(10)}>Add 10</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ProductItem