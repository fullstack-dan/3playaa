import React, { createContext, useState } from 'react'

// Create context
export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])

    // Add item to cart
    const addToCart = (product, quantity = 1, selectedOptions) => {
        console.log(selectedOptions)
        selectedOptions = Object.entries(selectedOptions).map(
            ([name, values]) => ({
                name,
                values,
            })
        )
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(
                (item) => item.id === product.id
            )
            if (existingItem) {
                return prevItems.map((item) =>
                    item.id === product.id
                        ? {
                              ...item,
                              quantity: item.quantity + quantity,
                              options: selectedOptions,
                          }
                        : item
                )
            }
            return [
                ...prevItems,
                { ...product, quantity, options: selectedOptions },
            ]
        })
    }

    // Update quantity
    const updateQuantity = (productId, quantity) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === productId ? { ...item, quantity } : item
            )
        )
    }

    // Remove item
    const removeItem = (productId) => {
        setCartItems((prevItems) =>
            prevItems.filter((item) => item.id !== productId)
        )
    }

    // Calculate subtotal
    const subtotal = cartItems.reduce(
        (total, item) => total + item.variants[0].price.amount * item.quantity,
        0
    )

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                updateQuantity,
                removeItem,
                subtotal,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}
