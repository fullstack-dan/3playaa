import './ProductGallery.css'
import ProductCard from './ProductCard.jsx'

const ProductGallery = ({ product }) => {
    return (
        <div className='product-gallery'>
            {product.map((product) => (
                <ProductCard product={product} key={product.id} />
            ))}
        </div>
    )
}

export default ProductGallery
