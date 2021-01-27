import React from 'react'
import SlideShow from '../Slide/SlideShow'
import SlideShow2 from '../Slide/SlideShow2'

const Home = ({user}) => {
    return (
        <div className='home-page'>
            <div className='slide-wrapper'>
                <h1>Bay Area Bike Clubs</h1>
                <div className='slide'>
                    <SlideShow />
                </div>
                <div className='fade'>
                    <SlideShow2 />
                </div>
            </div>
        </div>
    )
}

export default Home