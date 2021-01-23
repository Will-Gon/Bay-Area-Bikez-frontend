import React from 'react'
import HMB1 from '../MeetImages/HalfMoonBay/HMB1.jpeg'
import HMB2 from '../MeetImages/HalfMoonBay/HMB2.jpeg'
import HMB3 from '../MeetImages/HalfMoonBay/HMB3.jpeg'
import HMB4 from '../MeetImages/HalfMoonBay/HMB4.jpeg'
import HMB5 from '../MeetImages/HalfMoonBay/HMB5.jpeg'

const HMB = () => {
    return (
        <div>
            <h1>HMB Bike Meet</h1>
            <div>
                <img src={HMB1} alt='Bike Img'/>
            </div>
            <div>
                <img src={HMB2} alt='Bike Img'/>
            </div>
            <div>
                <img src={HMB3} alt='Bike Img'/>
            </div>
            <div>
                <img src={HMB4} alt='Bike Img'/>
            </div>
            <div>
                <img src={HMB5} alt='Bike Img'/>
            </div>
        </div>
        
    )
} 

export default HMB