import { useEffect, useState } from "react"
import ProductItem from "../components/ProductItem"
import "./ProductGallery.css"
import { useSelector } from "react-redux"

function ProductGallery () {
    const [data, setProducts] = useState([])
    const cartItemCount = useSelector(state => state.cartItemCount)

    useEffect(() => {
        document.title = 'Products'
    }), ([])

    useEffect(() => {
        fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?&fname=dragon')
            .then(res => res.json())
            .then(data => {
                setProducts(data.data)
            })
    }, [setProducts])

    return (
        <>
        <div>
            <div>
                <h1>Products</h1>
            </div>

            <div>
                <h3>Cart Items: <span className="fw-bold">{cartItemCount}</span></h3>
            </div>
            <div className="cards row">
                {
                    data.map(
                        data => <ProductItem 
                        // key={product.id}
                        name={data.name}
                        description={data.desc}
                        thumbnail={data.card_images[0].image_url}
                        price={data.card_prices[0].cardmarket_price}
                        />
                    )
                }
            </div>
        </div>
        </>
    )
}

export default ProductGallery