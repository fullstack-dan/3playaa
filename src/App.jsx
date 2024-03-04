import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer.jsx'

import Client from 'shopify-buy'
import React, { useMemo } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import HomePage from './Components/HomePage.jsx'
import ShopPage from './Components/ShopPage.jsx'
import AboutPage from './Components/AboutPage.jsx'
import ContactPage from './Components/ContactPage.jsx'
import ProductPage from './Components/ProductPage.jsx'
import CartPage from './Components/CartPage.jsx'
import EmailSignUp from './Components/EmailSignUp.jsx'

export const ShopContext = React.createContext()

const currentVersion = import.meta.env.VITE_APP_VERSION

function checkAndUpdateLocalStorage() {
    const browserVersion = JSON.parse(localStorage.getItem('currentVersion'))

    if (browserVersion && browserVersion === currentVersion) {
    } else {
        localStorage.clear()
        localStorage.setItem('currentVersion', JSON.stringify(currentVersion))
    }
}

function App() {
    const [showStore, setShowStore] = React.useState(false)
    React.useEffect(() => {
        checkAndUpdateLocalStorage()
    }, [])

    const client = useMemo(
        () =>
            Client.buildClient({
                domain: 'shop.justbeyours3lf.com',
                storefrontAccessToken: import.meta.env
                    .VITE_APP_STOREFRONT_ACCESS_TOKEN,
            }),
        []
    )

    if (!localStorage.getItem('checkoutId')) {
        client.checkout.create().then((checkout) => {
            localStorage.setItem('checkoutId', checkout.id)
        })
    }

    const checkoutId = localStorage.getItem('checkoutId')

    React.useEffect(() => {
        if (localStorage.getItem('allowAccess')) {
            if (localStorage.getItem('lastAccess')) {
                const lastAccessDate = new Date(
                    localStorage.getItem('lastAccess')
                )
                const now = new Date()

                if (now - lastAccessDate < 1000 * 60 * 10) {
                    setShowStore(true)
                } else {
                    setShowStore(false)
                    localStorage.setItem('allowAccess', 'false')
                    localStorage.removeItem('lastAccess')
                }
            } else {
                setShowStore(false)
            }
        }
    }, [])

    return (
        <>
            {showStore ? (
                <ShopContext.Provider value={{ client, checkoutId }}>
                    <Router>
                        <Navbar />
                        <Routes>
                            <Route path='/' element={<HomePage />} />
                            <Route path='/shop' element={<ShopPage />} />
                            <Route path='/about' element={<AboutPage />} />
                            <Route path='/contact' element={<ContactPage />} />
                            <Route
                                path='/products/:id'
                                element={<ProductPage />}
                            />
                            <Route path='/cart' element={<CartPage />} />
                        </Routes>
                        <Footer />
                    </Router>
                </ShopContext.Provider>
            ) : (
                <div className={'landing-page'}>
                    <img
                        src='/assets/3PLAYAA.png'
                        alt='3Playaa'
                        className='landing-page-logo'
                    />
                    <EmailSignUp />
                </div>
            )}
        </>
    )
}

export default App
