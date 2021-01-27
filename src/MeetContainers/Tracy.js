import React from 'react'
import Tracy1 from '../MeetImages/Tracy/Tracy1.jpeg'
import Tracy2 from '../MeetImages/Tracy/Tracy2.jpeg'
import Tracy3 from '../MeetImages/Tracy/Tracy3.jpeg'
import Tracy4 from '../MeetImages/Tracy/Tracy4.jpeg'
import Tracy5 from '../MeetImages/Tracy/Tracy5.jpeg'
import SanLeandro1 from '../MeetImages/SanLeandro/SanLeandro1.jpeg'
import SanLeandro2 from '../MeetImages/SanLeandro/SanLeandro2.jpeg'
import SanLeandro3 from '../MeetImages/SanLeandro/SanLeandro3.jpeg'
import SanLeandro4 from '../MeetImages/SanLeandro/SanLeandro4.jpeg'
import SanLeandro5 from '../MeetImages/SanLeandro/SanLeandro5.jpeg'

const Tracy = () => {
    return (
        <div className='place-pics'>
            <h1>Tracy Bike Meet</h1>
            <div className='place-meets-wrapper'>
                <div className='bay-area-meets'>
                    <img src={Tracy1} alt='Bike Img'/>
                </div>
                <div className='bay-area-meets'>
                    <img src={Tracy2} alt='Bike Img'/>
                </div>
                <div className='bay-area-meets'>
                    <img src={Tracy3} alt='Bike Img'/>
                </div>
                <div className='bay-area-meets'>
                    <img src={Tracy4} alt='Bike Img'/>
                </div>
                <div className='bay-area-meets'>
                    <img src={Tracy5} alt='Bike Img'/>
                </div>
                <div className='bay-area-meets'>
                    <img src={SanLeandro1} alt='Bike Img'/>
                </div>
                <div className='bay-area-meets'>
                    <img src={SanLeandro2} alt='Bike Img'/>
                </div>
                <div className='bay-area-meets'>
                    <img src={SanLeandro3} alt='Bike Img'/>
                </div>
                <div className='bay-area-meets'>
                    <img src={SanLeandro4} alt='Bike Img'/>
                </div>
                <div className='bay-area-meets'>
                    <img src={SanLeandro5} alt='Bike Img'/>
                </div>
            </div>
        </div>
        
    )
} 

export default Tracy