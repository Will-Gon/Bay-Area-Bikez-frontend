import React from 'react'
import Harley1 from '../SlideShowImages/Harley1.jpg'
import Harley2 from '../SlideShowImages/Harley2.jpg'
import Harley3 from '../SlideShowImages/Harley3.jpg'
import Harley4 from '../SlideShowImages/Harley4.jpg'

const Bikes = () => {
    return (
        <div>
            <h1>Bikes Page</h1>
            <div className='bike-slides'>
                <img src={Harley1} alt='Bike Club' />
            </div>
            <div className='bike-slides'>
                <img src={Harley2} alt='Bike Club'/>
            </div>
            <div className='bike-slides'>
                <img src={Harley3} alt='Bike Club'/>
            </div>
            <div className='bike-slides'>
                <img src={Harley4} alt='Bike Club'/>
            </div>
        </div>
        
    )
} 

export default Bikes