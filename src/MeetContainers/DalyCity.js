import React from 'react'
import Daly1 from '../MeetImages/DalyCity/Daly1.jpeg'
import Daly2 from '../MeetImages/DalyCity/Daly2.jpeg'
import Daly3 from '../MeetImages/DalyCity/Daly3.jpeg'
import Daly4 from '../MeetImages/DalyCity/Daly4.jpeg'
import Daly5 from '../MeetImages/DalyCity/Daly5.jpeg'
import Walnut1 from '../MeetImages/WalnutCreek/Walnut1.jpeg'
import Walnut2 from '../MeetImages/WalnutCreek/Walnut2.jpeg'
import Walnut3 from '../MeetImages/WalnutCreek/Walnut3.jpeg'
import Walnut4 from '../MeetImages/WalnutCreek/Walnut4.jpeg'
import Walnut5 from '../MeetImages/WalnutCreek/Walnut5.jpeg'

const DalyCity = () => {
    return (
        <div>
            <h1>Daly City Bike Meet</h1>
            <div className='place-meets-wrapper'>
                <div className='bay-area-meets'>
                    <img src={Daly1} alt='Bike Img'/>
                </div>
                <div className='bay-area-meets'>
                    <img src={Daly2} alt='Bike Img'/>
                </div>
                <div className='bay-area-meets'>
                    <img src={Daly3} alt='Bike Img'/>
                </div>
                <div className='bay-area-meets'>
                    <img src={Daly4} alt='Bike Img'/>
                </div>
                <div className='bay-area-meets'>
                    <img src={Daly5} alt='Bike Img'/>
                </div>
                <div className='bay-area-meets'>
                    <img src={Walnut1} alt='Bike Img'/>
                </div>
                <div className='bay-area-meets'>
                    <img src={Walnut2} alt='Bike Img'/>
                </div>
                <div className='bay-area-meets'>
                    <img src={Walnut3} alt='Bike Img'/>
                </div>
                <div className='bay-area-meets'>
                    <img src={Walnut4} alt='Bike Img'/>
                </div>
                <div className='bay-area-meets'>
                    <img src={Walnut5} alt='Bike Img'/>
                </div>
            </div>
        </div>
        
    )
} 

export default DalyCity