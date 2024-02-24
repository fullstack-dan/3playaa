import React from 'react'
import './CartPage.css'
import { ShopContext } from '../App.jsx'

const CartPage = () => {
    const { client, checkoutId } = React.useContext(ShopContext)
    const [checkout, setCheckout] = React.useState(null)
    const [lineItems, setLineItems] = React.useState([])
    const [subtotal, setSubtotal] = React.useState(0)

    React.useEffect(() => {
        client.checkout.fetch(checkoutId).then((checkout) => {
            if (checkout.completedAt) {
                client.checkout.create().then((newCheckout) => {
                    localStorage.setItem('checkoutId', newCheckout.id)
                })
            } else {
                setCheckout(checkout)
                setLineItems(checkout.lineItems)
                setSubtotal(checkout.totalPrice.amount)
            }
        })
    }, [client, checkoutId])

    const updateQuantity = (lineItemId, quantity) => {
        client.checkout
            .updateLineItems(checkoutId, [
                {
                    id: lineItemId,
                    quantity: quantity,
                },
            ])
            .then((checkout) => {
                setCheckout(checkout)
                setLineItems(checkout.lineItems)
                setSubtotal(checkout.totalPrice.amount)
            })
    }

    const removeItem = (lineItemId) => {
        client.checkout
            .removeLineItems(checkoutId, [lineItemId])
            .then((checkout) => {
                setCheckout(checkout)
                setLineItems(checkout.lineItems)
                setSubtotal(checkout.totalPrice.amount)
            })
    }

    return (
        <div className={'cart-page'}>
            <div className='cart-items'>
                <h1>Your Cart</h1>
                {lineItems.map((item) => (
                    <div key={item.id} className='cart-item'>
                        <img src={item.variant.image.src} alt={item.title} />
                        <div className='cart-item-details'>
                            <div>
                                <h3>{item.title}</h3>
                                <p>${item.variant.price.amount}</p>
                                {item.variant.selectedOptions.map((option) => (
                                    <p key={option.name}>
                                        {option.name}: {option.value}
                                    </p>
                                ))}
                                <div className='product-quantity'>
                                    <span
                                        onClick={() => {
                                            if (item.quantity > 1) {
                                                updateQuantity(
                                                    item.id,
                                                    item.quantity - 1
                                                )
                                            } else {
                                                removeItem(item.id)
                                            }
                                        }}
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
                            <p className={'cart-item-price'}>
                                ${item.variant.price.amount * item.quantity}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='cart-info'>
                <h1>Order Summary</h1>
                <h3 className='cart-subtotal'>Subtotal: ${subtotal}</h3>
                <h3>Taxes and shipping calculated at checkout.</h3>
                <button
                    className='checkout-button'
                    onClick={() => {
                        window.open(checkout.webUrl)
                    }}
                >
                    Checkout
                </button>
            </div>
        </div>
    )
}

export default CartPage
