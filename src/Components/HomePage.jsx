import React from 'react'

import NNTPGraphic from './NNTPGraphic.jsx'
import Editorial from './Editorial.jsx'
import ProductGallery from './ProductGallery.jsx'

import { ShopContext } from '../App.jsx'

const HomePage = () => {
    const { client } = React.useContext(ShopContext)

    const [products, setProducts] = React.useState([])

    React.useEffect(() => {
        client.product.fetchAll().then((products) => {
            setProducts(products)
        })
    }, [client])

    return (
        <div className={'home-page'}>
            <NNTPGraphic />
            <Editorial />
            <h1>Shop the collection</h1>
            <ProductGallery products={products} />
        </div>
    )
}

export default HomePage
