import React from 'react'

import './ProductPage.css'

import { ShopContext } from '../App.jsx'
import { useParams } from 'react-router-dom'

const ProductPage = () => {
    const { id } = useParams()
    const client = React.useContext(ShopContext)
    const [product, setProduct] = React.useState(null)
    const [currentImage, setCurrentImage] = React.useState(0)

    React.useEffect(() => {
        const productID = 'gid://shopify/Product/' + id
        client.product
            .fetch(productID)
            .then((product) => {
                setProduct(product)
            })
            .catch((error) => {
                console.error('Error fetching product', error)
            })
    }, [client, id])

    if (!product) return null

    return (
        <div className={'product-page'}>
            <div className='pp-imgs-cont'>
                <img
                    className='current-img'
                    src={product.images[currentImage].src}
                    alt={product.title}
                />
            </div>
            <div className='pp-shop-card'>
                <h1>{product.title}</h1>
                <p>
                    $
                    {product.variants[0].price.amount.toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD',
                    })}{' '}
                    <span className={'compare-at-price'}>
                        $
                        {product.variants[0].compareAtPrice.amount.toLocaleString(
                            'en-US',
                            {
                                style: 'currency',
                                currency: 'USD',
                            }
                        )}
                    </span>
                </p>
                <p>{product.description}</p>
            </div>
        </div>
    )
}

export default ProductPage
