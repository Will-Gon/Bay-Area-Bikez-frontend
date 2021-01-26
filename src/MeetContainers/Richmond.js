import React from 'react'
import Richmond1 from '../MeetImages/Richmond/Richmond1.jpeg'
import Richmond2 from '../MeetImages/Richmond/Richmond2.jpeg'
import Richmond3 from '../MeetImages/Richmond/Richmond3.jpeg'
import Richmond4 from '../MeetImages/Richmond/Richmond4.jpeg'
import Richmond5 from '../MeetImages/Richmond/Richmond5.jpeg'

const Richmond = () => {
    return (
        <div>
            <h1>Richmond Bike Meet</h1>
            <div className='place-meets-wrapper'>
                <div className='bay-area-meets'>
                    <img src={Richmond1} alt='Bike Img'/>
                </div>
                <div className='bay-area-meets'>
                    <img src={Richmond2} alt='Bike Img'/>
                </div>
                <div className='bay-area-meets'>
                    <img src={Richmond3} alt='Bike Img'/>
                </div>
                <div className='bay-area-meets'>
                    <img src={Richmond4} alt='Bike Img'/>
                </div>
                <div className='bay-area-meets'>
                    <img src={Richmond5} alt='Bike Img'/>
                </div>
            </div>
        </div>
        
    )
} 

export default Richmond