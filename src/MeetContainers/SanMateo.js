import React from 'react'
import SanMateo1 from '../MeetImages/SanMateo/SanMateo1.jpeg'
import SanMateo2 from '../MeetImages/SanMateo/SanMateo2.jpeg'
import SanMateo3 from '../MeetImages/SanMateo/SanMateo3.jpeg'
import SanMateo4 from '../MeetImages/SanMateo/SanMateo4.jpeg'
import SanMateo5 from '../MeetImages/SanMateo/SanMateo5.jpeg'

const SanMateo = () => {
    return (
        <div>
            <h1>San Mateo Bike Meet</h1>
            <div>
                <img src={SanMateo1} alt='Bike Img'/>
            </div>
            <div>
                <img src={SanMateo2} alt='Bike Img'/>
            </div>
            <div>
                <img src={SanMateo3} alt='Bike Img'/>
            </div>
            <div>
                <img src={SanMateo4} alt='Bike Img'/>
            </div>
            <div>
                <img src={SanMateo5} alt='Bike Img'/>
            </div>
        </div>
        
    )
} 

export default SanMateo