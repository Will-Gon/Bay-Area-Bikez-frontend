import React from 'react'
import Dublin1 from '../MeetImages/Dublin/Dublin1.jpeg'
import Dublin2 from '../MeetImages/Dublin/Dublin2.jpeg'
import Dublin3 from '../MeetImages/Dublin/Dublin3.jpeg'
import Dublin4 from '../MeetImages/Dublin/Dublin4.jpeg'
import Dublin5 from '../MeetImages/Dublin/Dublin5.jpeg'

const Dublin = () => {
    return (
        <div>
            <h1>Dublin Bike Meet</h1>
            <div>
                <img src={Dublin1} alt='Bike Img'/>
            </div>
            <div>
                <img src={Dublin2}  alt='Bike Img'/>
            </div>
            <div>
                <img src={Dublin3}  alt='Bike Img'/>
            </div>
            <div>
                <img src={Dublin4}  alt='Bike Img'/>
            </div>
            <div>
                <img src={Dublin5}  alt='Bike Img'/>
            </div>
        </div>
        
    )
} 

export default Dublin