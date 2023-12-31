import { useDispatch, useSelector } from "react-redux"
import "../css/Checkout.css"
import { removeAllProductFromCart, removeProductFromCart } from "../store/cartReducer"
import { decreaseCart, removeAll } from "../store/cartItemCountReducer"

function Checkout() {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()

    const handleRemoveButtonClick = (productId) => {
        dispatch(removeProductFromCart(productId))
        dispatch(decreaseCart())
    }

    const handleRemoveAllClick = (productId => {
        dispatch(removeAllProductFromCart(productId))
        dispatch(removeAll())
    })

    return (
        <>
        <div className="checkout-div">
            <h3 className="checkout-header">Checkout</h3>
            <div className="check-out-container">
                {
                cart.map(
                    cartItem => {
                        return (
                            <div key={cartItem.id}  className="check-out">
                                <div className="product-summary">
                                    <div className="product-summary-title">
                                        <h4>{cartItem.name}</h4>
                                    </div>
                                    <div className="product-summary-price">
                                        <p>Price: ${cartItem.price}</p>
                                        <p>X{cartItem.count}</p>
                                    </div>
                                    <div className="product-summary-btn">
                                    <button onClick={() => handleRemoveButtonClick(cartItem.id)}>Remove</button>
                                    <button onClick={() => handleRemoveAllClick(cartItem.id)}>Remove All</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                )
                }
            </div>
        </div>
        </>
    )
}

export default Checkout