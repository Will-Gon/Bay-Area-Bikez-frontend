import React from 'react'
import Harley1 from '../SlideShowImages/Harley1.jpg'
import Harley2 from '../SlideShowImages/Harley2.jpg'
import Harley3 from '../SlideShowImages/Harley3.jpg'
import Harley4 from '../SlideShowImages/Harley4.jpg'
import Harley5 from '../MotorcycleImages/Harley5.jpeg'
import Harley6 from '../MotorcycleImages/Harley6.jpeg'
import Gsxr7 from '../MotorcycleImages/Gsxr7.jpeg'
import Gsxr8 from '../MotorcycleImages/Gsxr8.jpeg'
import Gsxr9 from '../MotorcycleImages/Gsxr9.jpeg'
import Gsxr10 from '../MotorcycleImages/Gsxr10.jpeg'


const Bikes = () => {
    return (
        <div className='bikes-page'>
            <h1>Bikes Page</h1>
            <div className='place-meets-wrapper'>
                <div className='bay-area-meets'>
                    <img src={Harley1} alt='Bike Club' />
                </div>
                <div className='bay-area-meets'>
                    <img src={Harley2} alt='Bike Club'/>
                </div>
                <div className='bay-area-meets'>
                    <img src={Harley3} alt='Bike Club'/>
                </div>
                <div className='bay-area-meets'>
                    <img src={Harley4} alt='Bike Club'/>
                </div>
                <div className='bay-area-meets'>
                    <img src={Harley5} alt='Bike Club'/>
                </div>
                <div className='bay-area-meets'>
                    <img src={Harley6} alt='Bike Club'/>
                </div>
                <div className='bay-area-meets'>
                    <img src={Gsxr7} alt='Bike Club'/>
                </div>
                <div className='bay-area-meets'>
                    <img src={Gsxr8} alt='Bike Club'/>
                </div>
                <div className='bay-area-meets'>
                    <img src={Gsxr9} alt='Bike Club'/>
                </div>
                <div className='bay-area-meets'>
                    <img src={Gsxr10} alt='Bike Club'/>
                </div>
            </div>
        </div>
        
    )
} 

export default Bikes