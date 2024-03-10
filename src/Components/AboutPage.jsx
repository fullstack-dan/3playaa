import './AboutPage.css'
import ProductGallery from './ProductGallery.jsx'
import React from 'react'

const logoBlack = '/assets/logo-black.png'
const logoColor = '/assets/logo-color.png'
const logoMulti = '/assets/logo-multi.png'
const logoBWMulti = '/assets/BW-logo-multi.png'
const fitymi = '/assets/fitymi.png'

import { ShopContext } from '../App.jsx'

const AboutPage = () => {
    const { client } = React.useContext(ShopContext)
    const [products, setProducts] = React.useState([])
    React.useEffect(() => {
        client.product.fetchAll().then((products) => {
            setProducts(products)
        })
    }, [client])
    return (
        <div className={'about-page'}>
            <div className='about-img-cont'>
                <img src={fitymi} alt='' />
            </div>
            <div className={'about-page-text'}>
                <h1>"Face It Till You Make It"</h1>
                <p>
                    Welcome to <strong>3Playaa</strong>, an Atlanta-born
                    streetwear brand that embodies the spirit of authenticity
                    and resilience. At <strong>3Playaa</strong>, we believe in
                    the power of being true to oneself and facing life's
                    challenges head-on, with style and confidence. Our brand is
                    more than just clothing; it's a lifestyle that celebrates
                    individuality and perseverance.
                    <br />
                    <br />
                    In a world where pretense and conformity is the norm,{' '}
                    <strong>3Playaa</strong> stands as a beacon of authenticity.
                    "No Need To Pretend" is a manifesto that encourages everyone
                    to embrace their true selves. Our designs reflect this
                    philosophy, offering unique, bold, and unapologetic
                    streetwear that allows you to express who you really are.
                    From the bustling streets of Atlanta to the corners of the
                    globe, our apparel is for those who refuse to hide their
                    true colors.
                    <br />
                    <br />
                    The journey to self-discovery and success isn't without its
                    hurdles. Life is about confronting challenges head-on, not
                    as obstacles, but as opportunities to grow and prove
                    oneself. Our collections are designed to be your armor in
                    this battle, combining comfort with the audacity to stand
                    out and face the world head-on. Born in the heart of
                    Atlanta, a city renowned for its rich culture and artistic
                    innovation, <strong>3Playaa</strong> captures the essence of
                    urban life and creativity. Each piece tells a story of
                    triumph, resilience, and the relentless pursuit of
                    authenticity. <strong>3Playaa</strong> isn't just a brand;
                    it's a community of dreamers, believers, and achievers.
                    Welcome to <strong>3Playaa</strong> – where authenticity
                    meets streetwear.
                </p>
            </div>
            <h1>Shop the collection</h1>
            {products.length > 0 && <ProductGallery products={products} />}
        </div>
    )
}

export default AboutPage
