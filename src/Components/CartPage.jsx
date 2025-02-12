import React, { useContext } from 'react'
import './CartPage.css'
import { CartContext } from '../Components/CartContext.jsx'
import TrashIcon from './Icons/TrashIcon.jsx'
import { Link } from 'react-router-dom'

const CartPage = () => {
    const { cartItems, updateQuantity, removeItem, subtotal } =
        useContext(CartContext)

    return (
        <div className={'cart-page'}>
            <div className='cart-items'>
                <h1>Your Cart</h1>
                {cartItems.length === 0 && (
                    <h3>
                        Nothing here yet...{' '}
                        <Link to={'/shop'} className={'custom-link'}>
                            let's change that.
                        </Link>
                    </h3>
                )}
                {cartItems.map((item) => (
                    <div key={item.id} className='cart-item'>
                        <img src={item.images[0].src} alt={item.title} />
                        <div className='cart-item-details'>
                            <div className='cart-item-info'>
                                <h3>{item.title}</h3>
                                <p>
                                    ${item.variants[0].price.amount.toFixed(2)}
                                </p>
                                {item.options.map((option) => (
                                    <p key={option.name}>
                                        {option.name}: {option.values[0]}
                                    </p>
                                ))}
                                <div className='product-quantity'>
                                    <span
                                        onClick={() =>
                                            item.quantity > 1
                                                ? updateQuantity(
                                                      item.id,
                                                      item.quantity - 1
                                                  )
                                                : removeItem(item.id)
                                        }
                                    >
                                        {'-'}
                                    </span>
                                    <p>{item.quantity}</p>
                                    <span
                                        onClick={() =>
                                            updateQuantity(
                                                item.id,
                                                item.quantity + 1
                                            )
                                        }
                                    >
                                        {'+'}
                                    </span>
                                </div>
                            </div>
                            <div className={'cart-item-price-cont'}>
                                <p className={'cart-item-price'}>
                                    $
                                    {(
                                        item.variants[0].price.amount *
                                        item.quantity
                                    ).toFixed(2)}
                                </p>
                                <div onClick={() => removeItem(item.id)}>
                                    <TrashIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='cart-info'>
                <h1>Order Summary</h1>
                <h3 className='cart-subtotal'>
                    Subtotal: ${subtotal.toFixed(2)}
                </h3>
                <h3>Taxes and shipping calculated at checkout.</h3>
                <button
                    className='checkout-button'
                    onClick={() => alert('Oops! This is a demo site :)')}
                >
                    Checkout
                </button>
            </div>
        </div>
    )
}

export default CartPage
