import './Banner.css'

import noNeed from '../assets/NO_NEED.png'

const Banner = () => {
    return (
        <div className='banner'>
            <img className='banner-img' src={noNeed} alt='banner' />
        </div>
    )
}

export default Banner
