import './ProductCard.css'

const ProductCard = ({ product }) => {
    const image = product.images[0].src

    return (
        <div className='product-card'>
            <img src={image} alt={product.name} />
            <div className={'product-text-info'}>
                <h3>{product.title}</h3>
                <p>
                    {product.variants[0].price.toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD',
                    })}
                </p>
            </div>
        </div>
    )
}

export default ProductCard
