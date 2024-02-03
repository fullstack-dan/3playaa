import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import HomePage from './Components/HomePage.jsx'
import ShopPage from './Components/ShopPage.jsx'
import AboutPage from './Components/AboutPage.jsx'
import ContactPage from './Components/ContactPage.jsx'

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <main>
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/shop' element={<ShopPage />} />
                        <Route path='/about' element={<AboutPage />} />
                        <Route path='/contact' element={<ContactPage />} />
                    </Routes>
                </main>
                <Footer />
            </Router>
        </>
    )
}

export default App
