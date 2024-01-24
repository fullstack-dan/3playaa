import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer.jsx'
import Banner from './Components/Banner.jsx'
import ProductGallery from './Components/ProductGallery.jsx'

import products from './products.json'

function App() {
    return (
        <>
            <Navbar />
            <main>
                <Banner />
                <ProductGallery product={products} />
            </main>
            <Footer />
        </>
    )
}

export default App
