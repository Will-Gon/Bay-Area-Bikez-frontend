import React from 'react'
import HMB1 from '../MeetImages/HalfMoonBay/HMB1.jpeg'
import HMB2 from '../MeetImages/HalfMoonBay/HMB2.jpeg'
import HMB3 from '../MeetImages/HalfMoonBay/HMB3.jpeg'
import HMB4 from '../MeetImages/HalfMoonBay/HMB4.jpeg'
import HMB5 from '../MeetImages/HalfMoonBay/HMB5.jpeg'
import Dublin1 from '../MeetImages/Dublin/Dublin1.jpeg'
import Dublin2 from '../MeetImages/Dublin/Dublin2.jpeg'
import Dublin3 from '../MeetImages/Dublin/Dublin3.jpeg'
import Dublin4 from '../MeetImages/Dublin/Dublin4.jpeg'
import Dublin5 from '../MeetImages/Dublin/Dublin5.jpeg'

const HMB = () => {
    return (
        <div>
            <h1>HMB Bike Meet</h1>
            <div className='place-meets-wrapper'>
                <div className='bay-area-meets'>
                    <img src={HMB1} alt='Bike Img'/>
                </div>
                <div className='bay-area-meets'>
                    <img src={HMB2} alt='Bike Img'/>
                </div>
                <div className='bay-area-meets'>
                    <img src={HMB3} alt='Bike Img'/>
                </div>
                <div className='bay-area-meets'>
                    <img src={HMB4} alt='Bike Img'/>
                </div>
                <div className='bay-area-meets'>
                    <img src={HMB5} alt='Bike Img'/>
                </div>
                <div className='bay-area-meets'>
                    <img src={Dublin1} alt='Bike Img'/>
                </div>
                <div className='bay-area-meets'>
                    <img src={Dublin2} alt='Bike Img'/>
                </div>
                <div className='bay-area-meets'>
                    <img src={Dublin3} alt='Bike Img'/>
                </div>
                <div className='bay-area-meets'>
                    <img src={Dublin4} alt='Bike Img'/>
                </div>
                <div className='bay-area-meets'>
                    <img src={Dublin5} alt='Bike Img'/>
                </div>
            </div>
        </div>
        
    )
} 

export default HMB