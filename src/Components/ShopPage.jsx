import React from 'react'
import './ShopPage.css'

import ProductGallery from './ProductGallery.jsx'
import { ShopContext } from '../App.jsx'

const ShopPage = () => {
    const { client } = React.useContext(ShopContext)
    const [products, setProducts] = React.useState([])
    React.useEffect(() => {
        setProducts([
            {
                id: 'gid://shopify/Product/123456',
                title: '3Playaa Hoodie',
                images: [{ src: 'hoodie.webp' }],
                variants: [
                    {
                        price: { amount: 49.99 },
                        compareAtPrice: { amount: 69.99 },
                    },
                ],
            },
            {
                id: 'gid://shopify/Product/123457',
                title: '3Playaa Sweatpants',
                images: [{ src: 'pants.webp' }],
                variants: [
                    {
                        price: { amount: 49.99 },
                        compareAtPrice: { amount: 69.99 },
                    },
                ],
            },
            {
                id: 'gid://shopify/Product/123458',
                title: '3Playaa Full Set',
                images: [{ src: 'set.webp' }],
                variants: [
                    {
                        price: { amount: 99.99 },
                        compareAtPrice: { amount: 139.99 },
                    },
                ],
            },
        ])
    }, [])

    return (
        <div className={'shop-page'}>
            <h1>No Need To Pretend Collection</h1>
            {products.length > 0 && <ProductGallery products={products} />}
        </div>
    )
}

export default ShopPage
