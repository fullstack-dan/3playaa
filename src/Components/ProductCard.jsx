import './ProductCard.css'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
    const { images, title, variants } = product
    const image = images[0].src
    const price = variants[0].price.amount.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    })
    let compareAtPrice = null

    if (variants[0].compareAtPrice) {
        compareAtPrice = variants[0].compareAtPrice.amount.toLocaleString(
            'en-US',
            {
                style: 'currency',
                currency: 'USD',
            }
        )
    }

    const productId = product.id.split('gid://shopify/Product/')[1]

    return (
        <div className='product-card'>
            <Link to={`/products/${productId}`}>
                <img src={image} alt={title} />
            </Link>
            <div className={'product-text-info'}>
                <Link to={`/products/${productId}`}>
                    <h3>{title}</h3>
                </Link>
                <p>
                    ${price}{' '}
                    {compareAtPrice && (
                        <span className={'compare-at-price'}>
                            ${compareAtPrice}
                        </span>
                    )}
                </p>
            </div>
        </div>
    )
}

export default ProductCard
