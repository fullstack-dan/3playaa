import './ProductCard.css'

const ProductCard = ({ product }) => {
    const { images, title, variants } = product
    const image = images[0].src
    const price = variants[0].price.amount.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    })
    let compareAtPrice = ''

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
            <a href={`/product/${productId}`}>
                <img src={image} alt={title} />
            </a>
            <div className={'product-text-info'}>
                <h3>{title}</h3>
                <p>
                    ${price}{' '}
                    <span className={'compare-at-price'}>
                        ${compareAtPrice}
                    </span>
                </p>
            </div>
        </div>
    )
}

export default ProductCard
