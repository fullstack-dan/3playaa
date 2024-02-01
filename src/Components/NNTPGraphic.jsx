import './NNTPGraphic.css'
import { useEffect } from 'react'

const NONEEDSRC = '/assets/NONEED/'

const NNTPGraphic = () => {
    useEffect(() => {
        // Select all the images
        const images = document.querySelectorAll('.nntpgraphic div img')

        // Create a new Intersection Observer
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // If the image is in the viewport, add the 'fade-in' class
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in')
                    }
                })
            },
            {
                threshold: 0.7, // Adjust this value to control when the animation starts (1.0 means the entire image is in the viewport)
            }
        )

        // Use the Intersection Observer to observe each image
        images.forEach((image) => {
            observer.observe(image)
        })
    }, [])

    return (
        <div className='nntpgraphic'>
            {/*<img*/}
            {/*    className='banner-img'*/}
            {/*    src={NONEEDSRC + 'NN_FULL.png'}*/}
            {/*    alt='banner'*/}
            {/*/>*/}
            <div className='nn_1'>
                <img src={NONEEDSRC + 'NN_1.png'} />
                <img src={NONEEDSRC + 'NN_2.png'} />
            </div>
            <div className='nn_2'>
                <img src={NONEEDSRC + 'NN_3.png'} />
                <img src={NONEEDSRC + 'NN_4.png'} />
            </div>
            <div className='nn_3'>
                <img src={NONEEDSRC + 'NN_5.png'} />
                <img src={NONEEDSRC + 'NN_6.png'} />
            </div>
            <div className='nn_4'>
                <img src={NONEEDSRC + 'NN_7.png'} />
            </div>
            {/*<div className='nn_8'>*/}
            {/*    <img src={NONEEDSRC + 'NN_8.png'} />*/}
            {/*</div>*/}
            {/*<div className='nn_9'>*/}
            {/*    <img src={NONEEDSRC + 'NN_9.png'} />*/}
            {/*</div>*/}
            {}
        </div>
    )
}

export default NNTPGraphic
