import React from 'react'
import './ShopPage.css'

import ProductGallery from './ProductGallery.jsx'
import products from '../products.json'

const ShopPage = () => {
    return (
        <div>
            <ProductGallery products={products} />
        </div>
    )
}

export default ShopPage
