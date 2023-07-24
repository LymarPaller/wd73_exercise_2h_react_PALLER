import "./ProductItem.css"

function ProductItem (props) {
    const { key, name, description, thumbnail, price} = props

    return (
        <>
        <div className="col card-div">
            <div className="card" style={{
                width: '15rem'
            }}>
                <img src={thumbnail} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text card-description">{description}</p>
                    <div className="card-price-btn">
                        <p className="card-text">{price}</p>
                        <button className="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ProductItem