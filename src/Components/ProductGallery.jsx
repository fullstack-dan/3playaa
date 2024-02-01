import './ProductGallery.css'
import ProductCard from './ProductCard.jsx'

const ProductGallery = ({ products }) => {
    return (
        <div className='gallery-container'>
            <div className='product-gallery'>
                {products.map((product) => (
                    <ProductCard product={product} key={product.id} />
                ))}
            </div>
        </div>
    )
}

export default ProductGallery
