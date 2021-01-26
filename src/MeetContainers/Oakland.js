import React from 'react'
import Oakland1 from '../MeetImages/Oakland/Oakland1.jpeg'
import Oakland2 from '../MeetImages/Oakland/Oakland2.jpeg'
import Oakland3 from '../MeetImages/Oakland/Oakland3.jpeg'
import Oakland4 from '../MeetImages/Oakland/Oakland4.jpeg'
import Oakland5 from '../MeetImages/Oakland/Oakland5.jpeg'
import Livermore1 from '../MeetImages/Livermore/Livermore1.jpeg'
import Livermore2 from '../MeetImages/Livermore/Livermore2.jpeg'
import Livermore3 from '../MeetImages/Livermore/Livermore3.jpeg'
import Livermore4 from '../MeetImages/Livermore/Livermore4.jpeg'
import Livermore5 from '../MeetImages/Livermore/Livermore5.jpeg'
import Livermore from './Livermore'

const Oakland = () => {
    return (
        <div>
            <h1>Oakland Bike Meet</h1>
            <div className='place-meets-wrapper'>
                <div className='bay-area-meets'>
                    <img src={Oakland1} alt='Bike Img'/>
                </div>
                <div className='bay-area-meets'>
                    <img src={Oakland2}  alt='Bike Img'/>
                </div>
                <div className='bay-area-meets'>
                    <img src={Oakland3}  alt='Bike Img'/>
                </div>
                <div className='bay-area-meets'>
                    <img src={Oakland4}  alt='Bike Img'/>
                </div>
                <div className='bay-area-meets'>
                    <img src={Oakland5}  alt='Bike Img'/>
                </div>
                <div className='bay-area-meets'>
                    <img src={Livermore1}  alt='Bike Img'/>
                </div>
                <div className='bay-area-meets'>
                    <img src={Livermore2}  alt='Bike Img'/>
                </div>
                <div className='bay-area-meets'>
                    <img src={Livermore3}  alt='Bike Img'/>
                </div>
                <div className='bay-area-meets'>
                    <img src={Livermore4}  alt='Bike Img'/>
                </div>
                <div className='bay-area-meets'>
                    <img src={Livermore5}  alt='Bike Img'/>
                </div>
            </div>
        </div>
        
    )
} 

export default Oakland