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
        <div className="product-container container-fluid">
            <div className="header-container">
                <h1>Season 07 Available Cards</h1>
            </div>
            <div className="cards-container">
                <div className="cards">
                    {
                        data.map(
                            data => <ProductItem 
                            key={data.id}
                            name={data.name}
                            description={data.desc}
                            thumbnail={data.card_images[0].image_url}
                            price={data.card_prices[0].cardmarket_price}
                            id={data.id}
                            />
                        )
                    }
                </div>
            </div>
        </div>
        </>
    )
}

export default ProductGallery