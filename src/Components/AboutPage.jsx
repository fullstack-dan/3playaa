import './AboutPage.css'

const logoBlack = '/assets/logo-black.png'
const logoColor = '/assets/logo-color.png'
const logoMulti = '/assets/logo-multi.png'
const logoBWMulti = '/assets/BW-logo-multi.png'
const fitymi = '/assets/fitymi.png'

const AboutPage = () => {
    return (
        <div className={'about-page'}>
            <div className='about-img-cont'>
                <img src={fitymi} alt='' />
            </div>
            <div className={'about-page-text'}>
                <h1>"Face It Till You Make It"</h1>
                <p>
                    Introducing the freshest wave in the streetwear scene,
                    straight out of Atlanta: 3playaa, where Southern charm meets
                    urban edge. Founded in the vibrant heart of Atlanta, 3playaa
                    is not just a brand; it's a movement. With roots deeply
                    embedded in the rich cultural tapestry of the city, we draw
                    inspiration from Atlanta's dynamic music scene, its bustling
                    streets, and the diverse stories of the people who call it
                    home.
                    <br />
                    <br />
                    At 3playaa, we believe in more than just fashion; we stand
                    for expression. Each piece in our collection is designed
                    with the individual in mind, blending bold designs with
                    high-quality materials to create garments that speak to the
                    soul. From sleek hoodies and tees to statement accessories,
                    our designs are a nod to the city's legacy of innovation and
                    resilience.
                    <br />
                    <br />
                    But 3playaa is more than just clothing. It's about
                    community. We're committed to supporting local artists and
                    creatives, providing a platform for talent to shine and
                    stories to be shared. By wearing 3playaa, you're not just
                    making a statement; you're becoming part of a larger
                    narrative, one that celebrates the spirit of Atlanta and the
                    power of individuality.
                    <br />
                    <br />
                    Join us as we pave the way for a new era of streetwear,
                    where every stitch tells a story and every garment is a
                    canvas for self-expression. Wear it loud, wear it proud, and
                    let 3playaa be your armor in the urban jungle. This is not
                    just fashion. This is rebellion, this is art, this is
                    3playaa. Welcome to the family.
                </p>
            </div>
        </div>
    )
}

export default AboutPage
