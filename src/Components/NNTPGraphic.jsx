import './NNTPGraphic.css'
import { useEffect } from 'react'
import contactPage from './ContactPage.jsx'

const NONEEDSRC = '/assets/NONEED/'

const NNTPGraphic = () => {
    useEffect(() => {
        const images = document.querySelectorAll('.nntpgraphic div img')

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in')
                    }
                })
            },
            {
                threshold: 0.8,
            }
        )

        images.forEach((image) => {
            observer.observe(image)
        })
    }, [])

    return (
        <div className='nntpgraphic-cont'>
            <div className='nntpgraphic'>
                {/*<img*/}
                {/*    className='banner-img'*/}
                {/*    src={NONEEDSRC + 'NN_FULL.png'}*/}
                {/*    alt='banner'*/}
                {/*/>*/}
                <div>
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
                        <div></div>
                    </div>
                </div>
                {/*<div className='nn_8'>*/}
                {/*    <img src={NONEEDSRC + 'NN_8.png'} />*/}
                {/*</div>*/}
                {/*<div className='nn_9'>*/}
                {/*    <img src={NONEEDSRC + 'NN_9.png'} />*/}
                {/*</div>*/}
                {}
            </div>
        </div>
    )
}

export default NNTPGraphic
