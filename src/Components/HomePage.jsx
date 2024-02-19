import React from 'react'

import NNTPGraphic from './NNTPGraphic.jsx'
import Editorial from './Editorial.jsx'
import ProductGallery from './ProductGallery.jsx'

import { ShopContext } from '../App.jsx'

const HomePage = () => {
    const client = React.useContext(ShopContext)

    const [products, setProducts] = React.useState([])

    React.useEffect(() => {
        client.product.fetchAll().then((products) => {
            setProducts(products)
        })
    }, [client])

    return (
        <>
            <NNTPGraphic />
            <Editorial />
            <ProductGallery products={products} />
        </>
    )
}

export default HomePage
