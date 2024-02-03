import NNTPGraphic from './NNTPGraphic.jsx'
import Editorial from './Editorial.jsx'
import ProductGallery from './ProductGallery.jsx'
import products from '../products.json'

const HomePage = () => {
    return (
        <>
            <NNTPGraphic />
            <Editorial />
            <ProductGallery products={products} />
        </>
    )
}

export default HomePage
