import React from 'react'
import SanMateo1 from '../MeetImages/SanMateo/SanMateo1.jpeg'
import SanMateo2 from '../MeetImages/SanMateo/SanMateo2.jpeg'
import SanMateo3 from '../MeetImages/SanMateo/SanMateo3.jpeg'
import SanMateo4 from '../MeetImages/SanMateo/SanMateo4.jpeg'
import SanMateo5 from '../MeetImages/SanMateo/SanMateo5.jpeg'
import Berkeley1 from '../MeetImages/Berkeley/Berkeley1.jpeg'
import Berkeley2 from '../MeetImages/Berkeley/Berkeley2.jpeg'
import Berkeley3 from '../MeetImages/Berkeley/Berkeley3.jpeg'
import Berkeley4 from '../MeetImages/Berkeley/Berkeley4.jpeg'
import Berkeley5 from '../MeetImages/Berkeley/Berkeley5.jpeg'

const SanMateo = () => {
    return (
        <div>
            <h1>San Mateo Bike Meet</h1>
            <div className='place-meets-wrapper'>
                <div className='bay-area-meets'>
                    <img src={SanMateo1} alt='Bike Img'/>
                </div>
                <div className='bay-area-meets'>
                    <img src={SanMateo2} alt='Bike Img'/>
                </div>
                <div className='bay-area-meets'>
                    <img src={SanMateo3} alt='Bike Img'/>
                </div>
                <div className='bay-area-meets'>
                    <img src={SanMateo4} alt='Bike Img'/>
                </div>
                <div className='bay-area-meets'>
                    <img src={SanMateo5} alt='Bike Img'/>
                </div>
                <div className='bay-area-meets'>
                    <img src={Berkeley1} alt='Bike Img'/>
                </div>
                <div className='bay-area-meets'>
                    <img src={Berkeley2} alt='Bike Img'/>
                </div>
                <div className='bay-area-meets'>
                    <img src={Berkeley3} alt='Bike Img'/>
                </div>
                <div className='bay-area-meets'>
                    <img src={Berkeley4} alt='Bike Img'/>
                </div>
                <div className='bay-area-meets'>
                    <img src={Berkeley5} alt='Bike Img'/>
                </div>
            </div>
        </div>
        
    )
} 

export default SanMateo