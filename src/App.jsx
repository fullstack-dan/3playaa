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

function App() {
    const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft())
    const [allowAccess, setAllowAccess] = React.useState(false)

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000)
        return () => clearTimeout(timer)
    })

    function calculateTimeLeft() {
        let year = new Date().getFullYear()
        const difference =
            +new Date(`02/29/${year >= 2024 ? year : 2024}`) - +new Date()
        let timeLeft = {}

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            }
        }

        for (let key in timeLeft) {
            if (timeLeft[key] === 0) {
                timeLeft[key] = '0'
            }
        }

        return timeLeft
    }

    const timerComponents = []

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
            return
        }

        timerComponents.push(
            <div key={interval}>
                <span>{timeLeft[interval]}</span>
                <span>{interval}</span>
            </div>
        )
    })

    // Main store components
    const client = useMemo(
        () =>
            Client.buildClient({
                domain: '6bb8b0-da.myshopify.com',
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

    const storePassword = import.meta.env.VITE_APP_STORE_PASSWORD
    const passwordAttempt = localStorage.getItem('storePassword')

    React.useEffect(() => {
        const lastAccessed = localStorage.getItem('lastAccessed')
        const now = new Date()
        const timeDifference = now - new Date(lastAccessed)

        if (passwordAttempt === storePassword && timeDifference < 600000) {
            setAllowAccess(true)
        } else {
            setAllowAccess(false)
        }
    }, [])

    return (
        <>
            {allowAccess ? (
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
                <div className='landing-page'>
                    <div className={'lp-logo-cont'}>
                        <img
                            src={'/assets/3PLAYAA.png'}
                            alt='3Playaa'
                            className='landing-page-logo'
                        />
                    </div>
                    <div className={'countdown'}>
                        {timerComponents.length ? (
                            timerComponents
                        ) : (
                            <span>Coming soon...</span>
                        )}
                    </div>
                    <EmailSignUp />
                    <button
                        onClick={() => {
                            const password = prompt('Enter store password')
                            if (password === storePassword) {
                                localStorage.setItem('storePassword', password)
                                localStorage.setItem('lastAccessed', new Date())
                                setAllowAccess(true)
                                window.location.reload()
                            }
                        }}
                        style={{
                            marginTop: '20px',
                        }}
                    >
                        View Store
                    </button>
                </div>
            )}
        </>
    )
}

export default App
