import React from 'react'

import './ProductPage.css'

import { ShopContext } from '../App.jsx'
import { useParams } from 'react-router-dom'

const ProductPage = () => {
    const { id } = useParams()
    const { client, checkoutId } = React.useContext(ShopContext)
    const [product, setProduct] = React.useState(null)
    const [currentImage, setCurrentImage] = React.useState(0)
    const [selectedOptions, setSelectedOptions] = React.useState({
        quantity: 1,
    })
    const [actionButton, setActionButton] = React.useState('Add to Cart')
    const [info, setInfo] = React.useState(null)

    React.useEffect(() => {
        const productID = 'gid://shopify/Product/' + id
        client.product
            .fetch(productID)
            .then((product) => {
                setProduct(product)
                setSelectedOptions({
                    ...selectedOptions,
                    [product.options[0].name]:
                        product.options[0].values[0].value,
                })
            })
            .catch((error) => {
                console.error('Error fetching product', error)
            })
    }, [client, id])

    const cycleImage = (direction) => {
        if (direction === 'left') {
            if (currentImage === 0) {
                setCurrentImage(product.images.length - 1)
            } else {
                setCurrentImage(currentImage - 1)
            }
        } else if (direction === 'right') {
            if (currentImage === product.images.length - 1) {
                setCurrentImage(0)
            } else {
                setCurrentImage(currentImage + 1)
            }
        }
    }

    const addToCartOrGoToCart = () => {
        if (actionButton === 'View Cart') {
            window.location.href = '/cart'
            return
        }
        client.checkout.addLineItems(checkoutId, [
            {
                variantId: product.variants.find((variant) =>
                    variant.selectedOptions.every(
                        (option) =>
                            option.value === selectedOptions[option.name]
                    )
                ).id,
                quantity: selectedOptions.quantity,
            },
        ])
        setInfo('Added to Cart')
        setActionButton('View Cart')
    }

    if (!product) return null

    return (
        <div className={'product-page'}>
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
                <span
                    onClick={() => cycleImage('left')}
                    className={'left-arrow'}
                >
                    {'<'}
                </span>
                <div className={'current-img-cont'}>
                    <img
                        className='current-img'
                        src={product.images[currentImage].src}
                        alt={product.title}
                    />
                </div>
                <span
                    onClick={() => cycleImage('right')}
                    className={'right-arrow'}
                >
                    {'>'}
                </span>
            </div>
            <div className={'product-info'}>
                <div className='pp-shop-card'>
                    <h1>{product.title}</h1>
                    <p>
                        $
                        {product.variants[0].price.amount.toLocaleString(
                            'en-US',
                            {
                                style: 'currency',
                                currency: 'USD',
                            }
                        )}{' '}
                        <span className={'compare-at-price'}>
                            {product.variants[0].compareAtPrice &&
                                '$' +
                                    product.variants[0].compareAtPrice.amount.toLocaleString(
                                        'en-US',
                                        {
                                            style: 'currency',
                                            currency: 'USD',
                                        }
                                    )}
                        </span>
                    </p>
                    <p>{product.description}</p>
                </div>
                <div className='item-options'>
                    {product.options.map(
                        (option) =>
                            option.name !== 'Title' && (
                                <div key={option.id}>
                                    <h3>{option.name}</h3>
                                    <div className='product-option-values'>
                                        {option.values.map((value) => (
                                            <div
                                                key={value}
                                                className={
                                                    'product-option-value ' +
                                                    (selectedOptions[
                                                        option.name
                                                    ] === value.value
                                                        ? 'selected-option'
                                                        : '')
                                                }
                                                onClick={() =>
                                                    setSelectedOptions({
                                                        ...selectedOptions,
                                                        [option.name]:
                                                            value.value,
                                                    })
                                                }
                                            >
                                                {value.value}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )
                    )}
                    <div>
                        <h3>{'Count'}</h3>
                        <div className='product-quantity'>
                            <span
                                onClick={() => {
                                    if (selectedOptions.quantity > 1) {
                                        setSelectedOptions({
                                            ...selectedOptions,
                                            quantity:
                                                selectedOptions.quantity - 1,
                                        })
                                    }
                                }}
                            >
                                {'-'}
                            </span>
                            <p>{selectedOptions.quantity}</p>
                            <span
                                onClick={() =>
                                    setSelectedOptions({
                                        ...selectedOptions,
                                        quantity: selectedOptions.quantity + 1,
                                    })
                                }
                            >
                                {'+'}
                            </span>
                        </div>
                    </div>
                </div>
                <p>{info}</p>
                <button
                    className={'add-to-cart'}
                    onClick={() => addToCartOrGoToCart()}
                >
                    {actionButton}
                </button>
            </div>
        </div>
    )
}

export default ProductPage
