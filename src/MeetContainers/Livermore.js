import React from 'react'
import Livermore1 from '../MeetImages/Livermore/Livermore1.jpeg'
import Livermore2 from '../MeetImages/Livermore/Livermore2.jpeg'
import Livermore3 from '../MeetImages/Livermore/Livermore3.jpeg'
import Livermore4 from '../MeetImages/Livermore/Livermore4.jpeg'
import Livermore5 from '../MeetImages/Livermore/Livermore5.jpeg'

const Livermore = () => {
    return (
        <div>
            <h1>Livermore Bike Meet</h1>
            <div>
                <img src={Livermore1} alt='Bike Img'/>
            </div>
            <div>
                <img src={Livermore2} alt='Bike Img'/>
            </div>
            <div>
                <img src={Livermore3} alt='Bike Img'/>
            </div>
            <div>
                <img src={Livermore4} alt='Bike Img'/>
            </div>
            <div>
                <img src={Livermore5} alt='Bike Img'/>
            </div>
        </div>
        
    )
} 

export default Livermore