import React from 'react'
import SanFran1 from '../MeetImages/SanFrancisco/SanFran1.jpeg'
import SanFran2 from '../MeetImages/SanFrancisco/SanFran2.jpeg'
import SanFran3 from '../MeetImages/SanFrancisco/SanFran3.jpeg'
import SanFran4 from '../MeetImages/SanFrancisco/SanFran4.jpeg'
import SanFran5 from '../MeetImages/SanFrancisco/SanFran5.jpeg'

const Sf = (props) => {
    console.log(props.location.pathname.split('/')[1])
    console.log(props.meets)
    return (
        <div>
            <h1>San Francisco Bike Meet</h1>
            <div className='sf-meet'>
                <img src={SanFran1} alt='Sf Meet Images' />
            </div>
            <div className='sf-meet'>
                <img src={SanFran2} alt='Sf Meet Images'/>
            </div>
            <div className='sf-meet'>
                <img src={SanFran3} alt='Sf Meet Images'/>
            </div>
            <div className='sf-meet'>
                <img src={SanFran4} alt='Sf Meet Images'/>
            </div>
            <div className='sf-meet'>
                <img src={SanFran5} alt='Sf Meet Images'/>
            </div>
        </div>
        
    )
} 

export default Sf