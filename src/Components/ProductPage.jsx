import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import './ProductPage.css'
import { CartContext } from '../Components/CartContext.jsx'

const exampleProducts = [
    {
        id: '123456',
        title: '3Playaa Hoodie',
        description:
            'The ultimate blend of style and comfort, the 3Playaa Hoodie is made from premium cotton and features a relaxed fit. Perfect for everyday wear or lounging in style.',
        images: [
            { id: '1', src: '../hoodie.webp' },
            { id: '2', src: '../hoodie-back.webp' },
        ],
        variants: [
            {
                price: { amount: 49.99 },
                compareAtPrice: { amount: 69.99 },
            },
        ],
        options: [
            {
                id: 'size-option',
                name: 'Size',
                values: ['S', 'M', 'L', 'XL'],
            },
        ],
    },
    {
        id: '123457',
        title: '3Playaa Sweatpants',
        description:
            'Designed for movement and relaxation, the 3Playaa Sweatpants offer a tapered fit with premium stretch cotton. Elevate your casual wear game with these stylish joggers.',
        images: [{ id: '1', src: '../pants.webp' }],
        variants: [
            {
                price: { amount: 49.99 },
                compareAtPrice: { amount: 69.99 },
            },
        ],
        options: [
            {
                id: 'size-option',
                name: 'Size',
                values: ['S', 'M', 'L', 'XL'],
            },
        ],
    },
    {
        id: '123458',
        title: '3Playaa Full Set',
        description:
            'The ultimate streetwear combo. The 3Playaa Full Set includes our signature hoodie and sweatpants, perfectly matched for effortless style and comfort.',
        images: [{ id: '1', src: '../set.webp' }],
        variants: [
            {
                price: { amount: 99.99 },
                compareAtPrice: { amount: 139.99 },
            },
        ],
        options: [
            {
                id: 'size-option',
                name: 'Size',
                values: ['S', 'M', 'L', 'XL'],
            },
        ],
    },
]

const ProductPage = () => {
    const { id } = useParams()
    const { addToCart } = useContext(CartContext)
    const [action, setAction] = React.useState('Add to Cart')
    const product = exampleProducts.find((p) => p.id === id)

    const [currentImage, setCurrentImage] = React.useState(0)
    const [selectedOptions, setSelectedOptions] = React.useState({
        quantity: 1,
        Size: product?.options[0]?.values[0] || '',
    })

    if (!product) return <p>Product not found.</p>

    const cycleImage = (direction) => {
        setCurrentImage((prev) =>
            direction === 'left'
                ? prev === 0
                    ? product.images.length - 1
                    : prev - 1
                : prev === product.images.length - 1
                  ? 0
                  : prev + 1
        )
    }

    const handleAddToCart = () => {
        if (action !== 'Add to Cart') {
            return
        }
        addToCart(product, selectedOptions.quantity, selectedOptions)
        setAction('Added!')
    }

    return (
        <div className='product-page'>
            <div className='pp-imgs-cont'>
                <div className='pp-imgs'>
                    {product.images.map((image, index) => (
                        <img
                            key={image.id}
                            src={image.src}
                            alt={product.title}
                            onClick={() => setCurrentImage(index)}
                        />
                    ))}
                </div>
                <span onClick={() => cycleImage('left')} className='left-arrow'>
                    {'<'}
                </span>
                <div className='current-img-cont'>
                    <img
                        className='current-img'
                        src={product.images[currentImage].src}
                        alt={product.title}
                    />
                </div>
                <span
                    onClick={() => cycleImage('right')}
                    className='right-arrow'
                >
                    {'>'}
                </span>
            </div>
            <div className='product-info'>
                <div className='pp-shop-card'>
                    <h1>{product.title}</h1>
                    <p>
                        {product.variants[0].price.amount.toLocaleString(
                            'en-US',
                            {
                                style: 'currency',
                                currency: 'USD',
                            }
                        )}{' '}
                        {product.variants[0].compareAtPrice && (
                            <span className='compare-at-price'>
                                {' '}
                                {product.variants[0].compareAtPrice.amount.toLocaleString(
                                    'en-US',
                                    { style: 'currency', currency: 'USD' }
                                )}
                            </span>
                        )}
                    </p>
                    <p>{product.description}</p>
                </div>
                <div className='item-options'>
                    {product.options.map((option) => (
                        <div key={option.id}>
                            <h3>{option.name}</h3>
                            <div className='product-option-values'>
                                {option.values.map((value) => (
                                    <div
                                        key={value}
                                        className={
                                            'product-option-value ' +
                                            (selectedOptions[option.name] ===
                                            value
                                                ? 'selected-option'
                                                : '')
                                        }
                                        onClick={() =>
                                            setSelectedOptions({
                                                ...selectedOptions,
                                                [option.name]: value,
                                            })
                                        }
                                    >
                                        {value}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    <div>
                        <h3>Quantity</h3>
                        <div className='product-quantity'>
                            <span
                                onClick={() =>
                                    setSelectedOptions((prev) =>
                                        prev.quantity > 1
                                            ? {
                                                  ...prev,
                                                  quantity: prev.quantity - 1,
                                              }
                                            : prev
                                    )
                                }
                            >
                                {'-'}
                            </span>
                            <p>{selectedOptions.quantity}</p>
                            <span
                                onClick={() =>
                                    setSelectedOptions((prev) => ({
                                        ...prev,
                                        quantity: prev.quantity + 1,
                                    }))
                                }
                            >
                                {'+'}
                            </span>
                        </div>
                    </div>
                </div>
                <button className='add-to-cart' onClick={handleAddToCart}>
                    {action}
                </button>
                <h2 style={{ marginTop: '20px', textAlign: 'center' }}>
                    “If you don't care what people think about you, anywhere is
                    home.”
                </h2>
            </div>
        </div>
    )
}

export default ProductPage
