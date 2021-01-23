import React from 'react'
import Oakland1 from '../MeetImages/Oakland/Oakland1.jpeg'
import Oakland2 from '../MeetImages/Oakland/Oakland2.jpeg'
import Oakland3 from '../MeetImages/Oakland/Oakland3.jpeg'
import Oakland4 from '../MeetImages/Oakland/Oakland4.jpeg'
import Oakland5 from '../MeetImages/Oakland/Oakland5.jpeg'

const Oakland = () => {
    return (
        <div>
            <h1>Oakland Bike Meet</h1>
            <div>
                <img src={Oakland1} alt='Bike Img'/>
            </div>
            <div>
                <img src={Oakland2}  alt='Bike Img'/>
            </div>
            <div>
                <img src={Oakland3}  alt='Bike Img'/>
            </div>
            <div>
                <img src={Oakland4}  alt='Bike Img'/>
            </div>
            <div>
                <img src={Oakland5}  alt='Bike Img'/>
            </div>
        </div>
        
    )
} 

export default Oakland