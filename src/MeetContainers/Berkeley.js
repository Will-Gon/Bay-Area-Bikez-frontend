import React from 'react'
import Berkeley1 from '../MeetImages/Berkeley/Berkeley1.jpeg'
import Berkeley2 from '../MeetImages/Berkeley/Berkeley2.jpeg'
import Berkeley3 from '../MeetImages/Berkeley/Berkeley3.jpeg'
import Berkeley4 from '../MeetImages/Berkeley/Berkeley4.jpeg'
import Berkeley5 from '../MeetImages/Berkeley/Berkeley5.jpeg'

const Berkeley = () => {
    return (
        <div>
            <h1>Berkeley Bike Meet</h1>
            <div className='sf-meet'>
                <img src={Berkeley1} alt='Sf Meet Images' />
            </div>
            <div className='sf-meet'>
                <img src={Berkeley2} alt='Sf Meet Images'/>
            </div>
            <div className='sf-meet'>
                <img src={Berkeley3} alt='Sf Meet Images'/>
            </div>
            <div className='sf-meet'>
                <img src={Berkeley4} alt='Sf Meet Images'/>
            </div>
            <div className='sf-meet'>
                <img src={Berkeley5} alt='Sf Meet Images'/>
            </div>
        </div>
        
    )
} 

export default Berkeley