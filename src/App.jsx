import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer.jsx'
import NNTPGraphic from './Components/NNTPGraphic.jsx'
import ProductGallery from './Components/ProductGallery.jsx'
import Editorial from './Components/Editorial.jsx'

import products from './products.json'

function App() {
    return (
        <>
            <Navbar />
            <main>
                <NNTPGraphic />
                <Editorial />
                <ProductGallery products={products} />
            </main>
            <Footer />
        </>
    )
}

export default App
