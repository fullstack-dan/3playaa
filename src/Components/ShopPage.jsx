import React from 'react'
import './ShopPage.css'

import ProductGallery from './ProductGallery.jsx'
import { ShopContext } from '../App.jsx'

const ShopPage = () => {
    const { client } = React.useContext(ShopContext)
    const [products, setProducts] = React.useState([])
    React.useEffect(() => {
        client.product.fetchAll().then((products) => {
            setProducts(products)
        })
    }, [client])

    return (
        <div className={'shop-page'}>
            <h1>No Need To Pretend Collection</h1>
            {products.length > 0 && <ProductGallery products={products} />}
        </div>
    )
}

export default ShopPage
