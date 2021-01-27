import React from 'react'
import SanFran1 from '../MeetImages/SanFrancisco/SanFran1.jpeg'
import SanFran2 from '../MeetImages/SanFrancisco/SanFran2.jpeg'
import SanFran3 from '../MeetImages/SanFrancisco/SanFran3.jpeg'
import SanFran4 from '../MeetImages/SanFrancisco/SanFran4.jpeg'
import SanFran5 from '../MeetImages/SanFrancisco/SanFran5.jpeg'
import Richmond1 from '../MeetImages/Richmond/Richmond1.jpeg'
import Richmond2 from '../MeetImages/Richmond/Richmond2.jpeg'
import Richmond3 from '../MeetImages/Richmond/Richmond3.jpeg'
import Richmond4 from '../MeetImages/Richmond/Richmond4.jpeg'
import Richmond5 from '../MeetImages/Richmond/Richmond5.jpeg'

const Sf = (props) => {
    console.log(props.location.pathname.split('/')[1])
    console.log(props.meets)
    return (
        <div>
            <h1>San Francisco Bike Meet</h1>
            <div className='place-meets-wrapper'>
                <div className='bay-area-meets'>
                    <img src={SanFran1} alt='Sf Meet Images' />
                </div>
                <div className='bay-area-meets'>
                    <img src={SanFran2} alt='Sf Meet Images'/>
                </div>
                <div className='bay-area-meets'>
                    <img src={SanFran3} alt='Sf Meet Images'/>
                </div>
                <div className='bay-area-meets'>
                    <img src={SanFran4} alt='Sf Meet Images'/>
                </div>
                <div className='bay-area-meets'>
                    <img src={SanFran5} alt='Sf Meet Images'/>
                </div>
                <div className='bay-area-meets'>
                    <img src={Richmond1} alt='Sf Meet Images'/>
                </div>
                <div className='bay-area-meets'>
                    <img src={Richmond2} alt='Sf Meet Images'/>
                </div>
                <div className='bay-area-meets'>
                    <img src={Richmond3} alt='Sf Meet Images'/>
                </div>
                <div className='bay-area-meets'>
                    <img src={Richmond4} alt='Sf Meet Images'/>
                </div>
                <div className='bay-area-meets'>
                    <img src={Richmond5} alt='Sf Meet Images'/>
                </div>
            </div>
        </div>
        
    )
} 

export default Sf