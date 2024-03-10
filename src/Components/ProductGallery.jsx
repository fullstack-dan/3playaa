import './ProductGallery.css'
import ProductCard from './ProductCard.jsx'
import { useEffect, useRef, useState } from 'react'

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
    })

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
            })
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return windowSize
}

const ProductGallery = ({ products }) => {
    const { width } = useWindowSize()
    const isMobile = width < 600 // Threshold for mobile view
    const [currentIndex, setCurrentIndex] = useState(0)

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : products.length - 1
        )
    }

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length)
    }

    const galleryRef = useRef(null)

    useEffect(() => {
        if (galleryRef.current) {
            const node = galleryRef.current
            node.scrollLeft = node.children[currentIndex].offsetLeft
        }
    }, [currentIndex])

    return (
        <div className='product-gallery' ref={galleryRef}>
            {products.map((product) => (
                <ProductCard product={product} key={product.id} />
            ))}
        </div>
    )
}

export default ProductGallery
