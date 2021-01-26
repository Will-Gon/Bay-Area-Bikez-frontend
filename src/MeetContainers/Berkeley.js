import React from 'react'
import Berkeley1 from '../MeetImages/Berkeley/Berkeley1.jpeg'
import Berkeley2 from '../MeetImages/Berkeley/Berkeley2.jpeg'
import Berkeley3 from '../MeetImages/Berkeley/Berkeley3.jpeg'
import Berkeley4 from '../MeetImages/Berkeley/Berkeley4.jpeg'
import Berkeley5 from '../MeetImages/Berkeley/Berkeley5.jpeg'
import SanMateo1 from '../MeetImages/SanMateo/SanMateo1.jpeg'
import SanMateo2 from '../MeetImages/SanMateo/SanMateo2.jpeg'
import SanMateo3 from '../MeetImages/SanMateo/SanMateo3.jpeg'
import SanMateo4 from '../MeetImages/SanMateo/SanMateo4.jpeg'
import SanMateo5 from '../MeetImages/SanMateo/SanMateo5.jpeg'
import SanMateo from './SanMateo'

const Berkeley = () => {
    return (
        <div>
            <h1>Berkeley Bike Meet</h1>
            <div className='place-meets-wrapper'>
                <div className='bay-area-meets'>
                    <img src={Berkeley1} alt='Sf Meet Images' />
                </div>
                <div className='bay-area-meets'>
                    <img src={Berkeley2} alt='Sf Meet Images'/>
                </div>
                <div className='bay-area-meets'>
                    <img src={Berkeley3} alt='Sf Meet Images'/>
                </div>
                <div className='bay-area-meets'>
                    <img src={Berkeley4} alt='Sf Meet Images'/>
                </div>
                <div className='bay-area-meets'>
                    <img src={Berkeley5} alt='Sf Meet Images'/>
                </div>
                <div className='bay-area-meets'>
                    <img src={SanMateo1} alt='Sf Meet Images'/>
                </div>
                <div className='bay-area-meets'>
                    <img src={SanMateo2} alt='Sf Meet Images'/>
                </div>
                <div className='bay-area-meets'>
                    <img src={SanMateo3} alt='Sf Meet Images'/>
                </div>
                <div className='bay-area-meets'>
                    <img src={SanMateo4} alt='Sf Meet Images'/>
                </div>
                <div className='bay-area-meets'>
                    <img src={SanMateo5} alt='Sf Meet Images'/>
                </div>
            </div>
        </div>
        
    )
} 

export default Berkeley