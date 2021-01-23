import React from 'react'
import SanLeandro1 from '../MeetImages/SanLeandro/SanLeandro1.jpeg'
import SanLeandro2 from '../MeetImages/SanLeandro/SanLeandro2.jpeg'
import SanLeandro3 from '../MeetImages/SanLeandro/SanLeandro3.jpeg'
import SanLeandro4 from '../MeetImages/SanLeandro/SanLeandro4.jpeg'
import SanLeandro5 from '../MeetImages/SanLeandro/SanLeandro5.jpeg'

const SanLeandro = () => {
    return (
        <div>
            <h1>San Leandro Bike Meet</h1>
            <div>
                <img src={SanLeandro1} alt='Bike Img'/>
            </div>
            <div>
                <img src={SanLeandro2} alt='Bike Img'/>
            </div>
            <div>
                <img src={SanLeandro3} alt='Bike Img'/>
            </div>
            <div>
                <img src={SanLeandro4} alt='Bike Img'/>
            </div>
            <div>
                <img src={SanLeandro5} alt='Bike Img'/>
            </div>
        </div>
        
    )
} 

export default SanLeandro