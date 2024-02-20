import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer.jsx'

import Client from 'shopify-buy'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import HomePage from './Components/HomePage.jsx'
import ShopPage from './Components/ShopPage.jsx'
import AboutPage from './Components/AboutPage.jsx'
import ContactPage from './Components/ContactPage.jsx'
import ProductPage from './Components/ProductPage.jsx'
import EmailSignUp from './Components/EmailSignUp.jsx'

import logo from './assets/3PLAYAA_SMALL.png'

export const ShopContext = React.createContext()

// function App() {
//     const client = Client.buildClient({
//         domain: '6bb8b0-da.myshopify.com',
//         storefrontAccessToken: '2dc57f6555629f761c3b62ae161046db',
//     })
//
//     return (
//         <>
//             <ShopContext.Provider value={client}>
//                 <Router>
//                     <Navbar />
//                     <main>
//                         <Routes>
//                             <Route path='/' element={<HomePage />} />
//                             <Route path='/shop' element={<ShopPage />} />
//                             <Route path='/about' element={<AboutPage />} />
//                             <Route path='/contact' element={<ContactPage />} />
//                             <Route
//                                 path='/product/:id'
//                                 element={<ProductPage />}
//                             />
//                         </Routes>
//                     </main>
//                     <Footer />
//                 </Router>
//             </ShopContext.Provider>
//         </>
//     )
// }

function App() {
    const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft())

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

    return (
        <main>
            <div className='landing-page'>
                <div className={'lp-logo-cont'}>
                    <img
                        src={logo}
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
            </div>
        </main>
    )
}

export default App
